import { useState } from "react";
import List from "./List";
import data from "./data";

function App() {
  //console.log(data)
const [people, setPeople] = useState(data);

const removeItems = (id) => {
  setPeople((oldValue)=> oldValue.filter((value)=> value.id !== id));
};

const reloadItems = ()=>{
  setPeople(data);
}



  return (
    <>
    <section className="container">
      <div className="container w-75">
        <h2 className="people-title">Prossimi Incontri</h2>
        <div className="people-list">
          <List data={people} removeItems={removeItems}/>
        </div>
        <div className="btn-group">
          <button className="btn btn-reset" onClick={reloadItems}>
            {" "}
            Reload{" "}
          </button>

          <button className="btn btn-delete" onClick={() => setPeople([])}>
            {" "}
            Delete all
          </button>
        </div>
      </div>
     
    </section>
   
    </>
      
    
  );
}

export default App;
