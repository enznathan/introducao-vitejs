
import { Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Exemplo01 from './pages/exemplos/ex-01';
import Exemplo02 from './pages/exemplos/ex-02';
import Exemplo03 from './pages/exemplos/ex-03';
import Exemplo04 from './pages/exemplos/ex-04';
import Exemplo05 from './pages/exemplos/ex-05';


import Atividade01 from './pages/Atividades/atv-1';
import Atividade2 from './pages/Atividades/atv-2';
import Atividade03 from './pages/Atividades/atv-3';
import Atividade04 from './pages/Atividades/atv-4';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exemplo/1" element={<Exemplo01 />} />
      <Route path="/exemplo/2" element={<Exemplo02 />} />
      <Route path="/exemplo/3" element={<Exemplo03 />} />
      <Route path="/exemplo/4" element={<Exemplo04 />} />
      <Route path="/exemplo/5" element={<Exemplo05 />} />

       
      <Route path="/Atividade/1" element={<Atividade01 />} />
      <Route path="/Atividade/2" element={<Atividade2 />} />
      <Route path="/Atividade/3" element={<Atividade03 />} />
      <Route path="/Atividade/4" element={<Atividade04 />} />
    </Routes>
  )
}

export default App;
