import React, { useState } from 'react'
import './accordian.css'
import data from './data'
const Accordian = () => {
    const [open, setOpen] = useState(null)
    const [enable, setEnable] = useState(false);
    const [multiple, setMultiple] = useState([])
    function handleSingleClick(currentId) {
        setOpen(currentId === open ? null : currentId)
    }
    function handleMultiClick(currentId) {
        let newMultiple = [...multiple];
        const findIndex = newMultiple.indexOf(currentId)
        if (findIndex === -1){
            newMultiple.push(currentId)
        }else  {
            newMultiple.splice(findIndex, 1)
        }

        setMultiple(newMultiple)


    }
    console.log(open, multiple)
    return (
        <div>
            <div className='container'>
                <div className='sub-container'>
                    <button onClick={() => setEnable(!enable)}>{enable ? "Disable" : "Enable"} Multi Dropdown</button>

                    {data.map((item) => (

                        <div className='question' key={item.id} onClick={enable ? () => handleMultiClick(item.id) : () => handleSingleClick(item.id)}>
                            <h3>{item.question} <span>+</span></h3>
                            
                            {
                                open === item.id || multiple.indexOf(item.id) !== -1 ?
                                    <div className='answer'>{item.answer}</div>
                                    : null
                            }
                        </div>

                    ))

                    }

                </div>
            </div>
        </div>
    )
}

export default Accordian
