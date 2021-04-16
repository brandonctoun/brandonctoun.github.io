import React from 'react'

const Skills = () => {

  const skillData = [
    {
      "name": "ReactJs",
      "level": 90
    },
    {
      "name": "CSS",
      "level": 75
    },
    {
      "name": "HTML5",
      "level": 70
    },
    {
      "name": "Git",
      "level": 80
    },
    {
      "name": "T-SQL",
      "level": 65
    },
    {
      "name": "C#",
      "level": 50
    },
    {
      "name": ".NET",
      "level": 50
    }
  ];

  const skills = skillData.map((skills) => {
    const className = 'bar-expand ' + skills.name.toLowerCase();
    return <li key={skills.name}><span style={{ width: `${100-skills.level}%` }} className={className}></span><em>{skills.name}</em></li>
  })

  return (
    <div className="condiv skills">
      <h1 className="subtopic">My Skills</h1>
      <div className="bars">
        <ul className="skills">
          {skills}
        </ul>
      </div>
    </div>
  )
}
export default Skills