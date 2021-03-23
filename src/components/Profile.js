import React from 'react'
import { useSelector } from 'react-redux'
const Profile = () => {
    const firstName = useSelector(state => state.fn)
    const email = useSelector(state => state.email)
    const pass = useSelector(state => state.pass)

    return (
        <div>
            <h2>Your First Name is : {firstName} </h2>
            <h2>Your Email is : {email}</h2>
            <h2>Your password is : {pass}</h2>
        </div>
    )
}

export default Profile
