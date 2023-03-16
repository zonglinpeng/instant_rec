import React, { useState } from "react";
import api from '../../api'
import './index.css'
import SplitPane, {
    Divider,
    SplitPaneLeft,
    SplitPaneRight,
    SplitPaneTop,
} from "./split_pane";
import RecLetterContext from "./split_pane/rec_letter_context";


export default function RecLetter() {
  const [recLetters, setRecLetters] = useState([]);
  const [curRecLetter, setCurRecLetter] = useState()
  const recLetterAPI = api.rec_letter()
  const authAPI = api.auth()

  const [isStudentSignedIn, setIsStudentSignedIn] = useState('');
  const [isProfessorSignedIn, setIsProfessorSignedIn] = useState('');
  function refreshPage() {
      window.location.reload();
  }
  React.useEffect(() => {
    (async () => {
        const rss = await authAPI.isStudentSignedIn();
        const rsp = await authAPI.isProfessorSignedIn();
        setIsStudentSignedIn(rss);
        setIsProfessorSignedIn(rsp);
        let ls;
        if (rss) {
          ls = await recLetterAPI.recLetterStudentShow()
        }

        if (rsp) {
          ls = await recLetterAPI.recLetterProfessorShow()
        }

        setRecLetters(ls);
        if (ls === undefined || ls.length == 0) {
          setCurRecLetter(null);
        } else {
          setCurRecLetter(ls[0].rec_letter_id);
        }

    })()
  }, [recLetterAPI]);


  return (
    <>
      <RecLetterContext.Provider value={{ recLetters, curRecLetter, setCurRecLetter }}>
          <SplitPane className="split-pane-row">
            <SplitPaneLeft>
              <SplitPane className="split-pane-col">
                <SplitPaneTop />
                <Divider className="separator-row" />
              </SplitPane>
            </SplitPaneLeft>
            <Divider className="separator-col" />

            <SplitPaneRight />
          </SplitPane>
      </RecLetterContext.Provider>
    </>
  );
}
