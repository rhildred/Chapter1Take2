import { ComingSoon } from 'diy-pwa/components';
import { DaysLeft } from 'diy-pwa/components';
import 'w3-css/w3.css';
import 'diy-pwa/style.css';

export default {
  component: ComingSoon,
  title: 'components/1.1 Coming Soon',
};

export const en = {
  args: {
    title: 'Coming Soon',
    tagline: (
      <h2>
        {' '}
        ... in <DaysLeft readyDate="2023-09-05" /> days
      </h2>
    ),
    backgroundImage: '/img/forestbridge.jpg',
    logo: 'Logo',
    footer: 'Powered by',
  },
};

export const fr = {
  args: {
    title: 'Bientôt disponible',
    tagline: (
      <h2>
        {' '}
        ... dans <DaysLeft readyDate="2023=09-05" /> jours
      </h2>
    ),
    backgroundImage: '/img/forestbridge.jpg',
    logo: 'Logo',
    footer: 'Alimenté par',
  },
};
