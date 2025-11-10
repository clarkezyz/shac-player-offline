/**
 * Electron Integration for SHAC Player
 * Hooks into the existing file input to use Electron's native file dialog
 */

(function() {
  'use strict';

  // Check if running in Electron
  if (!window.electronAPI) {
    console.log('Not running in Electron - skipping integration');
    return;
  }

  console.log('SHAC Player running in Electron mode');

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', () => {
    const browseButton = document.getElementById('browse-file');
    const loadFileButton = document.getElementById('load-file');

    // Override both browse buttons to use Electron's file dialog
    [browseButton, loadFileButton].forEach(button => {
      if (!button) return;

      const newButton = button.cloneNode(true);
      button.parentNode.replaceChild(newButton, button);

      newButton.addEventListener('click', async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const fileData = await window.electronAPI.openFileDialog();

        if (fileData) {
          console.log('File selected from Electron dialog:', fileData.name);

          // Create a File object from the Uint8Array
          const file = new File([fileData.data], fileData.name, {
            type: 'audio/shac'
          });

          // Load directly into the player
          if (window.shacPlayer && window.shacPlayer.loadFile) {
            window.shacPlayer.loadFile(file);
          }
        }
      });
    });

    // Hide PWA install button in Electron
    const installPWA = document.getElementById('install-pwa');
    if (installPWA) {
      installPWA.style.display = 'none';
    }

    // Disable service worker in Electron
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(registration => registration.unregister());
      });
    }
  });

})();
