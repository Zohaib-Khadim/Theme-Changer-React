
import { useState } from 'react';

function App() {
const [color,setColor]=useState("olive")
  return (
    
  <div className="w-full h-screen duration-200 "
  style={{backgroundColor:color}}
  >
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
      <div className='flex flex-wrap justify-center gap-3 bg-white rounded-full px-3 py-2'>
      <button className='flex flex-wrap justify-center shadow-lg outline-none text-white bg-red-600 rounded-full px-5 py-1 mx-5' onClick={()=>setColor("red")}>red</button>
      <button className='flex flex-wrap justify-center shadow-lg outline-none text-white bg-green-600 rounded-full px-5 py-1'onClick={()=>setColor("green")} >green</button>
      <button className='flex flex-wrap justify-center  shadow-lg outline-none text-white bg-blue-600 rounded-full px-5 py-1'onClick={()=>setColor("blue")}>blue</button>
      <button className='flex flex-wrap justify-center  shadow-lg outline-none text-white bg-black rounded-full px-5 py-1'onClick={()=>setColor("black")}>black</button>
      <button className='flex flex-wrap justify-center  shadow-lg outline-none text-white bg-pink-600 rounded-full px-5 py-1'onClick={()=>setColor("pink")}>pink</button>
      <button className='flex flex-wrap justify-center  shadow-lg outline-none text-white bg-gray-600 rounded-full px-5 py-1 me-5'onClick={()=>setColor("gray")}>gray</button>
      </div>
      
    </div>
  </div>
    
  )
}

export default App
