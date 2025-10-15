export const ApiService = {
  async fetchDownloads() {
    // Simulate API call for downloads
    return [
      { id: 'manual-001', title: 'BMS Product Manual v2.1', type: 'Manual', productId: 'BMS-PROD-001', url: '...' },
      { id: 'datasheet-001', title: 'Sensor X Specifications', type: 'Datasheet', productId: 'SENSOR-X-001', url: '...' },
      { id: 'firmware-001', title: 'Firmware Update v1.5 for Gateway', type: 'Firmware', productId: 'GATEWAY-001', url: '...' }
    ];
  },

  async fetchSolutionsByIndustry() {
    return [
      {
        slug: 'education-brain',
        title: 'Intelligent Campus Solutions',
        hero: {
          title: 'Smart Campus Solutions',
          subtitle: 'Integrated systems for educational institutions.',
          image: require('@/assets/images/university-campus.jpg')
        },
        fullDescription:
          'Our comprehensive Smart Campus solutions integrate cutting-edge technology such as IoT, 5G, cloud computing, Big Data, and digital twin platforms to create connected, efficient, and sustainable educational environments. The system provides administrators with real-time visualization, monitoring, and intelligent decision-making tools while enhancing teaching, safety, and student experience.',
        introduction:
          'Smart Campus integrates digital twin, BIM/GIS, and IoT to provide a unified management platform that supports safety, energy efficiency, teaching management, and resource optimization across the entire campus.',
        modules: [
          {
            title: 'Safety Management',
            details: [
              'Integration of security monitoring, fire alarms, and visitor tracking.',
              'Accurately counts and records the number of school visitors every day.',
              'Updates the security rotation status in real time.',
              'Prevents and controls epidemics.',
              'Manages outsiders entering and exiting the school.',
              'Ensures the safety of teachers and students on campus.'
            ]
          },
          {
            title: 'Security Monitoring',
            image: '/images/modules/security-monitoring.jpg',
            details: [
              '🔹 **3D Visualization:** Explore detailed 3D models of all key buildings, including classrooms, dormitories, and canteens, with clear visualization of architectural layouts and internal structures.',
              '🔹 **Integrated Surveillance:** Seamlessly combines video monitoring, access control alarms, and real-time tracking of personnel to ensure maximum safety.',
              '🔹 **Real-Time Monitoring:** Observe the status of key areas, detect anomalies, and respond instantly to any security incidents.',
              '🔹 **Efficient Management:** Provides campus managers with actionable insights to make informed decisions, streamline safety operations, and maintain a secure environment for students, staff, and visitors.',
              '🔹 **Proactive Safety Measures:** Monitors crowd flow, detects unauthorized access, and supports emergency response planning for a truly safe and smart campus.'
            ]
          },
          {
            title: 'Energy Management',
            details: [
              'Visualization of electricity usage in classrooms and devices.',
              'Enables administrators to optimize energy, reduce waste, and prevent hazards.'
            ]
          },
          {
            title: 'Teaching Management',
            details: [
              'Synchronizes with academic affairs system for real-time schedules.',
              'Provides heat maps, remote class inspections, and automated announcements.'
            ]
          },
          {
            title: 'Operation & Maintenance',
            details: [
              'Collects repair reports, assigns responsibilities, and tracks pending issues.',
              'Improves efficiency in addressing equipment and facility faults.'
            ]
          },
          {
            title: 'Venue Management',
            details: [
              'Centralized management of labs, offices, and multimedia rooms.',
              'Displays real-time usage data for better resource allocation.'
            ]
          },
          {
            title: 'Asset Management',
            details: [
              'Tracks software and hardware such as instruments, furniture, and teaching equipment.',
              'Supports long-term planning and financial management.'
            ]
          }
        ],
        benefits: [
          'Smart Classroom Integration',
          'Advanced Security Systems',
          'Energy Efficiency Management',
          'Digital Administration',
          'Campus-wide Digital Twin Visualization',
          'Improved Teaching & Learning Experience'
        ],
        technicalHighlights: [
          '1:1 Digital Twin 3D simulation of the entire campus',
          'Multi-terminal adaptation (PC, mobile, large screen)',
          'Cloud rendering for smooth and scalable performance',
          'Supports CS/BS distributed deployment'
        ]
      },
      {
        slug: 'smart-healthcare',
        title: 'Smart Hospital Integrated Management',
        hero: {
          title: 'Smart Hospital Integrated Access Management Solution',
          subtitle: 'Comprehensive vehicle management, access control, and patient guidance systems',
          image: require('@/assets/images/medical.jpg')
        },
        introduction: 'Our Smart Hospital Integrated Access Management Solution creates a new smart environment experience through a unified service platform, achieving unified control over business flows, data flows, and capital flows across hospital operations.',
        fullDescription: `This comprehensive smart hospital solution integrates vehicle management, access control systems, cafeteria consumption, patient navigation, and attendance tracking into a single unified platform. Leveraging IoT technology, AI analytics, and centralized management, we transform traditional hospital operations into intelligent, efficient, and patient-friendly environments. The system seamlessly connects parking management, personnel access, consumption services, and patient guidance while integrating with existing hospital systems like HIS, EHR, and OA for complete operational synergy.`,
        
        modules: [
          {
            title: 'Smart Vehicle & Parking Management',
            image: '/images/modules/hospital-parking.jpg',
            details: [
              '🔹 **High-Accuracy License Plate Recognition**: 99.5% recognition rate supporting various license plate types including blue, yellow, new energy vehicles, and special plates',
              '🔹 **Multi-level Parking Guidance**: Primary perimeter guidance, secondary underground area guidance, and tertiary vacancy guidance with real-time space monitoring',
              '🔹 **Reverse Vehicle Search**: Touchscreen terminals enabling vehicle location by license plate, parking space number, or time period with photo verification',
              '🔹 **Smart Parking Operations**: Unattended cloud operations, multiple payment methods, queue management, and equipment failure early warning systems',
              '🔹 **Parking Space Reservation & Management**: VIP parking locks, dedicated space configuration, illegal parking alerts, and cross-region centralized management'
            ]
          },
          {
            title: 'Integrated Access Control System',
            image: '/images/modules/hospital-access.jpg',
            details: [
              '🔹 **Multi-mode Authentication**: Face recognition, card swipe, mobile app, and password access with live verification and mask detection capabilities',
              '🔹 **Thermal Imaging Temperature Screening**: Long-range precision temperature measurement with facial recognition and mask detection integration',
              '🔹 **Tiered Authorization & Time-Limited Access**: Granular permission controls by organization or access zone with automatic permission downloads',
              '🔹 **Elevator Access Control**: Card swipe, QR code elevator control with privilege cards and emergency unrestricted access restoration',
              '🔹 **Real-time Security Monitoring**: Door timed-out alarms, tampering alerts, illegal card access notifications, and fire alarm integration'
            ]
          },
          {
            title: 'Campus Consumption & Cafeteria Management',
            image: '/images/modules/hospital-cafeteria.jpg',
            details: [
              '🔹 **Multi-payment Integration**: Employee card swipes, WeChat Pay, Alipay QR codes, and cash transactions with unified POS terminals',
              '🔹 **Multi-Account System**: Custom account creation with configurable spending permissions and automatic/manual subsidy distribution',
              '🔹 **Batch Operations Management**: Bulk account creation, top-ups, real-name verification, freezing, and unfreezing with one-click processing',
              '🔹 **Discount & Promotion Management**: Percentage off or fixed amount deductions with backend configuration and frontend display',
              '🔹 **Online Ordering System**: Mobile app ordering for patients with limited mobility and medical staff meal ordering with delivery services'
            ]
          },
          {
            title: 'Patient Guidance & Navigation',
            image: '/images/modules/hospital-navigation.jpg',
            details: [
              '🔹 **Real-time Indoor Navigation**: Dynamic path planning with one-tap preview, turn-by-turn guidance, and automatic floor recognition with 99% accuracy',
              '🔹 **HIS System Integration**: Automated one-stop guidance planning linked to patient medical IDs throughout consultation to specialized departments',
              '🔹 **Multi-mode Navigation**: 5G+AR augmented reality navigation, voice guidance, and traditional map-based navigation with real-time location sharing',
              '🔹 **Facility Search & Static Navigation**: Service facility location search with direct navigation and public facility guidance systems',
              '🔹 **Physical Guidance Infrastructure**: Patient guidance touchscreens, departmental guidance kiosks, and examination room inquiry systems'
            ]
          },
          {
            title: 'Attendance & Personnel Management',
            image: '/images/modules/hospital-attendance.jpg',
            details: [
              '🔹 **Seamless Attendance Tracking**: Automatic attendance recording through entry/exit data with frictionless tracking capabilities',
              '🔹 **Flexible Scheduling System**: Regular scheduling, calendar scheduling, team scheduling, and cross-team borrowing with peak/off-peak period management',
              '🔹 **Real-time Attendance Calculation**: Instant attendance data processing with automatic alerts for abnormal data and schedule reasonableness verification',
              '🔹 **Multi-industry Rule Templates**: Rapid implementation with industry-specific attendance rules and automatic recommendation of skill-matched personnel',
              '🔹 **Comprehensive Data Management**: Flexible settlement cycles, real-time query of attendance reports, and online attendance record inquiry'
            ]
          },
          {
            title: 'Unified Platform Management',
            image: '/images/modules/hospital-platform.jpg',
            details: [
              '🔹 **B/S Architecture Platform**: Internet microservices architecture with modular functions down to button level for standardization and customization',
              '🔹 **Open Integration Platform**: Seamless integration with internal systems, third-party systems, and devices with data-interoperable information services',
              '🔹 **Distributed Deployment**: Independent core and access system servers enabling effortless platform upgrades and maintenance without service interruption',
              '🔹 **Centralized Multi-Project Management**: Horizontal (across projects) and vertical (across services) centralized management for enterprise information control',
              '🔹 **AI-Powered Analytics**: Intelligent analysis of operational data, automatic anomaly identification, and actionable insights for optimization'
            ]
          }
        ],
        
        benefits: [
          'Unified Platform Management with centralized control over all hospital operations',
          'Enhanced Operational Efficiency through automated processes and reduced manual intervention',
          'Improved Patient Experience with seamless navigation, reduced waiting times, and convenient services',
          'Comprehensive Data Integration connecting HIS, EHR, OA, and vehicle management systems',
          'Reduced Personnel Costs through automation and self-service operations',
          'Enhanced Security & Safety with multi-layer access control and real-time monitoring',
          'Scalable & Flexible Architecture supporting future expansion and system integration',
          'IoT-Enabled Smart Environment creating a modern, technology-driven healthcare facility'
        ],
        
        technicalHighlights: [
          'Unified B/S Architecture Platform with microservices modular design',
          '99.5%+ License Plate Recognition Accuracy with cloud agent processing',
          'Real-time Indoor Navigation with 99% floor recognition accuracy and AR capabilities',
          'Multi-mode Authentication supporting facial recognition, mobile apps, and card access',
          'Distributed Deployment Architecture for seamless upgrades and maintenance',
          'AI-Powered Analytics for operational optimization and anomaly detection',
          'Comprehensive IoT Integration connecting people, vehicles, consumption, and third-party devices',
          'Open API Platform with rich interfaces for system integration and customization'
        ]
      },
      {
        slug: 'stadiums-and-arenas',
        title: 'Intelligent Systems for Stadiums & Arenas',
        hero: {
          title: 'Intelligent Stadium & Arena Systems',
          subtitle: 'Comprehensive smart solutions for modern sports and entertainment venues',
          image: require('@/assets/images/solution-stadium.jpg')
        },
        introduction: 'Modern sports venues require advanced communication and information technology to achieve true intelligence. Our integrated systems transform stadiums and gymnasiums into smart, efficient, and secure environments that enhance both operational management and visitor experience.',
        fullDescription: 'Our comprehensive intelligent system solution for stadiums and arenas integrates cutting-edge technologies across security, operations, event management, and information services. From advanced video surveillance and access control to sophisticated timing systems and multimedia displays, we provide end-to-end solutions that ensure seamless operations, enhanced safety, and unforgettable fan experiences.',
        
        modules: [
          {
            title: 'Venue Security & Safety Subsystem',
            image: '/images/modules/stadium-security.jpg',
            details: [
              '🔹 **CCTV Video Surveillance**: Comprehensive monitoring of entrances, exits, public areas, VIP rooms, equipment rooms, and parking facilities with flexible deployment and long-term storage',
              '🔹 **Intrusion Detection**: Advanced perimeter protection for critical areas with real-time alarm triggering and system redundancy',
              '🔹 **Access Control**: Multi-layer entry management with smart card integration and emergency override capabilities',
              '🔹 **License Plate Recognition**: Automated parking management with image comparison and space classification',
              '🔹 **Electronic Patrol**: Systematic security rounds monitoring with encrypted data collection and reporting',
              '🔹 **Integrated Security Management**: Unified platform connecting all security subsystems with centralized monitoring and control'
            ]
          },
          {
            title: 'Infrastructure Operations',
            image: '/images/modules/stadium-infrastructure.jpg',
            details: [
              '🔹 **Structured Cabling**: High-performance network infrastructure serving as the "information highway" for all systems',
              '🔹 **Computer Networks**: Robust wired and wireless connectivity supporting all venue operations and visitor services',
              '🔹 **Telephone Systems**: IP-based communication with multi-carrier redundancy for uninterrupted service',
              '🔹 **Wireless Intercom**: Digital radio communication with comprehensive coverage including basements and elevator shafts',
              '🔹 **Building Automation**: Centralized control of HVAC, lighting, power, and environmental systems',
              '🔹 **Energy Management**: Real-time monitoring and optimization of electricity and water consumption'
            ]
          },
          {
            title: 'Event Services & Management',
            image: '/images/modules/stadium-events.jpg',
            details: [
              '🔹 **Ticketing Systems**: Multi-format ticket management supporting QR codes, IC cards, and mobile integration',
              '🔹 **Timing & Scoring**: Professional sports timing systems with accurate data recording and display',
              '🔹 **Multimedia Audio-Video**: High-quality sound reinforcement, display systems, and signal processing',
              '🔹 **Background Music & Emergency Broadcast**: Dual-purpose audio system for ambiance and critical announcements',
              '🔹 **Information Display**: LED screens and digital signage for scores, advertisements, and emergency messaging',
              '🔹 **Venue Booking & Management**: Centralized control of facility scheduling and resource allocation'
            ]
          },
          {
            title: 'Information Services',
            image: '/images/modules/stadium-information.jpg',
            details: [
              '🔹 **Public Information Displays**: Strategic placement in lobbies, elevator areas, and key locations',
              '🔹 **Interactive Kiosks**: Self-service terminals for wayfinding, event information, and venue services',
              '🔹 **LED Display Systems**: Large-format screens for main arenas and public spaces with flexible content management',
              '🔹 **Real-time Data Integration**: Live feeds from timing systems, ticketing, and external data sources',
              '🔹 **Multi-zone Content Management**: Targeted messaging for different audience segments and venue areas'
            ]
          },
          {
            title: 'Technical Infrastructure',
            image: '/images/modules/stadium-technical.jpg',
            details: [
              '🔹 **Data Center Operations**: Professional computer room with precision environmental controls',
              '🔹 **Network Management**: High-availability networking with core and access layer architecture',
              '🔹 **Power Management**: Uninterruptible power supply and intelligent distribution systems',
              '🔹 **Environmental Monitoring**: Comprehensive temperature, humidity, and equipment status tracking',
              '🔹 **System Integration**: Open communication protocols for seamless subsystem interoperability'
            ]
          }
        ],
        
        benefits: [
          'Enhanced Fan Experience & Engagement',
          'Comprehensive Security & Safety Assurance',
          'Operational Efficiency & Cost Reduction',
          'New Revenue Generation Opportunities',
          'Scalable & Future-Proof Infrastructure',
          'Real-time Data & Analytics Insights',
          'Energy Efficiency & Sustainability',
          'Seamless Multi-event Operations'
        ],
        
        technicalHighlights: [
          'Integrated Security Management Platform with unified monitoring',
          'Modular Architecture allowing phased implementation',
          'Redundant System Design for maximum reliability',
          'Open Protocol Support for third-party integration',
          'Cloud & On-premise Hybrid Deployment options',
          'Mobile & Remote Management capabilities',
          'Big Data Analytics for operational optimization',
          'IoT-enabled Device Management and monitoring'
        ]
      },
      {
        slug: 'smart-hotel-design',
        title: 'Intelligent Hotel Management System',
        hero: {
          title: 'Smart Hotel Integrated Management Solution',
          subtitle: 'Comprehensive intelligent systems for modern hospitality management',
          image: require('@/assets/images/solution-hotel.jpg')
        },
        introduction: 'Our Smart Hotel Integrated Management Solution transforms traditional hospitality operations into intelligent, efficient, and guest-centric environments. By integrating security systems, guest room automation, energy management, and operational efficiency tools, we create seamless experiences for both guests and hotel staff.',
        fullDescription: `This comprehensive smart hotel solution encompasses every aspect of modern hospitality management - from advanced AI-powered security systems and intelligent guest room controls to sophisticated conference facilities and energy management. The system integrates facial recognition access control, automated room environments, smart conference systems, and comprehensive operational management into a unified platform. Leveraging IoT technology, AI analytics, and centralized management, we deliver enhanced guest experiences while optimizing operational efficiency and reducing costs.`,

        modules: [
          {
            title: 'AI-Powered Security & Surveillance System',
            image: '/images/modules/hotel-security.jpg',
            details: [
              '🔹 **Facial Recognition Access Control**: Seamless entry for staff and registered guests with multi-mode authentication including IC cards and PIN codes',
              '🔹 **Intelligent Video Surveillance**: Network cameras with AI-powered behavior analysis for suspicious activity detection and alerting',
              '🔹 **Real-time Threat Detection**: Advanced algorithms for loitering detection, fighting recognition, fall detection, and high-risk individual alerts',
              '🔹 **Comprehensive Monitoring**: Coverage of special zones, primary areas, key activity zones, and hotel internal entrances/exits',
              '🔹 **Emergency Integration**: Integrated with fire alarm systems and emergency command centers for rapid response'
            ]
          },
          {
            title: 'Smart Guest Room Automation',
            image: '/images/modules/hotel-room.jpg',
            details: [
              '🔹 **Intelligent Room Control**: Automated lighting, curtains, air conditioning, and television control via mobile app or in-room panels',
              '🔹 **Welcome Mode Automation**: Corridor lights automatically turn on upon entry, bedside lamps adjust brightness based on time of day',
              '🔹 **Energy Optimization**: Constant temperature mode when guests temporarily leave, automatic shutoff after checkout',
              '🔹 **Bathroom Intelligence**: Motion-activated lighting and exhaust fans, SOS emergency buttons, and "Please Wait" notification systems',
              '🔹 **Wardrobe Automation**: Infrared sensor-controlled wardrobe lighting that activates when doors open'
            ]
          },
          {
            title: 'Conference & Event Management',
            image: '/images/modules/hotel-conference.jpg',
            details: [
              '🔹 **Multi-functional Banquet Hall**: 475 sqm space with professional audio-visual systems, LED displays, and stage lighting',
              '🔹 **Advanced Audio Systems**: Multi-purpose Class I sound reinforcement with maximum sound pressure level ≥103dB',
              '🔹 **Smart Control Systems**: Centralized control of screens, projectors, signal source switching, and motorized equipment',
              '🔹 **Flexible Meeting Spaces**: Grand auditorium (142m²), medium conference rooms (91m²), boardrooms, and small meeting rooms',
              '🔹 **Video Conferencing**: Remote video conferencing terminals with camera tracking and simultaneous interpretation capabilities'
            ]
          },
          {
            title: 'Hotel Management & Operations',
            image: '/images/modules/hotel-operations.jpg',
            details: [
              '🔹 **Property Management System**: Integration with leading PMS brands (OPERA, FIDELIO, Xiruan, Zhongruan)',
              '🔹 **Electronic Ordering System**: Multi-cuisine, multi-language support with customizable menu displays',
              '🔹 **Digital Inspection Systems**: Mobile patrol equipment with real-time task feedback and paperless operations',
              '🔹 **Cleaning Management**: Video documentation of cleaning processes for traceability and standardization',
              '🔹 **Staff Management**: Integrated attendance tracking through access control data and digital patrol systems'
            ]
          },
          {
            title: 'Infrastructure & Network Systems',
            image: '/images/modules/hotel-infrastructure.jpg',
            details: [
              '🔹 **Structured Cabling**: Separate management network, guest network, equipment network, and IPTV network',
              '🔹 **Wireless Coverage**: Full-coverage WiFi with panel-mounted or ceiling-mounted APs in all guest rooms and public areas',
              '🔹 **Background Music**: Digital architecture with system music sources and independent local music sources',
              '🔹 **Satellite TV**: Comprehensive programming including international channels, cable TV, and hotel-produced content',
              '🔹 **Communication Systems**: Wireless intercom, elevator five-party intercom, and indoor mobile signal coverage'
            ]
          },
          {
            title: 'Energy & Building Management',
            image: '/images/modules/hotel-energy.jpg',
            details: [
              '🔹 **Smart Lighting Control**: Layered, dynamic lighting environments with mood settings for different scenarios',
              '🔹 **Building Automation**: Centralized control of supply/exhaust fans, air handling units, and HVAC systems',
              '🔹 **Energy Metering**: Comprehensive monitoring of electricity, water, and other utility consumption',
              '🔹 **Automated Climate Control**: Welcome mode, constant temperature mode, energy-saving mode, and night sleep mode',
              '🔹 **Cost Optimization**: Automated shutdown of vacant room systems and seasonal area management'
            ]
          },
          {
            title: 'Guest Experience Enhancement',
            image: '/images/modules/hotel-experience.jpg',
            details: [
              '🔹 **Interactive Systems**: Magic pillar displays with touch interaction and interactive poetry background walls',
              '🔹 **Information Display**: 42-inch LCD interactive screens in lobby with touch and query functionality',
              '🔹 **Mirror TV**: Bathroom-installed mirror televisions for entertainment while bathing',
              '🔹 **Guest Room Audio**: Independent speaker systems with Bluetooth connectivity in suites and premium rooms',
              '🔹 **Aromatherapy Systems**: Customized scent diffusion in lobby and public areas for enhanced ambiance'
            ]
          }
        ],

        benefits: [
          'Enhanced Guest Experience through personalized room automation and intuitive controls',
          'Improved Security with AI-powered surveillance and facial recognition access',
          'Operational Efficiency through automated systems and centralized management',
          'Energy Optimization with smart climate control and automated resource management',
          'Revenue Generation through premium conference facilities and guest services',
          'Staff Productivity with digital inspection systems and automated reporting',
          'Brand Differentiation with unique interactive features and smart amenities',
          'Cost Reduction through energy management and operational automation'
        ],

        technicalHighlights: [
          'Integrated AI Platform with facial recognition and behavior analysis',
          'Multi-network Architecture with separate management, guest, and equipment networks',
          'IoT-enabled Building Automation with centralized control systems',
          'Professional Audio-Visual Systems with multi-zone sound reinforcement',
          'Smart Room Control with automated environmental adjustments',
          'Digital Inspection Platforms with real-time feedback and reporting',
          'Energy Management Systems with comprehensive monitoring and optimization',
          'Cloud-based Management with remote monitoring and control capabilities'
        ]
      }
    ];
  },

  async fetchSolutionsByScenario() {
    return [
      {
        title: 'Corporate Office Buildings',
        slug: 'corporate-office-buildings',
        hero: {
          title: 'Corporate Office Buildings',
          subtitle: 'Comprehensive smart building solutions for modern corporate environments.',
          image: require('@/assets/images/office-building.jpg')
        },
        fullDescription:
          'Our solutions for Corporate Office Buildings focus on creating intelligent, efficient, and secure workspaces. This includes advanced access control, environmental monitoring, energy management, and smart meeting room solutions.',
        benefits: ['Enhanced Security', 'Optimized Energy Consumption', 'Improved Occupant Comfort', 'Streamlined Operations']
      },
      {
        title: 'Smart Hotels',
        slug: 'smart-hotel-design',
        hero: {
          title: 'Intelligent Design for Smart Hotels',
          subtitle: 'Elevating the guest experience with seamless automation and security.',
          image: require('@/assets/images/solution-hotel.jpg')
        },
        fullDescription:
          'Our intelligent hotel solutions integrate guest room management, building automation, and security systems to create a comfortable, secure, and memorable experience for guests while improving operational efficiency for staff.',
        benefits: ['Enhanced Guest Experience', 'Improved Staff Efficiency', 'Energy Savings', 'Centralized Management']
      },
      {
        title: 'Data Centers',
        slug: 'data-centers',
        hero: {
          title: 'Data Centers',
          subtitle: 'Advanced monitoring and management systems for data centers.',
          image: require('@/assets/images/data-center.jpg')
        },
        fullDescription:
          'Our Data Center solutions ensure optimal performance, reliability, and security, offering precise environmental control, power monitoring, and intelligent asset management.',
        benefits: ['High Availability & Uptime', 'Energy Efficiency', 'Enhanced Security', 'Proactive Monitoring']
      },
      {
        title: 'Smart Public Toilets',
        slug: 'smart-public-toilet-solution',
        hero: {
          title: 'Smart Public Toilet Solution',
          subtitle: 'IoT-enabled intelligent sanitation facilities with comprehensive monitoring and management systems',
          image: require('@/assets/images/public-toilet (2).jpg')
        },
        introduction: 'The Smart Public Toilet Solution integrates IoT sensors, data analytics, and intelligent management platforms to transform traditional public sanitation facilities into modern, efficient, and hygienic smart spaces. This comprehensive system addresses environmental monitoring, cleaning management, visitor experience, and operational efficiency.',
        fullDescription: `Our Smart Public Toilet Solution represents a revolutionary approach to public sanitation management. By leveraging cutting-edge IoT technology, artificial intelligence, and big data analytics, we create intelligent facilities that automatically monitor environmental conditions, optimize cleaning operations, enhance user experience, and improve overall management efficiency. The system provides real-time monitoring of air quality, occupancy status, resource consumption, and cleaning performance while ensuring public safety through advanced surveillance and emergency response capabilities.`,
        
        modules: [
          {
            title: 'Environmental Monitoring System',
            image: '/images/modules/toilet-environmental.jpg',
            details: [
              '🔹 **Air Quality Monitoring**: Real-time detection of amine and sulfur gases including trimethylamine, methyl mercaptan, hydrogen sulfide, and ammonia concentrations',
              '🔹 **Multi-parameter Sensors**: Continuous monitoring of temperature, humidity, illuminance, ozone levels, and other environmental factors',
              '🔹 **Equipment Status Tracking**: Monitor operational status of all environmental equipment including air purification systems, ventilation, and lighting',
              '🔹 **Real-time Data Display**: Electronic screens display environmental parameters and occupancy status for user reference',
              '🔹 **Automated Alerts**: Immediate notifications when environmental parameters exceed predefined thresholds'
            ]
          },
          {
            title: 'Occupancy & Foot Traffic Management',
            image: '/images/modules/toilet-occupancy.jpg',
            details: [
              '🔹 **Stall Occupancy Monitoring**: Infrared sensors dynamically monitor individual stall availability in real-time',
              '🔹 **Foot Traffic Statistics**: Automated counting of visitors with analysis of peak usage periods and patterns',
              '🔹 **Gender-specific Analytics**: Separate monitoring and analysis for men\'s, women\'s, and gender-neutral facilities',
              '🔹 **3D Layout Visualization**: Interactive floor plans showing real-time occupancy status and facility distribution',
              '🔹 **Crowd Management**: Alerts triggered when occupancy limits are exceeded, enabling proactive crowd control'
            ]
          },
          {
            title: 'Cleaning Management System',
            image: '/images/modules/toilet-cleaning.jpg',
            details: [
              '🔹 **Smart Wristband Tracking**: RFID-enabled wristbands record cleaning staff entry, duration, frequency, and work zones',
              '🔹 **Facial Recognition Attendance**: Automated clock-in/out system for cleaning staff and patrol personnel',
              '🔹 **Performance Analytics**: Comparison of cleaning metrics against minimum performance standards',
              '🔹 **Task Assignment Optimization**: Intelligent generation of cleaning task lists based on foot traffic and contamination levels',
              '🔹 **Quality Supervision**: Remote monitoring of cleaning quality with IoT data collection and analysis'
            ]
          },
          {
            title: 'Visitor Management & Security',
            image: '/images/modules/toilet-security.jpg',
            details: [
              '🔹 **Facial Recognition Surveillance**: Real-time monitoring and comparison against security databases for high-risk individuals',
              '🔹 **Visitor Demographic Analysis**: Tracking of visitor count, gender, age estimation, and duration of stay',
              '🔹 **Behavior Analysis**: Monitoring of visitor behavior patterns and anomaly detection',
              '🔹 **Emergency Assistance**: 24/7 emergency response system with one-touch alarm buttons',
              '🔹 **Public Safety Integration**: Automatic alerts to public security authorities for identified security threats'
            ]
          },
          {
            title: 'Resource Monitoring & Optimization',
            image: '/images/modules/toilet-resources.jpg',
            details: [
              '🔹 **Utility Consumption Tracking**: Real-time monitoring of electricity and water usage with sensor-based data collection',
              '🔹 **Supply Management**: Automated tracking of consumables like toilet paper, soap, and other amenities',
              '🔹 **Predictive Maintenance**: Analysis of equipment usage patterns to anticipate maintenance needs',
              '🔹 **Energy Efficiency**: Smart control of lighting, ventilation, and other systems based on occupancy and environmental conditions',
              '🔹 **Cost Optimization**: Data-driven insights for resource allocation and consumption optimization'
            ]
          },
          {
            title: 'Data Analytics & Management Platform',
            image: '/images/modules/toilet-analytics.jpg',
            details: [
              '🔹 **Centralized Data Platform**: Integration of all sensor data into a unified management system',
              '🔹 **Custom Analytical Models**: Tailored analysis of environmental hygiene, cleaning performance, and operational metrics',
              '🔹 **Real-time Dashboard**: "One Map" management interface with comprehensive oversight capabilities',
              '🔹 **Performance Benchmarking**: Comparison of operational data against established standards',
              '🔹 **Predictive Analytics**: Forecasting of usage patterns and maintenance requirements based on historical data'
            ]
          },
          {
            title: 'Public Interface & Mobile Applications',
            image: '/images/modules/toilet-mobile.jpg',
            details: [
              '🔹 **Availability Notification**: Real-time display of restroom occupancy status and available facilities',
              '🔹 **Mobile App Integration**: WeChat mini-programs and dedicated mobile applications for public use',
              '🔹 **Satisfaction Survey System**: Touchscreen interfaces for visitor feedback and rating collection',
              '🔹 **Guidance Systems**: Digital signage and wayfinding assistance for facility location',
              '🔹 **Emergency Communication**: Direct channels for emergency assistance requests and response coordination'
            ]
          }
        ],
        
        benefits: [
          'Enhanced Hygiene and Sanitation Standards',
          'Optimized Cleaning Operations and Resource Allocation',
          'Improved Visitor Experience and Satisfaction',
          'Reduced Operational Costs through Efficiency',
          'Enhanced Public Safety and Security',
          'Data-driven Decision Making for Management',
          'Proactive Maintenance and Issue Resolution',
          'Sustainable Resource Consumption'
        ],
        
        technicalHighlights: [
          'Comprehensive IoT Sensor Network with real-time data collection',
          'AI-powered Facial Recognition and Behavior Analysis',
          'Big Data Analytics Platform with customized analytical models',
          'Integrated Management Platform with "One Map" visualization',
          'Multi-terminal Support (PC, mobile, large screen displays)',
          'Cloud-based Data Synchronization and Storage',
          'RFID and Smart Wearable Integration for staff management',
          '24/7 Emergency Response and Assistance System'
        ]
      }
    ];
  },

  async fetchSolutionsByFunction() {
    return [
      {
        category: 'Big Data & Cloud Computing',
        solutions: [
          {
            title: 'Big Data for Education',
            slug: 'big-data-educational-informatization',
            hero: {
              title: 'Big Data Solution for Educational Informatization',
              subtitle: 'A comprehensive data analytics platform for educational institutions.',
              image: require('@/assets/images/edu-data-governance.png')
            },
            fullDescription:
              'This solution provides a robust big data platform tailored for educational institutions, enabling advanced analytics on student performance, resource utilization, and administrative efficiency.',
            benefits: ['Data-driven Insights', 'Personalized Learning', 'Operational Efficiency']
          },
          {
            title: 'Big Data for Smart Ports',
            slug: 'big-data-smart-ports',
            hero: {
              title: 'Solutions for Big Data, Cloud Computing & Smart Ports',
              subtitle: 'Optimizing logistics and operations with data-driven intelligence.',
              image: require('@/assets/images/solution-port.jpg')
            },
            fullDescription:
              'We leverage big data and cloud computing to create intelligent smart port solutions that streamline logistics, improve container turnaround times, and enhance overall port security and efficiency.',
            benefits: ['Optimized Logistics', 'Increased Throughput', 'Enhanced Security', 'Predictive Maintenance']
          }
        ]
      },
      {
        category: 'Building & System Management',
        solutions: [
          {
            title: 'HT BMS System',
            slug: 'ht-bms-system',
            hero: {
              title: 'HT BMS System (Neutral Version)',
              subtitle: 'The core of your intelligent building, providing centralized control and monitoring.',
              image: require('@/assets/images/solution-bms.jpg')
            },
            fullDescription:
              'The HT Building Management System (BMS) offers a powerful, centralized platform to control and monitor all critical building systems, including HVAC, lighting, power, and security. It is designed to optimize energy use, maintain occupant comfort, and provide proactive maintenance alerts.',
            benefits: ['Energy Optimization', 'Centralized Control', 'Comfort Management', 'Predictive Maintenance']
          },
          {
            title: 'Smart Park Platform',
            slug: 'smart-park-integrated-platform',
            hero: {
              title: 'Smart Park Integrated Management Platform',
              subtitle: 'A unified solution combining hardware and software for intelligent park operations.',
              image: require('@/assets/images/solution-park.jpg')
            },
            fullDescription:
              'A unified platform for managing smart parks, integrating environmental monitoring, visitor services, security, and facility management to create an intelligent and sustainable urban or industrial park.',
            benefits: ['Integrated Management', 'Environmental Monitoring', 'Enhanced Visitor Experience', 'Operational Efficiency']
          },
          {
            title: 'Smart Low-Carbon Parks',
            slug: 'smart-low-carbon-parks',
            hero: {
              title: 'Intelligent Solution for Smart Low-Carbon Parks',
              subtitle: 'Sustainable digital platform for eco-friendly industrial and business parks',
              image: require('@/assets/images/solution-low-carbon.jpg')
            },
            introduction: 'The Smart Low-Carbon Park solution integrates digitalization, IoT, and comprehensive energy services to create sustainable, efficient, and intelligent parks. It emphasizes energy saving, multi-energy complementarity, and comprehensive efficiency management to support green development.',
            fullDescription: `Our comprehensive Smart Low-Carbon Park solution provides a complete digital platform for park operators, focusing on reducing carbon emissions, improving energy efficiency, and leveraging advanced technologies such as IoT, Big Data, AI, and cloud computing. The system enables comprehensive energy management, renewable integration, and lean operations to drive the sustainable transformation of industrial and business parks through four key technical approaches: equipment retrofitting, lean management, multi-energy complementarity, and integrated energy efficiency management.`,
            
            modules: [
              {
                title: 'Smart Park Architecture & Digital Brain',
                image: '/images/modules/park-architecture.jpg',
                details: [
                  '🔹 **One Brain, Six Systems**: Centralized smart campus brain with comprehensive overview, command center, equipment status monitoring, asset statistics, and environmental tracking',
                  '🔹 **Multi-layer Architecture**: User layer, business applications, middle platform (business, data, technology), and IoT integration',
                  '🔹 **Unified Management Platform**: WEB end, WeChat, large screen display, smart hardware, and mobile APP access',
                  '🔹 **Real-time Monitoring**: Equipment status, energy efficiency analysis, space resources, and environmental parameters',
                  '🔹 **Integrated Operations**: Mobile monitoring, access control, perimeter security, air conditioning, lighting, parking, and asset management'
                ]
              },
              {
                title: 'Equipment Energy-Saving Retrofit',
                image: '/images/modules/equipment-retrofit.jpg',
                details: [
                  '🔹 **High-Efficiency Equipment Upgrade**: Replacement of motors, boilers, pumps, air conditioners, fans, and lighting with intelligent, energy-efficient alternatives',
                  '🔹 **Energy-Saving Process Technologies**: Implementation of advanced process technologies to optimize energy consumption',
                  '🔹 **Pipeline Retrofitting**: Comprehensive pipeline system upgrades and cleaning for improved efficiency',
                  '🔹 **Power System Optimization**: Retrofitting of power transmission and distribution systems and auxiliary equipment',
                  '🔹 **Boiler Energy Efficiency**: Specialized optimization of boiler systems for maximum energy conservation'
                ]
              },
              {
                title: 'Lean Energy Management System',
                image: '/images/modules/lean-management.jpg',
                details: [
                  '🔹 **Comprehensive Data Collection**: Real-time energy consumption data gathering across all park facilities',
                  '🔹 **Intelligent Monitoring**: Continuous status monitoring with automated alerts for abnormal consumption',
                  '🔹 **Automated Control Systems**: Smart control of energy-consuming equipment based on usage patterns',
                  '🔹 **Performance Evaluation**: Detailed energy consumption statistics, analysis, and efficiency assessment',
                  '🔹 **Energy Planning & Optimization**: Strategic energy planning, procurement, sales, and distribution optimization'
                ]
              },
              {
                title: 'Multi-Energy Complementarity System',
                image: '/images/modules/multi-energy.jpg',
                details: [
                  '🔹 **Combined Heat and Power (CHP)**: Natural gas combined heat, power, and cooling (CCHP) systems',
                  '🔹 **Distributed Renewable Energy**: Integration of solar, wind, geothermal, and biomass energy sources',
                  '🔹 **Smart Energy Microgrids**: Intelligent microgrid management for local energy production and consumption',
                  '🔹 **Wind-Solar-Hydro-Thermal-Storage Integration**: Coordinated development of multiple energy resources',
                  '🔹 **Cascading Energy Utilization**: Comprehensive, cascading energy use through integrated supply systems'
                ]
              },
              {
                title: 'Integrated Energy Efficiency Management',
                image: '/images/modules/energy-efficiency.jpg',
                details: [
                  '🔹 **Energy Management Services**: Smart electricity sales, energy monitoring, distribution network operation and maintenance',
                  '🔹 **Ubiquitous IoT Solutions**: Data collection for electricity, water, heat, cooling, and gas consumption',
                  '🔹 **Demand Response Systems**: Automated response to energy demand fluctuations and peak shaving',
                  '🔹 **Energy Big Data Analysis**: Advanced analytics for consumption patterns and optimization opportunities',
                  '🔹 **Smart Terminal Management**: Integration with smart buildings, lighting, EV charging, and facility management'
                ]
              },
              {
                title: 'Energy Management System (EMS) Applications',
                image: '/images/modules/ems-applications.jpg',
                details: [
                  '🔹 **Comprehensive Energy Monitoring**: Real-time visualization of all energy flows and consumption patterns',
                  '🔹 **Predictive Analytics**: AI-driven forecasting of energy demand and optimization recommendations',
                  '🔹 **Carbon Emission Tracking**: Detailed monitoring and reporting of carbon footprint reduction',
                  '🔹 **Asset Performance Management**: Monitoring and optimization of energy asset performance',
                  '🔹 **Regulatory Compliance**: Automated reporting for energy conservation and emission reduction requirements'
                ]
              }
            ],
            
            benefits: [
              'Significant reduction in carbon footprint and environmental impact',
              '30-50% improvement in overall energy efficiency across park operations',
              'Lower operational costs through optimized energy consumption',
              'Enhanced corporate sustainability image and regulatory compliance',
              'Improved energy security through diversified energy sources',
              'Real-time monitoring and control of energy infrastructure',
              'Extended equipment lifespan through optimized operation',
              'Data-driven decision making for continuous improvement'
            ],
            
            technicalHighlights: [
              'Digital energy management platform with real-time monitoring and AI analytics',
              'IoT-enabled multi-energy data collection from all park facilities',
              'Integration of renewable resources with traditional energy systems',
              'Cloud-based Big Data analytics for predictive optimization',
              'Microgrid management for resilient and efficient energy distribution',
              'Smart charging infrastructure for electric vehicles',
              'Blockchain-enabled energy trading between park tenants',
              'Digital twin technology for energy system simulation and optimization'
            ]
          },
          {
            title: 'Smart Hospital Entrance Management',
            slug: 'smart-hospital-entrances',
            hero: {
              title: 'Design Scheme for Smart Hospital Entrances & Exits',
              subtitle: 'Integrated management for seamless and secure hospital access points.',
              image: require('@/assets/images/hospital-entrance.jpg')
            },
            fullDescription:
              'This solution provides an integrated management system for hospital entrances and exits, combining access control, visitor management, and security screening to ensure a safe and efficient flow of people and vehicles.',
            benefits: ['Enhanced Security', 'Efficient Visitor Flow', 'Automated Access', 'Centralized Monitoring']
          }
        ]
      }
    ];
  },

  // NEW METHODS ADDED HERE
  async fetchCategoryDetails(slug) {
    // Mock data for product categories - replace with actual API call
    const categoriesData = {
      'industrial-pcs': {
        name: 'HT-IPC Industrial PCs',
        hero: {
          title: 'HT-IPC Industrial PCs',
          subtitle: 'High-performance industrial computing solutions',
          image: require('@/assets/images/products/jpg.jpg')
        },
        introduction: 'Our HT-IPC Industrial PCs are designed for demanding environments with robust performance and reliability.',
        subCategories: [
          { 
            name: 'Rack Mount IPC', 
            image: require('@/assets/images/products/rack-mount.jpg'),
            description: 'Standard rack mount industrial computers'
          },
          { 
            name: 'Panel PCs', 
            image: require('@/assets/images/products/panel-pc.jpg'),
            description: 'Touchscreen panel computers for industrial applications'
          },
          { 
            name: 'Box PCs', 
            image: require('@/assets/images/products/box-pc.jpg'),
            description: 'Compact box computers for space-constrained environments'
          }
        ],
        products: [
          {
            id: 'ipc-001',
            name: 'HT-IPC-2000 Series',
            model: 'HT-IPC-2800',
            category: 'Industrial PC',
            subCategory: 'Rack Mount IPC',
            image: require('@/assets/images/products/jpg.jpg'),
            brand: 'TONGFANG',
            features: ['Intel Core i7 processor', '16GB DDR4 RAM', 'Dual LAN ports', '24/7 operation capable'],
            specs: {
              'Processor': 'Intel Core i7-10700',
              'Memory': '16GB DDR4',
              'Storage': '512GB SSD + 1TB HDD',
              'Networking': 'Dual Gigabit Ethernet',
              'Operating Temperature': '-10°C to 60°C'
            }
          },
          {
            id: 'ipc-002',
            name: 'HT-IPC-1000 Series',
            model: 'HT-IPC-1500',
            category: 'Industrial PC',
            subCategory: 'Panel PC',
            image: require('@/assets/images/products/panel-pc.jpg'),
            brand: 'TONGFANG',
            features: ['15.6" Touchscreen', 'Fanless design', 'IP65 rated', 'Low power consumption'],
            specs: {
              'Display': '15.6" LED Touchscreen',
              'Processor': 'Intel Celeron J1900',
              'Memory': '8GB DDR3',
              'Storage': '128GB SSD',
              'Protection Rating': 'IP65'
            }
          },
          {
            id: 'ipc-003',
            name: 'HT-IPC-500 Series',
            model: 'HT-IPC-580',
            category: 'Industrial PC',
            subCategory: 'Box PC',
            image: require('@/assets/images/products/box-pc.jpg'),
            brand: 'TONGFANG',
            features: ['Compact design', 'Fanless operation', 'Wide voltage input', 'Industrial-grade components'],
            specs: {
              'Processor': 'Intel Atom x5-E3930',
              'Memory': '4GB DDR3',
              'Storage': '64GB SSD',
              'Power Input': '9-36V DC',
              'Operating Temperature': '-20°C to 70°C'
            }
          }
        ],
        applicationScenarios: [
          { name: 'Factory Automation', image: require('@/assets/images/scenarios/factory.jpg') },
          { name: 'Building Management', image: require('@/assets/images/scenarios/bms.jpg') },
          { name: 'Transportation Systems', image: require('@/assets/images/scenarios/transportation.jpg') }
        ]
      },
      'pdus': {
        name: 'Power Distribution Units',
        hero: {
          title: 'Power Distribution Units',
          subtitle: 'Intelligent power management for critical infrastructure',
          image: require('@/assets/images/products/distribution.jpg')
        },
        introduction: 'Our advanced Power Distribution Units provide reliable and intelligent power distribution for data centers and industrial applications.',
        subCategories: [
          { 
            name: 'Basic PDUs', 
            image: require('@/assets/images/products/basic-pdu.jpg'),
            description: 'Standard power distribution units'
          },
          { 
            name: 'Metered PDUs', 
            image: require('@/assets/images/products/metered-pdu.jpg'),
            description: 'PDUs with power monitoring capabilities'
          },
          { 
            name: 'Smart PDUs', 
            image: require('@/assets/images/products/smart-pdu.jpg'),
            description: 'Intelligent PDUs with remote management'
          }
        ],
        products: [
          {
            id: 'pdu-001',
            name: 'HT-PDU-Basic Series',
            model: 'HT-PDU-B24',
            category: 'Power Distribution',
            subCategory: 'Basic PDUs',
            image: require('@/assets/images/products/distribution.jpg'),
            brand: 'TONGFANG',
            features: ['24 outlets', 'Surge protection', 'Overload protection', 'LED status indicators'],
            specs: {
              'Input Voltage': '200-240V AC',
              'Output Sockets': '24 x C13',
              'Maximum Current': '32A',
              'Protection': 'Surge and overload',
              'Dimensions': '482mm x 44mm x 44mm'
            }
          }
        ],
        applicationScenarios: [
          { name: 'Data Centers', image: require('@/assets/images/scenarios/datacenter.jpg') },
          { name: 'Server Rooms', image: require('@/assets/images/scenarios/server-room.jpg') },
          { name: 'Industrial Control', image: require('@/assets/images/scenarios/industrial.jpg') }
        ]
      }
      // Add more categories as needed...
    };

    return categoriesData[slug] || null;
  },

  async findProductById(id) {
    // Mock product data - replace with actual API call
    const products = {
      'ipc-001': {
        id: 'ipc-001',
        name: 'HT-IPC-2000 Series',
        model: 'HT-IPC-2800',
        category: 'Industrial PC',
        subCategory: 'Rack Mount IPC',
        image: require('@/assets/images/products/jpg.jpg'),
        brand: 'TONGFANG',
        features: [
          'Intel Core i7 processor for high-performance computing',
          '16GB DDR4 RAM for smooth multitasking',
          'Dual Gigabit LAN ports for network redundancy',
          '24/7 continuous operation capability',
          'Wide operating temperature range (-10°C to 60°C)',
          'Multiple expansion slots for customization'
        ],
        specs: {
          'Processor': 'Intel Core i7-10700 (2.9GHz, 8 cores)',
          'Memory': '16GB DDR4 2666MHz (expandable to 64GB)',
          'Storage': '512GB NVMe SSD + 1TB 7200RPM HDD',
          'Networking': 'Dual Gigabit Ethernet ports',
          'Expansion Slots': '2x PCI, 1x PCIe x16',
          'USB Ports': '6x USB 3.0, 4x USB 2.0',
          'Operating Temperature': '-10°C to 60°C',
          'Power Supply': '300W ATX',
          'Dimensions': '482mm x 430mm x 88mm',
          'Weight': '15kg',
          'Certifications': 'CE, FCC, RoHS'
        }
      },
      'ipc-002': {
        id: 'ipc-002',
        name: 'HT-IPC-1000 Series',
        model: 'HT-IPC-1500',
        category: 'Industrial PC',
        subCategory: 'Panel PC',
        image: require('@/assets/images/products/panel-pc.jpg'),
        brand: 'TONGFANG',
        features: [
          '15.6" High-brightness touchscreen display',
          'Fanless design for silent operation',
          'IP65 rated for dust and water resistance',
          'Low power consumption for energy efficiency',
          'VESA mount compatible for flexible installation',
          'Wide voltage input range for industrial use'
        ],
        specs: {
          'Display': '15.6" LED 1920x1080 Touchscreen',
          'Processor': 'Intel Celeron J1900 Quad-core',
          'Memory': '8GB DDR3L',
          'Storage': '128GB mSATA SSD',
          'Protection Rating': 'IP65 Front Panel',
          'Operating Temperature': '0°C to 50°C',
          'Power Input': '12-24V DC',
          'Dimensions': '408mm x 255mm x 48mm',
          'Weight': '4.5kg',
          'Mounting': 'VESA 75/100 compatible',
          'Certifications': 'CE, FCC, RoHS'
        }
      },
      'pdu-001': {
        id: 'pdu-001',
        name: 'HT-PDU-Basic Series',
        model: 'HT-PDU-B24',
        category: 'Power Distribution',
        subCategory: 'Basic PDUs',
        image: require('@/assets/images/products/distribution.jpg'),
        brand: 'TONGFANG',
        features: [
          '24 C13 outlets for comprehensive device connectivity',
          'Advanced surge protection for equipment safety',
          'Automatic overload protection with reset',
          'Clear LED status indicators for easy monitoring',
          'Rack-mountable design for standard server cabinets',
          'High-quality construction for reliable performance'
        ],
        specs: {
          'Input Voltage': '200-240V AC, 50/60Hz',
          'Output Sockets': '24 x IEC C13',
          'Maximum Current': '32A',
          'Maximum Power': '7680W',
          'Protection': 'Surge protection (4kV), Overload circuit breaker',
          'Dimensions': '482mm (W) x 44mm (H) x 44mm (D)',
          'Weight': '3.2kg',
          'Cable Length': '2.5 meters',
          'Material': 'Steel casing',
          'Certifications': 'CE, RoHS, UL certified'
        }
      }
    };

    return products[id] || null;
  },

  async findSolutionBySlug(slug) {
    const allSolutions = [
      ...(await this.fetchSolutionsByIndustry()),
      ...(await this.fetchSolutionsByScenario()),
      ...(await this.fetchSolutionsByFunction()).flatMap(category => category.solutions)
    ];
    return allSolutions.find(solution => solution.slug === slug);
  },

  async fetchCampusSolutionDetails() {
    // Implementation for campus solution details
    return {
      // Campus solution details implementation
    };
  },

  async fetchHealthcareSolutionDetails() {
    // Implementation for healthcare solution details
    return {
      // Healthcare solution details implementation
    };
  },

  async fetchEducationBrainSolutionDetails() {
    // Implementation for education brain solution details
    return {
      // Education brain solution details implementation
    };
  }
};

export default ApiService;