import { Home, Files, ScanFace, Mail, Building2, FileText, CircleDollarSign, Users, Presentation} from "lucide-react";
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
        href: '/admin/emails',
        icon: <Mail className="size-4" />
      }
    ]
  },
  {
    title: "Incorporation",
    icon: <Building2 className="size-4" />,
    items: [
      {
        title: "Documents",
        href: "/admin/incorporation/documents",
        icon: <FileText className="size-4" />
      },
      {
        title: "Emails",
        href: "/admin/incorporation/emails",
        icon: <Mail className="size-4" />
      },
    ]
  },
  {
    title: "Annual Return",
    icon: <CircleDollarSign className="size-4" /> ,
    items: [
      {
        title: "Documents",
        href: "/admin/annual-return/documents",
        icon: <FileText className="size-4" />
      },
      {
        title: "Emails",
        href: "/admin/annual-return/emails",
        icon: <Mail className="size-4" />
      },
    ]
  }
];

export const incorporationDocumentsContent = [
  {
    id: 1,
    title: "Share Certificates Background",
    href: "/templates"
  },
  {
    id: 2,
    title: "NNC1",
    href: "/documents/NNC1.pdf"
  },
  {
    id: 3,
    title: "Article of Association (A&A)",
    href: "/documents/AA.pdf"
  },
  {
    id: 4,
    title: "Ordinary Share Agreement",
    href: "/documents/SA.pdf"
  },
  {
    id: 5,
    title: "Preferance Share Agreement",
    href: "/documents/PSA.pdf"
  },
  {
    id: 6,
    title: "Minutes",
    href: "/documents/MOM.pdf"
  },
  {
    id: 7,
    title: "IRBRI",
    href: "/documents/IRBRI.pdf"
  }
];

export const incorporationEmailContent = [
  {
    id: 1,
    title: "Invitation Shareholder for Data Entry",
    href: "/admin/incorporation/emails/1"
  },
  {
    id: 2,
    title: "Invitation Director for Data Entry",
    href: "/admin/incorporation/emails/2"
  },
  {
    id: 3,
    title: "OTP for Guest User",
    href: "/admin/incorporation/emails/3"
  },
  {
    id: 4,
    title: "Inform Shareholder for Signature",
    href: "/admin/incorporation/emails/4"
  },
  {
    id: 5,
    title: "Inform Director for Signature",
    href: "/admin/incorporation/emails/5"
  },
  {
    id: 6,
    title: "Inform Guest User for Signature",
    href: "/admin/incorporation/emails/6"
  },
  {
    id: 7,
    title: "Completion for Shareholder",
    href: "/admin/incorporation/emails/7"
  },
  {
    id: 8,
    title: "Completion for Director",
    href: "/admin/incorporation/emails/8"
  },
  {
    id: 9,
    title: "Send the Published link to other 3rd party",
    href: "/admin/incorporation/emails/9"
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