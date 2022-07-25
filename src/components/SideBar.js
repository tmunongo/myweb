import React from 'react'
// import { slide as Menu } from 'react-burger-menu'
import {
  Link,
  //withRouter replacement for v6
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom'
import styled from 'styled-components'

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
  margin-right: 5vw;
  vertical-align: middle;
`

const ListItem = styled.li`
  font-size: 30px;
  font-weight: bold;
  line-height: 36px;
  padding: 16px;
  text-transform: capitalize;
`

const Menu = styled.div`
  align-text: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0px;
  position: fixed;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  width: 100vw;
  z-index: 3;
  @media (min-width: 768px) {
    top: -100vh;
  }
`

const SideBar = (props) => {
  // const [nav, setNav] = useState(props.nav)

  return (
    <Menu className="dropMenu" style={{ top: props.nav ? '0px' : '-100%' }}>
      <ul
        style={{
          listStyle: 'none',
          paddingLeft: '0px',
          paddingTop: '20vh',
        }}
      >
        <ListItem
          onClick={(e) => {
            e.preventDefault()
            props.setNav(false)
          }}
          className="navItem"
        >
          <Link to="/">
            <Icon
              alt="me"
              src="https://icongr.am/fontawesome/home.svg?size=25&color=currentColor"
            />
            Home
          </Link>
        </ListItem>
        <ListItem
          onClick={(e) => {
            e.preventDefault()
            props.setNav(false)
          }}
          className="navItem"
        >
          <Link to="/about">
            <Icon
              src="https://icongr.am/simple/aboutme.svg?size=25&color=currentColor&colored=false"
              alt="me"
            />
            About
          </Link>
        </ListItem>
        <ListItem
          onClick={(e) => {
            e.preventDefault()
            props.setNav(false)
          }}
          className="navItem"
        >
          <Link to="/writings">
            <Icon
              src="https://icongr.am/fontawesome/pencil-square-o.svg?size=25&color=currentColor"
              alt="me"
            />
            Writings
          </Link>
        </ListItem>

        <ListItem
          onClick={(e) => {
            e.preventDefault()
            props.setNav(false)
          }}
          className="navItem"
        >
          <Link to="/projects">
            <Icon
              src="https://icongr.am/fontawesome/terminal.svg?size=25&color=currentColor"
              alt="me"
            />{' '}
            Projects
          </Link>
        </ListItem>
      </ul>
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
