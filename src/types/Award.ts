export interface AwardItem {
  year: string;
  client: string;
  award: string;
  platform: string;
  featured?: boolean;
}

export interface AwardsHeading {
  line1Bold: string;
  line2Muted: string;
}

export interface AwardsCta {
  label: string;
  href: string;
}

export interface AwardsData {
  heading: AwardsHeading;
  cta: AwardsCta;
  awards: AwardItem[];
}
