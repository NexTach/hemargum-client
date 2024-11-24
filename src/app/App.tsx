import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Details from '../pages/detalis';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
