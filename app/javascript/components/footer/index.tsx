import React from 'react'
import './index.css'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/zonglinpeng">
            All Rights Reserved by InstantRec.
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


const Footer = () => {
    return (
        <footer id="footer">
            <Copyright sx={{ mt: 5 }} />
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
