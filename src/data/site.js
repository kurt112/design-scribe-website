export const COMPANY = {
    name: 'DesignScribe',
    tagline: 'You Describe. We Build.',
    email: 'designscribe.solution@gmail.com',
    socials: {
        linkedin: '#',
        github: '#',
    },
};

// Production origin — keep in sync with index.html, public/robots.txt and public/sitemap.xml.
export const SITE_URL = 'https://design-scribe.com';

export const PAGE_META = {
    '/': {
        title: 'DesignScribe — Custom Software & SaaS Development',
        description: 'DesignScribe designs, builds, and tests custom software and SaaS products for small businesses through enterprise teams. You describe. We build.',
    },
    '/products': {
        title: 'Ready-Made SaaS Products | DesignScribe',
        description: 'White-label SaaS platforms — loyalty and membership apps, gym management, and basketball league software — launched under your brand in days.',
    },
    '/services': {
        title: 'Software Development Services | DesignScribe',
        description: 'Custom software, SaaS, web and mobile app development, UI/UX design, and QA for Philippine businesses, from one team.',
    },
    '/members': {
        title: 'Our Team | DesignScribe',
        description: 'Meet the DesignScribe team of product designers, full-stack engineers, and QA specialists who build your software.',
    },
    '/contact-us': {
        title: 'Contact Us | DesignScribe',
        description: 'Tell us about your project. Get a scoped plan for custom software, SaaS development, UI/UX design, or QA from DesignScribe.',
    },
    '/privacy': {
        title: 'Privacy Policy | DesignScribe',
        description: 'How DesignScribe collects, uses, and protects the information you share with us.',
    },
};

export const NAV_LINKS = [
    { to: '/', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/products', label: 'Products' },
    { to: '/members', label: 'Members' },
    { to: '/contact-us', label: 'Contact us' },
];

export const STATS = [
    { value: '50+', label: 'Projects delivered' },
    { value: '20+', label: 'Active clients' },
    { value: '99.9%', label: 'Uptime reliability' },
    { value: '2x', label: 'Faster average delivery' },
];

export const SERVICES = [
    {
        id: 'saas',
        icon: 'layers',
        title: 'SaaS Product Development',
        desc: 'Multi-tenant platforms, subscriptions, and dashboards engineered to scale from your first customer to your ten-thousandth.',
        link: { to: '/services/saas-development', label: 'Learn more' },
    },
    {
        id: 'saas-product',
        icon: 'rocket',
        title: 'Ready-Made SaaS Products',
        desc: 'Subscribe to our proven platforms — loyalty and membership apps, gym management, basketball leagues, and more — set up under your brand in days, not months.',
        link: { to: '/products', label: 'Browse products' },
    },
    {
        id: 'custom',
        icon: 'code',
        title: 'Custom Software',
        desc: 'Web apps, internal tools, and integrations built around how your business actually works — not the other way around.',
        link: { to: '/services/custom-software-development', label: 'Learn more' },
    },
    {
        id: 'design',
        icon: 'pen',
        title: 'UI/UX Design',
        desc: 'Research-led interfaces and design systems that make complex workflows feel simple and convert visitors into users.',
        link: { to: '/services/ui-ux-design', label: 'Learn more' },
    },
    {
        id: 'qa',
        icon: 'shield',
        title: 'Quality Assurance',
        desc: 'Dedicated QA engineers, automated test suites, and release checks so every deploy ships with confidence.',
        link: { to: '/services/quality-assurance', label: 'Learn more' },
    },
];

export const PROCESS = [
    { step: '01', title: 'Describe', desc: 'Tell us the problem, the audience, and the outcome you need. We ask the questions that shape scope.' },
    { step: '02', title: 'Design', desc: 'We map flows, prototype key screens, and agree on a roadmap with clear milestones and costs.' },
    { step: '03', title: 'Build & Test', desc: 'Short sprints with weekly demos. QA runs alongside development, not as an afterthought.' },
    { step: '04', title: 'Launch & Support', desc: 'We deploy, monitor, and keep improving — with a team that already knows your product.' },
];

export const VALUES = [
    { icon: 'handshake', title: 'Integrity', desc: 'Transparent communication and accountable delivery.' },
    { icon: 'sparkles', title: 'Innovation', desc: 'Continuous exploration of better approaches.' },
    { icon: 'check-circle', title: 'Reliability', desc: 'Systems and processes you can trust.' },
    { icon: 'heart', title: 'Empathy', desc: 'User-first decisions with real-world impact.' },
];

export const TRUST_BADGES = [
    { icon: 'lock', label: 'NDA on request' },
    { icon: 'shield', label: 'Secure-by-design builds' },
    { icon: 'check-circle', label: 'Dedicated QA every sprint' },
    { icon: 'headset', label: 'Post-launch support' },
];

// Placeholder client names and quotes — replace with real clients/testimonials (with permission) before launch.
export const CLIENTS = [
    { name: 'Dentist Clinic', glyph: 'circle' },
    { name: 'Vet Clinic', glyph: 'square' },
    { name: 'Motor Shop', glyph: 'triangle' },
    { name: 'Cafe Shop', glyph: 'hex' },
];

export const TESTIMONIALS = [
    {
        quote: 'Their engineering velocity and clarity transformed our release cycles. We went from quarterly launches to shipping every two weeks.',
        name: 'Business Owner',
        company: 'Vet Clinic',
    },
    {
        quote: 'We scaled confidently thanks to their performance guidance. The platform handled 5x our launch traffic without a hiccup.',
        name: 'Business Owner',
        company: 'Motor Shop',
    },
    {
        quote: 'A reliable partner for sensitive data solutions. Their QA process caught issues our previous vendor never did.',
        name: 'Business Owner',
        company: 'Dental Clinic',
    },
];

export const PRODUCTS = [
    {
        id: 'membership-app',
        name: 'Membership & Loyalty App',
        category: 'Customer loyalty',
        tagline: 'Your loyalty program, under your brand, in every customer’s pocket.',
        desc: 'Lets cafés, clinics, and shops launch their own branded membership app with QR stamp cards and rewards — no developers needed.',
        features: [
            'QR scan to stamp visits and redeem rewards',
            'Branded iOS and Android member app',
            'Owner dashboard with analytics',
            'Private member accounts with in-app deletion',
        ],
        pricing: 'Free plan available · paid plans from ₱500/month',
        url: 'https://membership-web.web.app/',
        image: '/products/membership-app.jpg',
    },
    {
        id: 'ds-basketball',
        name: 'DS Basketball',
        category: 'Basketball leagues',
        tagline: 'Post box scores before you leave.',
        desc: 'League software for organizers, clubs, and associations. Scorekeepers log every bucket, foul, and sub on a phone, and box scores, standings, and player stats go live on your league’s own site the moment the buzzer sounds.',
        features: [
            'Live stat tracking from a phone, courtside',
            'Broadcast-style box scores, standings, and play-by-play',
            'Shareable player profiles with season stats',
            'Staff roles for owners, admins, and scorekeepers',
        ],
        pricing: 'Free plan available · paid plans from ₱9,990/year',
        url: 'https://design-scribe-basketball.web.app/',
        image: '/products/ds-basketball.jpg',
    },
    {
        id: 'gym-management',
        name: 'Gym Management System',
        category: 'Fitness operations',
        tagline: 'Track everything happening in your gym from one affordable system.',
        desc: 'An all-in-one platform for gyms and fitness centers to run memberships, classes, attendance, staff, and sales.',
        features: [
            'Custom memberships with fees and expiry tracking',
            'RFID card attendance with customizable cards',
            'Class scheduling, customers, and employees',
            'Store sales, VAT tracking, and audit trail',
        ],
        pricing: 'Plans from ₱500/month',
        url: 'https://gym-management-demo.web.app/#/',
        image: '/products/gym-management.jpg',
    }
];

export const SEARCH_INDEX = [
    { label: 'About Us', hint: 'Home', to: '/', keywords: 'home overview company' },
    { label: 'Services', hint: 'What we build', to: '/#services', keywords: 'saas custom software design ui ux qa testing' },
    { label: 'Our Process', hint: 'How we work', to: '/#process', keywords: 'describe design build launch steps' },
    { label: 'Client Stories', hint: 'Testimonials', to: '/#testimonials', keywords: 'reviews clients social proof' },
    { label: 'Core Values', hint: 'What we stand for', to: '/#values', keywords: 'integrity innovation reliability empathy' },
    { label: 'Services', hint: 'All services', to: '/services', keywords: 'services development offer' },
    { label: 'Custom Software Development', hint: 'Service', to: '/services/custom-software-development', keywords: 'custom software web system internal tools integration' },
    { label: 'SaaS Product Development', hint: 'Service', to: '/services/saas-development', keywords: 'saas platform subscription multi-tenant mvp startup' },
    { label: 'Web App Development', hint: 'Service', to: '/services/web-app-development', keywords: 'web app portal dashboard pwa' },
    { label: 'Mobile App Development', hint: 'Service', to: '/services/mobile-app-development', keywords: 'mobile app ios android app store' },
    { label: 'UI/UX Design', hint: 'Service', to: '/services/ui-ux-design', keywords: 'design prototype design system ux ui' },
    { label: 'Quality Assurance', hint: 'Service', to: '/services/quality-assurance', keywords: 'qa testing automated tests' },
    { label: 'Software for Clinics', hint: 'Industry', to: '/industries/clinics', keywords: 'dental vet medical clinic patients' },
    { label: 'Software for Cafés & Retail', hint: 'Industry', to: '/industries/cafes-and-retail', keywords: 'cafe restaurant shop retail loyalty punch card' },
    { label: 'Products', hint: 'Our SaaS products', to: '/products', keywords: 'saas apps product portfolio demo subscribe avail ready-made' },
    { label: 'Membership & Loyalty App', hint: 'Product', to: '/products/membership-app', keywords: 'loyalty rewards stamp card qr cafe clinic shop' },
    { label: 'Gym Management System', hint: 'Product', to: '/products/gym-management', keywords: 'gym fitness rfid attendance classes membership' },
    { label: 'DS Basketball', hint: 'Product', to: '/products/ds-basketball', keywords: 'basketball league sports scores stats box score teams players courtside' },
    { label: 'Members', hint: 'Meet the team', to: '/members', keywords: 'team people staff' },
    { label: 'Contact us', hint: 'Start a project', to: '/contact-us', keywords: 'email quote get started message' },
    { label: 'Privacy Policy', hint: 'Legal', to: '/privacy', keywords: 'privacy data legal' },
];
