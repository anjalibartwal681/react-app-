import React, { useState, useEffect } from 'react';

const App = () => {
   const [name, setName] = useState('');
   const [pwd, setPwd] = useState('');

   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = async () => {
      try {
         const response = await fetch('/api/userData');
         if (!response.ok) {
            throw new Error('Network response was not ok');
         }
         const data = await response.json();
         setName(data.name || '');
         setPwd(data.password || '');
      } catch (error) {
         console.error('Error fetching data:', error);
      }
   };

   const handle = async () => {
      try {
         const response = await fetch('/api/saveUserData', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, password: pwd }),
         });
         if (!response.ok) {
            throw new Error('Network response was not ok');
         }
         console.log('Data saved successfully');
      } catch (error) {
         console.error('Error saving data:', error);
      }
   };

   const remove = async () => {
      try {
         const response = await fetch('/api/removeUserData', {
            method: 'DELETE',
         });
         if (!response.ok) {
            throw new Error('Network response was not ok');
         }
         console.log('Data removed successfully');
         setName('');
         setPwd('');
      } catch (error) {
         console.error('Error removing data:', error);
      }
   };

   return (
      <div className="App">
         <h1>Name of the user:</h1>
         <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         <h1>Password of the user:</h1>
         <input
            type="password"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
         />
         <div>
            <button onClick={handle}>Done</button>
         </div>
         {name && (
            <div>
               Name: <p>{name}</p>
            </div>
         )}
         {pwd && (
            <div>
               Password: <p>{pwd}</p>
            </div>
         )}
         <div>
            <button onClick={remove}>Remove</button>
         </div>
      </div>
   );
};

export default App;
