// Content for the SEO landing pages: /services/:slug, /industries/:slug and /products/:slug.
// Only state what DesignScribe actually offers — these pages are indexed and quoted by search engines.

export const SHARED_FAQS = [
    {
        q: 'How does a project with DesignScribe work?',
        a: 'Four stages: Describe, Design, Build & Test, and Launch & Support. You tell us the problem and the outcome you need, we agree on a roadmap with clear milestones and costs, then build in short sprints with a demo every week.',
    },
    {
        q: 'Do you sign an NDA?',
        a: 'Yes. We sign a non-disclosure agreement on request before you share any project details.',
    },
    {
        q: 'What happens after launch?',
        a: 'We deploy, monitor, and keep improving the product with you. Post-launch support comes from the same team that built it, so there is no handover to strangers.',
    },
    {
        q: 'Can I use one of your ready-made products instead of a custom build?',
        a: 'Often, yes. Our loyalty app, gym management system, and basketball league software can be set up under your brand in days. If they cover most of what you need, it is faster and cheaper than building from scratch.',
    },
];

export const SERVICE_PAGES = [
    {
        slug: 'custom-software-development',
        serviceId: 'custom',
        icon: 'code',
        name: 'Custom Software Development',
        metaTitle: 'Custom Software Development Philippines | DesignScribe',
        metaDescription: 'Custom web and mobile software for Philippine businesses, with clear milestones and costs, weekly demos, and QA every sprint.',
        h1: 'Custom Software Development for Philippine Businesses',
        intro: 'Tell us how your business runs. We design, build, and test software around it: web systems, mobile apps, and integrations that replace spreadsheets, paper forms, and tools that almost fit.',
        builds: [
            {title: 'Web systems and dashboards', desc: 'Booking, records, inventory, and reporting tools your staff use every day, available from any browser.'},
            {title: 'Customer-facing mobile apps', desc: 'Branded iOS and Android apps for your members, patients, or customers.'},
            {title: 'Internal tools and automation', desc: 'Replace manual spreadsheets and copy-paste work with software shaped around your workflow.'},
            {title: 'Integrations', desc: 'Connect the tools you already use so information moves between them without retyping.'},
        ],
        faqs: [
            {q: 'Who is custom software for?', a: 'Businesses whose way of working does not fit off-the-shelf tools: small businesses outgrowing spreadsheets, growing teams with manual processes, and enterprises that need internal tools built to spec.'},
            {q: 'Can you take over a system another developer started?', a: 'Yes. We start by reviewing the existing code and infrastructure, then agree on what to fix, keep, or rebuild before quoting further work.'},
        ],
    },
    {
        slug: 'saas-development',
        serviceId: 'saas',
        icon: 'layers',
        name: 'SaaS Product Development',
        metaTitle: 'SaaS Development Company Philippines | DesignScribe',
        metaDescription: 'We design, build, and run SaaS platforms: multi-tenant accounts, subscriptions, and dashboards that scale from your first customer onward.',
        h1: 'SaaS Product Development',
        intro: 'Multi-tenant platforms, subscriptions, and dashboards engineered to scale from your first customer to your ten-thousandth. We run three SaaS products of our own, so we build yours with the same production experience.',
        builds: [
            {title: 'Multi-tenant accounts', desc: 'Each customer gets their own workspace, users, and data, separated from everyone else.'},
            {title: 'Plans and subscriptions', desc: 'Free and paid tiers, plan limits, and upgrade paths built into the product.'},
            {title: 'Owner and admin dashboards', desc: 'Analytics, user management, and settings for you and for each of your customers.'},
            {title: 'Companion mobile apps', desc: 'iOS and Android apps that share the same accounts and data as the web platform.'},
        ],
        faqs: [
            {q: 'Have you built SaaS products before?', a: 'Yes. We built and operate the Membership & Loyalty App, the Gym Management System, and DS Basketball, each with live customers and paid plans.'},
            {q: 'Can you help me launch an MVP first?', a: 'Yes. We help you choose the smallest feature set that proves the idea, ship it, and plan the next releases from real usage.'},
        ],
    },
    {
        slug: 'web-app-development',
        serviceId: 'custom',
        icon: 'code',
        name: 'Web App Development',
        metaTitle: 'Web App Development Philippines | DesignScribe',
        metaDescription: 'Web systems, portals, and dashboards built around how your business works. Weekly demos and dedicated QA from the first sprint.',
        h1: 'Web App Development',
        intro: 'Web apps your team and customers open in any browser, on any device, with nothing to install. We build portals, dashboards, and internal systems that fit the way your business actually works.',
        builds: [
            {title: 'Customer portals', desc: 'Let customers book, check status, view records, or manage their account on their own.'},
            {title: 'Admin dashboards', desc: 'See sales, attendance, members, or inventory in one place, with reports you can act on.'},
            {title: 'Internal systems', desc: 'Replace paper forms and shared spreadsheets with a single source of truth for your staff.'},
            {title: 'Progressive web apps', desc: 'Web apps that install to a phone home screen and feel like a native app.'},
        ],
        faqs: [
            {q: 'Should I build a web app or a mobile app?', a: 'Start with a web app if your users are mostly staff or work at a desk, or if you need to launch quickly on every device. Choose a mobile app when customers will use it daily on their phone or you need features like QR scanning and notifications.'},
        ],
    },
    {
        slug: 'mobile-app-development',
        serviceId: 'custom',
        icon: 'rocket',
        name: 'Mobile App Development',
        metaTitle: 'Mobile App Development Philippines | DesignScribe',
        metaDescription: 'Branded iOS and Android apps for your customers and members, designed, built, tested, and supported by one team.',
        h1: 'Mobile App Development for iOS and Android',
        intro: 'Put your business in your customers’ pockets with a branded iOS and Android app. We handle design, development, testing, and app store release, then keep it running after launch.',
        builds: [
            {title: 'Branded customer apps', desc: 'Your logo, colors, and name on an app your customers download from the App Store and Google Play.'},
            {title: 'Membership and rewards', desc: 'Member accounts, QR scanning, stamp cards, and rewards, like our own loyalty app.'},
            {title: 'Account and privacy features', desc: 'Private member accounts with in-app account deletion, as app store rules require.'},
            {title: 'Owner dashboards', desc: 'A web dashboard where you manage members, rewards, and analytics behind the app.'},
        ],
        faqs: [
            {q: 'Do you publish the app to the App Store and Google Play?', a: 'Yes. We prepare the store listings, handle the review process, and release updates as the app grows.'},
        ],
    },
    {
        slug: 'ui-ux-design',
        serviceId: 'design',
        icon: 'pen',
        name: 'UI/UX Design',
        metaTitle: 'UI/UX Design Services Philippines | DesignScribe',
        metaDescription: 'Research-led interface design and design systems that make complex workflows simple and turn visitors into users.',
        h1: 'UI/UX Design',
        intro: 'Research-led interfaces and design systems that make complex workflows feel simple and convert visitors into users. We design with the engineers who will build it, so what you approve is what ships.',
        builds: [
            {title: 'User flows', desc: 'Map how each type of user moves through the product before any screen is drawn.'},
            {title: 'Clickable prototypes', desc: 'Test key screens with real users and stakeholders before committing to development.'},
            {title: 'Design systems', desc: 'Reusable components, colors, and type rules that keep every screen consistent as the product grows.'},
            {title: 'Redesigns', desc: 'Improve an existing product’s usability and look without losing what already works.'},
        ],
        faqs: [
            {q: 'Can you design only, without building?', a: 'Yes. We can deliver designs and prototypes for your own team to build, though most clients have us design and build together to avoid handoff gaps.'},
        ],
    },
    {
        slug: 'quality-assurance',
        serviceId: 'qa',
        icon: 'shield',
        name: 'Quality Assurance',
        metaTitle: 'Software QA & Testing Services | DesignScribe',
        metaDescription: 'Dedicated QA engineers, automated test suites, and release checks so every deploy ships with confidence.',
        h1: 'Software Quality Assurance and Testing',
        intro: 'Dedicated QA engineers, automated test suites, and release checks so every deploy ships with confidence. QA runs alongside development, not as an afterthought.',
        builds: [
            {title: 'Manual testing', desc: 'QA engineers test every feature against real-world scenarios on the devices your users have.'},
            {title: 'Automated test suites', desc: 'Tests that run on every change and catch regressions before they reach users.'},
            {title: 'Release checks', desc: 'A repeatable checklist before each deploy so launches are uneventful.'},
            {title: 'QA for existing products', desc: 'Bring in our QA team to test software built by you or another vendor.'},
        ],
        faqs: [
            {q: 'Is QA included in your development projects?', a: 'Yes. Every sprint includes dedicated QA, so testing happens while features are built rather than at the end.'},
        ],
    },
];

export const INDUSTRY_PAGES = [
    {
        slug: 'clinics',
        name: 'Clinics',
        metaTitle: 'Software for Dental and Vet Clinics | DesignScribe',
        metaDescription: 'Patient loyalty apps and custom clinic software for dental, veterinary, and medical clinics in the Philippines.',
        h1: 'Software for Dental, Vet, and Medical Clinics',
        intro: 'Clinics run on repeat visits. We help dental, veterinary, and medical clinics keep patients coming back and replace paper-based work with software built for how a clinic runs.',
        needs: [
            {title: 'Bring patients back', desc: 'A branded membership app with rewards for check-ups and repeat visits.'},
            {title: 'Know your regulars', desc: 'See visit history and loyalty activity in an owner dashboard.'},
            {title: 'Cut paperwork', desc: 'Custom systems for records, scheduling, and front-desk tasks.'},
            {title: 'Protect patient data', desc: 'Private accounts and secure-by-design builds for sensitive information.'},
        ],
        productIds: ['membership-app'],
        serviceSlugs: ['custom-software-development', 'mobile-app-development'],
    },
    {
        slug: 'cafes-and-retail',
        name: 'Cafés & Retail',
        metaTitle: 'Loyalty Apps for Cafés and Shops PH | DesignScribe',
        metaDescription: 'Branded loyalty apps with QR stamp cards, plus custom software, for cafés, restaurants, and retail shops in the Philippines.',
        h1: 'Loyalty Apps and Software for Cafés and Shops',
        intro: 'Turn first-time buyers into regulars. Cafés, restaurants, and shops use our branded loyalty app to replace paper punch cards, and our team builds custom tools when the business needs more.',
        needs: [
            {title: 'Replace paper punch cards', desc: 'QR stamp cards in a branded app that customers cannot lose.'},
            {title: 'Reward repeat customers', desc: 'Set rewards that customers redeem with a quick scan at the counter.'},
            {title: 'See what is working', desc: 'Track members, visits, and redemptions in the owner dashboard.'},
            {title: 'Grow beyond loyalty', desc: 'Custom ordering, inventory, or reporting tools when you outgrow spreadsheets.'},
        ],
        productIds: ['membership-app'],
        serviceSlugs: ['custom-software-development', 'web-app-development'],
    },
];

export const PRODUCT_DETAILS = {
    'membership-app': {
        metaTitle: 'Digital Loyalty and Stamp Card App | DesignScribe',
        metaDescription: 'Launch a branded loyalty app with QR stamp cards and rewards for your café, clinic, or shop. Free plan available; paid plans from ₱500/month.',
        audience: ['Cafés and restaurants', 'Dental, vet, and medical clinics', 'Retail and service shops'],
        appCategory: 'BusinessApplication',
        offer: {price: '0', note: 'Free plan available; paid plans from ₱500/month'},
        faqs: [
            {q: 'Do I need developers to launch my loyalty app?', a: 'No. The app is set up under your brand for you, and you manage members and rewards from the owner dashboard.'},
            {q: 'How do customers collect stamps?', a: 'Customers show their QR code in the app and your staff scan it to add a stamp or redeem a reward.'},
            {q: 'Is there a free plan?', a: 'Yes. A free plan is available, and paid plans start at ₱500 per month.'},
        ],
    },
    'gym-management': {
        metaTitle: 'Gym Management System Philippines | DesignScribe',
        metaDescription: 'Run memberships, RFID attendance, classes, staff, and store sales from one affordable gym system. Plans from ₱500/month.',
        audience: ['Gyms', 'Fitness centers', 'Studios with classes'],
        appCategory: 'BusinessApplication',
        offer: {price: '500', note: 'Plans from ₱500/month'},
        faqs: [
            {q: 'Does it support RFID attendance?', a: 'Yes. Members tap RFID cards to check in, and the cards can be customized with your branding.'},
            {q: 'Can it track membership expiry?', a: 'Yes. You can set up custom memberships with their own fees and expiry dates, and the system tracks them for you.'},
            {q: 'How much does it cost?', a: 'Plans start at ₱500 per month.'},
        ],
    },
    'ds-basketball': {
        metaTitle: 'Basketball League Management App | DS Basketball',
        metaDescription: 'Automate your basketball league: live stat tracking, instant box scores, standings, and player stats for leagues and clubs. Free plan available.',
        audience: ['League organizers', 'Basketball clubs', 'Sports associations'],
        appCategory: 'SportsApplication',
        offer: {price: '0', note: 'Free plan available; paid plans from ₱9,990/year'},
        faqs: [
            {q: 'What does DS Basketball automate for my league?', a: 'Scorekeepers log each basket, foul, and substitution on a phone during the game. Box scores, standings, and player season stats update automatically, so nothing needs to be tallied or posted after the final buzzer.'},
            {q: 'Can scorekeepers track stats from a phone?', a: 'Yes. Scorekeepers record live stats from a phone at the court, and fans see box scores and play-by-play as the game happens.'},
            {q: 'Can different staff have different access?', a: 'Yes. DS Basketball has separate roles for owners, admins, and scorekeepers.'},
            {q: 'Is there a free plan?', a: 'Yes. A free plan is available, and paid plans start at ₱9,990 per year.'},
        ],
    },
};
