import React,{useState} from 'react'

function App() {
const [formData, setFormData]=useState({
    username:"anndg",
    email:"an.ndg95",
    language:"VN"
})

const handleSubmit=(e)=>{
  e.prevenDefault();
  console.log(formData);
}

const handleInputChange=(e)=>{
  const field=e.target.name;
  console.log(e.target.name);
  const value= e.target.type==="checkbox" ? e.target.checked : e.target.value;
  setFormData({...formData,[field]:value});
}

  return (
    <div>
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username </label>
          <input 
            id="username"
            name='username'
            value={formData.username}
            onChange={handleInputChange}
            type='text'
            autoComplete='off'
          />
        </div>

        <div>
          <label htmlFor='email'>Email </label>
          <input 
            id="email"
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            type='text'
            autoComplete='off'
          />
        </div>

        <div>
          <label htmlFor='language'>Language 
            <select
              name='language'
              value={formData.language}
              onChange={handleInputChange}
            >
              <option value="VN">VN</option>
              <option value="EN">EN</option>
              <option value="JP">JP</option>
            </select>
          </label>
          
        </div>

        <button onClick={handleSubmit}>Submit</button>


      </form>
    </div>
  )
}

export default App
