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
