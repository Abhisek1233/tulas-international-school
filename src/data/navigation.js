/**
 * Tulas International School - Primary Navigation Structure
 * Retains exact hierarchy, order, links, and hamburger tiles from tis.edu.in.
 */
export const navigationItems = [
  {
    id: "about-tis",
    label: "ABOUT TIS",
    children: [
      { label: "Our History", url: "https://tis.edu.in/our-history/" },
      { label: "Why Choose Us?", url: "https://tis.edu.in/why-choose-us/" },
      { label: "Vision & Mission", url: "https://tis.edu.in/vision-mission/" },
      { label: "Awards & Achievements", url: "https://tis.edu.in/awards-achievements/" },
      { label: "Headmaster's Profile", url: "https://tis.edu.in/headmaster-profile/" },
      { label: "Our Management", url: "https://tis.edu.in/our-management/" },
      { label: "Virtual Tour", url: "https://tis.edu.in/virtual-tour/" },
    ],
  },
  {
    id: "academics",
    label: "ACADEMICS",
    children: [
      { label: "Pedagogy", url: "https://tis.edu.in/pedagogy/" },
      { label: "Curriculum", url: "https://tis.edu.in/curriculum/" },
      { label: "Streams Offered", url: "https://tis.edu.in/streams-offered/" },
      { label: "International Tie-Ups", url: "https://tis.edu.in/international-tie-ups/" },
      { label: "Publications", url: "https://tis.edu.in/publications/" },
      { label: "Digital Workstations", url: "https://tis.edu.in/digital-workstations/" },
      { label: "Awadh Tinkering Lab", url: "https://tis.edu.in/awadh-tinkering-lab/" },
    ],
  },
  {
    id: "boarding-life",
    label: "BOARDING LIFE",
    children: [
      { label: "Pastoral Care", url: "https://tis.edu.in/pastoral-care/" },
      { label: "Food & Nutrition", url: "https://tis.edu.in/food-nutrition/" },
      { label: "Facilities", url: "https://tis.edu.in/facilities/" },
      { label: "Infirmary & Medical Facilities", url: "https://tis.edu.in/infirmary-medical-facilities/" },
      { label: "Our House System", url: "https://tis.edu.in/our-house-system/" },
      { label: "Teachers Profile", url: "https://tis.edu.in/teachers-profile/" },
    ],
  },
  {
    id: "beyond-academics",
    label: "BEYOND ACADEMICS",
    children: [
      { label: "Sports", url: "#sports" },
      { label: "Beyond The Curriculum", url: "https://tis.edu.in/beyond-the-curriculum/" },
      { label: "Clubs & Societies", url: "https://tis.edu.in/clubs-societies/" },
      { label: "Celebrations", url: "https://tis.edu.in/celebrations/" },
      { label: "Mentor & Mentee System", url: "https://tis.edu.in/mentor-mentee-system/" },
      { label: "Career Counselling", url: "https://tis.edu.in/career-counselling/" },
      { label: "Raasta Students Counselling", url: "https://tis.edu.in/raasta-students-counselling/" },
    ],
  },
  {
    id: "events",
    label: "EVENTS",
    children: [
      { label: "Sports Day", url: "https://tis.edu.in/sports-day/" },
      { label: "38th National Games", url: "https://tis.edu.in/38th-national-games/" },
      { label: "Founders Day", url: "https://tis.edu.in/founders-day/" },
      { label: "Confluence", url: "https://tis.edu.in/confluence/" },
      { label: "Prominent Personalities", url: "#personalities" },
      { label: "Sports Achievements", url: "https://tis.edu.in/sports-achievements/" },
    ],
  },
  {
    id: "admission",
    label: "ADMISSION",
    children: [
      { label: "Admission Procedure", url: "https://tis.edu.in/admission-procedure/" },
      { label: "Pay Fee Online", url: "https://admission.tis.edu.in" },
      { label: "Fee Structure", url: "https://tis.edu.in/fee-structure/" },
      { label: "Scholarship Programs", url: "https://tis.edu.in/scholarship-programs/" },
      { label: "Withdrawal Policy", url: "https://tis.edu.in/withdrawal-policy/" },
    ],
  },
  {
    id: "mandatory-disclosure",
    label: "MANDATORY DISCLOSURE",
    children: [
      { label: "Mandatory Disclosure", url: "https://tis.edu.in/mandatory-disclosure/" },
    ],
  },
  {
    id: "alumni-network",
    label: "ALUMNI NETWORK",
    children: [
      { label: "Alumni Network", url: "https://tis.edu.in/alumni-network/" },
    ],
  },
  {
    id: "quick-links",
    label: "QUICK LINKS",
    children: [
      { label: "Blogs", url: "https://tis.edu.in/blogs/" },
      { label: "Contact Us", url: "#contact" },
      { label: "Newsletter", url: "https://tis.edu.in/newsletter/" },
      { label: "Careers", url: "https://tis.edu.in/careers/" },
      { label: "Transfer Certificate", url: "https://tis.edu.in/transfer-certificate/" },
      { label: "Parent Testimonial", url: "#testimonials" },
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
