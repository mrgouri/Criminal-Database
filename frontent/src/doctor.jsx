// DoctorTable.js
import React, { useState, useEffect } from 'react';

function DoctorTable() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/doctors')
      .then(res => res.json())
      .then(data => setDoctors(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Doctors</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={index}>
              <td>{doctor.name}</td>
              <td>{doctor.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DoctorTable;
