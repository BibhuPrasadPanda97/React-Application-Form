import './App.css';
import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import DispData from './components/DispData';


function App() {

  // local prev data
  let initEmp;
  if(localStorage.getItem("raf_employee_data") === null){
    initEmp = []
  } else {
    initEmp = JSON.parse(localStorage.getItem("raf_employee_data"));
  }

  const [employee, setEmployee] = useState(initEmp);
  useEffect(() => {
    localStorage.setItem("raf_employee_data", JSON.stringify(employee));
  }, [employee])
  

  function sendEmpData(formData) {
    let id;
    if (employee.length === 0) {
      id = 1
    } else {
      id = employee[employee.length - 1].id + 1;
    }
    setEmployee([...employee, {
      id: id,
      name: formData.name,
      age: formData.age,
      gender: formData.gender
    }])
  }

  // delete item/row
  function deleteItem(data){
    setEmployee(employee.filter((item) => {
      return (item !== data)
    }))
  }

  return (
    <>
      <div className="container">
        <Form sendEmpData={sendEmpData} />
        <DispData employee={employee} deleteItem={deleteItem} />
      </div>
    </>
  );
}

export default App;
