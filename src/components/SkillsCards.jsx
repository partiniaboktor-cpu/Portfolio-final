import React from "react";
import "./SkillsCards.css";

const skills = [
  "Adobe illustrator",
  "Figma",
  "After effects",
  "Blender",
  "Adobe premier",
  "Visual studio code",
];

const SkillsCards = () => {
  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div key={index} className="skill-card">
          <span>{skill}</span>
        </div>
      ))}
    </div>
  );
};

export default SkillsCards;
