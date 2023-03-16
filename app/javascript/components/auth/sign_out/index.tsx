import React, { useEffect, useState } from 'react';
import api from '../../../api';
import { useNavigate } from 'react-router-dom';


export default function SignOut() {
    const authAPI = api.auth();
    const navigate = useNavigate();
    const [isStudentSignedIn, setIsStudentSignedIn] = useState('');
    const [isProfessorSignedIn, setIsProfessorSignedIn] = useState('');
    function refreshPage() {
        window.location.reload();
    }
    useEffect(() => {
    (
        async () => {
            const rss = await authAPI.isStudentSignedIn()
            const rsp = await authAPI.isProfessorSignedIn()
            setIsStudentSignedIn(rss)
            setIsProfessorSignedIn(rsp)
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
