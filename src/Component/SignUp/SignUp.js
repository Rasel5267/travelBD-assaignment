import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './SignUP.css';
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import { useState } from 'react';


const SignUP = () => {
    const [user, setUser] = useState({
        IsLoggedIn: false,
        name: '',
        email: '',
        photo: ''
    })
    const [fbUser, setFbUser] = useState({
        IsLoggedIn: false,
        name: '',
        email: '',
        photo: ''
    })
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleLogin = () => {
        firebase.auth().signInWithPopup(googleProvider).then(res =>{
            const {displayName, photoURL, email} = res.user;
            const LogInUser = {
                IsLoggedIn: true,
                name: displayName,
                email: email,
                photo: photoURL
            }
            setUser(LogInUser);
            history.push('/hotel');
        })
        .catch(err => {
            console.log(err);
            console.log(err.message);
        })
    }

const handleFacebookLogin = () => {
    firebase.auth().signInWithPopup(facebookProvider).then(res =>{
        const {displayName, photoURL, email} = res.user;
        const LogInFbUser = {
            IsLoggedIn: true,
            name: displayName,
            email: email,
            photo: photoURL
        }
        setFbUser(LogInFbUser);
        history.push('/hotel');
      })
      .catch(err => {
        console.log(err);
        console.log(err.message);
    })
}

    const handleChange = (e) => {
        let isFormValid = true;
        if(e.target.name === 'email'){
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
            const isPasswordValid =  6 <= e.target.value.length && e.target.value.length <= 32 ;
            isFormValid = isPasswordValid;
        }
        if(isFormValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const history = useHistory();
    const handleSubmit = (e) => {
        if(user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res =>{
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                history.push('/hotel');
            })
            .catch(function(error) {
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
              })
        }
        e.preventDefault();
    }

    return (
        <div className="signUp-sec">
            <div className='signUp-form'>
                <h1>Create an account</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="firstName" placeholder="First Name" required className="input-box"/ ><br/><br/>
                    <input type="text" name="lastName" placeholder="Last Name" required className="input-box"/><br/><br/>
                    <input type="email" onBlur={handleChange} name="email" placeholder="Email" required className="input-box"/><br/><br/>
                    <input type="password" onBlur={handleChange} name="password" placeholder="Password" pattern="[a-zA-Z]{2," title='Please inter 6 digit and more then 2 letter' required className="input-box"/><br/><br/>
                    <input type="password" onBlur={handleChange} name="password" placeholder="Confirm Password" pattern="[a-zA-Z]{2," title='Please inter 6 digit and more then 2 letter' required className="input-box"/><br/><br/>
                    <input type="submit" className="log-btn" value="Create an account"/><br/><br/>
                </form>
                <span>Already have an account? <Link to="/Login">Login</Link> </span>
            </div>
            <p style={{color: 'red',textAlign: 'center'}}>{user.error}</p>
            {user.success && <p style={{color: 'green',textAlign: 'center'}}> User create successfully</p>}
            <hr/>
            <div className="scnSignUp">
                <span>or</span> <br/>
                <button onClick={handleFacebookLogin} className='loginBtn'><i class="fab fa-facebook"></i><span>Continue with Facebook</span></button> <br/><br/>
                <button onClick={handleGoogleLogin} className='loginBtn'><i class="fab fa-google"></i><span>Continue with Google</span></button>
                {
                    user.IsLoggedIn && <p>Welcome {user.name}</p>
                }
                {
                    fbUser.IsLoggedIn && <p>Welcome {user.name}</p>
                }
            </div>
        </div>
    );
};

export default SignUP;