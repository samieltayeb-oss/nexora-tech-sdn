import type { Locale } from "@/lib/i18n";

export interface ServiceDetail {
  slug: string;
  legacySlug: string;
  code: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  problemStatement: string;
  nexoraOffering: string;
  practicalOutcome: string;
  ctaLabel: string;
  approvalGateNote: string;
  imagePath: string;
  imageAlt: string;
  platforms: string[];
  subEntries?: {
    name: string;
    badge: string;
    description: string;
    statusNote: string;
  }[];
  capabilities: {
    title: string;
    description: string;
  }[];
  deliverables: string[];
  sectors: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface SolutionItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  architectureLayers: {
    layer: string;
    detail: string;
  }[];
  platforms: string[];
  outcomes: string[];
  serviceSlug: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  summary: string;
  challengesAddressed: string[];
  nexoraSystems: string[];
}

export interface ClientReference {
  slug: string;
  name: string;
  nameAr: string;
  sector: string;
  logoPath: string;
  surfaceTone: "light" | "dark";
  gridPosition: string;
  reviewRegisterNote: string;
  reviewRegisterNoteAr: string;
  scopeSummary: string;
  approvalStatus: "needs_verification" | "approved_for_publication";
}

export interface InsightArticle {
  slug: string;
  category: string;
  readTime: string;
  title: string;
  summary: string;
  keyTakeaways: string[];
  sections: {
    heading: string;
    body: string;
  }[];
}

export interface SiteDictionary {
  locale: Locale;
  dir: "ltr" | "rtl";
  meta: {
    siteName: string;
    defaultTitle: string;
    defaultDescription: string;
    tagline: string;
    descriptor: string;
  };
  nav: {
    home: string;
    solutions: string;
    about: string;
    howWeWork: string;
    contact: string;
    services: string;
    industries: string;
    projects: string;
    insights: string;
    designSystem: string;
    talkToTeam: string;
    exploreSolutions: string;
    switchLanguageLabel: string;
    allServices: string;
  };
  contactInfo: {
    companyName: string;
    gmName: string;
    gmTitle: string;
    phone: string;
    phoneClean: string;
    email: string;
    website: string;
    cardDomain: string;
    address: string;
    cityCountry: string;
    fieldHubs: string;
    slaStatement: string;
    approvalNote: string;
  };
  hero: {
    eyebrow: string;
    h1: string;
    intro: string;
    headlineLine1: string;
    headlineLine2: string;
    lede: string;
    primaryCta: string;
    secondaryCta: string;
    wideImagePath: string;
    mobileImagePath: string;
    imageAlt: string;
    layers: {
      workflowLabel: string;
      workflowDetail: string;
      integrationLabel: string;
      integrationDetail: string;
      infrastructureLabel: string;
      infrastructureDetail: string;
    };
    cardLeftLabel: string;
    cardLeftTitle: string;
    cardRightLabel: string;
    cardRightTitle: string;
    statALabel: string;
    statAValue: string;
    statBLabel: string;
    statBValue: string;
    scrollLabel: string;
    dockItems: {
      overview: string;
      services: string;
      process: string;
      contact: string;
    };
    verificationBadge: string;
    modeInteractive: string;
    modeCanvas: string;
    modeLite: string;
    modeRawSource: string;
    conflictNotice: string;
  };
  connectedScopeExample: {
    eyebrow: string;
    badge: string;
    title: string;
    lead: string;
    disclaimer: string;
    nodes: {
      step: string;
      layer: string;
      title: string;
      description: string;
      solutionSlug: string;
      solutionLabel: string;
    }[];
  };
  intro: {
    eyebrow: string;
    title: string;
    lead: string;
    body1: string;
    body2: string;
    gmSectionTitle: string;
    gmQuote: string;
    gmName: string;
    gmRole: string;
    gmApprovalNote: string;
    visionTitle: string;
    visionBody: string;
    missionTitle: string;
    missionBody: string;
    purposeStatement: string;
    metrics: {
      value: string;
      label: string;
      detail: string;
      approvalStatus: "approved_for_publication" | "source_backed" | "needs_verification";
    }[];
  };
  capabilitiesSection: {
    eyebrow: string;
    title: string;
    lead: string;
    problemLabel: string;
    offeringLabel: string;
    outcomeLabel: string;
    learnMoreLabel: string;
  };
  services: ServiceDetail[];
  solutionsSection: {
    eyebrow: string;
    title: string;
    lead: string;
    layersLabel: string;
    platformsLabel: string;
    outcomesLabel: string;
    items: SolutionItem[];
  };
  industriesSection: {
    eyebrow: string;
    title: string;
    lead: string;
    challengesLabel: string;
    systemsLabel: string;
    items: IndustryItem[];
  };
  whyNexora: {
    eyebrow: string;
    title: string;
    lead: string;
    pillars: {
      number: string;
      title: string;
      description: string;
      proofPoint: string;
      approvalStatus: "approved_for_publication" | "source_backed" | "needs_verification";
    }[];
  };
  processSection: {
    eyebrow: string;
    title: string;
    stepsSummary: string;
    lead: string;
    steps: {
      number: string;
      title: string;
      description: string;
      deliverables: string[];
    }[];
  };
  clientsSection: {
    eyebrow: string;
    title: string;
    lead: string;
    narrative: string;
    governanceNote: string;
    clients: ClientReference[];
    blueprintsTitle: string;
    blueprintsLead: string;
    blueprints: {
      code: string;
      title: string;
      sector: string;
      scope: string;
      engineeringStandards: string[];
      handoverArtifacts: string[];
    }[];
  };
  insightsSection: {
    eyebrow: string;
    title: string;
    lead: string;
    readArticleLabel: string;
    keyTakeawaysLabel: string;
    articles: InsightArticle[];
  };
  contactSection: {
    eyebrow: string;
    title: string;
    lead: string;
    formTitle: string;
    formSubtitle: string;
    fields: {
      fullName: string;
      fullNamePlaceholder: string;
      organization: string;
      organizationPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      serviceInterest: string;
      locationCity: string;
      locationPlaceholder: string;
      projectSummary: string;
      projectPlaceholder: string;
      consentText: string;
      submitButton: string;
      submittingButton: string;
    };
    serviceOptions: { value: string; label: string }[];
    directChannelsTitle: string;
    directCallLabel: string;
    directEmailLabel: string;
    directWhatsappLabel: string;
    hqLabel: string;
    fieldPresenceLabel: string;
    privacyAssurance: string;
  };
  footer: {
    aboutBlurb: string;
    servicesHeading: string;
    companyHeading: string;
    contactHeading: string;
    rightsReserved: string;
    privacyLink: string;
    termsLink: string;
    designSystemLink: string;
    sudanFocusBadge: string;
  };
  legal: {
    privacyTitle: string;
    privacyUpdated: string;
    privacyIntro: string;
    privacySections: { heading: string; body: string }[];
    termsTitle: string;
    termsUpdated: string;
    termsIntro: string;
    termsSections: { heading: string; body: string }[];
  };
}

const SHARED_CLIENTS: ClientReference[] = [
  {
    slug: "al-riyadh-himont",
    name: "Al Riyadh Himont",
    nameAr: "الرياض هايمونت (Al Riyadh Himont)",
    sector: "Enterprise & Industrial",
    logoPath: "/assets/clients/al-riyadh-himont.png",
    surfaceTone: "dark",
    gridPosition: "Enterprise & Industrial",
    reviewRegisterNote: "Enterprise technology & operational systems",
    reviewRegisterNoteAr: "حلول تقنية وأنظمة تشغيلية للمؤسسات",
    scopeSummary: "Enterprise technology & operational systems.",
    approvalStatus: "approved_for_publication",
  },
  {
    slug: "giordano",
    name: "Giordano",
    nameAr: "جيوردانو (Giordano)",
    sector: "Retail & Apparel",
    logoPath: "/assets/clients/giordano.png",
    surfaceTone: "light",
    gridPosition: "Retail & Apparel",
    reviewRegisterNote: "Retail point-of-sale & store technology",
    reviewRegisterNoteAr: "أنظمة نقاط البيع وتقنيات المتاجر",
    scopeSummary: "Retail point-of-sale & store technology.",
    approvalStatus: "approved_for_publication",
  },
  {
    slug: "ipanema",
    name: "Ipanema",
    nameAr: "إيبانيما (Ipanema)",
    sector: "Retail & Consumer Goods",
    logoPath: "/assets/clients/ipanema.png",
    surfaceTone: "light",
    gridPosition: "Retail & Consumer Goods",
    reviewRegisterNote: "Retail operations & point-of-sale systems",
    reviewRegisterNoteAr: "عمليات التجزئة وأنظمة نقاط البيع",
    scopeSummary: "Retail operations & point-of-sale systems.",
    approvalStatus: "approved_for_publication",
  },
  {
    slug: "gsg-gulf-star-global",
    name: "Gulf Star Global Trading",
    nameAr: "الخليج ستار العالمية للتجارة (GSG)",
    sector: "Trading & Distribution",
    logoPath: "/assets/clients/gsg-gulf-star-global.png",
    surfaceTone: "light",
    gridPosition: "Trading & Distribution",
    reviewRegisterNote: "Supply chain, trading & enterprise software",
    reviewRegisterNoteAr: "برمجيات المؤسسات وإدارة التوريد والتجارة",
    scopeSummary: "Supply chain, trading & enterprise software.",
    approvalStatus: "approved_for_publication",
  },
  {
    slug: "billion",
    name: "Billion Services & Road Transport",
    nameAr: "بيليون للخدمات والنقل البري",
    sector: "Logistics & Fleet Operations",
    logoPath: "/assets/clients/billion.png",
    surfaceTone: "light",
    gridPosition: "Logistics & Fleet Operations",
    reviewRegisterNote: "Transport, logistics & operational management",
    reviewRegisterNoteAr: "إدارة العمليات واللوجستيات والنقل البري",
    scopeSummary: "Transport, logistics & operational management.",
    approvalStatus: "approved_for_publication",
  },
  {
    slug: "al-anfal",
    name: "Al Anfal / الأنفال",
    nameAr: "الأنفال (Al Anfal)",
    sector: "Commercial & Enterprise",
    logoPath: "/assets/clients/al-anfal.png",
    surfaceTone: "light",
    gridPosition: "Commercial & Enterprise",
    reviewRegisterNote: "Business management & connected systems",
    reviewRegisterNoteAr: "إدارة الأعمال والأنظمة المترابطة",
    scopeSummary: "Business management & connected systems.",
    approvalStatus: "approved_for_publication",
  },
  {
    slug: "lower-left-multicolor-mark",
    name: "Regional Enterprise Partner",
    nameAr: "شريك أعمال مؤسسي",
    sector: "Multi-Sector Operations",
    logoPath: "/assets/clients/afro.png",
    surfaceTone: "light",
    gridPosition: "Multi-Sector Operations",
    reviewRegisterNote: "Integrated business & infrastructure solutions",
    reviewRegisterNoteAr: "حلول أعمال وبنية تحتية متكاملة",
    scopeSummary: "Integrated business & infrastructure solutions.",
    approvalStatus: "approved_for_publication",
  },
  {
    slug: "max-media",
    name: "Max Media",
    nameAr: "ماكس ميديا (Max Media)",
    sector: "Media & Production",
    logoPath: "/assets/clients/max-media.png",
    surfaceTone: "dark",
    gridPosition: "Media & Production",
    reviewRegisterNote: "Digital workflows & network infrastructure",
    reviewRegisterNoteAr: "مسارات العمل الرقمية والبنية التحتية للشبكات",
    scopeSummary: "Digital workflows & network infrastructure.",
    approvalStatus: "approved_for_publication",
  },
  {
    slug: "elhelaly-computer",
    name: "Elhelaly Computer",
    nameAr: "الهلالي للكمبيوتر (Elhelaly Computer)",
    sector: "IT & Technology Retail",
    logoPath: "/assets/clients/elhelaly-computer.png",
    surfaceTone: "dark",
    gridPosition: "IT & Technology Retail",
    reviewRegisterNote: "Inventory, retail POS & technical systems",
    reviewRegisterNoteAr: "إدارة المخزون ونقاط البيع والأنظمة التقنية",
    scopeSummary: "Inventory, retail POS & technical systems.",
    approvalStatus: "approved_for_publication",
  },
];

export const SITE_CONTENT: Record<Locale, SiteDictionary> = {
  en: {
    locale: "en",
    dir: "ltr",
    meta: {
      siteName: "Nexora Tech — Sudan",
      defaultTitle: "Nexora Tech | Engineering Connected, Intelligent Systems — Sudan",
      defaultDescription:
        "Nexora Tech brings together enterprise software, business automation, and technology infrastructure to help organizations run and connect their operations.",
      tagline: "Engineering Connected, Intelligent Systems",
      descriptor: "Business automation, enterprise software and integrated technology infrastructure solutions.",
    },
    nav: {
      home: "Home",
      solutions: "Solutions",
      about: "About",
      howWeWork: "How We Work",
      contact: "Contact",
      services: "Services",
      industries: "Industries Served",
      projects: "Clients & Work",
      insights: "Insights",
      designSystem: "Design System & Audit",
      talkToTeam: "Discuss your project",
      exploreSolutions: "Explore our solutions",
      switchLanguageLabel: "العربية",
      allServices: "Explore our solutions",
    },
    contactInfo: {
      companyName: "Nexora Tech",
      gmName: "Rami Abdelrhman Suliman",
      gmTitle: "General Manager",
      phone: "+249 120 4040 45",
      phoneClean: "+249120404045",
      email: "r.suliman@nexora-tech.com",
      website: "www.nexora-tech.com",
      cardDomain: "nexora-tech.com",
      address: "Al Manshiya, Block 29, Property No. 32, Khartoum, Sudan",
      cityCountry: "Khartoum, Sudan",
      fieldHubs: "Profile-listed coverage: Khartoum & Port Sudan (subject to project agreement)",
      slaStatement: "Support and SLA response terms defined per project agreement",
      approvalNote:
        "Contact details sourced from Profile p. 11 and General Manager business card. Confirm preferred public inbox and canonical hostname (nexora-tech.com vs www.nexora-tech.com) before enabling live production routing.",
    },
    hero: {
      eyebrow: "Nexora Tech · Sudan",
      h1: "Run your business on connected software.",
      intro:
        "We implement Odoo ERP for your core operations and build custom software for the workflows that make your business different.",
      headlineLine1: "Run your business",
      headlineLine2: "on connected software.",
      lede: "We implement Odoo ERP for your core operations and build custom software for the workflows that make your business different.",
      primaryCta: "Discuss your project",
      secondaryCta: "Explore our solutions",
      wideImagePath: "/assets/editorial/hero-operations-dispatch.jpg",
      mobileImagePath: "/assets/editorial/hero-operations-dispatch.jpg",
      imageAlt:
        "Operations coordinator at a workstation desk at the edge of a dispatch floor checking a live order with a barcode scanner and packed goods in the foreground.",
      layers: {
        workflowLabel: "01 · Business Workflow",
        workflowDetail: "POS terminal, order workflow & Odoo ERP inventory record",
        integrationLabel: "02 · Integration",
        integrationDetail: "Connected software & data synchronization path",
        infrastructureLabel: "03 · Infrastructure",
        infrastructureDetail: "Managed network switch, structured cabling & fiber backbone",
      },
      cardLeftLabel: "Enterprise Software",
      cardLeftTitle: "Odoo ERP & POS.",
      cardRightLabel: "Low-Current Systems",
      cardRightTitle: "Infrastructure",
      statALabel: "Solution Families",
      statAValue: "4 Core",
      statBLabel: "Delivery Stages",
      statBValue: "3 Steps",
      scrollLabel: "Explore",
      dockItems: {
        overview: "About",
        services: "Solutions",
        process: "How We Work",
        contact: "Contact",
      },
      verificationBadge: "ThreeUI SylvaHero (05f359ce157a) · 10/10 Files Byte-Exact",
      modeInteractive: "Branded Sylva Stage",
      modeCanvas: "Scene-Only + First-Party HTML",
      modeLite: "Static Fallback",
      modeRawSource: "Unmodified Vendor HTML",
      conflictNotice:
        "Composition Preview: The pinned inner-green-3d.html (197,914 bytes) embeds botanical demo text ('Step into the living world'). Retained byte-for-byte in /design-system for internal reference.",
    },
    connectedScopeExample: {
      eyebrow: "CONNECTED OPERATION EXAMPLE",
      badge: "Illustration of a Possible Scope",
      title: "How One Connected Business Operation Works Together",
      lead: "Below is an illustration of a possible scope showing how a business can connect front-line sales, back-office inventory and accounting, and the physical site network through Nexora Tech’s four lines of work.",
      disclaimer:
        "Note: This diagram is an illustrative example of a possible combined project scope, not a claim regarding a specific past client deployment. Every project is scoped individually during Assess & Plan.",
      nodes: [
        {
          step: "01",
          layer: "Front-of-House / Counter",
          title: "Sale Recorded at the Point of Sale",
          description:
            "A retail store or hospitality venue processes a customer transaction on a configured Nexora POS or SambaPOS terminal.",
          solutionSlug: "pos-retail",
          solutionLabel: "POS & Retail Solutions",
        },
        {
          step: "02",
          layer: "System Integration & Data Flow",
          title: "Order & Payment Synchronized Automatically",
          description:
            "System integration and custom workflow automation pass transaction records cleanly between the counter and central business applications.",
          solutionSlug: "digital-transformation",
          solutionLabel: "Digital Transformation",
        },
        {
          step: "03",
          layer: "Enterprise Resource Planning",
          title: "Inventory, Procurement & Ledger Updated in Odoo ERP",
          description:
            "Odoo ERP updates stock balances, triggers replenishment rules, and posts accounting entries aligned with departmental workflows.",
          solutionSlug: "enterprise-business",
          solutionLabel: "Enterprise Business Solutions",
        },
        {
          step: "04",
          layer: "Physical Site & Server Network",
          title: "Running on Engineered Cabling, Fiber & Facility Infrastructure",
          description:
            "Structured cabling, fiber-optic links, managed switching, CCTV, access control, and server-room infrastructure keep the site connected and secure.",
          solutionSlug: "infrastructure-low-current",
          solutionLabel: "Infrastructure & Low-Current Systems",
        },
      ],
    },
    intro: {
      eyebrow: "ABOUT NEXORA TECH",
      title: "Connecting Business Applications, Digital Workflows, and Physical Infrastructure",
      lead: "Nexora Tech brings together enterprise software, business automation, and technology infrastructure to help organizations run and connect their operations.",
      body1:
        "As a provider of integrated business technology and engineering solutions in Sudan, Nexora Tech combines functional business understanding with technical and engineering execution. We begin by understanding each client’s operational environment, priorities, and workflows before designing practical, scalable systems.",
      body2:
        "Our multidisciplinary teams — bringing together software developers, functional consultants, technical consultants, and low-current infrastructure engineers — work alongside clients from initial planning and implementation through testing, commissioning, handover, and ongoing improvement.",
      gmSectionTitle: "General Manager’s Statement",
      gmQuote:
        "At Nexora Tech, we believe technology should do more than support business — it should enable growth, efficiency and long-term resilience. Our approach combines deep business understanding with strong technical and engineering expertise to deliver integrated solutions across enterprise software, digital transformation and technology infrastructure. From ERP and business automation to intelligent low-current systems, we work closely with our clients from planning and implementation through commissioning, support and continuous improvement. Our goal is simple: to build reliable, scalable solutions that solve real operational challenges and create lasting value.",
      gmName: "Rami Abdelrhman Suliman",
      gmRole: "General Manager, Nexora Tech",
      gmApprovalNote: "Leadership block sourced from Profile p. 2 & Business Card (portrait and public contact clearance tracked in Evidence Register).",
      visionTitle: "Stated Vision (Africa & MENA)",
      visionBody:
        "To be a trusted technology partner across Africa and the MENA region, enabling organizations to operate smarter, grow confidently, and build for the future.",
      missionTitle: "Our Mission",
      missionBody:
        "To deliver reliable, integrated technology solutions through strong technical expertise, thoughtful planning, and disciplined execution — working closely with clients to understand their operational requirements, design the right approach, and support them through implementation and continuous improvement.",
      purposeStatement:
        "We aim to create lasting value through technology that is practical, scalable, and built around the real operational needs of every organization we serve.",
      metrics: [
        {
          value: "4 Families",
          label: "Integrated Service Portfolio",
          detail: "Enterprise Business Solutions, POS & Retail, Digital Transformation, and Low-Current Infrastructure.",
          approvalStatus: "approved_for_publication",
        },
        {
          value: "3 Stages",
          label: "Structured Delivery Sequence",
          detail: "Assess & Plan · Design & Deliver · Test, Handover & Support.",
          approvalStatus: "approved_for_publication",
        },
        {
          value: "7 Sectors",
          label: "Documented Sector Experience",
          detail: "Oil & gas, manufacturing, retail, construction, real estate, logistics, and fleet operations (Profile p. 9).",
          approvalStatus: "approved_for_publication",
        },
        {
          value: "12+ Years*",
          label: "Profile-Stated ERP & Tech Tenure",
          detail: "*Profile pp. 4, 6 state 'more than 12 years' — pending confirmation of legal entity vs. team tenure.",
          approvalStatus: "needs_verification",
        },
      ],
    },
    capabilitiesSection: {
      eyebrow: "SOLUTION FAMILIES",
      title: "Four Connected Solution Families Across Software & Engineering",
      lead: "Select a solution family below to review the business problem addressed, supported technical scope, delivery approach, and how to start a project conversation.",
      problemLabel: "Business & Operational Problem",
      offeringLabel: "Supported Scope & Delivery Approach",
      outcomeLabel: "Expected Operational Outcome",
      learnMoreLabel: "Explore solution details",
    },
    services: [
      {
        slug: "enterprise-business",
        legacySlug: "enterprise-business-solutions",
        code: "SOL-01",
        title: "Enterprise Business Solutions",
        shortTitle: "Odoo ERP & Business Applications",
        eyebrow: "ERP IMPLEMENTATION & OPTIMIZATION",
        summary:
          "Odoo ERP and business application implementation and optimization, scoped around your existing operational workflows through consultancy, requirements analysis, customization, migration, training, and ongoing support.",
        problemStatement:
          "Organizations often struggle with disconnected accounting, inventory, procurement, and HR tools — or with ERP deployments that stall because software was installed without first mapping real operational workflows and gaps.",
        nexoraOffering:
          "Nexora Tech scopes every Odoo ERP implementation around your actual business processes. Our functional consultants, technical consultants, and developers guide the project from requirements gathering and gap analysis through configuration, targeted customization, data migration, user training, and ongoing support.",
        practicalOutcome:
          "Connected financial, inventory, procurement, and departmental workflows operating on a unified Odoo ERP environment tailored to your agreed operational scope.",
        ctaLabel: "Discuss your ERP requirements",
        approvalGateNote:
          "Odoo is a registered trademark of Odoo S.A. Scope descriptions reflect Profile pp. 6–7; any formal vendor partnership tier requires separate verification.",
        imagePath: "/assets/editorial/solution-enterprise-erp.webp",
        imageAlt:
          "Warehouse inventory and dispatch workstation with a widescreen ERP order monitor, barcode scanner in its cradle, and thermal shipping label printer.",
        platforms: ["Odoo ERP", "Enterprise Business Applications", "Workflow Gap Analysis"],
        capabilities: [
          {
            title: "Consultancy & Requirements Analysis",
            description:
              "We begin by reviewing your current operational environment, departmental priorities, and reporting needs to produce a clear gap analysis and project scope before configuration starts.",
          },
          {
            title: "Odoo ERP Configuration & Customization",
            description:
              "Functional and technical consultants configure core Odoo ERP modules and develop purposeful customizations aligned with your approved workflow rules.",
          },
          {
            title: "Data Migration & System Alignment",
            description:
              "Structured preparation and migration of master records, chart of accounts, inventory balances, and operational data into the target ERP environment.",
          },
          {
            title: "Training, Handover & Ongoing Support",
            description:
              "Role-based training for operational and finance teams, documentation handover, and post-launch support for continuous improvement.",
          },
        ],
        deliverables: [
          "Operational Requirements & Gap Analysis Scope (Assess & Plan)",
          "Configured & Customized Odoo ERP Environment (Design & Deliver)",
          "Validated Data Migration & Workflow Verification (Test & Handover)",
          "User Training, Documentation & Support Plan (Subject to Agreed Scope)",
        ],
        sectors: ["Oil & Gas", "Manufacturing", "Retail", "Construction", "Real Estate", "Logistics & Fleet Operations"],
        faqs: [
          {
            question: "How do you scope an Odoo ERP project before implementation begins?",
            answer:
              "During Stage 1 (Assess & Plan), our functional and technical consultants conduct a business assessment, gather departmental requirements, and perform a gap analysis to define the project scope, technical requirements, and roadmap before execution.",
          },
          {
            question: "Can Nexora Tech optimize an existing Odoo ERP setup?",
            answer:
              "Yes. Our scope covers both new implementations and the optimization, customization, migration, and support of existing Odoo ERP environments.",
          },
        ],
      },
      {
        slug: "pos-retail",
        legacySlug: "pos-and-retail-solutions",
        code: "SOL-02",
        title: "POS & Retail Solutions",
        shortTitle: "Nexora POS & SambaPOS",
        eyebrow: "RETAIL, HOSPITALITY & FOOD SERVICE",
        summary:
          "Flexible point-of-sale and business management solutions for retail, hospitality, and food-service environments, featuring clearly defined pathways for Nexora POS and SambaPOS.",
        problemStatement:
          "Retail stores, hospitality venues, and food-service operators need dependable point-of-sale billing, shift control, and stock visibility tailored to their floor layout and checkout workflow.",
        nexoraOffering:
          "Nexora Tech provides POS and business management solutions for retail, hospitality, and food-service operations, offering two distinct platforms — Nexora POS and SambaPOS — configured around your store or venue setup.",
        practicalOutcome:
          "Streamlined front-of-house point-of-sale operations and structured business management aligned with your retail or hospitality operating model.",
        ctaLabel: "Discuss your POS operating setup",
        approvalGateNote:
          "Specific feature matrices, hardware bundles, licensing terms, and live demo availability for Nexora POS and SambaPOS are confirmed during initial consultation based on your venue requirements.",
        imagePath: "/assets/editorial/solution-pos-retail.webp",
        imageAlt:
          "Retail checkout counter featuring a touchscreen POS terminal, thermal receipt printer, barcode scanner, and payment terminal.",
        platforms: ["Nexora POS", "SambaPOS", "Retail & Hospitality Management"],
        subEntries: [
          {
            name: "Nexora POS",
            badge: "RETAIL & COMMERCIAL POS",
            description:
              "Point-of-sale and business management solution tailored for retail stores and commercial counters. Contact our team to review specific modules, deployment options, and a walkthrough for your store setup.",
            statusNote: "Feature list, deployment mode, and demo availability confirmed per project inquiry.",
          },
          {
            name: "SambaPOS",
            badge: "HOSPITALITY & FOOD SERVICE POS",
            description:
              "Specialized point-of-sale platform for restaurants, cafes, and food-service environments. Contact our team to discuss table, kitchen, and billing configuration for your hospitality operation.",
            statusNote: "SambaPOS licensing, configuration scope, and demo availability confirmed per project inquiry.",
          },
        ],
        capabilities: [
          {
            title: "Operating Setup Assessment",
            description:
              "Reviewing your store count, checkout lanes, dining/service areas, and reporting requirements to recommend the right POS configuration.",
          },
          {
            title: "Nexora POS Implementation",
            description:
              "Configuring catalog structures, cashier workflows, and retail business management controls around your commercial operations.",
          },
          {
            title: "SambaPOS Hospitality Configuration",
            description:
              "Setting up hospitality and food-service workflows tailored to restaurant, cafe, and food-service teams.",
          },
          {
            title: "Training, Handover & Support",
            description:
              "Preparing cashiers and supervisors with operational training, documentation, and ongoing support subject to agreed scope.",
          },
        ],
        deliverables: [
          "Venue / Store Operational Requirements Review (Assess & Plan)",
          "Configured Nexora POS or SambaPOS Environment (Design & Deliver)",
          "Workflow Verification, Staff Training & Handover (Test, Handover & Support)",
        ],
        sectors: ["Retail", "Hospitality & Food Service"],
        faqs: [
          {
            question: "Should we choose Nexora POS or SambaPOS?",
            answer:
              "The Company Profile identifies both Nexora POS and SambaPOS for retail, hospitality, and food-service environments. Share your operating setup with our team so we can confirm the appropriate platform, feature set, and demo options.",
          },
        ],
      },
      {
        slug: "digital-transformation",
        legacySlug: "digital-transformation-ai",
        code: "SOL-03",
        title: "Digital Transformation",
        shortTitle: "Custom Software, Integration, Cloud & Analytics",
        eyebrow: "CUSTOM SOFTWARE, INTEGRATION & ANALYTICS",
        summary:
          "Custom software, system integration, cloud services, data analytics, e-commerce, and mobile solutions designed to automate processes and enable smarter, data-driven operations.",
        problemStatement:
          "Organizations often operate with manual paper workflows, disconnected software applications that cannot share data, or limited digital channels for customers and field teams.",
        nexoraOffering:
          "Our developers and technical consultants design and deliver custom software, system integrations, cloud services, data analytics, e-commerce platforms, and mobile solutions scoped around your operational processes.",
        practicalOutcome:
          "Automated operational processes, integrated software systems, and structured data visibility built around documented business requirements.",
        ctaLabel: "Discuss your software & integration scope",
        approvalGateNote:
          "Public solution-family label standardized to 'Digital Transformation'. Copy leads with documented software, integration, cloud, analytics, e-commerce, and mobile capabilities from Profile p. 7.",
        imagePath: "/assets/editorial/solution-digital-transformation.webp",
        imageAlt:
          "Operations and technology consultants collaborating at a dual-monitor workstation displaying connected system architecture and software dashboards.",
        platforms: [
          "Custom Software Development",
          "System Integration",
          "Cloud Services",
          "Data Analytics",
          "E-Commerce & Mobile Solutions",
        ],
        capabilities: [
          {
            title: "Custom Software & Process Automation",
            description:
              "Developing tailored business applications to replace manual steps and support organization-specific operational workflows.",
          },
          {
            title: "System Integration",
            description:
              "Connecting enterprise applications, databases, and operational tools so data moves reliably across departments.",
          },
          {
            title: "Cloud Services & Data Analytics",
            description:
              "Structuring cloud deployments and operational reporting to support data-driven management decisions.",
          },
          {
            title: "E-Commerce & Mobile Solutions",
            description:
              "Building web storefronts and mobile applications aligned with your commercial and field workflows.",
          },
        ],
        deliverables: [
          "Technical Requirements & Integration Scope (Assess & Plan)",
          "Developed & Integrated Software / Cloud / Mobile Solution (Design & Deliver)",
          "System Testing, Documentation, Training & Support (Test, Handover & Support)",
        ],
        sectors: ["Enterprise", "Government", "Retail", "Logistics & Fleet Operations", "Real Estate"],
        faqs: [
          {
            question: "How are custom software and integration projects scoped?",
            answer:
              "We begin with consultation, requirement gathering, and gap analysis to define the exact technical scope, integration touchpoints, and implementation roadmap before development begins.",
          },
        ],
      },
      {
        slug: "infrastructure-low-current",
        legacySlug: "infrastructure-and-low-current-systems",
        code: "SOL-04",
        title: "Infrastructure & Low-Current Systems",
        shortTitle: "Cabling, Fiber, CCTV, Access, Fire & Data Centers",
        eyebrow: "PHYSICAL TECHNOLOGY & LOW-CURRENT ENGINEERING",
        summary:
          "End-to-end engineering for structured cabling, fiber-optic networks, CCTV surveillance, access control, fire alarm systems, and data-center infrastructure — covering site survey, design, supply, installation, testing, commissioning, and maintenance.",
        problemStatement:
          "Buildings, warehouses, and corporate facilities require dependable physical network connectivity, surveillance, access security, fire detection, and server room infrastructure engineered and maintained by a single accountable partner.",
        nexoraOffering:
          "Nexora Tech provides the supply, installation, testing, commissioning, and maintenance of low-current systems for government, enterprise, and private-sector clients — managing the path from initial site survey and engineering design through final handover.",
        practicalOutcome:
          "Connected, secure, and well-documented building and data-center infrastructure delivered and supported according to agreed project specifications.",
        ctaLabel: "Request an infrastructure assessment",
        approvalGateNote:
          "Specific compliance standards, link certification records, vendor training credentials (Cisco, Hikvision, Honeywell, Ubiquiti), and SLA response terms are defined per contract and tracked in the Evidence Register.",
        imagePath: "/assets/editorial/solution-infrastructure-low-current.webp",
        imageAlt:
          "Editorial close-up of a color-coded structured cabling patch panel, managed network switch, and neatly routed fiber-optic cables in an equipment rack.",
        platforms: [
          "Structured Cabling & Fiber Optics",
          "CCTV Surveillance",
          "Access Control",
          "Fire Alarm Systems",
          "Data-Center Infrastructure",
        ],
        capabilities: [
          {
            title: "Structured Cabling & Fiber-Optic Networks",
            description:
              "Site survey, pathway design, supply, installation, termination, and testing of copper structured cabling and fiber-optic backbones.",
          },
          {
            title: "CCTV Surveillance & Access Control",
            description:
              "Design, supply, installation, and commissioning of facility video surveillance and physical access control systems.",
          },
          {
            title: "Fire Alarm Systems",
            description:
              "Engineering, installation, functional testing, and commissioning of building fire detection and alarm systems.",
          },
          {
            title: "Data-Center Infrastructure & Maintenance",
            description:
              "Server room and data-center rack, cabling, and network infrastructure buildout, followed by scheduled and corrective maintenance subject to agreed scope.",
          },
        ],
        deliverables: [
          "Site Survey, Assessment & Engineering Scope (Assess & Plan)",
          "Equipment Supply, Cabling & System Installation (Design & Deliver)",
          "System Testing, Commissioning, Documentation, Handover & Support (Subject to Agreed Scope)",
        ],
        sectors: ["Government", "Enterprise", "Oil & Gas", "Manufacturing", "Construction", "Real Estate", "Logistics"],
        faqs: [
          {
            question: "What does an infrastructure engagement look like from start to finish?",
            answer:
              "Every project begins with a site assessment and requirements gathering (Assess & Plan), proceeds through coordinated supply, installation, and configuration (Design & Deliver), and concludes with testing, commissioning, documentation, handover, and ongoing maintenance (Test, Handover & Support).",
          },
        ],
      },
    ],
    solutionsSection: {
      eyebrow: "SOFTWARE + PHYSICAL INFRASTRUCTURE",
      title: "How Nexora Connects Enterprise Software, Digital Workflows & Facility Infrastructure",
      lead: "Unlike single-discipline vendors that only write software or only pull cable, Nexora Tech bridges business applications and physical low-current engineering under a unified delivery methodology.",
      layersLabel: "Connected Architecture Layers",
      platformsLabel: "Supported Scope",
      outcomesLabel: "Practical Alignment",
      items: [
        {
          id: "unified-enterprise-erp",
          badge: "LAYER 01 · ENTERPRISE APPLICATIONS",
          title: "Enterprise Business Solutions (Odoo ERP)",
          subtitle: "Scoping and implementing ERP around real departmental workflows.",
          description:
            "Functional consultants and developers align finance, procurement, inventory, and operations through structured gap analysis, configuration, customization, migration, and training.",
          architectureLayers: [
            { layer: "Assess & Plan", detail: "Business assessment, requirements gathering, and workflow gap analysis." },
            { layer: "Design & Deliver", detail: "Odoo ERP configuration, custom module development, and data migration." },
            { layer: "Test, Handover & Support", detail: "Verification against project requirements, user training, and ongoing support." },
          ],
          platforms: ["Odoo ERP", "Business Applications", "Consultancy & Migration"],
          outcomes: [
            "ERP workflows scoped around your actual operational environment",
            "Coordinated delivery by developers, functional consultants, and technical consultants",
            "Structured training and post-handover support",
          ],
          serviceSlug: "enterprise-business",
        },
        {
          id: "connected-retail-hospitality",
          badge: "LAYER 02 · POINT-OF-SALE & DIGITAL WORKFLOWS",
          title: "POS, Custom Software & System Integration",
          subtitle: "Connecting retail/hospitality frontlines and custom digital applications.",
          description:
            "Deploying Nexora POS and SambaPOS for retail, hospitality, and food service alongside custom software, system integration, cloud services, data analytics, e-commerce, and mobile solutions.",
          architectureLayers: [
            { layer: "Point-of-Sale Systems", detail: "Nexora POS and SambaPOS configured for retail, hospitality, and food-service setups." },
            { layer: "Integration & Automation", detail: "Custom software and system integration connecting operational data." },
            { layer: "Digital Channels & Analytics", detail: "Cloud services, data analytics, e-commerce, and mobile solutions." },
          ],
          platforms: ["Nexora POS", "SambaPOS", "Custom Software & Integration", "Cloud & Analytics"],
          outcomes: [
            "Dedicated POS pathways for retail and hospitality operators",
            "Reduced manual re-entry through system integration and process automation",
            "Practical digital tools aligned with operational priorities",
          ],
          serviceSlug: "pos-retail",
        },
        {
          id: "intelligent-building-infrastructure",
          badge: "LAYER 03 · PHYSICAL LOW-CURRENT INFRASTRUCTURE",
          title: "Infrastructure & Low-Current Engineering",
          subtitle: "The physical networks and safety systems that keep facilities connected and secure.",
          description:
            "End-to-end engineering for structured cabling, fiber-optic networks, CCTV surveillance, access control, fire alarm systems, and data-center infrastructure.",
          architectureLayers: [
            { layer: "Network & Data Center", detail: "Structured cabling, fiber-optic networks, and data-center infrastructure." },
            { layer: "Security & Access", detail: "CCTV surveillance and physical access control systems." },
            { layer: "Life Safety & Maintenance", detail: "Fire alarm systems, testing, commissioning, handover, and maintenance." },
          ],
          platforms: ["Structured Cabling", "Fiber Optics", "CCTV & Access Control", "Fire Alarm & Data Centers"],
          outcomes: [
            "Single delivery process from site survey and design to commissioning",
            "Coordinated testing, documentation, and handover subject to agreed scope",
            "Ongoing maintenance support for government, enterprise, and private-sector facilities",
          ],
          serviceSlug: "infrastructure-low-current",
        },
      ],
    },
    industriesSection: {
      eyebrow: "SECTORS REFERENCED IN PROFILE",
      title: "Project Experience Across Seven Operational Sectors",
      lead: "Page 9 of the Nexora Tech Company Profile identifies project experience across enterprise systems, business automation, and technology infrastructure in the following sectors (individual client references are managed separately in the Evidence Register).",
      challengesLabel: "Typical Operational Needs",
      systemsLabel: "Applicable Nexora Scope",
      items: [
        {
          id: "oil-and-gas",
          name: "Oil & Gas",
          summary:
            "Enterprise resource planning, procurement workflows, and site low-current infrastructure for energy and field operations.",
          challengesAddressed: [
            "Multi-department procurement, inventory, and asset tracking",
            "Site network connectivity, CCTV surveillance, and access control",
            "Fire alarm and server/communications room infrastructure",
          ],
          nexoraSystems: ["Enterprise Business Solutions (Odoo ERP)", "Infrastructure & Low-Current Systems", "System Integration"],
        },
        {
          id: "manufacturing",
          name: "Manufacturing",
          summary:
            "Connecting production, inventory, and accounting workflows with facility cabling, surveillance, and access systems.",
          challengesAddressed: [
            "Inventory, warehouse, and production workflow coordination",
            "Factory structured cabling, fiber links, and CCTV coverage",
            "Access control and fire detection infrastructure",
          ],
          nexoraSystems: ["Odoo ERP Implementation", "Structured Cabling & CCTV", "Access Control & Fire Alarm"],
        },
        {
          id: "retail-and-hospitality",
          name: "Retail, Hospitality & Food Service",
          summary:
            "Point-of-sale, store management, e-commerce, and branch low-current systems for retail, hospitality, and food-service operators.",
          challengesAddressed: [
            "Front-of-house POS billing and shift management",
            "Inventory and back-office accounting alignment",
            "In-store networking, CCTV surveillance, and e-commerce channels",
          ],
          nexoraSystems: ["Nexora POS & SambaPOS", "Odoo ERP & E-Commerce", "Store Cabling & CCTV"],
        },
        {
          id: "construction-and-real-estate",
          name: "Construction & Real Estate",
          summary:
            "Building low-current infrastructure packages and project/enterprise management software for construction and real estate developments.",
          challengesAddressed: [
            "Site survey, design, supply, and installation of building low-current systems",
            "Testing, commissioning, and handover documentation for new facilities",
            "Enterprise ERP for project, procurement, and property operations",
          ],
          nexoraSystems: ["Infrastructure & Low-Current Systems", "Enterprise Business Solutions", "Testing & Commissioning"],
        },
        {
          id: "logistics-and-fleet",
          name: "Logistics & Fleet Operations",
          summary:
            "Warehouse, distribution, and fleet workflow automation paired with facility security and network infrastructure.",
          challengesAddressed: [
            "Warehouse inventory, dispatch, and fleet operation workflows",
            "Custom software, mobile solutions, and operational data analytics",
            "Depot cabling, fiber optics, CCTV, and access control",
          ],
          nexoraSystems: ["Odoo ERP & Custom Software", "Data Analytics & Mobile Solutions", "Depot Low-Current Systems"],
        },
        {
          id: "government-and-enterprise",
          name: "Government, Enterprise & Private Sector",
          summary:
            "Integrated enterprise software, digital transformation, and low-current infrastructure for institutional and corporate environments (Profile p. 6).",
          challengesAddressed: [
            "Structured requirements analysis and disciplined project delivery",
            "Data-center infrastructure, structured cabling, and facility security",
            "Documentation, staff training, handover, and ongoing maintenance",
          ],
          nexoraSystems: ["Data-Center & Low-Current Systems", "Enterprise ERP & Integration", "Training & Support"],
        },
      ],
    },
    whyNexora: {
      eyebrow: "WHY NEXORA TECH",
      title: "Combined Software Consulting & Low-Current Engineering",
      lead: "Nexora Tech brings together developers, functional consultants, technical consultants, and infrastructure engineers under one structured delivery process.",
      pillars: [
        {
          number: "01",
          title: "End-to-End Lifecycle Scope",
          description:
            "From initial consultation, site survey, or business assessment through configuration, installation, testing, commissioning, training, handover, and ongoing maintenance.",
          proofPoint: "Consultation · Execution · Support",
          approvalStatus: "approved_for_publication",
        },
        {
          number: "02",
          title: "Multidisciplinary Delivery Team",
          description:
            "Supported by software developers, functional ERP consultants, technical consultants, and low-current engineers working together across the project lifecycle.",
          proofPoint: "Software & Engineering Teams",
          approvalStatus: "approved_for_publication",
        },
        {
          number: "03",
          title: "Structured Testing & Handover",
          description:
            "Solutions are tested, commissioned, and verified against agreed project requirements, accompanied by documentation, training, and formal handover.",
          proofPoint: "Commissioning & Documentation",
          approvalStatus: "approved_for_publication",
        },
        {
          number: "04",
          title: "Ongoing Maintenance & Regional Support",
          description:
            "Post-handover maintenance, technical assistance, and operational optimization across Khartoum and Port Sudan tailored to each project agreement.",
          proofPoint: "Khartoum & Port Sudan Coverage",
          approvalStatus: "approved_for_publication",
        },
      ],
    },
    processSection: {
      eyebrow: "HOW WE WORK",
      title: "How we work",
      stepsSummary: "Assess & Plan · Design & Deliver · Test, Handover & Support",
      lead: "Every project begins with understanding the client’s environment, priorities, and operational requirements. From there, Nexora follows a structured three-stage delivery sequence (subject to agreed project scope).",
      steps: [
        {
          number: "01",
          title: "Assess & Plan",
          description:
            "We begin with consultation, site or business assessment, requirement gathering, and gap analysis. This allows our team to define the project scope, technical requirements, implementation approach, and a clear roadmap before execution begins.",
          deliverables: [
            "What we discuss: Current operational environment, priorities, and pain points",
            "Site survey (for infrastructure) or workflow gap analysis (for ERP/software)",
            "Expected output: Defined project scope, technical requirements & implementation roadmap",
          ],
        },
        {
          number: "02",
          title: "Design & Deliver",
          description:
            "Our technical and functional teams configure, develop, integrate, and install the required solution according to the approved scope. Delivery is managed through documented processes, coordinated testing, and continuous communication with the client.",
          deliverables: [
            "What we execute: Configuration, development, system integration, or physical installation",
            "Documented delivery checkpoints and coordinated progress reviews",
            "Expected output: Installed/configured solution matching the approved scope",
          ],
        },
        {
          number: "03",
          title: "Test, Handover & Support",
          description:
            "Before completion, solutions are tested, commissioned, and verified against project requirements. We provide the necessary documentation, training, and handover, followed by ongoing maintenance and support to ensure reliable long-term operation.",
          deliverables: [
            "What we verify: Functional testing, commissioning, and verification against project requirements",
            "Project documentation, staff training, and structured handover (subject to agreed scope)",
            "Expected output: Operational sign-off and ongoing maintenance / support arrangement",
          ],
        },
      ],
    },
    clientsSection: {
      eyebrow: "SELECTED CLIENTS & INDUSTRIES",
      title: "Selected Clients",
      lead: "Organizations across retail, trading, logistics, media, and enterprise operations served by Nexora Tech.",
      narrative:
        "Alongside our client partnerships, Nexora Tech delivers enterprise software, point-of-sale systems, digital transformation, and low-current infrastructure across oil and gas, manufacturing, retail, construction, real estate, logistics, and fleet operations.",
      governanceNote:
        "Enterprise software, POS, digital transformation, and low-current engineering tailored to each client’s operational scope.",
      clients: SHARED_CLIENTS,
      blueprintsTitle: "Representative Delivery Scope by Domain",
      blueprintsLead:
        "Below is an overview of what organizations can expect when scoping an enterprise software, POS, or infrastructure project with Nexora Tech.",
      blueprints: [
        {
          code: "SCOPE-01",
          title: "Enterprise ERP & Workflow Alignment",
          sector: "Oil & Gas, Manufacturing, Trading, Construction, Logistics",
          scope:
            "Requirements gathering, workflow gap analysis, Odoo ERP configuration and customization, data migration, user training, and ongoing operational support.",
          engineeringStandards: [
            "Scoped around existing departmental workflows before customization",
            "Coordinated by developers, functional consultants, and technical consultants",
            "Verified against agreed business requirements prior to go-live",
          ],
          handoverArtifacts: [
            "Agreed Scope & Gap Analysis Summary",
            "Configured ERP Environment & Migrated Master Data",
            "User Training & Handover Documentation (per contract)",
          ],
        },
        {
          code: "SCOPE-02",
          title: "Facility Low-Current & Data-Center Engineering",
          sector: "Government, Enterprise, Commercial Real Estate & Industrial Sites",
          scope:
            "Site survey, engineering design, supply, installation, testing, commissioning, and maintenance for structured cabling, fiber optics, CCTV, access control, fire alarm, and data-center infrastructure.",
          engineeringStandards: [
            "End-to-end execution from first site survey to commissioning",
            "Testing and verification against project technical requirements",
            "Standards compliance and certification records defined per project contract",
          ],
          handoverArtifacts: [
            "Site Assessment & Engineering Scope Definition",
            "Testing & Commissioning Records (subject to agreed scope)",
            "Technical Documentation, Handover & Maintenance Plan",
          ],
        },
        {
          code: "SCOPE-03",
          title: "POS, Custom Software & System Integration",
          sector: "Retail, Hospitality, Food Service & Multi-Branch Operations",
          scope:
            "Nexora POS and SambaPOS deployment for retail and hospitality venues, alongside custom software, system integration, cloud services, data analytics, e-commerce, and mobile solutions.",
          engineeringStandards: [
            "Platform selection tailored to retail vs. hospitality operating setup",
            "Structured integration with back-office inventory and accounting",
            "Role-based staff training and operational handover",
          ],
          handoverArtifacts: [
            "Configured POS / Custom Software Environment",
            "Integration & Operational Verification",
            "Staff Training & Ongoing Support Arrangement",
          ],
        },
      ],
    },
    insightsSection: {
      eyebrow: "TECHNICAL BRIEFINGS",
      title: "Practical Guidance on ERP, POS & Low-Current Delivery",
      lead: "Structured buying and scoping guides grounded in Nexora Tech’s three-stage delivery methodology.",
      readArticleLabel: "Read briefing",
      keyTakeawaysLabel: "Scoping Checklist",
      articles: [
        {
          slug: "erp-gap-analysis-risk-reduction",
          category: "Enterprise Business Solutions",
          readTime: "4 min read",
          title: "How Requirements Gathering and Gap Analysis Shape an Odoo ERP Project",
          summary:
            "Why Stage 1 (Assess & Plan) is essential for aligning functional consultants, developers, and operational teams before configuring Odoo ERP.",
          keyTakeaways: [
            "Document current workflows and priorities before customizing software.",
            "Define clear boundaries between standard ERP configuration and custom modules.",
            "Plan data migration and staff training as core deliverables from the start.",
          ],
          sections: [
            {
              heading: "1. Starting with the Operational Environment",
              body: "Successful ERP projects begin by understanding how an organization actually operates — across procurement, inventory, finance, and branch coordination — before proposing technical changes.",
            },
            {
              heading: "2. Coordinated Functional and Technical Delivery",
              body: "By combining developers, functional consultants, and technical consultants across Assess & Plan, Design & Deliver, and Test, Handover & Support, ERP implementations remain grounded in practical operational requirements.",
            },
          ],
        },
        {
          slug: "auditable-low-current-commissioning",
          category: "Infrastructure & Low-Current Systems",
          readTime: "5 min read",
          title: "Scoping Low-Current Infrastructure: From Site Survey to Commissioning and Handover",
          summary:
            "What facility and IT decision-makers should define when planning structured cabling, fiber optics, CCTV, access control, fire alarm, and data-center projects.",
          keyTakeaways: [
            "Begin with an on-site survey to establish pathways, coverage zones, and rack capacity.",
            "Specify testing, commissioning, and documentation deliverables in the project scope.",
            "Establish post-handover maintenance expectations early.",
          ],
          sections: [
            {
              heading: "1. Connecting Design, Installation, and Commissioning",
              body: "Low-current systems keep buildings safe, connected, and intelligent. Managing supply, installation, testing, commissioning, and maintenance through a structured sequence reduces coordination gaps between trades.",
            },
            {
              heading: "2. Clear Verification and Handover",
              body: "Before project completion, systems are tested, commissioned, and verified against agreed project requirements, with documentation and training provided to the client’s operational team.",
            },
          ],
        },
        {
          slug: "connecting-pos-to-enterprise-erp",
          category: "POS & Retail Solutions",
          readTime: "4 min read",
          title: "Selecting Between Retail and Hospitality POS Setups (Nexora POS & SambaPOS)",
          summary:
            "Key operational questions to consider when evaluating point-of-sale and business management systems for retail stores, hospitality venues, and food service.",
          keyTakeaways: [
            "Clarify whether your operation follows a retail checkout model or a hospitality table/kitchen workflow.",
            "Confirm required integration points with inventory and accounting.",
            "Plan cashier and supervisor training prior to floor launch.",
          ],
          sections: [
            {
              heading: "1. Retail vs. Hospitality Workflows",
              body: "Nexora Tech supports both Nexora POS and SambaPOS across retail, hospitality, and food-service environments. Discussing your venue layout, transaction volume, and reporting needs helps determine the right configuration.",
            },
          ],
        },
      ],
    },
    contactSection: {
      eyebrow: "START A PROJECT CONVERSATION",
      title: "Discuss your project",
      lead: "Share your operational requirements or solution interest below. Our team will review your brief and coordinate an initial consultation or site assessment.",
      formTitle: "Project Inquiry & Consultation Brief",
      formSubtitle:
        "Complete the fields below. Inquiries are validated server-side; live production inbox routing is gated pending final confirmation of public contact channels.",
      fields: {
        fullName: "Full Name",
        fullNamePlaceholder: "e.g., Mohammed Ahmed",
        organization: "Organization / Company",
        organizationPlaceholder: "e.g., Al Manshiya Trading Co.",
        email: "Business Email Address",
        emailPlaceholder: "name@company.com",
        phone: "Phone Number (Optional)",
        phonePlaceholder: "+249 ...",
        serviceInterest: "Solution Interest",
        locationCity: "Project Location (Optional)",
        locationPlaceholder: "e.g., Khartoum, Port Sudan...",
        projectSummary: "Project Brief & Operational Requirements",
        projectPlaceholder:
          "Describe your current setup, timeline, and whether you would like to discuss Enterprise Business Solutions (Odoo ERP), POS & Retail (Nexora POS / SambaPOS), Digital Transformation, or Infrastructure & Low-Current Systems...",
        consentText:
          "I understand that this inquiry is processed to evaluate my project request. (Privacy notice and retention policy subject to final pre-launch confirmation.)",
        submitButton: "Discuss your project",
        submittingButton: "Validating project inquiry...",
      },
      serviceOptions: [
        { value: "enterprise-business", label: "Enterprise Business Solutions (Odoo ERP & Business Apps)" },
        { value: "pos-retail", label: "POS & Retail Solutions (Nexora POS / SambaPOS)" },
        { value: "digital-transformation", label: "Digital Transformation (Custom Software, Integration, Cloud, Analytics)" },
        { value: "infrastructure-low-current", label: "Infrastructure & Low-Current Systems (Cabling, Fiber, CCTV, Access, Fire, Data Center)" },
        { value: "general-inquiry", label: "Multi-Solution / General Project Discussion" },
      ],
      directChannelsTitle: "Direct Contact Channels",
      directCallLabel: "Telephone",
      directEmailLabel: "Email",
      directWhatsappLabel: "Direct Phone / WhatsApp",
      hqLabel: "Headquarters Address",
      fieldPresenceLabel: "Regional Coverage",
      privacyAssurance:
        "Your project inquiry is used solely to review your requirements and coordinate a consultation with our team.",
    },
    footer: {
      aboutBlurb:
        "Engineering Connected, Intelligent Systems. Nexora Tech brings together enterprise software, business automation, and technology infrastructure to help organizations run and connect their operations.",
      servicesHeading: "Solution Families",
      companyHeading: "Navigation",
      contactHeading: "Contact Details",
      rightsReserved: "Nexora Tech (Sudan). All rights reserved.",
      privacyLink: "Privacy Notice",
      termsLink: "Terms of Use",
      designSystemLink: "Design System",
      sudanFocusBadge: "Nexora Tech — Khartoum & Port Sudan",
    },
    legal: {
      privacyTitle: "Privacy Notice (Pending Pre-Launch Confirmation)",
      privacyUpdated: "Status: Draft Pending Inbox & Retention Confirmation",
      privacyIntro:
        "This draft privacy notice outlines how inquiry data is handled once live form routing is enabled by Nexora Tech (Khartoum, Sudan).",
      privacySections: [
        {
          heading: "1. Inquiry Data Collected",
          body: "When you submit the project inquiry form, the application collects your name, organization, email address, optional phone number, selected solution family, and project brief.",
        },
        {
          heading: "2. Purpose & Pre-Launch Gate",
          body: "Inquiry details are collected solely to evaluate your project requirements and respond to your business request. Live production inbox delivery, retention duration, and data controller contact details require final sign-off before public launch.",
        },
      ],
      termsTitle: "Terms of Use & Scope Notice",
      termsUpdated: "Status: Pre-Launch Review Build",
      termsIntro:
        "These terms govern the use of the Nexora Tech (Sudan) corporate website.",
      termsSections: [
        {
          heading: "1. Entity Disambiguation",
          body: "Nexora Tech is a company located in Sudan and is completely separate from NEXORA Technologies Corp. of Canada or any other unrelated organization.",
        },
        {
          heading: "2. Project Scope & Approvals",
          body: "All solution descriptions and delivery stages (Assess & Plan · Design & Deliver · Test, Handover & Support) are subject to formal project scoping and signed agreements.",
        },
      ],
    },
  },
  ar: {
    locale: "ar",
    dir: "rtl",
    meta: {
      siteName: "نكسورا تك (Nexora Tech) — السودان",
      defaultTitle: "نكسورا تك | نهندس أنظمة مترابطة وذكية — السودان",
      defaultDescription:
        "تجمع نكسورا تك بين برمجيات المؤسسات وأتمتة الأعمال والبنية التحتية التقنية لمساعدة المؤسسات على إدارة عملياتها وربطها.",
      tagline: "نهندس أنظمة مترابطة وذكية",
      descriptor: "حلول أتمتة الأعمال، وبرمجيات المؤسسات، والبنية التحتية التقنية المتكاملة.",
    },
    nav: {
      home: "الرئيسية",
      solutions: "حلولنا",
      about: "عن الشركة",
      howWeWork: "كيف نعمل",
      contact: "تواصل معنا",
      services: "الخدمات",
      industries: "القطاعات التي نخدمها",
      projects: "العملاء والأعمال",
      insights: "رؤى تقنية",
      designSystem: "نظام التصميم وسجل الأدلة",
      talkToTeam: "ناقش مشروعك معنا",
      exploreSolutions: "استكشف حلولنا",
      switchLanguageLabel: "English",
      allServices: "استكشف حلولنا",
    },
    contactInfo: {
      companyName: "Nexora Tech (نكسورا تك)",
      gmName: "رامي عبد الرحمن سليمان (Rami Abdelrhman Suliman)",
      gmTitle: "المدير العام",
      phone: "+249 120 4040 45",
      phoneClean: "+249120404045",
      email: "r.suliman@nexora-tech.com",
      website: "www.nexora-tech.com",
      cardDomain: "nexora-tech.com",
      address: "المنشية، مربع 29، عقار رقم 32، الخرطوم، السودان",
      cityCountry: "الخرطوم، السودان",
      fieldHubs: "النطاق الوارد بالملف التعريفي: الخرطوم وبورتسودان (وفق نطاق المشروع المتفق عليه)",
      slaStatement: "يتم تحديد شروط الدعم وأوقات الاستجابة (SLA) حسب اتفاقية كل مشروع",
      approvalNote:
        "بيانات الاتصال مستخرجة من الصفحة 11 بالملف التعريفي وبطاقة العمل. يرجى تأكيد البريد العام المعتمد والنطاق الرئيسي (nexora-tech.com أو www.nexora-tech.com) والاسم العربي الرسمي قبل الإطلاق.",
    },
    hero: {
      eyebrow: "نكسورا تك · السودان",
      h1: "أدِر أعمالك ببرمجيات مترابطة",
      intro:
        "ننفّذ أنظمة Odoo ERP لإدارة عملياتك الأساسية، ونطوّر برمجيات مخصّصة تناسب طريقة عملك.",
      headlineLine1: "أدِر أعمالك",
      headlineLine2: "ببرمجيات مترابطة",
      lede: "ننفّذ أنظمة Odoo ERP لإدارة عملياتك الأساسية، ونطوّر برمجيات مخصّصة تناسب طريقة عملك.",
      primaryCta: "ناقش مشروعك معنا",
      secondaryCta: "استكشف حلولنا",
      wideImagePath: "/assets/editorial/hero-operations-dispatch-rtl.jpg",
      mobileImagePath: "/assets/editorial/hero-operations-dispatch-rtl.jpg",
      imageAlt:
        "منسق عمليات على مكتب عمل عند حافة صالة التجهيز والإرسال يراجع طلباً مباشراً مع وجود ماسح باركود وطرود جاهزة للشحن في المقدمة.",
      layers: {
        workflowLabel: "01 · مسار العمل التجاري",
        workflowDetail: "نقطة البيع، ومسار الطلبات، وسجل المخزون في Odoo ERP",
        integrationLabel: "02 · التكامل والربط",
        integrationDetail: "مسار موحد لمزامنة البيانات وترابط التطبيقات",
        infrastructureLabel: "03 · البنية التحتية والشبكات",
        infrastructureDetail: "مبدلات الشبكة، والتمديدات الهيكلية، والألياف الضوئية",
      },
      cardLeftLabel: "برمجيات المؤسسات",
      cardLeftTitle: "Odoo ERP ونقاط البيع",
      cardRightLabel: "أنظمة التيار الخفيف",
      cardRightTitle: "البنية التحتية التقنية",
      statALabel: "عائلات الحلول",
      statAValue: "4 مسارات",
      statBLabel: "مراحل التنفيذ",
      statBValue: "3 مراحل",
      scrollLabel: "استكشف",
      dockItems: {
        overview: "عن الشركة",
        services: "حلولنا",
        process: "كيف نعمل",
        contact: "تواصل معنا",
      },
      verificationBadge: "ThreeUI SylvaHero (05f359ce157a) · مطابق للمصدر 100%",
      modeInteractive: "المشهد المخصص",
      modeCanvas: "المشهد 3D + طبقة HTML",
      modeLite: "الواجهة الثابتة السريعة",
      modeRawSource: "ملف المصدر الأصلي",
      conflictNotice:
        "معاينة التكوين: يحتوي ملف inner-green-3d.html الأصلي (197,914 بايت) على نصوص تجريبية نباتية، وهو محفوظ كمرجع داخلي في صفحة نظام التصميم.",
    },
    connectedScopeExample: {
      eyebrow: "مثال لعملية تشغيلية مترابطة",
      badge: "رسم توضيحي لنطاق محتمل",
      title: "كيف تعمل عملية تجارية واحدة مترابطة من نقطة البيع إلى الشبكة",
      lead: "يوضح المثال أدناه تصوراً لنطاق عمل محتمل يربط بين المبيعات، وسجل المخزون والحسابات، وشبكة الموقع المادية عبر مسارات العمل الأربعة لدى نكسورا تك.",
      disclaimer:
        "ملاحظة: هذا المخطط هو مثال توضيحي لنطاق عمل محتمل وليس إشارة إلى مشروع عميل محدد؛ حيث يتم تحديد نطاق كل مشروع بشكل مستقل خلال مرحلة (التقييم والتخطيط).",
      nodes: [
        {
          step: "01",
          layer: "واجهة البيع / الفرع",
          title: "تسجيل عملية البيع في نقطة البيع",
          description:
            "إتمام معاملة البيع في المتجر أو المطعم عبر نظام Nexora POS أو SambaPOS المهيأ وفق طبيعة النشاط.",
          solutionSlug: "pos-retail",
          solutionLabel: "حلول نقاط البيع والتجزئة",
        },
        {
          step: "02",
          layer: "تكامل الأنظمة وتدفق البيانات",
          title: "مزامنة الطلبات والبيانات تلقائياً",
          description:
            "نقل بيانات المبيعات والعمليات بين واجهة البيع وتطبيقات الإدارة المركزية عبر تكامل الأنظمة وأتمتة مسارات العمل.",
          solutionSlug: "digital-transformation",
          solutionLabel: "التحول الرقمي",
        },
        {
          step: "03",
          layer: "تخطيط موارد المؤسسات (ERP)",
          title: "تحديث المخزون والمشتريات والحسابات في Odoo ERP",
          description:
            "تحديث أرصدة المخزون وأوامر التوريد والقيود المالية في بيئة Odoo ERP المتوافقة مع مسارات عمل الإدارات.",
          solutionSlug: "enterprise-business",
          solutionLabel: "حلول الأعمال المؤسسية",
        },
        {
          step: "04",
          layer: "البنية التحتية وشبكة الموقع",
          title: "التشغيل عبر تمديدات هيكلية وألياف ضوئية وأنظمة تيار خفيف",
          description:
            "اعتماد الأنظمة على شبكة كابلات هيكلية وألياف ضوئية وغرف خوادم وأنظمة مراقبة وتحكم في الدخول مصممة ومنفذة هندسياً.",
          solutionSlug: "infrastructure-low-current",
          solutionLabel: "البنية التحتية وأنظمة التيار الخفيف",
        },
      ],
    },
    intro: {
      eyebrow: "عن نكسورا تك (NEXORA TECH)",
      title: "ربط تطبيقات الأعمال، ومسارات العمل الرقمية، والبنية التحتية المادية",
      lead: "تجمع نكسورا تك بين برمجيات المؤسسات وأتمتة الأعمال والبنية التحتية التقنية لمساعدة المؤسسات على إدارة عملياتها وربطها.",
      body1:
        "تقدم نكسورا تك حلولاً متكاملة في تكنولوجيا الأعمال والهندسة، حيث يرتكز نهجنا على فهم المتطلبات التشغيلية الفعلية لكل مؤسسة وأولوياتها قبل تصميم أنظمة عملية وقابلة للتوسع.",
      body2:
        "يعمل مطورونا واستشاريونا الوظيفيون والتقنيون ومهندسو البنية التحتية معاً عبر دورة حياة المشروع — بدءاً من التقييم والتخطيط، مروراً بالتصميم والتنفيذ، وصولاً إلى الاختبار والتسليم والدعم والتحسين المستمر.",
      gmSectionTitle: "كلمة المدير العام",
      gmQuote:
        "في نكسورا تك (Nexora Tech)، نؤمن بأن التكنولوجيا يجب أن تتجاوز مجرد دعم الأعمال — بل ينبغي أن تمكّن النمو والكفاءة والمرونة طويلة الأمد. يجمع نهجنا بين الفهم العميق للأعمال والخبرة التقنية والهندسية لتقديم حلول متكاملة عبر برمجيات المؤسسات، والتحول الرقمي، والبنية التحتية التقنية. من أنظمة ERP وأتمتة الأعمال إلى أنظمة التيار الخفيف الذكية، نعمل عن كثب مع عملائنا من التخطيط والتنفيذ وحتى التشغيل التجريبي والدعم والتحسين المستمر. هدفنا بسيط: بناء حلول موثوقة وقابلة للتوسع تعالج التحديات التشغيلية الفعلية وتصنع قيمة مستدامة.",
      gmName: "رامي عبد الرحمن سليمان (Rami Abdelrhman Suliman)",
      gmRole: "المدير العام — Nexora Tech",
      gmApprovalNote: "بيانات القيادة مستخرجة من الصفحة 2 بالملف التعريفي وبطاقة العمل (الاسم العربي والصورة وقنوات التواصل المباشر مدرجة في سجل الاعتماد).",
      visionTitle: "الرؤية المعلنة (أفريقيا والشرق الأوسط)",
      visionBody:
        "أن نكون شريكاً تقنياً موثوقاً عبر أفريقيا ومنطقة الشرق الأوسط وشمال أفريقيا (MENA)، لتمكين المؤسسات من العمل بذكاء أكبر، والنمو بثقة، والبناء للمستقبل.",
      missionTitle: "رسالتنا",
      missionBody:
        "تقديم حلول تقنية متكاملة وموثوقة من خلال الخبرة الفنية، والتخطيط المدروس، والتنفيذ المنضبط — عبر العمل عن كثب مع عملائنا لفهم متطلباتهم التشغيلية، وتصميم النهج المناسب، ودعمهم خلال مراحل التنفيذ والتحسين المستمر.",
      purposeStatement:
        "نهدف إلى تقديم قيمة مستدامة عبر تكنولوجيا عملية وقابلة للتوسع ومبنية حول الاحتياجات التشغيلية الفعلية لكل مؤسسة.",
      metrics: [
        {
          value: "4 عائلات حلول",
          label: "نطاق خدمات متكامل",
          detail: "حلول الأعمال المؤسسية، نقاط البيع والتجزئة، التحول الرقمي، والبنية التحتية والتيار الخفيف.",
          approvalStatus: "approved_for_publication",
        },
        {
          value: "3 مراحل",
          label: "تسلسل التنفيذ المعتمد",
          detail: "التقييم والتخطيط · التصميم والتنفيذ · الاختبار والتسليم والدعم.",
          approvalStatus: "approved_for_publication",
        },
        {
          value: "7 قطاعات",
          label: "خبرة قطاعات موثقة بالملف",
          detail: "النفط والغاز، التصنيع، التجزئة، الإنشاءات، العقارات، اللوجستيات، وإدارة الأساطيل (صفحة 9).",
          approvalStatus: "approved_for_publication",
        },
        {
          value: "+12 عاماً*",
          label: "الخبرة المذكورة بالملف التعريفي",
          detail: "*تشير الصفحتان 4 و6 إلى «أكثر من 12 عاماً» — قيد تأكيد تاريخ التأسيس ونطاق الخبرة قبل النشر النهائي.",
          approvalStatus: "needs_verification",
        },
      ],
    },
    capabilitiesSection: {
      eyebrow: "عائلات الحلول",
      title: "أربع عائلات حلول مترابطة عبر البرمجيات والهندسة",
      lead: "اختر عائلة الحلول أدناه للتعرف على التحدي التشغيلي الذي تعالجه، والنطاق الفني المدعوم، ومنهجية التنفيذ، والخطوة التالية لبدء مناقشة مشروعك.",
      problemLabel: "التحدي التشغيلي",
      offeringLabel: "النطاق المدعوم ومنهجية التنفيذ",
      outcomeLabel: "النتيجة التشغيلية المتوقعة",
      learnMoreLabel: "استعراض تفاصيل الحل",
    },
    services: [
      {
        slug: "enterprise-business",
        legacySlug: "enterprise-business-solutions",
        code: "SOL-01",
        title: "حلول الأعمال المؤسسية",
        shortTitle: "تطبيق وتحسين Odoo ERP وتطبيقات الأعمال",
        eyebrow: "تخطيط موارد المؤسسات وتطبيقات الأعمال",
        summary:
          "تطبيق وتحسين نظام Odoo ERP وتطبيقات الأعمال، مصممة حول مسارات العمل القائمة لديكم عبر الاستشارات، وتحليل المتطلبات، والتخصيص، وترحيل البيانات، والتدريب، والدعم المستمر.",
        problemStatement:
          "تعاني العديد من المؤسسات من تشتت العمليات المالية والمخزنية والمشتريات في أنظمة منفصلة، أو من تعثر مشاريع ERP التي يبدأ تنفيذها دون دراسة دقيقة لمسارات العمل الفعلية والفجوات التشغيلية.",
        nexoraOffering:
          "تحدد نكسورا تك نطاق كل مشروع Odoo ERP انطلاقاً من مسارات العمل الفعلية للمؤسسة؛ حيث يعمل الاستشاريون الوظيفيون والتقنيون والمطورون معاً منذ جمع المتطلبات وتحليل الفجوات وحتى التهيئة والتخصيص وترحيل البيانات والتدريب والدعم المستمر.",
        practicalOutcome:
          "ربط العمليات المالية والمخزنية والتشغيلية في بيئة Odoo ERP موحدة ومصممة وفق النطاق المتفق عليه.",
        ctaLabel: "ناقش متطلبات نظام ERP لمؤسستك",
        approvalGateNote:
          "Odoo علامة تجارية مسجلة لشركة Odoo S.A. يعكس النطاق أعلاه الصفحتين 6–7 من الملف التعريفي؛ أي إشارة إلى شراكة رسمية تتطلب تحققاً منفصلاً.",
        imagePath: "/assets/editorial/solution-enterprise-erp-ar.jpg",
        imageAlt:
          "مدير سلسلة الإمداد ومستشارة Odoo ERP يراجعان حركات المخزون والمبيعات في الخرطوم.",
        platforms: ["Odoo ERP", "تطبيقات الأعمال المؤسسية", "تحليل المتطلبات والفجوات"],
        capabilities: [
          {
            title: "الاستشارات وتحليل المتطلبات والفجوات",
            description:
              "دراسة بيئة العمل الحالية وجمع المتطلبات وتحليل الفجوات لتحديد نطاق المشروع والمتطلبات الفنية وخارطة الطريق قبل بدء التهيئة.",
          },
          {
            title: "تهيئة وتخصيص نظام Odoo ERP",
            description:
              "ضبط الوحدات الأساسية وتطوير التخصيصات اللازمة بواسطة المطورين والاستشاريين الوظيفيين والتقنيين وفق النطاق المعتمد.",
          },
          {
            title: "ترحيل البيانات ومواءمة الأنظمة",
            description:
              "تجهيز وترحيل البيانات الأساسية والحسابات والمخزون بصورة منظمة إلى بيئة النظام الجديد.",
          },
          {
            title: "التدريب والتسليم والدعم المستمر",
            description:
              "تقديم التدريب اللازم لفرق العمل وتسليم التوثيق الفني، متبوعاً بالدعم المستمر والتحسين.",
          },
        ],
        deliverables: [
          "تحديد نطاق المشروع وتحليل المتطلبات والفجوات (التقييم والتخطيط)",
          "تهيئة وتخصيص نظام Odoo ERP وترحيل البيانات (التصميم والتنفيذ)",
          "اختبار الحل والتدريب والتسليم والدعم (وفق النطاق المتفق عليه)",
        ],
        sectors: ["النفط والغاز", "التصنيع", "التجزئة", "الإنشاءات", "العقارات", "اللوجستيات وإدارة الأساطيل"],
        faqs: [
          {
            question: "كيف يتم تحديد نطاق مشروع Odoo ERP قبل التنفيذ؟",
            answer:
              "في مرحلة (التقييم والتخطيط)، يقوم فريقنا بالاستشارة وتقييم الأعمال وجمع المتطلبات وتحليل الفجوات لتحديد نطاق المشروع وخارطة الطريق بوضوح قبل البدء في التنفيذ.",
          },
        ],
      },
      {
        slug: "pos-retail",
        legacySlug: "pos-and-retail-solutions",
        code: "SOL-02",
        title: "حلول نقاط البيع والتجزئة",
        shortTitle: "Nexora POS وSambaPOS للتجزئة والضيافة",
        eyebrow: "التجزئة والضيافة وخدمات الأغذية والمشروبات",
        summary:
          "حلول مرنة لنقاط البيع وإدارة الأعمال لبيئات التجزئة والضيافة وخدمات الأغذية والمشروبات، تشمل مسارين واضحين لنظامي Nexora POS وSambaPOS.",
        problemStatement:
          "تحتاج متاجر التجزئة ومنشآت الضيافة والمطاعم إلى أنظمة نقاط بيع وإدارة أعمال مرنة تتناسب مع طبيعة التشغيل اليومي، وإدارة الأصناف، ومتابعة المبيعات.",
        nexoraOffering:
          "تقدم نكسورا تك حلول نقاط البيع وإدارة الأعمال لقطاعات التجزئة والضيافة وخدمات الأغذية، مع توفير خيارين مخصصين هما Nexora POS وSambaPOS يتم إعدادهما وفق بيئة التشغيل لديكم.",
        practicalOutcome:
          "تنظيم عمليات البيع وإدارة المتجر أو المطعم بمرونة وموثوقية تتوافق مع متطلبات التشغيل.",
        ctaLabel: "ناقش إعداد نقاط البيع لمنشأتك",
        approvalGateNote:
          "يتم تأكيد تفاصيل المزايا الفنية وخيارات النشر والتراخيص وإمكانية العرض التجريبي (Demo) لكل من Nexora POS وSambaPOS خلال الاستشارة الأولية.",
        imagePath: "/assets/editorial/solution-pos-retail-ar.jpg",
        imageAlt:
          "تكوين لمنضدة دفع تضم شاشة نقاط بيع تعمل باللمس وماسح باركود وطابعة إيصالات في بيئة تجزئة أو ضيافة منظمة.",
        platforms: ["Nexora POS", "SambaPOS", "إدارة التجزئة والضيافة"],
        subEntries: [
          {
            name: "Nexora POS",
            badge: "نقاط البيع وإدارة التجزئة",
            description:
              "حل نقاط بيع وإدارة أعمال موجه لبيئات التجزئة والمتاجر. تواصل معنا لمناقشة إعداد متجرك وتأكيد الخصائص وخيارات النشر والعرض التجريبي.",
            statusNote: "تُؤكد تفاصيل المزايا وخيارات النشر والعرض التجريبي عند مناقشة المشروع.",
          },
          {
            name: "SambaPOS",
            badge: "نقاط البيع للضيافة والمطاعم",
            description:
              "منصة نقاط بيع متخصصة لبيئات الضيافة والمطاعم وخدمات الأغذية والمشروبات. تواصل معنا لمناقشة إعداد الصالات والطلبات وخيارات التهيئة لمنشأتك.",
            statusNote: "تُؤكد تفاصيل التراخيص والتهيئة والعرض التجريبي عند مناقشة المشروع.",
          },
        ],
        capabilities: [
          {
            title: "تقييم بيئة التشغيل في المتجر أو المطعم",
            description:
              "دراسة طبيعة النشاط وعدد نقاط البيع ومتطلبات الإدارة لاختيار وتحديد النطاق المناسب.",
          },
          {
            title: "تهيئة وتشغيل Nexora POS",
            description:
              "إعداد نظام نقاط البيع وإدارة الأعمال لمتاجر التجزئة وفق متطلبات التشغيل المعتمدة.",
          },
          {
            title: "تهيئة وتشغيل SambaPOS",
            description:
              "إعداد مسارات العمل الخاصة ببيئات الضيافة والمطاعم وخدمات الأغذية والمشروبات.",
          },
          {
            title: "التدريب والتسليم والدعم",
            description:
              "اختبار النظام وتدريب فرق التشغيل وتقديم الدعم المستمر وفق النطاق المتفق عليه.",
          },
        ],
        deliverables: [
          "دراسة متطلبات بيئة التجزئة أو الضيافة (التقييم والتخطيط)",
          "تهيئة نظام Nexora POS أو SambaPOS (التصميم والتنفيذ)",
          "الاختبار والتدريب والتسليم والدعم (الاختبار والتسليم والدعم)",
        ],
        sectors: ["التجزئة", "الضيافة وخدمات الأغذية والمشروبات"],
        faqs: [
          {
            question: "كيف نختار بين Nexora POS وSambaPOS؟",
            answer:
              "يتضمن نطاق نكسورا تك كلاً من Nexora POS وSambaPOS لبيئات التجزئة والضيافة وخدمات الأغذية. ندعوكم لمناقشة إعداد التشغيل لديكم لتحديد الخيار الأنسب وتأكيد المزايا المتاحة.",
          },
        ],
      },
      {
        slug: "digital-transformation",
        legacySlug: "digital-transformation-ai",
        code: "SOL-03",
        title: "التحول الرقمي",
        shortTitle: "البرمجيات المخصصة، تكامل الأنظمة، السحابة والتحليلات",
        eyebrow: "البرمجيات المخصصة وتكامل الأنظمة وتحليلات البيانات",
        summary:
          "تطوير البرمجيات المخصصة، وتكامل الأنظمة، والخدمات السحابية، وتحليلات البيانات، والتجارة الإلكترونية، وحلول الجوال المصممة لأتمتة العمليات وتمكين عمليات أذكى مبنية على البيانات.",
        problemStatement:
          "تواجه المؤسسات تحديات تشغيلية عندما تعتمد على إجراءات يدوية غير مؤتمتة، أو أنظمة برمجية منفصلة لا تتبادل البيانات، أو عند الحاجة إلى قنوات رقمية وتطبيقات جوال مترابطة.",
        nexoraOffering:
          "يعمل مطورونا واستشاريونا التقنيون على تصميم وتنفيذ البرمجيات المخصصة، وتكامل الأنظمة، والخدمات السحابية، وتحليلات البيانات، ومنصات التجارة الإلكترونية، وتطبيقات الجوال وفق نطاق مشروعكم.",
        practicalOutcome:
          "أتمتة مسارات العمل، وربط الأنظمة البرمجية، وتحسين الاستفادة من البيانات التشغيلية.",
        ctaLabel: "ناقش مشروع البرمجيات والتكامل الرقمي",
        approvalGateNote:
          "يركز العرض تحت مسمى «التحول الرقمي» على القدرات الموثقة بالصفحة 7 من الملف التعريفي (البرمجيات المخصصة، تكامل الأنظمة، السحابة، تحليلات البيانات، التجارة الإلكترونية، وحلول الجوال).",
        imagePath: "/assets/editorial/story-custom-software-ops-ar.jpg",
        imageAlt:
          "فريق عمل يراجع مخطط تكامل الأنظمة ولوحات بيانات البرمجيات المترابطة على محطة عمل مزدوجة الشاشات.",
        platforms: [
          "البرمجيات المخصصة",
          "تكامل الأنظمة",
          "الخدمات السحابية",
          "تحليلات البيانات",
          "التجارة الإلكترونية وحلول الجوال",
        ],
        capabilities: [
          {
            title: "تطوير البرمجيات المخصصة وأتمتة العمليات",
            description:
              "بناء تطبيقات أعمال مخصصة لمعالجة متطلبات تشغيلية محددة وأتمتة الإجراءات المتكررة.",
          },
          {
            title: "تكامل الأنظمة (System Integration)",
            description:
              "ربط تطبيقات المؤسسة وقواعد البيانات لضمان تدفق البيانات بانتظام بين الإدارات.",
          },
          {
            title: "الخدمات السحابية وتحليلات البيانات",
            description:
              "تهيئة الحلول السحابية وأدوات تحليل البيانات لدعم الإدارة بتقارير ومؤشرات واضحة.",
          },
          {
            title: "التجارة الإلكترونية وحلول الجوال",
            description:
              "تطوير منصات التجارة الإلكترونية وتطبيقات الهواتف الذكية المرتبطة بعمليات المؤسسة.",
          },
        ],
        deliverables: [
          "تحديد المتطلبات الفنية ونطاق التكامل (التقييم والتخطيط)",
          "تطوير ودمج البرمجيات أو الحلول السحابية والجوال (التصميم والتنفيذ)",
          "اختبار الأنظمة والتوثيق والتدريب والدعم (الاختبار والتسليم والدعم)",
        ],
        sectors: ["المؤسسات والشركات", "القطاع الحكومي", "التجزئة", "اللوجستيات وإدارة الأساطيل", "العقارات"],
        faqs: [
          {
            question: "كيف تبدأ مشاريع البرمجيات المخصصة وتكامل الأنظمة؟",
            answer:
              "تبدأ باستشارة وتقييم للأعمال وجمع للمتطلبات وتحليل للفجوات في مرحلة (التقييم والتخطيط) للاتفاق على النطاق الفني وخارطة الطريق قبل التنفيذ.",
          },
        ],
      },
      {
        slug: "infrastructure-low-current",
        legacySlug: "infrastructure-and-low-current-systems",
        code: "SOL-04",
        title: "البنية التحتية وأنظمة التيار الخفيف",
        shortTitle: "التمديدات الهيكلية، الألياف الضوئية، CCTV، الدخول، الإنذار ومراكز البيانات",
        eyebrow: "هندسة البنية التحتية وأنظمة التيار الخفيف",
        summary:
          "هندسة متكاملة للتمديدات الهيكلية، وشبكات الألياف الضوئية، وكاميرات المراقبة (CCTV)، والتحكم في الدخول، وأنظمة إنذار الحريق، والبنية التحتية لمراكز البيانات — تشمل التصميم والتوريد والتركيب والاختبار والتشغيل التجريبي والصيانة.",
        problemStatement:
          "تتطلب المباني الإدارية والمرافق الصناعية والمستودعات بنية تحتية موثوقة للشبكات والمراقبة الأمنية والتحكم في الدخول والسلامة ومراكز البيانات، تُدار عبر مسار هندسي واضح من المعاينة إلى التشغيل.",
        nexoraOffering:
          "توفر نكسورا تك التوريد والتركيب والاختبار والتشغيل التجريبي والصيانة لأنظمة التيار الخفيف لعملاء القطاع الحكومي والمؤسسات والقطاع الخاص — بدءاً من المعاينة الميدانية الأولى والتصميم وحتى التسليم النهائي.",
        practicalOutcome:
          "مبانٍ ومرافق مترابطة وآمنة وموثقة يتم تنفيذها واختبارها وصيانتها وفق متطلبات المشروع المتفق عليها.",
        ctaLabel: "اطلب معاينة وتقييم للبنية التحتية",
        approvalGateNote:
          "تخضع الإشارات التفصيلية إلى المعايير القياسية، وتقارير فحص النقاط، واعتمادات الشركات المصنعة (Cisco, Hikvision, Honeywell, Ubiquiti)، وشروط الاستجابة (SLA) لبوابة الاعتماد ونطاق العقد الموقع.",
        imagePath: "/assets/editorial/solution-infrastructure-low-current-ar.jpg",
        imageAlt:
          "لقطة مقربة للوحة توصيل (Patch Panel) ومبدّل شبكة مُدار وكابلات ألياف ضوئية منظمة داخل خزانة معدات.",
        platforms: [
          "التمديدات الهيكلية والألياف الضوئية",
          "كاميرات المراقبة (CCTV)",
          "أنظمة التحكم في الدخول",
          "أنظمة إنذار الحريق",
          "البنية التحتية لمراكز البيانات",
        ],
        capabilities: [
          {
            title: "التمديدات الهيكلية وشبكات الألياف الضوئية",
            description:
              "المعاينة والتصميم والتوريد والتركيب والاختبار لشبكات الكابلات الهيكلية والألياف الضوئية.",
          },
          {
            title: "كاميرات المراقبة (CCTV) والتحكم في الدخول",
            description:
              "تصميم وتوريد وتركيب وتشغيل أنظمة المراقبة المرئية وأنظمة التحكم في الدخول للمرافق.",
          },
          {
            title: "أنظمة إنذار الحريق",
            description:
              "هندسة وتركيب واختبار وتشغيل أنظمة الكشف والإنذار عن الحريق في المباني.",
          },
          {
            title: "البنية التحتية لمراكز البيانات والصيانة",
            description:
              "تجهيز البنية التحتية لمراكز البيانات وغرف الخوادم، متبوعة بخدمات الصيانة والدعم وفق النطاق المتفق عليه.",
          },
        ],
        deliverables: [
          "المعاينة الميدانية وتحديد النطاق الهندسي (التقييم والتخطيط)",
          "التوريد والتركيب والتمديد للأنظمة (التصميم والتنفيذ)",
          "الاختبار والتشغيل التجريبي والتوثيق والتسليم والصيانة (وفق النطاق المتفق عليه)",
        ],
        sectors: ["القطاع الحكومي", "المؤسسات الكبرى", "النفط والغاز", "التصنيع", "الإنشاءات", "العقارات", "اللوجستيات"],
        faqs: [
          {
            question: "ما هي مراحل تنفيذ مشروع البنية التحتية والتيار الخفيف؟",
            answer:
              "يبدأ المسار بالمعاينة الميدانية وتحديد المتطلبات (التقييم والتخطيط)، ثم التوريد والتركيب والتهيئة (التصميم والتنفيذ)، وصولاً إلى الاختبار والتشغيل التجريبي والتوثيق والتسليم والدعم (الاختبار والتسليم والدعم).",
          },
        ],
      },
    ],
    solutionsSection: {
      eyebrow: "الربط بين البرمجيات والبنية التحتية",
      title: "كيف تربط نكسورا تك بين تطبيقات الأعمال ومسارات العمل الرقمية والبنية التحتية المادية",
      lead: "تجمع نكسورا تك بين برمجيات المؤسسات وأتمتة الأعمال والبنية التحتية التقنية، مما يتيح للمؤسسات التعامل مع شريك واحد يفهم كلاً من النظام البرمجي والشبكة المادية التي يعمل عليها.",
      layersLabel: "طبقات التكامل",
      platformsLabel: "النطاق المدعوم",
      outcomesLabel: "القيمة التشغيلية",
      items: [
        {
          id: "unified-enterprise-erp",
          badge: "الطبقة الأولى · تطبيقات المؤسسات",
          title: "حلول الأعمال المؤسسية (Odoo ERP)",
          subtitle: "تحديد النطاق وتطبيق نظام ERP حول مسارات العمل الفعلية.",
          description:
            "يعمل الاستشاريون الوظيفيون والتقنيون والمطورون على مواءمة العمليات المالية والمخزنية والتشغيلية عبر تحليل المتطلبات والتهيئة والتخصيص وترحيل البيانات والتدريب.",
          architectureLayers: [
            { layer: "التقييم والتخطيط", detail: "تقييم الأعمال وجمع المتطلبات وتحليل الفجوات لتحديد النطاق." },
            { layer: "التصميم والتنفيذ", detail: "تهيئة وتخصيص Odoo ERP وترحيل البيانات." },
            { layer: "الاختبار والتسليم والدعم", detail: "التحقق من المتطلبات والتدريب والتوثيق والدعم المستمر." },
          ],
          platforms: ["Odoo ERP", "تطبيقات الأعمال", "الاستشارات والترحيل"],
          outcomes: [
            "تحديد نطاق النظام بناءً على مسارات العمل القائمة",
            "تكامل جهود المطورين والاستشاريين الوظيفيين والتقنيين",
            "تدريب منظم ودعم مستمر بعد التسليم",
          ],
          serviceSlug: "enterprise-business",
        },
        {
          id: "connected-retail-hospitality",
          badge: "الطبقة الثانية · نقاط البيع والتحول الرقمي",
          title: "نقاط البيع والبرمجيات المخصصة وتكامل الأنظمة",
          subtitle: "ربط واجهات البيع والتطبيقات الرقمية بعمليات المؤسسة.",
          description:
            "توفير نظامي Nexora POS وSambaPOS لبيئات التجزئة والضيافة، إلى جانب البرمجيات المخصصة وتكامل الأنظمة والخدمات السحابية وتحليلات البيانات والتجارة الإلكترونية وحلول الجوال.",
          architectureLayers: [
            { layer: "أنظمة نقاط البيع", detail: "Nexora POS وSambaPOS لقطاعات التجزئة والضيافة وخدمات الأغذية." },
            { layer: "التكامل والأتمتة", detail: "تطوير البرمجيات المخصصة وربط الأنظمة لأتمتة العمليات." },
            { layer: "القنوات الرقمية والتحليلات", detail: "الخدمات السحابية وتحليلات البيانات والتجارة الإلكترونية وتطبيقات الجوال." },
          ],
          platforms: ["Nexora POS", "SambaPOS", "البرمجيات المخصصة والتكامل", "السحابة والتحليلات"],
          outcomes: [
            "مسارات واضحة لنقاط البيع في التجزئة والضيافة",
            "تقليل العمل اليدوي عبر تكامل الأنظمة وأتمتة العمليات",
            "حلول رقمية مصممة وفق الأولويات التشغيلية",
          ],
          serviceSlug: "pos-retail",
        },
        {
          id: "intelligent-building-infrastructure",
          badge: "الطبقة الثالثة · البنية التحتية والتيار الخفيف",
          title: "البنية التحتية وأنظمة التيار الخفيف",
          subtitle: "هندسة الشبكات والأنظمة التي تبقي المباني آمنة ومترابطة وذكية.",
          description:
            "هندسة متكاملة للتمديدات الهيكلية وشبكات الألياف الضوئية وكاميرات المراقبة (CCTV) والتحكم في الدخول وإنذار الحريق والبنية التحتية لمراكز البيانات.",
          architectureLayers: [
            { layer: "الشبكات ومراكز البيانات", detail: "التمديدات الهيكلية وشبكات الألياف الضوئية والبنية التحتية لمراكز البيانات." },
            { layer: "الأمن والتحكم", detail: "كاميرات المراقبة الأمنية (CCTV) وأنظمة التحكم في الدخول." },
            { layer: "السلامة والصيانة", detail: "أنظمة إنذار الحريق والاختبار والتشغيل التجريبي والتسليم والصيانة." },
          ],
          platforms: ["التمديدات الهيكلية", "الألياف الضوئية", "كاميرات المراقبة والتحكم في الدخول", "إنذار الحريق ومراكز البيانات"],
          outcomes: [
            "مسار هندسي واضح من المعاينة والتصميم إلى التشغيل التجريبي",
            "اختبار وتوثيق وتسليم منظم وفق النطاق المتفق عليه",
            "خدمات صيانة ودعم للقطاع الحكومي والمؤسسات والقطاع الخاص",
          ],
          serviceSlug: "infrastructure-low-current",
        },
      ],
    },
    industriesSection: {
      eyebrow: "القطاعات الواردة بالملف التعريفي",
      title: "خبرة مشاريع تمتد عبر سبعة قطاعات تشغيلية",
      lead: "تحدد الصفحة 9 من الملف التعريفي لشركة نكسورا تك خبرة المشاريع في أنظمة المؤسسات وأتمتة الأعمال والبنية التحتية التقنية عبر القطاعات التالية (مع إدارة العلاقات الفردية مع العملاء بشكل منفصل في سجل الاعتماد).",
      challengesLabel: "الاحتياجات التشغيلية المعتادة",
      systemsLabel: "نطاق حلول نكسورا تك",
      items: [
        {
          id: "oil-and-gas",
          name: "النفط والغاز",
          summary:
            "تطبيقات موارد المؤسسات وأتمتة العمليات والبنية التحتية للاتصالات والأمن في المواقع والمكاتب.",
          challengesAddressed: [
            "إدارة المشتريات والمخزون والعمليات عبر المواقع",
            "شبكات الألياف الضوئية والتمديدات الهيكلية وكاميرات المراقبة",
            "أنظمة التحكم في الدخول وإنذار الحريق وغرف الخوادم",
          ],
          nexoraSystems: ["حلول الأعمال المؤسسية (Odoo ERP)", "البنية التحتية وأنظمة التيار الخفيف", "تكامل الأنظمة"],
        },
        {
          id: "manufacturing",
          name: "التصنيع",
          summary:
            "ربط عمليات الإنتاج والمخازن والمحاسبة مع تجهيز المرافق الصناعية بالشبكات وأنظمة التيار الخفيف.",
          challengesAddressed: [
            "تنسيق المخزون والإنتاج والإدارة المالية",
            "التمديدات الهيكلية والألياف الضوئية وكاميرات المراقبة بالمصانع",
            "أنظمة التحكم في الدخول وإنذار الحريق",
          ],
          nexoraSystems: ["تطبيق Odoo ERP", "التمديدات الهيكلية وكاميرات المراقبة", "التحكم في الدخول وإنذار الحريق"],
        },
        {
          id: "retail-and-hospitality",
          name: "التجزئة والضيافة وخدمات الأغذية",
          summary:
            "أنظمة نقاط البيع وإدارة المتاجر والمطاعم والتجارة الإلكترونية وتجهيز الفروع بالشبكات وأنظمة المراقبة.",
          challengesAddressed: [
            "إدارة عمليات نقاط البيع في المتاجر والمطاعم",
            "مواءمة المبيعات مع المخزون والحسابات",
            "شبكات الفروع وكاميرات المراقبة ومنصات التجارة الإلكترونية",
          ],
          nexoraSystems: ["Nexora POS وSambaPOS", "Odoo ERP والتجارة الإلكترونية", "تمديدات وشبكات الفروع"],
        },
        {
          id: "construction-and-real-estate",
          name: "الإنشاءات والعقارات",
          summary:
            "تجهيز المباني والمشاريع العقارية بأنظمة التيار الخفيف إلى جانب برمجيات إدارة الأعمال والمشاريع.",
          challengesAddressed: [
            "المعاينة والتصميم والتوريد والتركيب لأنظمة التيار الخفيف بالمباني",
            "الاختبار والتشغيل التجريبي والتوثيق لتسليم المشاريع",
            "تطبيقات ERP لإدارة المشاريع والمشتريات والعقارات",
          ],
          nexoraSystems: ["البنية التحتية وأنظمة التيار الخفيف", "حلول الأعمال المؤسسية", "الاختبار والتشغيل التجريبي"],
        },
        {
          id: "logistics-and-fleet",
          name: "اللوجستيات وإدارة الأساطيل",
          summary:
            "أتمتة أعمال المستودعات والتوزيع والأساطيل مع تأمين وربط المرافق اللوجستية بالشبكات وأنظمة المراقبة.",
          challengesAddressed: [
            "إدارة المستودعات وحركة التوزيع وتشغيل الأساطيل",
            "البرمجيات المخصصة وحلول الجوال وتحليلات البيانات",
            "تمديدات الشبكات وكاميرات المراقبة والتحكم في الدخول بالمستودعات",
          ],
          nexoraSystems: ["Odoo ERP والبرمجيات المخصصة", "تحليلات البيانات وحلول الجوال", "أنظمة التيار الخفيف للمستودعات"],
        },
        {
          id: "government-and-enterprise",
          name: "القطاع الحكومي والمؤسسات والقطاع الخاص",
          summary:
            "حلول متكاملة في برمجيات المؤسسات والتحول الرقمي وأنظمة التيار الخفيف للجهات الحكومية والشركات (صفحة 6).",
          challengesAddressed: [
            "تحليل المتطلبات والتنفيذ المنضبط للمشاريع التقنية",
            "البنية التحتية لمراكز البيانات والتمديدات الهيكلية وأمن المنشآت",
            "التوثيق والتدريب والتسليم والصيانة المستمرة",
          ],
          nexoraSystems: ["مراكز البيانات وأنظمة التيار الخفيف", "أنظمة ERP وتكامل الأنظمة", "التدريب والدعم"],
        },
      ],
    },
    whyNexora: {
      eyebrow: "لماذا نكسورا تك",
      title: "تكامل الاستشارات البرمجية والهندسة التقنية",
      lead: "تجمع نكسورا تك بين المطورين والاستشاريين الوظيفيين والتقنيين ومهندسي البنية التحتية ضمن منهجية عمل واضحة ومترابطة.",
      pillars: [
        {
          number: "01",
          title: "تغطية دورة حياة المشروع",
          description:
            "منذ الاستشارة الأولية أو المعاينة الميدانية وتقييم الأعمال، مروراً بالتهيئة والتركيب، وحتى الاختبار والتشغيل التجريبي والتدريب والتسليم والصيانة.",
          proofPoint: "الاستشارة · التنفيذ · الدعم",
          approvalStatus: "approved_for_publication",
        },
        {
          number: "02",
          title: "فريق تنفيذ متعدد التخصصات",
          description:
            "تُدعم قدراتنا بمطورين، واستشاريين وظيفيين، واستشاريين تقنيين، ومهندسي تيار خفيف يعملون معاً طوال مراحل المشروع.",
          proofPoint: "فرق البرمجيات والهندسة",
          approvalStatus: "approved_for_publication",
        },
        {
          number: "03",
          title: "اختبار وتوثيق وتسليم منظم",
          description:
            "يتم اختبار الحلول وتشغيلها تجريبياً والتحقق من مطابقتها لمتطلبات المشروع، مع تقديم التوثيق اللازم والتدريب والتسليم الرسمي.",
          proofPoint: "الاختبار والتوثيق الفني",
          approvalStatus: "approved_for_publication",
        },
        {
          number: "04",
          title: "الصيانة والدعم التشغيلي المستمر",
          description:
            "خدمات الصيانة والدعم الفني والتحسين المستمر للمشاريع في الخرطوم وبورتسودان وفق نطاق الاتفاقية المعتمدة لكل عميل.",
          proofPoint: "تغطية الخرطوم وبورتسودان",
          approvalStatus: "approved_for_publication",
        },
      ],
    },
    processSection: {
      eyebrow: "منهجية التنفيذ",
      title: "كيف نعمل",
      stepsSummary: "التقييم والتخطيط · التصميم والتنفيذ · الاختبار والتسليم والدعم",
      lead: "يبدأ كل مشروع بفهم بيئة العميل وأولوياته ومتطلباته التشغيلية، ثم تتبع نكسورا تك تسلسلاً تنفيذياً واضحاً من ثلاث مراحل (وفق النطاق المتفق عليه).",
      steps: [
        {
          number: "01",
          title: "التقييم والتخطيط",
          description:
            "نبدأ بالاستشارة، والمعاينة الميدانية أو تقييم الأعمال، وجمع المتطلبات وتحليل الفجوات. يتيح ذلك لفريقنا تحديد نطاق المشروع، والمتطلبات الفنية، ومنهجية التنفيذ، وخارطة طريق واضحة قبل بدء التنفيذ.",
          deliverables: [
            "ما نناقشه: بيئة العمل الحالية، والأولويات، والمتطلبات التشغيلية",
            "معاينة الموقع (للبنية التحتية) أو تحليل الفجوات (لأنظمة ERP والبرمجيات)",
            "المخرج المتوقع: نطاق المشروع، والمتطلبات الفنية، وخارطة طريق التنفيذ",
          ],
        },
        {
          number: "02",
          title: "التصميم والتنفيذ",
          description:
            "تقوم فرقنا التقنية والوظيفية بتهيئة وتطوير ودمج وتركيب الحل المطلوب وفقاً للنطاق المعتمد. وتُدار عملية التنفيذ عبر إجراءات موثقة، واختبارات منسقة، وتواصل مستمر مع العميل.",
          deliverables: [
            "ما ننفذه: التهيئة، والتطوير، وتكامل الأنظمة، أو التركيب الهندسي",
            "إجراءات تنفيذ موثقة واختبارات مرحلية منسقة",
            "المخرج المتوقع: نظام مهيأ أو مركب مطابق للنطاق المعتمد",
          ],
        },
        {
          number: "03",
          title: "الاختبار والتسليم والدعم",
          description:
            "قبل الإنجاز، يتم اختبار الحلول وتشغيلها تجريبياً والتحقق من مطابقتها لمتطلبات المشروع. ونقدم التوثيق اللازم، والتدريب، والتسليم، متبوعاً بالصيانة والدعم المستمر لضمان تشغيل موثوق طويل الأمد.",
          deliverables: [
            "ما نتحقق منه: الاختبار والتشغيل التجريبي والمطابقة مع متطلبات المشروع",
            "التوثيق الفني، وتدريب المستخدمين، والتسليم الرسمي (وفق النطاق المتفق عليه)",
            "المخرج المتوقع: استلام الحل وخطة الصيانة والدعم المستمر",
          ],
        },
      ],
    },
    clientsSection: {
      eyebrow: "نخبة من عملائنا والقطاعات المخدومة",
      title: "نخبة من عملائنا",
      lead: "مؤسسات وشركات عبر قطاعات التجزئة والتجارة واللوجستيات والإعلام والأعمال اعتمدت على حلول نكسورا تك.",
      narrative:
        "إلى جانب شراكاتنا مع عملائنا، تقدم نكسورا تك برمجيات المؤسسات وأنظمة نقاط البيع والتحول الرقمي وأنظمة التيار الخفيف عبر قطاعات النفط والغاز، والتصنيع، والتجزئة، والإنشاءات، والعقارات، واللوجستيات وإدارة الأساطيل.",
      governanceNote:
        "حلول متكاملة في برمجيات المؤسسات ونقاط البيع والتحول الرقمي والبنية التحتية مصممة وفق متطلبات كل عميل.",
      clients: SHARED_CLIENTS,
      blueprintsTitle: "نطاق التسليم ومنهجية العمل حسب المجال",
      blueprintsLead:
        "يوضح العرض التالي ما يمكن للمؤسسات توقعه عند تخطيط وتنفيذ مشروع برمجي أو هندسي مع نكسورا تك.",
      blueprints: [
        {
          code: "SCOPE-01",
          title: "تطبيق وتحسين نظام Odoo ERP وتطبيقات الأعمال",
          sector: "النفط والغاز، التصنيع، التجارة، الإنشاءات، واللوجستيات",
          scope:
            "جمع المتطلبات، وتحليل الفجوات، وتهيئة وتخصيص نظام Odoo ERP، وترحيل البيانات، وتدريب المستخدمين، والدعم المستمر.",
          engineeringStandards: [
            "تحديد النطاق حول مسارات العمل الفعلية قبل التخصيص",
            "تنسيق العمل بين المطورين والاستشاريين الوظيفيين والتقنيين",
            "التحقق من مطابقة الحل لمتطلبات المشروع قبل الإطلاق",
          ],
          handoverArtifacts: [
            "ملخص نطاق المشروع وتحليل الفجوات",
            "بيئة ERP المهيأة والبيانات المرحّلة",
            "التدريب ووثائق التسليم (وفق النطاق المتفق عليه)",
          ],
        },
        {
          code: "SCOPE-02",
          title: "هندسة البنية التحتية وأنظمة التيار الخفيف ومراكز البيانات",
          sector: "القطاع الحكومي، المؤسسات، المباني التجارية، والمرافق الصناعية",
          scope:
            "المعاينة الميدانية، والتصميم، والتوريد، والتركيب، والاختبار، والتشغيل التجريبي، والصيانة للتمديدات الهيكلية والألياف الضوئية وكاميرات المراقبة والتحكم في الدخول وإنذار الحريق ومراكز البيانات.",
          engineeringStandards: [
            "مسار متكامل من المعاينة الميدانية الأولى إلى التشغيل التجريبي",
            "اختبار الأنظمة والتحقق من مطابقتها للمتطلبات الفنية للمشروع",
            "تحديد المعايير القياسية وتقارير الاختبار ضمن عقد المشروع",
          ],
          handoverArtifacts: [
            "تقييم الموقع وتحديد النطاق الهندسي",
            "سجلات الاختبار والتشغيل التجريبي (وفق النطاق المتفق عليه)",
            "التوثيق الفني والتسليم وخطة الصيانة",
          ],
        },
        {
          code: "SCOPE-03",
          title: "نقاط البيع والبرمجيات المخصصة وتكامل الأنظمة",
          sector: "التجزئة، الضيافة، خدمات الأغذية، والعمليات متعددة الفروع",
          scope:
            "تهيئة Nexora POS وSambaPOS لبيئات التجزئة والضيافة، إلى جانب البرمجيات المخصصة وتكامل الأنظمة والخدمات السحابية وتحليلات البيانات والتجارة الإلكترونية وحلول الجوال.",
          engineeringStandards: [
            "اختيار المنصة المناسبة لإعداد التشغيل في التجزئة أو الضيافة",
            "تكامل البيانات مع المخزون والأنظمة المحاسبية",
            "تدريب فرق التشغيل والتسليم المنظم",
          ],
          handoverArtifacts: [
            "بيئة نقاط البيع أو البرمجيات المهيأة",
            "التحقق من التكامل ومسارات العمل",
            "تدريب العاملين وترتيبات الدعم المستمر",
          ],
        },
      ],
    },
    insightsSection: {
      eyebrow: "أدلة تقنية",
      title: "إرشادات عملية لتحديد نطاق مشاريع ERP ونقاط البيع والتيار الخفيف",
      lead: "ملخصات إرشادية مبنية على تسلسل التنفيذ المعتمد لدى نكسورا تك.",
      readArticleLabel: "قراءة الملخص",
      keyTakeawaysLabel: "نقاط أساسية عند تحديد النطاق",
      articles: [
        {
          slug: "erp-gap-analysis-risk-reduction",
          category: "حلول الأعمال المؤسسية",
          readTime: "4 دقائق",
          title: "كيف يسهم جمع المتطلبات وتحليل الفجوات في ضبط نطاق مشروع Odoo ERP",
          summary:
            "أهمية مرحلة (التقييم والتخطيط) في مواءمة عمل الاستشاريين الوظيفيين والمطورين مع مسارات العمل الفعلية للمؤسسة.",
          keyTakeaways: [
            "توثيق مسارات العمل والأولويات قبل البدء في التخصيص البرمجي.",
            "التمييز الواضح بين التهيئة القياسية والتطوير المخصص.",
            "التخطيط لترحيل البيانات والتدريب كجزء أساسي من نطاق التسليم.",
          ],
          sections: [
            {
              heading: "1. البدء بفهم بيئة العمل",
              body: "تبدأ مشاريع ERP الناجحة بفهم واضح لبيئة العميل وأولوياته ومتطلباته التشغيلية قبل تصميم الحل التقني.",
            },
            {
              heading: "2. تكامل الأدوار الوظيفية والتقنية",
              body: "من خلال عمل المطورين والاستشاريين الوظيفيين والتقنيين معاً عبر مراحل التقييم والتخطيط، والتصميم والتنفيذ، والاختبار والتسليم والدعم، يظل المشروع مرتبطاً بالاحتياجات الفعلية للمؤسسة.",
            },
          ],
        },
        {
          slug: "auditable-low-current-commissioning",
          category: "البنية التحتية وأنظمة التيار الخفيف",
          readTime: "5 دقائق",
          title: "تحديد نطاق مشاريع التيار الخفيف: من المعاينة الميدانية إلى الاختبار والتسليم",
          summary:
            "النقاط التي ينبغي لمديري المشاريع وتقنية المعلومات تحديدها عند تخطيط شبكات الكابلات والألياف الضوئية والمراقبة والتحكم في الدخول وإنذار الحريق ومراكز البيانات.",
          keyTakeaways: [
            "البدء بمعاينة الموقع لتحديد المسارات ونقاط التغطية.",
            "تحديد متطلبات الاختبار والتشغيل التجريبي والتوثيق ضمن النطاق المتفق عليه.",
            "تنظيم ترتيبات الصيانة والدعم بعد التسليم.",
          ],
          sections: [
            {
              heading: "1. مسار مترابط من التصميم إلى التشغيل",
              body: "يشمل نطاق البنية التحتية وأنظمة التيار الخفيف التصميم والتوريد والتركيب والاختبار والتشغيل التجريبي والصيانة، مما يساعد على تنسيق الأعمال الهندسية بوضوح.",
            },
          ],
        },
        {
          slug: "connecting-pos-to-enterprise-erp",
          category: "حلول نقاط البيع والتجزئة",
          readTime: "4 دقائق",
          title: "الإعداد التشغيلي لأنظمة نقاط البيع في التجزئة والضيافة (Nexora POS وSambaPOS)",
          summary:
            "الجوانب الرئيسية التي ينبغي مناقشتها عند اختيار وتجهيز نظام نقاط البيع وإدارة الأعمال للمتاجر أو المطاعم.",
          keyTakeaways: [
            "تحديد متطلبات نقاط البيع حسب طبيعة النشاط (تجزئة أو ضيافة وخدمات أغذية).",
            "مناقشة خيارات الربط مع المخزون والحسابات.",
            "تأكيد المزايا المطلوبة وخيارات التدريب والدعم قبل الإطلاق.",
          ],
          sections: [
            {
              heading: "1. مواءمة النظام مع بيئة التشغيل",
              body: "توفر نكسورا تك حلول نقاط البيع وإدارة الأعمال شاملة Nexora POS وSambaPOS، مع تحديد الإعداد الأنسب خلال مرحلة الاستشارة وتقييم المتطلبات.",
            },
          ],
        },
      ],
    },
    contactSection: {
      eyebrow: "ابدأ محادثة حول مشروعك",
      title: "ناقش مشروعك معنا",
      lead: "شاركنا متطلباتك التشغيلية أو مجال الحلول المطلوب أدناه، وسيقوم فريقنا بمراجعة ملخص المشروع والتنسيق لاستشارة أولية أو معاينة.",
      formTitle: "نموذج استفسار ومناقشة مشروع",
      formSubtitle:
        "يرجى تعبئة الحقول أدناه. يتم التحقق من المدخلات على الخادم؛ ويخضع تفعيل التوجيه المباشر للبريد في بيئة الإنتاج لتأكيد صندوق الوارد النهائي وسياسة البيانات.",
      fields: {
        fullName: "الاسم الكامل",
        fullNamePlaceholder: "مثال: محمد أحمد",
        organization: "المؤسسة / الشركة",
        organizationPlaceholder: "مثال: شركة المنشية للتجارة",
        email: "البريد الإلكتروني للعمل",
        emailPlaceholder: "name@company.com",
        phone: "رقم الهاتف (اختياري)",
        phonePlaceholder: "+249 ...",
        serviceInterest: "مجال الحلول المطلوب",
        locationCity: "موقع المشروع (اختياري)",
        locationPlaceholder: "مثال: الخرطوم، بورتسودان...",
        projectSummary: "ملخص المشروع والمتطلبات التشغيلية",
        projectPlaceholder:
          "صف لنا بيئة العمل الحالية، وما إذا كنت ترغب في مناقشة حلول الأعمال المؤسسية (Odoo ERP)، أو نقاط البيع والتجزئة (Nexora POS / SambaPOS)، أو التحول الرقمي، أو البنية التحتية وأنظمة التيار الخفيف...",
        consentText:
          "أوافق على معالجة بيانات هذا الاستفسار لغرض دراسة طلب المشروع والرد عليه (تخضع سياسة الخصوصية والاحتفاظ بالبيانات للاعتماد النهائي قبل الإطلاق).",
        submitButton: "ناقش مشروعك معنا",
        submittingButton: "جارٍ التحقق من بيانات الطلب...",
      },
      serviceOptions: [
        { value: "enterprise-business", label: "حلول الأعمال المؤسسية (Odoo ERP وتطبيقات الأعمال)" },
        { value: "pos-retail", label: "حلول نقاط البيع والتجزئة (Nexora POS / SambaPOS)" },
        { value: "digital-transformation", label: "التحول الرقمي (البرمجيات المخصصة، التكامل، السحابة، التحليلات)" },
        { value: "infrastructure-low-current", label: "البنية التحتية وأنظمة التيار الخفيف (الشبكات، الألياف، CCTV، الدخول، الإنذار، مراكز البيانات)" },
        { value: "general-inquiry", label: "مشروع متكامل / استفسار عام" },
      ],
      directChannelsTitle: "قنوات التواصل المباشر",
      directCallLabel: "الهاتف",
      directEmailLabel: "البريد الإلكتروني",
      directWhatsappLabel: "الهاتف المباشر / واتساب",
      hqLabel: "عنوان المقر الرئيسي",
      fieldPresenceLabel: "التغطية والدعم",
      privacyAssurance:
        "تُستخدم بيانات استفسارك حصرياً لمراجعة متطلبات مشروعك والتنسيق لاستشارة فنية مع فريقنا.",
    },
    footer: {
      aboutBlurb:
        "نهندس أنظمة مترابطة وذكية. تجمع نكسورا تك بين برمجيات المؤسسات وأتمتة الأعمال والبنية التحتية التقنية لمساعدة المؤسسات على إدارة عملياتها وربطها.",
      servicesHeading: "عائلات الحلول",
      companyHeading: "روابط الموقع",
      contactHeading: "بيانات الاتصال",
      rightsReserved: "Nexora Tech (السودان). جميع الحقوق محفوظة.",
      privacyLink: "إشعار الخصوصية",
      termsLink: "شروط الاستخدام",
      designSystemLink: "نظام التصميم",
      sudanFocusBadge: "Nexora Tech — الخرطوم وبورتسودان",
    },
    legal: {
      privacyTitle: "إشعار الخصوصية (مسودة قيد التأكيد قبل الإطلاق)",
      privacyUpdated: "الحالة: مسودة بانتظار تأكيد البريد المستلم وسياسة الاحتفاظ بالبيانات",
      privacyIntro:
        "يوضح هذا الإشعار مسودة التعامل مع بيانات الاستفسارات عند تفعيل التوجيه الفعلي للنماذج لشركة نكسورا تك (الخرطوم، السودان).",
      privacySections: [
        {
          heading: "1. البيانات التي يشملها النموذج",
          body: "يتضمن نموذج مناقشة المشروع: الاسم، والمؤسسة، والبريد الإلكتروني، ورقم الهاتف الاختياري، ومجال الحلول المختار، وملخص المشروع.",
        },
        {
          heading: "2. بوابة الاعتماد قبل الإطلاق",
          body: "تُستخدم هذه البيانات لدراسة متطلبات المشروع والتواصل مع مقدم الطلب. ويتم نشر الصيغة النهائية لإشعار الخصوصية وتفعيل التوجيه البريدي بعد تأكيد صندوق الوارد وفترة الاحتفاظ بالبيانات.",
        },
      ],
      termsTitle: "شروط الاستخدام وإشعار النطاق",
      termsUpdated: "الحالة: نسخة المراجعة قبل الإطلاق",
      termsIntro:
        "تنظم هذه الشروط استخدام الموقع الإلكتروني لشركة Nexora Tech في السودان.",
      termsSections: [
        {
          heading: "1. تمييز الكيان القانوني",
          body: "شركة Nexora Tech في السودان كيان مستقل تماماً ولا يرتبط بشركة NEXORA Technologies Corp في كندا أو أي منظمة أخرى غير ذات صلة.",
        },
        {
          heading: "2. نطاق الحلول والمشاريع",
          body: "تخضع جميع الخدمات ومراحل التنفيذ (التقييم والتخطيط · التصميم والتنفيذ · الاختبار والتسليم والدعم) للنطاق المتفق عليه في عقود المشاريع.",
        },
      ],
    },
  },
};

export function getDictionary(locale: Locale): SiteDictionary {
  return SITE_CONTENT[locale] ?? SITE_CONTENT.en;
}

export function findServiceBySlug(dict: SiteDictionary, slug: string): ServiceDetail | undefined {
  return dict.services.find(
    (s) =>
      s.slug === slug ||
      s.legacySlug === slug ||
      (s.slug === "digital-transformation" && slug === "digital-transformation-and-ai")
  );
}
