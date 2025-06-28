export interface HeroProps {
    heroImage: string;
    tagline: string;
    metadata: GameMetadata;
}

export interface GameMetadata {
    genre: string;
    platforms: string[];
    releaseDate: string;
    isReleased: boolean;
    price?: string;
    steamUrl: string;
}
