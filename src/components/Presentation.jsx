// Component: Presentation
//import
import ListeFleche from './ListeFleche'
import picture from '../assets/buildWebsite.svg'

function Presentation() {
    return (
        <>
        <div id='Presentation'>&nbsp;</div>
        <div className="Presentation">
            
            <div className='presentationGauche'>
                <h2>À propos de moi</h2>

                <p>Je m’appelle Alexandre Le Marec, je suis étudiant en BUT informatique.  (<a target='_blank' rel="noreferrer" href='https://cache.media.enseignementsup-recherche.gouv.fr/file/SP4-MESRI-26-5-2022/14/6/spe617_annexe15_1426146.pdf'>Lien du programme national du BUT Informatique</a>) <br/>Cela fait plusieurs années que je suis passionné la programmation notamment dans le domaine du développement web, le domaine avec lequel je suis le plus à l’aise. J’ai réalisé divers projets démontrant mes compétences, qui sont accessibles et présentés sur cette page. N’hésitez pas à y jeter un œil.</p>

                <p>Voici les technologie avec lesquelles je suis à l’aise :</p>

                <ListeFleche />
            </div>

            <div className='presentationDroite'>
                <img src={picture} alt="Photo de profil" />
            </div>

        </div>
        </>
    );
}

export default Presentation