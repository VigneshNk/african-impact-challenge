import React, { useState } from 'react'
import StudentProfileStyles from './Profile.module.scss'
import student from '../../assets/student.png'
import logo from '../../assets/tempLogo.png'
import course from '../../assets/tempCourseImg.png'
import entrepreneur from '../../assets/entrepreneur.png'
import { Link } from 'react-router-dom'

function Profile() {
    const [step, setStep] = useState(0)
    const [user, setUser] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleInput(userType){
        setUser(userType)
    }


    return (
<div>
    <div className={StudentProfileStyles.navBar}>
        <img src={logo}/>
            <h2>Company Name</h2>
        </div>
        <div className={StudentProfileStyles.wrapper}>
            
            <div className={StudentProfileStyles.container}>
                
                <div className={StudentProfileStyles.contentContainer}>
                    <div>
                        <div className={StudentProfileStyles.infoBar}>
                                <h2>Anthony Davis</h2>
                                <p>information</p>
                                <p>information</p>
                                <p>information</p>
                        </div>
                        <div>
                            
                            <img src={student} alt="error"/>
                            <h1 className={StudentProfileStyles.header}>User Info</h1>
                            <p className={StudentProfileStyles.subheader}>Your Recent Courses</p>
                            <img src={course} alt=""/>
                            <hr width="100%" size="5" color="#C4C4C4"/>
                            <br/>
                        </div>
                        <p className={StudentProfileStyles.subheader}>Don't forget your deadlines!</p>
                    </div>
                </div>
            </div>
            
        </div>
</div>
    )
}

export default Profile
