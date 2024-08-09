
import './App.css'
import Cards from './components/Cards'

function App() {
  

  return (
  <div className='App'>
     <h1>Demo Pag Web</h1>
     <div className='container'>
     <Cards title= "Titulo" 
      description="descripción"/>
     <Cards title= "Titulo2" 
      description="descripción2" />
     <Cards  title= "Titulo3" 
      description="descripción3"/>
     <Cards title= "Titulo4" 
      description="descripción4"/>
     <Cards title= "Titulo5" 
      description="descripción5" />
     <Cards title= "Titulo6" 
      description="descripción6"/>
     <Cards title= "Titulo7" 
      description="descripción7"/>

     </div>
  </div>
  
      
    
  )
}

export default App
