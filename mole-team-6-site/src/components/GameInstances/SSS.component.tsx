import React from "react";
import GameShowcase from "../GameShowcase";

const OpShape = () => {
  return (
    <GameShowcase
      hero={{
        heroImage: "/images/sss/hero.png",
        tagline:
          "Out-dodge, out-dash, and outlast your friends in chaotic 1-4 player bullet hell arenas. Side effects may include shouting, betrayal, and broken couches.",
        metadata: {
          genre: "Multiplayer Party / Bullethell / Action",
          platforms: ["PC", "Steam Deck"],
          releaseDate: "TBD 2026",
          players: "1-4",
          isReleased: false,
          isDemo: true,
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
        trailerEmbedUrl: "https://www.youtube.com/embed/AewV9ssK__I",
        sections: [
          {
            title: "About the Game",
            content: {
              type: "paragraphs",
              items: [
                "Enter arenas with up to 4 players where you can only move and dash. Bullets fly in from every direction with wild properties, forcing you to dodge, weave, and time your dash just right. Dashing isn't just for escaping—it builds temporary invincibility and can even send friends flying. Land a charged dash to earn a full second of invulnerability against all bullets!",
                "Grab power-ups, chain invincibility frames, and meet each arena's objective to claim victory. Rounds can end in seconds, keeping the action fast, chaotic, and hilarious. Win enough rounds, and you'll be crowned champion.",
              ],
            },
          },
          {
            title: "Key Features",
            content: {
              type: "list",
              items: [
                "<b>Couch Chaos for 2-4 Players*</b> - Team up... for about 5 seconds. Then backstab, sabotage, and out-survive your friends. (*Local or Online using Steam Remote Play or Parsec, NO native online)",
                "<b>One Joystick, One Button, Infinite Betrayal</b> - Simple to pick up, impossible to put down. Even your non-gamer roommate can ruin your night.",
                "<b>100+ Arenas of Mayhem</b> - All packed with game-changing power-ups, physics chaos, silly hazards, and wild win conditions that keep every match unpredictable.",
                "<b>Ridiculous Rules & Silly Styles</b> - Tweak the rulesets for ultimate chaos and dress your character in goofy costumes to match.",
                "<b>Solo But Still Stupid</b> - Play alone, make terrible decisions, and still have a blast. The game won't judge you... but your couch might.",
              ],
            },
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
            src: "/images/sss/SS_10.png",
            alt: "Gameplay Screenshot 10",
          },
        ],
      }}
    />
  );
};

export default OpShape;
