// This file mocks a connection to a backend API or CMS.

// --- Helper for images in the 'assets' folder ---
// To use your images, place them in 'src/assets/images/'
// and reference them like this: require('@/assets/images/your-image-name.jpg')

const products = [
  { 
    id: 'ipc-101', name: 'Industrial PC T-IPC-101', model: 'T-IPC-101', category: 'Computing Devices', 
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&auto=format=fit=crop', 
    features: ['Fanless, Ruggedized Design', 'Intel Core i7 Processor', 'Wide Temp Range (-20°C to 70°C)', 'Dual LAN, 6x COM, 8x USB'], 
    specs: { 'Processor': 'Intel Core i7-8550U', 'Memory': '16GB DDR4', 'Storage': '512GB SSD', 'Power Input': '9-36V DC' } 
  },
  { 
    id: 'nvr-200', name: '32-Channel NVR', model: 'TF-NVR-32CH', category: 'Surveillance & Security', 
    image: require('@/assets/images/NVR.jpg'), 
    features: ['Supports 32 IP Cameras', '4K Ultra HD Resolution Output', 'H.265+ High-Efficiency Compression', '2x SATA HDD Bays (Up to 20TB)'], 
    specs: { 'Decoding': 'H.265+/H.265/H.264', 'Bandwidth': '256Mbps', 'Video Output': 'HDMI/VGA', 'Storage': 'Up to 10TB per HDD' } 
  }
];

// Content for the "Solutions by Industry" tabs.
const solutionsByIndustry = [
    {
        slug: 'smart-campus',
        title: 'Intelligent Campus Solutions',
        image: require('@/assets/images/Picture1.jpg'),
        shortDescription: "Enhancing learning environments with integrated, AIoT-powered campus management.", // <-- Short tagline
        description: "TONGFANG provides a comprehensive Intelligent Campus Solution that integrates everything from smart classroom technology to campus-wide security and energy management. Our platform uses big data to optimize resource allocation, improve student safety, and create a seamless digital experience for both faculty and students, paving the way for the future of education.", // <-- Full description for detail page
        successStories: [
            { title: 'Smart Campus Big Data Solution', description: 'Deployed a big data platform for a major university, improving resource management by 30% and increasing student engagement.' },
            { title: 'Intelligent System Implementation', description: 'Automated access control and surveillance across a 50-building campus, reducing security incidents by 40%.' }
        ]
    },
    {
        slug: 'smart-healthcare',
        title: 'Intelligent Medical Centers',
        image: require('@/assets/images/h.jpg'),
        shortDescription: "Streamlining hospital operations and enhancing patient care through intelligent system integration.",
        description: "Our Smart Hospital Solution focuses on the critical integration of patient management, building automation, and security systems. By automating entrance and exit management and unifying network architecture, we help medical centers improve operational efficiency, ensure data security, and provide a safer environment for patients and staff.",
        successStories: [
            { title: 'Integrated Management of Hospital Entrances', description: 'Our system improved patient flow and security at a 500-bed medical center, reducing wait times by 25%.' },
            { title: 'Network Architecture for Medical Systems', description: 'Designed and deployed a fault-tolerant network for a leading hospital, ensuring 99.99% uptime for critical medical data systems.' }
        ]
    },
    {
        // === THIS SECTION IS NOW UPDATED ===
        slug: 'smart-ports',
        title: 'Intelligent Smart Ports',
        image: require('@/assets/images/hero-bg-3.png'),
        shortDescription: "Transforming traditional ports into agile, data-driven hubs of global trade.", // <-- NEW short tagline for the main page card
        description: "TONGFANG empowers modern ports with cutting-edge AIoT, big data, and cloud computing technologies to drive operational efficiency, sustainability, and safety. Our solutions integrate real-time monitoring, automated logistics, and intelligent decision-making to streamline cargo handling, reduce energy consumption, and enhance port management. Leveraging 5G, IoT sensors, and AI-driven analytics, we enable seamless coordination between ships, trucks, and terminals.", // <-- Full description for the detail page
        successStories: [
            { 
              title: 'Big Data & Cloud Computing for Port Logistics', 
              description: 'By deploying our smart port platform, a major port achieved 30% faster cargo turnover and 20% lower energy costs. Our cloud-based system unified disparate data sources—from GPS-tracked containers to AI-powered predictive maintenance—enabling real-time insights and automated scheduling.' 
            },
            {
              title: 'Terminal Automation & Intelligent Dispatching',
              description: 'We implemented a Wharf intelligent automation system featuring autonomous loading/unloading and logistics handling robots (AGVs). This integrated control system automated terminal site operations, leading to a significant increase in safety and efficiency.'
            }
        ]
        // ===================================
    }
];

// Other data remains the same...
const solutionsByScenario = [
    { title: 'Intelligent Building Systems', image: require('@/assets/images/hero-bg-2.jpg') }, 
    { title: 'Hotel Security Systems', image: require('@/assets/images/Hotel Security System Design Scheme.jpg') }, 
    { title: 'Smart Public Toilet Solution', image: require('@/assets/images/Smart Public Toilet Solution.jpg') }, 
    { title: 'Corporate Office Buildings', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&auto=format&fit=crop' },
    { title: 'University & School Campuses', image: require('@/assets/images/University & School Campuses.png')},
    { title: 'Data Centers', image: require('@/assets/images/data_center.png') },
];

const solutionsByFunction = [
  {
    category: "Digital Information & AIoT",
    solutions: [
      { title: 'Big Data & Cloud Computing', icon: 'fas fa-database' },
      { title: 'Educational Informatization', icon: 'fas fa-graduation-cap' },
      { title: 'Network Architecture Design', icon: 'fas fa-network-wired' },
      { title: 'Custom Software Development', icon: 'fas fa-code' },
    ]
  },
  {
    category: "Building Management & Automation",
    solutions: [
      { title: 'Integrated BMS Platform', icon: 'fas fa-sitemap' },
      { title: 'HVAC Control & Optimization', icon: 'fas fa-wind' },
      { title: 'Intelligent Lighting Control', icon: 'far fa-lightbulb' },
      { title: 'Energy Management Systems', icon: 'fas fa-bolt' },
    ]
  },
];

const downloads = [
  { id: 1, title: 'T-IPC-101 Datasheet.pdf', type: 'Datasheet', productId: 'ipc-101' },
  { id: 2, title: 'TF-NVR-32CH User Manual.pdf', type: 'Manual', productId: 'nvr-200' },
];

export const ApiService = {
  fetchProducts(category = null) {
    return new Promise(resolve => setTimeout(() => {
      if (category && category !== 'All Categories') { resolve(products.filter(p => p.category === category)); } 
      else { resolve(products); }
    }, 200));
  },
  findProductById(id) {
    return new Promise(resolve => setTimeout(() => {
      resolve(products.find(p => p.id === id));
    }, 100));
  },
  fetchProductCategories() {
    return new Promise(resolve => setTimeout(() => {
      resolve(['All Categories', ...new Set(products.map(p => p.category))]);
    }, 50));
  },
  fetchSolutionsByIndustry() { return new Promise(r => setTimeout(() => r(solutionsByIndustry), 100)); },
  fetchSolutionsByScenario() { return new Promise(r => setTimeout(() => r(solutionsByScenario), 100)); },
  fetchSolutionsByFunction() { return new Promise(r => setTimeout(() => r(solutionsByFunction), 100)); },
  findSolutionBySlug(slug) { return new Promise(r => setTimeout(() => r(solutionsByIndustry.find(s => s.slug === slug)), 100)); },
  fetchDownloads() { return new Promise(r => setTimeout(() => r(downloads), 100)); }
};