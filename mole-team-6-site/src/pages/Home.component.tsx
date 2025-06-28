import { Container, Title, Subtitle, HeroImage } from "./Home.styles";

export function Home() {
    return (
        <Container>
            <HeroImage src="/assets/logo.png" alt="Mole Team 6 Logo" />
            <Title>Welcome to Mole Team 6</Title>
            <Subtitle>A chaotic couch co-op bullet hell experience</Subtitle>
        </Container>
    );
}

export default Home;
