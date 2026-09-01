import { Product, JobOpening, FaqItem } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    tagline: 'Bespoke, high-performance web engineering',
    shortDescription: 'We engineer visually stunning, performant, and secure web experiences that represent your brand with precision.',
    detailedDescription: 'We build tailored web systems designed for performance, scalability, and impeccable user experience. From sleek custom marketing portfolios to complex enterprise-level customer portals, our websites use modern compilation tools to guarantee absolute speed, flawless responsive fluidity, and optimal search engine rankings.',
    features: [
      {
        title: 'Bespoke UI/UX Design',
        description: 'Tailored digital styling matching your brand, backed by mathematical typographic scaling and ample negative space.',
        iconName: 'LayoutTemplate'
      },
      {
        title: 'Vite & React 19 Speed',
        description: 'Blazing fast load times (<1s interactive state) leveraging lightweight component bundles and efficient rendering trees.',
        iconName: 'Zap'
      },
      {
        title: 'Complete SEO Optimization',
        description: 'Structured JSON-LD schema, static generation, high Core Web Vitals compliance, and meta-tag optimization built-in.',
        iconName: 'Search'
      },
      {
        title: 'Headless CMS Architecture',
        description: 'Seamless editing dashboards using modern decoupled CMS systems, letting non-technical staff publish updates safely.',
        iconName: 'Database'
      }
    ],
    techStack: ['React 19', 'Vite', 'Tailwind CSS v4', 'TypeScript', 'Motion', 'Next.js', 'Node.js'],
    benefits: [
      '100% Google Lighthouse Performance targets',
      'Mobile-first responsive fluid layouts',
      'Enterprise-grade security standards',
      'Integrated web analytics and custom event tracking'
    ],
    stats: [
      { label: 'Average Page Load', value: '< 0.8s' },
      { label: 'Mobile Responsive Score', value: '100/100' },
      { label: 'Lighthouse Target Score', value: '98+' }
    ]
  },
  {
    id: 'hr-payroll-software',
    title: 'HR & Payroll Software',
    tagline: 'Automated staff workflows & compliant payroll processing',
    shortDescription: 'Ditch the spreadsheets. Manage staff, rosters, leaves, attendance, and local tax payroll calculations in one single dashboard.',
    detailedDescription: 'A comprehensive, modern HR and payroll solution designed to eliminate manual spreadsheet management. Keep your business operations running flawlessly by automating staff onboarding, shifts, geo-fenced bio-metric attendance, automated leaves approval workflows, and compliant tax/provident-fund payroll calculations with instant payslip generation.',
    features: [
      {
        title: 'Bio-metric & GPS Attendance',
        description: 'Log attendance securely via modern mobile geofencing, IP lockouts, or automated biometric terminal integrations.',
        iconName: 'Clock'
      },
      {
        title: 'One-Click Compliant Payroll',
        description: 'Automated calculation of basic salary, allowances, overtime, Provident Fund, Citizen Investment Trust (CIT), and taxes.',
        iconName: 'CreditCard'
      },
      {
        title: 'Employee Self-Service (ESS)',
        description: 'Empower staff to view payslips, submit leave applications, and view company calendars on their personal portal.',
        iconName: 'UserCheck'
      },
      {
        title: 'Role-Based Access Control',
        description: 'Secure sensitive employee data and financial ledgers with robust cryptographic hashes and detailed audit logging.',
        iconName: 'ShieldAlert'
      }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Express'],
    benefits: [
      'Reduces payroll administrative hours by 90%',
      'Eliminates manual calculation errors entirely',
      'Reduces HR micro-management with self-service requests',
      'Generates ready-to-file tax logs'
    ],
    stats: [
      { label: 'Payroll Run Time', value: '3 Mins' },
      { label: 'Time Saved per Month', value: '45 Hrs' },
      { label: 'Tax Accuracy Guarantee', value: '100%' }
    ]
  },
  {
    id: 'ird-billing-software',
    title: 'IRD Billing Software',
    tagline: 'Seamless, secure, IRD-approved billing & invoicing',
    shortDescription: 'Inland Revenue Department compliant billing, real-time electronic invoicing, and complete purchase-sales book automation.',
    detailedDescription: 'Designed for retail, wholesale, and service enterprises, our billing software is fully certified and compliant with the Inland Revenue Department (IRD) guidelines. Ensure complete peace of mind with automatic, real-time invoice uploading, cryptographic signatures, QR code generation, VAT calculation, and automated Annexure-13 (Sales Book) generation.',
    complianceBadge: 'Certified IRD Compliant System',
    features: [
      {
        title: 'Real-Time CBMS Syncing',
        description: 'Instant, secure upload of all transaction data directly to the Inland Revenue Department servers with automated backups.',
        iconName: 'RefreshCw'
      },
      {
        title: 'Cryptographic QR Invoices',
        description: 'Generate legally proofed, cryptographically signed tax invoices complete with verifiable QR codes.',
        iconName: 'QrCode'
      },
      {
        title: 'Automated Tax Books',
        description: 'Generate compliant Sales Register (Annexure-13), Purchase Register, and Material Stock Books instantly.',
        iconName: 'BookOpen'
      },
      {
        title: 'Multi-Branch Inventory Lock',
        description: 'Live inventory tracking and secure billing access across multiple terminals or physical branches under one master log.',
        iconName: 'Layers'
      }
    ],
    techStack: ['React', 'TypeScript', 'PostgreSQL', 'Secure Cryptographic APIs', 'D3.js (Visualizers)'],
    benefits: [
      '100% compliance with local taxation laws and audit rules',
      'Automatic, real-time VAT and Service Tax calculations',
      'Off-line billing safety with automatic background syncing',
      'Comprehensive material and stock level inventory monitoring'
    ],
    stats: [
      { label: 'Sync Latency', value: '< 200ms' },
      { label: 'Compliance Index', value: '100%' },
      { label: 'Inventory Syncing', value: 'Real-time' }
    ]
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    tagline: 'Immersive iOS & Android native experiences',
    shortDescription: 'Engage customers directly on their mobile screens with cross-platform apps designed for native fluidity, offline storage, and push communication.',
    detailedDescription: 'We develop rich, engaging, and high-performance mobile software built for iOS and Android. By utilizing modern cross-platform technologies (like Flutter and React Native), we produce unified app ecosystems that guarantee native frame-rates, stateful offline-first reliability, push alerts, secure biometrics, and visual consistency across all screen form-factors.',
    features: [
      {
        title: 'Single-Codebase Efficiency',
        description: 'Shared engineering across Apple App Store and Google Play Store, reducing maintenance budgets by half.',
        iconName: 'Cpu'
      },
      {
        title: '60FPS Native Performance',
        description: 'Smooth, fluid interactive micro-gestures and page transitions powered by modern hardware acceleration.',
        iconName: 'Activity'
      },
      {
        title: 'Offline-First Capabilities',
        description: 'Robust local key-value databases enable immediate use without network, auto-syncing once connected.',
        iconName: 'WifiOff'
      },
      {
        title: 'Complete Device Integration',
        description: 'Full secure integration with native biometric keys (FaceID/Fingerprint), GPS tracking, camera, and bluetooth.',
        iconName: 'Smartphone'
      }
    ],
    techStack: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'SQLite', 'Firebase Auth'],
    benefits: [
      'Accelerated time-to-market with dual platform releases',
      'Flawless App Store & Google Play approval assurance',
      'High client retention with targeted push notification channels',
      'Optimal memory management preventing app battery drain'
    ],
    stats: [
      { label: 'Target Frame Rate', value: '60 - 120 FPS' },
      { label: 'Dual Launch Advantage', value: 'Save 40% cost' },
      { label: 'App Store Rating', value: '4.8+' }
    ]
  },
  {
    id: 'business-email-services',
    title: 'Business Email Services',
    tagline: 'Secure, high-deliverability custom corporate email',
    shortDescription: 'Professional, ad-free email hosting matching your custom business domain, configured with top-tier security standards.',
    detailedDescription: 'Establish absolute professional trust with a custom domain email suite (e.g., mail@doctype.agency). Backed by robust SPF, DKIM, and DMARC anti-spoofing implementations, enterprise-grade threat scanning, spam reduction algorithms, and full sync support across all your favorite desktop and mobile application clients.',
    features: [
      {
        title: 'Anti-Phishing Security',
        description: 'Rigorous validation of incoming mail using modern SPF, DKIM, and strict DMARC rulesets to eliminate spoofing.',
        iconName: 'Lock'
      },
      {
        title: 'Zero Ad Inbox Experience',
        description: 'A completely clean, secure, ad-free, and high-speed dashboard, letting your team focus strictly on correspondence.',
        iconName: 'Mail'
      },
      {
        title: 'Multi-Platform Syncing',
        description: 'Seamless email, shared calendar, and contact syncing via Exchange, IMAP, and secure SMTP.',
        iconName: 'HardDrive'
      },
      {
        title: 'Shared Calendars & Aliases',
        description: 'Setup unlimited domain aliases (e.g., support@, info@) and shared calendars for internal planning.',
        iconName: 'Calendar'
      }
    ],
    techStack: ['Workspace Protocols', 'SPF/DKIM/DMARC Encryption', 'Secure IMAP/SMTP Gateway'],
    benefits: [
      '99.99% deliverability directly to primary client folders',
      'Protects your business domain from email mimicry scams',
      'Includes dedicated 24/7 server setup and admin migration support',
      'Generous cloud-backed safe attachment and letter storage'
    ],
    stats: [
      { label: 'Uptime Guarantee', value: '99.99%' },
      { label: 'Deliverability Index', value: '99.8%' },
      { label: 'Spam Interception', value: '99.9%' }
    ]
  }
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'frontend-engineer',
    title: 'Senior Frontend Engineer (React/TypeScript)',
    department: 'Engineering',
    location: 'Kathmandu, Nepal (Hybrid)',
    type: 'Full-Time',
    experience: '3+ Years',
    summary: 'We are seeking an exceptionally skilled Frontend Engineer who has a deep appreciation for mathematical spacing, design systems, and modern React performance.',
    requirements: [
      'Strong expertise in modern React 18/19, TypeScript, and compilation tools (Vite, Rollup/Esbuild).',
      'Flawless mastery of Tailwind CSS and custom layout paradigms.',
      'Proficiency in state management engines and modular component drafting.',
      'Familiarity with animations (Motion / Framer Motion) and fine-tuning Core Web Vitals.'
    ],
    responsibilities: [
      'Draft highly polished, interactive, and responsive web user interfaces.',
      'Establish robust modular component structures and enforce type safety.',
      'Benchmark and optimize client-side performance, ensuring interactive load speeds of under 1 second.',
      'Collaborate closely with UI/UX designers to translate Figma assets with pixel-perfect accuracy.'
    ]
  },
  {
    id: 'qa-tester',
    title: 'QA Automation Engineer',
    department: 'Quality Assurance',
    location: 'Kathmandu, Nepal (Hybrid)',
    type: 'Full-Time',
    experience: '2+ Years',
    summary: 'Join our QA team to craft automated testing suites, perform stress diagnostics, and safeguard compliance pipelines for our billing and enterprise software.',
    requirements: [
      'Proven experience writing automated tests using Cypress, Playwright, or Selenium.',
      'Solid understanding of HTTP pipelines, API testing, and database integrity validation.',
      'Familiarity with local fiscal laws (like IRD rules in Nepal) is a strong plus.',
      'A meticulous eye for responsive UI bugs, spacing breaks, and edge-case exceptions.'
    ],
    responsibilities: [
      'Design, maintain, and execute automated test scripts across web and mobile systems.',
      'Perform rigorous validation of IRD billing APIs to confirm real-time synchronization integrity.',
      'Submit comprehensive, detailed bug tickets and coordinate directly with developers.',
      'Participate actively in pre-release sanity testing and manual edge-case audits.'
    ]
  },
  {
    id: 'sales-executive',
    title: 'Software Sales & Account Executive',
    department: 'Business Development',
    location: 'Kathmandu, Nepal (On-Site)',
    type: 'Full-Time',
    experience: '1+ Years',
    summary: 'We are looking for a highly driven Business Development professional to introduce our HR & Payroll Software and IRD Billing Systems to local businesses.',
    requirements: [
      'Demonstrated experience in software sales, B2B sales, or technology consultancy.',
      'Fluent verbal and written communication skills in Nepali and English.',
      'Comfortable presenting software demonstrations to managers and C-level executives.',
      'Basic knowledge of business bookkeeping, payroll practices, or tax structures.'
    ],
    responsibilities: [
      'Identify and contact prospects, presenting Doctype’s customized software packages.',
      'Deliver tailored product demonstrations showcasing value, compliance, and UI fluidity.',
      'Negotiate terms, handle billing onboarding setups, and foster long-term customer relations.',
      'Synthesize customer feedback and share strategic product opportunities with developers.'
    ]
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'Who is Doctype Innovations?',
    answer: 'Doctype Innovations is a premium, modern tech agency specializing in engineering beautiful custom web platforms, native cross-platform mobile apps, and highly reliable compliance systems (such as HR / Payroll and IRD-approved billing software).'
  },
  {
    id: 'faq-2',
    category: 'Compliance',
    question: 'Is your IRD Billing Software fully approved by the Inland Revenue Department?',
    answer: 'Yes, our billing systems are fully certified by the Inland Revenue Department (IRD). The system supports real-time cryptographic sync with the department’s central database (CBMS), generates verifiable invoices with secure QR codes, and automatically logs Annexure-13 Sales Books with absolute audit safety.'
  },
  {
    id: 'faq-3',
    category: 'Products',
    question: 'Can we integrate the HR and Payroll software with existing biometric machines?',
    answer: 'Absolutely. Our HR suite is engineered with open, secure APIs that sync flawlessly with standard IP-based biometric attendance machines, alongside supporting smart GPS-fenced mobile check-ins.'
  },
  {
    id: 'faq-4',
    category: 'Process',
    question: 'How do you structure new projects?',
    answer: 'We follow a meticulous, engineering-first approach. We start with extensive scope definitions and wireframes, followed by bespoke interactive UI prototyping, high-end React/TypeScript/Flutter engineering, multi-layer QA validation, and secure automated hosting setup.'
  },
  {
    id: 'faq-5',
    category: 'Support',
    question: 'Do you offer ongoing hosting and system support?',
    answer: 'Yes. We provide comprehensive post-launch administration plans including secure cloud hosting configuration, SSL lifecycle management, business email domain maintenance, monthly security auditing, and SLA-backed bug response.'
  }
];
