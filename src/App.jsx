import { Container } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdministradorClima from './components/AdministradorClima';


function App() {

  return (
    <>
    <Container className='main'>
    <h1 className='mt-5 text-center'>Aplicación del clima</h1>
      <AdministradorClima>

      </AdministradorClima>
    </Container>
    <footer className="py-4 bg-black text-light text-center">
        &copy; Todos los derechos reservados 2023.
      </footer>
    </>
  )
}

export default App
