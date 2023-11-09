import React from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";

const List = (props) => {
  return (
    <>
    <ul className="user-list">
      {props.data.map((person)=>(
      <li key={person.id}>
        {" "}
        <Person {...person} removeItems={props.removeItems}/>
      </li>
    ))}
    </ul>
    </>
    );
}




const Person = ({id, nome, stato, img, removeItems}) => {
  console.log(Person.img)
  return(
     <article>
      <img src={img} alt="prs" className="person-img"></img>
      <div className="person-info">
        <div className="person-action">
          <h4>{nome}</h4>
          <button className="btn" onClick={()=> removeItems(id)}>
            {" "}
            <RiDeleteBack2Fill className="icon"/>{" "}
          </button>
        </div>
        <p>{stato}</p>
      </div>
     </article>
     );
};


export default List;
