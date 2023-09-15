
import Card from './components/Card'
import Header from './components/Header'
import './App.css'
import Cart from './components/Cart'


function App() {
  

  return (
    <div>
   
   
   <Header></Header>
   <div className='max-w-screen-xl mx-auto lg:flex gap-6'>
   <Card></Card>
   <Cart></Cart> 
   </div>
   
                   
        
    
    </div>
  )
}

export default App
