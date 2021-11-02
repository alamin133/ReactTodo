
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';



function App() {
  const onDelete = ()=>{
     
  }
  let todos = [
    {
      sno:1,
      title: "Go to the market",
      desc: "You need to go to the market and buy something for dinner"
    },
    {
      sno:2,
      title: "Go to the mall",
      desc: "Go to mall to buy something for next party where we will go"
    },
    {
      sno:3,
      title: "Go to the ghat",
      desc: "You need to go ghat to fixed ticket for our next tour"
    }
  ]
  return (
    <>
 
    <Header title="My Todos List" searchBar={false}/>
    <Todos todos={todos}/>
    
    <Footer/>
    
    </>
  );
}

export default App;
