import * as React from "react";
import Search from './components/Search/Search'
import * as styles from "./App.module.less";

export const App = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <Search />
    </div>
  );
};
