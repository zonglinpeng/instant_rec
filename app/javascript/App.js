import Header from './components/header';
import Footer from './components/footer';
import {
    Routes,
    Route
  } from "react-router-dom";
import RecLetter from './components/rec_letter'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import React, { useState } from "react";
import { store } from './store'
import { Application } from '@hotwired/stimulus';

// TODO: Append to application.js

export default function App() {
  return (
    <React.StrictMode>
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <Header></Header>
                        <Routes>
                            <Route path="/" element={<RecLetter></RecLetter>} />
                        </Routes>
                    <Footer></Footer>
                </Provider>
            </BrowserRouter>
        </div>
    </React.StrictMode>
  );
}
