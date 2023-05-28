import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export const Projects = () => {
    return <>
        <Container fluid>
            <Row className='display-6 text-center my-5'>
                <Col className='header'>
                    <span className='header hr2'>Projects</span>
                </Col>
            </Row>
            <Row className='text-center fs-3'>
                <Col>
                    <CardGroup>
                        <Card>
                            <Card.Img>

                            </Card.Img>
                            <Card.Body>

                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img>

                            </Card.Img>

                            <Card.Body>

                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img>

                            </Card.Img>

                            <Card.Body>

                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
        </Container>
    </>
}