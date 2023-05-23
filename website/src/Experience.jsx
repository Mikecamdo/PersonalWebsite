import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export const Experience = () => {
    return <>
        <Container fluid>
            <Row className='display-6 text-center mt-5'>
                <Col className='header'>
                    Experience
                </Col>
            </Row>
            <Row className='text-center'>
                <Col>
                    <Card>
                        <Card.Img>

                        </Card.Img>
                        <Card.Header>
                            Header
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>
                                Title
                            </Card.Title>
                            <Card.Text>
                                Text
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Img>

                        </Card.Img>

                        <Card.Body>

                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
    </>
}