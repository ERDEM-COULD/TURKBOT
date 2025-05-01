const showBotsBtn = document.getElementById('showBotsBtn');
const botsContainer = document.getElementById('botsContainer');
const details = document.getElementById('engelBotDetails');

showBotsBtn.addEventListener('click', () => {
  botsContainer.classList.toggle('hidden');
});

function toggleDetails() {
  details.classList.toggle('hidden');
}
function searchDevices() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const deviceCards = document.querySelectorAll('.device-card');
  
  deviceCards.forEach(card => {
    const title = card.querySelector('h2').textContent.toLowerCase();
    const tags = card.dataset.tags.toLowerCase(); // Etiketleri alıyoruz
    if (title.includes(input) || tags.includes(input)) {
      card.style.display = ''; // Eşleşen cihazları göster
    } else {
      card.style.display = 'none'; // Eşleşmeyenleri gizle
    }
  });
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
