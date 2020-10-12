import React from "react";
import "./Education.css";

function SchoolDetails(props) {
    return (
    <div
        style ={{marginBottom: "50px", color: "gray"}}
        className="ed-item h1"
    >
      <h1>{props.schoolinfo}</h1>
    </div>
    )
  }

export default function EducationScreen() {
    const [activeSchoolDetails, setActiveSchoolDetails] = React.useState("");

    return (
        <div className= "ed-background">
            <div className= "ed-item"
                style={{color: "white"}}>
                    <h1>Harvard College</h1>
                        <SchoolDetails schoolinfo= "Expected Year of Graduation: 2024"
                        setActiveSchoolDetails={setActiveSchoolDetails}>
                        </SchoolDetails>
                    <h1 style={{topMargin: "20%"}}>Wheaton High School</h1>
                        <SchoolDetails schoolinfo= "Expected Year of Graduation: 2024"
                        setActiveSchoolDetails={setActiveSchoolDetails}>
                        </SchoolDetails>

            </div>
            <h1>{activeSchoolDetails}</h1>
        </div>
    )
  }

  