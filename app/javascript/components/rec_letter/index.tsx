import React, { useState } from "react";
import api from '../../api'
import Item from '../item'
import PreView from "./pre_view";


function formatDate(string){
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([], options);
}

export default function RecLetter() {
  const [recletter, setRecLetter] = useState([]);
  const recLetterAPI = api.rec_letter()

  React.useEffect(() => {
    (async () => {
        let ls = await recLetterAPI.dummyGet()
        console.log(ls)
        setRecLetter(ls)
    })()
  }, [recLetterAPI]);


  return (
    <>
        <h1>Recomendation Letter {recletter.length}</h1>
        <aside className="left-col">
            <Item>
                <PreView rec_letters={recletter}></PreView>
            </Item>
        </aside>
        <div className="right-col">

        </div>
    </>
  );
}
