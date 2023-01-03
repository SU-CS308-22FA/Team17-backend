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
                                    <LinkContainer to='/playerlist'>
                                        <Navbar.Brand>Player Scores </Navbar.Brand>
                                    </LinkContainer>

                                    <LinkContainer to='/playerratings'>
                                        <Navbar.Brand>Player Ratings</Navbar.Brand>
                                    </LinkContainer>

                                    <LinkContainer to='/teamstatistics'>
                                        <Navbar.Brand>Team Statistics</Navbar.Brand>
                                    </LinkContainer>

                                    <LinkContainer to='/quizlist'>
                                        <Navbar.Brand>Quizzes</Navbar.Brand>
                                    </LinkContainer>

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

                                    <LinkContainer to='/scoreplayer'>
                                        <NavDropdown.Item>Score Player</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                </NavDropdown>

                                </React.Fragment>

                            ) : (
                                <Container>


                                    <LinkContainer to='/about'>
                                        <Nav.Link><i className="fas fa-user"></i>Hakkımızda</Nav.Link>
                                    </LinkContainer>

                                    <LinkContainer to='/gift'>
                                        <Nav.Link><i className="fas fa-user"></i>Ödüller</Nav.Link>
                                    </LinkContainer>

                                    <LinkContainer to='/leaderboard'>
                                        <Nav.Link><i className="fas fa-user"></i>Puan Tablosu</Nav.Link>
                                    </LinkContainer>

                                    <LinkContainer to='/fanatika'>
                                        <Nav.Link><i className="fas fa-user"></i>Fanatika Nedir?</Nav.Link>
                                    </LinkContainer>

                                    <LinkContainer to='/FAQ'>
                                        <Nav.Link><i className="fas fa-user"></i>FAQ</Nav.Link>
                                    </LinkContainer>

                                    <LinkContainer to='/PrizeWinner'>
                                        <Nav.Link><i className="fas fa-user"></i>Ödül Kazananar</Nav.Link>
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
                                <React.Fragment>
                                    <NavDropdown title='Admin' id='adminmenue'>
                                        <LinkContainer to='/admin/userlist'>
                                            <NavDropdown.Item>Users</NavDropdown.Item>
                                        </LinkContainer>

                                        <LinkContainer to='/admin/addCategory'>
                                            <NavDropdown.Item>Add Category</NavDropdown.Item>
                                        </LinkContainer>

                                        <LinkContainer id='addPlayer' to='/admin/addPlayer'>
                                            <NavDropdown.Item>Add Player</NavDropdown.Item>
                                        </LinkContainer>

                                        <LinkContainer to='/adminPrizeAdd'>
                                            <NavDropdown.Item>Prize Add</NavDropdown.Item>
                                        </LinkContainer>

                                    </NavDropdown>

                                    <LinkContainer to='/categorylist'>
                                        <Navbar.Brand>Categories</Navbar.Brand>
                                    </LinkContainer>


                                </React.Fragment>

                            )}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
