import { technologies } from "../Utils/datas";

const Technologies = () => {

    return (
        <div className="work-info">
            <div className="works-item-tags">My Skills</div>
            <div className="row">
                {technologies.map((tech, index) => (
                    <div key={index} className="col-md-2 col-sm-4 col-xs-6 lang_skill">
                        <img src={tech.icon} alt={tech.name} className="tech-icon" />
                        <p>{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;
