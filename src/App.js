import { useState } from 'react';
import './index.css';
import Employee from './components/Employee';

function App() {

  const showEmployees = true;
  const[decidedRole, setDecidedRole] = useState();

  // function changeRole(e){
  //   setDecidedRole(e.target.value)
  // }

  return (
    <div className='App bg-orange-500'>
      {showEmployees ? 
      (<>      
        {/* <input type="text" onChange={changeRole} /> */}
        <input type="text" onChange={(e)=>{setDecidedRole(e.target.value)}} />
        <Employee name="Caleb" role="IT general" />
        <Employee name="Mike" role={decidedRole} />
        <Employee name="Butter" />
      </>) : (<p>You cannot see the employees.</p>)}

    </div>
    );

}

export default App;


