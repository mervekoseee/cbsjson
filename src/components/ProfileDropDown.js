import React, {useCallback, useRef, useState} from "react";
import userIcon from "../assets/user.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useClickOutside } from "../hooks/useClickOutside";

const StyledProfileDropDown = styled.div`
position: relative;
.animated--grow-in;
.user-button{
    background-color: #219ebc;
    border: none;
    color: #FFF;
    padding: 5px 20px;
    border-radius: 30px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    min-width: 120px;
    cursor: pointer;
}

.dropdown-content{
    display: none;
    flex-direction: column;
    position: absolute;
    z-index: 99;
    background-color: #219ebc;
    min-width: 70px;
    border-radius: 10px;
    padding: 25px;
    text-align: center;
    a{
        text-decoration: none;
        color: #fff;
        :hover{
            opacity: 0.7;
        }
    }
    label{
        color: white;
        :hover{
            
            color: #fb8500;
            cursor: pointer;
        }
    }
}
.show{
    
    display: flex;
}
`;

export const ProfileDropDown = ({ userName, handleLogout }) => {
    const [visible, setVisible] = useState(false);
    const refDropdown = useRef(null);
    const handleClick= useCallback(()=>{
        setVisible((c) => !c);
    }, []);

    useClickOutside(refDropdown, ()=>setVisible(false));

    return (
        <StyledProfileDropDown ref= {refDropdown}>
            <button onClick={handleClick} className="user-button ">
                <img src={userIcon} alt="user" />
                {userName}
            </button>
            <div className={visible ? "dropdown-content show": "dropdown-content"}>
                <Link to="/profile">Profil</Link>
                <label onClick={handleLogout}>Logout</label>
            </div>
        </StyledProfileDropDown>
    );

}
