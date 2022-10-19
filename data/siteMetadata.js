const siteMetadata = {
  title: 'Blog | Abderrahim Alakouche',
  author: 'Abderrahim Alakouche',
  headerTitle: 'Mere Musings',
  description: 'My personal blog where I share my musings',
  snippets: 'Reuseable code snippets collected by Parth',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://alakouche.me',
  siteRepo: 'https://github.com/AbderrahimAl/My_Personal_Blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.JPG',
  socialBanner: '',
  email: 'abderrahimalakouche@gmail.com',
  github: 'https://github.com/AbderrahimAl',
  twitter: 'https://twitter.com/abderrahiml3k',
  linkedin: 'https://www.linkedin.com/in/abderrahim-alakouche-66470118b/',
  website: 'https://alakouche.me',
  locale: 'en-US',
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    provider: 'emailOctopus',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark',
      themeURL: '',
    },
  },
  socialAccount: {
    twitter: 'abderrahiml3k',
  },
}

module.exports = siteMetadata
