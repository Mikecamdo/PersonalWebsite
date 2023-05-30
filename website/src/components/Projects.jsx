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
                                <i className='fs-4'>HTML/CSS, React, Bootstrap/React Bootstrap, Express.js, Node.js, MySQL</i>
                            </Card.Title>
                            <Card.Text className='align-items-center'>
                                <ul>
                                    <li>A full stack application for companies to reimburse their employees</li>
                                    <li>Developed by a team of 6 using Agile and Scrum techniques over 5 sprints</li>
                                    <li>Features include account creation, login/logout, and submitting/editing/approving/denying reimbursement requests</li>
                                </ul>
                                <Row>
                                    <Col className='text-center mt-3' xs={12} sm={6}>
                                        <button className='btn draw-border h-100' 
                                                onClick={() => {
                                                    window.open('https://github.com/Mikecamdo/DoughBack');
                                                }}>
                                                    View on GitHub
                                        </button>
                                    </Col>
                                    <Col className='text-center mt-3' xs={12} sm={6}>
                                        <button className='btn draw-border h-100'
                                                onClick={() => {
                                                    window.open('https://doughback.vercel.app/');
                                                }}>
                                                    View Website
                                        </button>
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
                                <i className='fs-4'>C++, RapidJSON</i>
                            </Card.Title>
                            <Card.Text className='align-items-center'>
                                <ul>
                                    <li>A search engine that accepts simple Boolean queries (e.g., AND social network / OR snap facebook)</li>
                                    <li>Parses 300,000 JSON files and returns the most relevant articles for a given search</li>
                                    <li>Includes the implementation of a custom AVL tree and hash table</li>
                                </ul>
                                <Row>
                                    <Col className='text-center mt-3'>
                                        <button className='btn draw-border'
                                                onClick={() => {
                                                    window.open('https://github.com/Mikecamdo/SearchEngine');
                                                }}>
                                                    View on GitHub
                                        </button>
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
                                    <li>A program that can solve any valid Sudoku puzzle using a backtracking algorithm</li>
                                    <li>Allows user to enter their own Sudoku puzzle; user can also play Sudoku using the provided Easy/Medium/Hard Sudoku puzzles</li>
                                </ul>
                                <Row>
                                    <Col className='text-center mt-3'>
                                        <button className='btn draw-border'
                                                onClick={() => {
                                                    window.open('https://github.com/Mikecamdo/SudokuSolver');
                                                }}>
                                                    View on GitHub
                                        </button>
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
                                    <li>A program that determines the sentiment (positive or negative) of a Tweet</li>
                                    <li>Analyzes the frequency of words in Tweets tagged positive and negative to determine relevant terms for each type of Tweet</li>
                                </ul>
                                <Row>
                                    <Col className='text-center mt-3'>
                                        <button className='btn draw-border'
                                                onClick={() => {
                                                    window.open('https://github.com/Mikecamdo/SentimentAnalyzer');
                                                }}>View on GitHub</button>
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
                                    <li>A program that determines the correct word sense of the words "Rubbish", "Yarn", and "Tissue"</li>
                                    <li>Uses a dictionary/knowledge based method inspired by the Lesk algorithm</li>
                                </ul>
                                <Row>
                                    <Col className='text-center mt-3'>
                                        <button className='btn draw-border'
                                                onClick={() => {
                                                    window.open('https://github.com/Mikecamdo/WordSenseDisambiguation');
                                                }}>
                                                    View on GitHub
                                        </button>
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
                                    <li>Implementation of the Girvan-Newman and Label Propagation community detection algorithms</li>
                                    <li>Provided statistical analysis and compared/contrasted the two algorithms</li>
                                </ul>
                                <Row>
                                    <Col className='text-center mt-3' xs={12} sm={6}>
                                        <button className='btn draw-border h-100'
                                                onClick={() => {
                                                    window.open('https://github.com/Mikecamdo/CommunityDetection');
                                                }}>
                                                    View on GitHub
                                        </button>
                                    </Col>
                                    <Col className='text-center mt-3' xs={12} sm={6}>
                                        <button className='btn draw-border h-100'
                                                onClick={() => {
                                                    window.open('https://medium.com/smucs/community-detection-label-propagation-vs-girvan-newman-part-2-c2fb78726db9');
                                                }}>
                                                    View Article
                                        </button>
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