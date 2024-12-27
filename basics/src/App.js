import Header from './Header';
import Home from './Home';
import Contact from './Contact';
import About from './About';

function App() {
    let name ="Khushi";
     return (
        <div>
            <h1>Hello </h1>
            <Header />     
            <Home name = {name}/>
            <Contact />
            <About />
        </div>
       
     );
 }
 export default App;
