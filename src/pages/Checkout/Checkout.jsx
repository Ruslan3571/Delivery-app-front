import React, { useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import './Checkout.css';

const Checkout = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = event => {
    event.preventDefault();

    const validationErrors = {};

    if (!email) {
      validationErrors.email = 'Email is required';
    }
    if (!password) {
      validationErrors.password = 'Password is required';
    }
    if (!number) {
      validationErrors.number = 'Number is required';
    }
    if (!address) {
      validationErrors.address = 'Address is required';
    }

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      {!isSubmitted ? (
        <Form className="form" onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Please enter your email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              invalid={!!errors.email}
            />
            {errors.email && <FormFeedback>{errors.email}</FormFeedback>}
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Please enter your password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              invalid={!!errors.password}
            />
            {errors.password && <FormFeedback>{errors.password}</FormFeedback>}
          </FormGroup>
          <FormGroup>
            <Label for="exampleNumber">Number</Label>
            <Input
              id="exampleNumber"
              name="number"
              placeholder="Please enter your number"
              type="number"
              value={number}
              onChange={e => setNumber(e.target.value)}
              invalid={!!errors.number}
            />
            {errors.number && <FormFeedback>{errors.number}</FormFeedback>}
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress">Address</Label>
            <Input
              id="exampleAddress"
              name="address"
              placeholder="Please enter your address"
              value={address}
              onChange={e => setAddress(e.target.value)}
              invalid={!!errors.address}
            />
            {errors.address && <FormFeedback>{errors.address}</FormFeedback>}
          </FormGroup>
          <FormGroup check>
            <Input type="checkbox" /> <Label check>Check me out</Label>
          </FormGroup>
          <div className="btnWrapper">
            <button type="submit" className="btnForm">
              Submit
            </button>
          </div>
        </Form>
      ) : (
        <div className="checkoutMessage">
          <div className="checkoutTitleContainer">
            <AiFillCheckCircle className="checkoutIcon" />
            <h3>Thank you for your order!</h3>
          </div>
          <span>
            Your order is being processed and will be delivered as fast as
            possible.
          </span>
        </div>
      )}
    </>
  );
};

export default Checkout;
