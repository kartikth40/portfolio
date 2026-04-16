const projectInfo = [
  {
    id: 1,
    projNo: '01',
    bgImgUrl: 'purrfect_focus.png',
    title: 'Purrfect Pomodoro Timer',
    tagline: 'Chrome Extension · 1,500+ Weekly Active Users · 20+ Countries',
    overview:
      'Built on Chrome Extension Manifest V3 with persistent session state, usage analytics and zero backend infrastructure. Features customizable focus/break timers, task labels, a daily journal, built-in site blocking during focus sessions, ambient music player, 6-month calendar history, and full data export/import.',
    impact: [
      'Serves 1,500+ weekly active users across 20+ countries - grown organically with zero marketing spend.',
      'Consistently rated 4.9+ stars on the Chrome Web Store.',
      'Feature set expanded from a simple timer to a full productivity suite - site blocking, journaling, session analytics, and ambient audio.',
    ],
    challenges: [
      'Persisting and querying 6 months of session history efficiently using Chrome Storage API within strict extension memory limits.',
      'Designing a reliable background timer that survives tab switches, browser restarts, and Chrome\'s service worker lifecycle (Manifest V3).',
      'Implementing site blocking that integrates with Chrome\'s declarativeNetRequest API while respecting user whitelist preferences.',
      'Building a data export/import system that remains backward-compatible across extension updates.',
    ],
    visitLink: 'https://chromewebstore.google.com/detail/aobapnhgpjlldncjopmbbfeoomombhel?hl=en-GB',
    sourceLink: 'https://github.com/kartikth40/PurrfectFocus',
    techUsed: ['JavaScript', 'HTML', 'CSS', 'Chrome Extension API', 'Manifest V3'],
  },
  {
    id: 2,
    projNo: '02',
    bgImgUrl: 'have_small_bytes.png',
    title: 'Have Small Bytes',
    tagline: 'Full-Stack Blog · Next.js · TypeScript · GraphQL · NextAuth.js',
    overview:
      'A full-stack blog platform built with Next.js and TypeScript. Features a resilient GraphQL data layer with 50+ service functions, React cache() deduplication, 5x retry on rate-limit errors, and ISR revalidation to minimize CMS API calls under throttling constraints.',
    impact: [
      'GraphQL data layer with React cache() deduplication significantly reduces redundant CMS API calls under throttling.',
      'ISR revalidation ensures content stays fresh without full rebuilds, keeping page loads fast.',
      'Multi-flow auth (email, username, OTP-based passwordless) covers a wide range of user preferences securely.',
    ],
    challenges: [
      'Built a resilient GraphQL data layer (50+ service functions) with React cache() deduplication, 5x retry on rate-limit errors, and ISR revalidation to minimize CMS API calls under throttling constraints.',
      'Implemented multi-flow auth (email, username, OTP-based passwordless) with bcrypt-hashed OTP storage and async real-time field uniqueness validation against a live API.',
      'Designing a GraphQL schema flexible enough to support multiple blog categories with shared and category-specific fields.',
      'Handling rapid like/unlike toggling without race conditions - debounced API calls with optimistic UI updates to keep interactions snappy while ensuring final state stays consistent with the backend.',
    ],
    visitLink: 'https://havesmallbytes.vercel.app',
    sourceLink: 'https://github.com/kartikth40/have-small-bytes',
    privateSource: false,
    techUsed: ['Next.js', 'TypeScript', 'GraphQL', 'NextAuth.js', 'React', 'ISR', 'CSS'],
  },
]

export default projectInfo
