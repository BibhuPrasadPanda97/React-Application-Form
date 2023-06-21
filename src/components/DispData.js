import React from 'react';

function DispData({ employee, deleteItem }) {
  // console.log("Employee:",employee)

  return (
    <div className='my-5'>
      <table className="table table-striped">
        <thead className="table-success">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th></th>
          </tr>
        </thead>
        {employee.length > 0 ? <tbody>
          {
            employee && employee.length > 0
              ?
              employee.map((item) => {
                return <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.gender}</td>
                  <td><button className='btn-trash' onClick={() => deleteItem(item)} ><i className="fa-solid fa-trash"></i></button></td>
                </tr>
              })
              :
              ""
          }
        </tbody> : ""}
      </table>
    </div>
  )
}

export default DispData;