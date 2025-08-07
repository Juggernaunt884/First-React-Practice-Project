import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Promo from './components/Promo';
import Intro from './components/Intro';

function App() {
  const blogSectionStyle = {
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '5px',
    margin: '20px 0',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    overflowX: 'auto',
    display: 'flex',
    gap: '20px'
  };
  return (
    <div className="App">
      <Nav />
      <Promo />
      <div style= {blogSectionStyle}>
        <Intro 
          title="I've become a React developer!" 
          description="I've completed the React Basics course and I'm happy to announce that I'm now a Junior React Developer!"
          link="Read more..."
        />
        <Intro 
          title="React is amazing!"
          description="React has transformed the way I build user interfaces, making it easier to create dynamic and responsive applications."
          link="Learn more about React"
        />
        <Intro 
          title="Join the React community"
          description="Connect with other developers, share your projects, and learn from the vast resources available online."
          link="Get involved"
        />
      </div>
      <Footer name="Awais Rafique" />
    </div>
  );
}

export default App;