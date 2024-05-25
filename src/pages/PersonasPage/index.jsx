import { SearchBar } from '../../components/SearchBar';
import { EditIcon, MoreOptionsIcon } from '../../components/Icons';
import { buttonVariants } from '../../components/ui/Button';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { serviceDeletePerson } from '../../services/personas/personas';
import { cn } from '../../utils/cn';
import { serviceGetPersons } from '../../services/personas/personas'; // Importa el servicio para obtener el listado de personas

const PersonasPage = () => {
  const [personas, setPersonas] = useState([]); // Estado para almacenar el listado de personas
  const [search, setSearch] = useState('');
  const [alertDelete, setAlertDelete] = useState(false);
  const [removedmsg, setRemovedmsg] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [searching, setSearching] = useState('');

  const handleSearchChange = (e) => setSearch(e.target.value);
  const clearSearch = () => setSearch('');

  const handleDeletePersona = async (id) => {
    try {
      await serviceDeletePerson(id);
      setPersonas(personas.filter((persona) => persona.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchPersonas = async () => {
      try {
        const response = await serviceGetPersons();
        if (Array.isArray(response.data)) {
          setPersonas(response.data);
        } else {
          console.error('La respuesta no contiene un array de personas:', response.data);
        }
      } catch (error) {
        console.error('Error al obtener el listado de personas:', error);
      }
    };

    fetchPersonas();
  }, []);


  const personasFound = personas.filter((persona) =>
    persona.nombres.toLowerCase().includes(searching.toLowerCase())
  );

  return (
    <>
      <div className='hidden sm:flex flex-row justify-between text-custom-black'>
        <h2>Cooperativa 8 de Marzo Ltda</h2>
        <h2>Inova8M</h2>
      </div>

      <hr className='hidden sm:flex border-t-1 border-[#898AA3] mb-3' />

      <p className='text-2xl font-[500] text-custom-icon'>Personas</p>

      <div className='flex justify-between gap-2 my-5'>
        <SearchBar
          placeholder='Buscar...'
          className='w-full sm:w-[424px]'
          searching={searching}
          setSearching={setSearching}
          searchTye='personas'
          products={personas}
        >
          <button
            className='hidden sm:flex p-2 items-center hover:bg-[#B8B9CF] rounded-full transition w-8 h-8'
            onClick={clearSearch}
          ></button>
        </SearchBar>
        <Link
          to='/addpersona'
          class="text-white text-xs text-center min-w-[100px] bg-black rounded-lg px-2 py-1 sombra"
        >
          Agregar Persona
        </Link>


      </div>

      <div className='border sm:border-4 rounded-xl border-custom-button-hover'>
        <table className='w-full text-[#1A1A1A]'>
          <thead>
            <tr className='text-left'>
              <th className='bg-custom-button-hover min-w-[168px] rounded-tl-lg sm:rounded-tl-md px-5 py-3'>
                Nombre
              </th>
              <th className='bg-custom-button-hover px-5 py-3'>Items</th>
              <th className='bg-custom-button-hover rounded-tr-lg sm:rounded-tr-md px-5 py-3 text-center'>
                Acción
              </th>
            </tr>
          </thead>

          <tbody>
            {personasFound.map((persona) => (
              <tr
                key={persona.id}
                className='border-b sm:border-b-4 border-custom-button-hover last:border-b-0'
              >
                <td className='px-5 py-3 flex items-center min-w-[168px]'>
                  {persona.nombres}
                </td>
                <td className='px-5 py-1'>{persona.count}</td>
                <td className='px-5 py-1'>
                  <div className='flex items-center justify-center'>
                    <Menu as='div' className='relative'>
                      <Menu.Button
                        aria-label='Mas opciones'
                        className='text-custom-blue'
                      >
                        <EditIcon className='hidden sm:inline-block' />
                        <MoreOptionsIcon className='sm:hidden' />
                      </Menu.Button>

                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                      >
                        <Menu.Items className='absolute top-full mt-2 right-0 bg-[#E7E7E7] flex flex-col rounded shadow z-10 min-w-[130px]'>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to={`/personas/edit/${persona.id}`}
                                className={`text-left px-4 py-2 ${active ? 'hover:text-custom-blue' : ''
                                  }`}
                              >
                                Editar
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => {
                                  setDeleteId(persona.id);
                                  setAlertDelete(true);
                                }}
                                className={`text-left px-4 py-2 ${active ? 'hover:text-custom-blue' : ''
                                  }`}
                              >
                                Eliminar
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      {personasFound.length === 0 && (
        <div class="flex justify-center text-center w-full">
          <p class="my-7 text-black text-center flex justify-center w-full">
            No se encontraron Personas
          </p>
        </div>
      )}
    </>
  );
};

export default PersonasPage;
