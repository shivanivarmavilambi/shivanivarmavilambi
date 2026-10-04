export type SkillGroup = {
  title: string;
  category: "Frontend" | "Backend" | "Cloud" | "AI/ML" | "Data" | "Testing";
  items: string[];
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  dates: string;
  summary: string;
  highlights: string[];
  tech: string[];
};

export const navigation = ["About", "Skills", "Experience", "Projects", "Education", "Writing", "Contact"];

export const socials = {
  email: "vilambishivanivarma@outlook.com",
  linkedIn: "http://www.linkedin.com/in/shivani-varmavilambi",
  medium: "https://medium.com/@shivanivarmavilambi",
};

export const skills: SkillGroup[] = [
  { title: "Languages & frontend", category: "Frontend", items: ["Java", "JavaScript", "TypeScript", "SQL", "React", "Redux Toolkit", "React Hooks", "React Hook Form", "Material UI", "HTML5", "CSS3", "Axios", "Recharts"] },
  { title: "Backend & APIs", category: "Backend", items: ["Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA", "Hibernate", "Node.js", "Express.js", "Microservices", "REST", "JAX-RS", "SOAP", "Event-Driven Architecture", "Apache Kafka"] },
  { title: "Cloud & delivery", category: "Cloud", items: ["AWS EKS", "AWS ECS", "EC2", "S3", "RDS", "Lambda", "API Gateway", "Azure DevOps", "Azure App Service", "Docker", "Kubernetes", "Jenkins", "CI/CD"] },
  { title: "AI & intelligent systems", category: "AI/ML", items: ["Machine Learning", "TensorFlow", "PyTorch", "NLP", "Generative AI", "LLMs", "Prompt Engineering", "RAG", "Embeddings", "Vector Databases", "MLOps"] },
  { title: "Data & persistence", category: "Data", items: ["Oracle", "PostgreSQL", "MySQL", "MongoDB", "Cassandra", "PL/SQL", "JDBC", "Prisma ORM"] },
  { title: "Quality & security", category: "Testing", items: ["JWT", "RBAC", "JUnit", "Jest", "React Testing Library", "Postman", "API Testing", "Integration Testing", "Regression Testing", "End-to-End Testing", "SonarQube"] },
];

export const experiences: Experience[] = [
  {
    company: "Western Union", role: "Senior Full Stack Developer", location: "Austin, TX", dates: "Aug 2024 — Present",
    summary: "Building secure, event-driven lending experiences for customers and employees.",
    highlights: ["Built React and TypeScript interfaces for a multi-step loan application and payment calculator.", "Created an employee loan dashboard with search, filtering, status tracking and Recharts visualizations.", "Developed Node.js and Express APIs with PostgreSQL and Prisma, secured through JWT and role-based access.", "Used Kafka for loan events and notifications, and contributed to AI-enabled loan review workflows."],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Kafka", "Azure", "Docker"],
  },
  {
    company: "Legacy Health", role: "Full Stack Developer", location: "Portland, OR", dates: "Sep 2022 — Jul 2024",
    summary: "Created healthcare workflows and operational intelligence for patients, providers and administrators.",
    highlights: ["Built React dashboards for appointments, provider schedules, queues and consultation status.", "Delivered analytics for patient volume, workload, department utilization and waiting times.", "Designed Spring Boot microservices backed by Cassandra and integrated via Kafka and Apache Camel.", "Deployed containerized services on AWS with S3 document storage and Splunk monitoring."],
    tech: ["React", "Java", "Kotlin", "Spring Boot", "Cassandra", "Kafka", "AWS"],
  },
  {
    company: "Adidas", role: "Software Developer", location: "Portland, OR", dates: "Nov 2020 — Aug 2022",
    summary: "Delivered digital account, transfer and payment experiences on cloud-native services.",
    highlights: ["Built React interfaces for accounts, transfers, payments, history and beneficiaries.", "Designed Spring Boot services using Hibernate, JPA, Oracle and PL/SQL.", "Implemented event-driven transaction processing with Kafka and secured services with Spring Security.", "Deployed Docker workloads on AWS ECS/EKS with Lambda, API Gateway, RDS and CloudWatch."],
    tech: ["React", "Java", "Spring Boot", "Oracle", "Kafka", "Docker", "AWS"],
  },
  {
    company: "Citrix Systems", role: "Java Developer Intern", location: "Hyderabad, India", dates: "Jul 2018 — Oct 2020",
    summary: "Supported employee, attendance, leave, benefits and payroll systems across the stack.",
    highlights: ["Built role-based React interfaces for employees, managers and HR administrators.", "Developed Java 8 and Spring Boot services backed by Oracle.", "Created PL/SQL procedures and validations supporting payroll calculations.", "Automated build and delivery workflows with Jenkins, Maven, Git and Docker."],
    tech: ["React", "Java 8", "Spring Boot", "Oracle", "PL/SQL", "Jenkins", "JUnit"],
  },
];

export const projects = [
  { number: "01", title: "Loan Application & Management Platform", field: "Fintech", summary: "A guided application journey paired with an operational review workspace.", problem: "Complex loan intake required secure validation, clear progress, employee review and timely customer updates.", solution: "A multi-step React experience, payment calculator and searchable review dashboard connected to event-driven services.", tech: "React, TypeScript, Node.js, PostgreSQL, Kafka, Azure", outcome: "A cohesive customer-to-operations workflow with consistent status visibility. Client work is confidential; details are available on request." },
  { number: "02", title: "Healthcare Operations Dashboard", field: "Healthcare", summary: "Scheduling and operational insight for administrators, doctors and patients.", problem: "Multiple user groups needed dependable appointment workflows and a shared view of hospital operations.", solution: "Responsive dashboards backed by modular Spring Boot services and asynchronous integrations.", tech: "React, Spring Boot, Cassandra, Kafka, AWS", outcome: "Unified appointment, provider and analytics workflows. Client work is confidential; details are available on request." },
  { number: "03", title: "Digital Banking & Payments Platform", field: "Banking", summary: "Cloud-based accounts, transfers, payments and beneficiary management.", problem: "Customer-facing payment flows needed secure, independently deployable services and real-time event handling.", solution: "React experiences connected to secured Spring Boot microservices with Kafka-driven transaction events.", tech: "React, Spring Boot, Oracle, Kafka, AWS ECS/EKS", outcome: "A modular banking platform spanning customer workflows and cloud operations. Client work is confidential." },
  { number: "04", title: "HR & Payroll System", field: "HR / Payroll", summary: "Role-aware employee services with reliable payroll data processing.", problem: "Employees, managers and HR teams required different views across attendance, leave, benefits and payroll.", solution: "Role-based React interfaces and Spring Boot services with PL/SQL-backed payroll processing.", tech: "React, Spring Boot, Oracle, Jenkins", outcome: "Connected employee and administrative workflows with automated delivery practices. Client work is confidential." },
];