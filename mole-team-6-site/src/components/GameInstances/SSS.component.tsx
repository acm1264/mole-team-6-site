import React from "react";
import GameShowcase from "../GameShowcase";

const OpShape = () => {
  return (
    <GameShowcase
      hero={{
        heroImage: "/images/sss/hero.png",
        tagline:
          "Dodge and dash your way through chaotic bullet hell arenas in this 1-4 player local party game with both competitive battles and solo or co-op roguelite action!",
        metadata: {
          genre: "Party / Bullethell / Action Rougelite",
          platforms: ["PC", "Steam Deck"],
          releaseDate: "TBD",
          isReleased: false,
          steamUrl:
            "https://store.steampowered.com/app/3871980/Ship_Shape_Slam",
        },
        pressKitUrl:
          "https://drive.google.com/drive/folders/1iPYo-bw_gIAZDCVQNBqKcfuUt58G4bUy?usp=sharing",
        buttonPosition: {
          bottom: "1rem",
          left: "50%",
          transform: "translateX(-50%)",
        },
      }}
      details={{
        logo: "/images/sss/logo.png",
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
            src: "/images/sss/SS_1.jpg",
            alt: "Gameplay Screenshot 1",
          },
          {
            src: "/images/sss/SS_2.jpg",
            alt: "Gameplay Screenshot 2",
          },
          {
            src: "/images/sss/SS_3.jpg",
            alt: "Gameplay Screenshot 3",
          },
          {
            src: "/images/sss/SS_4.jpg",
            alt: "Gameplay Screenshot 4",
          },
          {
            src: "/images/sss/SS_5.jpg",
            alt: "Gameplay Screenshot 5",
          },
          {
            src: "/images/sss/SS_6.jpg",
            alt: "Gameplay Screenshot 6",
          },
          {
            src: "/images/sss/SS_7.jpg",
            alt: "Gameplay Screenshot 7",
          },
          {
            src: "/images/sss/SS_8.jpg",
            alt: "Gameplay Screenshot 8",
          },
          {
            src: "/images/sss/SS_9.jpg",
            alt: "Gameplay Screenshot 9",
          },
          {
            src: "/images/sss/SS_10.jpg",
            alt: "Gameplay Screenshot 10",
          },
        ],
      }}
    />
  );
};

export default OpShape;
