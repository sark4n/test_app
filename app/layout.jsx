import '@styles/globals.css';

import Nav from '@components/navigation/Nav';
import Provider from '@components/Provider';
import Footer from '@components/navigation/Footer';


export const metadata = {
    title: "Asesorías RSO",
    description: 'Has crecer tu negocio con nosotros.'
}

const Rootlayout = ({children}) => {
  return (
    <html lang="en">
      <head><meta name="google-site-verification" content="zM8iaW-xEdAjgcw1s-T7t4e0IfmuA9ZHnQc4crSYqAU" /></head>
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