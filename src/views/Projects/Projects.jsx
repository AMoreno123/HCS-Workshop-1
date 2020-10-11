import React from "react";
import Project from "../../components/Project/Project";
import CS from "../../assets/react.png"
import NotCSProject1 from "../../assets/Stem-Cell.jpg"
import NotCSProject2 from "../../assets/nanotech.jpg"
import NotCSProject3 from "../../assets/seaperch.jpg"

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      <Project title="HCS-Workshop-1"
      source= {CS}
      link= "https://github.com/racemore">
      </Project>
      <Project title="Nanotech Capstone Project Research Poster (2019-2020)"
      source= {NotCSProject1}
      link= "https://docs.google.com/presentation/d/1OFlouXs9tjyhASIFZXLt6pjnYoL86FwlG_tarZvyENk/edit?usp=sharing">
      </Project>
      <Project title="Stem Cell Therapy for Spinal Cord Injury Research Poster (2017-2018)"
      source= {NotCSProject2}
      link= "https://docs.google.com/presentation/d/1xDH-pf0T-wxiAK__tLzQphD-SSJ_r2hvCKXs0qWK5RI/edit?usp=sharing">
      </Project>
      <Project title="SeaPerch (2015)"
      source= {NotCSProject3}
      link= "https://seaperch.org/">
      </Project>
    </div>
  )
}

/* The HCS-Workshop-1 link will redirect you to my GitHub rather then back to the same website.
Given that I do not have extensive CS experience, I have included some non-CS related projects. 
The "Seaperch" link will direct you to the main competition page (more info about my role in my LinkedIn).
*/