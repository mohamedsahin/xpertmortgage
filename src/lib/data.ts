// ============================================================
// XPERTS HOME MORTGAGE — shared content data
// Edit here to update content across every page.
// ============================================================

export type Trio = [icon: string, title: string, desc: string];
export type Pair = [title: string, body: string];
export type Client = [
  name: string,
  icon: string,
  tagline: string,
  desc: string,
  points: string[]
];
export type NavItem = { label: string; href: string };
export type DocGroup = { group: string; items: string[] };
export type DocCategory = { key: string; icon: string; emoji: string; label: string; groups: DocGroup[] };
export type Member = { name: string; role: string; bio?: string; photo?: string; email?: string; phone?: string };

// ---------- Brand ----------
export const company = {
  name: "Xperts Home Mortgage",
  short: "Xperts",
  slogan: "Your Home, Our Expertise.",
};

// ---------- Services (updated) ----------
export const services: Trio[] = [
  ["home", "Buy to Live", "Finance the home you'll live in — competitive rates and tailored terms for your primary residence."],
  ["key-round", "Buy to Let", "Build your portfolio and earn rental income with mortgage solutions designed for investors."],
  ["repeat", "Buyouts", "Transfer your existing mortgage to a better lender and unlock improved rates and terms."],
  ["refresh-cw", "Refinance", "Lower your interest rate, reduce monthly payments and restructure your existing mortgage."],
  ["piggy-bank", "Equity Release", "Unlock the value built up in your property to fund your next move or investment."],
  ["hammer", "Off-Plan Mortgages", "Flexible financing for under-construction and off-plan properties across the UAE."],
  ["building", "Commercial Mortgages", "Finance offices, retail spaces, warehouses and commercial units with confidence."],
];

// ---------- Service detail content (individual service pages) ----------
// `interest` MUST match a LeadForm "I'm interested in" option so the lead
// notification captures exactly which service the enquiry came from.
export type ServicePage = {
  slug: string;
  icon: string;
  title: string;
  interest: string;       // value passed to the enquiry form via ?interest=
  tagline: string;
  intro: string[];        // body paragraphs
  highlights: string[];   // key benefits / bullets
  forWho: string;         // who this is best suited for
};

export const serviceDetails: ServicePage[] = [
  {
    slug: "buy-to-live", icon: "home", title: "Buy to Live", interest: "Buy to Live",
    tagline: "Finance the home you'll actually live in.",
    intro: [
      "Buying your primary residence is one of the biggest decisions you'll make — and the right mortgage makes all the difference. We help residents and expats across the UAE secure competitive home-finance with terms built around your income and long-term plans.",
      "From your first property to your forever home, we compare offers from 20+ leading banks so you get the best rate without the legwork.",
    ],
    highlights: [
      "Up to 80% financing for eligible residents",
      "Fixed and variable rate options",
      "Tenures up to 25 years",
      "Pre-approval before you start house-hunting",
    ],
    forWho: "Salaried professionals and self-employed residents buying a home to live in.",
  },
  {
    slug: "buy-to-let", icon: "key-round", title: "Buy to Let", interest: "Buy to Let",
    tagline: "Build your portfolio and earn rental income.",
    intro: [
      "Investment property is one of the most reliable ways to build long-term wealth in the UAE. Our buy-to-let solutions are designed for investors who want to maximise rental yield while keeping financing costs low.",
      "Whether it's your first rental unit or your tenth, we structure finance that supports a growing portfolio.",
    ],
    highlights: [
      "Mortgage solutions tailored for investors",
      "Rental income considered in eligibility",
      "Portfolio and multi-property financing",
      "Competitive rates from leading lenders",
    ],
    forWho: "Investors purchasing property to rent out for income and capital growth.",
  },
  {
    slug: "buyouts", icon: "repeat", title: "Buyouts", interest: "Buyouts",
    tagline: "Move your mortgage to a better lender.",
    intro: [
      "Paying more than you need to? A mortgage buyout (or transfer) moves your existing loan to a lender offering a better rate or terms — often saving you thousands over the life of the loan.",
      "We handle the comparison and the paperwork, and only recommend a switch when the numbers genuinely work in your favour.",
    ],
    highlights: [
      "Lower your interest rate",
      "Reduce your monthly payment",
      "Transparent cost-benefit comparison",
      "End-to-end transfer handled for you",
    ],
    forWho: "Existing mortgage holders who want better rates or terms than their current bank.",
  },
  {
    slug: "refinance", icon: "refresh-cw", title: "Refinance", interest: "Refinance",
    tagline: "Restructure for lower payments and better terms.",
    intro: [
      "Refinancing replaces your current mortgage with a new one — to lower your rate, reduce monthly payments, change your tenure, or release equity for other goals.",
      "We assess your current loan against the latest market offers and show you exactly what you'd save.",
    ],
    highlights: [
      "Lower interest rate or monthly payment",
      "Adjust your repayment tenure",
      "Option to release equity",
      "Clear breakdown of fees and savings",
    ],
    forWho: "Homeowners looking to improve the terms of an existing mortgage.",
  },
  {
    slug: "equity-release", icon: "piggy-bank", title: "Equity Release", interest: "Equity Release",
    tagline: "Unlock the value built up in your property.",
    intro: [
      "If your property has grown in value or you've paid down a chunk of your mortgage, you may be able to release that equity as cash — for your next investment, a renovation, or other plans.",
      "We help you access your property's value responsibly, with finance that fits your wider goals.",
    ],
    highlights: [
      "Access cash tied up in your property",
      "Fund your next move or investment",
      "Flexible repayment structures",
      "Guidance on how much you can safely release",
    ],
    forWho: "Property owners with built-up equity who want to put it to work.",
  },
  {
    slug: "off-plan-mortgages", icon: "hammer", title: "Off-Plan Mortgages", interest: "Off-Plan Mortgages",
    tagline: "Flexible finance for under-construction property.",
    intro: [
      "Off-plan property can offer attractive prices and payment plans — but financing it needs a specialist. We arrange mortgages for under-construction and off-plan units across the UAE's leading developments.",
      "We work with lenders who understand developer payment schedules and handover timelines.",
    ],
    highlights: [
      "Finance for off-plan and under-construction units",
      "Solutions aligned to developer payment plans",
      "Support through to handover",
      "Access to developer-partnered lenders",
    ],
    forWho: "Buyers purchasing off-plan or under-construction property.",
  },
  {
    slug: "commercial-mortgages", icon: "building", title: "Commercial Mortgages", interest: "Commercial Mortgages",
    tagline: "Finance offices, retail and commercial units.",
    intro: [
      "Commercial property has different rules to residential — deposits, rates and assessment criteria all vary. Our commercial mortgage specialists finance offices, retail spaces, warehouses and mixed-use units with confidence.",
      "We structure finance for owner-occupiers and commercial investors alike.",
    ],
    highlights: [
      "Offices, retail, warehouses and commercial units",
      "Owner-occupier and investor solutions",
      "Competitive commercial rates",
      "Specialist assessment of business income",
    ],
    forWho: "Businesses and investors financing non-residential property.",
  },
];

export const getService = (slug: string) => serviceDetails.find((s) => s.slug === slug);

// ---------- Process steps ----------
export const steps: Trio[] = [
  ["users", "Consultation", "We understand your needs, goals and assess your situation."],
  ["file-text", "Documentation", "Simple & quick — we guide you through the paperwork."],
  ["search", "Application & Review", "Reviewed by our experts and lending partners."],
  ["badge-check", "Pre-Approval", "We secure your pre-approval with the best loan terms."],
  ["home", "Disbursement", "Loan disbursed and you achieve your goals!"],
  ["trending-up", "Invest & Grow", "Start earning rental income and build wealth."],
];

// ---------- Why Choose Xperts (merged from difficult cases) ----------
export const difficult: Trio[] = [
  ["gauge", "Low Credit Score", "We work with multiple lenders to find the right solution."],
  ["file-x", "Previously Declined", "Declined by your bank or another broker? We can help."],
  ["briefcase", "Self-Employed / Irregular Income", "Specialized products designed for your unique situation."],
  ["coins", "High Existing Debts", "We structure solutions that improve your approval chances."],
  ["users", "Multiple Commitments", "Too many financial commitments? We find a way."],
  ["layers-3", "Complex Financial Situations", "No matter how complex, our experts get it done."],
];

// ---------- Customer categories (About / client tabs) ----------
export const clients: Client[] = [
  ["Employed", "user-check", "Solutions for salaried professionals", "Designed for salaried professionals looking to purchase a home, invest in property, refinance an existing mortgage, or transfer their current home loan. We help employed individuals secure competitive mortgage solutions with a smooth and hassle-free process.",
    ["Competitive rates for salaried buyers", "Refinance & home-loan transfers", "Smooth, hassle-free process"]],
  ["Self-Employed", "briefcase", "Tailored for entrepreneurs & owners", "Tailored mortgage solutions for entrepreneurs, business owners, freelancers, and professionals. We understand complex income structures and help secure the right financing solution.",
    ["Built for complex income structures", "Bank-statement based assessment", "Solutions for owners & freelancers"]],
  ["Investors", "line-chart", "Maximize your returns", "Whether purchasing your first investment property or expanding your portfolio, we provide mortgage solutions designed to maximize investment opportunities and long-term returns.",
    ["Buy-to-let & portfolio finance", "High loan amounts", "Long-term return strategy"]],
  ["NRIs", "globe", "Invest in UAE real estate from abroad", "Specialized mortgage solutions for Non-Resident Indians looking to invest in UAE real estate with end-to-end support throughout the financing process.",
    ["Non-resident mortgages", "Remote documentation", "End-to-end financing support"]],
];

// ---------- Documents required (expandable accordion) ----------
export const documents: DocCategory[] = [
  {
    key: "employed", emoji: "👔", icon: "user-check", label: "Employed",
    groups: [
      { group: "Personal Documents (KYC)", items: ["Passport Copy", "Visa Copy", "Emirates ID", "Passport Photograph"] },
      { group: "Income Documents", items: ["Salary Certificate", "Last 6 Months Bank Statements", "Payslips"] },
      { group: "Employment Documents", items: ["Employment Confirmation Letter", "Labour Contract (if applicable)"] },
      { group: "Additional Documents", items: ["Property Documents", "Liability Letter (if applicable)"] },
    ],
  },
  {
    key: "self-employed", emoji: "💼", icon: "briefcase", label: "Self-Employed",
    groups: [
      { group: "Personal Documents (KYC)", items: ["Passport Copy", "Visa Copy", "Emirates ID"] },
      { group: "Income Documents", items: ["Personal Bank Statements", "Business Bank Statements"] },
      { group: "Business Documents", items: ["Trade License", "MOA", "Shareholder Certificate"] },
      { group: "Additional Documents", items: ["Audited Financial Statements", "VAT Returns", "Liability Statements"] },
    ],
  },
  {
    key: "investors", emoji: "📈", icon: "line-chart", label: "Investors",
    groups: [
      { group: "Personal Documents (KYC)", items: ["Passport Copy", "Visa Copy", "Emirates ID"] },
      { group: "Income Documents", items: ["Salary/Business Income Proof", "Bank Statements"] },
      { group: "Investment Documents", items: ["Property Portfolio", "Tenancy Contracts", "Valuation Reports"] },
      { group: "Additional Documents", items: ["Liability Statements"] },
    ],
  },
  {
    key: "nris", emoji: "🌍", icon: "globe", label: "NRIs",
    groups: [
      { group: "Personal Documents (KYC)", items: ["Passport Copy", "Overseas Address Proof", "Photograph"] },
      { group: "Income Documents", items: ["Salary Certificate", "Bank Statements", "Payslips"] },
      { group: "Employment/Business Documents", items: ["Employment Contract", "Company Registration Documents"] },
      { group: "Additional Documents", items: ["Credit Report", "Existing Loan Statements", "Property Booking Documents"] },
    ],
  },
];

// ---------- Mission & Vision ----------
export const missionVision = {
  mission:
    "To simplify the mortgage process and provide clients with expert guidance, transparent advice, and tailored financing solutions that help them achieve their property goals.",
  vision:
    "To become the most trusted mortgage advisory firm in the UAE by delivering exceptional service, innovative solutions, and long-term value to our clients.",
};

// ---------- Our Team ----------
// Photos live in /public/images/team/. Members without a photo show an initials avatar.
export const team: Member[] = [
  {
    name: "Hashim",
    role: "Operations Executive",
    photo: "/images/team/hashim-avatar.jpg",
    bio: "Keeps every application moving smoothly — coordinating documentation and lenders so your mortgage process stays fast and stress-free.",
    email: "hashim@xpertshome.com",
  },
  {
    name: "Prakash",
    role: "Mortgage Advisor",
    photo: "/images/team/prakash-avatar.jpg",
    bio: "Guides clients to the right mortgage solution with expert, honest advice tailored to your goals and situation.",
    email: "prakash@xpertshome.com",
  },
  {
    name: "Sunil",
    role: "Business Development Manager",
    email: "sunil@xpertshome.com",
  },
];

// ---------- Insights (blog) categories ----------
export const insightCategories: Trio[] = [
  ["lightbulb", "Mortgage Tips", "Practical advice to strengthen your application and secure a better rate."],
  ["home", "Home Buying Guides", "Step-by-step guidance for buying property in the UAE."],
  ["trending-up", "UAE Property Market Updates", "The latest on prices, demand and opportunities across the market."],
  ["badge-check", "Mortgage Eligibility", "Understand what lenders look for and how to qualify."],
  ["refresh-cw", "Mortgage Refinancing", "When and how to refinance for lower payments and better terms."],
  ["line-chart", "Investment Property Finance", "Financing strategies to grow your property portfolio."],
  ["key-round", "First-Time Home Buyer Advice", "Everything first-time buyers need to know before they apply."],
  ["percent", "Bank Interest Rate Updates", "Track rate movements from leading UAE banks."],
  ["building-2", "Real Estate Insights", "Expert perspectives on the UAE real estate landscape."],
];

// ---------- Insight articles (individual insight pages) ----------
// NOTE FOR CLIENT REVIEW: the rate/market figures below are intentionally
// general. Anything time-sensitive (current rates, market stats) should be
// reviewed and updated by Xperts before publishing.
export type InsightSection = { heading?: string; body?: string; bullets?: string[] };
export type InsightArticle = {
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  readTime: string;
  intro: string;
  sections: InsightSection[];
};

export const insightArticles: InsightArticle[] = [
  {
    slug: "mortgage-tips", icon: "lightbulb", title: "Mortgage Tips",
    tagline: "Practical advice to strengthen your application and secure a better rate.",
    readTime: "4 min read",
    intro:
      "A little preparation goes a long way. These are the habits and steps that consistently help our clients secure approval — and better rates — in the UAE.",
    sections: [
      { heading: "Protect your credit score", body: "Lenders pull your AECB credit report. Pay bills and existing loans on time, keep credit-card balances low, and avoid applying for new credit in the months before your mortgage." },
      { heading: "Keep your documents ready", bullets: ["Passport, visa and Emirates ID", "6 months of bank statements", "Salary certificate or trade licence", "Proof of down-payment funds"] },
      { heading: "Manage your debt-to-income ratio", body: "UAE lenders cap your total monthly repayments at roughly 50% of income. Clearing small loans or credit cards before applying can meaningfully increase how much you can borrow." },
      { heading: "Get pre-approved first", body: "A pre-approval tells you your exact budget and makes you a stronger buyer when you negotiate. It's free and valid for up to 60 days with most banks." },
    ],
  },
  {
    slug: "home-buying-guides", icon: "home", title: "Home Buying Guides",
    tagline: "Step-by-step guidance for buying property in the UAE.",
    readTime: "5 min read",
    intro:
      "Buying property in the UAE is straightforward once you know the steps. Here's the journey from start to keys in hand.",
    sections: [
      { heading: "1. Set your budget", body: "Factor in your down payment (minimum 20% for residents on a first property under AED 5M), plus around 6–7% in transaction costs (DLD fee, agency, mortgage registration)." },
      { heading: "2. Get pre-approved", body: "Secure a mortgage pre-approval so you know exactly what you can afford before you start viewing." },
      { heading: "3. Find your property & sign the MOU", body: "Once you've chosen, you and the seller sign a Memorandum of Understanding (Form F) and you pay a deposit, typically 10%." },
      { heading: "4. Apply, value & approve", body: "The bank values the property and issues a final offer letter. We manage the lender relationship throughout." },
      { heading: "5. Transfer at the DLD", body: "At the Dubai Land Department (or relevant authority) the title transfers to you and the mortgage is registered. You get the keys." },
    ],
  },
  {
    slug: "uae-property-market-updates", icon: "trending-up", title: "UAE Property Market Updates",
    tagline: "The latest on prices, demand and opportunities across the market.",
    readTime: "3 min read",
    intro:
      "The UAE property market remains one of the most active in the region, supported by strong population growth, investor-friendly visa reforms and continued infrastructure investment.",
    sections: [
      { heading: "What's driving demand", bullets: ["Golden Visa and long-term residency reforms", "Population and job growth across Dubai and Abu Dhabi", "Strong rental yields compared to global cities"] },
      { heading: "What it means for buyers", body: "Sustained demand supports property values, but also makes pre-approval and fast financing important so you can act when the right property appears." },
      { body: "For the latest figures tailored to your area and budget, speak to our team — we track lender appetite and pricing week to week." },
    ],
  },
  {
    slug: "mortgage-eligibility", icon: "badge-check", title: "Mortgage Eligibility",
    tagline: "Understand what lenders look for and how to qualify.",
    readTime: "4 min read",
    intro:
      "Eligibility comes down to a few clear factors. Knowing them in advance lets you fix any gaps before you apply.",
    sections: [
      { heading: "What lenders assess", bullets: ["Age (typically 21–65 at loan maturity)", "Stable, verifiable income", "Length of employment or business trading history", "Credit history (AECB score)", "Existing financial commitments"] },
      { heading: "Typical income requirements", body: "Most UAE banks look for a minimum monthly salary in the region of AED 10,000–15,000 for salaried applicants, though this varies by lender and product." },
      { heading: "Self-employed applicants", body: "Business owners are assessed on bank statements, trade licence and often audited financials. We specialise in matching complex income profiles to the right lender." },
    ],
  },
  {
    slug: "mortgage-refinancing", icon: "refresh-cw", title: "Mortgage Refinancing",
    tagline: "When and how to refinance for lower payments and better terms.",
    readTime: "4 min read",
    intro:
      "Refinancing can save you a significant amount — but only when the timing and numbers are right. Here's how to tell.",
    sections: [
      { heading: "When refinancing makes sense", bullets: ["Your current rate is above today's market rates", "Your fixed-rate period is ending and reverting to a higher variable rate", "You want to release equity or change your tenure"] },
      { heading: "Watch the costs", body: "Early-settlement fees (capped at 1% or AED 10,000, whichever is lower, in the UAE), new processing fees and valuation costs all factor in. We calculate your true net saving before recommending a move." },
      { heading: "How we help", body: "We compare your current loan against live offers from 20+ banks and only suggest refinancing when it leaves you genuinely better off." },
    ],
  },
  {
    slug: "investment-property-finance", icon: "line-chart", title: "Investment Property Finance",
    tagline: "Financing strategies to grow your property portfolio.",
    readTime: "4 min read",
    intro:
      "Financing investment property is different from financing a home. The right structure protects your cash flow while letting your portfolio grow.",
    sections: [
      { heading: "Key differences", bullets: ["Down payments are often higher for investment property", "Rental income can support your eligibility", "Lenders assess yield and location more closely"] },
      { heading: "Strategies that work", body: "Spreading finance across lenders, timing purchases around rate cycles, and keeping reserves for void periods all strengthen a portfolio. We help you plan the financing around your investment goals." },
      { heading: "Buy-to-let vs. commercial", body: "Residential buy-to-let and commercial property have very different rules — we'll point you to the right product for your strategy." },
    ],
  },
  {
    slug: "first-time-home-buyer-advice", icon: "key-round", title: "First-Time Home Buyer Advice",
    tagline: "Everything first-time buyers need to know before they apply.",
    readTime: "5 min read",
    intro:
      "Buying your first home is exciting — and a little daunting. Here's what every first-time buyer in the UAE should know.",
    sections: [
      { heading: "Save for more than the deposit", body: "Beyond your 20% down payment, budget for around 6–7% in fees: DLD transfer (4%), agency commission (2%), mortgage registration and valuation." },
      { heading: "Understand fixed vs. variable", body: "Fixed rates give you predictable payments for an initial period; variable rates move with the market. We'll explain which suits your situation." },
      { heading: "Don't stretch to the maximum", body: "Borrow what's comfortable, not the absolute maximum a bank offers. Leaving headroom protects you against rate rises and life changes." },
      { heading: "Get expert help — it's free", body: "Our advice costs you nothing; we're paid by the lender. You get expert guidance and access to better rates at no extra cost." },
    ],
  },
  {
    slug: "bank-interest-rate-updates", icon: "percent", title: "Bank Interest Rate Updates",
    tagline: "Track rate movements from leading UAE banks.",
    readTime: "3 min read",
    intro:
      "UAE mortgage rates are influenced by the EIBOR benchmark, which broadly follows US Federal Reserve policy. Understanding the direction of rates helps you decide between fixed and variable.",
    sections: [
      { heading: "How UAE rates work", body: "Variable mortgage rates are usually quoted as EIBOR plus a margin. When EIBOR moves, your variable rate moves with it after the fixed period ends." },
      { heading: "Fixed vs. variable in a changing market", bullets: ["Fixing locks in certainty if rates are expected to rise", "Variable can be cheaper when rates are falling", "Many buyers fix for 1–5 years, then review"] },
      { body: "For today's best available rates across 20+ banks, contact our team — we monitor lender pricing continuously." },
    ],
  },
  {
    slug: "real-estate-insights", icon: "building-2", title: "Real Estate Insights",
    tagline: "Expert perspectives on the UAE real estate landscape.",
    readTime: "3 min read",
    intro:
      "Beyond the numbers, smart property decisions come from understanding the market's direction and your own goals.",
    sections: [
      { heading: "Location still leads", body: "Established communities with strong rental demand and good infrastructure tend to hold value best — an important factor when financing with a long-term mortgage." },
      { heading: "Off-plan vs. ready", body: "Off-plan can offer attractive payment plans and entry prices; ready property gives immediate rental income. Each needs a different financing approach." },
      { heading: "Think total cost, not just price", body: "Service charges, financing costs and resale liquidity all matter. We help you weigh the full picture before you commit." },
    ],
  },
];

export const getInsight = (slug: string) => insightArticles.find((a) => a.slug === slug);

// ---------- Mortgage basics (Insights accordion) ----------
export const basics: Pair[] = [
  ["What is a mortgage?", "A mortgage is a loan from a bank or financial institution to help you buy or invest in a property or asset, repaid over an agreed period."],
  ["Loan to Value (LTV)", "Loan to Value is the percentage of the property's value that a lender will finance. In the UAE this is typically up to 80% for residents on a first property, with the rest paid as a down payment."],
  ["Prepayments", "A prepayment is an extra payment made towards your loan on top of your regular installment. It reduces your outstanding balance and the total interest you pay over the tenure."],
  ["Full Closure", "Full closure (or settlement) is paying off your entire outstanding mortgage balance before the end of the tenure, closing the loan completely. Early-settlement fees may apply."],
  ["First Mortgage", "A first mortgage is the primary loan secured against a property. It holds first priority over any other loans taken against the same property."],
  ["Second Mortgage", "A second mortgage is an additional loan taken against a property that already has a first mortgage, allowing you to borrow against your built-up equity."],
  ["Mortgage Based on Rental Income", "Some lenders allow rental income from an investment property to be considered when assessing your eligibility, helping investors qualify for larger or additional finance."],
  ["Commercial Mortgage", "A commercial mortgage finances non-residential property such as offices, retail units and warehouses. Terms, deposits and rates differ from residential mortgages."],
];

// ---------- FAQs ----------
export const faqs: Pair[] = [
  ["What is a mortgage?", "A mortgage is a loan from a bank or financial institution to help you buy or invest in a property or asset, repaid over an agreed period."],
  ["What is the interest rate?", "The interest rate is the cost of borrowing money, expressed as a percentage of your loan. It can be fixed or variable depending on the product."],
  ["What is tenure?", "Tenure is the period of time you have to repay your loan. A longer tenure lowers your monthly payment but increases total interest paid."],
  ["What is a down payment?", "The down payment is the initial amount you pay upfront towards the purchase. In the UAE this is typically 15–25% of the property value."],
  ["What is EMI?", "EMI (Equated Monthly Installment) is a fixed monthly payment that includes both principal and interest, keeping your repayments predictable."],
];

// ---------- Careers ----------
export const careerValues: Trio[] = [
  ["trending-up", "Grow With Us", "Clear career paths, mentorship and continuous training in a fast-growing firm."],
  ["hand-coins", "Rewarding Package", "Competitive salary, attractive commissions and performance incentives."],
  ["users", "Great Team", "Collaborative, supportive culture where your contribution truly matters."],
  ["badge-check", "Make an Impact", "Help clients achieve their property dreams with expert, honest advice."],
];

export const openings: Trio[] = [
  ["user-check", "Mortgage Advisor", "Full-time · Dubai — Guide clients to the right mortgage solution and manage applications end-to-end."],
  ["line-chart", "Business Development Executive", "Full-time · Dubai — Build relationships with developers, agents and clients to grow our pipeline."],
  ["briefcase", "Processing Officer", "Full-time · Dubai — Manage documentation and liaise with banks to secure fast approvals."],
];

// ---------- Tips ----------
export const tips: Trio[] = [
  ["gauge", "Maintain a good credit score", "A higher score improves your approval chances and unlocks better rates."],
  ["file-check", "Keep your documents ready", "Having the right documents on hand saves time and speeds up approval."],
  ["bar-chart-3", "Manage your debt wisely", "Lowering existing debt can meaningfully increase your eligibility."],
  ["calendar-clock", "Choose the right tenure", "Pick a tenure that balances your monthly budget and total cost."],
  ["wallet", "Plan your finances", "Plan your EMI comfortably within your monthly budget for peace of mind."],
];

export const trust: Trio[] = [
  ["hand-coins", "Competitive Rates", "Get the best rates from top banks."],
  ["user-check", "Expert Guidance", "Personalized advice every step of the way."],
  ["zap", "Quick Approval", "Fast & hassle-free mortgage process."],
  ["layout-grid", "Wide Range of Options", "Solutions for residents, expats & investors."],
];

export const easy: Trio[] = [
  ["zap", "Quick Approval", "Fast, hassle-free decisions."],
  ["badge-percent", "Competitive Rates", "Low interest-rate options."],
  ["hand-coins", "High Loan Amounts", "Borrow more, achieve more."],
  ["clock", "Hassle-Free Process", "Simple from start to finish."],
];

// ---------- Navigation ----------
export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Why Choose Xperts", href: "/why-xperts" },
  { label: "Services", href: "/services" },
  { label: "EMI Calculator", href: "/calculator" },
  { label: "Process", href: "/process" },
  { label: "Careers", href: "/careers" },
  { label: "Insights", href: "/insights" },
  { label: "Contact Us", href: "/contact" },
];

// ---------- Contact ----------
export const contact = {
  phone: "+971 50 601 8455",        // mobile — also used for WhatsApp
  landline: "04 335 789",           // office landline
  whatsapp: "971506018455",         // digits only, international format (no + or spaces)
  email: "info@xpertshome.com",
  location: "Tejasvi Business Center, Office 104, Umm Hurair Rd, Oud Metha, Bur Dubai",
  // Short Google Maps link (opens the exact office location).
  mapLink: "https://maps.app.goo.gl/jWh2onNDhB36haBB8",
  // Embeddable map (no API key required).
  mapEmbed:
    "https://www.google.com/maps?q=Xperts%20Home%20Mortgage%20Tejasvi%20Business%20Center%20Oud%20Metha%20Dubai&output=embed",
};

// ---------- Social media ----------
export const social = {
  instagram: "https://www.instagram.com/xpertshomemortgage",
  facebook: "https://www.facebook.com/share/1EDMrM6vZb/",
  linkedin: "https://www.linkedin.com/company/xperts-home-mortgage/",
};

// Helper: turn a service/insight title into a URL slug.
export const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Helper: build a WhatsApp click-to-chat link.
export const waLink = (text = "Hi Xperts Home Mortgage, I'd like a free consultation.") =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;
