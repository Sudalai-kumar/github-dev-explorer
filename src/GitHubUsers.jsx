import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";

function GitHubUsers() {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users?per_page=5")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users!");
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Unknown error");
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center p-4">
        <Spinner animation="border" role="status" aria-hidden="true" />
        <span className="ms-2">Loading developers...</span>
      </div>
    );

  if (error)
    return (
      <Container className="py-4">
        <div className="text-danger">Error: {error}</div>
      </Container>
    );

  return (
    <Container className="py-4">
      <Row className="g-3">
        {users.map((user) => (
          <Col key={user.id} xs={12} sm={6} md={4}>
            <Card className="h-100 text-start">
              <Card.Body className="d-flex flex-column" >
                <div>
                  <h6 className="fw-bold mb-1">{user.login}</h6>
                  <div className="text-muted small">Type: {user.type}</div>
                  <div className="text-muted small">ID: {user.id}</div>
                </div>
                <div className="mt-auto pt-2">
                  <Button
                    as={Link}
                    to={`/user/${user.login}`}
                    variant="outline-primary"
                    size="sm"
                  >
                    View Profile
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default GitHubUsers;
