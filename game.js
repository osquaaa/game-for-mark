// Элементы
const coin = document.getElementById('coin');
const scoreDisplay = document.getElementById('score');
const upgradeButton = document.getElementById('upgrade');

// Начальные значения
let score = parseInt(localStorage.getItem('score')) || 0;
let coinsPerClick = parseInt(localStorage.getItem('coinsPerClick')) || 1;

// Обновление отображения счёта
function updateUI() {
  scoreDisplay.textContent = `Score: ${score}`;
  upgradeButton.disabled = score < 100; // Отключаем кнопку, если монет меньше 100
}

// Обработчик кликов по монете
coin.addEventListener('click', () => {
  score += coinsPerClick; // Увеличиваем счёт с учётом текущей силы клика
  localStorage.setItem('score', score); // Сохраняем в Local Storage
  updateUI();
});

// Обработчик покупки улучшения
upgradeButton.addEventListener('click', () => {
  if (score >= 100) {
    score -= 100; // Вычитаем стоимость улучшения
    coinsPerClick += 1; // Увеличиваем монеты за клик
    localStorage.setItem('score', score); // Сохраняем обновлённый счёт
    localStorage.setItem('coinsPerClick', coinsPerClick); // Сохраняем силу клика
    updateUI();
  }
});

// Начальная настройка
updateUI();

// Для сброса счёта можно добавить (опционально):
// localStorage.removeItem('score');