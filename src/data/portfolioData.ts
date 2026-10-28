import { Project, Service, SkillCategory, Testimonial } from '../types';

export const PERSONAL_INFO = {
  name: 'Syed Umer Hayat',
  publicName: 'Syed Bhai',
  brandName: 'SYEDCORE',
  tagline: 'Full-Stack Web Developer & Technical SEO Growth Specialist',
  shortBio: 'Computer Science student at Virtual University of Pakistan, founder of SYEDCORE and creator of syed-bhai.page.gd. I engineer ultra-fast modern web applications, high-ranking SEO architectures, and automated digital growth systems.',
  extendedBio: `I am Syed Umer Hayat (also known as Syed Bhai across digital communities), a passionate web developer and digital growth strategist based in Nowshera, Pakistan. Currently pursuing my Bachelor of Science in Computer Science (BSCS) at the Virtual University of Pakistan, I combine foundational software engineering principles with high-impact digital marketing, YouTube automation, and e-commerce solutions.
  
Through my main platforms—syedcore.com (my personal tech hub and digital ecosystem) and syed-bhai.page.gd (my client growth and automation landing portal)—I have assisted entrepreneurs, creators, and business owners globally in scaling their web presence, ranking on Google search, and automating repetitive business operations.`,
  email: 'itsumer92@gmail.com',
  whatsapp: '+92 300 0000000',
  location: 'Nowshera, Khyber Pakhtunkhwa, Pakistan',
  education: 'BS in Computer Science (BSCS) — Virtual University of Pakistan',
  experienceYears: '4+ Years',
  projectsCompleted: '50+',
  satisfactionRate: '99%',
  primaryWebsite: 'https://syedcore.com',
  secondaryWebsite: 'https://syed-bhai.page.gd/?i=2',
  socialLinks: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com/syedcore',
    youtube: 'https://youtube.com',
  },
};

export const SERVICES: Service[] = [
  {
    id: 'web-development',
    title: 'Custom Full-Stack Web Development',
    shortDesc: 'Modern, blazing-fast web apps & responsive corporate websites built with clean code and high performance.',
    fullDesc: 'From high-converting landing pages to complex responsive web platforms. Built using React, TypeScript, Tailwind CSS, Next.js, and Node.js with strict attention to Core Web Vitals, mobile responsiveness, and clean architecture.',
    iconName: 'Code2',
    category: 'Development',
    startingPrice: '$199',
    timeline: '3 - 7 Days',
    toolsUsed: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js', 'WordPress'],
    features: [
      '100% Mobile & Tablet Responsive Layouts',
      'Ultra-Fast Loading Speeds (< 1s load times)',
      'Clean, maintainable, modular codebase',
      'Interactive animations with Tailwind and Motion',
      'Cross-browser compatibility testing',
      'Built-in SEO and schema structure'
    ],
    deliverables: [
      'Production-ready deployable web application',
      'Full source code repository access',
      'DNS & Domain setup assistance',
      '30-day post-launch technical support'
    ]
  },
  {
    id: 'seo-optimization',
    title: 'Complete SEO Optimization & Ranking',
    shortDesc: 'Data-driven on-page, technical, and off-page SEO strategies to rank your website at top of Google.',
    fullDesc: 'Comprehensive search engine optimization tailored to get your business discovered organically. Includes in-depth site speed tuning, Google Search Console indexing, semantic keyword mapping, and Schema.org structured data.',
    iconName: 'Search',
    category: 'SEO & Growth',
    startingPrice: '$149',
    timeline: '5 - 10 Days',
    toolsUsed: ['Google Search Console', 'Ahrefs', 'SEMrush', 'Lighthouse', 'Schema.org', 'Screaming Frog'],
    features: [
      'Comprehensive Technical SEO Site Audit',
      'Keyword Research & Competitor Gap Analysis',
      'Title, Meta Description, & OpenGraph tuning',
      'Lighthouse 100/100 Core Web Vitals optimization',
      'Schema.org JSON-LD Rich Snippet integration',
      'Sitemap.xml & Robots.txt generation & submission'
    ],
    deliverables: [
      'Detailed SEO Audit & Action Report',
      'Targeted Keyword Mapping Spreadsheet',
      'Full Schema.org JSON-LD file configured',
      'Google Search Console indexing confirmation'
    ]
  },
  {
    id: 'youtube-automation',
    title: 'YouTube Automation & Channel Scaling',
    shortDesc: 'End-to-end channel growth solutions from high-CTR thumbnails to viral scripting and video SEO.',
    fullDesc: 'Empowering creators and brands to dominate YouTube without burnout. We handle high-click-through-rate (CTR) thumbnail design, search-optimized titles and descriptions, AI-assisted scriptwriting, and retention-focused video editing.',
    iconName: 'Youtube',
    category: 'Digital Media',
    startingPrice: '$120',
    timeline: 'Ongoing / 48 hrs per video',
    toolsUsed: ['Photoshop', 'Canva Pro', 'Premiere Pro', 'TubeBuddy', 'vidIQ', 'ChatGPT/Gemini'],
    features: [
      'High-CTR Custom Thumbnail Design (A/B testing ready)',
      'Search-Engine-Optimized Titles, Tags & Descriptions',
      'Channel Branding & Banner Art overhaul',
      'Video Editing with smooth pacing & B-roll transitions',
      'Audience Retention & Analytics Strategy'
    ],
    deliverables: [
      'High-resolution JPG/PNG thumbnails with PSD files',
      'SEO metadata package per upload',
      'Polished 1080p/4K finalized video deliverables',
      'Monthly channel performance consultation'
    ]
  },
  {
    id: 'shopify-management',
    title: 'Shopify Store Development & E-Commerce VA',
    shortDesc: 'Turnkey Shopify store setup, dropshipping automation, product listing, and daily operations.',
    fullDesc: 'Scalable e-commerce infrastructure designed to convert visitors into loyal paying customers. From configuring professional Shopify themes to automated order fulfillment and customer support workflows.',
    iconName: 'ShoppingBag',
    category: 'E-Commerce',
    startingPrice: '$180',
    timeline: '4 - 7 Days',
    toolsUsed: ['Shopify Liquid', 'DSers / AliExpress', 'Klaviyo', 'Canva', 'Zendesk / Tidio'],
    features: [
      'Custom Shopify Theme Setup & Branding',
      'High-converting product page layout design',
      'Dropshipping & Supplier Automation integration',
      'Essential App configuration (Reviews, Currency, Shipping)',
      'Order fulfillment & Virtual Assistant daily support'
    ],
    deliverables: [
      'Fully functional, live Shopify Store',
      'Configured payment gateways & shipping rules',
      'Standard Operating Procedure (SOP) documentation',
      '14 days of dedicated store management support'
    ]
  },
  {
    id: 'graphic-branding',
    title: 'Graphic Design & Brand Identity',
    shortDesc: 'Eye-catching visuals, logo design, social media banners, and UI/UX assets that make your brand stand out.',
    fullDesc: 'Visual design engineered for impact and credibility. Whether you need a refreshed brand identity, sleek UI wireframes, social media marketing assets, or promotional collateral, every design is crafted with pixel perfection.',
    iconName: 'Palette',
    category: 'Creative Design',
    startingPrice: '$80',
    timeline: '2 - 4 Days',
    toolsUsed: ['Figma', 'Adobe Photoshop', 'Illustrator', 'Canva Pro'],
    features: [
      'Brand Identity, Logo & Color Palette Guidelines',
      'Social Media Post & Story Templates',
      'YouTube Banner & Social Header Kits',
      'Modern UI/UX Web Mockups & Wireframes',
      'High-resolution vector assets for print & digital'
    ],
    deliverables: [
      'Vector SVG/AI, PNG, and PDF source files',
      'Brand Style Guide sheet',
      'Figma source file link'
    ]
  },
  {
    id: 'virtual-assistant',
    title: 'Virtual Assistance & AI Prompt Automation',
    shortDesc: 'Streamlining your business workflows with AI tools, Excel spreadsheets, data entry, and research.',
    fullDesc: 'Leverage cutting-edge AI prompt engineering (ChatGPT, Gemini) and organized executive assistance to save 15+ hours weekly. Specializing in data cleanup, Excel formula modeling, customer email management, and web research.',
    iconName: 'Bot',
    category: 'Productivity & AI',
    startingPrice: '$99',
    timeline: 'Flexible / Hourly or Weekly',
    toolsUsed: ['Gemini AI', 'ChatGPT', 'Microsoft Excel', 'Google Sheets', 'Notion', 'PowerPoint'],
    features: [
      'Custom AI Prompt Engineering for business operations',
      'Advanced Excel/Google Sheets formula automation & Dashboards',
      'Internet Research & Lead Generation scraping',
      'Data Entry, File Conversion & Documentation',
      'Daily Email & Calendar management'
    ],
    deliverables: [
      'Organized spreadsheet reports with clean schemas',
      'Custom AI prompt libraries tailored to your niche',
      'Weekly progress summary and time tracking logs'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'syedcore-platform',
    title: 'SYEDCORE – Personal Digital Ecosystem',
    category: 'Websites',
    tagline: 'Flagship Digital Portfolio & Tech Hub at syedcore.com',
    description: 'The primary digital ecosystem of Syed Umer Hayat, engineered to showcase full-stack capabilities, web engineering, SEO strategies, and digital portfolio items.',
    longDescription: 'SYEDCORE (syedcore.com) represents my central web presence. Built with modern high-performance web standards, it showcases comprehensive technical proficiencies, service breakdowns, interactive widgets, and client resources. Engineered with zero-bloat styling, strict semantic HTML5, and sub-second load times.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Schema.org', '100% SEO'],
    metrics: [
      { label: 'Lighthouse Score', value: '100/100' },
      { label: 'Page Load Speed', value: '0.8s' },
      { label: 'SEO Optimization', value: 'Complete' }
    ],
    liveUrl: 'https://syedcore.com',
    featured: true,
    deliverables: [
      'Fully responsive custom UI architecture',
      'Integrated Schema.org JSON-LD Person & Service graphs',
      'Dynamic project filtering and interactive modals'
    ],
    clientCountry: 'Worldwide / Pakistan'
  },
  {
    id: 'syed-bhai-hub',
    title: 'Syed Bhai Digital Growth & Automation Hub',
    category: 'SEO & Growth',
    tagline: 'High-Conversion Landing Portal at syed-bhai.page.gd',
    description: 'Specialized client acquisition landing page focusing on YouTube automation, Shopify store scaling, and high-efficiency virtual assistance.',
    longDescription: 'Designed as a laser-targeted conversion funnel under the trusted community persona "Syed Bhai", this landing page (syed-bhai.page.gd/?i=2) drives direct client consultations for YouTube channel growth, automated dropshipping setups, and digital marketing execution.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Conversion Rate Optimization', 'YouTube SEO', 'Shopify VA', 'Lead Generation'],
    metrics: [
      { label: 'Conversion Uplift', value: '+240%' },
      { label: 'Avg Session Duration', value: '3m 12s' },
      { label: 'Inquiries Generated', value: '150+' }
    ],
    liveUrl: 'https://syed-bhai.page.gd/?i=2',
    featured: true,
    deliverables: [
      'High-converting mobile-first layout',
      'Streamlined WhatsApp & Email lead capture',
      'Social proof & service breakdown'
    ],
    clientCountry: 'Global Client Base'
  },
  {
    id: 'apex-shopify-store',
    title: 'ApexStore – E-Commerce Dropshipping Engine',
    category: 'Shopify Stores',
    tagline: 'Turnkey Shopify Setup with Automated Order Fulfillment',
    description: 'High-converting custom-branded e-commerce store with integrated supplier APIs, trust badges, and frictionless single-page checkout.',
    longDescription: 'Engineered a modern Shopify storefront for a consumer electronics brand. Implemented custom Liquid theme tweaks, mobile-optimized product carousels, customer review automations, and synced AliExpress/DSers suppliers for 1-click order fulfillment.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
    tags: ['Shopify Liquid', 'E-Commerce', 'Dropshipping', 'Conversion UX'],
    metrics: [
      { label: 'Monthly GMV', value: '$45K+' },
      { label: 'Conversion Rate', value: '3.8%' },
      { label: 'Store Speed', value: '92/100' }
    ],
    liveUrl: 'https://shopify.com',
    deliverables: [
      'Curated product catalog & supplier synchronization',
      'Custom CSS styling and responsive theme tuning',
      'Automated transactional emails and shipping tracking'
    ],
    clientCountry: 'United States'
  },
  {
    id: 'streamgrowth-youtube',
    title: 'StreamGrowth – YouTube Channel Automation Package',
    category: 'YouTube & Media',
    tagline: 'Scaled Tech & Gaming Channel to 100K+ Subscribers',
    description: 'Complete YouTube growth package including click-worthy thumbnail designs, high-retention video editing, and algorithmic SEO tagging.',
    longDescription: 'Managed end-to-end video packaging for a technology and automation creator. Created bright, contrast-rich thumbnails with emotional hooks, structured retention-oriented editing timelines with motion graphics, and configured search metadata that ranked in top 3 search queries.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80',
    tags: ['YouTube SEO', 'Thumbnail Design', 'Premiere Pro', 'Channel Growth'],
    metrics: [
      { label: 'Views Generated', value: '1.2M+' },
      { label: 'Average CTR', value: '11.4%' },
      { label: 'Subscribers Added', value: '+42K' }
    ],
    featured: true,
    deliverables: [
      '30+ High-CTR custom thumbnail templates',
      'Video editing SOP and title optimization guidelines',
      'Keyword ranking audit via TubeBuddy and vidIQ'
    ],
    clientCountry: 'United Kingdom'
  },
  {
    id: 'rankmaster-seo-case',
    title: 'RankMaster – 340% Organic Traffic Growth',
    category: 'SEO & Growth',
    tagline: 'Technical & Content SEO Overhaul for Business Services',
    description: 'Conducted comprehensive technical SEO audit, structured data implementation, and site speed optimization that tripled organic organic impressions.',
    longDescription: 'The client website suffered from sluggish load times (>5s) and broken canonical tags. I performed an exhaustive technical audit, eliminated render-blocking resources, implemented JSON-LD structured data, and revamped title/meta tags across 80+ pages.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tags: ['Technical SEO', 'Schema JSON-LD', 'PageSpeed', 'Google Search Console'],
    metrics: [
      { label: 'Traffic Increase', value: '+340%' },
      { label: 'First Page Keywords', value: '48+' },
      { label: 'Lighthouse Score', value: '99/100' }
    ],
    deliverables: [
      'Full technical health audit & resolved indexation errors',
      'Schema.org Organization & FAQ markup deployment',
      'Core Web Vitals remediation'
    ],
    clientCountry: 'United Arab Emirates'
  },
  {
    id: 'nexus-portal-web',
    title: 'Nexus Corporate Web Application',
    category: 'Websites',
    tagline: 'Responsive Business Portal with Interactive Client Booking',
    description: 'Clean modern web platform for professional consulting with interactive appointment scheduling, service estimation, and multi-language support.',
    longDescription: 'Developed a corporate consulting website featuring sleek micro-interactions, responsive mobile menus, dynamic contact routing, and comprehensive local SEO markup.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Tailwind CSS', 'TypeScript', 'Responsive Design'],
    metrics: [
      { label: 'Client Inquiries', value: '+85%' },
      { label: 'Bounce Rate', value: '28%' },
      { label: 'Mobile Score', value: '100%' }
    ],
    deliverables: [
      'Complete React SPA architecture',
      'Custom quotation form with validation',
      'Comprehensive on-page SEO integration'
    ],
    clientCountry: 'Pakistan'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Web Engineering & Development',
    skills: [
      { name: 'HTML5 / Semantic Web', level: 98, description: 'Semantic tags, accessibility standards, and SEO compliance' },
      { name: 'CSS3 & Modern Tailwind CSS', level: 96, description: 'Utility-first styling, fluid responsiveness, and animations' },
      { name: 'JavaScript (ES6+) & TypeScript', level: 92, description: 'Strong typing, async patterns, and modern DOM control' },
      { name: 'React.js & Next.js Ecosystem', level: 90, description: 'Hook patterns, component architecture, state management' },
      { name: 'WordPress & CMS Customization', level: 88, description: 'Theme modifications, plugin tuning, and page builders' },
      { name: 'Node.js & REST APIs', level: 82, description: 'Server-side endpoints, middleware, and database connectivity' }
    ]
  },
  {
    name: 'Search Engine Optimization (SEO)',
    skills: [
      { name: 'Technical SEO & Core Web Vitals', level: 95, description: 'Lighthouse speed optimization, caching, schema validation' },
      { name: 'On-Page SEO & Content Strategy', level: 94, description: 'Title/meta architecture, keyword distribution, internal links' },
      { name: 'Schema.org JSON-LD Structured Data', level: 96, description: 'Rich snippets for Person, Organization, FAQ, and Products' },
      { name: 'Google Search Console & Analytics', level: 90, description: 'Crawl error fixes, indexation audits, search performance' },
      { name: 'Competitor & Keyword Gap Analysis', level: 88, description: 'Ahrefs/SEMrush queries, intent mapping, low-hanging fruit' }
    ]
  },
  {
    name: 'YouTube, Media & E-Commerce',
    skills: [
      { name: 'YouTube Automation & Channel Growth', level: 92, description: 'Metadata, algorithmic CTR tactics, audience retention' },
      { name: 'High-CTR Thumbnail & Graphic Design', level: 94, description: 'Photoshop, Canva Pro, visual contrast, typography' },
      { name: 'Shopify Store Setup & Dropshipping', level: 89, description: 'Theme styling, app integration, product page conversion' },
      { name: 'Video Editing (Premiere / DaVinci)', level: 85, description: 'Pacing, sound design, hooks, and visual overlays' },
      { name: 'E-Commerce Virtual Assistant Operations', level: 90, description: 'Customer support, order fulfillment, supplier handling' }
    ]
  },
  {
    name: 'AI Automation & Office Productivity',
    skills: [
      { name: 'AI Prompt Engineering (Gemini / ChatGPT)', level: 95, description: 'Custom system prompts, workflow acceleration, content' },
      { name: 'Microsoft Office & Advanced Excel', level: 92, description: 'Formulas, VLOOKUP, pivot tables, presentation design' },
      { name: 'Data Management & Virtual Assistance', level: 90, description: 'File structures, web research, quality assurance' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Hamza Malik',
    role: 'Founder',
    company: 'Digitex Solutions',
    location: 'Lahore, Pakistan',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    comment: 'Working with Syed Umer was one of our best decisions. He redesigned our corporate website and set up complete SEO. In under two months, our website began ranking on Google for our primary target keywords. Fast, communicative, and exceptionally skilled!',
    rating: 5,
    projectType: 'Web Development & SEO'
  },
  {
    id: '2',
    clientName: 'David Reynolds',
    role: 'Content Creator (140K Subs)',
    company: 'TechByte Media',
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    comment: 'Syed Bhai is a YouTube genius. The thumbnails he designed consistently boosted our CTR from 5% to over 11%. Plus, his video SEO metadata helped our tutorials climb right to the top of YouTube search results. Outstanding work ethic!',
    rating: 5,
    projectType: 'YouTube Automation & Media'
  },
  {
    id: '3',
    clientName: 'Sarah Jenkins',
    role: 'E-Commerce Brand Director',
    company: 'GlowAura Retail',
    location: 'Austin, Texas, USA',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    comment: 'Syed set up our entire Shopify storefront from scratch, handled supplier sync, and optimized the product pages for maximum mobile conversion. His attention to detail and virtual assistance support made our store launch completely stress-free.',
    rating: 5,
    projectType: 'Shopify Store Development'
  },
  {
    id: '4',
    clientName: 'Tariq Al-Mansoor',
    role: 'Managing Partner',
    company: 'Gulf Horizon Ventures',
    location: 'Dubai, UAE',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    comment: 'SYEDCORE delivered a high-speed web portal that impressed all our investors. The site loads in under a second and every technical SEO box was checked with perfection. Syed is a true professional.',
    rating: 5,
    projectType: 'Full-Stack Web Development'
  }
];

export const TIMELINE = [
  {
    period: '2023 - Present',
    title: 'Founder & Lead Engineer',
    organization: 'SYEDCORE (syedcore.com)',
    description: 'Leading digital solutions across web engineering, comprehensive SEO architecture, and automation services for clients worldwide.'
  },
  {
    period: '2022 - Present',
    title: 'Creator & Digital Growth Strategist',
    organization: 'Syed Bhai Growth Hub (syed-bhai.page.gd)',
    description: 'Providing YouTube channel scaling, high-CTR thumbnail assets, and automated Shopify virtual assistant services.'
  },
  {
    period: '2021 - Present',
    title: 'BS in Computer Science (BSCS)',
    organization: 'Virtual University of Pakistan',
    description: 'Rigorous academic education in Data Structures, Algorithms, Software Engineering, Database Systems, and Web Technologies.'
  },
  {
    period: '2020 - 2022',
    title: 'Freelance Web Developer & SEO Specialist',
    organization: 'Independent Practice',
    description: 'Delivered dozens of WordPress, HTML/CSS/JS, and local SEO campaigns for regional and international small businesses.'
  }
];
