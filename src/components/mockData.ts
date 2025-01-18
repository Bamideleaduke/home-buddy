export const footer = [
  { id: "1", text: "About Us", route: "about-us" },
  { id: "2", text: "Find a home", route: "Find a home" },
  { id: "3", text: "Properties", route: "#" },
  { id: "4", text: "Reviews", route: "#" },
  { id: "5", text: "Agents", route: "#" },
  { id: "6", text: "Help", route: "#" },
  { id: "7", text: "Property Insurance", route: "#" },
  { id: "8", text: "FAQs", route: "#" },
  { id: "9", text: "Blogs", route: "#" },
  { id: "10", text: "Contact Us", route: "#" },
  { id: "11", text: "Legal", route: "#" },
  { id: "12", text: "Privacy Policy", route: "#" },
  { id: "13", text: "Copyright", route: "#" },
];

export const socials = [
  { id: "1", text: "Instagram", icon: "/instagram.svg", link: "" },
  { id: "2", text: "LinkedIn", icon: "/linkedin.svg", link: "" },
  { id: "3", text: "Facebook", icon: "/facebook.svg", link: "" },
  { id: "4", text: "X", icon: "/twitter.svg", link: "" },
];

export const sponsors = [
  { id: "1", text: "amazon", icon: "/amazon.svg" },
  { id: "2", text: "microsoft", icon: "/microsoft.svg" },
  { id: "3", text: "airbnb", icon: "/airbnb.svg" },
  { id: "4", text: "google", icon: "/google.svg" },
];
export const offers: OfferType[] = [
  {
    id: "1",
    title: "Budget Friendly",
    text: "We provides a complete service for the sale, purchase or rental of real estate.",
    icon: "/moneyBagIcon.svg",
  },
  {
    id: "2",
    title: "Property Insurance",
    text: "We provides a complete service for the sale, purchase or rental of real estate.",
    icon: "/authorizeIcon.svg",
  },
  {
    id: "3",
    title: "Lowest commission",
    text: "We provides a complete service for the sale, purchase or rental of real estate.",
    icon: "/commissionIcon.svg",
  },
];

export interface OfferType {
  id: string;
  title: string;
  text: string;
  icon: string;
}

export const reviews = [
  {
    id: "1",
    name: "Adamu Grace",
    location: "Huston, Texas",
    content:
      "This company is awesome. I  purchase my dream home, and I couldn't be happier with the experience. ",
    rating: 3,
  },
  {
    id: "2",
    name: "Adamu Grace",
    location: "Huston, Texas",
    content:
      "This company is awesome. I  purchase my dream home, and I couldn't be happier with the experience. ",
    rating: 3,
  },
  {
    id: "3",
    name: "Adamu Grace",
    location: "Huston, Texas",
    content:
      "This company is awesome. I  purchase my dream home, and I couldn't be happier with the experience. ",
    rating: 3,
  },
  {
    id: "4",
    name: "Adamu Grace",
    location: "Huston, Texas",
    content:
      "This company is awesome. I  purchase my dream home, and I couldn't be happier with the experience. ",
    rating: 3,
  },
  {
    id: "5",
    name: "Adamu Grace",
    location: "Huston, Texas",
    content:
      "This company is awesome. I  purchase my dream home, and I couldn't be happier with the experience. ",
    rating: 3,
  },
  {
    id: "6",
    name: "Adamu Grace",
    location: "Huston, Texas",
    content:
      "This company is awesome. I  purchase my dream home, and I couldn't be happier with the experience. ",
    rating: 3,
  },
];

// About
export const whatWeDo = [
  {
    id: "1",
    title: "Buy a home",
    text: "Over 1 million+ property available on the website, we can match you with a house you will",
    icon: "/moneyBagIcon.svg",
    href: "#",
  },
  {
    id: "2",
    title: "Rent a home",
    text: "Over 1 million+ property available on the website, we can match you with a house you will",
    icon: "/authorizeIcon.svg",
    href: "#",
  },
  {
    id: "3",
    title: "Sell a home",
    text: "Over 1 million+ property available on the website, we can match you with a house you will",
    icon: "/commissionIcon.svg",
    href: "#",
  },
];
export const team = [
  {
    id: "1",
    name: "Ayanlowo Gabriel",
    role: "House  Agent",
    icon: "/team/member1.svg",
    href: "#",
  },
  {
    id: "2",
    name: "Ayanlowo Gabriel",
    role: "Rent a home",
    icon: "/team/member2.svg",
    href: "#",
  },
  {
    id: "3",
    name: "Ayanlowo Gabriel",
    role: "Sell a home",
    icon: "/team/member3.svg",
    href: "#",
  },
];

export const properties = [
  {
    id: 1,
    price: 450000,
    title: "Greenville Apartment",
    address: "12, Adeniran Street, Ikoyi, Lagos",
    features: ["beds", "baths", "park"],
    image: "/property.svg",
    propImg: [
      {
        propFront: "/properties/property1front.svg",
        propSide: "/properties/property1side.svg",
        propInside: "/properties/property1inside.svg",
      },
    ],
  },
  {
    id: 2,
    price: 750000,
    title: "Luxury Villa",
    address: "15, Banana Island, Lagos",
    features: ["5 beds", "3 baths", "garage"],
    image: "/property.svg",
    propImg: [
      {
        propFront: "/properties/property1front.svg",
        propSide: "/properties/property1side.svg",
        propInside: "/properties/property1inside.svg",
      },
    ],
  },
  {
    id: 3,
    price: 350000,
    title: "Cozy Studio",
    address: "8, Adeola Odeku, VI, Lagos",
    features: ["1 bed", "1 bath", "no parking"],
    image: "/property.svg",
  },
  {
    id: 4,
    price: 300000,
    title: "Property 4",
    address: "4, Example Street, City 4, Country",
    features: ["beds", "baths", "park"],
    image: "/property.svg",
  },
  {
    id: 5,
    price: 350000,
    title: "Property 5",
    address: "5, Example Street, City 5, Country",
    features: ["beds", "baths", "park"],
    image: "/property.svg",
  },
  {
    id: 6,
    price: 400000,
    title: "Property 6",
    address: "6, Example Street, City 6, Country",
    features: ["beds", "baths", "park"],
    image: "/property.svg",
  },
  {
    id: 7,
    price: 450000,
    title: "Property 7",
    address: "7, Example Street, City 7, Country",
    features: ["beds", "baths", "park"],
    image: "/property.svg",
  },
  {
    id: 8,
    price: 500000,
    title: "Property 8",
    address: "8, Example Street, City 8, Country",
    features: ["beds", "baths", "park"],
    image: "/property.svg",
  },
  {
    id: 9,
    price: 550000,
    title: "Property 9",
    address: "9, Example Street, City 9, Country",
    features: ["beds", "baths", "park"],
    image: "/property.svg",
  },
  {
    id: 10,
    price: 600000,
    title: "Property 10",
    address: "10, Example Street, City 10, Country",
    features: ["beds", "baths", "park"],
    image: "/property.svg",
  },
  {
    id: 11,
    price: 650000,
    title: "Property 11",
    address: "11, Example Street, City 11, Country",
    features: ["beds", "baths", "park"],
    image: "/property.svg",
  },
  {
    id: 12,
    price: 700000,
    title: "Property 12",
    address: "12, Example Street, City 12, Country",
    features: ["beds", "baths", "park"],
    image: "/property.svg",
  },
  {
    id: 13,
    price: 750000,
    title: "Property 13",
    address: "13, Example Street, City 13, Country",
    features: ["beds", "baths", "park"],
    image: "/property.svg",
  },
  {
    id: 14,
    price: 800000,
    title: "Property 14",
    address: "14, Example Street, City 14, Country",
    features: ["beds", "baths", "park"],
    image: "/property.svg",
  },
  {
    id: 15,
    price: 850000,
    title: "Property 15",
    address: "15, Example Street, City 15, Country",
    features: ["beds", "baths", "park"],
    image: "/property.svg",
  },
  {
    id: 16,
    price: 900000,
    title: "Property 16",
    address: "16, Example Street, City 16, Country",
    features: ["beds", "baths", "park"],
    image: "/property.svg",
  },
  {
    id: 17,
    price: 950000,
    title: "Property 17",
    address: "17, Example Street, City 17, Country",
    features: ["beds", "baths", "park"],
    image: "/property.svg",
  },
  {
    id: 18,
    price: 1000000,
    title: "Property 18",
    address: "18, Example Street, City 18, Country",
    features: ["beds", "baths", "park"],
    image: "/property.svg",
  },
  {
    id: 19,
    price: 1050000,
    title: "Property 19",
    address: "19, Example Street, City 19, Country",
    features: ["beds", "baths", "park"],
    image: "/property.svg",
  },
  {
    id: 20,
    price: 1100000,
    title: "Property 20",
    address: "20, Example Street, City 20, Country",
    features: ["beds", "baths", "park"],
    image: "/property.svg",
  },
  {
    id: 21,
    price: 1150000,
    title: "Property 21",
    address: "21, Example Street, City 21, Country",
    features: ["beds", "baths", "park"],
    image: "/property.svg",
  },
  {
    id: 22,
    price: 1200000,
    title: "Property 22",
    address: "22, Example Street, City 22, Country",
    features: ["beds", "baths", "park"],
    image: "/property.svg",
  },
  {
    id: 23,
    price: 1250000,
    title: "Property 23",
    address: "23, Example Street, City 23, Country",
    features: ["beds", "baths", "park"],
    image: "/property.svg",
  },
  {
    id: 24,
    price: 1300000,
    title: "Property 24",
    address: "24, Example Street, City 24, Country",
    features: ["beds", "baths", "park"],
    image: "/property.svg",
  },
  {
    id: 25,
    price: 1350000,
    title: "Property 25",
    address: "25, Example Street, City 25, Country",
    features: ["beds", "baths", "park"],
    image: "/property.svg",
  },
];
