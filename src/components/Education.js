import { education } from "../Utils/datas";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Education = () => {

    return (
        <>
            <div className="container">
                <div className="works-item-tags">Education</div>

                <VerticalTimeline>
                    {education.map((edu, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--education"
                            date={edu.year}
                            iconStyle={{ background: '#FCA311', color: '#000000' }}
                        >
                            <h3 className="vertical-timeline-element-title">{edu.school}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{edu.course}</h4>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>

            </div>

        </>
    )
}
export default Education;