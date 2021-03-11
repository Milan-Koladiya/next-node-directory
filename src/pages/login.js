import Link from "next/link";
import { useRouter } from "next/router";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="container signMainForm">
        <h2 className="Heading">Login Your Account</h2>
        <Form>
          <Form.Group controlId="formBasicEmail mt-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Link href="/login">Forgot Password ?</Link>
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <Button
            className="ml-3"
            onClick={() => router.push("/")}
            variant="primary"
            type="button"
          >
            SignUp
          </Button>
        </Form>
      </div>
    </>
  );
}
