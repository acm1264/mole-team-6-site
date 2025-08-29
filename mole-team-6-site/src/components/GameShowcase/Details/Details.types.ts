export interface DetailsProps {
  logo: string;
  trailerEmbedUrl: string;
  sections: {
    title: string;
    content:
      | string
      | {
          type: "list" | "paragraphs";
          items: string[];
        };
  }[];
}
