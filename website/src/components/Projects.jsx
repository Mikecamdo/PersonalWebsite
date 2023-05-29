import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../css/button.css';

export const Projects = () => {
    return <>
        <Container fluid>
            <Row className='display-6 text-center mt-5'>
                <Col className='header'>
                    <span className='header hr2'>Projects</span>
                </Col>
            </Row>
            <Row>
                <Col xs={12} xl={6} className='mt-5'>
                    <Card className='card-dimension h-100' border='light'>
                        <Card.Header className='fs-2 pb-0 header'>
                            DoughBack
                        </Card.Header>
                        <Card.Body className='pt-0 fs-4'>
                            <Card.Title>
                                <i className='fs-4'>React, React Bootstrap, Node.js</i>
                            </Card.Title>
                            <Card.Text className='align-items-center'>
                                <ul>
                                    <li>A full stack application for companies to reimburse their employees</li>
                                    <li>Developed by a team of 6 using Agile and Scrum techniques over 5 sprints</li>
                                    <li>Features include account creation, login/logout, and submitting/editing/approving/denying reimbursement requests</li>
                                </ul>
                                <Row>
                                    <Col className='text-center mt-3' xs={12} sm={6}>
                                        <button className='btn draw-border h-100'>View on GitHub</button>
                                    </Col>
                                    <Col className='text-center mt-3' xs={12} sm={6}>
                                        <button className='btn draw-border h-100'>View Website</button>
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} xl={6} className='mt-5'>
                    <Card className='card-dimension h-100' border='light'>
                        <Card.Header className='fs-2 pb-0 header'>
                            Search Engine
                        </Card.Header>
                        <Card.Body className='pt-0 fs-4'>
                            <Card.Title>
                                <i className='fs-4'>C++</i>
                            </Card.Title>
                            <Card.Text className='align-items-center'>
                                <ul>
                                    <li>Describe</li>
                                </ul>
                                <Row>
                                    <Col className='text-center mt-3'>
                                        <button className='btn draw-border'>View on GitHub</button>
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xs={12} xl={6} className='mt-5'>
                    <Card className='card-dimension h-100' border='light'>
                        <Card.Header className='fs-2 pb-0 header'>
                            Sudoku Solver
                        </Card.Header>
                        <Card.Body className='pt-0 fs-4'>
                            <Card.Title>
                                <i className='fs-4'>Python, PyGame</i>
                            </Card.Title>
                            <Card.Text className='align-items-center'>
                                <ul>
                                    <li>Describe</li>
                                </ul>
                                <Row>
                                    <Col className='text-center mt-3'>
                                        <button className='btn draw-border'>View on GitHub</button>
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} xl={6} className='mt-5'>
                    <Card className='card-dimension h-100' border='light'>
                        <Card.Header className='fs-2 pb-0 header'>
                            Sentiment Analyzer
                        </Card.Header>
                        <Card.Body className='pt-0 fs-4'>
                            <Card.Title>
                                <i className='fs-4'>C++</i>
                            </Card.Title>
                            <Card.Text className='align-items-center'>
                                <ul>
                                    <li>Describe</li>
                                </ul>
                                <Row>
                                    <Col className='text-center mt-3'>
                                        <button className='btn draw-border'>View on GitHub</button>
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xs={12} xl={6} className='mt-5'>
                    <Card className='card-dimension h-100' border='light'>
                        <Card.Header className='fs-2 pb-0 header'>
                            Word Sense Disambiguation
                        </Card.Header>
                        <Card.Body className='pt-0 fs-4'>
                            <Card.Title>
                                <i className='fs-4'>Python, NLTK</i>
                            </Card.Title>
                            <Card.Text className='align-items-center'>
                                <ul>
                                    <li>Describe</li>
                                </ul>
                                <Row>
                                    <Col className='text-center mt-3'>
                                        <button className='btn draw-border'>View on GitHub</button>
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} xl={6} className='mt-5'>
                    <Card className='card-dimension h-100' border='light'>
                        <Card.Header className='fs-2 pb-0 header'>
                            Community Detection
                        </Card.Header>
                        <Card.Body className='pt-0 fs-4'>
                            <Card.Title>
                                <i className='fs-4'>C++, Python</i>
                            </Card.Title>
                            <Card.Text className='align-items-center'>
                                <ul>
                                    <li>Describe</li>
                                </ul>
                                <Row>
                                    <Col className='text-center mt-3' xs={12} sm={6}>
                                        <button className='btn draw-border h-100'>View on GitHub</button>
                                    </Col>
                                    <Col className='text-center mt-3' xs={12} sm={6}>
                                        <button className='btn draw-border h-100'>View Article</button>
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    </>
}