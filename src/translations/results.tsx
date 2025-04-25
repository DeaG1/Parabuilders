export interface ResultCard {
    title: string;
    description: string;
  }
  
  export interface ResultsTranslation {
    title: string[];
    cards: ResultCard[];
  }

export const resultsTranslations = {
    en: {
      title: ["ParaBuilders", "More than just a community of", "content creators."],
      cards: [
        { title: "+1 Million", description: "Of views and an average of +1000 views per tweet." },
        { title: "+150 Creators", description: "Unique creators" },
        { title: "+15 Thousand", description: "Likes" },
        { title: "+1 Thousand", description: "Tweets total" },
        { title: "+15 Thousand", description: "Retweets" },
        { title: "+5 Thousand", description: "Replies" },
      ],
    },
    "pt-br": {
      title: ["ParaBuilders", "Mais que apenas uma comunidade de", "criadores de conteúdo."],
      cards: [
        { title: "+1 Milhão", description: "Visualizações e média de +1000 por tweet." },
        { title: "+150 Criadores", description: "Criadores únicos" },
        { title: "+15 Mil", description: "Curtidas" },
        { title: "+1 Mil", description: "Tweets no total" },
        { title: "+15 Mil", description: "Retweets" },
        { title: "+5 Mil", description: "Respostas" },
      ],
    },
  };
  