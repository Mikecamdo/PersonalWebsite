import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export const Home = () => {
    return <>
        <Container fluid>
            <Row className='align-items-center text-center mt-5'>
                <Col xs={8} xxl={6} className='display-2'>
                    <Row>
                        <Col>
                            Hello there! <br />
                            I'm <span className='blue-text'>Michael Doherty.</span>
                        </Col>
                    </Row>
                    <Row className='text-center mt-3'>
                        <Col className='fs-5'>
                            I'm a student studying computer science at Southern Methodist University in Dallas, Texas.
                        </Col>
                    </Row>
                </Col>
                <Col xs={4} xxl={6}>
                    <Image fluid src='ProfessionalHeadshot.png'></Image>
                </Col>
            </Row>

        </Container>
    </>
}