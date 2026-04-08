const projectInfo = [
  {
    id: 1,
    projNo: '01',
    bgImgUrl: 'purrfect_focus.png',
    title: 'Purrfect Pomodoro Timer',
    tagline: 'Chrome Extension · 1,500+ Weekly Active Users · 20+ Countries',
    overview:
      'A productivity Chrome extension built around the Pomodoro technique, featuring customizable focus/break timers, task labels, a daily journal, built-in site blocking during focus sessions, ambient music player, 6-month calendar history, and full data export/import.',
    impact: [
      '1,500+ weekly active users across 20+ countries - grown organically with zero marketing spend.',
      'Consistently rated 4.9+ stars on the Chrome Web Store.',
      'Feature set expanded from a simple timer to a full productivity suite - site blocking, journaling, session analytics, and ambient audio.',
    ],
    challenges: [
      'Persisting and querying 6 months of session history efficiently using Chrome Storage API within strict extension memory limits.',
      'Designing a reliable background timer that survives tab switches, browser restarts, and Chrome\'s service worker lifecycle.',
      'Implementing site blocking that integrates with Chrome\'s declarativeNetRequest API while respecting user whitelist preferences.',
      'Building a data export/import system that remains backward-compatible across extension updates.',
    ],
    visitLink: 'https://chromewebstore.google.com/detail/aobapnhgpjlldncjopmbbfeoomombhel?hl=en-GB',
    sourceLink: 'https://github.com/kartikth40/PurrfectFocus',
    techUsed: ['Chrome Extension API', 'JavaScript', 'HTML', 'CSS', 'Chrome Storage'],
  },
  {
    id: 2,
    projNo: '02',
    bgImgUrl: 'have_small_bytes.png',
    title: 'Have Small Bytes',
    tagline: 'Full-Stack Blog Platform · SSR · GraphQL · CMS',
    overview:
      'A full-stack blog platform with three content categories, built with Next.js and GraphQL. Features Dark/Light mode, user auth, SSR, like and comment system, user feedback, and Hygraph CMS for content management.',
    impact: [
      'SSR with Next.js delivers sub-second page loads and strong SEO scores out of the box.',
      'Hygraph CMS decouples content from code - non-technical authors can publish without touching the codebase.',
      'GraphQL API reduces over-fetching, serving only the fields each page actually needs.',
      'Like and comment system drives user engagement with real-time feedback on posts.',
    ],
    challenges: [
      'Handling rapid like/unlike toggling without race conditions - debounced API calls with optimistic UI updates to keep the interaction snappy while ensuring the final state stays consistent with the backend.',
      'Designing a GraphQL schema flexible enough to support three distinct blog categories with shared and category-specific fields.',
      'Implementing SSR with dynamic routes while keeping build times fast using ISR (Incremental Static Regeneration).',
      'Building a user auth flow that works seamlessly across SSR and client-side navigation without session flicker.',
    ],
    visitLink: 'https://havesmallbytes.vercel.app',
    sourceLink: 'https://github.com/kartikth40/have-small-bytes',
    privateSource: false,
    techUsed: ['Next.js', 'React', 'GraphQL', 'Hygraph CMS', 'SSR / ISR', 'JavaScript', 'CSS'],
  },
]

export default projectInfo
