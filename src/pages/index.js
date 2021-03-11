import Link from "next/link";
import { Form, Button } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <div className="container signMainForm">
        <h2 className="Heading">SignUp Your Account with us</h2>
        <Form>
          <Form.Group controlId="formBasicEmail mt-3">
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Enter Your Fullname</Form.Label>
              <Form.Control type="password" placeholder="Fullname" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Enter Your Mobilenumber</Form.Label>
              <Form.Control type="password" placeholder="Mobilenumber" />
            </Form.Group>
            <Form.Label>Enter Your Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Link href="/login">Already have a account ?</Link>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
