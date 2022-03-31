import { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { IToast } from "../models/toast.model";
import { IUser } from "../models/user.model";
import { ToastFunction } from "./toast";
import { postData } from "../services";
export function UserBankForm(props: any) {
    const [userBankForm, setUserBankForm] = useState<IUser>({
        firstName: "",
        lastName: "",
        email: "",
        location: "",
        date: "",
        salaryPaid: 0,
        creditCardDebt: 0,
        homeLoanDebt: 0,
        carLoanDebt: 0,
        stock: "",
        valueOfStock: 0,
      });
    const [validated, setValidated] = useState<boolean>(false);
    const [toast, setToast] = useState<IToast>({
        header: "",
        message: "",
        variant: "",
        show: false,
        toastPosition: "top-end",
    });

    /** called when component did mount */
    useEffect(() => {
      setUserBankForm({ ...userBankForm, ...props.userForm});
    }, [props])
    
    /** call when input change */
    const handleChange = (event: any) => { setUserBankForm({...userBankForm, [event.target.name]: event.target.value}) };

    /** submit */
    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();

        /** if form is invalid */
        if (form.checkValidity() === false) {
          setValidated(true);
          setToast({
              header: "Header message",
              message: "Error",
              show: true,
              variant: "danger",
              toastPosition: "top-end",
          });
        } else {
          setValidated(false);    
          postData("submit", JSON.stringify(userBankForm)).then((res) => {
            
            setToast({
                header: "Success",
                message: "The application has successfully submitted. Please check your email for the application result",
                show: true,
                variant: "success",
                toastPosition: "top-end",
            });
            
          }).catch((error) => {
            console.log(error);
            setToast({
                header: "Error",
                message: error.message,
                show: true,
                variant: "danger",
                toastPosition: "top-end",
            });
          });
        }
    };

    return (
        <Container>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                    <Form.Group as={Row} className="mb-3" controlId="validationCustom01">
                        <Form.Label column sm="2">
                            Salary Paid Every Quarter
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control required type="number" step="0.01"  name="salaryPaid" onChange={(e: any) => handleChange(e)} />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid value.
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row} className="mb-3" controlId="validationCustom02">
                        <Form.Label column sm="2">
                            Credit Card Debt
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control required type="number" step="0.01"  name="creditCardDebt" onChange={(e: any) => handleChange(e)} />
                        
                            <Form.Control.Feedback type="invalid">
                            Please provide a valid value.
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="validationCustom03">
                        <Form.Label column sm="2">
                            Home Loan Debt
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control required type="number" step="0.01"  name="homeLoanDebt" onChange={(e: any) => handleChange(e)} />
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid value.
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="validationCustom04">
                        <Form.Label column sm="2">
                            Car Loan Debt
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control required type="number" step="0.01"  name="carLoanDebt" onChange={(e: any) => handleChange(e)} />
                        
                            <Form.Control.Feedback type="invalid">
                            Please provide a valid value.
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="validationCustom05">
                        <Form.Label column sm="2">
                            Name Of Stock
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control required type="text" name="stock" onChange={(e: any) => handleChange(e)} />
                            <Form.Control.Feedback type="invalid">
                            Please provide a valid value.
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="validationCustom06">
                        <Form.Label column sm="2">
                            Value Of Stock
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control required type="number" name="valueOfStock" onChange={(e: any) => handleChange(e)} />
                            <Form.Control.Feedback type="invalid">
                            Please provide a valid value.
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                   
                    
                </Row>
                <Button variant="primary" type="submit" className="submit-button">
                        Submit
                </Button>
            </Form>
            { toast.show ? <ToastFunction {...toast} /> : null}
        </Container>
    );
}