
import './App.css';
import {Route, BrowserRouter as Router,Routes} from 'react-router-dom'
import Home from './components/Home';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import {HelmetProvider} from 'react-helmet-async'


function App() {
  return (
    <Router>
    <div className="App">
      <HelmetProvider>
     <Header/>
     <Routes>

     <Route path='/' element={<Home/>}/>
     </Routes>
     <Footer/>
     </HelmetProvider>
    
    </div>
    </Router>
  );
}

export default App;
