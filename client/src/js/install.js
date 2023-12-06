const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const event = window.deferredPrompt;
    if (!event) return;
    event.prompt();
    window.deferredPrompt = null; // Reset prompt after install
    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => { 
    window.deferredPrompt = null; 
});
