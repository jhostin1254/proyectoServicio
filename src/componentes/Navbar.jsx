import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/navbar.css"
import { AiOutlineAndroid } from "react-icons/ai";

export function SideNavbar() {
    return (
        <Navbar className='navbarContent' >
            <Container fluid className="justify-content-start ">
                <Navbar.Brand href="/" className='navbarContent-Logo'>
                <section className="logoContent">
                    <AiOutlineAndroid className='logoContent-imgOpen' />
                <h2 className='logoContent-h2Open'>SERVICELL</h2>
                </section>
                </Navbar.Brand>
                
            </Container>
        </Navbar>
    );
}