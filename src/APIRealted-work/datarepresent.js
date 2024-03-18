import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataRepresent = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://raw.githubusercontent.com/anjalibartwal681/javascript/main/student-data.json'
                );
                setStudents(response.data);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div style={{ maxWidth: '1440px', margin: 'auto', padding: '0 135px' }}>
            <h1 style={{ textAlign: 'center' }}>Student Data</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>ID</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Address</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.id}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.name}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.add}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.contact}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataRepresent;
