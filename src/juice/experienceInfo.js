const experienceInfo = [
  {
    id: 1,
    company: 'Sopra Banking Software (SBS)',
    location: 'Noida, IN',
    type: 'Full Time',
    techUsed: ['Java', 'Angular', 'JavaScript/TypeScript', 'Spring Boot', 'MongoDB', 'Kafka', 'REST APIs'],
    promoted: true,
    roles: [
      {
        role: 'SDE-2',
        duration: 'Jan 2026 – Present',
        bullets: [
          'Delivered payment schemes and transaction flows across 3+ microservices in PAYCE, owning features end-to-end from API design through production rollout for 5+ live European banking clients.',
          'Closed a security gap exposing sensitive IBAN data in GET query params - redesigned the API to unblock payment search without breaking existing client integrations.',
          'Owned frontend design and delivery for originator and beneficiary payment journeys in Angular, shipping flows used daily by banking ops teams across multiple clients.',
          'Diagnosed and resolved a critical spec violation causing UK Faster Payments clearing to reject all inbound messages, fully restoring client processing.',
        ],
      },
      {
        role: 'SDE-1',
        duration: 'Aug 2023 – Jan 2026',
        bullets: [
          'Engineered core payment flows for PAYCE (PAYment Cloud Engine), a cloud-native EU banking platform processing thousands of daily transactions across multiple banking clients with strict financial compliance requirements.',
          'Built resilient Java backend APIs for payment processing - idempotent Kafka consumers, structured error handling and retry logic - reducing transaction failure scenarios in a high-throughput, multi-client environment.',
          'Ensured data consistency and accuracy in financial operations, maintaining correctness across payment workflows.',
          'Resolved critical production issues in payment workflows, improving system reliability and reducing failure scenarios in transaction processing.',
        ],
      },
    ],
  },
  {
    id: 2,
    company: 'NIA Agrocommodity Marketplace',
    location: 'Gurgaon, IN',
    type: 'Internship',
    techUsed: ['React.js', 'Java', 'Spring Boot'],
    promoted: false,
    roles: [
      {
        role: 'Full Stack Developer (Intern)',
        duration: 'Jun 2022 – Sept 2022',
        bullets: [
          'Led frontend migration of a legacy ASP.NET marketplace to React.js, reducing page load time by 3x and cutting future dev overhead through component-based architecture.',
          'Developed & optimized 40+ API endpoints, reducing average response latency from ~3s to under 800ms.',
        ],
      },
    ],
  },
]

export default experienceInfo
