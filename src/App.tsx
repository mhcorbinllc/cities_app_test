import * as React from "react";

import * as styles from "./App.module.less";

export const App = (): JSX.Element => {
  const styleGray: React.CSSProperties = {
    color: "gray",
  };
  return (
    <div className={styles.root}>
      <h1>Cities App <strong>test</strong></h1>

      <h2>Request</h2>
      This app is about searching and selecting US states and cities.<br/>
      There is a tree with checkboxes and a search bar on the left.<br/>
      On the right is the list of the selected cities.<br/>
      Use your imagination to render the list of the selected cities (no specific acceptance criteria).<br/>

      <h2>UX Acceptance criteria</h2>
      <ul>
        <li>On app startup, the search bar is empty.</li>
        <li>On search bar change, the tree shows the filtered items.</li>
        <li>The search (filtering) should be like a Search Engine search.</li>
        <li>On search, the app should not clear the checked items.</li>
        <li>The app should not clear the Selected list on the right on search.</li>
        <li>Beautify the UI as you want.</li>
      </ul>

      <h2>DEV Acceptance criteria</h2>
      <ul>
        <li>You can use MUI, but it is not mandatory.</li>
        <li>Implement and use the <code>src/api/apiSearchCities.ts</code> to fetch the items.</li>
        <li>Do not remove the artificial delay from <code>src/api/apiSearchCities.ts</code>.</li>
        <li>Provide a clean and professional app scaffold and code style.</li>
        <li>Utilize the available scripts of this package.</li>
      </ul>

      <h2>Notes</h2>
      <ul>
        <li>Imagine you deliver this code and product to a final customer.</li>
        <li>If something is unclear or missing, please don't hesitate to contact us.</li>
      </ul>

      <h2>How to send your test</h2>
      Compress this package without the <code>node_modules</code> and send it to us.<br/>

      <h1>Layout</h1>
      <div
        style={{
          fontFamily: "monospace",
          whiteSpace: "pre",
        }}>
        <b>Select cities</b><br/>
        +----------------------------+<br/>
        | [Search bar]               |            <b>Selected</b><br/>
        +----------------------------+            +------------------------+<br/>
        | {">"} [V] State A              |            | <span style={styleGray}>(Render in the best</span>    |<br/>
        | {"v"} [x] State B              |            | <span style={styleGray}>possible better way</span>    |<br/>
        |       | [ ] City A         |            | <span style={styleGray}>the selected states</span>    |<br/>
        |       | [V] City B         |            | <span style={styleGray}>and cities.)</span>           |<br/>
        |       | ...                |            |                        |<br/>
        | {"v"} ...                      |            |                        |<br/>
        +----------------------------+            +------------------------+<br/>
      </div>
    </div>
  );
};
