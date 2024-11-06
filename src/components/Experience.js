import { experiences } from "../Utils/datas";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {

    return (
        <div className="container">
            <div className="works-item-tags">Experiences</div>

            <VerticalTimeline>
                {experiences.map((exp, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        date={exp.date}
                        iconStyle={{ background: '#FCA311', color: '#000000' }}
                    >
                        <h3 className="vertical-timeline-element-title">{exp.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{exp.company_name}</h4>
                        <ul id="exp-points">
                            {exp.points.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default Experience;
