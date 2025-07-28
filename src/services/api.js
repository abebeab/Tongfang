// This file mocks a connection to a backend API or CMS.
// Image URLs are optimized to request smaller file sizes.

const products = [
  { 
    id: 'ipc-101', name: 'Industrial PC T-IPC-101', model: 'T-IPC-101', category: 'Computing Devices', 
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&auto=format&fit=crop', 
    features: ['Fanless, Ruggedized Design', 'Intel Core i7 Processor', 'Wide Temp Range (-20°C to 70°C)', 'Dual LAN, 6x COM, 8x USB'], 
    specs: { 'Processor': 'Intel Core i7-8550U', 'Memory': '16GB DDR4', 'Storage': '512GB SSD', 'Power Input': '9-36V DC' } 
  },
  { 
    id: 'nvr-200', name: '32-Channel NVR', model: 'TF-NVR-32CH', category: 'Surveillance & Security', 
    image: 'https://images.unsplash.com/photo-1617886322207-6f504e7472c2?w=800&auto=format&fit=crop', 
    features: ['Supports 32 IP Cameras', '4K Ultra HD Resolution Output', 'H.265+ High-Efficiency Compression', '2x SATA HDD Bays (Up to 20TB)'], 
    specs: { 'Decoding': 'H.265+/H.265/H.264', 'Bandwidth': '256Mbps', 'Video Output': 'HDMI/VGA', 'Storage': 'Up to 10TB per HDD' } 
  },
  { 
    id: 'plc-303', name: 'Automation PLC Controller', model: 'TF-PLC-303', category: 'Automation Devices', 
    image: 'https://images.unsplash.com/photo-1633493714962-1849b2075551?w=800&auto=format&fit=crop', 
    features: ['High-speed processing core', 'Modular I/O Expansion Slots', 'Supports Ethernet/IP and Modbus TCP', 'Built-in Web Server'], 
    specs: { 'Program Memory': '2MB', 'I/O Points': 'Up to 1,024', 'Communication': 'RS232, RS485, Ethernet', 'Power': '24V DC' } 
  },
  { 
    id: 'nwe-401', name: 'Enterprise Managed Switch', model: 'TF-SW-24P', category: 'Networking Equipment', 
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&auto=format&fit=crop', 
    features: ['24-Port Gigabit Ethernet', '4 SFP Fiber Uplink Ports', 'Layer 2+ Management', 'PoE+ Support (370W)'], 
    specs: { 'Switching Capacity': '56 Gbps', 'Forwarding Rate': '41.7 Mpps', 'MAC Table': '8K', 'VLANs': 'Supports 4K VLANs' } 
  }
];

const solutionsByIndustry = [
    {
        slug: 'smart-cities-public-safety', title: 'Smart Cities & Public Safety',
        image: 'https://images.unsplash.com/photo-1549924231-f97aDE7e0344?w=1000&auto=format&fit=crop',
        description: 'Integrating digital city solutions with advanced security systems to enhance urban management, traffic flow, and public safety for government agencies.',
        successStories: [
            { title: 'Metropolitan Traffic Control', description: 'Deployed an integrated traffic engineering and monitoring system, reducing congestion by 22%.' },
            { title: 'National Customs Security', description: 'Implemented THSCAN container inspection systems at major ports, significantly improving smuggling detection rates.' }
        ]
    },
    {
        slug: 'education-smart-campus', title: 'Education & Smart Campus',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1000&auto=format&fit=crop',
        description: 'Creating connected and intelligent learning environments with unified campus management, digital resources, and enhanced security for educational institutions.',
        successStories: [
            { title: 'University Campus BMS', description: 'Rolled out a building management system across a 30-building campus, centralizing control of HVAC, lighting, and access.' },
            { title: 'Digital Library Transformation', description: 'Utilized AI facial recognition and RFID to create a seamless, self-service library experience for over 20,000 students.' }
        ]
    },
    {
        slug: 'energy-industrial-parks', title: 'Energy & Industrial Parks',
        image: 'https://images.unsplash.com/photo-1605663849925-8a594e6371a3?w=1000&auto=format&fit=crop',
        description: 'Developing zero-carbon and energy-efficient industrial parks through smart grids, heat pump technology, and integrated resource management.',
        successStories: [
            { title: 'Zero-Carbon Industrial Zone', description: 'Built a "smart brain" for a new park, integrating solar, energy storage, and smart controls to reduce carbon emissions.' },
            { title: 'Factory Automation Upgrade', description: 'Implemented a modern Manufacturing Execution System (MES), enabling paperless operations and improving production visualization.' }
        ]
    }
];

const solutionsByScenario = [
    { title: 'Urban Traffic Management', image: 'https://images.unsplash.com/photo-1568984315266-b5143493988c?w=500&auto=format&fit=crop' },
    { title: 'University & School Campuses', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500&auto=format&fit=crop' },
    { title: 'Industrial Manufacturing Plants', image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=500&auto=format&fit=crop' },
    { title: 'Airports & Port Terminals', image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=500&auto=format&fit=crop' },
    { title: 'Corporate Office Buildings', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&auto=format&fit=crop' },
    { title: 'Hotels & Resorts', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop' },
    { title: 'Data Centers', image: 'https://images.unsplash.com/photo-1581093450029-1a75b2873846?w=500&auto=format&fit=crop' },
    { title: 'Hospitals & Medical Centers', image: 'https://images.unsplash.com/photo-1586773860414-72d26f7d11e3?w=500&auto=format&fit=crop' }
];

const solutionsByFunction = [
  {
    category: "Building Management & Automation",
    solutions: [
      { title: 'Integrated BMS Platform', icon: 'fas fa-sitemap' }, { title: 'HVAC Control & Optimization', icon: 'fas fa-wind' },
      { title: 'Intelligent Lighting Control', icon: 'far fa-lightbulb' }, { title: 'Energy Management Systems', icon: 'fas fa-bolt' },
    ]
  },
  {
    category: "Security & Safety",
    solutions: [
      { title: 'Centralized Video Surveillance', icon: 'fas fa-video' }, { title: 'Unified Access Control', icon: 'fas fa-id-card-alt' },
      { title: 'Intrusion Detection & Alarms', icon: 'fas fa-exclamation-triangle' }, { title: 'Cargo & Vehicle Inspection', icon: 'fas fa-truck-loading' },
    ]
  },
  {
    category: "Digital Information & AIoT",
    solutions: [
      { title: 'AIoT Edge Computing', icon: 'fas fa-microchip' }, { title: 'Big Data Analytics Platform', icon: 'fas fa-database' },
      { title: 'Industrial Internet of Things (IIoT)', icon: 'fas fa-industry' }, { title: 'Custom Software Development', icon: 'fas fa-code' },
    ]
  }
];

const downloads = [
  { id: 1, title: 'T-IPC-101 Datasheet.pdf', type: 'Datasheet', productId: 'ipc-101' },
  { id: 2, title: 'TF-NVR-32CH User Manual.pdf', type: 'Manual', productId: 'nvr-200' },
  { id: 3, title: 'TF-PLC-303 Programming Guide.pdf', type: 'Manual', productId: 'plc-303' },
  { id: 4, title: 'Enterprise Switch Firmware v2.1.zip', type: 'Firmware', productId: 'nwe-401' },
];

export const ApiService = {
  fetchProducts(category = null) {
    return new Promise(resolve => setTimeout(() => {
      if (category) { resolve(products.filter(p => p.category === category)); } 
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