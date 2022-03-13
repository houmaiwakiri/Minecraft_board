import React, { useEffect, useState } from 'react';
import { db } from "../firebase.js";


function Board() {
    const [minecraft, SetMinecraft] = useState([]);
    useEffect(() => {
      db.collection("minecraft")
      .onSnapshot((snapshot) => {
        SetMinecraft(snapshot.docs.map((doc) =>doc.data()));
      })
    },[]);
  return(
    <div>
        <div className='minecraft'>
          {minecraft.map(({id ,title ,name ,coordinate }) => (
            <div key={id}
            className = {`minecraft`}>
              <div>
                <p>{title}</p>
                <p>{name}</p>
                <p>{coordinate}</p>
              </div>
            </div>
          ))}
        </div>
    </div>

  )
}

export default Board