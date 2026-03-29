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
          'Promoted to SDE-2 within the PAYCE (Payment Cloud Engine) team, taking on increased ownership of system design and cross-team delivery.',
          'Leveraged Kafka for event-driven payment processing, improving decoupling between services and enabling reliable async transaction handling.',
          'Contributed to Kubernetes-based deployment workflows, improving service reliability and supporting zero-downtime rollouts in production.',
          'Led frontend design decisions for payment journeys using Angular, improving usability and reducing friction across transaction flows.',
          'Built and integrated full-stack features across UI and backend, ensuring seamless data flow and consistent user experience in a rapidly scaling core financial platform.',
        ],
      },
      {
        role: 'SDE-1',
        duration: 'Aug 2023 – Jan 2026',
        bullets: [
          'Designed and implemented end-to-end payment flows for the EU region as part of PAYCE, supporting high-volume transaction processing with strong reliability guarantees.',
          'Developed and optimized Java-based backend APIs with robust error handling and retry mechanisms, reducing transaction failure scenarios in production.',
          'Worked with Kafka-based event streams to ensure consistent message delivery across payment services in a distributed architecture.',
          'Resolved critical production issues in payment workflows, improving system reliability and reducing failure rates in live transaction processing.',
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
