import {
	Home,
	Files,
	ScanFace,
	Mail,
	Building2,
	FileText,
	CircleDollarSign,
	Users,
	Presentation,
} from "lucide-react";

//Admin
export const sidebarItems = [
	{
		title: "Dashboard",
		href: "/admin",
		icon: <Home className="size-6" />,
	},
	{
		title: "Share Templates",
		href: "/admin/templates",
		icon: <Files className="size-6" />,
	},
];

export const notificationContent = [
	{
		title: "New Form Released!!",
		description: "Govt. has released a new form",
		date: "12 May, 2024",
	},
	{
		title: "Form Guidelines Released!!",
		description: "Govt. has released a new form guidelines",
		date: "11 May, 2024",
	},
	{
		title: "Delay in Form Submission!!",
		description: "Govt. has delayed a form submissions",
		date: "10 May, 2024",
	},
	{
		title: "Advisory for Fintech Companies!!",
		description: "Govt. has issued new advisory for Fintech Companies",
		date: "8 May, 2024",
	},
];

export const navItems = [
	{
		title: "Admin",
		icon: <ScanFace className="size-4" />,
		items: [
			{
				title: "Emails",
				href: "/admin/emails",
				icon: <Mail className="size-4" />,
			},
		],
	},
	{
		title: "Incorporation",
		icon: <Building2 className="size-4" />,
		items: [
			{
				title: "Documents",
				href: "/admin/incorporation/documents",
				icon: <FileText className="size-4" />,
			},
			{
				title: "Emails",
				href: "/admin/incorporation/emails",
				icon: <Mail className="size-4" />,
			},
		],
	},
	{
		title: "Annual Return",
		icon: <CircleDollarSign className="size-4" />,
		items: [
			{
				title: "Documents",
				href: "/admin/annual-return/documents",
				icon: <FileText className="size-4" />,
			},
			{
				title: "Emails",
				href: "/admin/annual-return/emails",
				icon: <Mail className="size-4" />,
			},
		],
	},
];

export const incorporationDocumentsContent = [
	{
		id: 1,
		title: "Share Certificates Background",
		href: "#",
	},
	{
		id: 2,
		title: "NNC1",
		href: "/documents/NNC1.pdf",
	},
	{
		id: 3,
		title: "Article of Association (A&A)",
		href: "/documents/AA.pdf",
	},
	{
		id: 4,
		title: "Ordinary Share Agreement",
		href: "/documents/SA.pdf",
	},
	{
		id: 5,
		title: "Preferance Share Agreement",
		href: "/documents/SA.pdf",
	},
	{
		id: 6,
		title: "Minutes",
		href: "/documents/MOM.pdf",
	},
	{
		id: 7,
		title: "IRBR1",
		href: "/documents/IRBR1.pdf",
	},
];

export const incorporationEmailContent = [
	{
		id: 1,
		title: "Invitation Shareholder for Data Entry",
		href: "/admin/incorporation/emails/1",
	},
	{
		id: 2,
		title: "Invitation Director for Data Entry",
		href: "/admin/incorporation/emails/2",
	},
	{
		id: 3,
		title: "OTP for Guest User",
		href: "/admin/incorporation/emails/3",
	},
	{
		id: 4,
		title: "Inform Shareholder for Signature",
		href: "/admin/incorporation/emails/4",
	},
	{
		id: 5,
		title: "Inform Director for Signature",
		href: "/admin/incorporation/emails/5",
	},
	{
		id: 6,
		title: "Inform Guest User for Signature",
		href: "/admin/incorporation/emails/6",
	},
	{
		id: 7,
		title: "Completion for Shareholder",
		href: "/admin/incorporation/emails/7",
	},
	{
		id: 8,
		title: "Completion for Director",
		href: "/admin/incorporation/emails/8",
	},
	{
		id: 9,
		title: "Send the Published link to other 3rd party",
		href: "/admin/incorporation/emails/9",
	},
];

export const StatsInfo = [
	{
		title: "Total Account Users",
		icon: <Users size={28} className="text-muted-foreground" />,
		stat: 0 as number | string,
		description: "Total Account Users Active",
	},
	{
		title: "Total Companies",
		icon: <Building2 size={28} className="text-muted-foreground" />,
		stat: 0 as number | string,
		description: "Total companies registered at ComSec360",
	},
	{
		title: "Total Projects",
		icon: <Presentation size={28} className="text-muted-foreground" />,
		stat: 0 as number | string,
		description: "Total projects registered at ComSec360",
	},
];

// ACCOUNT USER

	// -> Company Info

export const CompanyInfoHoverContent = {
	name: {
		first:
			"A company name may be in English or in Chinese. A company may also adopt both an English name and a Chinese name. Please refer to the 'Guideline on Registration of Company Names for Hong Kong Companies' for the points to note when choosing a company name.",
		second:
			"The company name(s) stated in this Section should be identical to the name(s) stated in the Name Clause of the articles of the company as required under section 81 of the Companies Ordinance. An application for incorporation with errors in the proposed company name(s) may be rejected by the Companies Registry and the lodgement fee paid will not be refunded.",
	},
	type: "A company is a 'private company' if its articles restrict a member's right to transfer shares, limit the number of members to 50, and prohibit any invitation to the public to subscribe for any shares or debentures of the company; and it is not a company limited by guarantee. A company is a 'public company' if it is not a private company and not a company limited by guarantee. Please seek independent legal advice on the choice of an appropriate type of company, if necessary.",
	address:
		" Please provide the code and description of the nature of proposed business of the company in accordance with the categories of business nature which are available from the Companies Registry's website (www.cr.gov.hk). If the company proposes to carry on more than one category of business, please provide the major category.",
	time: "According to sections 5A(1) and 5D(2) of the Business Registration Ordinance (Cap. 310), an applicant for company incorporation must deliver a Notice to Business Registration Office (IRBR1) and the prescribed business registration fee and levy together with this form. Otherwise, the application will be rejected by the Companies Registry",
	presentor:
		"Please complete the Presentor's Reference. Unless the presentor needs to raise a specific issue for the attention of the Companies Registry, no covering letter is required. The Companies Registry will notify the presentor by email or fax to collect the Certificate of Incorporation and Business Registration Certificate in person. A written authorization will be required if the presentor sends a representative to collect the certificates.",
};

export const NatureOfBusinessContent = [
	{
		value: "Crop and animal production, hunting.",
		code: "001",
	},
	{
		value: "Forestry activities",
		code: "002",
	},
	{
		value: "Fishing and aquaculture",
		code: "003",
	},
	{
		value: "Mining of coal and lignite",
		code: "005",
	},
	{
		value: "Extraction of crude petroleum and natural gas",
		code: "006",
	},
	{
		value: "Mining of metal ores",
		code: "007",
	},
	{
		value: "Quarrying and other mining of non-metal ores",
		code: "008",
	},
	{
		value: "Mining support service activities",
		code: "009",
	},
	{
		value: "Manufacture of food products",
		code: "010",
	},
	{
		value: "Manufacture of beverages",
		code: "011",
	},
	{
		value: "Manufacture of tobacco products",
		code: "012",
	},
	{
		value: "Manufacture of textiles",
		code: "013",
	},
	{
		value: "Manufacture of wearing apparel",
		code: "014",
	},
	{
		value: "Manufacture of leather and related products",
		code: "015",
	},
	{
		value:
			"Manufacture of wood and of products of wood and cork, articles of straw and plaiting materials (except furniture and toys)",
		code: "016",
	},
	{
		value: "Manufacture of paper and paper products",
		code: "017",
	},
	{
		value: "Printing and reproduction of recorded media",
		code: "018",
	},
	{
		value: "Manufacture of coke and refined petroleum products",
		code: "019",
	},
	{
		value: "Manufacture of chemicals and chemical products",
		code: "020",
	},
	{
		value:
			"Manufacture of pharmaceuticals, medicinal chemical and botanical products",
		code: "021",
	},
	{
		value:
			"Manufacture of rubber and plastics products (except furniture, toys, sports goods and stationery)",
		code: "022",
	},
	{
		value: "Manufacture of other non-metallic mineral products",
		code: "023",
	},
	{
		value: "Manufacture of basic metals",
		code: "024",
	},
	{
		value:
			"Manufacture of fabricated metal products (except machinery and equipment)",
		code: "025",
	},
	{
		value: "Manufacture of computer, electronic and optical products",
		code: "026",
	},
	{
		value: "Manufacture of electrical equipment",
		code: "027",
	},
	{
		value: "Manufacture of machinery and equipment n.e.c.",
		code: "028",
	},
	{
		value: "Body assembly of motor vehicles",
		code: "029",
	},
	{
		value: "Manufacture of other transport equipment",
		code: "030",
	},
	{
		value: "Manufacture of furniture",
		code: "031",
	},
	{
		value: "Other manufacturing",
		code: "032",
	},
	{
		value: "Repair and installation of machinery and equipment",
		code: "033",
	},
	{
		value: "Electrcity and Gas Supply",
		code: "035",
	},
	{
		value: "Water collection, treatment and supply",
		code: "036",
	},
	{
		value: "Sewerage",
		code: "037",
	},
	{
		value:
			"Waste collection, treatment and disposal activities; materials recovery",
		code: "038",
	},
	{
		value: "Remediation activities and other waste management services",
		code: "039",
	},
	{
		value: "Construction of buildings",
		code: "041",
	},
	{
		value: "Civil engineering",
		code: "042",
	},
	{
		value: "Specialised Construction Activities",
		code: "043",
	},
	{
		value: "Import and export trade ",
		code: "045",
	},
	{
		value: "Wholesale",
		code: "046",
	},
	{
		value: "Retail Trade",
		code: "047",
	},
	{
		value: "Land Transport",
		code: "049",
	},
	{
		value: "Water Transport",
		code: "050",
	},
	{
		value: "Air Transport",
		code: "051",
	},
	{
		value: "Warehousing and support activities for transportation",
		code: "052",
	},
	{
		value: "Postal and courier activities",
		code: "053",
	},
	{
		value: "Short term accommodation activities",
		code: "055",
	},
	{
		value: "Food and beverage service activities",
		code: "056",
	},
	{
		value: "Publishing activities",
		code: "058",
	},
	{
		value:
			"Motion picture, video and television programme production, sound recording and music publishing activities",
		code: "059",
	},
	{
		value: "Programming and broadcasting activities",
		code: "060",
	},
	{
		value: "Telecommunications",
		code: "061",
	},
	{
		value: "Information technology service activities",
		code: "062",
	},
	{
		value: "Information service activities",
		code: "063",
	},
	{
		value:
			"Financial service activities, including investment and holding companies, and the activities of trusts, funds and similar financial entities.",
		code: "064",
	},
	{
		value: "Insurance (including pension funding) ",
		code: "065",
	},
	{
		value: "Activities auxiliary to financial service and insurance activities",
		code: "066",
	},
	{
		value: "Real estate activities",
		code: "068",
	},
	{
		value: "Legal and accounting activities",
		code: "069",
	},
	{
		value:
			"Activities of head offices; management and management consultancy activities",
		code: "070",
	},
	{
		value:
			"Architecture and engineering activities, technical testing and analysis",
		code: "071",
	},
	{
		value: "Scientific research and development",
		code: "072",
	},
	{
		value: "Veterinary activities",
		code: "073",
	},
	{
		value: "Advertising and market research",
		code: "074",
	},
	{
		value: "Other professional, scientific and technical activities",
		code: "075",
	},
	{
		value: "Rental and leasing activities",
		code: "077",
	},
	{
		value: "Employment activities",
		code: "078",
	},
	{
		value: "Travel agency, reservation service and related activities",
		code: "079",
	},
	{
		value: "Security and investigation activities ",
		code: "080",
	},
	{
		value: "Services to buildings and landscape care activities",
		code: "081",
	},
	{
		value:
			"Office administrative, office support and other business support activities",
		code: "082",
	},
	{
		value: "Public administration",
		code: "084",
	},
	{
		value: "Education",
		code: "085",
	},
	{
		value: "Human health activities",
		code: "086",
	},
	{
		value: "Residential care activities",
		code: "087",
	},
	{
		value: "Social work activities without accommodation",
		code: "088",
	},
	{
		value: "Creative and performing arts activities",
		code: "090",
	},
	{
		value: "Libraries, archives, museums and other cultural activities",
		code: "091",
	},
	{
		value: "Activities of amusement parks and theme parks",
		code: "092",
	},
	{
		value: "Sports and other entertainment activities",
		code: "093",
	},
	{
		value: "Activities of membership organisations",
		code: "094",
	},
	{
		value:
			"Repair of motor vehicles, motorcycles, computers, personal and household goods",
		code: "095",
	},
	{
		value: "Other personal service activities",
		code: "096",
	},
	{
		value: "Activities of households as employers of domestic personnel",
		code: "097",
	},
	{
		value:
			"Goods and services producing activities of private households for own use ",
		code: "098",
	},
	{
		value: "Activities of extraterritorial organisations and bodies",
		code: "099",
	},
];

export const shareCapitalRows = [
	{
	  label: "Class of Shares",
	  for: "class",
	},
	{
	  label: "Total Shares Proposed",
	  for: "totalProposed",
	},
	{
	  label: "Currency",
	  for: "currency",
	},
	{
	  label: "Unit Price of Share",
	  for: "unitPrice",
	},
	{
	  label: "Total Amount",
	  for: "total",
	},
	{
	  label: "Total Capital Subscribed",
	  for: "paid",
	},
	{
	  label: "Unpaid Amount",
	  for: "unpaid",
	},
	{
	  label: "Particulars of Rights Attached",
	  for: "rightsAttached",
	},
  ];

export const currencyContent = [
	"HKD",
	"USD",
	"EUR",
	"INR",
	"JPY",
	"GBP",
	"AUD",
	"CAD",
	"CHF",
	"CNY",
	"SEK",
	"NZD",
  ];

  export const shareCapitalContent = [
	{
	  id: 1,
	  class: "Ordinary",
	  totalProposed: 1000,
	  currency: "HKD",
	  unitPrice: 1,
	  total: 1000,
	  paid: 200,
	  unpaid: 800,
	  rightsAttached: "Voting Rights",
	},
  ];