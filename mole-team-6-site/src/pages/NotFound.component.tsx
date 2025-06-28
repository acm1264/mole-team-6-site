import { Container, Title, Description } from "./NotFound.styles";

export function NotFound() {
    return (
        <Container>
            <Title>404</Title>
            <Description>
                Oops! The page you're looking for doesn't exist.
            </Description>
        </Container>
    );
}

export default NotFound;
