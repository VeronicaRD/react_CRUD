import { useState } from 'react'


const EditContact = ({ onEdit }) => {
    const [name, setName] = useState("anna")
    const [company, setCompany] = useState("")
    const [phone, setPhone] = useState("")
  

    


    const onSubmit = (e) => {
      e.preventDefault()
  
      if (!name) {
        alert('Please add a Name')
        return
      }
      if (!phone) {
        alert('Please add a Number')
        return
      }
      
  
      onEdit({ name, company, phone })
  
      setName('')
      setCompany('')
      setPhone('')
      
    }
   

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Name</label>
        <input
          type='name'
          placeholder='Add Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Company</label>
        <input
          type='company'
          placeholder='Add Company'
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Phone</label>
        <input 
          type='number' 
          //type='phone'
          placeholder='Add Number'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}

          />
      </div>
      

      <input type='submit' value='Edit Contact' className='btn btn-block' />
    </form>
  )
}

export default EditContact