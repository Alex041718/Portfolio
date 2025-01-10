import Fleche from "./Fleche";

function ListeFleche(props) {
  const testList = [
    "SCSS",
    "JavaScript",
    "Node.js",
    "PHP",
    "C",
    "Python",
    "Java",
    "Bash",
    "Docker",
    "SQL",
    ".NET"
  ];



  var liste = testList;

  let content = [];
  let row = [];

  let i = 0;
  let j = 0;

  var n = 5;


  for (; j < (liste.length/n); j++) {

    for (; i < n; i++) {
      console.log("element = ",i+(j*4));

      if (i+(j*n) < liste.length) {
        row.push(<Fleche key={i+(j*n)} content={liste[i+(j*n)]} />);
      }
      

    }
    i = 0;
    
    row.push(<br/>);
    content.push(<div className="row">{row}</div>);

    row = [];

  }



  return (<div className="listeTechno">{content}</div>);
}

export default ListeFleche;
