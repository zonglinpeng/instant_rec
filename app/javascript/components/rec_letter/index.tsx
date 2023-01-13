import React, { useState } from "react";
import api from '../../api'

export default function RecLetter() {
  const [recletter, setRecLetter] = useState([]);
  const recLetterAPI = api.rec_letter()

  React.useEffect(() => {
    (async () => {
        let qs = await recLetterAPI.dummyGet()
        console.log(qs)
        setRecLetter(qs)
    })()

}, [recLetterAPI]);

  return (
    <>
        <h1>Recomendation Letter {recletter.length}</h1>
        <div>
        <table>
            <thead>
            {/* <tr>
                <th>Title</th>
                <th>Author</th>
            </tr> */}
            </thead>
            <tbody>
            {recletter &&
                recletter.map(({ due_date, school, owner, assignee }, i) => (
                <tr>
                    <td>{due_date}</td>
                    <td>{school}</td>
                    <td>{owner}</td>
                    <td>{assignee}</td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
    </>
  );
}
