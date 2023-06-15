'use client'
import Feed from "@components/Feed"

import { Typewriter } from 'react-simple-typewriter'


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Asesoría para 
      <br className="max-md:hidden"/>
      <span className="blue_gradient text-center">
        <Typewriter
          words={[' Emprendedores', ' Creadores', ' Ti!']}
          loop={0}
          cursor
          cursorStyle='_'
          typeSpeed={120}
          deleteSpeed={50}
          delaySpeed={1000}
          // onLoopDone={handleDone}
          // onType={handleType}
        /></span>
      </h1>
      <p className='desc text-center'>
      Has crecer tu negocio con las herramientas que tenemos para ofrecerte
    </p>

    <Feed/>
    
    </section>
      )
}

export default Home