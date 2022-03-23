import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link, 
    //withRouter replacement for v6
    useLocation,
    useNavigate,
    useParams
 } from 'react-router-dom';
import styled from 'styled-components';
import './SideBarStyle.css';


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
            {...props}
            router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
};

const ListItem = styled.li`
    font-style: normal;
    font-stretch: regular;
    text-transform: capitalize;
    font-weight: bold;
    display: inline;
    margin: 4px;
`;


const SideBar = props => {
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
                {/*<ListItem>
                    <Link to="/quickview" >Quick View</Link>
                </ListItem>
                if logged in display logout, else sign in options 
                <UserState>
                    {data.isLoggedIn ? (
                        <ButtonAsLink
                            onClick={() => {
                                //remove token
                                localStorage.removeItem('token');
                                //clear app cache
                                client.resetStore();
                                //update local state
                                client.modify({ data: { isLoggedIn: false } });
                                //redirect to home
                                props.history.push('/');
                            }}
                        >
                            Log Out
                        </ButtonAsLink>
                    ) : (
                        <ButtonAsLink>
                            <Link to={'/signin'}>Sign In</Link> || {' '}
                        </ButtonAsLink>
                    )}
                </UserState>
                */}
        </Menu>
    )
};

export default withRouter(SideBar);