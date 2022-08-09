import { createRoot } from 'react-dom/client';
import App from './components/App/App';

const rootElm = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElm)

root.render(<App />);
