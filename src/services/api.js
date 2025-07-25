// This file mocks a connection to a backend API or CMS.

const products = [
  { id: 'ipc-101', name: 'Industrial PC T-IPC-101', model: 'T-IPC-101', category: 'Computing Devices', image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500', features: ['Fanless Design', 'Intel Core i7 Processor', 'Wide Temp Range (-20°C to 70°C)', 'Dual LAN, 6x COM, 8x USB'], specs: { 'Processor': 'Intel Core i7-8550U', 'Memory': '16GB DDR4', 'Storage': '512GB SSD', 'Power': '9-36V DC' } },
  { id: 'nvr-200', name: '32-Channel NVR', model: 'TF-NVR-32CH', category: 'Surveillance & Security', image: 'https://images.unsplash.com/photo-1617886322207-6f504e7472c2?w=500', features: ['Supports 32 IP Cameras', '4K Ultra HD Resolution', 'H.265+ Compression', '2x SATA HDD Bays'], specs: { 'Decoding': 'H.265+/H.265/H.264', 'Bandwidth': '256Mbps', 'Output': 'HDMI/VGA', 'Storage': 'Up to 10TB per HDD' } },
  { id: 'plc-303', name: 'Automation PLC Controller', model: 'TF-PLC-303', category: 'Automation Devices', image: 'https://images.unsplash.com/photo-1633493714962-1849b2075551?w=500', features: ['High-speed processing', 'Modular I/O Expansion', 'Ethernet/IP and Modbus TCP', 'Built-in Web Server'], specs: { 'Program Memory': '2MB', 'I/O Points': 'Up to 1,024', 'Communication': 'RS232, RS485, Ethernet', 'Power': '24V DC' } },
  { id: 'nwe-401', name: 'Enterprise Managed Switch', model: 'TF-SW-24P', category: 'Networking Equipment', image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500', features: ['24-Port Gigabit Ethernet', '4 SFP Fiber Ports', 'Layer 2+ Management', 'PoE+ Support (370W)'], specs: { 'Switching Capacity': '56 Gbps', 'Forwarding Rate': '41.7 Mpps', 'MAC Address Table': '8K', 'VLANs': 'Supports 4K VLANs' } }
];

const solutionsByIndustry = [
    {
        slug: 'smart-offices',
        title: 'Smart Offices',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200',
        description: 'Transform workplaces with intelligent automation, energy management, and integrated security for enhanced productivity.',
        successStories: [
            { title: 'Corporate Tower Automation', description: 'Deployed a unified BMS for a 50-story building, reducing energy costs by 30% and improving employee comfort.' },
            { title: 'Seamless Access Control for Tech Park', description: 'Integrated facial recognition and mobile access for over 5,000 employees, enhancing security and convenience.' }
        ]
    },
    {
        slug: 'airport-integration',
        title: 'Airport Integration',
        image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=1200',
        description: 'Unified terminal automation, public address systems, and security for modern, efficient, and safe airport operations.',
        successStories: [
            { title: 'International Airport Terminal Upgrade', description: 'Upgraded the entire terminal with integrated BMS, security, and public address systems, improving passenger flow and safety.' },
        ]
    },
    {
        slug: 'hotels-hospitality',
        title: 'Hotels & Hospitality',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200',
        description: 'Elevate the guest experience with intelligent room controls, keyless entry, and centralized management.',
        successStories: [
            { title: '5-Star Resort Smart Room Rollout', description: 'Equipped 500 guest rooms with IoT devices for lighting, climate, and entertainment control, boosting guest satisfaction scores.' },
        ]
    },
    {
        slug: 'educational-campuses',
        title: 'Educational Campuses',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200',
        description: 'Create a safe, efficient, and modern learning environment with integrated security and smart campus solutions.',
        successStories: [
            { title: 'University-Wide Security & BMS Integration', description: 'Implemented a central command center for a large university, managing security and energy use across 50+ buildings.' },
        ]
    }
];

const solutionsByScenario = [
    { title: 'Apartments', image: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=500' },
    { title: 'Factories', image: 'https://images.unsplash.com/photo-1580982327341-4c65b5375b42?w=500' },
    { title: 'Classroom Hub', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500' },
    { title: 'Urban Roadways', image: 'https://images.unsplash.com/photo-1528952643265-22501a03c113?w=500' },
    { title: 'Office Buildings', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500' },
    { title: 'Retail Stores', image: 'https://images.unsplash.com/photo-1556740738-b6a63e2775d2?w=500' },
    { title: 'Bus Stop', image: 'https://images.unsplash.com/photo-1569921471702-8367a14594c2?w=500' },
    { title: 'Car Dealerships', image: 'https://images.unsplash.com/photo-1551522435-a131bf538a72?w=500' },
    { title: 'Conference Rooms', image: 'https://images.unsplash.com/photo-1580577661853-b4e4d1b72a0f?w=500' },
    { title: 'Construction Site', image: 'https://images.unsplash.com/photo-1581092448348-1ce241e57c61?w=500' },
    { title: 'Electrical Substations', image: 'https://images.unsplash.com/photo-1581373446412-25b4b15091a1?w=500' },
    { title: 'Gas Stations', image: 'https://images.unsplash.com/photo-1609139206689-a6a3b6187b5a?w=500' },
    { title: 'Highways', image: 'https://images.unsplash.com/photo-1522277026334-601c4581f1b4?w=500' },
    { title: 'Hotels', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbb5eb?w=500' },
    { title: 'Monitoring Center', image: 'https://images.unsplash.com/photo-1581093450029-1a75b2873846?w=500' },
    { title: 'Parking Lots', image: 'https://images.unsplash.com/photo-1545802187-89fb4703b418?w=500' },
    { title: 'Schools', image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500' },
    { title: 'Shopping Malls', image: 'https://images.unsplash.com/photo-1580614521479-723d706346a0?w=500' },
    { title: 'Transit Bus On-board', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500' },
    { title: 'Warehouses', image: 'https://images.unsplash.com/photo-1565610214489-13a8a3a83a15?w=500' },
    { title: 'Onshore Oilfields', image: 'https://images.unsplash.com/photo-1627931932375-9c56f709142f?w=500' },
    { title: 'Supermarkets', image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=500' },
    { title: 'Offshore Oil Platform', image: 'https://images.unsplash.com/photo-1533446078393-9031b3152554?w=500' },
    { title: 'Transmission Line Inspection', image: 'https://images.unsplash.com/photo-1497334734564-2101e9d8f332?w=500' },
    { title: 'Pipeline Inspection', image: 'https://images.unsplash.com/photo-1619451878437-0f862c129482?w=500' },
    { title: 'Solar Farms', image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e78?w=500' },
    { title: 'Hydroelectric Power Plants', image: 'https://images.unsplash.com/photo-1599446483647-36b1397b97a2?w=500' }
];

const solutionsByFunction = [
  {
    category: "Smart Campus & Education",
    solutions: [
      { title: 'Smart Campus Solution', icon: 'fas fa-school' },
      { title: 'Intelligent Campus Solution', icon: 'fas fa-chalkboard-teacher' },
      { title: 'Big Data Solution for Educational Informatization and Smart Campus', icon: 'fas fa-database' },
    ]
  },
  {
    category: "Healthcare & Hospitality",
    solutions: [
      { title: 'Design Scheme for Integrated Management of Smart Hospital Entrances and Exits', icon: 'fas fa-hospital-user' },
      { title: 'Intelligent Design Scheme for International Medical Center', icon: 'fas fa-clinic-medical' },
      { title: 'Network Architecture Diagram of the Three Major Systems in the International Medical Center', icon: 'fas fa-network-wired' },
      { title: 'Hotel Security System Design Scheme', icon: 'fas fa-hotel' },
      { title: 'Intelligent Design Scheme for Hotels', icon: 'fas fa-concierge-bell' },
    ]
  },
  {
    category: "Smart Venues & Public Spaces",
    solutions: [
      { title: 'Intelligent Building System Solution', icon: 'fas fa-building' },
      { title: 'Intelligent Project Scheme for Sports Center', icon: 'fas fa-futbol' },
      { title: 'Intelligent System Reporting Scheme for Stadiums and Gymnasiums', icon: 'fas fa-chart-line' },
      { title: 'Smart Public Toilet Solution', icon: 'fas fa-restroom' },
    ]
  },
  {
    category: "Industrial & Infrastructure",
    solutions: [
      { title: 'Integrated Smart Park Solution combining Hardware and Software', icon: 'fas fa-industry' },
      { title: 'Intelligent Solution for Smart Low-Carbon Parks', icon: 'fas fa-leaf' },
      { title: 'Solution for Smart Park Integrated Management Platform', icon: 'fas fa-sitemap' },
      { title: 'Solutions for Big Data Cloud Computing and Intelligent Smart Ports', icon: 'fas fa-anchor' },
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