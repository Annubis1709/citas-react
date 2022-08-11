import { useState } from 'react';

const Formulario = () => {
    const [nomber, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [Email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Form validation
        if ([nomber, propietario, Email, fecha, sintomas].includes('')) {
            alert('Todos los campos son obligatorios');
            setError(true); // Show error message
            return;
        }
        // else {
        //     alert(`
        //         Nombre: ${nomber}
        //         Propietario: ${propietario}
        //         Email: ${Email}
        //         Fecha: ${fecha}
        //         Sintomas: ${sintomas}
        //     `);
        // }
        setError(false); // Hide error message
    }

    return (
        <div className='md:w-1/2 lg:w-2/5'>
            <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
            <p className='text-lg mt-5 text-center mb-10'> Agrega Pacientes y <span className='text-indigo-600 font-bold'>Adminístralos</span></p>
            <form className='bg-white shadow-md rounded-lg py-10 px-5 m-2'
              onSubmit={handleSubmit}>
                {error &&
                    <div className='bg-red-600 text-white text-center p-3 font-bold uppercase mb-3 rounded-md'>
                        <p>
                            Todos los campos son obligatorios
                        </p>
                    </div>
                }
                <div className='mt-5'>
                    <label htmlFor='nombre' className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
                    <input className='border-2 bg-gray-100 w-full p-2 mt-2 placeholder-gray-400 rounded-md shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500'
                       type='text'
                       id='nombre'
                       placeholder='Nombre de la mascota'
                       value={nomber}
                       onChange={(event) => setNombre(event.target.value)}
                    />
                </div>
                <div className='mt-5'>
                    <label htmlFor='nombre propietario' className='block text-gray-700 uppercase font-bold'>Nombre Propietario</label>
                    <input className='border-2 bg-gray-100 w-full p-2 mt-2 placeholder-gray-400 rounded-md shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500'
                       type='text'
                       id='nombre propietario'
                       placeholder='Nombre del propietario'
                       value={propietario}
                       onChange={(event) => setPropietario(event.target.value)}
                    />
                </div>
                <div className='mt-5'>
                    <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email</label>
                    <input className='border-2 bg-gray-100 w-full p-2 mt-2 placeholder-gray-400 rounded-md shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500'
                       type='email'
                       id='email'
                       placeholder='Email de Contato Propietario'
                       value={Email}
                       onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='mt-5'>
                    <label htmlFor='fecha de alta' className='block text-gray-700 uppercase font-bold'>Fecha de Alta</label>
                    <input className='border-2 bg-gray-100 w-full p-2 mt-2 placeholder-gray-400 rounded-md shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500'
                       type='date'
                       id='fecha de alta'
                       value={fecha}
                       onChange={(event) => setFecha(event.target.value)}
                    />
                </div>
                <div className='mt-5'>
                    <label htmlFor='síntomas' className='block text-gray-700 uppercase font-bold'>Síntomas</label>
                   <textarea className='border-2 bg-gray-100 w-full p-2 mt-2 placeholder-gray-400 rounded-md shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500'
                     id='síntomas'
                     placeholder='Describe los síntomas'
                     value={sintomas}
                     onChange={(event) => setSintomas(event.target.value)}
                   />
                </div>
                <input className='bg-indigo-600 w-full p-3 text-white font-bold uppercase mt-5 hover:bg-indigo-700 cursor-pointer'
                   type='submit'
                   value='Agregar Paciente'
                />
            </form>
        </div>
    );
};

export default Formulario;