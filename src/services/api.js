// This file mocks a connection to a backend API or CMS.

const products = [
  { id: 'ipc-101', name: 'Industrial PC T-IPC-101', model: 'T-IPC-101', category: 'Computing Devices', image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500', features: ['Fanless Design', 'Intel Core i7 Processor', 'Wide Temp Range (-20°C to 70°C)', 'Dual LAN, 6x COM, 8x USB'], specs: { 'Processor': 'Intel Core i7-8550U', 'Memory': '16GB DDR4', 'Storage': '512GB SSD', 'Power': '9-36V DC' } },
  { id: 'nvr-200', name: '32-Channel NVR', model: 'TF-NVR-32CH', category: 'Surveillance & Security', image: 'https://images.unsplash.com/photo-1617886322207-6f504e7472c2?w=500', features: ['Supports 32 IP Cameras', '4K Ultra HD Resolution', 'H.265+ Compression', '2x SATA HDD Bays'], specs: { 'Decoding': 'H.265+/H.265/H.264', 'Bandwidth': '256Mbps', 'Output': 'HDMI/VGA', 'Storage': 'Up to 10TB per HDD' } },
  { id: 'plc-303', name: 'Automation PLC Controller', model: 'TF-PLC-303', category: 'Automation Devices', image: 'https://images.unsplash.com/photo-1633493714962-1849b2075551?w=500', features: ['High-speed processing', 'Modular I/O Expansion', 'Ethernet/IP and Modbus TCP', 'Built-in Web Server'], specs: { 'Program Memory': '2MB', 'I/O Points': 'Up to 1,024', 'Communication': 'RS232, RS485, Ethernet', 'Power': '24V DC' } },
  { id: 'nwe-401', name: 'Enterprise Managed Switch', model: 'TF-SW-24P', category: 'Networking Equipment', image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500', features: ['24-Port Gigabit Ethernet', '4 SFP Fiber Ports', 'Layer 2+ Management', 'PoE+ Support (370W)'], specs: { 'Switching Capacity': '56 Gbps', 'Forwarding Rate': '41.7 Mpps', 'MAC Address Table': '8K', 'VLANs': 'Supports 4K VLANs' } }
];

const solutionsByIndustry = [
    {
        slug: 'education',
        title: 'Education',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200',
        description: 'Empower better education with integrated solutions for security, management, and interactive learning.',
        successStories: [
            { title: 'Securing a Modern University Campus', description: 'A comprehensive surveillance and access control system for over 20,000 students and staff, reducing incidents by 40%.' },
            { title: 'Smart Data Management for a School District', description: 'Implemented a big data solution that streamlined administrative tasks and provided valuable insights into student performance.' },
            { title: 'Interactive Learning in Smart Classrooms', description: 'Outfitted 100+ classrooms with our intelligent systems to create a more engaging and effective educational experience.' }
        ]
    },
     {
        slug: 'healthcare',
        title: 'Healthcare',
        image: 'https://images.unsplash.com/photo-1586773860414-b24a64387c9b?w=1200',
        description: 'Securing smarter healthcare environments to improve patient safety and operational efficiency.',
        successStories: [
            { title: 'Integrated Management for a Leading Medical Center', description: 'A unified platform for managing building access, patient records, and security, improving response times by 60%.' },
            { title: 'Smart Entrance & Exit Control for Hospitals', description: 'Streamlined visitor and staff access across multiple entry points, enhancing security and workflow.' }
        ]
    },
    // Add other industries in the same format
];

const solutionsByScenario = [
    { title: 'Apartments', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500' },
    { title: 'Factories', image: 'https://images.unsplash.com/photo-1580982327341-4c65b5375b42?w=500' },
    { title: 'Classroom Hub', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500' },
    { title: 'Urban Roadways', image: 'https://images.unsplash.com/photo-1528952643265-22501a03c113?w=500' },
    { title: 'Office Buildings', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500' },
    { title: 'Retail Stores', image: 'https://images.unsplash.com/photo-1556740738-b6a63e2775d2?w=500' },
];

const solutionsByFunction = [
  {
    category: "Smart Campus & Education",
    solutions: [
      { title: 'Smart Campus Solution', icon: 'fas fa-school' },
      { title: 'Intelligent Campus Solution', icon: 'fas fa-chalkboard-teacher' },
      { title: 'Big Data for Educational Informatization', icon: 'fas fa-database' },
    ]
  },
  {
    category: "Healthcare & Hospitality",
    solutions: [
      { title: 'Smart Hospital Entrance Management', icon: 'fas fa-hospital-user' },
      { title: 'Intelligent Design for Medical Centers', icon: 'fas fa-clinic-medical' },
      { title: 'Hotel Security System Design', icon: 'fas fa-hotel' },
      { title: 'Intelligent Design Scheme for Hotels', icon: 'fas fa-concierge-bell' },
      { title: 'Medical Center Network Architecture', icon: 'fas fa-network-wired' },
    ]
  },
  {
    category: "Smart Venues & Public Spaces",
    solutions: [
      { title: 'Intelligent Building System Solution', icon: 'fas fa-building' },
      { title: 'Intelligent Project Scheme for Sports Centers', icon: 'fas fa-futbol' },
      { title: 'Reporting Scheme for Stadiums & Gymnasiums', icon: 'fas fa-chart-line' },
      { title: 'Smart Public Toilet Solution', icon: 'fas fa-restroom' },
    ]
  },
  {
    category: "Industrial & Infrastructure",
    solutions: [
      { title: 'Integrated Smart Park Solution', icon: 'fas fa-industry' },
      { title: 'Smart Low-Carbon Park Solution', icon: 'fas fa-leaf' },
      { title: 'Smart Park Management Platform', icon: 'fas fa-sitemap' },
      { title: 'Big Data & Cloud for Smart Ports', icon: 'fas fa-anchor' },
    ]
  }
];


const downloads = [
  { id: 1, title: 'T-IPC-101 Datasheet.pdf', type: 'Datasheet', productId: 'ipc-101' },
  { id: 2, title: 'TF-NVR-32CH User Manual.pdf', type: 'Manual', productId: 'nvr-200' },
];

export const ApiService = {
  fetchProducts(category = null) {
    return new Promise(r => setTimeout(() => r(category ? products.filter(p => p.category === category) : products), 100));
  },
  findProductById(id) { return new Promise(r => setTimeout(() => r(products.find(p => p.id === id)), 100)); },
  fetchProductCategories() { return new Promise(r => setTimeout(() => r(['All Categories', ...new Set(products.map(p => p.category))]), 100)); },
  
  fetchSolutionsByIndustry() { return new Promise(r => setTimeout(() => r(solutionsByIndustry), 100)); },
  fetchSolutionsByScenario() { return new Promise(r => setTimeout(() => r(solutionsByScenario), 100)); },
  fetchSolutionsByFunction() { return new Promise(r => setTimeout(() => r(solutionsByFunction), 100)); },

  findSolutionBySlug(slug) { return new Promise(r => setTimeout(() => r(solutionsByIndustry.find(s => s.slug === slug)), 100)); },
  fetchDownloads() { return new Promise(r => setTimeout(() => r(downloads), 100)); }
};