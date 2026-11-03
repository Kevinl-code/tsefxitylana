import { SymposiumEvent } from '../types';

export const FLAGSHIP_EVENT: SymposiumEvent = {
  id: 'vecnas-paradox',
  title: "Vecna's Paradox: Context-Aware Intent Reasoning",
  codeName: 'OPERATION UPSIDE DOWN',
  category: 'flagship',
  characterPatron: 'Vecna / The Mind Flayer',
  characterRole: 'Lord of the Upside Down',
  characterQuote: '"Your clock is ticking. The rift widens with every erroneous evaluation."',
  tagline: 'The Ultimate 4-Hour Intent-Aware Ideathon',
  description: 'Traditional strategy analysis tools and decision-support systems operate primarily on binary or quantitative evaluations—classifying actions as strictly correct, incorrect, optimal, or sub-optimal. However, human decision-making relies on strategic intent, long-term planning, and context built over time. In this 4-hour ideathon, teams develop an Intent-Aware Adaptive AI Coach that interprets player decisions through accumulated temporal evidence rather than static board evaluation alone.',
  rounds: [
    {
      roundNumber: 1,
      title: 'Sequential Context Building & Memory Pipeline',
      description: 'Capture decision history over time using sequential representation models or temporal decay memory mechanisms (e.g., LIF / EMA frameworks) on structured game trajectories.',
      duration: '90 Minutes'
    },
    {
      roundNumber: 2,
      title: 'Dynamic Context Injection & LLM Reasoning',
      description: 'Pass accumulated temporal evidence into an LLM framework to generate human-understandable, context-aware coaching that explains player intent and recurring strategic missteps.',
      duration: '120 Minutes'
    },
    {
      roundNumber: 3,
      title: 'Strategic Insights Dashboard & Defense',
      description: 'Design a visual UI module highlighting detected cognitive patterns, planning consistency, and interactive conversational feedback loops for the Hawkins Research Directorate jury.',
      duration: '30 Minutes'
    }
  ],
  rules: [
    'Open to undergraduate and postgraduate students from Data Science, Computer Science, IT, AI&DS, and allied disciplines.',
    'Teams must comprise 4 to 5 registered members.',
    'Laptops with necessary npm,Local LLM environments,libraries must be brought by participants.',
    'External internet access will be monitored. Pre-built canned solutions will lead to instant Hawkins Lab disqualification.',
    'Dataset and specific challenge parameters will be revealed only at the inauguration.',
    'Judges decision is final, absolute, and binding under Hawkins Security protocols.'
  ],
  teamSize: '4 - 5 Members',
  prizePool: 'Honors & Perks',
  firstPrize: 'Winner (1st Place): Certificate + Trophy Award + Premium Tool Benefits (Exclusive API Keys & Heber Data Community Lifetime Membership Access)',
  secondPrize: 'Runner-Up (2nd Place): Certificate + Shield Award + Developer Tool Benefits (API Credits & Heber Data Community Priority Membership)',
  timeSlot: '10:00 AM - 4:00 PM (incl. Build + Presentation & Jury Evaluation)',
  venue: 'Old Auditorium Lab',
  coordinators: [
    { name: 'Dr. ', phone: '+91 xxxxxxxxxx', role: '' },
    { name: 'Arumuga Perumal S', phone: '+91 7010754100', role: 'Assistant Tech Head' },
    { name: 'Kevin Lazarus B', phone: '+91 9043558840', role: 'Technical Lead' }
  ],
  iconName: 'Cpu',
  badgeColor: 'border-red-600 bg-red-950/80 text-red-400',
  accentGlow: 'shadow-[0_0_35px_rgba(239,68,68,0.6)]'
};

export const TECHNICAL_EVENTS: SymposiumEvent[] = [
  {
    id: 'cerebro-code',
    title: 'The Cerebro Code (Bug Flayer)',
    codeName: 'RADIO TOWER CEREBRO',
    category: 'technical',
    characterPatron: 'Dustin Henderson',
    characterRole: 'Radio Antenna Prodigy & Cerebro Engineer',
    characterQuote: '"Never-ending code! We are patch-cabling the radio to save the world!"',
    tagline: 'Competitive Coding & Algorithmic Bug Hunt',
    description: 'Tune your terminal into Cerebro’s highest frequency! A two-stage competitive programming clash testing rapid problem-solving, algorithm optimization, and reverse debugging.',
    rounds: [
      {
        roundNumber: 1,
        title: 'Hawkins Signal Debug',
        description: 'Exterminate sinister bugs and syntax rot from 15 infected code fragments under stringent time constraints.',
        duration: '45 Minutes'
      },
      {
        roundNumber: 2,
        title: 'Suzie Do You Copy?',
        description: 'Solve complex algorithmic logic, graph traversals, and dynamic programming challenges to transmit the final deciphered payload.',
        duration: '60 Minutes'
      }
    ],
    rules: [
      'Individual or team of 2 participants allowed.',
      'Permitted languages: Python, C++, Java, and C.',
      'Plagiarism or use of unauthorized AI copilots triggers instant disqualification.',
      'Points awarded for execution accuracy and asymptotic runtime efficiency.'
    ],
    teamSize: '1 - 2 Members',
    prizePool: 'Honors & Perks',
    firstPrize: 'Winner (1st Place): Certificate + Trophy Award + Heber Data Community Access',
    secondPrize: 'Runner-Up (2nd Place): Certificate + Shield Award + Developer Benefits',
    timeSlot: '10:00 AM - 01:00 PM',
    venue: 'CS Lab 1 & 2, PG Block',
    coordinators: [
      { name: 'Aravinthan G', phone: '+91 xxxxxxxx', role: 'Event Head' },
      { name: 'Ponvasanth', phone: '+91 xxxxxxxx', role: 'Student Coordinator' }
    ],
    iconName: 'Terminal',
    badgeColor: 'border-amber-500 bg-amber-950/80 text-amber-400',
    accentGlow: 'shadow-[0_0_25px_rgba(245,158,11,0.5)]'
  },
  {
    id: 'hawkins-lab-dossier',
    title: 'Hawkins Lab Dossier (Paper Presentation)',
    codeName: 'CLASSIFIED MKULTRA ARCHIVE',
    category: 'technical',
    characterPatron: 'Dr. Martin Brenner (Papa)',
    characterRole: 'Hawkins Research Director',
    characterQuote: '"Progress requires bold research into the unknown frontiers of intelligence."',
    tagline: 'Research Paper & Conceptual PPT Presentation',
    description: 'Present pioneering research papers and conceptual architectures on Big Data Analytics, Generative AI, Large Language Models, Quantum Data Computing, or Ethical AI in modern cyberspace.',
    rounds: [
      {
        roundNumber: 1,
        title: 'Abstract Dossier Screening',
        description: 'Pre-symposium evaluation of submitted manuscript abstracts (max 300 words with IEEE format).',
        duration: 'Prior to Event'
      },
      {
        roundNumber: 2,
        title: 'The Brenner Committee Defense',
        description: '8-minute oral slide presentation followed by 3-minute rapid interrogation by the defense committee.',
        duration: '10 Mins / Team'
      }
    ],
    rules: [
      'Team of 1 to 2 authors.',
      'Original papers only; plagiarism over 15% will lead to immediate rejection.',
      'Slides should adhere to academic rigor with clear methodology and result plots.'
    ],
    teamSize: '1 - 2 Members',
    prizePool: 'Honors & Perks',
    firstPrize: 'Winner (1st Place): Certificate + Trophy Award + Heber Data Community Access',
    secondPrize: 'Runner-Up (2nd Place): Certificate + Shield Award + Developer Benefits',
    timeSlot: '10:00 AM - 01:00 PM',
    venue: 'Classroom 304, 3rd Floor, Admin Block',
    coordinators: [
      { name: 'Rajakumar Azariah S', phone: '+91 xxxxxxxxx', role: 'Event Head' },
      { name: 'Nirmal G', phone: '+91 xxxxxxxxx', role: 'Student Coordinator' }
    ],
    iconName: 'FileText',
    badgeColor: 'border-cyan-500 bg-cyan-950/80 text-cyan-400',
    accentGlow: 'shadow-[0_0_25px_rgba(6,182,212,0.5)]'
  },
  {
    id: 'hellfire-query',
    title: 'The Hellfire Query',
    codeName: 'EDDIE’S 20-SIDED DIE',
    category: 'technical',
    characterPatron: 'Eddie Munson',
    characterRole: 'Hellfire Club Master',
    characterQuote: '"The dice never lies, but the database does. Only the sharpest SQL minds can survive the inferno."',
    tagline: 'Database Forensics & Dashboard Analytics',
    description: 'Analyze the Hawkins murder mystery dataset using advanced SQL queries, relational joins, and data visualization dashboards to uncover hidden patterns and solve the case.',
    rounds: [
      {
        roundNumber: 1,
        title: 'The Dungeon Crawl (Speed Queries)',
        description: 'Rapid-fire SQL puzzles: Write intricate joins, subqueries, and grouping rollups against ticking timers.',
        duration: '45 Minutes'
      },
      {
        roundNumber: 2,
        title: 'The Dashboard Design Challenge',
        description: 'Create dashboards to visualize the findings from the SQL analysis and present a comprehensive report to the judges.',
        duration: '30 Minutes'
      }
    ],
    rules: [
      'Individual or team of 2.',
      'Databases: PostgreSQL / MySQL',
      'Dashboard tools: Tableau / Power BI (optional)',
      'Evaluation based on query correctness, index awareness, and execution cost optimization.'
    ],
    teamSize: '1 - 2 Members',
    prizePool: 'Honors & Perks',
    firstPrize: 'Winner (1st Place): Certificate + Trophy Award + Heber Data Community Access',
    secondPrize: 'Runner-Up (2nd Place): Certificate + Shield Award + Developer Benefits',
    timeSlot: '10:00 AM - 01:00 PM',
    venue: 'CS Lab 3, PG Block',
    coordinators: [
      { name: 'xxxxxxxx', phone: '+91 xxxxxxxx', role: 'Event Head' },
      { name: 'xxxxxxxx', phone: '+91 xxxxxxxx', role: 'Student Coordinator' }
    ],
    iconName: 'Database',
    badgeColor: 'border-red-500 bg-red-950/80 text-red-400',
    accentGlow: 'shadow-[0_0_25px_rgba(239,68,68,0.5)]'
  },
  {
    id: 'web-of-vecna',
    title: 'Web of Vecna (AI Prompt & Web Design)',
    codeName: 'MAX’S CASSETTE STORY',
    category: 'technical',
    characterPatron: 'Max Mayfield',
    characterRole: 'The Brave Visionary',
    characterQuote: '"Music reaches the mind... but AI Visuals illuminates the dark truth."',
    tagline: 'AI Prompt and Web Designing',
    description: 'Transform the given theme into ai prompted visuals and interactive dashboards. Participants will be evaluated on their ability to generate high-quality AI images, create compelling data visualizations, and design user-friendly web interfaces that effectively communicate insights.',
    rounds: [
      {
        roundNumber: 1,
        title: 'The AI Prompt Challenge',
        description: 'Generate AI images from the given theme using prompt engineering techniques. Participants will be evaluated on the creativity, relevance, and quality of their generated images.',
        duration: '60 Minutes'
      },
      {
        roundNumber: 2,
        title: 'The Web Design Challenge',
        description: 'Create an interactive web dashboard that effectively communicates insights from the generated AI images. Participants will be evaluated on the usability, aesthetics, and functionality of their web designs.',
        duration: '60 Minutes'
      }
    ],
    rules: [
      'Team of 1 to 2 members.',
      'Tools allowed: ChatGPT, DALL-E, MidJourney, Stable Diffusion, prompt engineering tools, and web development frameworks (HTML, CSS, JavaScript, React, etc.).',
      'Judged on UX aesthetics, clarity of insights, color harmony, and interactivity.'
    ],
    teamSize: '1 - 2 Members',
    prizePool: 'Honors & Perks',
    firstPrize: 'Winner (1st Place): Certificate + Trophy Award + Heber Data Community Access',
    secondPrize: 'Runner-Up (2nd Place): Certificate + Shield Award + Developer Benefits',
    timeSlot: '10:00 AM - 01:00 PM',
    venue: 'CS Lab 3, PG Block',
    coordinators: [
      { name: 'Divya Sri M', phone: '+91 XXXXXXXXX', role: 'Event Head' },
      { name: 'Dharani', phone: '+91 XXXXXXXXX', role: 'Student Coordinator' }
    ],
    iconName: 'PieChart',
    badgeColor: 'border-emerald-500 bg-emerald-950/80 text-emerald-400',
    accentGlow: 'shadow-[0_0_25px_rgba(16,185,129,0.5)]'
  }
];

export const NON_TECHNICAL_EVENTS: SymposiumEvent[] = [
  {
    id: 'hellfire-boardroom',
    title: 'The Hellfire Boardroom (Corporate Walk)',
    codeName: 'SUIT UP HAWKINS',
    category: 'non-technical',
    characterPatron: 'Jason Carver & Eddie Munson',
    characterRole: 'The Boardroom Leaders',
    characterQuote: '"First impressions matter in Hawkins, whether you are running a high-stakes meeting or saving the town."',
    tagline: 'Corporate Walk & Professional Persona Showcase',
    description: 'Suit up in formal 80s corporate attire! A professional walk and persona evaluation where participants demonstrate executive poise, impeccable grooming, corporate etiquette, and spontaneous problem-solving before the Hawkins Boardroom panel.',
    rounds: [
      {
        roundNumber: 1,
        title: 'The Executive Stride',
        description: 'Formal corporate walk and posture assessment showcasing professional presence in 80s executive attire.',
        duration: '30 Minutes'
      },
      {
        roundNumber: 2,
        title: 'Boardroom Interrogation',
        description: 'Spontaneous HR and crisis management questions fielded under pressure by the Hawkins executive committee.',
        duration: '45 Minutes'
      }
    ],
    rules: [
      'Individual or team of 2 participants.',
      'Strict formal business attire is mandatory.',
      'Evaluation based on confidence, body language, articulation, and presence of mind.'
    ],
    teamSize: '1 - 2 Members',
    prizePool: 'Honors & Perks',
    firstPrize: 'Winner (1st Place): Certificate + Trophy Award',
    secondPrize: 'Runner-Up (2nd Place): Certificate + Shield Award',
    timeSlot: '11:00 AM - 12:30 PM',
    venue: 'Seminar Hall I, Admin Block',
    coordinators: [
      { name: 'Dr. C. Linda Hepsibha', phone: '+91 xxxxxxxxx', role: 'Event In-charge' },
      { name: 'Team Lead', phone: '+91 xxxxxxxxx', role: 'Student Coordinator' }
    ],
    iconName: 'UserCheck',
    badgeColor: 'border-indigo-500 bg-indigo-950/80 text-indigo-400',
    accentGlow: 'shadow-[0_0_25px_rgba(99,102,241,0.5)]'
  },
  {
    id: 'hawkins-av-archive',
    title: 'The Hawkins AV Archive (Multimedia Storytelling)',
    codeName: 'MULTIMEDIA CHRONICLES',
    category: 'non-technical',
    characterPatron: 'Jonathan Byers & Nancy Wheeler',
    characterRole: 'Visual Storytellers',
    characterQuote: '"The camera captures what the human eye refuses to believe."',
    tagline: 'Multimedia Storytelling & Creative Video Production',
    description: 'Weave compelling narratives and digital media reels! Teams will craft a dynamic multimedia presentation or short digital story fusing retro 80s synth atmospheres, cinematic editing, and modern data storytelling concepts.',
    rounds: [
      {
        roundNumber: 1,
        title: 'The Reel Cut',
        description: 'Submission and screening of dynamic digital storyboards and short video edits themed around data and mystery.',
        duration: 'Prior Submission & Screening'
      },
      {
        roundNumber: 2,
        title: 'Director’s Commentary',
        description: 'A live 3-minute defense of the editing choices, narrative flow, and creative media asset utilization.',
        duration: '5 Mins / Team'
      }
    ],
    rules: [
      'Team of 1 to 3 members.',
      'Content must be original and adhere strictly to time limits (60–90 seconds for video or 10 slides for storyboards).',
      'Judged on visual creativity, editing quality, audio synchronization, and thematic impact.'
    ],
    teamSize: '1 - 3 Members',
    prizePool: 'Honors & Perks',
    firstPrize: 'Winner (1st Place): Certificate + Trophy Award',
    secondPrize: 'Runner-Up (2nd Place): Certificate + Shield Award',
    timeSlot: '11:30 AM - 01:00 PM',
    venue: 'Digital Media Studio, Bishop Heber College',
    coordinators: [
      { name: 'Ronald Weasley J', phone: '+91 97871 44320', role: 'Event Head' },
      { name: 'Sneha M', phone: '+91 96001 33490', role: 'Student Coordinator' }
    ],
    iconName: 'Video',
    badgeColor: 'border-blue-500 bg-blue-950/80 text-blue-400',
    accentGlow: 'shadow-[0_0_25px_rgba(59,130,246,0.5)]'
  },
  {
    id: 'palace-arcade-draft',
    title: 'The Palace Arcade Draft (Franchise Auction)',
    codeName: 'DATA TECH FRANCHISE AUCTION',
    category: 'non-technical',
    characterPatron: 'Dustin & Lucas',
    characterRole: 'Arcade Strategists',
    characterQuote: '"You gotta manage your virtual purse wisely if you want to assemble the ultimate dream team to conquer the campaign!"',
    tagline: 'Strategic Tech Asset & Talent Auction Showdown',
    description: 'Step into the high-stakes auction room at the Palace Arcade! Teams receive a fixed virtual purse to strategically bid on elite coder assets, machine learning specialists, database architects, and wildcard perks to build the ultimate winning franchise.',
    rounds: [
      {
        roundNumber: 1,
        title: 'The Purse Allocation Brief',
        description: 'Review player profiles, skill ratings, base prices, and financial constraints before the bidding hammer drops.',
        duration: '30 Minutes Prep'
      },
      {
        roundNumber: 2,
        title: 'The Live Bidding Wars',
        description: 'Fast-paced live auction round where teams must outsmart rivals, manage budgets, and secure their dream squad.',
        duration: '90 Minutes'
      }
    ],
    rules: [
      'Team of 2 to 3 members.',
      'Virtual currency limits are strictly monitored; over-bidding results in instant asset forfeiture.',
      'Evaluation based on budget optimization, squad balance, and tactical asset selection.'
    ],
    teamSize: '2 - 3 Members',
    prizePool: 'Honors & Perks',
    firstPrize: 'Winner (1st Place): Certificate + Trophy Award',
    secondPrize: 'Runner-Up (2nd Place): Certificate + Shield Award',
    timeSlot: '02:00 PM - 04:00 PM',
    venue: 'Multipurpose Auditorium',
    coordinators: [
      { name: 'Karthik Raja', phone: '+91 99440 33215', role: 'Event In-charge' },
      { name: 'Monisha S', phone: '+91 98841 77652', role: 'Student Coordinator' }
    ],
    iconName: 'DollarSign',
    badgeColor: 'border-amber-400 bg-amber-950/80 text-amber-300',
    accentGlow: 'shadow-[0_0_25px_rgba(251,191,36,0.5)]'
  },
  
  {
    id: 'surfer-boy-pitch',
    title: 'Surfer Boy Pitch (Ad-Zap)',
    codeName: 'TRY BEFORE YOU DENY',
    category: 'non-technical',
    characterPatron: 'Argyle & Jonathan',
    characterRole: 'Delivery & Marketing Wizards',
    characterQuote: '"Try before you deny, bro! You gotta pitch this product like warm pineapple pizza!"',
    tagline: 'Tech Product Marketing & Ad-Zap Showdown',
    description: 'Put on your retro neon shades! Teams get a wacky, futuristic data-driven product (e.g., Mind Flayer Anti-Virus, Telekinetic Cloud Storage, Upside Down GPS Navigator) and must perform a comedic yet persuasive 80s commercial ad-zap and venture pitch.',
    rounds: [
      {
        roundNumber: 1,
        title: 'The Jingle Formulation',
        description: 'Pick an unexpected product card from the Surfer Boy box and prepare a 4-minute on-stage commercial with props.',
        duration: '30 Mins Prep'
      },
      {
        roundNumber: 2,
        title: 'Live Commercial Broadcast',
        description: 'Perform the live advertisement with punchlines, taglines, and marketing strategy before the panel.',
        duration: '5 Mins / Team'
      }
    ],
    rules: [
      'Team of 3 to 4 members.',
      'No vulgarity or offensive language.',
      'Judged on creativity, humor, marketing appeal, teamwork, and adherence to the 80s theme.'
    ],
    teamSize: '3 - 4 Members',
    prizePool: 'Honors & Perks',
    firstPrize: 'Winner (1st Place): Certificate + Trophy Award',
    secondPrize: 'Runner-Up (2nd Place): Certificate + Shield Award',
    timeSlot: '01:45 PM - 03:45 PM',
    venue: 'Multipurpose Auditorium',
    coordinators: [
      { name: 'Karthik Raja', phone: '+91 99440 33215', role: 'Event In-charge' },
      { name: 'Monisha S', phone: '+91 98841 77652', role: 'Student Coordinator' }
    ],
    iconName: 'Megaphone',
    badgeColor: 'border-orange-500 bg-orange-950/80 text-orange-400',
    accentGlow: 'shadow-[0_0_25px_rgba(249,115,22,0.5)]'
  },

  {
    id: 'dungeons-and-data',
    title: 'Dungeons & Data (Mystery Treasure Hunt)',
    codeName: 'SCOOPS TROOP TREASURE HUNT',
    category: 'non-technical',
    characterPatron: 'Steve Harrington & Robin Buckley',
    characterRole: 'Scoops Troop Detectives',
    characterQuote: '"You rule, you suck! We’re decoding Russian transmissions under the mall!"',
    tagline: 'Campus Mystery Puzzle Run & QR Treasure Hunt',
    description: 'An adrenaline-fueled treasure hunt across the Bishop Heber College lush campus! Clues will be hidden inside retro Russian cassettes, QR tags, binary riddles, and physical Hawkins artifacts. First team to solve all checkpoints and rescue the Mind Flayer core wins.',
    rounds: [
      {
        roundNumber: 1,
        title: 'The Starcourt Mall Clue',
        description: 'Solve the initial coordinate cipher to reveal the first location on the campus map.',
        duration: '20 Minutes'
      },
      {
        roundNumber: 2,
        title: 'The Russian Underground Hunt',
        description: 'Sprint across campus checkpoints, solve logic gate locks, and locate the final Hawkins Lab keycard.',
        duration: '60 Minutes'
      }
    ],
    rules: [
      'Team of 3 to 4 members.',
      'Teams must stay together; separating across campus leads to penalty.',
      'Physical damage to campus property or running in restricted zones causes disqualification.'
    ],
    teamSize: '3 - 4 Members',
    prizePool: 'Honors & Perks',
    firstPrize: 'Winner (1st Place): Certificate + Trophy Award',
    secondPrize: 'Runner-Up (2nd Place): Certificate + Shield Award',
    timeSlot: '02:30 PM - 04:30 PM',
    venue: 'Flagged off from College Quadrangle',
    coordinators: [
      { name: 'Ranjith Kumar', phone: '+91 98401 77651', role: 'Hunt Master' },
      { name: 'Akshaya N', phone: '+91 99431 88920', role: 'Student Lead' }
    ],
    iconName: 'Compass',
    badgeColor: 'border-red-400 bg-red-950/80 text-red-300',
    accentGlow: 'shadow-[0_0_25px_rgba(248,113,113,0.5)]'
  }
];

export const ALL_EVENTS: SymposiumEvent[] = [
  FLAGSHIP_EVENT,
  ...TECHNICAL_EVENTS,
  ...NON_TECHNICAL_EVENTS
];