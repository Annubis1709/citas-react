const Paciente = () => {
    return (
        <div className='bg-white shadow-md rounded-lg py-10 px-5 m-1 mb-3'>
            <p className='text-gray-700 mb-3 font-bold uppercase'>Nombre: <span className='font-normal normal-case'>Hook</span></p>
            <p className='text-gray-700 mb-3 font-bold uppercase'>Nombre Propietario: <span className='font-normal normal-case'>Edier Sanchez</span></p>
            <p className='text-gray-700 mb-3 font-bold uppercase'>Email: <span className='font-normal normal-case'>myEmail@user.com</span></p>
            <p className='text-gray-700 mb-3 font-bold uppercase'>Fecha de Alta: <span className='font-normal normal-case'>10-08-2022</span></p>
            <p className='text-gray-700 mb-3 font-bold uppercase'>Síntomas: <span className='font-normal normal-case'>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Ad consequatur cupiditate ducimus exercitationem, odit perferendis placeat praesentium recusandae soluta.
                    Corporis ea eveniet ex hic illo odio, possimus recusandae repellat ullam.</span>
            </p>
        </div>
    );
};

export default Paciente;