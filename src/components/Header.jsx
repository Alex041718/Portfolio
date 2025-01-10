// Component: Header
// Il est afficher tout en haut, il permet de naviguer entre les différentes sections de la page.


function Header() {
    return (
        <header id="header">
        <div className="navContainer">

            <a href="#root">
                <p>Introduction</p>
            </a>

            <a href="#Presentation">
                <p>Présentation</p>
            </a>

            <a href="#ListeProjet">
                <p>Mes projets</p>
            </a>

            <a href="#Contact">
                <p>Me contacter</p>
            </a>

        </div>

        </header>
    );
}

export default Header