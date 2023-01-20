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
                recletter.map(({
                    rec_letter_id,
                    due_date,
                    school_name,
                    professor_name,
                    student_name

                }, i) => (
                <tr key={rec_letter_id}>
                    <td>{school_name}</td>
                    <td>{professor_name}</td>
                    <td>{student_name}</td>
                    <td>{due_date}</td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
    </>
  );
}
