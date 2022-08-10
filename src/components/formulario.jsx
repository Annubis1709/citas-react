//import {Plugin} from "vite";

const Formulario = () => {
    return (
        <div className='md:w-1/2 lg:w-2/5'>
            <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
            <p className='text-lg mt-5 text-center mb-10'> Agrega pacientes y <span className='text-indigo-600 font-bold'>Adminístralos</span></p>
            <form className='bg-white shadow-md rounded-lg py-10 px-5 m-3'>
                <div className='mt-5'>
                    <label htmlFor='nombre' className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
                    <input className='border-2 bg-gray-100 w-full p-2 mt-2 placeholder-gray-400 rounded-md
                    shadow-sm border-slate-300 focus:outline-none focus:border-sky-500
                    focus:ring-sky-500' type='text' id='nombre' placeholder='Nombre de la mascota' />
                </div>
                <div className='mt-5'>
                    <label htmlFor='nombre propietario' className='block text-gray-700 uppercase font-bold'>Nombre Propietario</label>
                    <input className='border-2 bg-gray-100 w-full p-2 mt-2 placeholder-gray-400 rounded-md
                        shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500'
                       type='text'
                       id='nombre propietario'
                       placeholder='Nombre del propietario'
                    />
                </div>
                <div className='mt-5'>
                    <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email</label>
                    <input className='border-2 bg-gray-100 w-full p-2 mt-2 placeholder-gray-400 rounded-md
                        shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500'
                       type='email'
                       id='email'
                       placeholder='Email de Contato Propietario'
                    />
                </div>
                <div className='mt-5'>
                    <label htmlFor='fecha de alta' className='block text-gray-700 uppercase font-bold'>Fecha de Alta</label>
                    <input className='border-2 bg-gray-100 w-full p-2 mt-2 placeholder-gray-400 rounded-md
                        shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500'
                       type='date'
                       id='fecha de alta'
                    />
                </div>
                <div className='mt-5'>
                    <label htmlFor='síntomas' className='block text-gray-700 uppercase font-bold'>Síntomas</label>
                   <textarea className='border-2 bg-gray-100 w-full p-2 mt-2 placeholder-gray-400 rounded-md
                        shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500'
                         id='síntomas'
                         placeholder='Describe los síntomas'
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