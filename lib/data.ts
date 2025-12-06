export const siteData = {
  name: "Shree Solar",
  tagline: "Powering Tomorrow with Solar Energy",
  description: "Leading solar energy solutions provider in Jharkhand, India. We specialize in solar panels, inverters, batteries, and complete solar installations.",
  phone: "+91 98765 43210",
  email: "info@shreesolar.com",
  address: "Shree Laxmi Traders, Deoghar, Jharkhand 814112, India",
  social: {
    facebook: "https://facebook.com/shreesolar",
    instagram: "https://instagram.com/shreesolar",
    linkedin: "https://linkedin.com/company/shreesolar",
  },
}

export const packages = [
  {
    id: 1,
    name: "3 kW System",
    power: "3",
    monthlyBill: "₹2,000-3,000",
    area: "200-250 sq ft",
    price: "₹8,00,000",
    discount: "₹3,00,000",
    finalPrice: "₹5,00,000",
    includes: ["12 Solar Panels (400W)", "1 Hybrid Inverter", "1 Battery 10kWh", "25 Year Warranty"],
    emi: "₹10,000/month",
  },
  {
    id: 2,
    name: "5 kW System",
    power: "5",
    monthlyBill: "₹3,000-5,000",
    area: "350-400 sq ft",
    price: "₹13,00,000",
    discount: "₹5,00,000",
    finalPrice: "₹8,00,000",
    includes: ["20 Solar Panels (400W)", "1 Hybrid Inverter", "2 Battery 10kWh", "25 Year Warranty"],
    emi: "₹16,000/month",
  },
  {
    id: 3,
    name: "7 kW System",
    power: "7",
    monthlyBill: "₹5,000-8,000",
    area: "450-500 sq ft",
    price: "₹17,50,000",
    discount: "₹7,50,000",
    finalPrice: "₹10,00,000",
    includes: ["28 Solar Panels (400W)", "1 Hybrid Inverter", "3 Battery 10kWh", "25 Year Warranty"],
    emi: "₹20,000/month",
  },
  {
    id: 4,
    name: "10 kW System",
    power: "10",
    monthlyBill: "₹8,000-12,000",
    area: "650-700 sq ft",
    price: "₹24,00,000",
    discount: "₹10,00,000",
    finalPrice: "₹14,00,000",
    includes: ["40 Solar Panels (400W)", "1 Hybrid Inverter", "4 Battery 10kWh", "25 Year Warranty"],
    emi: "₹28,000/month",
  },
]

export const products = {
  solarPanels: [
    { id: 1, name: "Premium Panel 400W", wattage: 400, efficiency: 22.5, warranty: 25, price: "₹18,000" },
    { id: 2, name: "Standard Panel 350W", wattage: 350, efficiency: 21, warranty: 25, price: "₹15,000" },
    { id: 3, name: "Mono Panel 450W", wattage: 450, efficiency: 23, warranty: 25, price: "₹20,000" },
  ],
  inverters: [
    { id: 1, name: "3kW Hybrid Inverter", power: "3kW", battery: "Yes", efficiency: 97, price: "₹80,000" },
    { id: 2, name: "5kW Hybrid Inverter", power: "5kW", battery: "Yes", efficiency: 98, price: "₹1,30,000" },
    { id: 3, name: "10kW Hybrid Inverter", power: "10kW", battery: "Yes", efficiency: 98.5, price: "₹2,20,000" },
  ],
  batteries: [
    { id: 1, name: "LiFePO4 Battery 10kWh", capacity: "10kWh", type: "LiFePO4", lifespan: 20, price: "₹3,00,000" },
    { id: 2, name: "Hybrid Battery 15kWh", capacity: "15kWh", type: "Lithium", lifespan: 15, price: "₹4,20,000" },
  ],
}

export const services = [
  {
    id: 1,
    title: "Free Consultation",
    description: "Expert consultation to assess your energy needs and design the perfect system.",
    icon: "📋",
  },
  {
    id: 2,
    title: "Site Survey",
    description: "Professional site survey to evaluate roof space, sunlight, and installation feasibility.",
    icon: "🔍",
  },
  {
    id: 3,
    title: "System Design",
    description: "Custom system design tailored to your electricity consumption and budget.",
    icon: "🎨",
  },
  {
    id: 4,
    title: "Installation",
    description: "Professional installation by certified technicians with minimal disruption.",
    icon: "🔧",
  },
  {
    id: 5,
    title: "Grid Connection",
    description: "Assistance with net metering and grid connection for grid-tied systems.",
    icon: "⚡",
  },
  {
    id: 6,
    title: "Maintenance",
    description: "24/7 customer support and annual maintenance to ensure optimal performance.",
    icon: "🛠️",
  },
]

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Homeowner, Bangalore",
    text: "Shree Solar installed a 5kW system at my home. My electricity bills have reduced by 85%. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Business Owner, Hyderabad",
    text: "Professional service from start to finish. The ROI is excellent and the team provides great support.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Factory Manager, Pune",
    text: "We switched our 20kW industrial setup to solar. Cost savings are substantial and payback period was 4 years.",
    rating: 5,
  },
]

export const faqs = [
  {
    id: 1,
    question: "How long does installation take?",
    answer: "Typical residential installation takes 3-5 days depending on system size and roof structure.",
  },
  {
    id: 2,
    question: "What is the warranty period?",
    answer: "Solar panels have 25-year warranty, inverters 10-12 years, and batteries 10-15 years depending on type.",
  },
  {
    id: 3,
    question: "Is net metering available?",
    answer: "Yes, net metering is available in most states. We handle all documentation and grid connection.",
  },
  {
    id: 4,
    question: "What about maintenance costs?",
    answer:
      "Minimal maintenance required. Occasional cleaning and annual inspection recommended. We offer maintenance plans.",
  },
  {
    id: 5,
    question: "How much can I save per year?",
    answer:
      "On average, customers save 70-90% on electricity bills. Exact savings depend on system size and consumption.",
  },
]

export const projects = [
  {
    id: 1,
    title: "Residential 5kW Installation",
    location: "Bangalore",
    systemSize: "5 kW",
    savings: "₹70,000/year",
    image: "placeholder.svg",
  },
  {
    id: 2,
    title: "Commercial 10kW Installation",
    location: "Hyderabad",
    systemSize: "10 kW",
    savings: "₹1,40,000/year",
    image: "placeholder.svg",
  },
  {
    id: 3,
    title: "Industrial 25kW Installation",
    location: "Pune",
    systemSize: "25 kW",
    savings: "₹3,50,000/year",
    image: "placeholder.svg",
  },
]

export const blogs = [
  {
    id: 1,
    title: "Government Subsidies for Solar Installation in 2024",
    date: "2024-01-15",
    category: "Government Schemes",
    excerpt: "Learn about available subsidies and schemes to reduce your solar installation costs.",
  },
  {
    id: 2,
    title: "How to Maximize Your Solar Savings",
    date: "2024-01-10",
    category: "Tips & Guides",
    excerpt: "Expert tips to get the most out of your solar investment.",
  },
  {
    id: 3,
    title: "The Future of Renewable Energy in India",
    date: "2024-01-05",
    category: "Industry News",
    excerpt: "Latest trends and developments in Indias renewable energy sector.",
  },
]
