import React from "react";
import { Header } from "../partials/header";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ForgotStyled = styled.div`
.fotgot-container{
    posiiton:center;
 
}
.user{
    margin-left: 25%;
    margin-right:30%;
    input
   {
    width:100vh;
   }
  }

`;


const ForgotPage = () => {

    return (
        <ForgotStyled>
            <Header />
            <div className="forgot-container">
                <div className="p-5">
                    <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-2">Şifrenizi Mi Unuttunuz?</h1>
                        <p className="mb-4">E-mail adresinizi giriniz. Size yollayacağımız linkten şifrenizi sıfırlayabilirsiniz.</p>
                    </div>
                    <form className="user">
                        <div className="form-group">
                            <input type="email" 
                            className="form-control form-control-user" 
                            id="exampleInputEmail" 
                            aria-describedby="emailHelp" 
                            placeholder="Email Adresinizi Giriniz..." />
                        </div>
                        <a href="/login" className="btn btn-primary btn-user btn-block">
                            Şifreyi Sıfırla
                        </a>
                    </form>
                    <div className="text-center">
                        <a className="small" href="/login">Yeni Hesap Oluştur</a>
                    </div>
                    
                </div>
            </div>
        </ForgotStyled>
    )
}
export default ForgotPage;