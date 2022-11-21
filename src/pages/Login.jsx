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
    const [showPassword, setShowPassword] = useState(false)
    const [formValue, setFormValue] = useState({
        email: "",
        password: ""
    })
    // HandleClick
    function handleClick() {
        setShowPassword(true)
        // console.log("ShowPassword:", showPassword)
    }
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
    //HandleSignIn
    const handleSignIn = async () => {
        try {
            const { email, password } = formValue
            // const auth = getAuth()
            await signInWithEmailAndPassword(firebaseAuth, email, password)
            console.log("Successfully register")

            // clear input value
            setFormValue({
                email: "",
                password: ""
            })
        } catch (err) {
            console.log(err)
        }
    }
    // Get the currently signed-in user
    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) {
            const uid = currentUser.uid
            console.log(uid)
            navigate("/")
        }
        // navigate to homePage

    })


    return <StyledContainer showPassword={showPassword}>
        <BackgroundImage />
        <div className="content">
            <Header />
            <div className="form-container flex-column a-center j-center">
                <div className="form flex column a-center j-center">
                    <div className="title">
                        <h3>Login</h3>
                    </div>
                    <div class="container flex column"></div>
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
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) =>
        showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
        input {
          color: black;
          border: none;
          padding: 1rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
      button {
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
`;


export default Login