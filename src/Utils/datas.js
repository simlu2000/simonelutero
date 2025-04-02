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
    circli,
    shoesy,
    pomo,
    ciakmov,
    briji
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
            "Developing and maintaining web applications using React.js and other related technologies.",
            "In my professional experience, I have focused on developing web applications, with particular emphasis on a university thesis project centered around creating a meteorological web application. This project involved integrating APIs to display both basic and advanced weather data and using Google Firebase services for user authentication and real-time data management.",
            "During this work experience i applied agile development methodologies, specifically Scrum, to ensure efficient collaboration, iterative progress, and the timely delivery of project features. This approach allowed me to manage complex tasks while maintaining flexibility and meeting deadlines.",
            "In addition to my project work, I did some courses to deepen my skills in web app developing. I have gained proficiency in JavaScript, the React.js library for building dynamic user interfaces, PHP, and SQL for database management and querying.",
            "This combination of hands-on project development and continuous learning has strengthened my technical skills, enabling me to contribute to the creation of robust, scalable, and user-centric web applications."
        ],
    },
];

const projects = [
    {
        name: "WAPA",
        logo:wapa,
        info:"Weather and Advanced Predictions App",
        description:
            "Progressive Web App for climate forecasting created for the university thesis project.The front- end part is still being improved and Google account access has yet to be implemented.",
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
            "Real-time display of weather conditions",
            "Short and long-term forecasts, with details on data such as temperature, precipitation, humidity, and wind",
            "Customize the forecast based on the user's location, on a special search from the relative search bar, or by selecting one of the favorite locations.",
            "Opportunity to register and authenticate to WAPA for additional features such as the ability to add up to six preferred locations",
            "Access to advanced atmospheric data, directly from NASA",
        ],
        source_code_link: "https://wapaweather.com/",
    },
    {
        name: "PiggyPenny",
        logo:piggypenny,
        info:"Personal finance app to manage your wallet",
        description:
            "React app to manage your wallet and see graphs about the revenues and outflows",
        tags: [
            {
                name: "react",
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
            {
                name:"ReactApexChart",
            },
            {
                name: "Firebase",
            },
            {
                name: "Material UI",
            },
        ],
        features: [
            "Google Sign-in",
            "Form to add expenses (revenues and outflows)",
            "Filters on the period of your interest",
            "List of all your expenses",
            "Charts about the period of your interest",
        ],
        source_code_link: "https://piggypennyapp.com/",
    },
    {
        name: "YouTodo",
        logo:TODO,
        info:"ToDoList app",
        description:
            "React app to add and control your tasks day by day and see charts about your productivity",
        tags: [
            {
                name: "react",
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
            {
                name:"React Calendar",
            },
            {
                name:"ReCharts",
            },
            {
                name: "Firebase",
            },
            {
                name: "Material UI",
            },
        ],
        features: [
            "Form to add new tasks",
            "Check your tasks day by day, also in the calendar",
            "Check your productivity with pie and line charts",
            "Light / dark mode",
        ],
        source_code_link: "https://youtodoapp.netlify.app/",
    },
    {
        name: "Pomo",
        logo:pomo,
        info:"Pomodoro timer app",
        description:
            "React app to improve your productivity growing tomatoes and see a trend chart",
        tags: [
            {
                name: "react",
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
            {
                name: "Material UI",
            },
        ],
        features: [
            "Sign in only with your name",
            "Pomodoro timer of 25 minutes",
            "Check your productivity with a line chart about your tomatoes day by day",
        ],
        source_code_link: "https://focuspomoapp.netlify.app/",
    },
    {
        name: "Briji",
        logo:briji,
        info:"Website of Recruitments",
        description:
            "Project created for the Web Design course, in a group of twenty people made up of both computer scientists and designers. The objective of the project was to create a job search platform. The site aims to facilitate the process of finding a challenging job by a candidate and that of finding a candidate by companies. Data storage was done via an AirTable database, and the platform was designed to work primarily on screens with a resolution of 1920x1080px.The back-end development of Login and Registration features user/company is not been carried out. As regards the design, Material was used for some components Design 2.",
        tags: [
            {
                name: "AirTable",
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
            "Print user data",
            "Modify user data",
            "Printing of a company profile corresponding to an advertisement",
            "Edit announcement data"
        ],
        source_code_link: "https://gruppo5webd.altervista.org/progetto_finale/home/homepage.html",
        start: "04/2023",
        end: "07/2023"
    },
    {
        name: "Ciakmov",
        logo:ciakmov,
        info:"Movie search website",
        description:
            "Project created for the Web Application Development course, academic year 2021/2022. The idea was to create a website that would allow users to search for films showing at cinemas near Genoa and to see and insert reviews (only if registered). Furthermore, the user can choose whether or not to receive weekly newsletters (which can be sent by administrators via a specific administrative area) relating to new films.",
        tags: [
            {
                name: "PHP",
            },
            {
                name: "PostgreSQL",
            },
            {
                name: "SQL",
            },
            {
                name: "MariaDB",
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
            "Login and Sign Up",
            "Newsletter (PHPMailer)",
            "Movie Ratings (score)",
            "Administrative Area"

        ],
        source_code_link: "https://github.com/simlu2000/SAW",
        start :"02/2022",
        end:"08/2022"
    },


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
