import { service01, service02, service03, result01, result02, people01, people02, people03, logoAirbnb, logoBinance, logoBoldo, logoCoinbase, logoDropbox, logoPresto, check, feather, eye, sun, arrowDown, blogpost01, blogpost02, blogpost03, blogAvatar01, blogAvatar02, blogAvatar03, logoBoldoDark} from "../assets";


export const navLinks = [
    {
        id: "product",
        title: "Product",
    },

    {
        id: "services",
        title: "Services",
    },
    {
        id: "about",
        title: "About",
    },
]


export const clientLogos = [
  {
    id: "client-1",
    logo: logoAirbnb,
  },
  {
    id: "client-2",
    logo: logoBinance,
  },
  {
    id: "client-3",
    logo: logoCoinbase,
  },
  {
    id: "client-4",
    logo: logoDropbox,
  },
  {
    id: "client-5",
    logo: logoPresto,
  },
  {
    id: "client-6",
    logo: logoBoldo,
  },
];

export const services = [
    {
      id: "service01",
      image: service01,
      title: "Cool feature title",
      content: "Learning curve network effects return on investment.",
      label: "Explore page",
      link: ""
    },

    {
      id: "service02",
      image: service02,
      title: "Even cooler feature",
      content: "Learning curve network effects return on investment.",
      label: "Explore page",
      link: ""
    },
    {
      id: "service03",
      image: service03,
      title: "Cool feature title",
      content: "Learning curve network effects return on investment.",
      label: "Explore page",
      link: ""
    },
]


export const results = [
    {
      id: "result01",
      image: result01,
      title: "We connect our customers with the best, and help them keep up-and stay open.",
      items: [
        {
          id: "check01",
          icon: check,
          content: "We connect our customers with the best.",
        },
        {
          id: "check02",
          icon: check,
          content: "Advisor success customer launch party.",
        },
        {
          id: "check03",
          icon: check,
          content: "Business-to-consumer long tail.",
        },
      ]
    },
    {
      id: "result02",
      image: result02,
      title: "We connect our customers with the best, and help them keep up-and stay open.",
      items: [
        {
          id: "feather",
          icon: feather,
          content: "We connect our customers with the best.",
        },
        {
          id: "eye",
          icon: eye,
          content: "Advisor success customer launch party.",
        },
        {
          id: "sun",
          icon: sun,
          content: "Business-to-consumer long tail.",
        },
      ]
    },
]

export const testimonials = [
  { id:"people01",
    content: "“Buyer buzz partner network disruptive non-disclosure agreement business”",
    author: "Albus Dumbledore",
    role: "Manager @ Howarts",
    avatar: people01,
  },
  { id:"people02",
    content: "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
    author: "Severus Snape",
    role: "Manager @ Slytherin",
    avatar: people02,
  },
  { id:"people03",
    content: "“Release facebook responsive web design business model canvas seed money monetization.”",
    author: "Harry Potter",
    role: "Team Leader @ Gryffindor",
    avatar: people03,
  },
]

export const headers = 
{
  mainpromo_header: "Save time by building fast with Boldo Template",
  services_header: "Handshake infographic mass market crowdfunding iteration.",
  services_subheader01: "We connect our customers with the best, and help them keep up-and stay open.",
  services_subheader02: "We connect our customers with the best, and help them keep up-and stay open.",
  testimonials_header: "An enterprise template to ramp up your company website",
  customers_header: "We connect our customers with the best, and help them keep up-and stay open",
  blog_header: "Value proposition accelerator product management venture",
  subscription_header: "An enterprise template to ramp up your company website",
}

export const faq = [
  {
    id:"faq01",
    content: "We connect our customers with the best?",
    icon: arrowDown,
  },
  {
    id:"faq02",
    content: "Android research & development rockstar?",
    icon: arrowDown,
  },
]

export const blogs = [
  {
    id: "blogpost01",
    image: blogpost01,
    category: "Category",
    date: "November 22, 2021",
    content: "Pitch termsheet backing validation focus release.",
    author: {
      avatar: blogAvatar01,
      name: "Chandler Bing",
    },
  },
  {
    id: "blogpost02",
    image: blogpost02,
    category: "Category",
    date: "November 22, 2021",
    content: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    author: {
      avatar: blogAvatar02,
      name: "Rachel Green",
    },
  },
  {
    id: "blogpost03",
    image: blogpost03,
    category: "Category",
    date: "November 22, 2021",
    content: "Beta prototype sales iPad gen-z marketing network effects value proposition",
    author: {
      avatar: blogAvatar03,
      name: "Monica Geller",
    },
  },

]

export const footer = {
  icon: logoBoldoDark,
  content: "Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.",
  rights: "All rights reserved.",
  navigation: [
    {
      id: "Landings",
      navheader: "Landings",
      navlinks: ["Home", "Products", "Services"],
    },
    {
      id: "Company",
      navheader: "Company",
      navlinks: ["Home", "Careers", "Services"],
    },
    {
      id: "Resources",
      navheader: "Resources",
      navlinks: ["Blog", "Products", "Services"],
    },
  ]    
}
