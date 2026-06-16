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
export type Member = { name: string; role: string; bio: string; email?: string; phone?: string };

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
// NOTE: Replace names, roles, bios and photos with the real team details.
// Drop photos into /public/images/team/<file>.jpg and add a `photo` field if desired.
export const team: Member[] = [
  {
    name: "Team Member One",
    role: "Managing Director",
    bio: "Leads Xperts Home Mortgage with over 15 years in UAE property finance, guiding clients to the right solution for every goal.",
    email: "info@xpertshome.com",
  },
  {
    name: "Team Member Two",
    role: "Senior Mortgage Advisor",
    bio: "Specializes in complex and self-employed cases, turning challenging applications into approvals with the right lender.",
    email: "info@xpertshome.com",
  },
  {
    name: "Team Member Three",
    role: "Investment & Buy-to-Let Specialist",
    bio: "Helps investors and NRIs structure portfolio finance that maximizes returns across the Dubai property market.",
    email: "info@xpertshome.com",
  },
  {
    name: "Team Member Four",
    role: "Client Relations Manager",
    bio: "Your point of contact from first enquiry to disbursement, keeping every step transparent, fast and stress-free.",
    email: "info@xpertshome.com",
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
// TODO: replace phone & whatsapp with the official Xperts Home Mortgage numbers.
export const contact = {
  phone: "+971 4 000 0000",
  whatsapp: "971500000000", // digits only, international format (no + or spaces)
  email: "info@xpertshome.com",
  location: "Dubai, United Arab Emirates",
};

// Helper: build a WhatsApp click-to-chat link.
export const waLink = (text = "Hi Xperts Home Mortgage, I'd like a free consultation.") =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;
