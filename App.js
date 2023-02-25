import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Sid from './Components/Sid'
import Mycourses from './Components/Mycourses';
import Internships from './Components/Internships';
import { Cources23 } from './Components/Cources23';
import Sidebarn from './Components/Sidebarn';
import Dashboard11 from './Components/Dashboard11';

function App() {
  return (
    <Router>
      <Sidebarn>
        <Routes>
          <Route path="/" element={<Dashboard11 />} />
          <Route path="internship" element={<Internships />} />
          <Route path="/courses/mycourses" element={<Mycourses />} />
          <Route path="/courses/othercourses" element={<Cources23 />} />
          <Route path="/internship/myinternship" element={<Internships />} />
          <Route path="/internship/internships" element={<Internships />} />
         
        </Routes>
      </Sidebarn>
    </Router>
  );
}

export default App;
