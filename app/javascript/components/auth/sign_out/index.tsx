import React, { useEffect, useState } from 'react';
import api from '../../../api';
import { useNavigate } from 'react-router-dom';


export default function SignOut() {
    const authAPI = api.auth();
    const navigate = useNavigate();
    function refreshPage() {
        window.location.reload();
    }
    useEffect(() => {
    (
        async () => {
            const rss = await authAPI.isStudentSignedIn()
            const rsp = await authAPI.isProfessorSignedIn()
            if (rss != '') {
                await authAPI.studentSignOut()
            }
            if (rsp != '') {
                await authAPI.professorSignOut()
            }
            navigate('/')
            refreshPage()

        }

    )()
    }, [authAPI])
    return (
        <div/>
    )
}
