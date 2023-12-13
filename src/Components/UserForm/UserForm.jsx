import React, { useState } from 'react'

const UserForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState('')

  const options = ['Morning', 'Afternoon', 'Evening']

  const handleSelect = option => {
    setSelectedValue(option)
    setIsOpen(false)
  }
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-12'>
            <h4 className='heading'>User Form</h4>
          </div>
          <div className='col-lg-12'>
            <h6 className='proheading'>Upload profile picture</h6>
          </div>
          <div className='col-lg-2 col-md-4 col-sm-12'>
            <div className='dotedbor'>
              <button type='file'> + Browse </button>
            </div>
            <p className='dotedpera'>PNG, JPEG, JPG</p>
          </div>
        </div>
        <form>
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-6'>
              <div className='FromInput'>
                <label>User name</label>
                <input type='text' placeholder='Enter username' />
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-6'>
              <div className='FromInput'>
                <label>Email</label>
                <input type='text' placeholder='Enter username' />
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-6'>
              <div className='FromInput'>
                <label>Phone Number</label>
                <input type='Number' placeholder='Enter your phone number' />
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-6'>
              <div className='FromInput'>
                <label>Interview preferred time</label>
              </div>
              <div className='custom-select'>
                <div
                  className='select-header'
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {selectedValue || 'Select an option'}
                </div>
                {isOpen && (
                  <ul className='options-list'>
                    {options.map((option, index) => (
                      <li key={index} onClick={() => handleSelect(option)}>
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserForm
