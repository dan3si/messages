import styles from './App.module.scss';
import { MessagesContainer } from './components/MessagesContainer';

function App() {
  document.body.style.backgroundColor = '#eff0f5';
  document.body.style.fontFamily = 'Arial, sans-serif';
  document.body.style.fontSize = '15px';
  document.body.style.color = '#505050';

  return (
    <div className={styles.app}>
      <MessagesContainer />
    </div>
  );
}

export default App;
