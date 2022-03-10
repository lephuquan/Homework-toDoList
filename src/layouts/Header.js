import { useState } from 'react';
import { STATUS_CONTENT } from '../config/constants.js';


function Header({ addNewToDo }) { // reveive data from app.js

    const [valueInput, setValueInput] = useState('');//  initialize an empty string in state
    const [valueSelect, setValueSelect] = useState(STATUS_CONTENT.NEW);

    return (
        <div className="header">
            <h2>TO DO LIST PPLICATION</h2>
            <div>
                <input className='inputTask' value={valueInput} onChange={(e) => setValueInput(e.target.value)} />
                <button className='addTask' onClick={() => addNewToDo({ content: valueInput, status: valueSelect })}></button>{/*when clicked will execute the addNewToDo from App.js                                                                                                 with content is valueInPut and status is valueSelect*/}
            </div>
        </div>
    );
}
export default Header;