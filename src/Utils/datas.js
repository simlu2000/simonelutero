import {
    javascript,
    html,
    css,
    reactjs,
    nodejs,
    mariadb,
    github,
    figma,
    sql,
    php,
    firebase,
    c,
    threejs,
} from "../assets/icons";


const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Maria DB",
        icon: mariadb,
    },
    {
        name: "SQL",
        icon: sql,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "PHP",
        icon: php,
    },
    {
        name: "Google Firebase",
        icon: firebase,
    },
    {
        name: "C",
        icon: c,
    },
    
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
    
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const projects = [
    {
        name: "WAPA",
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
        name: "Briji",
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

export { technologies, experiences, projects };