import * as React from "react";

import * as styles from "./App.module.less";

export const App = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <h1>Cities App <strong>test</strong></h1>
      <blockquote>
        Write an application with a search bar to find a city.<br/>
        The search bar won't have a <button>Search</button> button, the results will be shown on keypress.<br/>
        The search bar should always be on top, so on scroll, the user will be able to change the search.<br/>
        The cities are in <code>/src/data/cities.json</code> file.<br/>
        You are free to use Material UI but is not mandatory.<br/>
        Push your implementation on a branch.<br/>
      </blockquote>
      <h3>Dev note:</h3>
      <p>For new <code>nnn.module.less</code> file, restart the webpack to get the types.</p>
    </div>
  );
};
