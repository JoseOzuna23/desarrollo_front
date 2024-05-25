import { useState } from 'react';
import { ArrowLeft, Check } from 'react-feather';
import { Link, useNavigate } from 'react-router-dom';
import { serviceCreatePerson } from '../../../services/personas/personas';

export const AddPersona = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nroDocumento: '',
    nombre1: '',
    nombre2: '',
    nombre3: '',
    apellido1: '',
    apellido2: '',
    apellido3: '',
    fechaNacimiento: '',
    sexo: '',
    tipoDocumento: 1,
    tipoPersona: 1,
    estadoCivil: 1,
    ciudad: 1,
    nacionalidad: 1,
  });

  const handleFormChange = (e) => {
    setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await serviceCreatePerson(form);
      navigate('/personas');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className='text-custom-black p-12 bg-gray-100 sm:bg-white sm:rounded-xl flex flex-col sm:justify-center sm:align-baseline gap-14 absolute top-0 left-0 bottom-0 right-0 sm:static w-full h-auto sm:w-auto sm:h-auto overflow-auto sm:overflow-visible'>
        <h3 className='hidden sm:flex  text-xl  items-start sm:mb-0 '>
          Agregar Persona
        </h3>
        <div className='flex sm:hidden mb-0 justify-normal items-center'>
          <h3 className='text-xl  items-start ml-2'>Agregar Personas</h3>
          <Link className='absolute left-2 ' to='/personas'>
            <ArrowLeft />
          </Link>
          <button
            onClick={handleSave}
            className='absolute right-7 rounded-3xl'
          >
            <Check size={30} color='#3E43C7' />
          </button>
        </div>
        <div className='max-w-screen-lg  grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div className='flex flex-col'>
            <p className='font-sans text-base'>Primer Nombre</p>
            
              <input
              type='text'
              value={form.nombre1}
              onChange={handleFormChange}
              name='nombre1'
              className='border border-gray-300 rounded-lg p-2'
              placeholder='Primer nombre'
              required
              />
            
          </div>
          <div className='flex flex-col'>
            <p className='font-sans text-base'>Segundo Nombre</p>
           
              <input
              type='text'
              value={form.nombre2}
              onChange={handleFormChange}
              name='nombre2'
              className='border border-gray-300 rounded-lg p-2'
              placeholder='Segundo nombre'
              />
            
          </div>
          <div className='flex flex-col'>
            <p className='font-sans text-base'>Tercer Nombre</p>
           
              <input
              type='text'
              value={form.nombre3}
              onChange={handleFormChange}
              name='nombre3'
              className='border border-gray-300 rounded-lg p-2'
              placeholder='Tercer nombre'
              />
            
          </div>
          <div className='flex flex-col'>
            <p className='font-sans text-base'>Primer Apellido</p>
            
              <input
              type='text'
              value={form.apellido1}
              onChange={handleFormChange}
              name='apellido1'
              className='border border-gray-300 rounded-lg p-2'
              placeholder='Primer apellido'
              required
              />
            
          </div>
          <div className='flex flex-col'>
            <p className='font-sans text-base'>Segundo Apellido</p>
           
              <input
              type='text'
              value={form.apellido2}
              onChange={handleFormChange}
              name='apellido2'
              className='border border-gray-300 rounded-lg p-2'
              placeholder='Segundo apellido'
              />
            
          </div>
          <div className='flex flex-col'>
            <p className='font-sans text-base'>Tercer Apellido</p>
           
              <input
              type='text'
              value={form.apellido3}
              onChange={handleFormChange}
              name='apellido3'
              className='border border-gray-300 rounded-lg p-2'
              placeholder='Tercer apellido'
              />
            
          </div>
          <div className='flex flex-col'>
            <p className='font-sans text-base'>Número de Documento</p>
           
              <input
              type='text'
              value={form.nroDocumento}
              onChange={handleFormChange}
              name='nroDocumento'
              className='border border-gray-300 rounded-lg p-2'
              placeholder='Número de documento'
              required
              />
            
          </div>
          <div className='flex flex-col'>
            <p className='font-sans text-base'>Fecha de Nacimiento</p>
            
              <input
              type='date'
              value={form.fechaNacimiento}
              onChange={handleFormChange}
              name='fechaNacimiento'
              className='border border-gray-300 rounded-lg p-2'
              required
              />
            
          </div>
          <div className='flex flex-col'>
            <p className='font-sans text-base'>Sexo</p>
           
              <select
              value={form.sexo}
              onChange={handleFormChange}
              name='sexo'
              className='border border-gray-300 rounded-lg p-2'
              required
              >
                <option value=''>Seleccione</option>
                <option value='M'>Masculino</option>
                <option value='F'>Femenino</option>
              </select>
            
          </div>
          {/* Add other fields similarly */}
          <div className='flex flex-col'>
            <p className='font-sans text-base'>Tipo de Documento</p>
            
              <input
                type='number'
                value={form.tipoDocumento}
                onChange={handleFormChange}
                name='tipoDocumento'
                className='border border-gray-300 rounded-lg p-2'
              />
            
          </div>
          <div className='flex flex-col'>
            <p className='font-sans text-base'>Tipo de Persona</p>
          
              <input
                type='number'
                value={form.tipoPersona}
                onChange={handleFormChange}
                name='tipoPersona'
                className='border border-gray-300 rounded-lg p-2'
              />
            
          </div>
          <div className='flex flex-col'>
            <p className='font-sans text-base'>Estado Civil</p>
           
              <input
                type='number'
                value={form.estadoCivil}
                onChange={handleFormChange}
                name='estadoCivil'
                className='border border-gray-300 rounded-lg p-2'
              />
            
          </div>

          <div className='flex flex-col'>
            <p className='font-sans text-base'>Nacionalidad</p>
            
              <input
                type='number'
                value={form.nacionalidad}
                onChange={handleFormChange}
                name='nacionalidad'
                className='border border-gray-300 rounded-lg p-2'
              />
            
          </div>

          

<div className='flex flex-col'>
  <p className='font-sans text-base'>Ciudad</p>
  
    <input
      type='number'
      value={form.ciudad}
      onChange={handleFormChange}
      name='ciudad'
      className='border border-gray-300 rounded-lg p-2'
    />
  
</div>
        </div>

        <div className='flex justify-end mt-6'>
          <Link to='/personas'>
          <button className='bg-custom-naranja hover:bg-black text-white font-semibold py-2 px-4'>Cancelar</button>


          </Link>
          <button
            onClick={handleSave}
            className='bg-custom-naranja hover:bg-black text-white font-semibold py-2 px-4  ml-4'
          >
            Guardar
          </button>
        </div>
      </div>
    </>
  );
}
