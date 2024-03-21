import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('');

  const clickHandle = (e) => {
    setValue(value.toString().concat(e.target.value));
  }
  const  clearHandle = () => {
    setValue('');
  }
  const deleteHandle = () => {
    setValue(value.slice('0', -1))
  }

  const calculateHandle = () => {
    setValue(eval(value))
  }
  

  return (
    <>
     <section className='h-dvh  flex items-center bg-yellow-50'>
    <div className="container w-1/3 m-auto flex flex-col rounded-md bg-indigo-300 px-14 pb-14 pt-9 items-center">
      <h1 className=' text-5xl pb-8 font-bold'>Basic Calculator</h1>
    <input  className="placeholder:italic placeholder:text-slate-400  block w-full bg-blue border border-slate-300 rounded-md py-8 pl-9 pr-3 shadow-md focus:outline-none  focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-2xl" placeholder="value..." type="text" value={value}/>
    <div className="one flex justify-between w-full">
    <input  type='button' value='7' className='button px-8 py-4 bg-indigo-600 text-white  m-3 text-xl border-2 border-indigo-100 drop-shadow-xl rounded' onClick={clickHandle}/>
        <input  type='button'value='8' className='button px-8 py-4 bg-indigo-600 text-white  m-3 text-xl border-2 border-indigo-100 drop-shadow-xl rounded'  onClick={clickHandle}/>
        <input type='button' value='9' className='button px-8 py-4 bg-indigo-600 text-white m-3 text-xl border-2 border-indigo-100 drop-shadow-xl rounded' onClick={clickHandle}/>
        <input type='button' value='C' className='button px-8 py-4 bg-orange-300 m-3 text-xl border-2 border-orange-500 drop-shadow-xl rounded' onClick={deleteHandle}/>
      </div>
      <div className="two flex justify-between w-full">
        <input type='button' value='4' className='button px-8 py-4 bg-indigo-600 text-white m-3 text-xl border-2 border-indigo-100 drop-shadow-xl rounded' onClick={clickHandle}/>
        <input type='button' value='5'className='button px-8 py-4 bg-indigo-600 text-white m-3 text-xl border-2 border-indigo-100 drop-shadow-xl rounded' onClick={clickHandle}/>
        <input type='button' value='6'className='button px-8 py-4 bg-indigo-600 text-white m-3 text-xl border-2 border-indigo-100 drop-shadow-xl rounded' onClick={clickHandle}/>
        <input type='button' value='+' className='button px-8 py-4 bg-indigo-600 text-white m-3 text-xl border-2 border-indigo-100 drop-shadow-xl rounded' onClick={clickHandle}/>
      </div>
      <div className="three flex justify-between w-full">
        <input type='button' value='1' className='button px-8 py-4 bg-indigo-600 text-white m-3 text-xl border-2 border-indigo-100 drop-shadow-xl rounded' onClick={clickHandle}/>
        <input type='button' value='2' className='button px-8 py-4 bg-indigo-600 text-white m-3 text-xl border-2 border-indigo-100 drop-shadow-xl rounded' onClick={clickHandle}/>
        <input type='button' value='3' className='button px-8 py-4 bg-indigo-600 text-white m-3 text-xl border-2 border-indigo-100 drop-shadow-xl rounded' onClick={clickHandle}/>
        <input type='button' value='-' className='button px-8 py-4 bg-indigo-600 text-white m-3 text-xl border-2 border-indigo-100 drop-shadow-xl rounded' onClick={clickHandle}/>
      </div>
      <div className="four flex justify-between w-full">
        <input type='button' value='.' className='button px-8 py-4 bg-indigo-600 text-white m-3 text-xl border-2 border-indigo-100 drop-shadow-xl rounded' onClick={clickHandle}/>
        <input type='button' value='0' className='button px-8 py-4 bg-indigo-600 text-white m-3 text-xl border-2 border-indigo-100 drop-shadow-xl rounded' onClick={clickHandle}/>
        <input type='button' value='/' className='button px-8 py-4 bg-indigo-600 text-white m-3 text-xl border-2 border-indigo-100 drop-shadow-xl rounded' onClick={clickHandle}/>
        <input type='button' value='*' className='button px-8 py-4 bg-indigo-600 text-white m-3 text-xl border-2 border-indigo-100 drop-shadow-xl rounded' onClick={clickHandle}/>
      </div>
      <div className="five flex justify-between w-full ">
      <input type='button' value='Reset' className='button px-20 py-4 w-50 bg-red-300 m-3 text-xl border-2 border-red-500 drop-shadow-xl rounded'onClick={clearHandle} />
        <input type='button' Value="=" className='button px-28 py-4 bg-green-300 m-3 text-xl border-2 border-green-500 drop-shadow-xl rounded'onClick={calculateHandle} />
      </div>

    </div>
     </section>
    </>
  )
}

export default App
