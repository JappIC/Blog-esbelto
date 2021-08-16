const config = {
  "extensions": [".svelte.md", ".md", ".svx"],

  "smartypants": {
    "dashes": "oldschool"
  },

  "remarkPlugins": [],
  "rehypePlugins": [],
  layout: {
      article: "./src/lib/Components/Article/index.svelte",
  }
};

export default config;
