import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    const answer = confirm('New version is available. Update?');

    if (answer === true) {
      updateSW();
    } else {
      return;
    }
  },

  onOfflineReady() {
    alert('Ready to work in offline.');
  },
});

export default updateSW;
