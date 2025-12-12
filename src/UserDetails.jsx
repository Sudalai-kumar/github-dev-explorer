import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function UserDetails() {
  const { username } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) throw new Error("User not found");
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [username]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <Container className="py-4">
      <Card>
        <Card.Body>
          <Row>
            <Col md={8}>
              <h3>{user.name}</h3>
              <p className="text-muted">@{user.login}</p>

              <h6>Bio</h6>
              <p>{user.bio || "No bio available"}</p>

              <h6>Location</h6>
              <p>{user.location || "Unknown"}</p>

              <h6>GitHub</h6>
              <a href={user.html_url} target="_blank">
                {user.html_url}
              </a>
            </Col>

            <Col md={4} className="border-start">
              <h5>Stats</h5>
              <p>Followers: {user.followers}</p>
              <p>Following: {user.following}</p>
              <p>Public Repos: {user.public_repos}</p>
            </Col>
          </Row>

          <Button
            onClick={() => navigate(-1)}
            variant="secondary"
            className="mt-3"
          >
            Back
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default UserDetails;
