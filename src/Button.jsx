import React from 'react'

const Button = ({clickBtn}) => {
  return (
    <div>
        <div className="button">
            <div className="div">
                <button className='btn' onClick={(e) => clickBtn(e.target.innerText)}>C</button>
                <button className='btn' onClick={(e) => clickBtn(e.target.innerText)}>Del</button>
                <button className='btn' onClick={(e) => clickBtn(e.target.innerText)}>%</button>
                <button className='btn' onClick={(e) => clickBtn(e.target.innerText)}>/</button>
            </div>

            <div className="div">
                <button className='btn' onClick={(e) => clickBtn(e.target.innerText)}>7</button>
                <button className='btn' onClick={(e) => clickBtn(e.target.innerText)}>8</button>
                <button className='btn' onClick={(e) => clickBtn(e.target.innerText)}>9</button>
                <button className='btn' onClick={(e) => clickBtn(e.target.innerText)}>/</button>
            </div>

            <div className="div">
                <button className='btn' onClick={(e) => clickBtn(e.target.innerText)}>4</button>
                <button className='btn' onClick={(e) => clickBtn(e.target.innerText)}>5</button>
                <button className='btn' onClick={(e) => clickBtn(e.target.innerText)}>6</button>
                <button className='btn' onClick={(e) => clickBtn(e.target.innerText)}>-</button>
            </div>

            <div className="div">
                <button className='btn' onClick={(e) => clickBtn(e.target.innerText)}>1</button>
                <button className='btn' onClick={(e) => clickBtn(e.target.innerText)}>2</button>
                <button className='btn' onClick={(e) => clickBtn(e.target.innerText)}>3</button>
                <button className='btn' onClick={(e) => clickBtn(e.target.innerText)}>+</button>
            </div>

            <div className="div">
                <button className='btn' onClick={(e) => clickBtn(e.target.innerText)}></button>
                <button className='btn' onClick={(e) => clickBtn(e.target.innerText)}>0</button>
                <button className='btn' onClick={(e) => clickBtn(e.target.innerText)}>.</button>
                <button className='btn' onClick={(e) => clickBtn(e.target.innerText)}>=</button>
            </div>
        </div>
    </div>
  )
}

export default Button