import React, { useState } from "react";
import { render } from "react-dom";
import Calendar from 'react-calendar';
import './calendar.css';



const SingleReactCalendar = () => {
    const [date, setDate] = useState(new Date());
    
    const onChange = date => {
        setDate(date)
    }

    return (
        <div className="row">
            <div className="col">
            <Calendar
                className="col"
                showDoubleView
                showNeighboringMonth={true}
                onChange={onChange}
                value={date}
                
            />
        <p>selected date : </p><a>{date.toString().split('202')[0]}</a>
        </div>
        
      </div>
        )
}

render(<SingleReactCalendar />, document.querySelector("#root"));

export default SingleReactCalendar;