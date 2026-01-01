export type Plan = {
  id: "basic" | "standard" | "premium";
  name: string;
  priceCadMonthly: number;
  storiesPerMonth: number;
  stripeCheckoutUrl: string;
  highlight?: boolean;
};

export const plans: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    priceCadMonthly: 49,
    storiesPerMonth: 5,
    stripeCheckoutUrl: "https://buy.stripe.com/3cI4gAaVA6jJ1NAd0y2go00",
  },
  {
    id: "standard",
    name: "Standard",
    priceCadMonthly: 129,
    storiesPerMonth: 15,
    stripeCheckoutUrl: "https://buy.stripe.com/bJefZi7JobE3ak6e4C2go01",
    highlight: true,
  },
  {
    id: "premium",
    name: "Premium",
    priceCadMonthly: 249,
    storiesPerMonth: 50,
    stripeCheckoutUrl: "https://buy.stripe.com/14AeVe9Rw8rR9g2d0y2go02",
  },
];
