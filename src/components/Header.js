import React from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import Navbar from './Navbar';

function Header() {

    return (
        <>
            <MainHeder>
                <NavLink to="/">
                    <img src="./images/logo.png" alt="store logo" />
                    
                </NavLink>
                <Navbar/>
            </MainHeder>
        </>
    )
}

const MainHeder = styled.header` 
height: 6rem;
padding: 0px 20px;
 background-color:${({ theme }) => theme.colors.bg};

 display:flex;

 justify-content: space-between;

 align-items: center;

 position: relative;

.logo{

 height: 3rem;

}

`;

export default Header
