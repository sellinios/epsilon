// src/components/ClientPortal/ClientPortal.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClientPortal = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('/api/projects/')
            .then(response => setProjects(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Client's Portal</h1>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        {project.principal} - {project.vessel} - {project.date} - {project.service}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClientPortal;
