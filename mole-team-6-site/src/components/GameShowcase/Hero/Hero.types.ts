export interface HeroProps {
  heroImage: string;
  tagline: string;
  metadata: GameMetadata;
  pressKitUrl?: string;
  buttonPosition?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    transform?: string;
  };
}

export interface GameMetadata {
  genre: string;
  platforms: string[];
  releaseDate: string;
  players: string;
  isReleased: boolean;
  isDemo: boolean;
  price?: string;
  steamUrl: string;
}
