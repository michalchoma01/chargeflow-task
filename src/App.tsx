import './App.css';
import useIsMobile from './hooks/useIsMobile';
import Sidebar from './views/Sidebar/Sidebar';
import Home from './views/Home/Home';

function App() {
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: '100vh',
      }}>
      {isMobile ? null : <Sidebar />}
      <Home />
    </div>
  );
}

export default App;
