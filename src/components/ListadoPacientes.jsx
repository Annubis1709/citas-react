import Paciente from "./Paciente.jsx";

const ListadoPacientes = () => {
    return (
        <div className='md:w-1/2 lg:w-3/5 md:h-screen'>
            <h2 className='font-black text-3xl text-center'>
                Listado De Pacientes
            </h2>
            <p className='text-xl text-center mt-5 mb-10'>
                Administra tus <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
            </p>
            <div className='md:w-full lg:w-full h-screen overflow-y-auto'>
                <Paciente />
                <Paciente />
                <Paciente />
                <Paciente />
                <Paciente />
                <Paciente />
                <Paciente />
            </div>
        </div>
    );
};

export default ListadoPacientes;