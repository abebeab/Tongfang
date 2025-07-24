// This file mocks a connection to a backend API or CMS.

const products = [
  { id: 'ipc-101', name: 'Industrial PC T-IPC-101', model: 'T-IPC-101', category: 'Computing Devices', image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500', features: ['Fanless Design', 'Intel Core i7 Processor', 'Wide Temp Range (-20°C to 70°C)', 'Dual LAN, 6x COM, 8x USB'], specs: { 'Processor': 'Intel Core i7-8550U', 'Memory': '16GB DDR4', 'Storage': '512GB SSD', 'Power': '9-36V DC' } },
  { id: 'nvr-200', name: '32-Channel NVR', model: 'TF-NVR-32CH', category: 'Surveillance & Security', image: 'https://images.unsplash.com/photo-1617886322207-6f504e7472c2?w=500', features: ['Supports 32 IP Cameras', '4K Ultra HD Resolution', 'H.265+ Compression', '2x SATA HDD Bays'], specs: { 'Decoding': 'H.265+/H.265/H.264', 'Bandwidth': '256Mbps', 'Output': 'HDMI/VGA', 'Storage': 'Up to 10TB per HDD' } },
  { id: 'plc-303', name: 'Automation PLC Controller', model: 'TF-PLC-303', category: 'Automation Devices', image: 'https://images.unsplash.com/photo-1633493714962-1849b2075551?w=500', features: ['High-speed processing', 'Modular I/O Expansion', 'Ethernet/IP and Modbus TCP', 'Built-in Web Server'], specs: { 'Program Memory': '2MB', 'I/O Points': 'Up to 1,024', 'Communication': 'RS232, RS485, Ethernet', 'Power': '24V DC' } },
  { id: 'nwe-401', name: 'Enterprise Managed Switch', model: 'TF-SW-24P', category: 'Networking Equipment', image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500', features: ['24-Port Gigabit Ethernet', '4 SFP Fiber Ports', 'Layer 2+ Management', 'PoE+ Support (370W)'], specs: { 'Switching Capacity': '56 Gbps', 'Forwarding Rate': '41.7 Mpps', 'MAC Address Table': '8K', 'VLANs': 'Supports 4K VLANs' } }
];

const solutions = [
  { slug: 'smart-offices', title: 'Smart Office & Building Automation', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500', shortDescription: 'Enhance productivity and security with integrated energy management and access control.', description: '<p>Comprehensive solutions for modern offices focusing on energy management,</p> access control, and smart automation to enhance productivity and security.', relatedProducts: ['ipc-101', 'nwe-401'] },
  { slug: 'airport-integration', title: 'Airport Terminal Integration', image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=500', shortDescription: 'Unified terminal automation, public address systems, and security for modern airports.', description: 'Integrated systems for airport terminals, including public address systems, terminal automation, baggage handling control, and unified security integration.', relatedProducts: ['nvr-200', 'ipc-101'] },

  { slug: 'Multimedia Conference System', title: 'Multimedia Conference System', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500', shortDescription: 'Enhance productivity and security with integrated energy management and access control.', description: 'Comprehensive solutions for modern offices focusing on energy management, access control, and smart automation to enhance productivity and security.', relatedProducts: ['ipc-101', 'nwe-401'] },
  { slug: 'airport-integration', title: 'Airport Terminal Integration', image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=500', shortDescription: 'Unified terminal automation, public address systems, and security for modern airports.', description: 'Integrated systems for airport terminals, including public address systems, terminal automation, baggage handling control, and unified security integration.', relatedProducts: ['nvr-200', 'ipc-101'] }

];

const downloads = [
  { id: 1, title: 'T-IPC-101 Datasheet.pdf', type: 'Datasheet', productId: 'ipc-101' },
  { id: 2, title: 'TF-NVR-32CH User Manual.pdf', type: 'Manual', productId: 'nvr-200' },
  { id: 3, title: 'Firmware v2.1 for TF-NVR-32CH', type: 'Firmware', productId: 'nvr-200' },
  { id: 4, title: 'TF-SW-24P Quick Start Guide.pdf', type: 'Manual', productId: 'nwe-401' }
];

export const ApiService = {
  fetchProducts(category = null) {
    return new Promise(resolve => {
      setTimeout(() => {
        if (category && category !== 'All Categories') {
          resolve(products.filter(p => p.category === category));
        } else {
          resolve(products);
        }
      }, 100);
    });
  },
  findProductById(id) { return new Promise(r => setTimeout(() => r(products.find(p => p.id === id)), 100)); },
  fetchProductCategories() { return new Promise(r => setTimeout(() => r(['All Categories', ...new Set(products.map(p => p.category))]), 100)); },
  fetchSolutions() { return new Promise(r => setTimeout(() => r(solutions), 100)); },
  findSolutionBySlug(slug) { return new Promise(r => setTimeout(() => r(solutions.find(s => s.slug === slug)), 100)); },
  fetchDownloads() { return new Promise(r => setTimeout(() => r(downloads), 100)); }
};