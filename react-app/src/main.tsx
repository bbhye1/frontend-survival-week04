import ReactDOM from 'react-dom/client';
import App from './App';

async function main() {
  const rootElement = document.getElementById('root');

  if (!rootElement) {
    return;
  }

  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
main();
