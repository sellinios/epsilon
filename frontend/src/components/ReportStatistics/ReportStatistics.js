// src/components/ReportsStatistics/ReportsStatistics.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReportsStatistics = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        axios.get('/api/reports/')
            .then(response => setReports(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Reports and Statistics</h1>
            <ul>
                {reports.map(report => (
                    <li key={report.id}>
                        {report.type} - {report.inspector} - {report.principal} - {report.vessel}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReportsStatistics;
