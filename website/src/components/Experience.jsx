import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export const Experience = () => {
    return <>
        <Container fluid>
            <Row className='display-6 text-center mt-5'>
                <Col>
                    <span className='header hr2'>Experience</span>
                </Col>
            </Row>
            <Row>
                <Col xs={12} xl={6} className='mt-5'>
                    <Card className='card-dimension h-100' border='light'>
                        <Card.Img src='/Ethos Group.png' className='card-image'/>
                        <Card.Header className='fs-2 pb-0 header'>
                            Software Engineering Internship
                        </Card.Header>
                        <Card.Body className='pt-0 fs-4'>
                            <Card.Title>
                                <i className='fs-4'>Ethos Group</i>
                            </Card.Title>
                            <Card.Text className='align-items-center'>
                                June 2023 - August 2023 | Remote
                                <ul>
                                    <li>In Progress</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} xl={6} className='mt-5'>
                    <Card className='card-dimension h-100' border='light'>
                        <Card.Img src='/SMU.png' className='card-image'/>
                        <Card.Header className='fs-2 pb-0 header'>
                            Grader
                        </Card.Header>
                        <Card.Body className='pt-0 fs-4'>
                            <Card.Title>
                                <i className='fs-4'>Southern Methodist University</i>
                            </Card.Title>
                            <Card.Text className='align-items-center'>
                                January 2022 - December 2022 | Dallas, TX
                                <ul>
                                    <li>Graded homeworks and tests for CS 2353 Discrete Computational Structures</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
}