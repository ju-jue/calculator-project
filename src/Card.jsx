import React from 'react'
import Output from './Output'
import Input from './Input'
import Button from './Button'
import { useState } from "react"
const Card = () => {

  const [input, setInput] = useState('0');

  const [output, setOutput] = useState('0');

  const clickBtn = (e) => {
    if (e == 'C') {
      setInput(0)
      setOutput(0)
    } else if (e == 'Del') {
      if (input.length == 1) {
        setInput(0)
      } else {
        setInput(input.slice(0, -1))
      }
    } else if (e == '=') {
      setOutput(eval(input))
    } else {
      if (input == 0) {
        setInput(e)
      } else {
        setInput(input + e)
      }
    }
    console.log(e);
  }
  return (
    <div className='card'>
      <Output output={output} />
      <Input input={input} />
      <Button clickBtn={clickBtn} />
    </div>
  )
}

export default Card