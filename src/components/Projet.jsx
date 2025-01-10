// importation des images des projets
import Amazing from '../assets/projectPictures/Amazing.png';
import Bot4 from '../assets/projectPictures/Bot4.png';
import Elex from '../assets/projectPictures/Elex.png';
import Puissance4 from '../assets/projectPictures/Puissance4.png';
import phpTreatment from '../assets/projectPictures/phpTreatment.png';
import { useState } from 'react';

import GithubLink from '../assets/GithubLink.svg';

function Projet(props) {
  // création d'un liste des liens des images
  const images = [Amazing,Puissance4, Bot4, Elex, phpTreatment ];

  var imageProject = images[props.data.id];
  var githubBool = props.data.hasOwnProperty('github');

  const [isVisible, setIsVisible] = useState(false);
  
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
  
  

  return (
    <div className="Projet">
        <div className='left'>
            <h2 className='projetTitle'>{props.data.title}</h2>
            <ul>
                {props.data.tech.map((detail, index) => {
                    return <li key={index}>{detail}</li>;
                })}
            </ul>
            
            {githubBool && <a href={props.data.github}><img src={GithubLink}/></a>}
            <p className='description'>{props.data.description}</p>
        </div>
        <div className='right'>
        <img className='image' src={imageProject} alt={props.data.title}/>
        <div className='right' style={{display: isVisible ? 'flex' : 'none'}}>

        <div className="skills">
            <p className='skillsTitle'>Compétences et Acquis</p>
            <p className='smallComment'>Compétences du programme national du BUT informatique</p>
            {props.data.skills.map((skillGroup, index) => {
        return (
        <div className='boxCompetence' key={index}>
        {skillGroup.map((skill, skillIndex) => {
        if (Array.isArray(skill)) {
          // Skill title
          return <h4 key={skillIndex}>{skill[0]}</h4>;
        } else {
          // AC paragraph
          return <p key={skillIndex}>{skill}</p>;
        }
        })}
        </div>
        );
        })}
        </div>

        </div>
        <button className='button' onClick={toggleVisibility}>
        {isVisible ? 'Voir moins' : 'Voir les compétences acquises'}
        </button>
        </div>
    </div>
  );
}

export default Projet;
