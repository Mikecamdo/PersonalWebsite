import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/particles.css';

export const Home = () => {
    return <>
        <Container className='full-screen d-flex align-items-center'>
            <div id='particles-container'>
                <div class="particles1"></div>
                <div class="particles2"></div>
            </div>

            <Row className='align-items-center text-center mx-auto'>
                <Col>
                    <Row className='display-1'>
                        <Col className='header greeting'>
                            Hello there! <br />
                            I'm <span className='header gradient-text'>Michael Doherty.</span>
                        </Col>
                    </Row>
                    <Row className='text-center mt-3'>
                        <Col className='fs-4'>
                            I'm a student studying computer science at Southern Methodist University in Dallas, Texas.
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
}