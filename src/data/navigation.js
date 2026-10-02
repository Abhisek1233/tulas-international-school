/**
 * Tulas International School - Primary Navigation Structure
 * Retains exact hierarchy, order, links, and hamburger tiles from tis.edu.in.
 * 
 * Items with `to` are internal client-side routes (<Link>).
 * Items with `href` are external or anchor links (<a>).
 */
export const navigationItems = [
  {
    id: "about-tis",
    label: "ABOUT TIS",
    children: [
      { label: "Our History", to: "/about-tis/our-history" },
      { label: "Why Choose Us?", to: "/about-tis/why-choose-us" },
      { label: "Vision & Mission", to: "/about-tis/vision-and-mission" },
      { label: "Awards & Achievements", to: "/about-tis/awards-and-achievements" },
      { label: "Headmaster's Profile", to: "/about-tis/headmasters-profile" },
      { label: "Our Management", to: "/about-tis/our-management" },
      { label: "Virtual Tour", href: "https://tis.edu.in/virtual-tour/" },
    ],
  },
  {
    id: "academics",
    label: "ACADEMICS",
    children: [
      { label: "Pedagogy", href: "https://tis.edu.in/pedagogy/" },
      { label: "Curriculum", href: "https://tis.edu.in/curriculum/" },
      { label: "Streams Offered", href: "https://tis.edu.in/streams-offered/" },
      { label: "International Tie-Ups", href: "https://tis.edu.in/international-tie-ups/" },
      { label: "Publications", href: "https://tis.edu.in/publications/" },
      { label: "Digital Workstations", href: "https://tis.edu.in/digital-workstations/" },
      { label: "Awadh Tinkering Lab", href: "https://tis.edu.in/awadh-tinkering-lab/" },
    ],
  },
  {
    id: "boarding-life",
    label: "BOARDING LIFE",
    children: [
      { label: "Pastoral Care", href: "https://tis.edu.in/pastoral-care/" },
      { label: "Food & Nutrition", href: "https://tis.edu.in/food-nutrition/" },
      { label: "Facilities", href: "https://tis.edu.in/facilities/" },
      { label: "Infirmary & Medical Facilities", href: "https://tis.edu.in/infirmary-medical-facilities/" },
      { label: "Our House System", href: "https://tis.edu.in/our-house-system/" },
      { label: "Teachers Profile", href: "https://tis.edu.in/teachers-profile/" },
    ],
  },
  {
    id: "beyond-academics",
    label: "BEYOND ACADEMICS",
    children: [
      { label: "Sports", href: "/#sports" },
      { label: "Beyond The Curriculum", href: "https://tis.edu.in/beyond-the-curriculum/" },
      { label: "Clubs & Societies", href: "https://tis.edu.in/clubs-societies/" },
      { label: "Celebrations", href: "https://tis.edu.in/celebrations/" },
      { label: "Mentor & Mentee System", href: "https://tis.edu.in/mentor-mentee-system/" },
      { label: "Career Counselling", href: "https://tis.edu.in/career-counselling/" },
      { label: "Raasta Students Counselling", href: "https://tis.edu.in/raasta-students-counselling/" },
    ],
  },
  {
    id: "events",
    label: "EVENTS",
    children: [
      { label: "Sports Day", href: "https://tis.edu.in/sports-day/" },
      { label: "38th National Games", href: "https://tis.edu.in/38th-national-games/" },
      { label: "Founders Day", href: "https://tis.edu.in/founders-day/" },
      { label: "Confluence", href: "https://tis.edu.in/confluence/" },
      { label: "Prominent Personalities", href: "/#personalities" },
      { label: "Sports Achievements", href: "https://tis.edu.in/sports-achievements/" },
    ],
  },
  {
    id: "admission",
    label: "ADMISSION",
    children: [
      { label: "Admission Procedure", href: "https://tis.edu.in/admission-procedure/" },
      { label: "Pay Fee Online", href: "https://admission.tis.edu.in" },
      { label: "Fee Structure", href: "https://tis.edu.in/fee-structure/" },
      { label: "Scholarship Programs", href: "https://tis.edu.in/scholarship-programs/" },
      { label: "Withdrawal Policy", href: "https://tis.edu.in/withdrawal-policy/" },
    ],
  },
  {
    id: "mandatory-disclosure",
    label: "MANDATORY DISCLOSURE",
    children: [
      { label: "Mandatory Disclosure", href: "https://tis.edu.in/mandatory-disclosure/" },
    ],
  },
  {
    id: "alumni-network",
    label: "ALUMNI NETWORK",
    children: [
      { label: "Alumni Network", href: "https://tis.edu.in/alumni-network/" },
    ],
  },
  {
    id: "quick-links",
    label: "QUICK LINKS",
    children: [
      { label: "Blogs", href: "https://tis.edu.in/blogs/" },
      { label: "Contact Us", href: "/#contact" },
      { label: "Newsletter", href: "https://tis.edu.in/newsletter/" },
      { label: "Careers", href: "https://tis.edu.in/careers/" },
      { label: "Transfer Certificate", href: "https://tis.edu.in/transfer-certificate/" },
      { label: "Parent Testimonial", href: "/#testimonials" },
    ],
  },
];

export const hamburgerTiles = [
  {
    id: "tile-1",
    caption: "Explore Our Vibrant Campus Life.",
    image: "/assets/stats/image1.png",
    alt: "Vibrant campus life at TIS",
  },
  {
    id: "tile-2",
    caption: "Discover Our Comprehensive Academic Programs.",
    image: "/assets/stats/image2.webp",
    alt: "Academic classroom and labs at TIS",
  },
  {
    id: "tile-3",
    caption: "Learn About Our State-Of-The-Art Boarding Facilities.",
    image: "/assets/stats/image3.png",
    alt: "State of the art boarding facilities",
  },
  {
    id: "tile-4",
    caption: "Join Us In Celebrating Diverse Cultural Events.",
    image: "/assets/hero/dance.webp",
    alt: "Cultural and stage performances at TIS",
  },
];
