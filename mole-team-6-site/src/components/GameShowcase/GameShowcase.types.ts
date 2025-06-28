import { HeroProps } from "./Hero/Hero.types";
import { DetailsProps } from "./Details/Details.types";
import { GalleryProps } from "./Gallery/Gallery.types";

export interface GameShowcaseProps {
    hero: HeroProps;
    details: DetailsProps;
    gallery: GalleryProps;
}
