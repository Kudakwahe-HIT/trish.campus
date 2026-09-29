export type ApplicationStatus = "new" | "review" | "approved" | "rejected";

export type Application = {
  id: string;
  applicant: string;
  programme: string;
  school: string;
  applicationType: "Undergraduate" | "Postgraduate";
  nationality: string;
  submitted: string;
  status: ApplicationStatus;
  paymentStatus: "Paid" | "Pending";
  documentStatus: "Complete" | "Pending";
};

export const APPLICATIONS: Application[] = [
  {
    id: "HIT-001284",
    applicant: "Tendai Moyo",
    programme: "Computer Science",
    school: "School of Computing",
    applicationType: "Undergraduate",
    nationality: "Zimbabwean",
    submitted: "29 Sep 2026",
    status: "review",
    paymentStatus: "Paid",
    documentStatus: "Pending",
  },
  {
    id: "HIT-001283",
    applicant: "Brian Chirwa",
    programme: "Pharmacy",
    school: "School of Health Sciences",
    applicationType: "Undergraduate",
    nationality: "Zambian",
    submitted: "29 Sep 2026",
    status: "new",
    paymentStatus: "Pending",
    documentStatus: "Pending",
  },
  {
    id: "HIT-001282",
    applicant: "Nyasha Dube",
    programme: "Software Engineering",
    school: "School of Computing",
    applicationType: "Undergraduate",
    nationality: "Zimbabwean",
    submitted: "28 Sep 2026",
    status: "approved",
    paymentStatus: "Paid",
    documentStatus: "Complete",
  },
  {
    id: "HIT-001281",
    applicant: "Rutendo Mafuta",
    programme: "Business Information Systems",
    school: "School of Business",
    applicationType: "Undergraduate",
    nationality: "Zimbabwean",
    submitted: "28 Sep 2026",
    status: "review",
    paymentStatus: "Paid",
    documentStatus: "Complete",
  },
  {
    id: "HIT-001280",
    applicant: "Farai Sithole",
    programme: "Electronic Engineering",
    school: "School of Engineering",
    applicationType: "Undergraduate",
    nationality: "Mozambican",
    submitted: "27 Sep 2026",
    status: "rejected",
    paymentStatus: "Paid",
    documentStatus: "Complete",
  },
  {
    id: "HIT-001279",
    applicant: "Chiedza Ncube",
    programme: "Applied Biology",
    school: "School of Applied Sciences",
    applicationType: "Undergraduate",
    nationality: "Zimbabwean",
    submitted: "27 Sep 2026",
    status: "new",
    paymentStatus: "Pending",
    documentStatus: "Pending",
  },
  {
    id: "HIT-001278",
    applicant: "Tapiwa Marimo",
    programme: "Information Technology",
    school: "School of Computing",
    applicationType: "Postgraduate",
    nationality: "South African",
    submitted: "26 Sep 2026",
    status: "review",
    paymentStatus: "Paid",
    documentStatus: "Pending",
  },
  {
    id: "HIT-001277",
    applicant: "Kudzai Chikafu",
    programme: "Architecture",
    school: "School of Engineering",
    applicationType: "Undergraduate",
    nationality: "Zimbabwean",
    submitted: "26 Sep 2026",
    status: "approved",
    paymentStatus: "Paid",
    documentStatus: "Complete",
  },
  {
    id: "HIT-001276",
    applicant: "Simbarashe Gumbo",
    programme: "Pharmacy",
    school: "School of Health Sciences",
    applicationType: "Undergraduate",
    nationality: "Malawian",
    submitted: "25 Sep 2026",
    status: "rejected",
    paymentStatus: "Pending",
    documentStatus: "Pending",
  },
  {
    id: "HIT-001275",
    applicant: "Anesu Chirinda",
    programme: "Computer Science",
    school: "School of Computing",
    applicationType: "Postgraduate",
    nationality: "Zimbabwean",
    submitted: "25 Sep 2026",
    status: "new",
    paymentStatus: "Pending",
    documentStatus: "Pending",
  },
  {
    id: "HIT-001274",
    applicant: "Vimbai Muzenda",
    programme: "Software Engineering",
    school: "School of Computing",
    applicationType: "Undergraduate",
    nationality: "Zimbabwean",
    submitted: "24 Sep 2026",
    status: "approved",
    paymentStatus: "Paid",
    documentStatus: "Complete",
  },
  {
    id: "HIT-001273",
    applicant: "Blessing Nyathi",
    programme: "Business Information Systems",
    school: "School of Business",
    applicationType: "Undergraduate",
    nationality: "Zambian",
    submitted: "24 Sep 2026",
    status: "review",
    paymentStatus: "Paid",
    documentStatus: "Complete",
  },
];

export const OVERVIEW_STATS = {
  applications: { value: 1284, deltaPct: 12.4 },
  underReview: { value: 342 },
  documentsPending: { value: 87 },
  payments: { value: 1103, deltaPct: 8.2 },
};

export const APPLICATION_ACTIVITY: { label: string; value: number; tone: "neutral" | "warning" | "info" | "good" | "critical" }[] = [
  { label: "Received", value: 1284, tone: "neutral" },
  { label: "Under Review", value: 342, tone: "warning" },
  { label: "Documents pending", value: 87, tone: "info" },
  { label: "Approved", value: 721, tone: "good" },
  { label: "Rejected", value: 42, tone: "critical" },
  { label: "Withdrawn", value: 91, tone: "neutral" },
];

export const APPLICATIONS_OVER_TIME: { month: string; count: number }[] = [
  { month: "Jan", count: 68 },
  { month: "Feb", count: 82 },
  { month: "Mar", count: 95 },
  { month: "Apr", count: 110 },
  { month: "May", count: 131 },
  { month: "Jun", count: 158 },
  { month: "Jul", count: 206 },
  { month: "Aug", count: 268 },
  { month: "Sep", count: 166 },
];
