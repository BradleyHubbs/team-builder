import React, { useState } from 'react'
import { render } from 'react-dom'
import Form from './Form'
import Member from './member'

function App() {
  const initialTeam = [
    { name: 'TestName',
      email: 'TestMail',
      role: 'TestRole' }, 
    { name: 'Brad',
      email: 'Bradhubbs@hotmail.com',
      role: 'Student'
    }]
   
   const initialFormValues = {
     name:'',
     email:'',
     role:''
   } 
  
  const [team, setTeam] = useState(initialTeam)

  const [formValues, setFormValues] = useState(initialFormValues)
  
  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
  }

  const submitForm = () => {
    const newPerson = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    }
    if(!newPerson.name || !newPerson.email || !newPerson.role){
      return;
    }
    setTeam(team.concat(newPerson))

  }
  
    return (
    <div className='container'>
    <Form
      values={formValues}
      update={updateForm}
      submit={submitForm}
    />
    {
    team.map(m => {
      return(
        <Member details={team} />
      )
    })
    }
  </div>
  );
}

export default App;
