import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import loginImage from "../assets/loginimage.jpg";
import { SignInForm } from "../components/SignInForm";
import { SignUpForm } from "../components/SignUpForm";


const StyledLoginPage = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
color: #c9e4ca;
font-size: 15px;
.list-group{
    position: absolute;
    left: 10px;
     top: 10px;
}

.form-element select{
    background-color: #FFFF;
    outline: none;
    padding: 0 10px;
    width: 100%;
    cursor: pointer;
    margin-top: 1px;
    appearance: none;
    
}
.form-element::after{
    content: '';
    border-width: 5px;
    border-style: solid;
    border-color: transparent;
    border-top-color: #222;
    display: inline-block;
    position: absolute;
    right: 10px;
    bottom: 10px;
}



.login-container{
    background-color: #345577;
    display: flex;
    
 
    .left{
        flex: 1;
        img{
            height: 50vh;
            display: flex;
        }
    }
    .right{
        flex: 2;
        padding: 90px;
        display: center;
        flex-direction: column;
        justify-content: end;
        form{
          
            
            input{
                width: 90%;
                background-color: transparent;
                border: none;
                border-bottom: 1px solid #c9e4ca;
                font-size: 15px;
                color: #c9e4ca;
              
                ::placeholder{
                    color:#c9e4ca;
                }
                :focus{
                    outline: none;
                }
                
                    &:-webkit-autofill,
                    &:-webkit-autofill: hover,
                    &:-webkit-autofill: focus,
                    &:-webkit-autofill: active{
                        transistion: background-color 5000s ease-in-out 0s;
                        font-size: 18px;
                        -webkit-text-fill-color: black;
                    }
                &:-webkit-autofill::first-line{
                    font-size: 18px;
                }
            }
            select{
                font-family: 'Roboto', sans-serif;

            }
            .login-btn-container{
                background-color: transparent;
                border: none;
                cursor: pointer;
                text-align: right;
                height: 50px;
            }
            }  
            span{
                color: #F5A3A3;
                font-size: 10px;
                position: fixed;
            }
        }
    }
    .signup-element{
        color: #eff7f6;
        
    }  
        
}
`;



export const LoginPage = () => {

    const [visibleLogin, setVisibleLogin] = useState(true);


    return (
        <StyledLoginPage>

            <div className="list-group">
                <a href="/" className="list-group-item list-group-item-action active" aria-current="true">
                    Anasayfaya Dön
                </a>
            </div>
            <div className="login-container">
                <div className="left">
                    <img src={loginImage} alt="login" />
                </div>
                <div className="right">
                    {visibleLogin ? (
                        <SignInForm setVisibleLogin={setVisibleLogin} />
                    ) : (
                        <SignUpForm setVisibleLogin={setVisibleLogin} />
                    )}
                    <Link to="/forgot">Şifremi Unuttum</Link>
                </div>
            </div>
        </StyledLoginPage>
    );
}
export default LoginPage;