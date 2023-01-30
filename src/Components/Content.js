import React from 'react'

const date = new Date()

const Content = () => {

    const [formData, setFormData] = React.useState({
        date:"",
        month: "",
        year: ""
    })

    var birthDate = new Date('1 January 2001')
    birthDate.setDate(formData.date) 
   

    birthDate.setMonth(formData.month - 1)
    birthDate.setFullYear(formData.year)

    const milliseconds = date - birthDate

    const years = milliseconds/(1000 * 60 * 60 * 24 * 365.24)
    const roundedYears = Math.floor(years)

    const day_diff = Math.floor((milliseconds % 31556736000) / 86400000)

    const roundedMonths = Math.floor(day_diff / 30.4167)

    const roundedDays = Math.floor(day_diff % 30.4167)
    
    function handleSubmit(e){
        e.preventDefault();

        if(formData.date !== "" && formData.month !== "" && formData.year !== ""){
            document.querySelector('.result p').classList.add('active')
        }
    }

    function handleChange(event){
        setFormData(prevData => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
       
    } 
    
  return (
    <div className="content">
      <form onSubmit={handleSubmit}>
          <div className="inputBox date">
              <label htmlFor="">Date</label>
              <input 
                    type="number" 
                    max="31"
                    min="1"
                    onChange={handleChange}
                    name="date"
              />
          </div>
          <div className="inputBox month">
              <label htmlFor="">Month</label>
              <input 
                   type="number"
                   max="12"
                   min="1"
                   name="month" 
                   id="" 
                   onChange={handleChange}
               />
          </div>
          <div className="inputBox year">
              <label htmlFor="">Year</label>
              <input 
                    type="number" 
                    max="2022"
                    min="1900"
                    name="year" 
                    id="" 
                    onChange={handleChange}
            />

          </div>
          <button>Submit</button>
      </form>
      <div className="result">
          <p>Your age is {roundedYears} Years {roundedMonths} Months {roundedDays} Days</p>
      </div>
    </div>
  )
}

export default Content
