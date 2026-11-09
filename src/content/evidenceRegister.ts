export type PublicationStatus =
  | "approved_for_publication"
  | "source_backed"
  | "needs_verification";

export interface EvidenceRegisterRow {
  id: string;
  category:
    | "identity"
    | "positioning"
    | "service_scope"
    | "process"
    | "tenure_metrics"
    | "clients_logos"
    | "engineering_credentials"
    | "testing_standards"
    | "coverage_sla"
    | "products_ai"
    | "leadership_contact";
  sourceRef: string;
  exactSourceWording: string;
  proposedEn: string;
  proposedAr: string;
  evidenceOrPermissionRequired: string;
  approver: string;
  decision: string;
  publicationStatus: PublicationStatus;
}

export const EVIDENCE_REGISTER: EvidenceRegisterRow[] = [
  {
    id: "CLM-01-IDENTITY-NAME",
    category: "identity",
    sourceRef: "Profile p. 1, pp. 2–11 & Business Card",
    exactSourceWording: "Nexora TECH / Engineering Connected, Intelligent Systems / Business automation, enterprise software and integrated technology infrastructure solutions.",
    proposedEn: "Nexora Tech — Engineering Connected, Intelligent Systems",
    proposedAr: "نكسورا تك (الصيغة العربية قيد الاعتماد الرسمي) — نهندس أنظمة مترابطة وذكية",
    evidenceOrPermissionRequired: "Confirm master vector logo files and official Arabic brand spelling (نكسورا تك).",
    approver: "Rami Abdelrhman Suliman",
    decision: "Core English brand identity & tagline approved from cover; Arabic transliteration marked as working editorial label.",
    publicationStatus: "approved_for_publication",
  },
  {
    id: "CLM-02-POSITIONING-INTRO",
    category: "positioning",
    sourceRef: "Profile pp. 2, 4–5",
    exactSourceWording: "Nexora Tech delivers integrated business technology and engineering solutions designed to help organizations operate more efficiently, securely and intelligently.",
    proposedEn: "Nexora Tech brings together enterprise software, business automation, and technology infrastructure to help organizations run and connect their operations.",
    proposedAr: "تجمع نكسورا تك بين برمجيات المؤسسات وأتمتة الأعمال والبنية التحتية التقنية لمساعدة المؤسسات على إدارة عملياتها وربطها.",
    evidenceOrPermissionRequired: "None for core positioning; active geographic market coverage outside Sudan reviewed separately from Vision.",
    approver: "Rami Abdelrhman Suliman",
    decision: "Approved for homepage and about intro; Africa & MENA framed explicitly as stated Vision.",
    publicationStatus: "approved_for_publication",
  },
  {
    id: "CLM-03-SERVICE-ENTERPRISE",
    category: "service_scope",
    sourceRef: "Profile pp. 6–7",
    exactSourceWording: "Enterprise Business Solutions: Implementation and optimization of Odoo ERP and business applications, supported by consultancy, requirements analysis, customization, migration, training and ongoing support.",
    proposedEn: "Enterprise Business Solutions: Odoo ERP and business application implementation and optimization, scoped around existing workflows through consultancy, requirements analysis, customization, migration, training, and ongoing support.",
    proposedAr: "حلول الأعمال المؤسسية: تطبيق وتحسين نظام Odoo ERP وتطبيقات الأعمال عبر الاستشارات وتحليل المتطلبات والتخصيص وترحيل البيانات والتدريب والدعم المستمر.",
    evidenceOrPermissionRequired: "Confirm Odoo trademark attribution or formal partner tier if any formal relationship is claimed.",
    approver: "Rami Abdelrhman Suliman",
    decision: "Service scope approved for publication; no formal Odoo partnership tier claimed without separate verification.",
    publicationStatus: "approved_for_publication",
  },
  {
    id: "CLM-04-SERVICE-POS",
    category: "products_ai",
    sourceRef: "Profile p. 7",
    exactSourceWording: "POS & Retail Solutions: Flexible point-of-sale and business management solutions for retail, hospitality and food-service environments, including Nexora POS and SambaPOS.",
    proposedEn: "POS & Retail Solutions: Point-of-sale and business management solutions for retail, hospitality, and food-service environments, featuring distinct pathways for Nexora POS and SambaPOS.",
    proposedAr: "حلول نقاط البيع والتجزئة: حلول مرنة لنقاط البيع وإدارة الأعمال لبيئات التجزئة والضيافة وخدمات الأغذية والمشروبات، وتشمل Nexora POS وSambaPOS.",
    evidenceOrPermissionRequired: "Confirm specific feature matrices, deployment models, licensing, and demo availability for Nexora POS and SambaPOS before publishing granular product specs.",
    approver: "Rami Abdelrhman Suliman",
    decision: "Family scope & named entries approved; detailed product specs/demos invited via consultation.",
    publicationStatus: "approved_for_publication",
  },
  {
    id: "CLM-05-SERVICE-DIGITAL-AI",
    category: "products_ai",
    sourceRef: "Profile p. 7",
    exactSourceWording: "Digital Transformation & AI: Custom software, system integration, cloud services, data analytics, e-commerce and mobile solutions designed to automate processes and enable smarter, data-driven operations.",
    proposedEn: "Digital Transformation & AI: Custom software, system integration, cloud services, data analytics, e-commerce, and mobile solutions designed to automate processes and connect operational data.",
    proposedAr: "التحول الرقمي والذكاء الاصطناعي: البرمجيات المخصصة وتكامل الأنظمة والخدمات السحابية وتحليلات البيانات والتجارة الإلكترونية وحلول الجوال لأتمتة العمليات.",
    evidenceOrPermissionRequired: "Keep profile service-family name; require specific project evidence before claiming standalone proprietary AI models or quantified AI outcomes.",
    approver: "Rami Abdelrhman Suliman",
    decision: "Approved with copy led by documented software, integration, cloud, analytics, e-commerce, and mobile capabilities.",
    publicationStatus: "approved_for_publication",
  },
  {
    id: "CLM-06-SERVICE-INFRASTRUCTURE",
    category: "service_scope",
    sourceRef: "Profile pp. 6–7",
    exactSourceWording: "Infrastructure & Low Current Systems: End-to-end engineering for structured cabling, fiber optic networks, CCTV surveillance, access control, fire alarm systems and data-center infrastructure, covering design, installation, testing, commissioning and maintenance to recognized technical standards.",
    proposedEn: "Infrastructure & Low-Current Systems: Structured cabling, fiber-optic networks, CCTV, access control, fire alarm systems, and data-center infrastructure from survey and design through installation, testing, commissioning, and maintenance.",
    proposedAr: "البنية التحتية وأنظمة التيار الخفيف: التمديدات الهيكلية وشبكات الألياف الضوئية وكاميرات المراقبة والتحكم في الدخول وإنذار الحريق والبنية التحتية لمراكز البيانات.",
    evidenceOrPermissionRequired: "Place specific international standard codes or universal certification claims behind approval gate.",
    approver: "Rami Abdelrhman Suliman",
    decision: "Service scope and delivery path approved; deliverables framed as subject to agreed project scope.",
    publicationStatus: "approved_for_publication",
  },
  {
    id: "CLM-07-PROCESS-THREE-STAGE",
    category: "process",
    sourceRef: "Profile p. 8",
    exactSourceWording: "1 Assess & Plan / 2 Design & Deliver / 3 Test, Handover & Support",
    proposedEn: "How we work: Assess & Plan · Design & Deliver · Test, Handover & Support (subject to agreed project scope).",
    proposedAr: "كيف نعمل: التقييم والتخطيط · التصميم والتنفيذ · الاختبار والتسليم والدعم (وفق النطاق المتفق عليه).",
    evidenceOrPermissionRequired: "None; directly reflects documented delivery methodology.",
    approver: "Rami Abdelrhman Suliman",
    decision: "Approved for public navigation and process pages.",
    publicationStatus: "approved_for_publication",
  },
  {
    id: "CLM-08-SECTORS-LIST",
    category: "clients_logos",
    sourceRef: "Profile pp. 6, 7, 9",
    exactSourceWording: "Our project experience spans enterprise systems, business automation and technology infrastructure across sectors including oil & gas, manufacturing, retail, construction, real estate, logistics and fleet operations.",
    proposedEn: "Project experience across oil and gas, manufacturing, retail, hospitality and food service, construction, real estate, logistics, and fleet operations.",
    proposedAr: "خبرة مشاريع تشمل قطاعات النفط والغاز، والتصنيع، والتجزئة والضيافة، والإنشاءات، والعقارات، واللوجستيات وإدارة الأساطيل.",
    evidenceOrPermissionRequired: "Keep sector experience separate from specific client names/logos until individual permissions are cleared.",
    approver: "Rami Abdelrhman Suliman",
    decision: "Sector list approved for public pages.",
    publicationStatus: "approved_for_publication",
  },
  {
    id: "CLM-09-TENURE-12-YEARS",
    category: "tenure_metrics",
    sourceRef: "Profile pp. 4, 6",
    exactSourceWording: "For more than 12 years, Nexora Tech has combined industry knowledge... / With more than 12 years of ERP implementation experience...",
    proposedEn: "Multi-year ERP implementation and engineering experience (12+ years referenced in company profile; exact entity vs. team tenure subject to confirmation).",
    proposedAr: "خبرة ممتدة في تطبيق أنظمة ERP والهندسة التقنية (أكثر من 12 عاماً واردة في الملف التعريفي؛ قيد تأكيد تاريخ التأسيس ونطاق الخبرة).",
    evidenceOrPermissionRequired: "Resolve whether 'more than 12 years' refers to the legal company, leadership team, or ERP implementation experience, and confirm founding date.",
    approver: "Rami Abdelrhman Suliman",
    decision: "Gated as 'needs_verification' — public copy avoids asserting an unverified founding year.",
    publicationStatus: "needs_verification",
  },
  {
    id: "CLM-10-CLIENT-LOGOS-9",
    category: "clients_logos",
    sourceRef: "Profile p. 9",
    exactSourceWording: "9 client marks: Al Riyadh Himont, Giordano, Ipanema, GSG Gulf Star Global Trading KSA, Billion, Al Anfal, Afro, Max Media, Elhelaly Computer.",
    proposedEn: "Scope-and-process delivery overview displayed publicly while individual client logo and project reference permissions are cleared.",
    proposedAr: "عرض نطاق الأعمال ومنهجية التنفيذ للجمهور ريثما يتم استكمال تصاريح نشر الشعارات والمشاريع الفردية.",
    evidenceOrPermissionRequired: "Verify each of the 9 marks (including the afro mark) and obtain written client permission for public web display of names, logos, or project details.",
    approver: "Rami Abdelrhman Suliman",
    decision: "Gated as 'needs_verification' — public pages use a scope-and-process section instead of unapproved client logos.",
    publicationStatus: "needs_verification",
  },
  {
    id: "CLM-11-MANUFACTURER-TRAINING",
    category: "engineering_credentials",
    sourceRef: "Profile p. 10",
    exactSourceWording: "Certified Engineering Team: Manufacturer-trained across Cisco, Hikvision, Honeywell and Ubiquiti platforms.",
    proposedEn: "Engineering teams experienced in designing and deploying network, surveillance, access, and life-safety systems (platform training and formal credential wording pending verification).",
    proposedAr: "فرق هندسية متمرسة في تصميم وتنفيذ شبكات الاتصالات والمراقبة والتحكم في الدخول والسلامة (تفاصيل الاعتمادات والتدريب قيد التحقق).",
    evidenceOrPermissionRequired: "Verify manufacturer-training credentials for Cisco, Hikvision, Honeywell, and Ubiquiti (holder, credential type, validity, permitted wording).",
    approver: "Rami Abdelrhman Suliman",
    decision: "Gated as 'needs_verification' — public pages describe functional engineering scope without claiming formal vendor partner/certification status.",
    publicationStatus: "needs_verification",
  },
  {
    id: "CLM-12-TESTING-STANDARDS",
    category: "testing_standards",
    sourceRef: "Profile pp. 6–8, 10",
    exactSourceWording: "Every link certified, every device commissioned, with complete testing documentation and as-built handover.",
    proposedEn: "Structured testing, commissioning, documentation, and handover aligned with agreed project requirements and technical scope.",
    proposedAr: "اختبار وتشغيل وتوثيق وتسليم منظم وفق متطلبات المشروع والنطاق الفني المتفق عليه.",
    evidenceOrPermissionRequired: "Confirm applicable test standards, sample test records, and contractual scope before publishing universal 'every link certified' claims.",
    approver: "Rami Abdelrhman Suliman",
    decision: "Gated as 'source_backed' — public pages present testing, documentation, and as-built handover as structured deliverables subject to agreed scope.",
    publicationStatus: "source_backed",
  },
  {
    id: "CLM-13-COVERAGE-KHARTOUM-PORTSUDAN",
    category: "coverage_sla",
    sourceRef: "Profile pp. 4–5, 10–11",
    exactSourceWording: "Field teams in Khartoum and Port Sudan with defined SLA response times. / Al Manshiya, Block 29, Property No. 32, Khartoum, Sudan.",
    proposedEn: "Sudan-based technology and engineering partner with contact coordination for Khartoum and Port Sudan projects; SLA terms defined per agreement.",
    proposedAr: "شريك تقني وهندسي في السودان مع تنسيق المشاريع والدعم في الخرطوم وبورتسودان وفق اتفاقيات مستوى الخدمة المتفق عليها.",
    evidenceOrPermissionRequired: "Confirm current active field coverage in Khartoum and Port Sudan, current operational status of the Al Manshiya address, service hours, and SLA terms.",
    approver: "Rami Abdelrhman Suliman",
    decision: "Gated as 'source_backed' — address and field hubs labeled as profile-listed contact entries pending pre-launch confirmation.",
    publicationStatus: "source_backed",
  },
  {
    id: "CLM-14-LEADERSHIP-CONTACT",
    category: "leadership_contact",
    sourceRef: "Profile pp. 2, 11 & Business Card",
    exactSourceWording: "Rami Abdelrhman Suliman — General Manager | r.suliman@nexora-tech.com | +249 120 4040 45 | nexora-tech.com / www.nexora-tech.com",
    proposedEn: "Rami Abdelrhman Suliman, General Manager — Contact channels prepared from profile and business card (pending final confirmation of public inbox and canonical domain).",
    proposedAr: "رامي عبد الرحمن سليمان، المدير العام (الاسم العربي وقنوات التواصل المباشر قيد الاعتماد النهائي للنشر العام).",
    evidenceOrPermissionRequired: "Approve public display of Rami's portrait, direct email (r.suliman@nexora-tech.com), phone (+249 120 4040 45), Arabic spelling, and preferred canonical hostname (nexora-tech.com vs www.nexora-tech.com).",
    approver: "Rami Abdelrhman Suliman",
    decision: "Gated as 'source_backed' — portrait and direct inbox routing held behind approval gate; inquiry form stays in safe preview/validation mode until inbox is confirmed.",
    publicationStatus: "source_backed",
  },
];

export function getEvidenceRow(id: string): EvidenceRegisterRow | undefined {
  return EVIDENCE_REGISTER.find((row) => row.id === id);
}

export function isApprovedForPublication(id: string): boolean {
  return getEvidenceRow(id)?.publicationStatus === "approved_for_publication";
}
