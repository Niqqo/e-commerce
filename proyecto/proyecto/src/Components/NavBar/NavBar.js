import "./navBar.css";
import LOGO from "../../img/LOGO.jpg"
import CartWidget from "./CartWidget/CartWidget";

function NavBar(){
    return(
        
            <>
            <div class="box-imagen">
                    <a href="/">
                        <img src={LOGO}/>
                    </a>
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
                                <a class="nav-link active" id="link-a-navbar-inicio" aria-current="page"
                                    href="/">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" id="link-a-navbar" aria-current="page"
                                    href="/detalle">Detalle</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" id="link-a-navbar" aria-current="page"
                                    href="./secciones/ofertas.html">Ofertas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" id="link-a-navbar" aria-current="page"
                                    href="./secciones/nosotros.html">Nosotros</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" id="link-a-navbar" aria-current="page"
                                    href="./secciones/feedback.html">Feedback</a>
                            </li>
                            <li class="nav-item">
                                <div>
                                <a class="nav-link active" id="link-a-navbar" aria-current="page"
                                    href="./secciones/feedback.html"><CartWidget/></a>
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