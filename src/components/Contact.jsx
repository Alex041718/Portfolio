import Email from '../assets/contacts/Email.svg';
import Linkedin from '../assets/contacts/Linkedin.svg';
import Github from '../assets/contacts/Github.svg';

import CV from '../assets/CV_ALM_2025.pdf';

function Contact() {
  return (
    <div className='Contact' id='Contact'>

      <h2>Me contacter, c’est très simple</h2>

      <div className="reseauContainer">
          <a target= "_blank" rel="noreferrer" href='https://github.com/Alex041718'><img src={Github} alt="Github" /></a>
          <a target= "_blank" rel="noreferrer" href='mailto:anthems.archer.0u@icloud.com'><img src={Email} alt="Email" /></a>
          <a target= "_blank" rel="noreferrer" href='https://www.linkedin.com/in/alexandre-le-marec-052675262/'><img src={Linkedin} alt="Linkedin" /></a>
      </div>

      <a className='button' id='CV' href={CV} download="CV_ALM_2025.pdf">Télécharger mon CV</a>

    </div>
  );
}

export default Contact;
