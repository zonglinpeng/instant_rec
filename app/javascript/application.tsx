// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from "react";
import { createRoot } from "react-dom/client";
import Header from './components/header';
import Footer from './components/footer';
import {
    Routes,
    Route
  } from "react-router-dom";
import RecLetter from './components/rec_letter'
import ProfessorList from './components/request/professor_list'
import StudentRequest  from "./components/request";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './store'


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <React.StrictMode>
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
    </React.StrictMode>
);
