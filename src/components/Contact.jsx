import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useForm, ValidationError } from '@formspree/react';

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

    const titleRef = useRef(0);
    const textRef = useRef(0);
    const formRef = useRef(0);

    const [loadTitle, setLoadTitle] = useState(false);
    const [loadText, setLoadText] = useState(false);
    const [loadForm, setLoadForm] = useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset + 0.75 * window.innerHeight;

        if (position >= titleRef.current.offsetTop) {
            setLoadTitle(true);
        }
        if (position >= textRef.current.offsetTop) {
            setLoadText(true);
        }
        if (position >= formRef.current.offsetTop) {
            setLoadForm(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return <>
        <Container fluid className='mb-5'>
            <Row ref={titleRef} className={`${loadTitle ? 'notHidden' : 'hidden'} display-6 text-center my-4`}>
                <Col className='header'>
                    <span className='header hr2'>Contact Me</span>
                </Col>
            </Row>

            <Row ref={textRef} className={`${loadText ? 'notHidden' : 'hidden'} fs-4 text-center delay-1`}>
                <Col>
                    I'm always interested in collaborating on a project or any job opportunities you may have. <br/>
                    You can email me at <span className='header'>mcdoherty13@gmail.com</span> or submit the form below.
                </Col>
            </Row>

            {state.succeeded ?
                <Row className='fs-4 text-center my-5'>
                    <Col>
                        Thanks for reaching out! I'll get back to you shortly.
                    </Col>
                </Row>
                :
                <Row ref={formRef} className={`${loadForm ? 'notHidden' : 'hidden'} mt-4 delay-2`}>
                    <Col className='text-center'>
                        <Form onSubmit={handleSubmit} className='form-sizing mx-auto'>
                            <Form.Group>
                                <Form.Control className='fs-5' 
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
                                <Form.Control className='fs-5' 
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
                                <Form.Control className='fs-5' 
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