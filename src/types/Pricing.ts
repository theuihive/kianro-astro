export type BillingId = "project" | "retainer";

export interface BillingOption {
  id: BillingId;
  label: string;
  badge?: string;
}

export interface PlanPricing {
  project: number;
  retainer: number;
}

export interface PlanCta {
  label: string;
  href: string;
}

export interface Plan {
  id: string;
  name: string;
  popular: boolean;
  popularLabel?: string;
  description: string;
  pricing: PlanPricing;
  featuresLabel: string;
  features: string[];
  cta: PlanCta;
}

export interface PricingHeading {
  lineBold: string;
  lineMuted: string;
}

export interface PricingBilling {
  options: BillingOption[];
  default: BillingId;
  currency: string;
  period: string;
}

export interface PricingData {
  heading: PricingHeading;
  billing: PricingBilling;
  plans: Plan[];
}
