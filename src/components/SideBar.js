import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './SideBarStyle.css';

const ListItem = styled.li`
    font-style: normal;
    font-stretch: regular;
    text-transform: capitalize;
    font-weight: bold;
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 8px;
    display: inline;
    margin: 4px;
`;


const SideBar = () => {
    return (
        <Menu>
                <ListItem>
                    <Link to="/">Home</Link>
                </ListItem>
                <ListItem>
                    <Link to="/about">About</Link>
                </ListItem>
                <ListItem>
                    <Link to="/writings">Writings</Link>
                </ListItem>
                <ListItem>
                    Projects
                </ListItem>
                <ListItem>
                    Quick View
                </ListItem>
        </Menu>
    )
};

export default SideBar;