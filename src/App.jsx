import './App.css'
import Contact_form from './components/Contact_form/Contact_form.jsx';
import ContactHeader from './components/ContactHeader/ContactHeader.jsx';
import Navigation from './components/Navigation/Navigation.jsx';


function App() {

  return (
      <div>
          <Navigation/>

          <main className='main_container'>
          <ContactHeader/>
          <Contact_form/>
          </main>

      </div>
  );
}

export default App
