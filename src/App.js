import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

function App() {
  const userText = `# Welcome to my Arav's Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
#### Wow, here's an even smaller heading

With the asterisks (two on each side), you can even make text **bold**... **wow**!!!!

Here is an example of \`inline code\`.

Here's a code block:
\`\`\`
const add = (a, b) => a + b;
\`\`\`

With one underscore on each side, you can even make the text _italic_!

Or... wait for it... **_both!_**

And feel free to go crazy ~~crossing stuff out~~.

Here, let's go check out my GitHub [links](https://github.com/AravArora05/).

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
      - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!

And last but not least, let's not forget embedded images:

![Arav Arora Image](https://royalsaau.org/static/arav.jpeg)
`;

  const [markdown, setMarkdown] = useState(userText);
  const [isFirstExpanded, setFirstExpanded] = useState(false);
  const [isSecondExpanded, setSecondExpanded] = useState(false);

  const updateValues = (event) => {
    setMarkdown(event.target.value);
  };

  const toggleFirst = () => {
    setFirstExpanded(!isFirstExpanded);
    if (isSecondExpanded) {
      setSecondExpanded(false);
    }
  };

  const toggleSecond = () => {
    setSecondExpanded(!isSecondExpanded);
    if (isFirstExpanded) {
      setFirstExpanded(false); 
    }
  };

  return (
    <>
      <div style={{ backgroundColor: 'whitesmoke', padding: '10px' }}>
        <h2>Arav's Markdown Previewer</h2>
      </div>
      <div className="container">
        <div className={`editor-container${isFirstExpanded ? ' expanded' : ''}`}>
          <h2>Editor: <FontAwesomeIcon icon={faExpandAlt} onClick={toggleFirst} /></h2>
          <textarea id="editor" value={markdown} onChange={updateValues} />
        </div>
        <div className={`preview-container${isSecondExpanded ? ' expanded' : ''}`}>
          <h2>Preview: <FontAwesomeIcon icon={faExpandAlt} onClick={toggleSecond} /></h2>
          <div id="preview">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
