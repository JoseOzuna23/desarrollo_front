import { Route, Routes, Outlet } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import { GuestRoute } from './components/GuestRoute';   //
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import PersonasPage from './pages/PersonasPage'; 
import { AddPersona } from './pages/PersonasPage/AddPersona'; 
import { EditPersona } from './pages/PersonasPage/EditPersona'; 
import { Inicio } from './pages/PersonasPage/Inicio';

import UserProfilePage from './pages/UserProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import BranchesPage from './pages/BranchesPage';
import LayoutUser from './layout/LayoutUser';
import axios from 'axios';

axios.defaults.baseURL =
  import.meta.env.VITE_BACKEND_URL || 'http://localhost:8081';

function App() {
  return (
    <main>
      <Routes>
        {/* Guest Routes */}
        <Route path='/' element={<GuestRoute component={<Outlet />} />}>
          <Route path='/' element={<LoginPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Route>

        {/* Protected Routes */}
        <Route path='/' element={<ProtectedRoute component={<LayoutUser />} />}>
          <Route path='/branches' element={<BranchesPage />} />
         
          {/* Rutas relacionadas con personas */}
          <Route path='/inicio' element={<Inicio/>} />
          <Route path='/personas' element={<PersonasPage />} />
          <Route path='/personas' element={<PersonasPage />} />
          <Route path='/addpersona' element={<AddPersona />} />
          <Route path='/personas/edit/:id' element={<EditPersona />} />

          <Route path='/profile' element={<UserProfilePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
