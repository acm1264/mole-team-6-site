import React from "react";
import GameShowcase from "../GameShowcase";

const OpShape = () => {
    return (
        <GameShowcase
            hero={{
                heroImage: "/images/op-shape/hero.jpg",
                tagline: "A couch bullet-hell party where chaos wins!",
                metadata: {
                    genre: "Party / Bullethell",
                    platforms: ["PC", "Steam Deck"],
                    releaseDate: "TBD",
                    isReleased: false,
                    steamUrl: "https://store.steampowered.com/app/APP_ID_HERE",
                },
            }}
            details={{
                logo: "/images/op-shape/logo.jpg",
                trailerEmbedUrl: "https://www.youtube.com/embed/VIDEO_ID_HERE",
                sections: [
                    {
                        title: "About the Game",
                        content: "About the game here.",
                    },
                    {
                        title: "Key Features",
                        content: `• 2–4 Player local multiplayer\n• vibes`,
                    },
                ],
            }}
            gallery={{
                images: [
                    {
                        src: "/images/op-shape/gallery1.png",
                        alt: "Gameplay Screenshot 1",
                    },
                    {
                        src: "/images/op-shape/gallery2.png",
                        alt: "Gameplay Screenshot 2",
                    },
                    {
                        src: "/images/op-shape/gallery3.jpg",
                        alt: "Gameplay Screenshot 3",
                    },
                    {
                        src: "/images/op-shape/gallery4.png",
                        alt: "Gameplay Screenshot 4",
                    },
                ],
            }}
        />
    );
};

export default OpShape;
