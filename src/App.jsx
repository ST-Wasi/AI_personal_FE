import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [response, setResponse] = useState({
    response: ""
  })
  const [formData,setFormData] = useState({ 
    "name": "", 
    "wantToWrite": "", 
    "writeTo": "",
    "company": "", 
    "hiringFor": "", 
    "expYears": "",
    "expMonths": "",
    "expAs": "", 
    "expType": "", 
    "others": "",
    "jd": ""
  })

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setFormData((prevData)=> ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_SERVER_URL}/chathere`, formData)
    .then(function (res) {
      const {response} = res.data;
      setResponse({
        response: response
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <>
      <div>
        <form className='form' onSubmit={handleSubmit}>
          <input type="text"
          name='name'
          placeholder='Enter Your Name'
          value={formData.name}
          onChange={handleChange}
          />
          {/* --- */}
          <input type="text"
          name='wantToWrite'
          placeholder='Email/Coverletter'
          value={formData.wantToWrite}
          onChange={handleChange}
          />
          {/* --- */}
          <input type="text"
          name='writeTo'
          placeholder='HR/Sales Manager/CEO'
          value={formData.writeTo}
          onChange={handleChange}
          />
          {/* --- */}
          <input type="text"
          name='company'
          placeholder='Cmopany Name'
          value={formData.company}
          onChange={handleChange}
          />
          {/* --- */}
          <input type="text"
          name='hiringFor'
          placeholder='What Company Is Hiring For'
          value={formData.hiringFor}
          onChange={handleChange}
          />
          {/* --- */}
          <input type="text"
          name='expYears'
          placeholder='Experience in Years'
          value={formData.expYears}
          onChange={handleChange}
          />
          {/* --- */}
          <input type="text"
          name='expMonths'
          placeholder='Experience in Months'
          value={formData.expMonths}
          onChange={handleChange}
          />
          {/* --- */}
          <input type="text"
          name='expAs'
          placeholder='Your Role'
          value={formData.expAs}
          onChange={handleChange}
          />
          {/* --- */}
          <input type="text"
          name='expType'
          placeholder='Enter Intern/FullTime/contractual'
          value={formData.expType}
          onChange={handleChange}
          />
          {/* --- */}
          <input type="text"
          name='others'
          placeholder='Enter Others'
          value={formData.others}
          onChange={handleChange}
          />
          {/* --- */}
          <textarea rows={13} cols={150} type="text"
          name='jd'
          placeholder='Enter Job Description'
          value={formData.jd}
          onChange={handleChange}
          />
          {/* --- */}

          <button>Submit</button>
        </form>

        <div className="response">
          {response && (<h3>{response.response}</h3>)}
        </div>
      </div>
    </>
  )
}

export default App
