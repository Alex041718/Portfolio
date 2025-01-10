// Component: Introduction
import pp from '../assets/pp.jpeg'

function Introduction() {
    return (
        <div className="Introduction" id='Introduction'>
            <div className="introductionGauche">
                <h1>Alexandre Le Marec</h1>
                
                <h2>Ma passion c’est le web</h2>

                <p>
                    Je suis un développeur Full-Stack présent sur tous les terrains, le Front comme le Back (et occasionnellement du design d’interface). Actuellement, je suis concentré sur mes études à <a target='_blank' rel="noreferrer" href='https://iut-lannion.univ-rennes.fr'>l’IUT de Lannion</a> et à mon apprentissage chez Syfadis, un éditeur de logiciel de gestion de formation.
                </p>

            </div>

            <div className="introductionDroite">
                <img src={pp} alt="Photo de profil" />
            </div>



        </ div>
    );
}

export default Introduction