import React, { useState } from 'react'
import axios from 'axios'
import makeToast from "../Toaster";
import { Link } from "react-router-dom";
import '../styles/loginAndRegister.css';
import LoginPage from './LoginPage';


export default function RegisterPage() {
    const [userState, setUserState] = useState({ email: '', password: '', fname: '', lname: '', location: null, phone: '', hasAgreed: false });

    const handleChange = (e) => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        // setUserState({
        //     [name]: value, ...userState
        // });
        setUserState((prevUserState) => {
            return ({ ...prevUserState, [name]: value })
        });
        console.log(userState);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('The form was submitted with the following data:');

        axios.post('http://localhost:8000/user/register', userState)
            .then(response => {
                makeToast("success", response.data.message);
                console.log("register success");
            })
            .catch(err => {
                makeToast("error", err.response.data.message);
                console.log("register failed", err)
            })

    }

    return (
        <div className="FormCenter">
            <form onSubmit={handleSubmit} className="FormFields">
                <div className="FormField" id="names">
                    <label className="FormField__Label" htmlFor="fname">First Name</label>
                    <input type="text" id="fname" className="FormField__Input" placeholder="Enter your first name" name="fname" value={userState.fname} onChange={handleChange} />
                </div>
                <div className="FormField" id="names">
                    <label className="FormField__Label" htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" className="FormField__Input" placeholder="Enter your last name" name="lname" value={userState.lname} onChange={handleChange} />
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="password">Password</label>
                    <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={userState.password} onChange={handleChange} />
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                    <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={userState.email} onChange={handleChange} />
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="phone">Phone Number</label>
                    <input type="text" id="phone" className="FormField__Input" placeholder="Enter your Phone Number" name="phone" value={userState.num} onChange={handleChange} />
                </div>

                <div className="FormField">
                    <label className="FormField__CheckboxLabel">
                        <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={userState.value} onChange={handleChange} /> I agree all statements in <a href="facebook.com" className="FormField__TermsLink">terms of service</a>
                    </label>
                </div>

                <div className="FormField">
                    <button className="FormField__Button mr-20">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

