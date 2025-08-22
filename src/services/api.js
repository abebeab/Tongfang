// This file mocks a connection to a backend API or CMS.

// --- Helper for images in the 'assets' folder ---
// To use your images, place them in 'src/assets/images/'
// and reference them like this: require('@/assets/images/your-image-name.jpg')

const products = [
  {
    id: 'ipc-101', brand: 'TONGFANG', name: 'Industrial PC T-IPC-101', model: 'T-IPC-101', category: 'Computing Devices',
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&auto=format=fit=crop',
    features: ['Fanless, Ruggedized Design', 'Intel Core i7 Processor', 'Wide Temp Range (-20°C to 70°C)', 'Dual LAN, 6x COM, 8x USB'],
    specs: { 'Processor': 'Intel Core i7-8550U', 'Memory': '16GB DDR4', 'Storage': '512GB SSD', 'Power Input': '9-36V DC' }
  },
  {
    id: 'nvr-200', brand: 'TONGFANG', name: '32-Channel NVR', model: 'TF-NVR-32CH', category: 'Surveillance & Security',
    image: require('@/assets/images/NVR.jpg'),
    features: ['Supports 32 IP Cameras', '4K Ultra HD Resolution Output', 'H.265+ High-Efficiency Compression', '2x SATA HDD Bays (Up to 20TB)'],
    specs: { 'Decoding': 'H.265+/H.265/H.264', 'Bandwidth': '256Mbps', 'Video Output': 'HDMI/VGA', 'Storage': 'Up to 10TB per HDD' }
  },
  {
    id: 'ht-ac-r201-f', brand: 'TONGFANG', name: 'Fingerprint & Card Reader', model: 'HT-AC-R201-F', category: 'Automation Devices',
    image: require('@/assets/images/products/intercom.jpg'),
    features: ['Supports 13.56MHz Mifare cards', 'Capacitive Fingerprint Sensor', 'IP65 Weatherproof Rating', 'Wiegand and RS-485 Communication'],
    specs: { 'Recognition Speed': '< 0.5s', 'Card Type': 'Mifare 1', 'Communication': 'Wiegand, RS-485', 'Operating Temp': '-20°C to +65°C' }
  }
];

// Content for the "Solutions by Industry" tabs.
const solutionsByIndustry = [
    {
        slug: 'smart-campus',
        title: 'Intelligent Campus Solutions',
        image: require('@/assets/images/Picture1.jpg'),
        shortDescription: "Enhancing learning environments with integrated, AIoT-powered campus management.",
        description: "TONGFANG provides a comprehensive Intelligent Campus Solution that integrates everything from smart classroom technology to campus-wide security and energy management. Our platform uses big data to optimize resource allocation, improve student safety, and create a seamless digital experience for both faculty and students, paving the way for the future of education.",
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
        slug: 'smart-ports',
        title: 'Intelligent Smart Ports',
        image: require('@/assets/images/hero-bg-3.png'),
        shortDescription: "Transforming traditional ports into agile, data-driven hubs of global trade.",
        description: "TONGFANG empowers modern ports with cutting-edge AIoT, big data, and cloud computing technologies to drive operational efficiency, sustainability, and safety. Our solutions integrate real-time monitoring, automated logistics, and intelligent decision-making to streamline cargo handling, reduce energy consumption, and enhance port management. Leveraging 5G, IoT sensors, and AI-driven analytics, we enable seamless coordination between ships, trucks, and terminals.",
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
    }
];

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

// --- FIX: EXPANDED MOCK DATA FOR ALL CATEGORIES ---
const categoryDetails = {
  // Group: Computing Devices
  'industrial-pcs': {
    name: 'TONGFANG Industrial PCs (IPC)',
    slug: 'industrial-pcs',
    hero: { title: 'Rugged, Reliable Industrial Computing', subtitle: 'Engineered for harsh environments and critical applications.', image: require('@/assets/images/products/jpg.jpg'), },
    introduction: 'Our industrial PCs are built to withstand extreme temperatures, vibration, and dust, providing a reliable computing backbone for manufacturing, automation, and infrastructure projects.',
    subCategories: [
      { name: 'Fanless Box PCs', description: 'Compact and durable for versatile deployment.', image: require('@/assets/images/products/jpg.jpg') },
      { name: 'Panel PCs', description: 'Integrated touch-screen solutions for HMI applications.', image: require('@/assets/images/products/interactive-flat-panel.png') },
    ],
    products: [
        { id: 'ipc-101', model: 'HT-IPC-F7', name: 'Fanless i7 Box PC', subCategory: 'Fanless Box PCs', image: require('@/assets/images/products/jpg.jpg'), new: true },
    ],
    applicationScenarios: [ { name: 'Factory Automation', image: require('@/assets/images/hero-bg-3.png') }, { name: 'Smart City Control Rooms', image: require('@/assets/images/data_center.png') } ]
  },
  'pdus': {
    name: 'TONGFANG Power Distribution Units',
    slug: 'pdus',
    hero: { title: 'Intelligent Power Management', subtitle: 'Optimize, monitor, and manage data center power consumption.', image: require('@/assets/images/products/distribution.jpg'), },
    introduction: 'TONGFANG PDUs provide reliable power distribution for critical IT equipment, offering features like remote outlet monitoring and control to improve uptime and energy efficiency.',
    subCategories: [ { name: 'Basic PDUs', description: 'Reliable rack power distribution.', image: require('@/assets/images/products/distribution.jpg') }, { name: 'Metered & Switched PDUs', description: 'Advanced remote monitoring and control.', image: require('@/assets/images/products/distribution.jpg') } ],
    products: [ { id: 'pdu-b16', model: 'HT-PDU-B16', name: '16-Outlet Basic PDU', subCategory: 'Basic PDUs', image: require('@/assets/images/products/distribution.jpg'), new: false } ],
    applicationScenarios: [ { name: 'Data Centers', image: require('@/assets/images/data_center.png') }, { name: 'Network Closets', image: require('@/assets/images/hero-bg-2.jpg') } ]
  },
  'bms-software': {
    name: 'TONGFANG Integrated Management Software',
    slug: 'bms-software',
    hero: { title: 'Unified Control Platform', subtitle: 'A single pane of glass for all your building systems.', image: require('@/assets/images/products/software.jpg'), },
    introduction: 'Our BMS software integrates HVAC, lighting, security, and energy systems into a cohesive and intelligent platform, providing actionable insights and centralized control.',
    subCategories: [ { name: 'BMS Enterprise', description: 'Scalable platform for large facilities.', image: require('@/assets/images/products/software.jpg') }, ],
    products: [ { id: 'bms-ent-1', model: 'TF-BMS-ENT-V3', name: 'TONGFANG BMS Enterprise V3.0', subCategory: 'BMS Enterprise', image: require('@/assets/images/products/software.jpg'), new: true } ],
    applicationScenarios: [ { name: 'Smart Campus', image: require('@/assets/images/Picture1.jpg') }, { name: 'Corporate Office Buildings', image: require('@/assets/images/hero-bg-2.jpg') } ]
  },

  // Group: Surveillance & Security
  'ip-cameras': {
    name: 'TONGFANG IP Network Cameras',
    slug: 'ip-cameras',
    hero: { title: 'High-Definition IP Surveillance', subtitle: 'Capture every detail with our advanced network cameras.', image: require('@/assets/images/products/network-products.jpg'), },
    introduction: 'From high-resolution dome cameras to panoramic fisheye lenses, our IP cameras deliver superior image quality and intelligent analytics for proactive security.',
    subCategories: [ { name: 'Dome Cameras', description: 'Discreet and versatile for indoor/outdoor use.', image: require('@/assets/images/products/network-products.jpg') }, { name: 'Bullet Cameras', description: 'Visible deterrent with long-range capabilities.', image: require('@/assets/images/products/turbo-hd.jpg') } ],
    products: [ { id: 'ipc-d2', model: 'HT-IP-D5MP', name: '5MP Vandal-Proof Dome Camera', subCategory: 'Dome Cameras', image: require('@/assets/images/products/network-products.jpg'), new: true } ],
    applicationScenarios: [ { name: 'Retail Stores', image: require('@/assets/images/h.jpg') }, { name: 'Public Spaces', image: require('@/assets/images/Picture1.jpg') } ]
  },
   'analog-cameras': {
    name: 'TONGFANG HD Analog Cameras',
    slug: 'analog-cameras',
    hero: { title: 'Cost-Effective HD Video', subtitle: 'Upgrade to high-definition over existing coaxial infrastructure.', image: require('@/assets/images/products/turbo-hd.jpg'), },
    introduction: 'Our Turbo HD line brings high-resolution video and modern features to analog systems, providing a cost-effective upgrade path without the need for complete rewiring.',
    subCategories: [ { name: 'Turbo HD Turret', description: 'Flexible and powerful HD-over-coax cameras.', image: require('@/assets/images/products/turbo-hd.jpg') } ],
    products: [ { id: 'thd-t5', model: 'HT-THD-T5MP', name: '5MP Turbo HD Turret Camera', subCategory: 'Turbo HD Turret', image: require('@/assets/images/products/turbo-hd.jpg'), new: false } ],
    applicationScenarios: [ { name: 'Residential Buildings', image: require('@/assets/images/hero-bg-2.jpg') }, { name: 'Small Businesses', image: require('@/assets/images/h.jpg') } ]
  },
  'thermal-systems': {
    name: 'TONGFANG Thermal Imaging Systems',
    slug: 'thermal-systems',
    hero: { title: 'See Through Darkness and Deception', subtitle: 'Reliable detection based on heat signatures, 24/7.', image: require('@/assets/images/products/thermal.png'), },
    introduction: 'TONGFANG thermal cameras are ideal for perimeter protection, fire detection, and temperature screening, providing reliable detection in complete darkness and challenging weather conditions.',
    subCategories: [ { name: 'Bi-Spectrum Cameras', description: 'Combines thermal and visible light sensors.', image: require('@/assets/images/products/thermal.png') } ],
    products: [ { id: 'therm-bs1', model: 'HT-THERM-BS2', name: 'Bi-Spectrum Thermal & Optical Turret', subCategory: 'Bi-Spectrum Cameras', image: require('@/assets/images/products/thermal.png'), new: true } ],
    applicationScenarios: [ { name: 'Perimeter Protection', image: require('@/assets/images/hero-bg-3.png') }, { name: 'Industrial Parks', image: require('@/assets/images/data_center.png') } ]
  },
  'alarm-system': { // Existing data, confirmed correct
    name: 'TONGFANG Intelligent Alarm System', slug: 'alarm-system',
    hero: { title: 'AX Hybrid PRO Series Wired Alarm System', subtitle: 'All-around protection for a safer world', image: require('@/assets/images/solutions-hero.jpg'), },
    introduction: 'TONGFANG offers a wide range of alarm products that focus on very specific needs and risks, from smoke and water leak detection to perimeter protection, helping you build a powerful security system that monitors all situations.',
    subCategories: [
      { name: 'Wired Intrusion Alarm', description: 'The AX Hybrid PRO Series boasts wired reliability and wireless flexibility', image: require('@/assets/images/products/alarm.png') },
      { name: 'Wireless Intrusion Alarm', description: 'The AX PRO Series is a flexible and easy-to-use system with no wires', image: require('@/assets/images/products/alarm.png') },
      { name: 'Intrusion Accessory', description: 'Enhance security with quality add-on products', image: require('@/assets/images/products/accessories.jpg') },
    ],
    products: [
        { id: 'p1', model: 'DS-PDB-EX-Shelter', name: 'Detector Shelter', subCategory: 'Intrusion Accessory', image: require('@/assets/images/products/alarm.png'), new: true },
        { id: 'p2', model: 'DS-PM2-G', name: 'GPRS Communication Module', subCategory: 'Intrusion Accessory', image: require('@/assets/images/products/alarm.png'), new: true },
        { id: 'p3', model: 'DS-PS1-R', name: 'Wireless Siren', subCategory: 'Wireless Intrusion Alarm', image: require('@/assets/images/products/alarm.png'), new: true },
    ],
    applicationScenarios: [ { name: 'Villas', image: require('@/assets/images/hero-bg-2.jpg') }, { name: 'Offices', image: require('@/assets/images/hero-bg-3.png') }, { name: 'Shops', image: require('@/assets/images/h.jpg') }, ]
  },
  'inspection-gates': {
    name: 'TONGFANG Security Inspection Gates',
    slug: 'inspection-gates',
    hero: { title: 'Efficient and Reliable Security Screening', subtitle: 'Advanced walk-through metal detectors for high-traffic areas.', image: require('@/assets/images/products/inspection.jpg'), },
    introduction: 'Our security inspection gates provide a high level of threat detection with a low rate of false alarms, ensuring smooth and secure throughput in public venues and critical infrastructure.',
    subCategories: [ { name: 'Walk-Through Metal Detectors', description: 'Multi-zone detection for enhanced accuracy.', image: require('@/assets/images/products/inspection.jpg') } ],
    products: [ { id: 'wtmd-18z', model: 'HT-WTMD-18Z', name: '18-Zone Walk-Through Metal Detector', subCategory: 'Walk-Through Metal Detectors', image: require('@/assets/images/products/inspection.jpg'), new: false } ],
    applicationScenarios: [ { name: 'Airports & Transportation Hubs', image: require('@/assets/images/hero-bg-3.png') }, { name: 'Government Buildings', image: require('@/assets/images/Picture1.jpg') } ]
  },
  'hilook': {
    name: 'HiLook by TONGFANG',
    slug: 'hilook',
    hero: { title: 'High-Performance, Entry-Level Solutions', subtitle: 'Reliable video surveillance that is easy to use and budget-friendly.', image: require('@/assets/images/products/hilook.jpg'), },
    introduction: 'HiLook, a brand by TONGFANG, offers a complete range of IP, analog, and transmission solutions ideal for small to medium-sized businesses looking for high-quality at a competitive price.',
    subCategories: [ { name: 'HiLook IP', description: 'Feature-rich and cost-effective network cameras.', image: require('@/assets/images/products/hilook.jpg') } ],
    products: [ { id: 'hl-ipc-d120', model: 'HL-IPC-D120H', name: 'HiLook 2MP Dome Camera', subCategory: 'HiLook IP', image: require('@/assets/images/products/hilook.jpg'), new: false } ],
    applicationScenarios: [ { name: 'Small Shops', image: require('@/assets/images/h.jpg') }, { name: 'Residences', image: require('@/assets/images/hero-bg-2.jpg') } ]
  },

  // Group: Automation Devices
  'access-control': { // Existing data, confirmed correct
    name: 'TONGFANG Smart Access Control', slug: 'access-control',
    hero: { title: 'TONGFANG Smart Access Control', subtitle: 'Secure, intelligent, and seamless entry management for the modern enterprise.', image: require('@/assets/images/hero-bg-2.jpg'), },
    introduction: 'From standalone readers for a single door to fully networked enterprise systems managing hundreds of entry points, TONGFANG\'s access control solutions provide robust, reliable, and scalable security for any facility.',
    subCategories: [
      { name: 'Access Controllers', description: 'The central brain of the system, managing rules and logs.', image: require('@/assets/images/products/access-control.jpg') },
      { name: 'Card & Biometric Readers', description: 'Secure and versatile readers for various credential types.', image: require('@/assets/images/products/intercom.jpg') },
      { name: 'Locks & Accessories', description: 'High-quality electronic locks, buttons, and power supplies.', image: require('@/assets/images/products/accessories.jpg') },
    ],
    products: [
        { id: 'ht-ac-c4', model: 'HT-AC-C4', name: '4-Door Networked Access Controller', subCategory: 'Access Controllers', image: require('@/assets/images/products/access-control.jpg'), new: true },
        { id: 'ht-ac-r101-m', model: 'HT-AC-R101-M', name: 'Mifare Card Reader', subCategory: 'Card & Biometric Readers', image: require('@/assets/images/products/intercom.jpg'), new: false },
        { id: 'ht-ac-r201-f', model: 'HT-AC-R201-F', name: 'Fingerprint & Card Reader', subCategory: 'Card & Biometric Readers', image: require('@/assets/images/products/intercom.jpg'), new: true },
        { id: 'ht-ac-l500', model: 'HT-AC-L500', name: '500kg Magnetic Lock', subCategory: 'Locks & Accessories', image: require('@/assets/images/products/accessories.jpg'), new: false },
        { id: 'ht-ac-b800', model: 'HT-AC-B800', name: 'Stainless Steel Exit Button', subCategory: 'Locks & Accessories', image: require('@/assets/images/products/accessories.jpg'), new: false },
    ],
    applicationScenarios: [ { name: 'Corporate Offices', image: require('@/assets/images/hero-bg-2.jpg') }, { name: 'Data Centers', image: require('@/assets/images/data_center.png') }, { name: 'Residential Buildings', image: require('@/assets/images/Picture1.jpg') }, ]
  },
  'video-intercom': {
    name: 'TONGFANG Building Video Intercom',
    slug: 'video-intercom',
    hero: { title: 'See, Hear, and Speak to Visitors', subtitle: 'IP-based video intercom solutions for secure and convenient communication.', image: require('@/assets/images/products/intercom.jpg'), },
    introduction: 'Our video intercom systems provide a complete solution for door entry, including indoor stations, outdoor doorbells, and mobile app integration for remote access.',
    subCategories: [ { name: 'IP Video Intercom Kits', description: 'All-in-one solutions for homes and offices.', image: require('@/assets/images/products/intercom.jpg') } ],
    products: [ { id: 'ip-ik1', model: 'HT-IP-IK1', name: 'IP Video Intercom Villa Kit', subCategory: 'IP Video Intercom Kits', image: require('@/assets/images/products/intercom.jpg'), new: true } ],
    applicationScenarios: [ { name: 'Apartment Buildings', image: require('@/assets/images/hero-bg-2.jpg') }, { name: 'Office Receptions', image: require('@/assets/images/hero-bg-2.jpg') } ]
  },
  'speed-gates': {
    name: 'TONGFANG Automated Speed Gates',
    slug: 'speed-gates',
    hero: { title: 'Elegant and Secure Entrance Control', subtitle: 'Swing gates and turnstiles for managing pedestrian flow.', image: require('@/assets/images/products/turnstile.png'), },
    introduction: 'TONGFANG speed gates combine aesthetic design with robust security, providing a frictionless entry experience for authorized users while preventing tailgating.',
    subCategories: [ { name: 'Swing Turnstiles', description: 'ADA-compliant and aesthetically pleasing.', image: require('@/assets/images/products/turnstile.png') } ],
    products: [ { id: 'sg-s1', model: 'HT-SG-S100', name: 'Slim Swing Turnstile', subCategory: 'Swing Turnstiles', image: require('@/assets/images/products/turnstile.png'), new: false } ],
    applicationScenarios: [ { name: 'Corporate Lobbies', image: require('@/assets/images/hero-bg-2.jpg') }, { name: 'Fitness Centers', image: require('@/assets/images/h.jpg') } ]
  },
  'traffic-control': {
    name: 'TONGFANG Intelligent Traffic Control',
    slug: 'traffic-control',
    hero: { title: 'Smarter, Safer Roads', subtitle: 'Integrated solutions for traffic management and vehicle detection.', image: require('@/assets/images/products/traffic.png'), },
    introduction: 'Our traffic control products, including ANPR cameras and vehicle detection sensors, help cities manage congestion, enforce traffic laws, and improve road safety.',
    subCategories: [ { name: 'ANPR Cameras', description: 'Automatic number-plate recognition.', image: require('@/assets/images/products/traffic.png') } ],
    products: [ { id: 'anpr-1', model: 'HT-ANPR-C1', name: 'All-in-One ANPR Camera', subCategory: 'ANPR Cameras', image: require('@/assets/images/products/traffic.png'), new: true } ],
    applicationScenarios: [ { name: 'Smart Cities', image: require('@/assets/images/Picture1.jpg') }, { name: 'Parking Garages', image: require('@/assets/images/products/parking.jpg') } ]
  },
  'parking-management': {
    name: 'TONGFANG Parking Management Systems',
    slug: 'parking-management',
    hero: { title: 'Automated & Efficient Parking Solutions', subtitle: 'Barrier gates, payment kiosks, and guidance systems.', image: require('@/assets/images/products/parking.jpg'), },
    introduction: 'Streamline your parking operations with our comprehensive solutions that automate entry/exit, manage payments, and guide drivers to available spaces.',
    subCategories: [ { name: 'Barrier Gates', description: 'Fast and reliable vehicle access control.', image: require('@/assets/images/products/parking.jpg') } ],
    products: [ { id: 'bg-1', model: 'HT-BG-3S', name: '3-Second High-Speed Barrier Gate', subCategory: 'Barrier Gates', image: require('@/assets/images/products/parking.jpg'), new: false } ],
    applicationScenarios: [ { name: 'Shopping Malls', image: require('@/assets/images/h.jpg') }, { name: 'Airports', image: require('@/assets/images/hero-bg-3.png') } ]
  },
  'radar-detection': {
    name: 'TONGFANG Perimeter Radar Detection',
    slug: 'radar-detection',
    hero: { title: 'Advanced Perimeter Protection', subtitle: 'Wide-area detection with low false alarm rates.', image: require('@/assets/images/products/radar.png'), },
    introduction: 'TONGFANG security radars provide accurate intrusion detection over large areas, tracking multiple targets and filtering out false alarms caused by animals or weather.',
    subCategories: [ { name: 'Security Radar', description: 'Reliable detection for critical sites.', image: require('@/assets/images/products/radar.png') } ],
    products: [ { id: 'rd-1', model: 'HT-RD-120', name: '120-Degree Security Radar', subCategory: 'Security Radar', image: require('@/assets/images/products/radar.png'), new: true } ],
    applicationScenarios: [ { name: 'Critical Infrastructure', image: require('@/assets/images/data_center.png') }, { name: 'Luxury Residences', image: require('@/assets/images/hero-bg-2.jpg') } ]
  },

  // Group: Networking Equipment
  'networking-hardware': {
    name: 'TONGFANG Enterprise Switches & Routers',
    slug: 'networking-hardware',
    hero: { title: 'The Backbone of Your Network', subtitle: 'High-performance, reliable networking hardware.', image: require('@/assets/images/products/networking.png'), },
    introduction: 'Our enterprise-grade switches and routers are designed for performance and reliability, providing the stable network foundation required for all integrated systems.',
    subCategories: [ { name: 'Managed PoE Switches', description: 'Power and data for your IP devices.', image: require('@/assets/images/products/networking.png') } ],
    products: [ { id: 'sw-24p', model: 'HT-SW-24P-G2', name: '24-Port Gigabit PoE+ Managed Switch', subCategory: 'Managed PoE Switches', image: require('@/assets/images/products/networking.png'), new: false } ],
    applicationScenarios: [ { name: 'Enterprise Networks', image: require('@/assets/images/hero-bg-2.jpg') }, { name: 'IP Surveillance Systems', image: require('@/assets/images/Picture1.jpg') } ]
  },
  'audio-sensing': {
    name: 'TONGFANG Audio & Sensing Devices',
    slug: 'audio-sensing',
    hero: { title: 'Hear and Sense Everything', subtitle: 'Microphones, speakers, and environmental sensors.', image: require('@/assets/images/products/audio.png'), },
    introduction: 'Complete your solution with our range of audio devices for communication and alarm, and environmental sensors for a complete picture of your facility.',
    subCategories: [ { name: 'Network Speakers', description: 'For public address and announcements.', image: require('@/assets/images/products/audio.png') } ],
    products: [ { id: 'ns-1', model: 'HT-NS-C10', name: '10W IP Ceiling Speaker', subCategory: 'Network Speakers', image: require('@/assets/images/products/audio.png'), new: false } ],
    applicationScenarios: [ { name: 'Schools', image: require('@/assets/images/Picture1.jpg') }, { name: 'Transportation Hubs', image: require('@/assets/images/hero-bg-3.png') } ]
  },
  'accessories': {
    name: 'TONGFANG Cabling & Accessories',
    slug: 'accessories',
    hero: { title: 'The Essential Connections', subtitle: 'High-quality cabling, connectors, and mounting hardware.', image: require('@/assets/images/products/accessories.jpg'), },
    introduction: 'Ensure the integrity of your installation with our full range of professional-grade accessories, from Cat6 cables to weatherproof junction boxes.',
    subCategories: [ { name: 'Mounting Brackets', description: 'For cameras and other devices.', image: require('@/assets/images/products/accessories.jpg') } ],
    products: [ { id: 'acc-jb1', model: 'HT-ACC-JB1', name: 'Weatherproof Junction Box', subCategory: 'Mounting Brackets', image: require('@/assets/images/products/accessories.jpg'), new: false } ],
    applicationScenarios: [ { name: 'All Installations', image: require('@/assets/images/solutions-hero.jpg') } ]
  },
  'display-control': {
    name: 'TONGFANG Central Control Displays',
    slug: 'display-control',
    hero: { title: 'Command and Control Center', subtitle: 'Professional video wall controllers and displays.', image: require('@/assets/images/products/display.jpeg'), },
    introduction: 'Build a powerful video wall for your security operations center with our decoders, encoders, and network keyboards for seamless control.',
    subCategories: [ { name: 'Video Wall Controllers', description: 'Drive multiple displays with ease.', image: require('@/assets/images/products/display.jpeg') } ],
    products: [ { id: 'vwc-1', model: 'HT-VWC-4K-16', name: '16-Channel 4K Video Wall Controller', subCategory: 'Video Wall Controllers', image: require('@/assets/images/products/display.jpeg'), new: true } ],
    applicationScenarios: [ { name: 'Security Control Rooms', image: require('@/assets/images/data_center.png') }, { name: 'Traffic Management Centers', image: require('@/assets/images/Picture1.jpg') } ]
  },
  'led-displays': {
    name: 'TONGFANG Commercial LED Displays',
    slug: 'led-displays',
    hero: { title: 'Brilliant, Seamless Visuals', subtitle: 'Fine-pitch LED displays for stunning video walls.', image: require('@/assets/images/products/led.png'), },
    introduction: 'TONGFANG direct-view LED displays create seamless, high-impact video walls of any size, perfect for advertising, control rooms, and large venues.',
    subCategories: [ { name: 'Indoor Fine Pitch LED', description: 'For incredible detail up close.', image: require('@/assets/images/products/led.png') } ],
    products: [ { id: 'led-p1.5', model: 'HT-LED-P1.5', name: 'P1.5 Indoor LED Display Unit', subCategory: 'Indoor Fine Pitch LED', image: require('@/assets/images/products/led.png'), new: false } ],
    applicationScenarios: [ { name: 'Broadcast Studios', image: require('@/assets/images/hero-bg-2.jpg') }, { name: 'Corporate Lobbies', image: require('@/assets/images/hero-bg-2.jpg') } ]
  },
  'interactive-panels': {
    name: 'TONGFANG Interactive Smart Panels',
    slug: 'interactive-panels',
    hero: { title: 'Collaborate and Engage', subtitle: 'Interactive flat panels for boardrooms and classrooms.', image: require('@/assets/images/products/interactive-flat-panel.png'), },
    introduction: 'Our interactive smart panels combine a 4K display, multi-touch control, and built-in software to create a powerful hub for collaboration and presentations.',
    subCategories: [ { name: 'Education Series', description: 'Designed for the modern classroom.', image: require('@/assets/images/products/interactive-flat-panel.png') }, { name: 'Corporate Series', description: 'For dynamic meetings and presentations.', image: require('@/assets/images/products/interactive-flat-panel.png') } ],
    products: [ { id: 'ifp-c65', model: 'HT-IFP-C65', name: '65-inch Corporate Interactive Panel', subCategory: 'Corporate Series', image: require('@/assets/images/products/interactive-flat-panel.png'), new: true } ],
    applicationScenarios: [ { name: 'Meeting Rooms', image: require('@/assets/images/hero-bg-2.png') }, { name: 'Classrooms & Lecture Halls', image: require('@/assets/images/hall.png') } ]
  },
};


// --- API SERVICE ---
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

  fetchDownloads() { return new Promise(r => setTimeout(() => r(downloads), 100)); },

  // New method for fetching the detailed category data
  fetchCategoryDetails(slug) {
    return new Promise(resolve => setTimeout(() => {
      // In a real app, this would be an API call like: fetch(`/api/categories/${slug}`)
      resolve(categoryDetails[slug]);
    }, 200));
  },
};