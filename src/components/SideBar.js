import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import {
  Link,
  //withRouter replacement for v6
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom'
import styled from 'styled-components'
import './SideBarStyle.css'

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    return <Component {...props} router={{ location, navigate, params }} />
  }
  return ComponentWithRouterProp
}

const Icon = styled.img`
  margin-right: 5px;
  vertical-align: middle;
`

const ListItem = styled.li`
  border-bottom: 2px solid black;
  display: inline;
  font-size: 20px;
  font-stretch: regular;
  font-style: normal;
  font-weight: bold;
  height: 40px;
  margin: 4px;
  margin-top: 6px;
  text-transform: capitalize;
`

const SideBar = (props) => {
  return (
    <Menu>
      <ListItem className="navItem">
        <Link to="/">
          <Icon
            src="https://icongr.am/fontawesome/home.svg?size=25&color=currentColor"
            alt="me"
          />
          Home
        </Link>
      </ListItem>
      <ListItem className="navItem">
        <Link to="/about">
          <Icon
            src="https://icongr.am/simple/aboutme.svg?size=25&color=currentColor&colored=false"
            alt="me"
          />
          About
        </Link>
      </ListItem>
      <ListItem className="navItem">
        <Link to="/writings">
          <Icon
            src="https://icongr.am/fontawesome/pencil-square-o.svg?size=25&color=currentColor"
            alt="me"
          />
          Writings
        </Link>
      </ListItem>

      <ListItem className="navItem">
        <Icon
          src="https://icongr.am/fontawesome/terminal.svg?size=25&color=currentColor"
          alt="me"
        />{' '}
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
}

export default withRouter(SideBar)
