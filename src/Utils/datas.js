import {
    javascript,
    html,
    css,
    reactjs,
    mariadb,
    figma,
    sql,
    php,
    firebase,
    c,
    postgre,
    csharp,
    materialui,
    teamworking,
    ux,
    webdeveloping,
    problemsolving,
    wapa,
    TODO,
    piggypenny,
    pomo,
    ciakmov,
    briji,
    segno,
    circli
} from "../assets/icons";


const technologies = [
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Material UI",
        icon: materialui,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "SQL",
        icon: sql,
    },
    {
        name: "Maria DB",
        icon: mariadb,
    },
    {
        name: "PostgreSQL",
        icon: postgre,
    },
    {
        name: "Firebase",
        icon: firebase,
    },
    {
        name: "PHP",
        icon: php,
    },
    {
        name: "C / C++",
        icon: c,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "Figma",
        icon: figma,
    },
    {
        name: "C#",
        icon: csharp,
    },
    {
        name: "Coding",
        icon: webdeveloping,
    },
    {
        name: "UX",
        icon: ux,
    },
    {
        name: "Team working",
        icon: teamworking,
    },
    {
        name: "Problem solving",
        icon: problemsolving,
    },
    
];

const experiences = [
    {
        title: "Full Stack Developer - IT Consultant",
        company_name: "ALTEN Italia",
        date: "April 2024 - Actually",
        points: [
            "Developed web apps using React.js.",
            "Created a meteorological web app (university thesis) with API integration and Firebase.",
            "Utilized Scrum for efficient project delivery.",
            "Enhanced skills in JavaScript, React.js, PHP, and SQL.",
            "Focused on robust, scalable, and user-centric web applications."
        ],
    },
];

const projects = [
    {
        name: "WAPA",
        logo: wapa,
        info: "Weather and Advanced Predictions App",
        description:
            "Introducing WAPA: the Weather and Advanced Predictions App! I developed this web app with React as my university thesis project. With WAPA, you can get detailed weather information for the locations you care about, either via GPS or by searching manually. WAPA is a Progressive Web App (PWA), so you can install it directly from your browser for faster access! ⚠️ Responsive design is still being improved, so it may not be perfect on all devices. The app uses weather and astronomical APIs to collect data and charting libraries for clear and interactive representation. Weather and the universe, at your fingertips!",
        tags: [
            {
                name: "react",
            },
            {
                name: "firebase",
            },
            {
                name: "HTML",
            },
            {
                name: "JavaScript",
            },
            {
                name: "CSS",
            },
        ],
        features: [
            "🌤️Real-time weather data, with temperature graph ",
            "⏳Up to 5-day forecasts, updated every 3 hours ",
            "📊Advanced graphs on wind speed, atmospheric pressure, dew point, and air quality ",
            "💬User accounts to save up to 6 favorite locations ",
            "🌙Lunar phases and celestial events ",
            "🌍Natural events, categorized ",
            "🪐Near-Earth object monitoring ",
            "☀️Solar activity and solar flares ",
        ],
        start:"📅 04/2024",
        end:"📅 10/2024",
        source_code_link: "https://wapaweather.com/",
    },
    {
        "name": "Circli",
        "logo": circli,
        "info": "🔄📱 Mini social network for sharing thoughts and moments",
        "description": "I'm building this React-based social network where users can share posts, like, and comment, creating a dynamic and interactive community.",
        "tags": [
            { "name": "React" },
            { "name": "Firebase" },
            { "name": "Auth0" },
            { "name": "Material UI" },
            { "name": "JavaScript" },
            { "name": "HTML" },
            { "name": "CSS" }
        ],
        "features": [
            "🔐 Secure authentication with Firebase/Auth0",
            "📝 Share messages and images with the community",
            "❤️ Like and comment on posts in real time",
            "👤 Personalized user profile with stored data",
            "📱 Mobile-friendly and responsive design",
            "🚀⚠️ Coming soon – the project is still under development!"
        ],
        "technologies": [
            "⚛️ React",
            "🔥 Firebase/Auth0",
            "🎨 Material UI",
            "💻 HTML, CSS, JavaScript"
        ],
        "source_code_link": "https://github.com/your-repo/circli"
    },  
    {
        name: "PiggyPenny",
        logo: piggypenny,
        info: "🐷🚀 Personal finance app to manage your wallet",
        description: "I've developed this React web app to help you track your income and expenses in a simple and intuitive way.",
        tags: [
            { name: "React" },
            { name: "HTML" },
            { name: "JavaScript" },
            { name: "CSS" },
            { name: "ReactApexChart" },
            { name: "Firebase" },
            { name: "Material UI" }
        ],
        features: [
            "🔐 Google Sign-in for secure wallet management",
            "📋 Add expenses and income through an easy-to-use form",
            "🔍 Filter transactions based on your preferred period",
            "📑 View a complete list of your expenses in a clear and organized way",
            "📊 Analyze your financial data with interactive charts",
            "📱 Progressive Web App (PWA) – install it directly from your browser!"
        ],
        technologies: [
            "⚛️ React", 
            "🎨 Material UI", 
            "📊 ReactApexChart", 
            "🔥 Firebase", 
            "💻 HTML, CSS, JavaScript"
        ],
        source_code_link: "https://piggypennyapp.com/"
    },      
    {
        "name": "Segno",
        "logo": segno,
        "info": "📝📂 A simple web app for managing your notes",
        "description": "I've developed this PHP-based web application to help you create, organize, and manage your notes efficiently. Currently, it is not hosted.",
        "tags": [
            { "name": "PHP" },
            { "name": "HTML" },
            { "name": "CSS" },
            { "name": "MySQL" },
            { "name": "phpMyAdmin" }
        ],
        "features": [
            "🔐 User authentication for secure note management",
            "📝 Add notes with categories and tags for better organization",
            "❌ Delete notes when no longer needed",
            "📖 View and read all your saved notes easily"
        ],
        "technologies": [
            "🐘 PHP",
            "🗄️ MySQL",
            "🌐 HTML, CSS",
            "🛠️ phpMyAdmin"
        ],
        "source_code_link": "https://github.com/simlu2000/segno"
    },    
    {
        name: "YouTodo",
        logo: TODO,
        info: "📝🚀 ToDoList app to boost your productivity",
        description: "I've developed this React web app to help you organize your daily tasks and track your productivity with interactive charts.",
        tags: [
            { name: "React" },
            { name: "HTML" },
            { name: "JavaScript" },
            { name: "CSS" },
            { name: "React Calendar" },
            { name: "ReCharts" },
            { name: "Firebase" },
            { name: "Material UI" }
        ],
        features: [
            "📝 Add new tasks through an intuitive form",
            "📅 View your tasks day by day, also in the calendar",
            "📊 Monitor your productivity with pie and line charts",
            "🌙☀️ Light / Dark mode based on your preference",
            "📱 Progressive Web App (PWA) – install it directly from your browser!"
        ],
        technologies: [
            "⚛️ React",
            "📅 React Calendar",
            "📊 ReCharts",
            "🎨 Material UI",
            "🔥 Firebase",
            "💻 HTML, CSS, JavaScript"
        ],
        source_code_link: "https://youtodoapp.netlify.app/"
    },    
    {
        name: "Pomo",
        logo: pomo,
        info: "🍅⏳ Pomodoro timer app to boost your focus",
        description: "I've developed Pomo, a React app based on the Pomodoro technique, to help you stay focused and visualize your progress in a unique way! 🎯",
        tags: [
            { name: "React" },
            { name: "HTML" },
            { name: "JavaScript" },
            { name: "CSS" },
            { name: "Material UI" }
        ],
        features: [
            "👤 Sign in easily with just your name",
            "⏳ Use a 25-minute Pomodoro timer to maximize focus",
            "📈 Track your productivity with a line chart showing your tomato growth day by day",
            "📱 Progressive Web App (PWA) – install it directly from your browser for quick access!"
        ],
        technologies: [
            "⚛️ React",
            "🎨 Material UI",
            "💻 HTML, CSS, JavaScript"
        ],
        source_code_link: "https://focuspomoapp.netlify.app/"
    },    
    {
        name: "Briji",
        logo: briji,
        info: "🧑‍💼💼 Recruitment Platform",
        description:
            "Briji is a recruitment platform developed for a Web Design course by a team of 20 members, including both developers and designers. The project aims to simplify job searching for candidates and talent acquisition for companies. 🔎🏢 Data storage is managed using AirTable, and the platform is optimized for 1920x1080px resolution. The backend for login and registration was not implemented, but some components use Material Design 2.",
        tags: [
            { name: "🗄️ AirTable" },
            { name: "💻 HTML" },
            { name: "📜 JavaScript" },
            { name: "🎨 CSS" }
        ],
        features: [
            "🖨️ Print user data",
            "✏️ Modify user data",
            "🏢 View a company profile associated with a job post",
            "📑 Edit job listing details"
        ],
        source_code_link: "https://gruppo5webd.altervista.org/progetto_finale/home/homepage.html",
        start: "📅 04/2023",
        end: "📅 07/2023"
    },
    {
        name: "Ciakmov",
        logo: ciakmov,
        info: "🎬🍿 Movie Search Website",
        description:
            "Ciakmov is a website developed for the Web Application Development course (academic year 2021/2022), allowing users to search for movies showing in Genoa's cinemas and post reviews. 🏙️🎞️ Registered users can also subscribe to a weekly newsletter managed by administrators via a dedicated admin panel.",
        tags: [
            { name: "🐘 PostgreSQL" },
            { name: "🛢️ SQL" },
            { name: "🐬 MariaDB" },
            { name: "💻 PHP" },
            { name: "🖥️ HTML" },
            { name: "📜 JavaScript" },
            { name: "🎨 CSS" }
        ],
        features: [
            "🔐 Login and Sign Up",
            "📩 Newsletter (PHPMailer)",
            "⭐ Movie Ratings (score)",
            "⚙️ Administrative Area"
        ],
        source_code_link: "https://github.com/simlu2000/SAW",
        start: "📅 02/2022",
        end: "📅 08/2022"
    }    

];

const education = [
    {
        year:"2019 - Now",
        school:"University of Genoa, Italy",
        course:"Computer Science - Bachelor"
    },
    {
        year:"2014 - 2019",
        school:"Istituto F. Liceti, Rapallo (Italy)",
        course:"Corporate Information Systems"
    },
];

export { technologies, experiences, projects, education };
