import { ComingSoon } from 'diy-pwa/components';
import 'w3-css/w3.css';
import 'diy-pwa/style.css';
import { en } from './stories/ComingSoon.stories.jsx';

function App() {
  return (
    <>
      <ComingSoon {...en.args} />
    </>
  );
}

export default App;
