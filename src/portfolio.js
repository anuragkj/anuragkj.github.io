/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
  showOpenSource: false,
};

//SEO Related settings
const seo = {
  title: "Anurag's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Anurag Jha Portfolio",
    type: "website",
    url: "https://anuragkj.github.io",
  },
};

//Home Page
const greeting = {
  title: "Anurag Kumar Jha",
  logo_name: "AnuragKumarJha",
  nickname: "anuragkj",
  subTitle:
    "Graduate student at CMU Silicon Valley focused on full‑stack systems, AI/ML, and scalable microservices. Industry experience building production apps and AI platforms across Bosch, Siemens Energy, and Carnegie Mellon University.",
  resumeLink: "https://anuragkj-swe.tiiny.site/", //"https://resume.io/r/H5GWWpKMg",
  portfolio_repository: "https://github.com/anuragkj/masterPortfolio",
  githubProfile: "https://github.com/anuragkj",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/anuragkj",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/anurag-kumar-jha-680419204/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:anurag.jha.in@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/anurag.jha30/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack & Frontend",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive web apps with React and TypeScript",
        "⚡ Full‑stack apps with Next.js and GraphQL",
        "⚡ Robust UI systems and design patterns",
      ],
      softwareSkills: [
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: { color: "#3178C6" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { color: "#F7DF1E" },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: { color: "#000000" },
        },
        {
          skillName: "Styled Components",
          fontAwesomeClassname: "simple-icons:styledcomponents",
          style: { color: "#DB7093" },
        },
      ],
    },
    {
      title: "Backend & Microservices",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Designing APIs and services with FastAPI, Django, Node",
        "⚡ Event‑driven microservices with RabbitMQ and Docker",
        "⚡ Secure, scalable architectures with auth and observability",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: { color: "#009688" },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: { color: "#092E20" },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: { color: "#339933" },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: { color: "#007396" },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:spring",
          style: { color: "#6DB33F" },
        },
        {
          skillName: "RabbitMQ",
          fontAwesomeClassname: "simple-icons:rabbitmq",
          style: { color: "#FF6600" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#336791" },
        },
      ],
    },
    {
      title: "AI/ML & CV",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Computer Vision pipelines and visual analytics",
        "⚡ LLM‑powered analysis and RAG systems",
        "⚡ Model training, evaluation, and deployment",
      ],
      softwareSkills: [
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: { color: "#EE4C2C" },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: { color: "#FF6F00" },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: { color: "#5C3EE8" },
        },
        {
          skillName: "scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: { color: "#F7931E" },
        },
        {
          skillName: "OpenAI",
          fontAwesomeClassname: "simple-icons:openai",
          style: { color: "#412991" },
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Containerized deployments and CI/CD",
        "⚡ Cloud services across AWS, Azure, and GCP",
        "⚡ Data platforms and dashboards",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#2496ED" },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: { color: "#0078D4" },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: { color: "#4285F4" },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: { color: "#E10098" },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: { color: "#E97627" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/anuragkj30/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/f20200128",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/anuragkj",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/anuragkumarjha",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Carnegie Mellon University, Silicon Valley",
      subtitle: "M.S. in Software Engineering",
      logo_path: "google_logo.png",
      alt_name: "CMU Silicon Valley",
      duration: "2025 - 2026",
      descriptions: [
        "⚡ Coursework and research in full‑stack systems, AI/ML, and software verification/testing.",
      ],
      website_link: "https://www.cmu.edu/silicon-valley/",
    },
    {
      title: "BITS Pilani",
      subtitle: "B.E. - Computer Science",
      logo_path: "bits_logo.webp",
      alt_name: "BITS Pilani",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ CGPA 10/10 with multiple academic excellence awards.",
        "⚡ Core CS: DS, Algorithms, DBMS, OS, Computer Architecture, AI, Cryptography, Data Mining.",
      ],
      website_link: "https://www.bits-pilani.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Android Development",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-973be3a8-1126-487a-84bf-cff11da589f3/",
      alt_name: "Udemy",
      color_code: "#4285F499",
    },
    {
      title: "Computer Vision and Deep Learning",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-6acc187d-3669-4005-8ad3-7535d7073725/",
      alt_name: "Udemy",
      color_code: "#4285F499",
    },
    {
      title: "Workspace Essentials",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/3c52aa5e-a553-48a0-9b45-5a71847b25a1",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Intro to ML: Image Processing",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/3c52aa5e-a553-48a0-9b45-5a71847b25a1",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Intro to ML: Language Processing",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/3c52aa5e-a553-48a0-9b45-5a71847b25a1",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Intermediate ML: TensorFlow on Google Cloud",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/3c52aa5e-a553-48a0-9b45-5a71847b25a1",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Blockchain A-Z",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-6b89eb95-23f0-40f4-9212-9683f76aeb8b/",
      alt_name: "Udemy",
      color_code: "#4285F499",
    },
    {
      title: "Ethereum and Solidity",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-a845aeae-30b1-493e-9ee1-2e516cdefbca/",
      alt_name: "Udemy",
      color_code: "#4285F499",
    },
    {
      title: "Cloud Computing on AWS",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-5c45557b-3a1e-420f-be9b-1eb7b81e8a8a/",
      alt_name: "Udemy",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Professional experience across software engineering, AI platforms, and research/teaching roles.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "Bosch",
          company_url: "https://www.bosch.com/",
          logo_path: "bosch.png",
          duration: "May 2025 - Present",
          location: "Sunnyvale, CA, USA",
          description:
            "Built a web application for analyzing and annotating ADAS faults. Integrated CV tooling (SAM2, Florence2), Annotorious for labeling, and time‑series visualization (uPlot). Stack: React/TypeScript, FastAPI/Python, PostgreSQL, Docker, Azure.",
          color: "#0879bf",
        },
        {
          title: "Research Assistant",
          company: "CMU Silicon Valley",
          company_url: "https://www.cmu.edu/silicon-valley/",
          logo_path: "cmu.jpg",
          duration: "May 2025 - Present",
          location: "Mountain View, CA, USA",
          description:
            "Engineered an AI Autograder with four decoupled microservices (Python FastAPI, Java Spring Boot) orchestrated via RabbitMQ and container sandboxing; built NLP clustering for class‑wide insights. Cloud native with GCS and Docker.",
          color: "#000000",
        },
        {
          title: "Teaching Assistant",
          company: "CMU Silicon Valley",
          company_url: "https://www.cmu.edu/silicon-valley/",
          logo_path: "cmu.jpg",
          duration: "May 2025 - Present",
          location: "Mountain View, CA, USA",
          description:
            "TA for Full Stack Development and Software Verification & Testing.",
          color: "#000000",
        },
        {
          title: "Software and AI Developer",
          company: "Siemens Energy",
          company_url: "https://www.siemens-energy.com/",
          logo_path: "siemens.png",
          duration: "Dec 2023 - Dec 2024",
          location: "United Arab Emirates",
          description:
            "Delivered an enterprise RAG platform (Azure AI Search, LangChain, Azure Document Intelligence, React, Quart) and multiple internal apps (Django/Flask/React/jQuery/Cordova). Led CI/CD with Ansible, Dockerized services, and built analytics (Tableau, scikit‑learn, NLP).",
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "fibrisTerre",
          company_url: "https://www.fibristerre.de/",
          logo_path: "fibristerre_logo.jpeg",
          duration: "Sep 2023 - Feb 2024",
          location: "Berlin, Germany",
          description:
            "Developed a full‑stack Next.js application for roadside health monitoring over fiber optic signals with threshold‑based alarms, PostgreSQL, GraphQL, and AWS hosting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Practice School",
          company: "Bahwan Cybertek",
          company_url: "https://www.linkedin.com/company/bctglobal/",
          logo_path: "bahwan_logo.png",
          duration: "June 2022 - Aug 2022",
          location: "Dubai, UAE",
          description:
            "I was responsible for both solution architecture and full-stack development of a patient journey system using FlutFlow and Firebase. Additionally, I successfully created and hosted a RASA-based chatbot for a university while also conducting research on the development of a fraud detection system for a local supermarket chain.",
          color: "#000000",
        },
        {
          title: "Software and Web Development Intern",
          company: "fibrisTerre",
          company_url: "https://www.linkedin.com/company/fibristerre//",
          logo_path: "fibristerre_logo.jpeg",
          duration: "Multiple Durations",
          location: "Germany (Remote)",
          description:
            "As a Software and Web Development Intern, I contributed to the creation of an optical fiber-based structural health monitoring system. My responsibilities included assisting in the development of a real-time Structural Health Monitoring and Alarm system. I worked on the front-end using React and the back-end with Flask and Django. Furthermore, I applied an AI forecasting model, ARIMA, to predict alarms in advance, enhancing the system's functionality.",
          color: "#0071C5",
        },
        {
          title: "Data Science Trainee",
          company: "ORE2METAL, Canada",
          company_url: "https://ore2metal.ca//",
          logo_path: "ore_logo.png",
          duration: "June 2021 - Oct 2021",
          location: "Canada (Remote)",
          description:
            "Worked as a Data Science and ML intern for building a smart manufacturing solution using IoT and ML techniques.",
          color: "#ee3c26",
        },
        {
          title: "Summer Intern",
          company: "Motion Signal Technologies, UK",
          company_url: "https://motionsignaltechnologies.com/",
          logo_path: "motion_logo.png",
          duration: "June 2021 - September 2018",
          location: "United Kingdom (Remote)",
          description:
            "During my internship with a Smart Acoustic Monitoring system, I focused on data engineering tasks. This involved working extensively with hdf5 files in Python and implementing various data preprocessing techniques to ensure data cleanliness. Additionally, I utilized the numpy module for effective dataset manipulation and management.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Developer Student Clubs Mentor",
          company: "Google DSC",
          logo_path: "gdsc_logo.png",
          duration: "July 2023 - Current",
          description:
            "Founder and former Student Lead at Google Developer Student Club. Set up team to organise workshops, talks, events and establish the club at the University.",
          color: "#D83B01",
        },
        {
          title: "ACM Co Chair",
          company: "ACM",
          company_url: "https://www.acmbpdc.org/",
          logo_path: "acm_logo.png",
          duration: "June 2022 - Current",
          description:
            "My responsibility for this program was to create opensource environment in college apart from conducting technical events and competitions. We have organised multiple hackathons and competitions. We have build opensource community of our own college.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create deployable applications powered with Gen AI, multi agentic systems, ML and deploy them using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Research & Patents",
  description: "Peer‑reviewed publications and filed/issued patents",
  avatar_image_path: "projects_image.svg",
};

const showcaseProjects = {
  projects: [
    {
      id: "sherlock",
      name: "Sherlock",
      role: "ADAS Fault Analytics & Annotation Platform",
      period: "2025 – Present",
      summary:
        "Web app to analyze and annotate ADAS faults, combining CV‑based object tracking, image labeling, time‑series analytics, and multimodal RAG.",
      highlights: [
        "Computer Vision: SAM2/SamWise tracking, Florence2 labeling",
        "Time‑series analytics with uPlot",
        "Annotation workflows with Annotorious",
        "Multimodal RAG summaries across image + time‑series",
        "Dockerized microservices with Azure Blob Storage",
      ],
      tech: [
        "React",
        "TypeScript",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "Azure",
        "OpenCV",
        "uPlot",
        "Annotorious",
        "SAM2",
        "Florence2",
      ],
      skills: [
        "Multi‑agent Systems",
        "RAG",
        "React.js",
        "Generative AI",
        "PostgreSQL",
        "Docker",
        "Microsoft Azure",
        "Software Testing",
        "FastAPI",
      ],
      image: "",
      link: "",
    },
    {
      id: "cmu-autograder",
      name: "CMU Autograder",
      role: "Microservices AI Autograder",
      period: "2025 – Present",
      summary:
        "Event‑driven platform with microservices for rubric‑based grading: LLM‑assisted static analysis, Docker‑sandboxed dynamic analysis, and NLP feedback insights.",
      highlights: [
        "Static analysis service (Python FastAPI) with LLMs (Gemini, OpenAI)",
        "Dynamic analysis service (Java Spring Boot) in isolated containers",
        "NLP clustering + custom embeddings for cohort insights",
      ],
      tech: [
        "Python",
        "FastAPI",
        "Java",
        "Spring Boot",
        "LLMs (Gemini/OpenAI/Ollama)",
        "Docker",
        "RabbitMQ",
        "PostgreSQL",
        "GCS",
        "Nginx",
        "Semgrep",
        "Docker Compose",
      ],
      skills: [
        "Multi‑agent Systems",
        "RAG",
        "React.js",
        "Generative AI",
        "PostgreSQL",
        "Docker",
        "Software Testing",
        "FastAPI",
      ],
      image: "",
      link: "",
    },
    {
      id: "siemens-rag",
      name: "Siemens Energy Global Knowledge Base Chatbot",
      role: "Enterprise RAG Platform",
      period: "2023 – 2024",
      summary:
        "Enterprise‑grade RAG over diverse docs with Azure AI Search, Document Intelligence, and LangChain; secure and scalable on Azure.",
      highlights: [
        "Azure AI Search and Document Intelligence",
        "LangChain pipelines and governance",
        "React + Quart application",
      ],
      tech: [
        "React",
        "Quart",
        "Azure AI Search",
        "LangChain",
        "Azure Document Intelligence",
        "Docker",
        "Azure",
      ],
      skills: ["RAG", "Azure", "LangChain", "React", "Security", "Scalability"],
      image: "",
      link: "",
    },
    {
      id: "cognito-ai",
      name: "CognitoAI",
      role: "Autonomous AI Recruitment Platform",
      period: "2025 – Present",
      summary:
        "Multi‑agent hiring automation with voice interviews, coding assessment, and analytics.",
      highlights: [
        "CrewAI agents for resume parsing, interviews (Retell AI), performance analysis",
        "Monaco editor + Judge0 multi‑language execution, hidden tests",
        "Next.js 14 + Supabase + Clerk for secure org auth",
      ],
      tech: [
        "Next.js 14",
        "TypeScript",
        "CrewAI",
        "OpenAI (GPT‑4o)",
        "Retell AI",
        "Supabase (PostgreSQL)",
        "Judge0",
        "Clerk",
        "Docker",
      ],
      skills: [
        "PostgreSQL",
        "Docker",
        "Multi‑agent Systems",
        "LangChain",
        "FastAPI",
        "Software Testing",
      ],
      image: "",
      link: "",
    },
    {
      id: "pet-esn",
      name: "Emergency Social Network for Pet Support",
      role: "Crisis Support Platform",
      period: "Jan 2025 – Apr 2025",
      summary:
        "Community platform for pet emergencies: real‑time chat, expert consultations, resource exchange, and robust admin features.",
      highlights: [
        "WebSocket chat and lost & found reporting",
        "OpenAI‑assisted expert skills extraction",
        "DAO‑pattern backend with MongoDB + in‑memory testing",
        "JWT auth, RBAC, Swagger/OpenAPI",
        "Socket.IO social features (wall, messaging, announcements)",
      ],
      tech: [
        "Node.js",
        "Express.js",
        "MongoDB (Mongoose)",
        "Socket.IO",
        "JWT",
        "OpenAI API",
        "REST",
        "Swagger/OpenAPI",
        "DAO Pattern",
        "Husky",
      ],
      skills: [
        "Realtime Systems",
        "Security",
        "DAO Pattern",
        "Testing",
        "API Design",
      ],
      image: "",
      link: "",
    },
  ],
};

const publications = {
  data: [
    {
      id: "p1",
      name:
        "A Study of Carbon Offsetting and Trading Framework using Blockchain and IoT",
      createdAt: "Patent 1040-2024 • Issued Jun 20, 2024",
      description:
        "Hierarchical blockchain with IoT‑backed telemetry for transparent, secure, and efficient carbon emission trading.",
      url:
        "https://drive.google.com/file/d/1l7Sjrs9S3hTMgCvlpBIEqEDSRhqKVLq5/view",
      type: "patent",
      patentId: "1040-2024",
    },
    {
      id: "p2",
      name: "Frame‑Level Facial Anti‑Spoofing Detection Using a CNN Ensemble",
      createdAt: "Patent 998-2024 • Issued Jun 10, 2024",
      description:
        "Ensemble of CNNs (BPX supervision, depth, patch) for lightweight frame‑level anti‑spoofing with deepfake robustness.",
      url:
        "https://drive.google.com/file/d/165uPGfQHOAN5miBEpkqGT7SdATH9uZoY/view?usp=sharing",
      type: "patent",
      patentId: "998-2024",
    },
    {
      id: "p3",
      name:
        "Arabic Text to Emirati Sign Language Generative AI Translation System",
      createdAt: "Patent 826-2024 • Issued May 21, 2024",
      description:
        "LLM‑guided morphological parsing with video sequence synthesis from ESL sign corpus; fingerspelling for OOV.",
      url:
        "https://drive.google.com/file/d/1-TcI7NGs5RTwfRekuJTmlgmVEaGsRINn/view",
      type: "patent",
      patentId: "826-2024",
    },
    {
      id: "1",
      name: "Agricultural supply chain management using hyperledger and AIOT",
      createdAt: "Published in Mar 2025",
      description:
        "Integrates Hyperledger Fabric with AI and IoT to improve traceability, security, and efficiency for sensitive‑goods logistics; discusses private blockchain benefits, regulatory compliance, and scalability.",
      url:
        "https://trebuchet.public.springernature.app/get_content/498f20ee-7b5e-439c-9bd3-5cc706d11920?utm_source=rct_congratemailt&utm_medium=email&utm_campaign=nonoa_20250321&utm_content=10.1007/s12652-024-04948-y",
      type: "publication",
    },
    {
      id: "2",
      name:
        "Crop Disease Detection and Classification using Transfer Learning and Deep CNNs",
      createdAt: "Dec 2023 (IEEE MoSICom)",
      description:
        "Smartphone‑based plant disease diagnosis using transfer learning across 54k images achieving strong performance (95.62% test accuracy).",
      url: "https://ieeexplore.ieee.org/document/10458763",
      type: "publication",
    },
    {
      id: "3",
      name: "Precision Agriculture for Indian Farms using AIOT",
      createdAt: "Nov 2023 (IEEE Engineering Informatics)",
      description:
        "AI + IoT for precision agriculture: soil classification, yield prediction, and plant disease detection with deployable web interface.",
      url:
        "https://ieeexplore.ieee.org/abstract/document/10520651/figures#figures",
      type: "publication",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "anurag.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with SWE, Gen AI, ML, AI, App/Mobile Dev and Cloud.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "1929 Crisanto Ave, Mountain View, California",
    locality: "Mountain View",
    country: "US",
    region: "CA",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/9zwLUZmiCCjfJ4dJA",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1 (650) 220-9090",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  showcaseProjects,
  contactPageData,
};
