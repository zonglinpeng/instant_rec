import React, { useState } from "react";
import api from '../../../api'
import './index.css'

export default function Request() {
  const [professorList, setProfessorList] = useState([]);
  const studentAPI = api.student()

  React.useEffect(() => {
    (async () => {
        let ls = await studentAPI.getProfessorList()
        if (ls === undefined || ls.length == 0) {
          setProfessorList(null)
        } else {
          setProfessorList(ls[0].rec_letter_id)
        }

    })()
  }, [studentAPI]);


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
