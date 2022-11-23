import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'

function Header() {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Fanatika</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="ml-auto">

                            {userInfo ? (
                                <React.Fragment>
                                    <LinkContainer to='/bloglist'>
                                        <Navbar.Brand>Blogs</Navbar.Brand>
                                    </LinkContainer>

                                    <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Account Profile</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/my/profile'>
                                        <NavDropdown.Item>My Profile</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/my/blog'>
                                        <NavDropdown.Item>My Blog Posts</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/createblog'>
                                        <NavDropdown.Item>Create Blog</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                </NavDropdown>

                                </React.Fragment>

                            ) : (
                                <Container>
                                    <LinkContainer to='/gift'>
                                        <Nav.Link><i className="fas fa-user"></i>Ödüller</Nav.Link>
                                    </LinkContainer>

                                    <LinkContainer to='/leaderboard'>
                                        <Nav.Link><i className="fas fa-user"></i>Puan Tablosu</Nav.Link>
                                    </LinkContainer>

                                <LinkContainer to='/fanatika'>
                                    <Nav.Link><i className="fas fa-user"></i>Fanatika Nedir?</Nav.Link>
                                </LinkContainer>
                                    <LinkContainer to='/login'>
                                        <Nav.Link><i className="fas fa-user"></i>Giriş Yap</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to='/register'>
                                        <Nav.Link><i className="fas fa-user"></i>Kayıt Ol</Nav.Link>
                                    </LinkContainer>
                                    
                                </Container>
                                )}


                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenue'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>

                                </NavDropdown>
                            )}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
