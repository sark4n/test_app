import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Footer from '@components/Footer';


export const metadata = {
    title: "Asesorías RSO",
    description: 'Has crecer tu negocio con nosotros.'
}

const Rootlayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <Provider>
           <div className="main">
            <div className='gradient'/>
           </div>
        
           <main className='app'>
            <Nav/>
            <div className="pt-20">{children}</div>
            <Footer/>
            </main>
            
        </Provider>
      </body>
    </html>
  )
}

export default Rootlayout