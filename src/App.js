import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { EmpData } from './EmpData';
import EmpEdit from './EmpEdit';
import { FormClass } from './FormClass';
import FunctionEditData from './FunctionEditData';
import FunctionForm from './FunctionForm';
import Layout from './Layout';
import ShowFunction from './ShowFunction';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='formClass' element={<FormClass/>}/>
      <Route path='empdata' element={<EmpData/>}/>
      <Route path='empEdit' element={<EmpEdit/>}/>
      {/* Function From Routing */}
      <Route path='functionForm' element={<FunctionForm/>}/>
      <Route path='showfunction' element={<ShowFunction/>}/>
      <Route path='functionEditData' element={<FunctionEditData/>}/>

      </Route>
     </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;
