import api from '../../api'
import "@hotwired/turbo-rails"
import "../../controllers"
import React, { useState } from 'react';
import { createRoot } from "react-dom/client";
import Header from '../../components/header';
import Footer from '../../components/footer';
import {
    Routes,
    Route
  } from "react-router-dom";

import RecLetter from '../../components/rec_letter'
import ProfessorList from '../../components/request/professor_list'
import StudentRequest from "../../components/request";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from '../../store'

export default function Root() {
    const authAPI = api.auth()
    const [isStudentSignedIn, setIsStudentSignedIn] = useState(false);
    const [isProfessorSignedIn, setIsProfessorSignedIn] = useState(false);
    React.useEffect(
        () => {(async () => {
            let lss = await authAPI.isStudentSignedIn()
            let lsp = await authAPI.isProfessorSignedIn()
            console.log("here")
            console.log(document.body.id, lsp)
            setIsStudentSignedIn(lss)
            setIsProfessorSignedIn(lsp)

        })()
      }, [authAPI]);

    return (
        <React.StrictMode>
        {(isStudentSignedIn || isProfessorSignedIn) ? (
            <BrowserRouter>
                <Provider store={store}>
                    <Header></Header>
                    <Routes>
                        <Route path="/" element={<RecLetter></RecLetter>} />
                        <Route path="/student/init_request" element={<ProfessorList></ProfessorList>} />
                        <Route path="/student/init_request/:professor_id" element={<StudentRequest></StudentRequest>} />
                    </Routes>
                    <Footer></Footer>
                </Provider>
            </BrowserRouter>

            ) : (<h1>
                    not logged in
                </h1>)
                }
        </React.StrictMode>
    )
}
