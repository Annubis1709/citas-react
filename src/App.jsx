import Header from "./components/Header.jsx";
import Formulario from "./components/formulario.jsx";
import ListadoPacientes from "./components/ListadoPacientes.jsx";

function App() {
  return (
    <div className='container mx-auto mt-20'>
        <Header />
        <div className='mt-12 md:flex'>
            <Formulario />
            <ListadoPacientes />
        </div>
    </div>)
}

export default App;

