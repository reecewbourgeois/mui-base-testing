import React, { useState } from 'react';
import styles from './App.module.scss';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';

export function App(): React.ReactElement {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.app}>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer noopener">
          <img src={viteLogo} className={styles.logo} alt="Vite Logo" />
        </a>

        <a href="https://reactjs.org" target="_blank" rel="noreferrer noopener">
          <img src={reactLogo} className={`${styles.logo} ${styles.react}`} alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className={styles.readTheDocs}>Click on the Vite and React logos to learn more</p>
    </div>
  );
}
