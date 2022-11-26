import Helmet from "components/Helmet/Helmet";
import CommonSection from "components/UI/CommonSection";
import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import "styles/checkout.scss";

const Checkout = () => {
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Infomation</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your name" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="email" placeholder="Enter your email" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="number" placeholder="Enter your phone number" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your street address" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your city" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your postal code" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your country" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Total Qty: <span>0</span>
                </h6>
                <h6>
                  Subtotal: <span>$120</span>
                </h6>
                <h6>
                  <span>
                    Shipping: <br />
                    free shipping:
                  </span>
              <span>$0</span>
                </h6>

                <h4>
                  Total Cost:<span>$120</span>
                </h4>
                <button className="buy__btn auth__btn w-100">
                  Place an order
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
