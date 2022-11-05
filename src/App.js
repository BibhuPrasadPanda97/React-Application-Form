import './App.css';
import Form from './components/Form';
import DispData from './components/DispData';
import Employee from './components/employee';


function App() {

  return (
    <>
      <div className="container">
        <Form />
        {Employee && <DispData />}
      </div>
    </>
  );
}

export default App;
