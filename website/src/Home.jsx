import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Home = () => {
    return <>
        <Container fluid>
            <Row className='align-items-center text-center mt-5'>
                <Col className='display-2'>
                    <Row>
                        <Col className='header'>
                            Hello there! <br />
                            I'm <span className='header blue-text'>Michael Doherty.</span>
                        </Col>
                    </Row>
                    <Row className='text-center mt-3'>
                        <Col className='fs-5'>
                            I'm a student studying computer science at Southern Methodist University in Dallas, Texas.
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    </>
}