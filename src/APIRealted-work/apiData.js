import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetchComponent = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://raw.githubusercontent.com/anjalibartwal681/javascript/main/student-data.json'  );
                setStudents(response.data);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);




    return (
        <div style={{
            maxWidth: '1440px',
            margin: 'auto',
            padding: '0 135px',
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: '40%',
                marginTop: '40px'
            }}>

                <div style={{
                    backgroundColor: '#ffff',
                    width: '400px',
                    top: '40px',
                    marginBottom: '40px',
                    padding: '20px 20px',
                    height: '125vh',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                }}>
                    <h1 style={{ textAlign: 'center' }}>Student Data</h1>
                    <ul style={{ padding: 0 }}>
                        {students.map((student,index) => (
                            <div  
                                key={student}
                                style={{
                                    display:'flex',
                                    color: '#e83981',
                                    margin: '20px',
                                
                                    listStyle: 'none',
                                    padding: '2px',
                                    gap:'20px'
                                }}>
                                  <div style={{border:'2px solid black'}}> {student.id} -</div>
                                   <div style={{border:'2px solid black'}}>{student.name}-</div>
                               <div style={{border:'2px solid black'}}>{student.add} -</div>
                               <div style={{border:'2px solid black'}}> {student.contact}</div>
                            </div>

                        ))}
                    </ul>
                </div></div></div>
    );
};

export default DataFetchComponent;
