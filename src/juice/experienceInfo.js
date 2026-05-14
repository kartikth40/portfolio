const experienceInfo = [
  {
    id: 1,
    company: 'Sopra Banking Software (SBS)',
    companyUrl: 'https://sbs-software.com/',
    role: 'Software Engineer (SDE-2)',
    location: 'Noida, IN',
    type: 'Full Time',
    duration: 'Aug 2023 – Present',
    techUsed: ['Java', 'Spring Boot', 'Kafka', 'MongoDB', 'Angular', 'Kubernetes'],
    sections: [
      {
        title: 'Overview',
        content: [
          {
            type: 'text',
            value:
              'Worked on PAYCE, a cloud-native banking payment platform powering high-reliability transaction processing workflows for multiple European banking clients.',
          },
          {
            type: 'text',
            value:
              'My work primarily focused on distributed backend systems, asynchronous payment workflows, operational tooling, and production reliability across transaction lifecycle management systems.',
          },
          {
            type: 'text',
            value:
              'Over time, I contributed across the full stack - from Kafka-driven backend workflows and state management systems to Angular-based operational dashboards used daily by banking operations teams.',
          },
        ],
      },
      {
        title: 'Distributed Payment Workflows',
        content: [
          {
            type: 'text',
            value:
              'Designed and developed asynchronous transaction-processing workflows spanning multiple backend services using Kafka-based event routing, configurable state-machine transitions, MongoDB persistence, and Spring Boot services.',
          },
          {
            type: 'list',
            heading: 'Worked extensively with:',
            items: [
              'Event-driven architectures',
              'Asynchronous workflow orchestration',
              'Idempotent event handling',
              'Retry/recovery mechanisms',
              'Resilient state synchronization patterns',
            ],
          },
          {
            type: 'list',
            heading:
              'A large part of the work involved building and maintaining post-settlement operational flows such as:',
            items: [
              'Payment investigations',
              'Recalls',
              'Claims',
              'Transaction exception handling',
              'Operational review workflows',
            ],
          },
          {
            type: 'text',
            value:
              'These systems required careful coordination across multiple services while maintaining reliability, consistency, and backward compatibility.',
          },
        ],
      },
      {
        title: 'Backend Systems & API Design',
        content: [
          {
            type: 'list',
            heading:
              'Built fault-tolerant backend services for high-reliability financial workflows with strong focus on:',
            items: [
              'Resilient asynchronous processing',
              'Structured error propagation',
              'Duplicate processing prevention',
              'Operational recovery handling',
              'Secure API design',
            ],
          },
          {
            type: 'text',
            value:
              'One notable improvement involved redesigning payment search APIs to securely support account-based filtering without exposing sensitive financial data in URLs, while maintaining backward compatibility with existing integrations.',
          },
          {
            type: 'text',
            value:
              'Also contributed to workflow search systems, operational filtering, export pipelines, and backend integrations powering internal operational dashboards.',
          },
        ],
      },
      {
        title: 'Production Reliability & Debugging',
        content: [
          {
            type: 'text',
            value:
              'Worked on several production-critical debugging and interoperability issues across payment processing pipelines and operational systems.',
          },
          {
            type: 'text',
            value:
              'One major issue involved tracing malformed XML payload generation across clearing integrations that caused transaction validation failures in downstream systems. After identifying the root cause and rebuilding protocol-specific serialization logic, inbound transaction processing was successfully restored for UK banking clients.',
          },
          {
            type: 'list',
            heading: 'Also investigated and resolved issues related to:',
            items: [
              'Asynchronous state restoration',
              'Operational dashboard inconsistencies',
              'Pagination/state synchronization bugs',
              'Transaction visibility problems',
              'Cross-service workflow coordination',
            ],
          },
          {
            type: 'text',
            value:
              'This work required deep debugging across distributed services, backend logs, workflow states, and operational tooling.',
          },
        ],
      },
      {
        title: 'Frontend & Operational Tooling',
        content: [
          {
            type: 'list',
            heading:
              'Led development of Angular-based operational workflows and dashboards used by banking operations teams for:',
            items: [
              'Transaction monitoring',
              'Payment investigations',
              'Search & filtering',
              'Operational exception handling',
              'CSV exports',
              'Workflow management',
            ],
          },
          {
            type: 'list',
            heading: 'Focused heavily on:',
            items: [
              'Frontend reliability',
              'Workflow clarity',
              'State restoration',
              'Operational efficiency',
              'Handling complex multi-step workflows cleanly',
            ],
          },
          {
            type: 'text',
            value:
              'The goal across these systems was not only functional correctness, but also building tooling that simplified operational investigation and reduced friction for teams handling critical payment workflows.',
          },
        ],
      },
      {
        title: 'What I Learned',
        content: [
          {
            type: 'list',
            heading:
              'Working on large-scale financial systems significantly strengthened my understanding of:',
            items: [
              'Distributed systems',
              'Event-driven architectures',
              'Reliability engineering',
              'Asynchronous workflow coordination',
              'Production debugging',
              'System interoperability',
              'Resilient API design',
              'Operational tooling at scale',
            ],
          },
          {
            type: 'text',
            value:
              'It also taught me the importance of building systems that are not only functionally correct, but observable, recoverable, and easy to operate under real production conditions.',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    company: 'NIA Agrocommodity Marketplace',
    role: 'Full Stack Developer Intern',
    location: 'Gurgaon, IN',
    type: 'Internship',
    duration: 'Jun 2022 – Sept 2022',
    techUsed: ['React.js', 'Java', 'Spring Boot'],
    sections: [
      {
        title: 'Overview',
        content: [
          {
            type: 'text',
            value:
              'Worked on the modernization of a legacy agrocommodity marketplace platform by contributing across both frontend and backend systems.',
          },
          {
            type: 'text',
            value:
              'The internship primarily focused on improving application performance, modernizing frontend architecture, and optimizing backend APIs supporting marketplace workflows.',
          },
        ],
      },
      {
        title: 'Frontend Modernization',
        content: [
          {
            type: 'text',
            value:
              'Led the frontend migration of a legacy ASP.NET-based marketplace application to React.js, helping transition the platform toward a more maintainable and component-driven architecture.',
          },
          {
            type: 'list',
            heading: 'Focused on:',
            items: [
              'Reusable UI components',
              'Cleaner state management',
              'Improved responsiveness',
              'Maintainable frontend structure',
              'Reducing long-term development overhead',
            ],
          },
          {
            type: 'text',
            value:
              'The migration significantly improved user experience and reduced page load times by nearly 3x across major workflows.',
          },
        ],
      },
      {
        title: 'Backend API Optimization',
        content: [
          {
            type: 'text',
            value:
              'Developed and optimized 40+ backend API endpoints using Java and Spring Boot, improving response times from roughly 3 seconds to under 800ms for several high-traffic workflows.',
          },
          {
            type: 'list',
            heading: 'Worked on:',
            items: [
              'Query optimization',
              'Reducing unnecessary payloads',
              'Improving request handling',
              'Backend integration flows',
              'API performance tuning',
            ],
          },
          {
            type: 'text',
            value:
              'This experience gave me early exposure to balancing frontend responsiveness with backend performance and helped build a strong foundation in full-stack engineering practices.',
          },
        ],
      },
      {
        title: 'What I Learned',
        content: [
          {
            type: 'text',
            value:
              'This internship was my first experience working on a production application with real users and evolving business requirements.',
          },
          {
            type: 'list',
            heading: 'It helped me build practical understanding around:',
            items: [
              'Frontend architecture',
              'API design',
              'Performance optimization',
              'Component-driven development',
              'Full-stack debugging',
              'Shipping production-ready features in collaborative environments',
            ],
          },
        ],
      },
    ],
  },
]

export default experienceInfo
