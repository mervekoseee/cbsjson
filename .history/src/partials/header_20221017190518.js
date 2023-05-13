import React, { useCallback } from 'react'
import styled from 'styled-components';
import logo from '../assets/iconmonstr-crosshair-11-64.png';
import { Link, useHistory } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { ProfileDropDown } from '../components/ProfileDropDown';
import Swal from 'sweetalert2';


const StyledHeader = styled.div`
    height: 10%;
    background-color: #023047;
    padding: 0 10%;
    display: flex;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    box-shadow: 0px 2px 10px black;

    .logo.container{
        flex: 0.5;
        img{
            height: 8vh;
        }
    }
    .menu.container{
        flex: 1;
    }

    nav{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    
    ul{
        list-style: none;
    }
   
    ul a {
        color: #FFFFFF;
        float: left;
        text-decoration: none;
        position: relative;
    }
    ul a: after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width:100%;
        height: 2px;
        background-color: white;
        transform: scaleX(0);
        transition: transform 0.25s ease-out;
    }
    ul a:hover: after {
        // opacity: 0.7;
        transform: scaleX(1);
    }
    ul a: not(:first-child) {
        margin-left: 20px;

    }
    .top-menu-btn{
        float: right;
        margin: 20px;
        background-color: #219ebc;
        padding: 2px 20px;
        border: none;
        cursor: pointer;
        border-radius:10px;
        width: 110px;
        height: 40px;
        color: #FFFF;
    }

`;

export const Header = () => {
    const [user, setUser] = useLocalStorage('user');
    const history = useHistory();

    const handleLogin = useCallback(()=>{
        history.push("/login");
    }, [history])

    const handleLogout = useCallback(()=>{
        setUser("");
        history.push("/");
        Swal.fire('Çıkış Yaptınız');
    }, [setUser, history])

    return (
        <StyledHeader>
            <div className='logo-container'>
                <img src={logo} alt="logo" />
            </div>
            <nav className='menu-container'>
                <ul>
                    <Link to="/">deneme</Link>
                    <Link to="/hakkimizda">Hakkımızda</Link>
                    <Link to="/iletisim">İletişim</Link>
                    <Link to="/private">Haritalar</Link>
                </ul>
                {user ? (
                    <ProfileDropDown userName={user} handleLogout={handleLogout}/>
                ) : (
                    <button className="top-menu-btn" onClick={handleLogin}>
                        Giriş Yap
                    </button>
                )}
            </nav>
        </StyledHeader>
    )
}