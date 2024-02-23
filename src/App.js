// src/App.js
import React from 'react';
import { useLocation, BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Grid, Button } from '@mui/material';
import Alumnes from './pages/Alumnes';
import Missatges from './pages/Missatges';
import LesMevesDades from './pages/LesMevesDades';
import Contactar from './pages/Contactar';
// Importa las demás páginas aquí

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' && (
        <Grid container spacing={2} style={{ padding: '20px', textAlign: 'center' }}>
          <Grid item xs={6}>
            <Button className="button" variant="contained" color="primary" component={Link} to="/alumnes">
              Alumnes
              {/* Icono aquí si lo deseas */}
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button className="button" variant="contained" color="primary" component={Link} to="/missatges">
              Missatges
              {/* Icono aquí si lo deseas */}
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button className="button" variant="contained" color="primary" component={Link} to="/les-meves-dades">
              Les Meves Dades
              {/* Icono aquí si lo deseas */}
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button className="button" variant="contained" color="primary" component={Link} to="/contactar">
              Contactar
              {/* Icono aquí si lo deseas */}
            </Button>
          </Grid>
        </Grid>
      )}

      <Routes>
        <Route path="/alumnes" element={<Alumnes />} />
        <Route path="/missatges" element={<Missatges />} />
        <Route path="/les-meves-dades" element={<LesMevesDades />} />
        <Route path="/contactar" element={<Contactar />} />
        {/* Rutas para las demás páginas */}
      </Routes>
    </>
  );
};


export default App;
