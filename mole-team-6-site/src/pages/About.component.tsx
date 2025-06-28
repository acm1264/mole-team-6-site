import { Container, Header, Paragraph } from "./About.styles";

export function About() {
    return (
        <Container>
            <Header>About Us</Header>
            <Paragraph>
                Mole Team 6 is a small indie studio building fast-paced,
                retro-style multiplayer games. We’re passionate about couch
                co-op chaos and creating memorable moments with friends.
            </Paragraph>
            <Paragraph>
                Our first title is a competitive bullet hell arena brawler where
                reflexes and power-ups collide in colorful, over-the-top
                showdowns. Stay tuned for more updates and behind-the-scenes!
            </Paragraph>
        </Container>
    );
}

export default About;
