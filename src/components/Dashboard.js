import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'


function Dashboard() {

    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout(){
        setError('')

        try {
          await logout()
          history.psuh('/login')
        } catch {
          setError('Failed to log out.')  
        }
    }

    return (
        <>
            <div class='card'>
                <div class='card-body'>
                <h2 className="text-center mb-4">Profile</h2> 
                {error && <alert variant="danger">{error}</alert>}                
                <strong>Email: </strong> {currentUser.email}
                <link to='/update-profile' className='btn btn-primary w-100 mt-3'>Update Profile</link>
                </div>
            </div>
            <div className="w-100 text-center mt-2">
                <button variant='link' onClick={handleLogout}>Log Out</button>
            </div>
        </>
    )
}

export default Dashboard
