import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './index.css'
import { Link } from "react-router-dom";
// import Avatar from '@mui/material/Avatar';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import api from '../../api/litcode';
import { useEffect, useState } from 'react';
import React from 'react';

export default function Header() {
    // const userAPI = api.user()
    // const [profile, setProfile] = useState<UserProfile | null>(null)

    // useEffect(() => {
    //     (
    //         async () => {
    //             const rst = await userAPI.profile()
    //             setProfile(rst)
    //         }
    //     )()
    // }, [userAPI])

    return (
        <Box id="header" >
            <AppBar className="appbar" position="static">
                <Toolbar>
                    <Button id="home" color="inherit" component={Link} to={'/'} >
                        <Typography id="home" variant="h6" color="inherit" component="div" >
                            INSTANTREC
                        </Typography>
                    </Button>
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <Button color="inherit" component={Link} to="/student/init_request">Request</Button>
                    <Button color="inherit" component={Link} to="/student/sign_out">LogOut</Button>
                    {/* <Avatar className='user-avatar' src={()=>AccountCircleIcon} sx={{ width: 35, height: 35 }}></Avatar> */}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
