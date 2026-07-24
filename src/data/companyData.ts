// Centralized company information for One Acres Infra Heights India Private Limited

export interface Director {
  id: string;
  name: string;
  title: string;
  mobile: string;
  rawMobile: string;
  email: string;
  roleDescription: string;
  quote: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  status: string;
  featured: boolean;
  location: string;
  priceStarting: string;
  priceUnit: string;
  plotSizes: string;
  possession: string;
  reraNo: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  amenities: string[];
  image: string;
  gallery: string[];
}

export interface Stat {
  label: string;
  value: string;
  suffix: string;
}

export interface CoreValue {
  title: string;
  description: string;
}

export const COMPANY_INFO = {
  name: "One Acres Infra Heights India Private Limited",
  brandName: "OneAcres.com",
  tagline: "Building Dreams, Developing Infrastructure Across Uttarakhand",
  establishedDate: "30 December 2015",
  yearsInBusiness: new Date().getFullYear() - 2015,
  cin: "U70102UR2015PTC001892",
  reraRegNo: "UKRERA03210000412",
  website: "www.oneacres.com",
  officialEmail: "gamlrakesh1@gmail.com",
  infoEmail: "info@oneacres.com",
  
  registeredAddress: {
    street: "E49, Top Floor, Near Race Course Valley",
    locality: "Race Course",
    city: "Dehradun",
    state: "Uttarakhand",
    pincode: "248001",
    country: "India",
    fullAddress: "E49, Top Floor, Near Race Course Valley, Dehradun, Uttarakhand – 248001, India",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13781.428751532822!2d78.0322!3d30.3165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c402127271%3A0x6b490d18080ff1e6!2sRace%20Course%2C%20Dehradun%2C%20Uttarakhand%20248001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },

  directors: [
    {
      id: "rakesh-sundriyal",
      name: "Rakesh Sundriyal",
      title: "Managing Director",
      mobile: "+91 99970 20323",
      rawMobile: "+919997020323",
      email: "gamlrakesh1@gmail.com",
      roleDescription: "Visionary co-founder with over 15+ years of real estate development experience in Uttarakhand. Leads strategic expansion, land acquisition, and customer excellence at One Acres Infra Heights.",
      quote: "Our pledge since 2015 has been absolute clarity of title, prompt delivery, and creating sustainable living spaces in the majestic valley of Dehradun."
    },
    {
      id: "meenakshi-sundriyal",
      name: "Meenakshi Sundriyal",
      title: "Managing Director",
      mobile: "+91 99972 43232",
      rawMobile: "+919997243232",
      email: "meenakshi@oneacres.com",
      roleDescription: "Managing Director guiding financial planning, project quality control, and community relations across all residential townships and commercial infrastructure ventures.",
      quote: "We don't just sell plots or homes; we build trusted ecosystems where families thrive with safety, nature, and solid long-term equity growth."
    }
  ] as Director[],

  stats: [
    { label: "Established In", value: "2015", suffix: "" },
    { label: "Acres Developed", value: "35", suffix: "+" },
    { label: "Happy Plot Owners", value: "850", suffix: "+" },
    { label: "Clear Title Rate", value: "100", suffix: "%" },
    { label: "Completed Townships", value: "14", suffix: "" }
  ] as Stat[],

  coreValues: [
    {
      title: "100% Legal & Clear Titles",
      description: "Every acre, plot, and property is verified through thorough legal diligence with zero encumbrances and complete registry support."
    },
    {
      title: "Transparent Pricing",
      description: "No hidden charges or unexpected escalation fees. Fair, competitive market rates backed by flexible payment plans."
    },
    {
      title: "Prime Dehradun Locations",
      description: "Strategic developments near expressway corridors, Rajpur Road, Sahastradhara Road, and Doon Valley greenery."
    },
    {
      title: "Infrastructure First",
      description: "Equipped with wide metalled roads, underground drainage, electricity poles, boundary walls, and security gates before registry."
    }
  ] as CoreValue[]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "one-acres-green-valley-plots",
    slug: "one-acres-green-valley-plots",
    title: "One Acres Green Valley Enclave",
    category: "Residential Plots",
    status: "Ongoing",
    featured: true,
    location: "Sahastradhara Road, Dehradun",
    priceStarting: "₹3,800",
    priceUnit: "per sq. ft.",
    plotSizes: "120 sq. yards - 500 sq. yards",
    possession: "Ready for Registry / Immediate",
    reraNo: "UKRERA03210000412",
    shortDescription: "Exclusive freehold residential plot township offering unobstructed views of Mussoorie hills with gated security and 30ft metalled roads.",
    description: "One Acres Green Valley Enclave is a flagship gated plot development situated right along the scenic Sahastradhara corridor. Surrounded by lush greenery and fresh mountain air, the layout is fully developed with modern infrastructure including LED street lights, wide internal roads, underground electric wiring, and lush parks.",
    highlights: [
      "MDDA Approved / Freehold Registry Plots",
      "Panoramic views of Mussoorie and Doon Valley",
      "30 Feet & 25 Feet Metalled Internal Roads",
      "Gated Community with 24/7 Security Guard & CCTV",
      "Demarcated Plots with Boundary Pillars",
      "Bank Loan Facility available from SBI, HDFC & PNB"
    ],
    amenities: [
      "Gated Security",
      "30ft Metalled Roads",
      "Street Lighting",
      "Water Supply Line",
      "Electricity Connection",
      "Children's Park",
      "Rainwater Harvesting"
    ],
    image: "/src/assets/images/dehradun_plots_township_1784874005001.jpg",
    gallery: [
      "/src/assets/images/dehradun_plots_township_1784874005001.jpg",
      "/src/assets/images/dehradun_villas_banner_1784873991288.jpg"
    ]
  },
  {
    id: "one-acres-himalayan-villas",
    slug: "one-acres-himalayan-villas",
    title: "One Acres Himalayan Foothills Luxury Villas",
    category: "Luxury Villas",
    status: "Ongoing",
    featured: true,
    location: "Rajpur Road Extension, Dehradun",
    priceStarting: "₹1.45 Cr",
    priceUnit: "Onwards",
    plotSizes: "3 BHK & 4 BHK Duplex Villas (2200 - 3500 sq. ft. Built-up)",
    possession: "Dec 2026",
    reraNo: "UKRERA03210000419",
    shortDescription: "Ultra-luxurious modern eco-villas featuring private plunge pools, terrace gardens, and floor-to-ceiling glass walls overlooking the Mussoorie range.",
    description: "Designed for discerning home buyers and NRI investors who seek serene luxury in Dehradun. One Acres Himalayan Foothills Villas blend modern contemporary aesthetics with local mountain architecture. Each villa offers spacious living rooms, modular kitchens, private balconies, and smart home automation.",
    highlights: [
      "Individual Gated Duplex Villas",
      "Private Lawn & Sky Deck Terrace",
      "EV Charging Point in Private Garage",
      "Italian Marble Flooring & Premium Sanitary Ware",
      "Solar Power Backup Integration",
      "Close to Top Schools & Hospitals in Dehradun"
    ],
    amenities: [
      "Clubhouse & Gym",
      "Private Parking",
      "24x7 Power Backup",
      "CCTV Surveillance",
      "Smart Locks",
      "Landscaped Garden"
    ],
    image: "/src/assets/images/dehradun_villas_banner_1784873991288.jpg",
    gallery: [
      "/src/assets/images/dehradun_villas_banner_1784873991288.jpg",
      "/src/assets/images/dehradun_plots_township_1784874005001.jpg"
    ]
  },
  {
    id: "one-acres-corporate-plaza",
    slug: "one-acres-corporate-plaza",
    title: "One Acres Corporate Plaza & Tech Hub",
    category: "Commercial Infrastructure",
    status: "Ongoing",
    featured: true,
    location: "Near Race Course / EC Road, Dehradun",
    priceStarting: "₹8,500",
    priceUnit: "per sq. ft.",
    plotSizes: "500 sq. ft. - 5000 sq. ft. Office Suites & Retail Shops",
    possession: "Ready for Fit-out",
    reraNo: "UKRERA03210000425",
    shortDescription: "Grade-A commercial complex offering high-visibility retail showrooms, boutique office spaces, and multi-level parking near Race Course Dehradun.",
    description: "Strategically located in the heart of Dehradun near Race Course, One Acres Corporate Plaza provides high footfall commercial spaces for retail brands, clinics, IT companies, and corporate offices. High speed elevators, 100% power backup, and modern glass facades.",
    highlights: [
      "High Visibility Main Road Frontage",
      "Double Height Entrance Lobby",
      "Multi-level Basement & Surface Parking",
      "High-speed Passenger & Service Elevators",
      "24x7 Power Backup & Centralized Security",
      "Ideal for Retail Outlets, Banks, Offices & Diagnostic Centers"
    ],
    amenities: [
      "Power Backup",
      "High Speed Lifts",
      "Basement Parking",
      "Food Court",
      "Fire Safety System",
      "Central AC Provision"
    ],
    image: "/src/assets/images/commercial_infra_center_1784874016592.jpg",
    gallery: [
      "/src/assets/images/commercial_infra_center_1784874016592.jpg"
    ]
  },
  {
    id: "one-acres-race-course-heights",
    slug: "one-acres-race-course-heights",
    title: "One Acres Race Course Valley Residency",
    category: "Residential Plots",
    status: "Completed",
    featured: false,
    location: "Near Race Course Valley, Dehradun",
    priceStarting: "Sold Out",
    priceUnit: "(Fully Handed Over)",
    plotSizes: "150 sq. yards - 350 sq. yards",
    possession: "Completed & Registry Handed",
    reraNo: "UKRERA03210000301",
    shortDescription: "Premium residential plot colony completed near Race Course, now housing over 60 happy families in a peaceful neighborhood.",
    description: "A landmark residential plot project by One Acres Infra Heights delivered ahead of schedule in Race Course Valley, Dehradun. 100% completed infrastructure, metalled roads, street lighting, and direct connection to civic amenities.",
    highlights: [
      "100% Plots Sold & Handed Over",
      "Prime Race Course Location",
      "60+ Families Already Residing",
      "Complete Municipal Sewerage & Water Connection"
    ],
    amenities: [
      "Metalled Roads",
      "Street Lights",
      "Water Pipelines",
      "Sewer Line Connected"
    ],
    image: "/src/assets/images/dehradun_plots_township_1784874005001.jpg",
    gallery: [
      "/src/assets/images/dehradun_plots_township_1784874005001.jpg"
    ]
  },
  {
    id: "one-acres-shimla-bypass-estates",
    slug: "one-acres-shimla-bypass-estates",
    title: "One Acres Doon Eco Farms & Plots",
    category: "Residential Plots",
    status: "Ongoing",
    featured: false,
    location: "Shimla Bypass Corridor, Dehradun",
    priceStarting: "₹2,200",
    priceUnit: "per sq. ft.",
    plotSizes: "200 sq. yards - 1000 sq. yards",
    possession: "Immediate Registry",
    reraNo: "UKRERA03210000438",
    shortDescription: "Affordable eco-friendly farmland & residential plot township situated near Delhi-Dehradun Expressway route with greenery and freshwater streams.",
    description: "Located along the fast-growing Shimla Bypass / Delhi-Dehradun Expressway growth corridor. One Acres Doon Eco Farms offers large plot dimensions perfect for farmhouses, retirement homes, or high-appreciation land investment.",
    highlights: [
      "Direct Connectivity to Delhi-Dehradun Expressway (5 Mins)",
      "Pollution-Free Valley Living with Scenic Mountain Views",
      "Ideal for Cottage, Farmhouse or Villa Construction",
      "Highly Attractive Capital Growth Potential"
    ],
    amenities: [
      "Wide Roads",
      "Gated Perimeter",
      "Electricity Line",
      "Water Supply"
    ],
    image: "/src/assets/images/dehradun_plots_township_1784874005001.jpg",
    gallery: [
      "/src/assets/images/dehradun_plots_township_1784874005001.jpg"
    ]
  }
];

export const DEHRADUN_LOCATION_HIGHLIGHTS = [
  {
    title: "Delhi-Dehradun Expressway",
    time: "2.5 Hours from Delhi",
    desc: "Upcoming expressway reduces travel time drastically, boosting land valuation and tourism accessibility."
  },
  {
    title: "Educational Hub of India",
    time: "10-15 Mins to Top Institutes",
    desc: "Home to premier institutions like Doon School, Welham, UPES, Graphic Era, and FRI."
  },
  {
    title: "Pleasant Year-Round Climate",
    time: "650m Elevation",
    desc: "Crisp mountain air, scenic pine forests, and temperate climate away from metropolitan heat."
  },
  {
    title: "Air & Rail Connectivity",
    time: "30 Mins to Jolly Grant Airport",
    desc: "Direct daily flights to Delhi, Mumbai, Bengaluru, plus Vande Bharat Express rail link."
  }
];

export const TESTIMONIALS = [
  {
    quote: "Buying our residential plot in Sahastradhara Road through One Acres Infra Heights was the smoothest experience. Managing Director Rakesh Sundriyal personally ensured 100% clear title registry and instant boundary demarcation.",
    name: "Col. Rajeshwar Sharma (Retd.)",
    designation: "Plot Owner, Green Valley Enclave",
    rating: 5
  },
  {
    quote: "As an NRI residing in Dubai, finding a trustworthy real estate developer in Dehradun was critical. Mrs. Meenakshi Sundriyal and the team handled every legal document with total transparency. Highly recommended!",
    name: "Sunita & Vikram Joshi",
    designation: "Villa Buyers, Himalayan Foothills Villas",
    rating: 5
  },
  {
    quote: "One Acres Infra Heights has been active in Dehradun since 2015. Their Race Course project is where my family lives today. Great roads, honest pricing, and genuine commitment.",
    name: "Dr. Ananya Verma",
    designation: "Homeowner, Race Course Residency",
    rating: 5
  }
];

export const FAQS = [
  {
    q: "Is One Acres Infra Heights a registered company with RERA?",
    a: "Yes! One Acres Infra Heights India Private Limited (CIN: U70102UR2015PTC001892) was established on 30 December 2015. All our projects are compliant with Uttarakhand RERA norms and local municipal guidelines."
  },
  {
    q: "Where is the registered office of One Acres Infra Heights?",
    a: "Our registered head office is located at E49, Top Floor, Near Race Course Valley, Dehradun, Uttarakhand – 248001, India."
  },
  {
    q: "How can I schedule a site visit or contact the Managing Directors?",
    a: "You can call or WhatsApp our Managing Directors directly: Mr. Rakesh Sundriyal (+91 99970 20323 / gamlrakesh1@gmail.com) or Mrs. Meenakshi Sundriyal (+91 99972 43232). We offer free pickup for site visits across Dehradun."
  },
  {
    q: "Are bank loans available for purchasing plots or villas?",
    a: "Yes! Because all our land parcels are 100% legal with clear freehold titles, major nationalized & private banks like SBI, HDFC, Punjab National Bank, and ICICI offer home and land loans on our projects."
  },
  {
    q: "What types of properties does One Acres Infra Heights develop?",
    a: "We specialize in freehold residential plots, gated plot townships, luxury independent villas, farmhouses, and commercial infrastructure projects across Dehradun and surrounding Uttarakhand regions."
  }
];
