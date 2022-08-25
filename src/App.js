import react,{useState,useEffect} from 'react';
import firebase from 'firebase'

import './App.css';
import Todo from './Todo';
import db from './firebase';
import Footer from './Footer';

function App() {
  const [todos,setTodos] = useState([]);
  const[input,setInput]  = useState('');

  //when the app loads we need to listen to listen database
  useEffect(()=>{
    //this code fires once when this app load
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc=>({id: doc.id,todo: doc.data().todo})))// display data [resent in database
    });
  },[]);
    
const addTodo = (event) =>{
   

  event.preventDefault();//stopping the page to refresh when submit
  
  db.collection('todos').add({
    todo:input,
    timestamp:firebase.firestore.FieldValue.serverTimestamp()
  })//it add to data base

  setTodos([...todos,input]);//... means we spread out existing the previous

  setInput('');
        
      }
  return (
    <div className="App">
    <header>
      <h1>Todo List</h1>
    </header>

   <form className="input">
  
  <div className="conatiner_input">
    <input placeholder="Enter the Task" id="main_input" value={input} onChange={event=>setInput(event.target.value)}/>
    <button disabled={!input} type="submit" onClick={addTodo} className="addbtn"><i class="fas fa-2x fa-plus-square"></i></button>
  </div>
 
 
</form>

      <ul className="listName">

        {todos.map(todo=>(
          <Todo todo={todo}/>
        ))}
      </ul>

      <Footer/>

    </div>
  );
}

export default App;
