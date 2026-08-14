export const CAREERS = [
  {
    id: "data-scientist",
    title: "Data Scientist",
    category: "Data & AI",
    shortPitch: "Uncover actionable intelligence from complex datasets using statistics, ML models, and predictive analytics.",
    requiredSkills: [
      { name: "Python", requiredLevel: 85, weight: 1.2 },
      { name: "SQL", requiredLevel: 80, weight: 1.0 },
      { name: "Statistics & Math", requiredLevel: 85, weight: 1.3 },
      { name: "Machine Learning", requiredLevel: 80, weight: 1.4 },
      { name: "Power BI / Tableau", requiredLevel: 65, weight: 0.8 },
      { name: "Cloud & MLOps", requiredLevel: 60, weight: 0.9 },
    ],
    salaryRange: {
      y0: { min: "6.5 LPA", max: "12 LPA", median: "8.5 LPA" },
      y3: { min: "14 LPA", max: "24 LPA", median: "18 LPA" },
      y5: { min: "25 LPA", max: "45+ LPA", median: "32 LPA" }
    },
    demandIndex: 88,
    demandLabel: "Very High",
    competition: 82,
    competitionLabel: "High",
    entryBarrier: 78,
    entryBarrierLabel: "High",
    automationRisk: 42,
    automationRiskLabel: "Medium",
    skillVolatility: 75,
    skillVolatilityLabel: "High",
    locationDependency: 55,
    locationDependencyLabel: "Medium",
    growthPotential: 92,
    growthPotentialLabel: "Very High",
    mathRequirement: 88,
    codingRequirement: 80,
    timeToJobReadyBase: 9, // months
    compatibilityDefault: 76,
    milestones: [
      {
        period: "Month 1–2",
        title: "Python Programming & Relational Databases",
        skills: ["Advanced Python", "SQL Query Optimization", "Git & GitHub"],
        projects: ["E-Commerce Customer Query Analyzer", "Automated Data Cleaning Script"],
        milestoneType: "learning"
      },
      {
        period: "Month 3–4",
        title: "Exploratory Data Analysis & Statistics",
        skills: ["Pandas & NumPy", "Inferential Statistics", "Data Visualization (Seaborn)"],
        projects: ["Financial Market Trend EDA Dashboard", "A/B Testing Simulator"],
        milestoneType: "learning"
      },
      {
        period: "Month 5–6",
        title: "Machine Learning & Model Evaluation",
        skills: ["Scikit-Learn Algorithms", "Feature Engineering", "Model Optimization"],
        projects: ["Customer Churn Prediction Engine", "Housing Price Regression Model"],
        milestoneType: "project"
      },
      {
        period: "Month 7–8",
        title: "Portfolio Development & MLOps Basics",
        skills: ["Streamlit App Deployment", "Docker Containerization", "FastAPI Serving"],
        projects: ["Live Healthcare Risk Assessment App deployed on Cloud"],
        milestoneType: "project"
      },
      {
        period: "Month 9–10",
        title: "Internship & Job Application Phase",
        skills: ["Technical Interview Prep", "System Design for Data", "Resume Optimization"],
        projects: ["Open Source Data Science Contribution"],
        milestoneType: "internship"
      },
      {
        period: "Year 1–3",
        title: "Junior to Mid Data Scientist",
        skills: ["Deep Learning (PyTorch)", "Big Data (Spark)", "Business Strategy Alignment"],
        projects: ["Enterprise Recommendation Engine"],
        milestoneType: "job"
      },
      {
        period: "Year 5+",
        title: "Lead Data Scientist / AI Specialist",
        skills: ["LLM Fine-Tuning", "Distributed Training", "Executive Leadership"],
        projects: ["Autonomous Enterprise AI Decision System"],
        milestoneType: "job"
      }
    ],
    riskExplanations: {
      competition: "High volume of fresh graduates entering the field. Differentiation requires strong portfolio projects and practical business problem-solving skills.",
      entryBarrier: "Requires solid foundation in linear algebra, probability, and hypothesis testing alongside software engineering.",
      automationRisk: "Routine data cleaning and basic model fitting are increasingly automated by AutoML tools; value shifts toward AI architecture and strategic context.",
      skillVolatility: "Rapid evolution of LLMs, GenAI tools, and ML frameworks requires continuous learning every 6–12 months.",
      locationDependency: "Highest tier salaries are concentrated in tech hubs (Bangalore, Hyderabad, US/Europe remote), though remote opportunities are growing."
    }
  },
  {
    id: "data-engineer",
    title: "Data Engineer",
    category: "Data & Infrastructure",
    shortPitch: "Architect robust data pipelines, ETL pipelines, and scalable cloud data warehouses powering data-driven organizations.",
    requiredSkills: [
      { name: "Python", requiredLevel: 80, weight: 1.1 },
      { name: "SQL & Data Modeling", requiredLevel: 92, weight: 1.4 },
      { name: "Big Data (Spark/Kafka)", requiredLevel: 85, weight: 1.3 },
      { name: "Cloud Warehouses (Snowflake/BigQuery)", requiredLevel: 82, weight: 1.2 },
      { name: "Docker & Kubernetes", requiredLevel: 75, weight: 1.0 },
      { name: "CI/CD & Airflow", requiredLevel: 78, weight: 1.0 },
    ],
    salaryRange: {
      y0: { min: "7.0 LPA", max: "13.5 LPA", median: "9.2 LPA" },
      y3: { min: "16 LPA", max: "28 LPA", median: "21 LPA" },
      y5: { min: "28 LPA", max: "50+ LPA", median: "36 LPA" }
    },
    demandIndex: 94,
    demandLabel: "Very High",
    competition: 68,
    competitionLabel: "Medium",
    entryBarrier: 72,
    entryBarrierLabel: "Medium-High",
    automationRisk: 28,
    automationRiskLabel: "Low-Medium",
    skillVolatility: 65,
    skillVolatilityLabel: "Medium",
    locationDependency: 50,
    locationDependencyLabel: "Medium",
    growthPotential: 95,
    growthPotentialLabel: "Very High",
    mathRequirement: 60,
    codingRequirement: 90,
    timeToJobReadyBase: 8,
    compatibilityDefault: 82,
    milestones: [
      {
        period: "Month 1–2",
        title: "Advanced SQL & Database Fundamentals",
        skills: ["PostgreSQL", "Database Indexing", "Data Normalization"],
        projects: ["High-Throughput Relational Database Schema Design"],
        milestoneType: "learning"
      },
      {
        period: "Month 3–4",
        title: "Python Data Pipelines & Orchestration",
        skills: ["Apache Airflow", "REST API Extraction", "Polars & Pandas"],
        projects: ["Automated Daily Weather & Stock Price Ingestion Pipeline"],
        milestoneType: "learning"
      },
      {
        period: "Month 5–6",
        title: "Distributed Data & Cloud Storage",
        skills: ["Apache Spark (PySpark)", "AWS S3 / GCP GCS", "Parquet & Delta Lake"],
        projects: ["Real-time E-Commerce Clickstream Processing Engine"],
        milestoneType: "project"
      },
      {
        period: "Month 7–8",
        title: "Modern Data Stack & Warehousing",
        skills: ["Snowflake / dbt", "Kafka Streaming", "Docker Compose"],
        projects: ["End-to-End Streaming Analytics Data Platform"],
        milestoneType: "project"
      },
      {
        period: "Month 9",
        title: "Job Applications & Portfolio Proof",
        skills: ["Data Pipeline System Design", "System Resiliency Testing"],
        projects: ["Open-Source ETL Pipeline Library"],
        milestoneType: "internship"
      },
      {
        period: "Year 1–3",
        title: "Data Engineer",
        skills: ["Data Mesh Architecture", "Cost Optimization", "Kubernetes Operator"],
        projects: ["Petabyte-Scale Multi-Region Data Warehouse"],
        milestoneType: "job"
      },
      {
        period: "Year 5+",
        title: "Principal Data Architect",
        skills: ["Enterprise Governance", "Zero-Trust Data Security", "Platform Strategy"],
        projects: ["Global Real-time Streaming Infrastructure"],
        milestoneType: "job"
      }
    ],
    riskExplanations: {
      competition: "Fewer total applicants compared to Data Science due to high coding & systems engineering requirements.",
      entryBarrier: "Requires strong software engineering principles, understanding of distributed systems, and cloud infrastructure.",
      automationRisk: "Low automation risk because enterprise data pipelines require custom business logic, security, and edge-case handling.",
      skillVolatility: "Core database and distributed systems fundamentals remain stable; modern tools like dbt and Snowflake build on top.",
      locationDependency: "High demand across both tech startups and traditional enterprises globally."
    }
  },
  {
    id: "ai-engineer",
    title: "AI / ML Engineer",
    category: "AI & Software Engineering",
    shortPitch: "Build, fine-tune, deploy, and scale state-of-the-art Generative AI, LLMs, and Machine Learning systems into production.",
    requiredSkills: [
      { name: "Python", requiredLevel: 90, weight: 1.3 },
      { name: "PyTorch & Deep Learning", requiredLevel: 88, weight: 1.4 },
      { name: "LLMs, RAG & Vector DBs", requiredLevel: 92, weight: 1.5 },
      { name: "FastAPI & C++ Core", requiredLevel: 75, weight: 1.0 },
      { name: "Docker & GPU Acceleration", requiredLevel: 80, weight: 1.1 },
      { name: "System Design for AI", requiredLevel: 82, weight: 1.2 },
    ],
    salaryRange: {
      y0: { min: "8.5 LPA", max: "16 LPA", median: "11.5 LPA" },
      y3: { min: "20 LPA", max: "38 LPA", median: "27 LPA" },
      y5: { min: "35 LPA", max: "65+ LPA", median: "48 LPA" }
    },
    demandIndex: 98,
    demandLabel: "Extremely High",
    competition: 85,
    competitionLabel: "High",
    entryBarrier: 88,
    entryBarrierLabel: "High",
    automationRisk: 35,
    automationRiskLabel: "Medium",
    skillVolatility: 90,
    skillVolatilityLabel: "Extremely High",
    locationDependency: 60,
    locationDependencyLabel: "Medium-High",
    growthPotential: 98,
    growthPotentialLabel: "Peak Growth",
    mathRequirement: 85,
    codingRequirement: 95,
    timeToJobReadyBase: 11,
    compatibilityDefault: 72,
    milestones: [
      {
        period: "Month 1–2",
        title: "Python Systems & Numerical Computing",
        skills: ["Object-Oriented Python", "NumPy Vectorization", "Linear Algebra"],
        projects: ["Custom Neural Network from Scratch in NumPy"],
        milestoneType: "learning"
      },
      {
        period: "Month 3–4",
        title: "Deep Learning Foundations with PyTorch",
        skills: ["PyTorch Autograd", "CNNs & Transformers", "Hyperparameter Tuning"],
        projects: ["Multi-Modal Image & Text Classifier"],
        milestoneType: "learning"
      },
      {
        period: "Month 5–6",
        title: "Large Language Models & RAG Systems",
        skills: ["LangChain / LlamaIndex", "Vector Search (Pinecone/Qdrant)", "Prompt Engineering"],
        projects: ["Enterprise Knowledge Base RAG Assistant with Citation Tracking"],
        milestoneType: "project"
      },
      {
        period: "Month 7–8",
        title: "Fine-Tuning & Model Quantization",
        skills: ["LoRA / QLoRA", "HuggingFace Transformers", "vLLM / TensorRT-LLM"],
        projects: ["Domain-Specific Fine-Tuned Llama Model for Medical/Legal Querying"],
        milestoneType: "project"
      },
      {
        period: "Month 9–11",
        title: "Production AI Systems & Portfolio Deployment",
        skills: ["GPU Infrastructure", "FastAPI Async Endpoints", "Eval Frameworks"],
        projects: ["Production-Ready Multi-Agent AI Workflow Engine"],
        milestoneType: "internship"
      },
      {
        period: "Year 1–3",
        title: "AI Systems Engineer",
        skills: ["Distributed GPU Cluster Training", "Agentic Framework Architecture"],
        projects: ["Autonomous Enterprise AI Co-Pilot"],
        milestoneType: "job"
      },
      {
        period: "Year 5+",
        title: "Principal AI Scientist / Director of AI",
        skills: ["Custom Model Architectures", "AGI Research & Deployment", "Technical Vision"],
        projects: ["Next-Generation Foundation Model"],
        milestoneType: "job"
      }
    ],
    riskExplanations: {
      competition: "High interest globally, but qualified candidates with production LLM deployment experience are extremely scarce.",
      entryBarrier: "Demands combination of deep math, software engineering rigor, and hands-on hardware/GPU efficiency awareness.",
      automationRisk: "AI models will assist AI Engineers, but designing custom agents, safety guardrails, and production infrastructure requires human expertise.",
      skillVolatility: "The fastest moving technical field. Weekly breakthroughs in model architectures and frameworks require rapid adaptability.",
      locationDependency: "Top compensation packages in global innovation hubs, but remote AI engineering roles are booming."
    }
  },
  {
    id: "cybersecurity-specialist",
    title: "Cybersecurity Specialist",
    category: "Security & Infrastructure",
    shortPitch: "Protect enterprise digital assets, perform ethical hacking/penetration testing, and build zero-trust security postures.",
    requiredSkills: [
      { name: "Linux & Bash", requiredLevel: 85, weight: 1.2 },
      { name: "Networking (TCP/IP, OSI)", requiredLevel: 90, weight: 1.4 },
      { name: "Penetration Testing & Metasploit", requiredLevel: 82, weight: 1.3 },
      { name: "SIEM & SOC Tools (Splunk/Wazuh)", requiredLevel: 78, weight: 1.1 },
      { name: "Python / Go Scripting", requiredLevel: 72, weight: 1.0 },
      { name: "Cloud Security (AWS/Azure)", requiredLevel: 75, weight: 1.0 },
    ],
    salaryRange: {
      y0: { min: "5.5 LPA", max: "10.5 LPA", median: "7.5 LPA" },
      y3: { min: "13 LPA", max: "22 LPA", median: "17 LPA" },
      y5: { min: "24 LPA", max: "42+ LPA", median: "30 LPA" }
    },
    demandIndex: 91,
    demandLabel: "Very High",
    competition: 62,
    competitionLabel: "Medium",
    entryBarrier: 75,
    entryBarrierLabel: "Medium-High",
    automationRisk: 22,
    automationRiskLabel: "Low",
    skillVolatility: 70,
    skillVolatilityLabel: "Medium-High",
    locationDependency: 45,
    locationDependencyLabel: "Low-Medium",
    growthPotential: 90,
    growthPotentialLabel: "Very High",
    mathRequirement: 45,
    codingRequirement: 70,
    timeToJobReadyBase: 8,
    compatibilityDefault: 79,
    milestones: [
      {
        period: "Month 1–2",
        title: "Networking Protocols & Linux Administration",
        skills: ["CompTIA Network+ / Security+", "Wireshark Packet Analysis", "Linux Hardening"],
        projects: ["Secure Multi-Subnet Virtual Lab Setup"],
        milestoneType: "learning"
      },
      {
        period: "Month 3–4",
        title: "Ethical Hacking & Vulnerability Assessment",
        skills: ["Nmap", "Burp Suite", "OWASP Top 10 Security Risks"],
        projects: ["Vulnerability Assessment Report of Target Web Application"],
        milestoneType: "learning"
      },
      {
        period: "Month 5–6",
        title: "SOC Operations & Threat Hunting",
        skills: ["Splunk / Elastic SIEM", "Incident Response Protocol", "Malware Analysis"],
        projects: ["Automated SOC Log Monitoring & Alert System"],
        milestoneType: "project"
      },
      {
        period: "Month 7–8",
        title: "Cloud & DevSecOps Security",
        skills: ["AWS Security Hub", "IAM Policy Hardening", "Infrastructure as Code Security"],
        projects: ["Automated DevSecOps Pipeline with Static Security Analysis"],
        milestoneType: "project"
      },
      {
        period: "Month 9",
        title: "Certification & Application Phase",
        skills: ["EJPT / OSCP Prep", "Capture The Flag (CTF) Challenges"],
        projects: ["Published Bug Bounty Write-Ups / TryHackMe Top Rankings"],
        milestoneType: "internship"
      },
      {
        period: "Year 1–3",
        title: "SOC Analyst / Penetration Tester",
        skills: ["Red Teaming", "Zero Trust Architecture", "Cryptographic Protocol Hardening"],
        projects: ["Enterprise Red Team Simulation Exercise"],
        milestoneType: "job"
      },
      {
        period: "Year 5+",
        title: "Chief Information Security Officer (CISO)",
        skills: ["Regulatory Compliance (ISO27001/SOC2)", "Executive Risk Strategy"],
        projects: ["Global Organization Zero-Trust Transformation"],
        milestoneType: "job"
      }
    ],
    riskExplanations: {
      competition: "Moderate competition. Standard certifications (OSCP, Security+) provide clear proof of competence over generic resumes.",
      entryBarrier: "Requires deep understanding of underlying operating system kernels, network protocols, and adversary tactics.",
      automationRisk: "Very low risk; threats constantly evolve and automated security solutions generate false positives requiring expert human validation.",
      skillVolatility: "New vulnerabilities (0-days) surface daily, maintaining high demand for security updates.",
      locationDependency: "Extremely high remote work flexibility across finance, healthcare, and government defense sectors."
    }
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps Architect",
    category: "Cloud & Infrastructure",
    shortPitch: "Automate infrastructure, manage Kubernetes clusters, ensure 99.99% uptime, and streamline CI/CD delivery.",
    requiredSkills: [
      { name: "Linux & Shell Scripting", requiredLevel: 88, weight: 1.2 },
      { name: "AWS / GCP / Azure", requiredLevel: 90, weight: 1.4 },
      { name: "Docker & Kubernetes", requiredLevel: 92, weight: 1.5 },
      { name: "Terraform (IaC)", requiredLevel: 85, weight: 1.3 },
      { name: "CI/CD (GitHub Actions/Jenkins)", requiredLevel: 85, weight: 1.2 },
      { name: "Python / Go Automation", requiredLevel: 75, weight: 1.0 },
    ],
    salaryRange: {
      y0: { min: "6.5 LPA", max: "12.5 LPA", median: "8.8 LPA" },
      y3: { min: "15 LPA", max: "26 LPA", median: "20 LPA" },
      y5: { min: "26 LPA", max: "48+ LPA", median: "35 LPA" }
    },
    demandIndex: 93,
    demandLabel: "Very High",
    competition: 65,
    competitionLabel: "Medium",
    entryBarrier: 70,
    entryBarrierLabel: "Medium",
    automationRisk: 25,
    automationRiskLabel: "Low",
    skillVolatility: 60,
    skillVolatilityLabel: "Medium",
    locationDependency: 40,
    locationDependencyLabel: "Low",
    growthPotential: 94,
    growthPotentialLabel: "Very High",
    mathRequirement: 40,
    codingRequirement: 78,
    timeToJobReadyBase: 7,
    compatibilityDefault: 84,
    milestones: [
      {
        period: "Month 1–2",
        title: "Linux Foundations & Cloud Services",
        skills: ["Bash Scripting", "AWS Core (EC2, S3, VPC, IAM)", "Git Workflows"],
        projects: ["Highly Available Multi-AZ AWS Infrastructure Setup"],
        milestoneType: "learning"
      },
      {
        period: "Month 3–4",
        title: "Containerization & Orchestration",
        skills: ["Docker Container Optimization", "Kubernetes Deployment & Services"],
        projects: ["Microservices Container Cluster with Auto-Scaling"],
        milestoneType: "learning"
      },
      {
        period: "Month 5–6",
        title: "Infrastructure as Code & CI/CD",
        skills: ["Terraform Provisioning", "GitHub Actions Automation", "Helm Charts"],
        projects: ["GitOps Automated Deployment Pipeline with ArgoCD"],
        milestoneType: "project"
      },
      {
        period: "Month 7–8",
        title: "Observability & Site Reliability",
        skills: ["Prometheus & Grafana Monitoring", "ELK Log Aggregation", "Chaos Engineering"],
        projects: ["Full-Stack Observability Dashboard with Automated Incident Alerts"],
        milestoneType: "project"
      },
      {
        period: "Month 9",
        title: "AWS Certified Solutions Architect & Applications",
        skills: ["Cloud FinOps", "Disaster Recovery Planning"],
        projects: ["Production Infrastructure Automation Repo"],
        milestoneType: "internship"
      },
      {
        period: "Year 1–3",
        title: "DevOps Engineer / SRE",
        skills: ["Multi-Cloud Strategy", "Service Mesh (Istio)", "Cost Optimization"],
        projects: ["Migration of Enterprise Workload to Cloud Native"],
        milestoneType: "job"
      },
      {
        period: "Year 5+",
        title: "Principal Cloud Architect",
        skills: ["Global Infrastructure Strategy", "Zero Downtime Deployments"],
        projects: ["Resilient Multi-Region Edge Cloud Platform"],
        milestoneType: "job"
      }
    ],
    riskExplanations: {
      competition: "Moderate; practical experience with Kubernetes and Terraform creates a distinct moat.",
      entryBarrier: "Hands-on cloud lab experience is vital; cloud certification helps validate initial knowledge.",
      automationRisk: "Low automation risk; AI assists with config writing, but overall cloud reliability and architectural decision-making requires human engineering.",
      skillVolatility: "Core cloud concepts (networking, storage, virtualization, compute) remain stable.",
      locationDependency: "Extremely high remote availability globally."
    }
  },
  {
    id: "fullstack-developer",
    title: "Full-Stack Web Developer",
    category: "Software Development",
    shortPitch: "Build modern, responsive, end-to-end web applications with interactive frontends and scalable backend APIs.",
    requiredSkills: [
      { name: "JavaScript / TypeScript", requiredLevel: 90, weight: 1.4 },
      { name: "React / Next.js", requiredLevel: 88, weight: 1.3 },
      { name: "Node.js / Express / Python", requiredLevel: 82, weight: 1.2 },
      { name: "SQL & NoSQL (PostgreSQL/MongoDB)", requiredLevel: 80, weight: 1.1 },
      { name: "HTML5 / Modern CSS & Tailwind", requiredLevel: 85, weight: 1.0 },
      { name: "Git & Deployment (Vercel/Docker)", requiredLevel: 75, weight: 0.9 },
    ],
    salaryRange: {
      y0: { min: "5.0 LPA", max: "10 LPA", median: "7.0 LPA" },
      y3: { min: "12 LPA", max: "22 LPA", median: "16 LPA" },
      y5: { min: "22 LPA", max: "40+ LPA", median: "28 LPA" }
    },
    demandIndex: 95,
    demandLabel: "Extremely High",
    competition: 90,
    competitionLabel: "Very High",
    entryBarrier: 60,
    entryBarrierLabel: "Medium-Low",
    automationRisk: 48,
    automationRiskLabel: "Medium",
    skillVolatility: 80,
    skillVolatilityLabel: "High",
    locationDependency: 35,
    locationDependencyLabel: "Low",
    growthPotential: 88,
    growthPotentialLabel: "High",
    mathRequirement: 35,
    codingRequirement: 92,
    timeToJobReadyBase: 6,
    compatibilityDefault: 88,
    milestones: [
      {
        period: "Month 1–2",
        title: "Frontend Core (HTML, CSS, Modern JS)",
        skills: ["ES6+ JavaScript", "DOM Manipulation", "CSS Grid & Flexbox"],
        projects: ["Responsive Interactive E-Commerce Landing Page"],
        milestoneType: "learning"
      },
      {
        period: "Month 3–4",
        title: "Frontend Frameworks & State Management",
        skills: ["React 18", "State & Effect Hooks", "Tailwind CSS"],
        projects: ["Real-time Task & Project Management Dashboard"],
        milestoneType: "learning"
      },
      {
        period: "Month 5–6",
        title: "Backend Development & Databases",
        skills: ["Node.js / Express", "RESTful API Design", "PostgreSQL & Prisma ORM"],
        projects: ["Full-Stack SaaS Platform with Authentication & Payments"],
        milestoneType: "project"
      },
      {
        period: "Month 7",
        title: "Advanced Full-Stack (Next.js & TypeScript)",
        skills: ["Next.js App Router", "TypeScript Strict Typing", "Server Actions"],
        projects: ["Collaborative Real-time Document Editor"],
        milestoneType: "project"
      },
      {
        period: "Month 8",
        title: "Applications & Portfolio Polish",
        skills: ["Vercel / AWS Deployment", "SEO & Web Vitals Optimization"],
        projects: ["Production SaaS Application with Real Users"],
        milestoneType: "internship"
      },
      {
        period: "Year 1–3",
        title: "Full-Stack Software Engineer",
        skills: ["System Architecture", "Microservices", "Performance Profiling"],
        projects: ["High-Traffic E-Commerce Engine"],
        milestoneType: "job"
      },
      {
        period: "Year 5+",
        title: "Staff Engineer / Tech Lead",
        skills: ["Engineering Team Leadership", "Distributed Web Systems"],
        projects: ["Platform Engineering & Architecture"],
        milestoneType: "job"
      }
    ],
    riskExplanations: {
      competition: "High entry-level supply due to bootcamps and tutorials. Stand out by mastering TypeScript, Next.js, and complex system logic.",
      entryBarrier: "Relatively low initial learning curve, but high bar to master scalable production engineering.",
      automationRisk: "AI code assistants generate UI components fast, so developers must focus on system architecture, UX, and business logic.",
      skillVolatility: "JavaScript ecosystem moves fast; framework updates occur constantly.",
      locationDependency: "Widest array of remote job options worldwide."
    }
  }
];

export const INITIAL_USER_PROFILE = {
  name: "Vijay Mahes",
  degree: "MCA (Master of Computer Applications)",
  experienceYears: 0,
  studyHoursPerDay: 4,
  location: "Bangalore",
  internshipCompleted: false,
  projectsCount: 2,
  highAiImpactToggle: false,
  skills: {
    "Python": 75,
    "SQL": 70,
    "Statistics & Math": 45,
    "Machine Learning": 40,
    "Power BI / Tableau": 35,
    "Cloud & MLOps": 30,
    "JavaScript / TypeScript": 80,
    "React / Next.js": 75,
    "Linux & Bash": 60,
    "Docker & Kubernetes": 40,
    "Networking (TCP/IP, OSI)": 50,
    "Big Data (Spark/Kafka)": 35
  }
};
