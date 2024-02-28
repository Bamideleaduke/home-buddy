export const footer = [
    {id:"1",text:"About Us",route:"about-us"},
    {id:"2",text:"Find a home",route:"Find a home"},
    {id:"3",text:"Properties",route:"#"},
    {id:"4",text:"Reviews",route:"#"},
    {id:"5",text:"Agents",route:"#"},
    {id:"6",text:"Help",route:"#"},
    {id:"7",text:"Property Insurance",route:"#"},
    {id:"8",text:"FAQs",route:"#"},
    {id:"9",text:"Blogs",route:"#"},
    {id:"10",text:"Contact Us",route:"#"},
    {id:"11",text:"Legal",route:"#"},
    {id:"12",text:"Privacy Policy",route:"#"},
    {id:"13",text:"Copyright",route:"#"},
]


export const socials = [
    {id:"1",text:"Instagram",icon:"/instagram.svg", link:""},
    {id:"2",text:"LinkedIn",icon:"/linkedin.svg",link:""},
    {id:"3",text:"Facebook",icon:"/facebook.svg",link:""},
    {id:"4",text:"X",icon:"/twitter.svg",link:""},
]

export const sponsors = [
    {id:"1",text:"amazon",icon:"/amazon.svg"},
    {id:"2",text:"microsoft",icon:"/microsoft.svg"},
    {id:"3",text:"airbnb",icon:"/airbnb.svg"},
    {id:"4",text:"google",icon:"/google.svg"},
]
export const offers : OfferType[] = [
    {id:"1",title:"Budget Friendly",text:"We provides a complete service for the sale, purchase or rental of real estate.",icon:"/moneyBagIcon.svg"},
    {id:"2",title:"Property Insurance",text:"We provides a complete service for the sale, purchase or rental of real estate.",icon:"/authorizeIcon.svg"},
    {id:"3",title:"Lowest commission",text:"We provides a complete service for the sale, purchase or rental of real estate.",icon:"/commissionIcon.svg"},
    
]
export interface OfferType {
    id: string;
    title: string;
    text: string;
    icon: string;
  }