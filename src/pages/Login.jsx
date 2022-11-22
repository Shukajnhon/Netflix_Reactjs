//
//
import React, { useState } from "react"
import { firebaseAuth } from "../utils/firebase-config.js"
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"


import BackgroundImage from "../components/BackgroundImage"
import Header from "../components/Header"



function Login() {
    const navigate = useNavigate()
    // const [showPassword, setShowPassword] = useState(false)
    const [formValue, setFormValue] = useState({
        email: "",
        password: ""
    })

    // HandleChange
    function HandleChange(event) {
        const { name, value } = event.target
        setFormValue(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }
    //Handle Login
    const handleLogIn = async () => {
        try {
            const { email, password } = formValue
            // const auth = getAuth()
            await signInWithEmailAndPassword(firebaseAuth, email, password)
            console.log("Successfully Login")

            // clear input value
            setFormValue({
                email: "",
                password: ""
            })
        } catch (err) {
            console.error(err)
            console.log("Check your Email or Password")

        }
    }
    // Get the currently signed-in user
    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) {
            // const uid = currentUser.uid
            // console.log(uid)
            navigate("/")
        }
        // navigate to homePage

    })


    return <StyledContainer>
        <BackgroundImage />
        <div className="content">
            <Header />
            <div className="form-container flex column a-center j-center">
                <div className="form flex column a-center j-center">
                    <div className="title">
                        <h3>Login</h3>
                    </div>
                    <div className="container flex column">
                        <input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={formValue.email}
                            onChange={HandleChange}
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formValue.password}
                            onChange={HandleChange}
                        />

                        <button onClick={handleLogIn}>Log In</button>
                    </div>
                </div>
            </div>
        </div>

    </StyledContainer>
}


const StyledContainer = styled.div`
    position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    grid-template-rows: 15vh 85vh;
    .form-container{
        gap: 2rem;
        height: 85vh;
        .form {
            padding: 2rem;
            background-color: #000000b0;
            width: 30vw;
            gap: 2rem;
            color: white;
            .container{
                gap: 2rem;
                width: 100%;
                input{
                    padding: 0.5rem 1rem;
                    width: 100%;
                }
                input:focus{
                        outline: none;
                    }
                button{
                    padding: 0.5rem 1rem;
                    background-color: #e50914;
                    border: none;
                    cursor: pointer;
                    color: white;
                    border-radius: 0.2rem;
                    font-weight: bolder;
                    font-size: 1.05rem;
                }
            }
        }
    }
  }
  
`;


export default Login