import GithubLink from '../assets/GithubLink.svg';
import { useState } from 'react';

function SmallProjet(props) {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  

  var githubBool = props.data.hasOwnProperty('github');

  return (
    <div className="smallProjet" data-aos="fade-up">
        <div className='left'>
            <h2 className='smallprojetTitle'>{props.data.title}</h2>
            <ul>
                {props.data.tech.map((detail, index) => {
                    return <li key={index}>{detail}</li>;
                })}
            </ul>
            {githubBool && <a href={props.data.github}><img src={GithubLink}/></a>}
            <p className='description'>{props.data.description}</p>
        </div>
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
  );
}

export default SmallProjet;
