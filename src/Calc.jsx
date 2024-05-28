import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './calc.css'

const Calc = () => 
{

     const row1=['Clear','Del','%','/']
     const row2=[7,8,9,'*']
     const row3=[4,5,6,'-']
     const row4=[1,2,3,'+']
     const row5=[0,'.','=']
     const [output,setOutput]=useState([''])
     const [out,setOut]=useState([''])

    function get(value){
        if (value === 'Clear'){
            setOutput('')
            setOut('')

        }
        else if(value === 'Del'){
            setOutput(output.slice(0,-1))
        }

        else if(value === '='){
            try{
            out.push(output)
            console.log(out)
            setOutput(eval(output))
            console.log(eval(output))
            }
            catch(error){
                setOutput('Error')
                console.log(setOutput('Error'))
            }
        }
        else {
            setOutput(output + value);
        }


    }
  
    return (
        <>
   <div className='tot'>
    <div className='output'>
        <h2>{out}</h2>
        <input placeholder='0' type="text" value={output} />
    </div>
    <div className="input">
        <div className="row">
            {row1.map((btn, index) => (
                        <button onClick={()=>get(btn)} key={index} className={btn === 'Clear' ? 'clean-btn' : btn === 'Del' ? 'del-btn' : ''}>{btn}</button>
                    ))}
        </div>
        <div className="row">
            {row2.map((btn, index) => (
                        <button onClick={()=>get(btn)} key={index}>{btn}</button>
                    ))}
        </div>
        <div className="row">
            {row3.map((btn, index) => (
                        <button onClick={()=>get(btn)} key={index}>{btn}</button>
                    ))}
        </div>
        <div className="row">
            {row4.map((btn, index) => (
                        <button onClick={()=>get(btn)} key={index}>{btn}</button>
                    ))}
        </div>
        <div className="row">
            {row5.map((btn, index) => (
                        <button onClick={()=>get(btn)} key={index} className={btn === '=' ? 'eq-btn' : ''}>{btn}</button>
                    ))}
        </div>
    </div>
   </div>
   <h3>#Cal-C</h3>
   </>


  )
}

export default Calc