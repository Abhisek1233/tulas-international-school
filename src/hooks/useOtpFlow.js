import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * =======================================================================
 * FRONT-END MOCK OTP FLOW HOOK
 * Note: This is an isolated client-side mock simulating OTP generation,
 * transmission delay, a 30-second resend countdown timer, and verification.
 * =======================================================================
 */
export function useOtpFlow() {
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'verifying' | 'verified'
  const [countdown, setCountdown] = useState(30);
  const [error, setError] = useState('');
  const timerRef = useRef(null);

  // Clear interval helper
  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => clearTimer();
  }, [clearTimer]);

  // Handle countdown interval
  useEffect(() => {
    if (status === 'sent' && countdown > 0) {
      timerRef.current = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearTimer();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearTimer();
  }, [status, countdown, clearTimer]);

  const sendOtp = useCallback(
    (mobileNumber) => {
      setError('');
      const cleanNumber = mobileNumber ? mobileNumber.replace(/\D/g, '') : '';
      if (!cleanNumber || cleanNumber.length < 10) {
        setError('Please enter a valid 10-digit mobile number.');
        return false;
      }

      setStatus('sending');

      // Mock network roundtrip delay (800ms)
      setTimeout(() => {
        setStatus('sent');
        setCountdown(30);
      }, 800);

      return true;
    },
    []
  );

  const verifyOtp = useCallback(
    (enteredOtp) => {
      setError('');
      if (!enteredOtp || enteredOtp.trim().length < 4) {
        setError('Please enter the 4-digit OTP sent to your phone (Demo: 1234).');
        return false;
      }

      setStatus('verifying');

      setTimeout(() => {
        // Accept demo OTP '1234' or any valid 4-6 digit numeric string in demo mode
        if (/^\d{4,6}$/.test(enteredOtp.trim())) {
          setStatus('verified');
          clearTimer();
        } else {
          setStatus('sent');
          setError('Invalid OTP code. Please enter 1234 for demo verification.');
        }
      }, 600);

      return true;
    },
    [clearTimer]
  );

  const resetOtp = useCallback(() => {
    clearTimer();
    setStatus('idle');
    setCountdown(30);
    setError('');
  }, [clearTimer]);

  return {
    status,
    isIdle: status === 'idle',
    isSending: status === 'sending',
    isSent: status === 'sent',
    isVerifying: status === 'verifying',
    isVerified: status === 'verified',
    countdown,
    canResend: countdown === 0,
    error,
    sendOtp,
    verifyOtp,
    resetOtp,
  };
}
