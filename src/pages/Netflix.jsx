//
import React, { useState } from "react"

import { FaPlay } from "react-icons/fa"
import { AiOutlineInfoCircle } from "react-icons/ai"
import styled from "styled-components"

import Navbar from "../components/Navbar"
import MovieBanner from "../assets/Home-StrangerThings.jpg"
import MovieLogo from "../assets/MovieTitle.webp"

function Netflix() {
    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }

    // function handlerScroll() {
    //     window.onscroll(() => {
    //         setIsScrolled(window.pageYOffset === 0 ? false : true)
    //         console.log(window.pageYOffset)
    //         return () => (window.onscroll = null)
    //     })
    //     console.log("scrolled")
    // }


    return (
        <StyledContainer>
            <Navbar isScroll={isScrolled} />
            <div className="hero">
                <img src={MovieBanner} alt="background" className="background-image" />
                <div className="container">
                    <div className="logo">
                        <img src={MovieLogo} alt="Movie Logo" />
                    </div>
                    <div className="buttons flex">
                        <button className="flex j-center a-center">
                            <FaPlay />
                            Play
                        </button>

                        <button className="flex j-center a-center">
                            <AiOutlineInfoCircle />
                            More Info
                        </button>
                    </div>
                </div>
            </div>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    background-color: black;
    .hero{
        position: relative;
        .background-image{
            filter: brightness(60%);
        }
        img {
            height: 100vh;
            width: 100vw;
        }
        .container{
            position: absolute;
            bottom: 5rem;
            .logo{
                img{
                    width: 100%;
                    height: 100%;
                    margin-left: 5rem;
                }
            }
            .buttons{
                margin: 5rem;
                gap: 2rem;
                button{
                    font-size: 1.4rem;
                    gap: 1rem;
                    border-radius: 0.2rem;
                    padding: 0.5rem 2.4rem 0.5rem 2rem;
                    border: none;
                    cursor: pointer;
                    transition: 0.3 ease-in-out;
                }
                button:hover{
                    opacity: 0.8;
                }
                button:nth-of-type(2){
                    background-color: rgba(109,109,110, 0.7);
                    color: white;
                    svg{
                        font-size: 1.8rem;
                    }
                }
            }
        }
    }
`;
export default Netflix