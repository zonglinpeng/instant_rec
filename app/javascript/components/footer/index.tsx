import React from 'react'
import './index.css'

const Footer = () => {
    return (
        <footer id="footer">
            <div id="footer-copyright">
                <p>Copyright © 2023 All Rights Reserved by InstantRec.</p>
            </div>
            <div id="footer-social-icons">
                <a className="facebook" href="/"><i className="fab fa-facebook"></i></a>
                <a className="twitter" href="/"><i className="fab fa-twitter"></i></a>
                <a className="github" href="/"><i className="fab fa-github"></i></a>
                <a className="linkedin" href="/"><i className="fab fa-linkedin"></i></a>
            </div>
        </footer>
    )
}

export default Footer
