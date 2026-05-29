// ============================================================
// XPERTS MORTGAGE — shared content data
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

export const services: Trio[] = [
  ["home", "Home Loan", "Buy your dream home with the best financing options for ready-to-move-in property."],
  ["refresh-cw", "Refinance Loan", "Lower your interest rate and reduce your monthly payments."],
  ["hammer", "Off-Plan Property", "Flexible financing solutions for under-construction properties."],
  ["key-round", "Buy-to-Let Mortgage", "Grow your investment portfolio and earn rental income with ease."],
  ["piggy-bank", "Equity Release", "Unlock the value of your property for your next move."],
  ["building", "Commercial Property", "Finance offices, retail spaces and commercial units."],
  ["user-round", "Personal Loan", "Quick financing for your personal needs and life goals."],
  ["briefcase", "Business Loan", "Fuel your business growth with smart financing solutions."],
  ["car", "Vehicle Loan", "Drive your dreams with competitive vehicle financing."],
  ["layers", "Debt Consolidation", "Combine your debts into one easy monthly payment."],
  ["trending-up", "Investment Property", "Finance property for high rental returns and capital growth."],
  ["building-2", "Residential Mortgage", "Apartments, villas or townhouses — across Dubai."],
];

export const steps: Trio[] = [
  ["users", "Consultation", "We understand your needs, goals and assess your situation."],
  ["file-text", "Documentation", "Simple & quick — we guide you through the paperwork."],
  ["search", "Application & Review", "Reviewed by our experts and lending partners."],
  ["badge-check", "Approval", "We get you quick approval with the best loan terms."],
  ["home", "Disbursement", "Loan disbursed and you achieve your goals!"],
  ["trending-up", "Invest & Grow", "Start earning rental income and build wealth."],
];

export const difficult: Trio[] = [
  ["gauge", "Low Credit Score", "We work with multiple lenders to find the right solution."],
  ["file-x", "Previously Declined", "Declined by your bank or another broker? We can help."],
  ["briefcase", "Self-Employed / Irregular Income", "Specialized products designed for your unique situation."],
  ["coins", "High Existing Debts", "We structure solutions that improve your approval chances."],
  ["users", "Multiple Commitments", "Too many financial commitments? We find a way."],
  ["layers-3", "Complex Financial Situations", "No matter how complex, our experts get it done."],
];

export const clients: Client[] = [
  ["Families", "heart-handshake", "Building a better future together", "We help families find the perfect home with financing that fits your budget and your life stage.",
    ["Best rates for first-time buyers", "Family-friendly tenure options", "End-to-end guidance"]],
  ["Self-Employed", "user-cog", "We understand your unique income", "Irregular income shouldn't block your goals — we have specialized products built for you.",
    ["Solutions for variable income", "Bank statement-based assessment", "Higher approval success rate"]],
  ["Business Owners", "briefcase", "Powering your business growth", "From commercial property to business loans, we fund your next stage of expansion.",
    ["Commercial property finance", "Business growth funding", "Flexible structures"]],
  ["Investors", "line-chart", "Smart financing for greater returns", "Leverage Dubai's 6–8% rental yields and tax-free income with confident, structured financing.",
    ["Buy-to-let & off-plan finance", "High loan amounts", "Portfolio strategy support"]],
  ["Expats & NRIs", "globe", "Tailored solutions wherever you are", "Non-resident? We make investing in Dubai property straightforward and secure.",
    ["Non-resident mortgages", "Remote documentation", "Trusted, investor-friendly process"]],
];

export const faqs: Pair[] = [
  ["What is a mortgage?", "A mortgage is a loan from a bank or financial institution to help you buy or invest in a property or asset, repaid over an agreed period."],
  ["What is the interest rate?", "The interest rate is the cost of borrowing money, expressed as a percentage of your loan. It can be fixed or variable depending on the product."],
  ["What is tenure?", "Tenure is the period of time you have to repay your loan. A longer tenure lowers your monthly payment but increases total interest paid."],
  ["What is a down payment?", "The down payment is the initial amount you pay upfront towards the purchase. In the UAE this is typically 15–25% of the property value."],
  ["What is EMI?", "EMI (Equated Monthly Installment) is a fixed monthly payment that includes both principal and interest, keeping your repayments predictable."],
];

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

export const nav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Why Dubai", href: "/invest" },
  { label: "Calculator", href: "/calculator" },
  { label: "Process", href: "/process" },
  { label: "Difficult Cases", href: "/difficult-cases" },
  { label: "About", href: "/about" },
  { label: "Learn", href: "/learn" },
];

export const contact = {
  phone: "+971 4 000 0000",
  email: "hello@xpertsmortgage.ae",
  location: "Dubai, United Arab Emirates",
};
