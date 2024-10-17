import { Col, Container, Row } from "react-bootstrap"
import Accordion from 'react-bootstrap/Accordion';
import "../styles/sidebarOpen.css"
import "../styles/sidebarClose.css"
import { AiOutlineAndroid } from "react-icons/ai";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Sidebarlink } from "./sidebarLink";

export function Sidebar({ setTema, temas, sidebarOpen, setSidebarOpen }) {


    const ThemeStyle = temas ? 'sidebar-Light' : 'sidebar-Dark'
    const h2State = sidebarOpen ? 'logoContent-h2Open' : 'logoContent-h2Close'
    const imgState = sidebarOpen ? 'logoContent-imgOpen' : 'logoContent-imgClose'
    const sidebarState = sidebarOpen ? 'sidebarButtonOpen' : 'sidebarButtonClose'


    const cambiarTema = () => {
        setTema(!temas)
    }
    const clickButtomSideBar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    return (
        <div className="sidebarContainer">
            <section className="logoContent">
                <AiOutlineAndroid className={imgState} />
                <h2 className={h2State}>JUDICELL</h2>
            </section>
            <button onClick={clickButtomSideBar} className={sidebarState}>
                <SlArrowLeft />
            </button>
            <div className="divider">

            </div>
            <Container className="linkContainer">
                <Row>
                    <span className={sidebarOpen ? 'linkContainer-spanOpen' : 'linkContainer-spanClose text-center'}>Menu</span>
                </Row>
                <Row>
                    <Sidebarlink direccion="/" nombre="Dashboard" nombreIcon="dashboard" sidebarOpen={sidebarOpen} />
                </Row>
                <Row>
                    <span className={sidebarOpen ? 'linkContainer-spanOpen' : 'linkContainer-spanClose text-center'}>Servicios:</span>
                </Row>
                <Row>
                    <Sidebarlink direccion="ventas" nombre="Ventas" nombreIcon="ventas" sidebarOpen={sidebarOpen} />
                </Row>
                <Row>
                    <Sidebarlink direccion="samsung" nombre="Inventario" nombreIcon="pantalla" sidebarOpen={sidebarOpen} />
                </Row>
                <Row className="pantallaMarca">
                    
                </Row>
            </Container>
            <div className="divider">
                <hr />
            </div>
            <Container className="linkContainer">
                <Row>
                    <Sidebarlink direccion="configuracion" nombre="Configuracion" nombreIcon="configuracion" sidebarOpen={sidebarOpen} />
                </Row>
                <Row>
                    <Sidebarlink direccion="salir" nombre="Salir" nombreIcon="salir" sidebarOpen={sidebarOpen} />
                </Row>
            </Container>
            <div className="divider">
                <hr />
            </div>


            {
                /*
                <Container>
                <div className="ThemeContent">
                    <div className="ToggleContent">
                        <div className="grid theme-container">
                            <div className="content">
                                <div className="demo">
                                    <label className="switch">
                                        <input type="checkbox" className="theme-swither" onClick={cambiarTema} />
                                        <span className={`slider round ${temas ? '' : 'dark'}`} ></span>
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                </Container>
                */
            }
        </div>
    )
}