
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import ContactForm from './component/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactList from './component/ContactList';

function App() {
  return (
    <div className='main-box'>
      <h1>* Happy Friends List *</h1>
      <Container>
        <Row className='form-box'>
          <Col sm={4}>
            <ContactForm />
          </Col>
          <Col sm={4}>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
