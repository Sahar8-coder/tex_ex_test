import React, { useState } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const config = {
  "fast-preview": {
    disabled: true
  },
  tex2jax: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"]
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"]
    ]
  },
  messageStyle: "none"
};

export default function App() {
  const [num, setNum] = useState(10);

  return (
    <MathJaxContext
      version={2}
      config={config}
      onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)}
    >
      <h2>Optimal MathJax example with Latex</h2>
      <i>
        This example shows a personal favourite setting that performs well both
        in terms of responsive updates as well as seamless dynamic typesetting.
        As stated in the section on how to fight flashes of non-typeset content,
        a subtle flickering can sometimes be seen with MathJax 3 when used in
        Chrome and Safari. This configuration effectively removes this while it
        at the same time results in a good experience with fast updates.
        <br />
        <br />
        Note that this configuration has only been tested with Latex
      </i>
      <br />
      <br />

      <h3>Hiding updates</h3>
      <p>
        Most likely, the benefits of this optimal configuration will not be seen
        below but make sure to try it out if you have problems with flickering
        or slow response times. Since MathJax 2 is used, the example with{" "}
        <tt>renderMode</tt> set to <tt>pre</tt> has been removed.
        <br />
        <br />
        Current value used in this section: {num}
      </p>
      <ul>
        <li>
          <tt>hideUntilTypeset</tt> set to <tt>first</tt>:{" "}
          <MathJax
            hideUntilTypeset={"first"}
            inline
            dynamic
          >{`An example is the equation $${num}x^4 = 100$`}</MathJax>
        </li>
        <li>
          <tt>hideUntilTypeset</tt> set to <tt>every</tt>:{" "}
          <MathJax
            hideUntilTypeset={"first"}
            inline
            dynamic
          >{`An example is the equation $${num}x^4 = 100$`}</MathJax>
        </li>
      </ul>
      <button onClick={() => setNum((oldNum) => oldNum + 10)}>
        Add 10 to value used
      </button>
    </MathJaxContext>
  );
}
