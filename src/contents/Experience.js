import React from 'react';
import Widecard from '../components/Widecard';

const Experience = () => {
  return (
    <div className="condiv">
      <h1 className="subtopic">My Experience</h1>
      <Widecard title="Software Engineer" where="Connectwise, Tampa, FL" from="February 2017" to="August 2020" >
        <ul style={{ marginLeft: 32, padding: 5 }}>
          <li>
            Led a project team for a small web application to assist in customer onboarding for the Connectwise
            Manage product
            </li>
          <li>
            Wrote core architecture for React/Redux migration from legacy front end
            </li>
          <li>
            Created shared component library to unify platform
            </li>
          <li>
            Introduced React unit testing into codebase using Jest and Enzyme
            </li>
          <li>
            Mentored engineers on React/Redux best practices during technology transition from legacy code
            </li>
          <li>
            Developed and maintained new and existing REST APIs for features in C#/.NET
            </li>
          <li>
            Fixed bugs throughout all levels of Manage application
            </li>
        </ul>
      </Widecard>
      <Widecard title="Bachelors of Computer Science" where="University of South Florida, Tampa, FL" to="December 2016" />
    </div>
  )
}

export default Experience