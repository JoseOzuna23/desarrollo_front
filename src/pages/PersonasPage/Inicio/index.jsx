import { useState } from 'react';
import { ArrowLeft, Check } from 'react-feather';
import { Link, useNavigate } from 'react-router-dom';
import { serviceCreatePerson } from '../../../services/personas/personas';

import '../Inicio/estilo.css'

export const Inicio = () => {



  return (
    <>

      <div className="welcome-container">
        <div className="background"></div>
        <div className="content">
          <h1 className="welcome-title">¡Bienvenido a Inova8M!</h1>
          <p className="welcome-description">Cooperativa 8 de Marzo Ltda</p>

        </div>
      </div>

    </>
  );
}
