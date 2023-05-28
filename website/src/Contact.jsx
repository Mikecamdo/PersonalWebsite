import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Contact = () => {
    return <>
        <Container fluid>
            <Row className='display-6 text-center my-5'>
                <Col className='header'>
                    <span className='header hr2'>Contact Me</span>
                </Col>
            </Row>
        </Container>
    </>
}