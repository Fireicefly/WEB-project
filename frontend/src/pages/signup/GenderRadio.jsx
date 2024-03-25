import React from 'react'

const GenderRadio = ({onRadioChange, selectedGender}) => {
  return (
    <div className='flex justify-center'>
        <div className='form-control mr-4'>
            <label className='cursor-pointer label gap-3'>
                <span className='label-text'>Male</span>
                <input type="radio" name="gender" className='radio' 
                checked={selectedGender === "male"} 
                onChange={() => { onRadioChange("male") }}
                />
            </label>
        </div>
        <div className='form-control'>
            <label className='cursor-pointer label gap-3'>
                <span className='label-text'>Female</span>
                <input type="radio" name="gender" className='radio' 
                checked={selectedGender === "female"}
                onChange={() => { onRadioChange("female") }}
                />
            </label>
        </div>
    </div>
  )
}

export default GenderRadio;