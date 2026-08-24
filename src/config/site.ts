/**
 * ============================================================================
 *  SITE CONFIGURATION
 * ============================================================================
 * This is the ONE file you need to edit to update the common information
 * shown across the whole website — site name, contact details, social
 * links, SEO defaults, navigation, and footer text.
 *
 * You do NOT need to touch any component or page file for these changes.
 * Just edit the values below and rebuild/redeploy the site.
 * ============================================================================
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
  github?: string;
  dribbble?: string;
  behance?: string;
}

export interface SiteConfig {
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  siteAuthor: string;
  siteKeywords: string[];
  favicon: string;

  contact: {
    email: string;
    phone: string;
    address: string;
    businessDays: string;
    businessHours: string;
  };

  socials: SocialLinks;

  seo: {
    ogImage: string;
  };

  /** Main header + mobile menu navigation */
  navigation: NavLink[];

  footer: {
    copyrightText: string;
    credit: string;
    columns: FooterColumn[];
  };
}

export const siteConfig: SiteConfig = {
  siteName: "kianro",
  siteDescription: "Modern agency portfolio template for creative agencies, freelancers, startups, and digital studios.",
  siteUrl: "https://kianro-astro.netlify.app",
  siteAuthor: "kianro",
  siteKeywords: ["creative agency", "portfolio", "web design", "web development", "digital studio"],

  favicon: "/favicon.png",

  contact: {
    email: "hello.kianro@gmail.com",
    phone: "+1 (415) 555-2847",
    address: "250 Market San Francisco, CA 94105 United States",
    businessDays: "Monday – Friday",
    businessHours: "9:00 AM – 6:00 PM",
  },

  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://x.com",
    linkedin: "https://linkedin.com",
    youtube: "",
    github: "",
    dribbble: "https://dribbble.com",
    behance: "https://behance.net",
  },

  seo: {
    ogImage: "/images/og-image.jpg",
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
  ],

  footer: {
    copyrightText: "kianro. All Rights Reserved.",
    credit: "Designed by UI Hive | Powered by Astro",
    columns: [
      {
        title: "Pages",
        links: [
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Services", href: "/services" },
          { label: "Projects", href: "/projects" },
          { label: "Pricing", href: "/pricing" },
          { label: "Insights", href: "/blog" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Contact", href: "/contact" },
          { label: "Privacy Policy", href: "/privacy-policy" },
          { label: "Terms & Conditions", href: "/terms-conditions" },
          { label: "Projects", href: "/projects" },
          { label: "License", href: "/license" },
          { label: "Blog", href: "/blog" },
        ],
      },
    ],
  },
};
