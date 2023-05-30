import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect } from "react";

const formValues = {
    name: "",
    email: "",
    message: ""
};

export const Contact = () => {
    const [state, handleSubmit] = useForm("xnqyyrro");
    const [values, setValues] = useState(formValues);
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        if (values.name && values.email && values.message) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [values])

    return <>
        <Container fluid>
            <Row className='display-6 text-center my-4'>
                <Col className='header'>
                    <span className='header hr2'>Contact Me</span>
                </Col>
            </Row>

            <Row className='fs-3 text-center'>
                <Col>
                    I'm always interested in collaborating on a project or any job opportunities you may have. <br/>
                    You can email me at <span className='header'>mcdoherty@smu.edu</span> or submit the form below.
                </Col>
            </Row>

            {state.succeeded ?
                <Row className='fs-3 text-center my-5'>
                    <Col>
                        Thanks for reaching out! I'll get back to you shortly.
                    </Col>
                </Row>
                :
                <Row className='mt-4'>
                    <Col className='text-center'>
                        <Form onSubmit={handleSubmit} className='form-sizing mx-auto'>
                            <Form.Group>
                                <Form.Control className='fs-4' 
                                              id='name' 
                                              type='name' 
                                              name='name' 
                                              placeholder='Enter name'
                                              value={values.name}
                                              onChange={(delta) => {
                                                setValues({ ...values, name: delta.target.value });
                                              }} />
                            </Form.Group>
                            <ValidationError
                                prefix='Name'
                                field='name'
                                errors={state.errors}
                            />

                            <Form.Group className='my-3'>
                                <Form.Control className='fs-4' 
                                              id='email' 
                                              type='email' 
                                              name='email' 
                                              placeholder='Enter email'
                                              value={values.email}
                                              onChange={(delta) => {
                                                setValues({ ...values, email: delta.target.value });
                                              }} />
                            </Form.Group>
                            <ValidationError
                                prefix='Email'
                                field='email'
                                errors={state.errors}
                            />

                            <Form.Group className='my-3'>
                                <Form.Control className='fs-4' 
                                              as='textarea' 
                                              rows={3} 
                                              id='message' 
                                              type='message' 
                                              name='message' 
                                              placeholder='Enter message'
                                              value={values.message}
                                              onChange={(delta) => {
                                                setValues({ ...values, message: delta.target.value });
                                              }} />
                            </Form.Group>
                            <ValidationError
                                prefix='Message'
                                field='message'
                                errors={state.errors}
                            />

                            <button className='btn draw-border' 
                                    type="submit" 
                                    disabled={isDisabled}>
                                Submit
                            </button>
                        </Form>
                    </Col>
                </Row>
            }
        </Container>
    </>
}