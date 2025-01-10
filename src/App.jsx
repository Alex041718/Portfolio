// Import components
import Header from './components/Header'
import Introduction from './components/Introduction'
import Presentation from './components/Presentation'
import ListeProjet from './components/ListeProjet'
import Contact from './components/Contact'
import Footer from './components/Footer'


// Import Css
import './Style/Header.css' // Header
import './Style/App.css' // App
import './Style/Introduction.css' // Introduction
import './Style/Presentation.css' // Presentation
import './Style/ListeFleche.css' // Liste de fleche
import './Style/Fleche.css' // Fleche
import './Style/ListeProjet.css' // Liste de projet
import './Style/Projet.css' // Projet
import './Style/Contact.css' // Contact
import './Style/Footer.css' // Footer
import './Style/SmallProjet.css' // SmallProjet

// import other ressources


function App() {
  

  return (
    <>
      <Header />
      <Introduction />
      <Presentation />
      <ListeProjet />
      <Contact />
      <Footer />
    </>
  )
}

export default App
