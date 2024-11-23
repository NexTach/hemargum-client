import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Index.tsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
