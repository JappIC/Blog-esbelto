const config = {
  "extensions": [".svelte.md", ".md", ".svx"],

  "smartypants": {
    "dashes": "oldschool"
  },

  "remarkPlugins": [],
  "rehypePlugins": [],
  layout: {
      article: "./src/lib/Components/Framework/Articles/Article.svelte",
      articleBase: "./src/lib/Components/Framework/Articles/Article2.svelte",
  }
};

export default config;
