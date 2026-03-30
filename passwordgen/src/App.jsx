import React from 'react'
import { useState , useEffect,useRef} from 'react'

 const App = () => {
  const [length, setLength] = useState(18)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [password, setPassword] = useState('dafadfaee')
  const passwordRef = useRef()

  useEffect(()=>{
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    let characters = ""
    const symbols = '!@#$%^&*()_+'
    if(includeNumbers){
      alphabets += numbers
      console.log(alphabets)
    }
    if(includeSymbols){
      alphabets += symbols
    }
    
    for(let i=0;i<length;i++){
      const randomIndex = Math.floor(Math.random() * alphabets.length)
      characters += alphabets[randomIndex]
    }
    setPassword(characters)
  },[ length,includeNumbers,includeSymbols])

  return (
 <>
 <div className='w-100 mx-auto bg-gray-100 p-10 rounded-lg shadow-lg'>
  <h1 className='text-3xl font-bold underline text-center mt-10'>Password Generator</h1>
  <input type="text" className='border-2 border-gray-200' value={password} readOnly ref={passwordRef} />
  <button className='px-4 py-2 bg-blue-500 border-0' onClick={(e)=>{
  window.navigator.clipboard.writeText(password)
  passwordRef.current.select()
 e.target.innerText = "Copied"
  }}>{password ? "Copy" : "Generate Password"}</button>
 <div className='flex items-center mt-10'>
   <input type="range" name="" id="ilength" min="0" max="100" value={length} onChange={(e)=>{
    setLength(e.target.value)
   }}  />
  <label htmlFor="ilength">Length {length}</label>
c
 </div>
 <div className='flex items-center mt-10'>

    <label htmlFor="isymbols" className='border-r-2 p-2' >Include Symbols     <input type="checkbox" id='isymbols' checked={includeSymbols} onChange={(e)=>{
      setIncludeSymbols(e.target.checked)
    }} />
</label>
  <label htmlFor="inumbers" className='border-r-2 p-2' >Include Numbers   <input type="checkbox" id='inumbers' checked={includeNumbers} onChange={(e)=>
      setIncludeNumbers(e.target.checked)
    } />
</label>
 </div>

 </div>
 </>
  )
}
export default App