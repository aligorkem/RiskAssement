import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { IUser } from "../models/user.model";

export function UserForm(props:any) {
    const [validated, setValidated] = useState<boolean>(false);
    const [disable, setDisable] = useState<boolean>(false);
    const [imageFile, setImageFile] = useState<string>("");
    const [showImage, setShowImage] = useState<boolean>(false);
    const [userForm, setUserForm] = useState<IUser>({
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

    /** call when input change */
    const handleChange = (event: any) => { setUserForm({...userForm, [event.target.name]: event.target.value }) };

    /** call when upload change*/
    const uploadPicture = (event: any) => {
      setImageFile(URL.createObjectURL(event.target.files[0]));
      setShowImage(true);
    };

    /** submit */
    const handleSubmit = (event: any) => {
      const form = event.currentTarget;
      event.preventDefault();
      event.stopPropagation();

      /** if form is invalid */
      if (form.checkValidity() === false) {
        setValidated(true);
      } else {
        setValidated(false);
        props.changeForm(userForm);
        props.changeShowUserBankForm();
      }
    };

    return (
      <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Col sm={8}>
              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Control required type="text" placeholder="First Name" name="firstName" onChange={(e: any) => handleChange(e)}/>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid first name.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Control required type="text" placeholder="Last Name" name="lastName" onChange={(e: any) => handleChange(e)}/>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid last name.
                </Form.Control.Feedback>
              </Form.Group>
      
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Control required type="email" placeholder="Email" name="email" onChange={(e: any) => handleChange(e)}/>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="validationCustom03">
                <Form.Control required type="text" placeholder="Location" name="location" onChange={(e: any) => handleChange(e)}/>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid loaction.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="validationCustom04">
                <Form.Control required type="date" placeholder="Date of Birth" name="date" onChange={(e: any) => handleChange(e)}/>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid date.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="validationCustom05">
                <Form.Control required type="file" placeholder="Photo" name="photo" accept="image/jpeg" onChange={(e: any) => uploadPicture(e)}/>
                <Form.Control.Feedback type="invalid">
                  Please upload a photo.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col sm={4}>
              <div className="image-card">            
                {showImage ? <img src={imageFile} alt="image" width={250} height={250}/> : null }
              </div>  
            </Col>
          </Row>
          <Button variant="primary" type="submit" className='submit-button' disabled={disable}>
              Next
          </Button>
        </Form>
      </Container>
    );
}