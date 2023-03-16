// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';

import { createRoot } from "react-dom/client";
import Header from './components/header';
import Footer from './components/footer';
import {
    Routes,
    Route
  } from "react-router-dom";
import RecLetter from './components/rec_letter'
import ProfessorList from './components/request/professor_list'
import StudentRequest from "./components/request";
import SignIn from "./components/auth"
import SignUp from "./components/auth/sign_up"
import SignOut from "./components/auth/sign_out"
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './store'

const container = document.getElementById("root");
const isStudentSignedIn = document.body.getAttribute('data_student_signed_in') == 'true'
const isProfessorSignedIn = document.body.getAttribute('data_professor_signed_in') == 'true'
const root = createRoot(container);

root.render(
    <React.StrictMode>
        {
            (isStudentSignedIn || isProfessorSignedIn)? (
                <BrowserRouter>
                    <Provider store={store}>
                        <Header></Header>
                        <Routes>
                            <Route path="/" element={<RecLetter></RecLetter>} />
                            <Route path="/student/init_request" element={<ProfessorList></ProfessorList>} />
                            <Route path="/student/init_request/:professor_id" element={<StudentRequest></StudentRequest>} />
                            <Route path="/student/sign_out" element={<SignOut></SignOut>} />
                            <Route path="/student/sign_in" element={<SignIn></SignIn>} />
                            <Route path="/student/sign_up" element={<SignUp></SignUp>} />
                        </Routes>
                        <Footer></Footer>
                    </Provider>
                </BrowserRouter>
                ) : (
                <BrowserRouter>
                <Provider store={store}>
                    <Header></Header>
                    <Routes>
                        <Route path="/" element={<SignIn></SignIn>} />
                        <Route path="/student/sign_up" element={<SignUp></SignUp>} />
                        <Route path="/student/sign_out" element={<SignOut></SignOut>} />
                    </Routes>
                    <Footer></Footer>
                </Provider>
            </BrowserRouter>
            )
        }
    </React.StrictMode>
);
