import React, { useState } from "react";
import { render } from "react-dom";
import Calendar from 'react-calendar';
import './calendar.css';


const ReactCalendar = () => {
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
                showNeighboringMonth={false}
                onChange={onChange}
                value={date}
            
            />
        {console.log(date)}
        <h3>Selected date : </h3><a>{date.toString()}</a>
        </div>
      </div>
        )
}

render(<ReactCalendar />, document.querySelector("#root"));

export default ReactCalendar;