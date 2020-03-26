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
                showSingleView
                showNeighboringMonth={false}
                onChange={onChange}
                value={date}
            
            />
        {console.log(date)}
        </div>
      </div>
        )
}

render(<SingleReactCalendar />, document.querySelector("#root"));

export default SingleReactCalendar;