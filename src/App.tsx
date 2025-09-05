import Home from './components/Home';
import LiveIn from './components/LiveIn';
import BackToTopButton from './components/ui/BackToTopButton';

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <div id="home">
        <Home />
      </div>
      <div id="events">
        <LiveIn/>
      </div>
      
      <BackToTopButton />
    </div>
  );
};

export default App;