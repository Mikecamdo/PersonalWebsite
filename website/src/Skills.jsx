import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Skills = () => {
    return <>
        <Container fluid>
            <Row className='display-6 text-center mt-5'>
                <Col>
                    Skills
                </Col>
            </Row>
            <Row className='text-center'>
                <Col>
                    Programming: C/C++, Python, JavaScript, Java, HTML/CSS, Arm Assembly, SQL, React, Node.js
                    <br/>
                    Tools: Git, Scrum, Agile, Docker
                </Col>
            </Row>
        </Container>
    </>
}