import React from 'react'
import './index.css'

const Footer = () => {
    return (
        <footer id="footer">
            <div id="footer-copyright">
                <p>Copyright © 2023 All Rights Reserved by InstantRec.</p>
            </div>
            <div id="footer-social-icons">
                <a className="github" href="https://github.com/zonglinpeng">
                    <i className="fab fa-github"></i>
                </a>
                <a className="linkedin" href="https://www.linkedin.com/in/zonglinpeng/">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer
