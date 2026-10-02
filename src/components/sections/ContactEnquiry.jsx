import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { siteInfo, classesList, statesList, countryCodes, consentText } from '../../data/index.js';
import { useOtpFlow } from '../../hooks/index.js';
import { Button } from '../ui/Button.jsx';

/**
 * Section B: Contact Us & Enquire Now
 * Single-form admissions enquiry matching live website structure with isolated OTP verification flow.
 */
export function ContactEnquiry() {
  const otp = useOtpFlow();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+91',
    mobile: '',
    otpCode: '',
    selectedClass: '',
    selectedState: '',
    agreed: false,
  });

  const [formErrors, setFormErrors] = useState({});
  const [submissionState, setSubmissionState] = useState({
    submitting: false,
    success: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSendOtp = () => {
    const success = otp.sendOtp(formData.mobile);
    if (!success) {
      setFormErrors((prev) => ({ ...prev, mobile: 'Enter a valid 10-digit mobile number' }));
    }
  };

  const handleVerifyOtp = () => {
    const success = otp.verifyOtp(formData.otpCode);
    if (!success) {
      setFormErrors((prev) => ({ ...prev, otpCode: 'Enter valid OTP' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required.';
    if (!formData.mobile || formData.mobile.replace(/\D/g, '').length < 10) {
      errors.mobile = 'Valid 10-digit phone is required.';
    }
    if (!otp.isVerified) {
      errors.otpCode = 'Please verify your phone with OTP first.';
    }
    if (!formData.selectedClass) errors.selectedClass = 'Please select a class.';
    if (!formData.selectedState) errors.selectedState = 'Please select your state.';
    if (!formData.agreed) errors.agreed = 'You must agree to continue.';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setSubmissionState({ submitting: true, success: false, message: '' });

    // Client-side mock submission delay
    setTimeout(() => {
      setSubmissionState({
        submitting: false,
        success: true,
        message: 'Thank you! Your enquiry has been received. Our Admissions Officer will contact you within 24 hours.',
      });
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        countryCode: '+91',
        mobile: '',
        otpCode: '',
        selectedClass: '',
        selectedState: '',
        agreed: false,
      });
      otp.resetOtp();
    }, 1000);
  };

  return (
    <section
      id="enquiry"
      aria-labelledby="contact-enquiry-heading"
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary via-[#9A011E] to-[#7B1F38] text-white overflow-hidden"
    >
      {/* Background aerial image with subtle transparency */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <img
          src="/assets/campus/schooltopview.webp"
          alt=""
          width="1920"
          height="1080"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Rounded light-teal glass container (#90CCD0 / #BEE2E4) */}
        <div className="bg-[#90CCD0]/90 dark:bg-[#1A0D11]/90 backdrop-blur-md rounded-28 border border-white/30 p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left White Card: "Contact Us." */}
            <div className="lg:col-span-5 bg-white text-zinc-900 rounded-24 p-6 sm:p-8 shadow-xl flex flex-col justify-between border border-black/5">
              <div className="space-y-6">
                <div>
                  <span className="font-heading font-extrabold uppercase text-xs tracking-widest text-primary block mb-1">
                    Get in Touch
                  </span>
                  <h3
                    id="contact-enquiry-heading"
                    className="font-heading font-extrabold uppercase text-3xl sm:text-4xl text-primary tracking-tight"
                  >
                    Contact Us.
                  </h3>
                </div>

                <div className="space-y-5 text-sm font-body">
                  {/* Helpline */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-heading font-bold uppercase text-xs text-muted">
                        Admission Helpline No.
                      </span>
                      <a href={siteInfo.helplineTel} className="font-bold text-primary text-base hover:underline">
                        {siteInfo.helpline}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-secondary/20 text-secondary-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-heading font-bold uppercase text-xs text-muted">
                        Official Inquiries Email
                      </span>
                      <a href={siteInfo.emailMailto} className="font-medium text-zinc-800 hover:text-primary hover:underline">
                        {siteInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-heading font-bold uppercase text-xs text-muted">
                        Campus Address
                      </span>
                      <a
                        href={siteInfo.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-700 leading-snug hover:text-primary transition-colors block"
                      >
                        {siteInfo.address}
                      </a>
                    </div>
                  </div>

                  {/* Landlines */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-secondary/20 text-secondary-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-heading font-bold uppercase text-xs text-muted">
                        Landline No.
                      </span>
                      <span className="text-zinc-800 font-medium">
                        {siteInfo.landlines.join(', ')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* TIS Logo Bottom */}
              <div className="pt-8 border-t border-black/10 mt-8 flex items-center gap-3">
                <img
                  src="/assets/brand/schoollogo.png"
                  alt="TIS Crest"
                  width="50"
                  height="50"
                  loading="lazy"
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <span className="font-heading font-extrabold uppercase text-xs tracking-wider block text-primary">
                    Tulas International School
                  </span>
                  <span className="text-[11px] font-display italic text-muted">
                    The Modern Gurukul • Dehradun
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Enquire Now Single Form */}
            <div className="lg:col-span-7 text-zinc-900 dark:text-white flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="font-heading font-black uppercase text-3xl sm:text-4xl text-primary tracking-tight">
                  Enquire Now!
                </h3>
                <div className="w-20 h-1 bg-primary rounded-full mt-1.5" />
                <p className="font-body text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 mt-2">
                  Take the first step towards your child's transformative educational journey at TIS.
                </p>
              </div>

              {submissionState.success ? (
                <div className="bg-white dark:bg-surface rounded-24 p-8 border border-emerald-500/30 text-center space-y-4 shadow-lg">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h4 className="font-heading font-extrabold uppercase text-xl text-primary">
                    Enquiry Submitted Successfully
                  </h4>
                  <p className="font-body text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {submissionState.message}
                  </p>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => setSubmissionState({ submitting: false, success: false, message: '' })}
                  >
                    Submit Another Enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="sr-only">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your Full Name..."
                      className="w-full px-4 py-3 rounded-20 bg-white text-zinc-900 border border-black/10 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm font-body shadow-sm placeholder:text-zinc-400"
                    />
                    {formErrors.fullName && (
                      <p className="text-red-600 text-xs font-heading font-bold mt-1 pl-2">
                        {formErrors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Email Id (Optional)"
                      className="w-full px-4 py-3 rounded-20 bg-white text-zinc-900 border border-black/10 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm font-body shadow-sm placeholder:text-zinc-400"
                    />
                  </div>

                  {/* Phone + Country Code + Send OTP */}
                  <div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <label htmlFor="countryCode" className="sr-only">
                        Country Dialing Code
                      </label>
                      <select
                        id="countryCode"
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="sm:w-36 px-3 py-3 rounded-20 bg-white text-zinc-900 border border-black/10 focus:border-primary focus:ring-2 focus:ring-primary/20 text-xs sm:text-sm font-body shadow-sm"
                      >
                        {countryCodes.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.flag} {c.code} ({c.country})
                          </option>
                        ))}
                      </select>

                      <div className="flex-1 relative">
                        <label htmlFor="mobile" className="sr-only">
                          Mobile Number
                        </label>
                        <input
                          id="mobile"
                          name="mobile"
                          type="tel"
                          maxLength="12"
                          value={formData.mobile}
                          onChange={handleChange}
                          placeholder="Enter your Mobile No..."
                          className="w-full px-4 py-3 rounded-20 bg-white text-zinc-900 border border-black/10 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm font-body shadow-sm placeholder:text-zinc-400"
                        />
                      </div>

                      <Button
                        variant="black-pill"
                        size="md"
                        onClick={handleSendOtp}
                        disabled={otp.isSending || (otp.isSent && !otp.canResend) || otp.isVerified}
                        className="sm:w-36 !py-2.5 !text-xs whitespace-nowrap"
                      >
                        {otp.isSending
                          ? 'Sending...'
                          : otp.isSent && !otp.canResend
                          ? `Resend (${otp.countdown}s)`
                          : otp.isVerified
                          ? 'Verified'
                          : 'Send OTP'}
                      </Button>
                    </div>
                    {formErrors.mobile && (
                      <p className="text-red-600 text-xs font-heading font-bold mt-1 pl-2">
                        {formErrors.mobile}
                      </p>
                    )}
                  </div>

                  {/* OTP Input + Verify OTP button (visible once OTP is requested) */}
                  {(otp.isSent || otp.isVerifying || otp.isVerified) && (
                    <div className="p-3.5 rounded-20 bg-white/70 dark:bg-black/30 border border-secondary/40 space-y-2">
                      <div className="flex gap-2">
                        <label htmlFor="otpCode" className="sr-only">
                          Enter OTP
                        </label>
                        <input
                          id="otpCode"
                          name="otpCode"
                          type="text"
                          maxLength="6"
                          disabled={otp.isVerified}
                          value={formData.otpCode}
                          onChange={handleChange}
                          placeholder="Enter OTP (Demo: 1234)..."
                          className="flex-1 px-4 py-2.5 rounded-20 bg-white text-zinc-900 border border-black/10 text-sm font-body shadow-sm"
                        />

                        <Button
                          variant="black-pill"
                          size="md"
                          onClick={handleVerifyOtp}
                          disabled={otp.isVerifying || otp.isVerified}
                          className="!py-2 !text-xs"
                        >
                          {otp.isVerifying ? 'Checking...' : otp.isVerified ? 'Verified ✓' : 'Verify OTP'}
                        </Button>
                      </div>

                      {otp.isVerified && (
                        <p className="text-emerald-700 dark:text-emerald-400 text-xs font-heading font-bold flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Phone number verified successfully!</span>
                        </p>
                      )}
                      {otp.error && (
                        <p className="text-red-600 text-xs font-heading font-bold flex items-center gap-1.5">
                          <AlertCircle className="w-4 h-4" />
                          <span>{otp.error}</span>
                        </p>
                      )}
                    </div>
                  )}

                  {/* Class Selection & State Selection Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Class */}
                    <div>
                      <label htmlFor="selectedClass" className="sr-only">
                        Select Class
                      </label>
                      <select
                        id="selectedClass"
                        name="selectedClass"
                        value={formData.selectedClass}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-20 bg-white text-zinc-900 border border-black/10 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm font-body shadow-sm"
                      >
                        <option value="">Select Class</option>
                        {classesList.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      {formErrors.selectedClass && (
                        <p className="text-red-600 text-xs font-heading font-bold mt-1 pl-2">
                          {formErrors.selectedClass}
                        </p>
                      )}
                    </div>

                    {/* State */}
                    <div>
                      <label htmlFor="selectedState" className="sr-only">
                        Select State
                      </label>
                      <select
                        id="selectedState"
                        name="selectedState"
                        value={formData.selectedState}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-20 bg-white text-zinc-900 border border-black/10 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm font-body shadow-sm"
                      >
                        <option value="">Select State</option>
                        {statesList.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      {formErrors.selectedState && (
                        <p className="text-red-600 text-xs font-heading font-bold mt-1 pl-2">
                          {formErrors.selectedState}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Consent Checkbox */}
                  <div>
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        name="agreed"
                        checked={formData.agreed}
                        onChange={handleChange}
                        className="w-4 h-4 mt-0.5 rounded border-zinc-400 text-primary focus:ring-primary"
                      />
                      <span className="font-body text-xs text-zinc-700 dark:text-zinc-200 leading-snug">
                        {consentText}
                      </span>
                    </label>
                    {formErrors.agreed && (
                      <p className="text-red-600 text-xs font-heading font-bold mt-1 pl-2">
                        {formErrors.agreed}
                      </p>
                    )}
                  </div>

                  {/* Submit Black Pill Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="black-pill"
                      size="lg"
                      disabled={submissionState.submitting}
                      className="w-full !py-3.5 shadow-md hover:shadow-xl"
                    >
                      {submissionState.submitting ? 'Submitting Enquiry...' : 'Enquire Now'}
                    </Button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
