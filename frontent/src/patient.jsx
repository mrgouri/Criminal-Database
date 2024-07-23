// PatientTable.js
import React, { useState, useEffect } from 'react';

function PatientTable() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/patients')
      .then(res => res.json())
      .then(data => setPatients(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Patients</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientTable;
