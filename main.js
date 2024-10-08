/* STYLES */
import './node_modules/reveal.js/dist/reveal.css';
import './node_modules/reveal.js/dist/theme/white.css';
import './node_modules/reveal.js/plugin/highlight/monokai.css';

/* SETUP */
import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js';

import './style.css';

let deck = new Reveal({
  plugins: [
    RevealMarkdown,
    RevealHighlight,
    RevealNotes,
  ],
});
deck.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  embedded: false,
  // markdown: {
  //   smartypants: true,
  // },
});