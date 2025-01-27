import React, { useEffect, useState } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://portfolio-backend-bxyu.onrender.com') 
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        {projects.map((proj) => (
          <li key={proj.id}>
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            {/* or other fields from your Django model */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;