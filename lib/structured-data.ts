// Structured Data (JSON-LD) Schemas for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Pixel 'N' Purpose by Pixpur Design House",
  "alternateName": "Pixel N Purpose",
  "url": "https://pixelnpurpose.com",
  "logo": "https://pixelnpurpose.com/PNP-white.png",
  "description": "Creative marketing and branding agency specializing in brand storytelling, social-first campaigns, and digital marketing for startups and luxury brands.",
  "foundingDate": "2024",
  "address": [{
    "@type": "PostalAddress",
    "addressLocality": "Goa",
    "addressRegion": "Goa",
    "addressCountry": "IN"
  }, {
    "@type": "PostalAddress",
    "addressLocality": "Jaipur",
    "addressRegion": "Rajasthan",
    "addressCountry": "IN"
  }],
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+91-XXXXXXXXXX",
    "contactType": "customer support",
    "email": "hello@pixelnpurpose.com",
    "areaServed": ["IN", "US", "UK", "AE"],
    "availableLanguage": ["English", "Hindi"]
  }],
  "sameAs": [
    "https://www.instagram.com/pixelnpurpose/",
    "https://www.linkedin.com/in/pixel-n-purpose-pixpur-design-house-b66360370/",
    "https://www.facebook.com/share/19YA9X8FJo/"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Pixel 'N' Purpose",
  "url": "https://pixelnpurpose.com",
  "description": "Creative marketing and branding agency for startups and luxury brands",
  "publisher": {
    "@type": "Organization",
    "name": "Pixpur Design House"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://pixelnpurpose.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const localBusinessGoaSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Pixel 'N' Purpose (Goa)",
  "image": "https://pixelnpurpose.com/PNP-white.png",
  "@id": "https://pixelnpurpose.com/marketing-agency-goa",
  "url": "https://pixelnpurpose.com/marketing-agency-goa",
  "telephone": "+91-XXXXXXXXXX",
  "email": "hello@pixelnpurpose.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Operating remotely",
    "addressLocality": "Goa",
    "addressRegion": "Goa",
    "postalCode": "403001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 15.2993,
    "longitude": 74.1240
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.instagram.com/pixelnpurpose/",
    "https://www.linkedin.com/in/pixel-n-purpose-pixpur-design-house-b66360370/"
  ]
};

export const localBusinessJaipurSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Pixel 'N' Purpose (Jaipur)",
  "image": "https://pixelnpurpose.com/PNP-white.png",
  "@id": "https://pixelnpurpose.com/marketing-agency-jaipur",
  "url": "https://pixelnpurpose.com/marketing-agency-jaipur",
  "telephone": "+91-98766 65379",
  "email": "hello@pixelnpurpose.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Operating remotely",
    "addressLocality": "Jaipur",
    "addressRegion": "Rajasthan",
    "postalCode": "302001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.9124,
    "longitude": 75.7873
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.instagram.com/pixelnpurpose/",
    "https://www.linkedin.com/in/pixel-n-purpose-pixpur-design-house-b66360370/"
  ]
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});