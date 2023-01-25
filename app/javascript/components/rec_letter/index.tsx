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

  React.useEffect(() => {
    (async () => {
        let ls = await recLetterAPI.dummyGet()
        console.log(ls)
        setRecLetters(ls)
        if (ls === undefined || ls.length == 0) {
          setCurRecLetter(null)
        } else {
          setCurRecLetter(ls[0].rec_letter_id)
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
