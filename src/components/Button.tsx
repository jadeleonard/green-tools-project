import clsx from "../../node_modules/clsx/clsx";
import styled from 'styled-components';
import * as React from 'react';
const ButtonComponent = styled.button `
    background: black;
        border-radius: 5px;
        padding: 10px 14px;
        transition: 0.5s;
        color: white;



        border: none; 
        &:hover{
        background: #302f2f;
        box-shadow: 1px 2px 2px rgba(1, 1, 1, 1);
        }
        & .secondary {
         background: white;
    border-radius: 5px;
    padding: 10px 14px;
    transition: 0.5s;
    color:black;
    cursor: pointer;



    border: none;
    &:hover{
        
    }
    }
    & .link {
     background: transparent;
    border-radius: 5px;
    padding: 10px 14px;
    transition: 0.5s;
    color:black;
    text-decoration: underline;
    cursor: pointer;


    border: none;
    }

    `;
const Button = ({ id, className, primary, secondary, link, onClick, children }) => {
    const buttonClass = clsx(className, {
        'primary': primary,
        'secondary': secondary,
        'link': link
    });
    return (React.createElement(ButtonComponent, { className: buttonClass, onClick: onClick, id: id }, children));
};

export {
    Button
}