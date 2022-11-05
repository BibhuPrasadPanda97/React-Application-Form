import React from 'react';
import Employee from './employee';


function DispData() {

  return (
    <div className='my-5'>
      <table className="table table-striped">
        <thead className="table-success">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {
            Employee && Employee.length > 0
              ?
              Employee.map((row) => {
                return <tr key={row.id}>
                  <td>{row.name}</td>
                  <td>{row.age}</td>
                  <td>{row.gender}</td>
                </tr>
              })
              :
              "No Data available"
          }
        </tbody>
      </table>
    </div>
  )
}

export default DispData;