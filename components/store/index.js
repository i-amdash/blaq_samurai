import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#04505F',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: '/Images/favicon.webp',
  fullDecal: '/Images/logo.webp',
});

export default state;