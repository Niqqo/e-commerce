import "./navBar.css";
import LOGO from "../../img/LOGO.jpg"
import CartWidget from "./CartWidget/CartWidget";

function NavBar(){
    return(
        
        <header>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <button class="navbar-toggler bg-light" id="boton" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="box-imagen">
                    <a href="">
                        <img src={LOGO}/>
                    </a>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" id="link-a-navbar-inicio" aria-current="page"
                                    href="./index.html">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" id="link-a-navbar" aria-current="page"
                                    href="./secciones/destacados.html">Destacados</a>
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
                            {/* <li class="nav-item">
                            <img src={CartWidget}/>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

        
    )

}

export default NavBar;