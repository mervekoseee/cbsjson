import React, { useState } from "react";
import visibleIcon from "../assets/visible.png";
import invisibleIcon from "../assets/invisible.png";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import loginIcon from "../assets/loginbutton.png";
import Swal from "sweetalert2";

export const SignUpForm = ({ setVisibleLogin }) => {

    const [user, setUser] = useLocalStorage('user');
    const history = useHistory();
    const [visiblePassword, setVisiblePassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        if (data.passwordCheck === data.password) {
            console.log("başarılı")
            Swal.fire({
                icon: 'success',
                title: 'Üyelik Oluşturuldu',
                text: 'Anasayfadan giriş yapabilirsiniz!',
                footer: '<a href="/">Anasayfa</a>'
            })

        } else {
            console.log("something went wrong.");
            Swal.fire({
                icon: 'error',
                title: 'Girdiğiniz şifreler eşleşmiyor!'
            })
        }

    };
    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-element">
                <input {...register("name", {
                    required: {
                        value: true,
                        message: 'Kullanıcı adı gereklidir.'
                    }
                })}
                    placeholder="E-Mail"
                    type="text"
                />
                <span>{errors?.name?.message}</span>
            </div>
            <div className="form-element">
                <input {...register("password", { required: { value: true, message: 'Bu alan gereklidir' } })}
                    placeholder="Yeni Şifre"
                    type={visiblePassword ? "text" : "password"}
                />
                <span>{errors?.password?.message}</span>
                {visiblePassword ? (
                    <img onClick={() => setVisiblePassword(false)}
                        src={invisibleIcon}
                        alt="invisible-password" />
                ) : (
                    <img onClick={() => setVisiblePassword(true)}
                        src={visibleIcon}
                        alt="visible-password" />
                )}
            </div>
            <div className="form-element">
                <input {...register("passwordCheck", { required: { value: true, message: 'Bu alan gereklidir' } })}
                    placeholder="Şiferenizi tekrar giriniz."
                    type={visiblePassword ? "text" : "password"}
                />
                <span>{errors?.passwordCheck?.message}</span>
                {visiblePassword ? (
                    <img onClick={() => setVisiblePassword(false)}
                        src={invisibleIcon}
                        alt="invisible-password" />
                ) : (
                    <img onClick={() => setVisiblePassword(true)}
                        src={visibleIcon}
                        alt="visible-password" />
                )}
            </div>
            <div className="form-element">
            <div class="dropdown-menu" style="max-height: 643.203px; overflow: hidden; min-height: 0px;">
<div class="inner show" role="listbox" id="bs-select-1" tabindex="-1" aria-activedescendant="bs-select-1-1" style="max-height: 625.203px; overflow-y: auto; min-height: 0px;">
<ul class="dropdown-menu inner show" role="presentation" style="margin-top: 0px; margin-bottom: 0px;">
<li class="selected active">
<a role="option" class="dropdown-item active selected" id="bs-select-1-0" tabindex="0" aria-setsize="3" aria-posinset="1" aria-selected="true">
<span class="text">
Day
</span>
</a>
</li>
<li class="selected active">
<a role="option" class="dropdown-item active selected" id="bs-select-1-1" tabindex="0" aria-setsize="3" aria-posinset="2" aria-selected="true">
<span class="text">
Week
</span>
</a>
</li>
<li>
<a role="option" class="dropdown-item" id="bs-select-1-2" tabindex="0" aria-setsize="3" aria-posinset="3">
<span class="text">
Month
</span>
</a>
</li>
</ul>
</div>
</div>
            </div>
            <div className="form-element">
                <button className="login-btn-container">
                    <img src={loginIcon} alt="login-btn-icon" />
                </button>
            </div>
        </form>
        <div className="signup-element">
            Üyliğin var mı?
        </div>
        <button onClick={() => setVisibleLogin(true)} className="sign-up-btn">
            Giriş Yap
        </button>
    </>
}