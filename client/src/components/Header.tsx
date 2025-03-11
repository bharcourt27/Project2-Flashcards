import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  const [ loginCheck, setLoginCheck ] = useState(false);

  const checkLogin = () => {
    if(auth.loggedIn()) {
      setLoginCheck(true);
    }
  };

  useEffect(() => {
    console.log(loginCheck);
    checkLogin();
  }, [loginCheck])

  return (
    <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
      <Nav className="me-auto">
        <Nav.Link as = {Link} to= "/">Home</Nav.Link>
        <Nav.Link as = {Link} to= "/create">Create Flashcard</Nav.Link>
        <Nav.Link onClick={() => {
              auth.logout();
            }}>Logout</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    // <div className='nav'>
    //   {/* <div className='nav-title'>
    //     <Link to='/'>Krazy Kanban Board</Link>
    //   </div> */}
    //   <ul>
    //   {
    //     !loginCheck ? (
    //       <li className='nav-item'>
    //         <button type='button'>
    //           <Link to='/login'>Login</Link>
    //         </button>
    //       </li>
    //     ) : (
    //       <li className='nav-item'>
    //         <button type='button' onClick={() => {
    //           auth.logout();
    //         }}>Logout</button>
    //       </li>
    //     )
    //   }
    //   </ul>
    // </div>
  )
}

export default Header;
