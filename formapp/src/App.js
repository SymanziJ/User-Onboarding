import './App.css';
import React, { useState, useEffect } from 'react'
import * as yup from "yup";

import Form from './Components/Form';
import schema from './validation/formSchema';

const initialFormValues = {
  username: '',
  password: '',
  email: '',
  tos: false
}

const initialFormErrors = {
  username: '',
  password: '',
  email: '',
  tos: '',
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const handleSubmit = () => {
    
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
        .then(() => setFormErrors({ ...formErrors, [name]: "" }))
        .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value})
  }
  return (
    <div className="App">
      <Form 
        values={formValues}
        change={handleChange}
        submit={handleSubmit}
        errors={formErrors}
      />
    </div>
  );
}

export default App;
