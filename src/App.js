import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout.js'
import PageNotFound from './components/pages/404.js';
import MyModules from './components/pages/MyModules.js';
import MyAssessments from './components/pages/MyAssessments.js';
import MySchedule from './components/pages/MySchedule.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={<MyModules />} />
          <Route path='/myassessments' element={<MyAssessments />} />
          <Route path='/myschedule' element={<MySchedule />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter> 
  );
}

export default App;
