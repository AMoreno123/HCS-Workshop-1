import React from "react";
import "./Experience.css";

function TimeLineItem(props) {
  return (
  <div
      onClick={() => {
      props.setActiveTitle(props.title);
      
    }}
    style={{textAlign: "center"}}
    className="timeline-item"
  >
    <h1>{props.title}</h1>
  </div>
  )
}
export default function ExperienceScreen() {
  const [activeTitle, setActiveTitle] = React.useState("Previous Experiences");

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background" style={{color: "whitesmoke"}}>
          <TimeLineItem 
            title="Research Fellow - climate modeling using Python for the EPS Department at Harvard"
            setActiveTitle={setActiveTitle}
          >
          </TimeLineItem>
          <TimeLineItem 
            title="Teaching Assistant"
            setActiveTitle={setActiveTitle}
          >
          </TimeLineItem>  
          <TimeLineItem
            title="Holy Cross Intern"
            setActiveTitle={setActiveTitle}>
          </TimeLineItem>
          <TimeLineItem
            title="Therapeutic Integration Intern - provided respite care to autistic youth"
            setActiveTitle={setActiveTitle}
          ></TimeLineItem>
        </div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
        </div>
      </div>
    </div>
  );
}
