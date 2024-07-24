import { greet } from '../dist';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    ${greet()}
  </div>
`;
