export const personalInfo = {
  name: 'Abdullah Masoud Alotaibi',
  title: 'Information Systems Specialist | API & Integration Developer | Web Developer',
  location: 'Riyadh, Saudi Arabia',
  email: 'Abdull.Otaibi@hotmail.com',
  phone: '0537887076',
  languages: ['Arabic', 'English'],
  linkedin: 'https://www.linkedin.com/in/abdullah-alotaibi-7821153b3/',
  cvFile: '/cv.pdf',
  heroDescription:
    'I design and build practical, scalable, and user-focused digital solutions using web development, APIs, data analysis, automation, and modern software technologies.',
  aboutParagraphs: [
    'I am an Information Systems specialist based in Riyadh, Saudi Arabia, with a strong foundation in web development, data analysis, API integration, and automation. I enjoy building applications that solve real problems and deliver clear value to users.',
    'My experience includes frontend and backend development, API design, database management, web scraping, and data-driven applications. I have worked with technologies such as Python, Selenium, React.js, Node.js, MongoDB, SQL Server, ASP.NET Core Web API, and Postman.',
    'I am especially interested in API development, system integration, scalable backend services, and creating efficient digital solutions that connect systems and simplify workflows.',
  ],
  quickInfo: [
    { label: 'Location', value: 'Riyadh, Saudi Arabia' },
    { label: 'Degree', value: 'B.Sc. in Information Systems' },
    { label: 'University', value: 'Prince Sattam Bin Abdulaziz University' },
    { label: 'GPA', value: '4.32 / 5.0' },
    { label: 'Current Role', value: 'Junior Integration Developer' },
  ],
  heroBadges: ['React.js', 'Node.js', 'APIs', 'Python', 'MongoDB', 'SQL Server', 'Data Analysis'],
}

export const skills = {
  'Web Development': [
    'React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'ASP.NET MVC', 'Blazor', 'HTML', 'CSS', 'JavaScript',
  ],
  'API & Integration': [
    'REST APIs', 'API Design', 'API Development', 'API Security',
    'Google Cloud Apigee Fundamentals', 'Postman', 'System Integration',
  ],
  'Data & Automation': [
    'Python', 'Pandas', 'Selenium', 'Excel', 'Data Cleaning',
    'Data Visualization', 'Statistical Analysis', 'Web Scraping',
  ],
  Databases: ['MongoDB', 'SQL Server', 'Entity Framework', 'Database Management'],
  'Other Skills': [
    'Project Management', 'UI Planning', 'Risk Management',
    'Stakeholder Analysis', 'Machine Learning Fundamentals',
  ],
}

export const softSkills = [
  'Problem Solving', 'Critical Thinking', 'Teamwork',
  'Time Management', 'Adaptability', 'Attention to Detail',
]

export const projects = [
  {
    name: 'Pathly — Smart Career Pathway Analytics',
    type: 'Graduation Project',
    date: 'September 2024 – May 2025',
    tech: ['Python', 'Selenium', 'Excel', 'MongoDB', 'APIs', 'React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'AI Concepts'],
    description:
      'Pathly is an AI-powered web platform designed to help students and professionals explore personalized career paths. The system analyzes LinkedIn data to identify hiring trends, required skills, and career growth opportunities.',
    highlights: [
      'Built a responsive frontend using React.js and Tailwind CSS.',
      'Developed a secure backend using Node.js, Express.js, and MongoDB.',
      'Used Python and Selenium to collect and analyze career-related data.',
      'Integrated APIs and AI logic to generate smart career recommendations.',
      'Delivered a data-driven experience for career exploration and planning.',
    ],
    link: null,
    featured: true,
  },
  {
    name: 'Exploring Car Characteristics & Performance',
    type: 'Data Analysis',
    date: 'January 2024 – May 2024',
    tech: ['Python', 'Pandas', 'Excel', 'Data Cleaning', 'Data Visualization', 'Statistical Analysis'],
    description:
      'A data analysis project focused on studying more than 800 vehicles from the GCC region. The project explored how vehicle attributes such as horsepower, fuel economy, and engine capacity affect performance.',
    highlights: [
      'Cleaned and prepared vehicle data for analysis.',
      'Applied statistical analysis to identify performance patterns.',
      'Created visual insights using charts and graphs.',
      'Delivered clear findings about the relationship between car features and performance.',
    ],
    link: null,
    featured: false,
  },
  {
    name: 'Citizen-Government Communication App',
    type: 'Project Management',
    date: 'January 2024 – April 2024',
    tech: ['Project Management', 'UI Planning', 'Risk Management', 'Stakeholder Analysis'],
    description:
      'A planned digital platform designed to improve communication between citizens and government entities through a centralized and user-friendly application.',
    highlights: [
      'Defined project scope and key user roles.',
      'Planned the interface structure and main system features.',
      'Conducted risk analysis to improve feasibility and user trust.',
      'Covered the full project lifecycle from planning to closure.',
    ],
    link: null,
    featured: false,
  },
  {
    name: 'Career Counseling App',
    type: 'Mobile App',
    date: 'September 2024 – December 2024',
    tech: ['Flutter', 'Dart', 'UI/UX Design', 'Modular Code Architecture'],
    description:
      'A mobile application that helps students choose suitable career paths based on their academic major and interests.',
    highlights: [
      'Designed interactive screens for field and career selection.',
      'Added career information, required skills, and curated learning resources.',
      'Built smooth navigation and responsive mobile layouts.',
      'Used modular architecture to support scalability and maintainability.',
    ],
    link: null,
    featured: false,
  },
]

export const experience = [
  {
    role: 'Junior Integration Developer',
    company: 'EJADA Systems',
    location: 'Riyadh, Saudi Arabia',
    date: 'September 2025 – Present',
    current: true,
    description:
      'Working in the integration and API development field with a focus on learning and applying modern API design, development, and security practices.',
    points: [
      'Completed Google Cloud Apigee training in API Design and Fundamentals.',
      'Completed training in API Security.',
      'Completed training in API Development.',
      'Strengthened knowledge in API lifecycle, integration concepts, and scalable service design.',
    ],
  },
  {
    role: 'Intern',
    company: 'EJADA Systems',
    location: 'Riyadh, Saudi Arabia',
    date: 'June 2025 – August 2025',
    current: false,
    description:
      'Completed a technical internship focused on backend development, API testing, database integration, and user interface development.',
    points: [
      'Built and tested ASP.NET Core Web API for a Student Management System.',
      'Used Entity Framework and SQL Server for database operations.',
      'Designed simple user interfaces with ASP.NET MVC and Blazor.',
      'Tested and validated API endpoints using Postman.',
    ],
  },
]

export const education = {
  degree: 'B.Sc. in Information Systems',
  university: 'Prince Sattam Bin Abdulaziz University (PSAU)',
  year: '2025',
  gpa: '4.32 / 5.0',
  description:
    'Studied Information Systems with a focus on software development, data analysis, system design, project management, databases, and practical technology solutions.',
}

export const contact = {
  heading: "Let's Connect",
  description:
    'I am open to opportunities, collaborations, and projects related to API development, system integration, web development, and data-driven applications.',
  items: [
    { label: 'Email', value: 'Abdull.Otaibi@hotmail.com', href: 'mailto:Abdull.Otaibi@hotmail.com' },
    { label: 'Phone', value: '0537887076', href: 'tel:0537887076' },
    { label: 'Location', value: 'Riyadh Region, Saudi Arabia', href: null },
    { label: 'Languages', value: 'Arabic, English', href: null },
  ],
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
