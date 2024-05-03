import React, { useEffect, useState } from 'react'

function Themex() {
   
    const [theme,setTheme] = useState(()=>localStorage.getItem('theme') || 'light')
    

    
    
    useEffect(()=>{
        document.body.className = theme;
        localStorage.setItem('theme',theme);
    },[theme])

    const temaDegistir = ()=>{
        setTheme(prevTheme =>(prevTheme === 'light' ? 'dark' : 'light'))
        console.log(theme);
    }
  return (
   <>
   <h1 className='baslik'> Tema Tercihi Local Storage </h1>
   <label className='switch'>
    <input onChange={temaDegistir} type="checkbox" checked = {theme=== 'dark'} />
    <span className='slider'> </span>
   </label>
   <main>
    <p> Şu anki tema : {theme} </p>
   
   </main>
   </>
  )
}

export default Themex