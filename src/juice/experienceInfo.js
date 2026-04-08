const experienceInfo = [
  {
    id: 1,
    company: 'Sopra Banking Software (SBS)',
    location: 'Noida, IN',
    type: 'Full Time',
    techUsed: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'MongoDB', 'Kafka', 'Kubernetes', 'REST APIs'],
    promoted: true,
    roles: [
      {
        role: 'SDE-2',
        duration: 'Jan 2026 – Present',
        bullets: [
          'Delivered new payment schemes and transaction flows across 7+ microservices in the PAYCE platform, owning features end-to-end from API design through production rollout.',
          'Mentored junior engineers and interns, drove PR review culture, and led frontend technical decisions across the team\'s Angular codebase.',
          'Improved Angular page load performance and UI reliability for payment journeys by optimizing bundle size, rendering, and resolving production bugs, directly impacting banking clients across the EU.',
          'Designed and shipped client-facing and internal REST APIs for SEPA and instant payment schemes, collaborating across backend and frontend teams to ensure consistent data flow.',
        ],
      },
      {
        role: 'SDE-1',
        duration: 'Aug 2023 – Jan 2026',
        bullets: [
          'Designed and implemented end-to-end payment flows as part of PAYCE (PAYment Cloud Engine) for the EU region, supporting high-volume transaction processing.',
          'Ensured data consistency and accuracy in financial operations, maintaining correctness across payment workflows.',
          'Developed and optimized Java-based backend APIs for payment processing, incorporating robust error handling and retry mechanisms to reduce transaction failure scenarios.',
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
        role: 'Full Stack Developer',
        duration: 'Jun 2022 – Sep 2022',
        bullets: [
          'Migrated a legacy ASP.NET marketplace ("wheatbazar") to React.js, improving performance by 3x and significantly simplifying maintainability.',
          'Developed and optimized 40+ Spring Boot API endpoints, reducing average response latency by 2.2 seconds.',
        ],
      },
    ],
  },
]

export default experienceInfo
