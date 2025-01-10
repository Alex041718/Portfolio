import dataProjects from '../data/Projects.json';
import Projet from './Projet';
import SmallProjet from './SmallProjet';


function ListeProjet() {


  let content = [];
  let smallContainer = [];

  content.push(<h2 className='title'>Mes projets : </h2>);

  for (let i = 0; i < dataProjects.length; i++) {
    
    if (i>1) {
      
      smallContainer.push(<SmallProjet key={i} data={dataProjects[i]} />);
      
    } else {

    content.push(<Projet key={i} data={dataProjects[i]} />);
    
    }

  }

  
  content.push(<h2 className='title'>D’autres projets : </h2>);

  content.push(<div className='smallContainer'>{smallContainer}</div>);

  
  


  return (
    <>
    <div id='ListeProjet'>&nbsp;</div>
    <div className="ListeProjet">
        
          <div className='projetContainer'>
            {/*dataProjects.map((projet) => (
              
              <SmallProjet key={projet.id} data={projet} />
              
            ))*/

              content
            }
           
              
              
            
          
          </div>
          
    </div>
    </>
  );
}

export default ListeProjet;
