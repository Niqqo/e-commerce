import "./navBar.css";
import LOGO from "../../img/LOGO.jpg"
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";


function NavBar(){
    return(
        
            <>
            <div class="box-imagen">
                    <Link to="/">
                        <img src={LOGO}/>
                    </Link>
                    </div>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <button class="navbar-toggler bg-light" id="boton" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" id="link-a-navbar-inicio" aria-current="page"
                                    to="/">Inicio</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" id="link-a-navbar" aria-current="page"
                                    to="/detalle/1">Detalle</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" id="link-a-navbar" aria-current="page"
                                    to="/category/coffes">Cafes</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" id="link-a-navbar" aria-current="page"
                                    to="/category/Cafe-Negro">Cafe-Negro</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" id="link-a-navbar" aria-current="page"
                                    to="/category/Cafe-conLeche">Cafe-conLeche</Link>
                            </li>
                            <li class="nav-item">
                                <div>
                                <Link class="nav-link active" id="link-a-navbar" aria-current="page"
                                    to="./secciones/feedback.html"><CartWidget/></Link>
                                </div>
                            </li>   
                        </ul>
                    </div>
                </div>
            </nav>
            </>


        
    )

}

export default NavBar;