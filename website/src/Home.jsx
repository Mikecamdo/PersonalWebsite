import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export const Home = () => {
    return <>
        <Container fluid>
            <Row className='text-center mt-5'>
                <Col className='display-2'>Hello there! I'm <span className='blue-text'>Michael Doherty.</span></Col>
                <Col>
                    <Image fluid src='Image.jpeg'></Image>
                </Col>
            </Row>
            <Row className='text-center mt-3'>
                <Col className='fs-5'>
                    I'm a student studying computer science at Southern Methodist University in Dallas, Texas.
                </Col>
            </Row>
        </Container>
    </>
}