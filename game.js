// Элементы
const coin = document.getElementById('coin');
const scoreDisplay = document.getElementById('score');
const upgradeClickButton = document.getElementById('upgrade-click');
const upgradeDoubleButton = document.getElementById('upgrade-double');

// Начальные значения
let score = parseInt(localStorage.getItem('score')) || 0;
let coinsPerClick = parseInt(localStorage.getItem('coinsPerClick')) || 1;
let multiplier = parseInt(localStorage.getItem('multiplier')) || 1;

// Функция обновления интерфейса
function updateUI() {
  scoreDisplay.textContent = `Score: ${score}`;
  upgradeClickButton.disabled = score < 100; // Отключаем кнопку, если недостаточно монет
  upgradeDoubleButton.disabled = score < 10000; // Отключаем кнопку, если недостаточно монет
}

// Обработчик кликов по монете
coin.addEventListener('click', () => {
  score += coinsPerClick * multiplier; // Учитываем силу клика и множитель
  localStorage.setItem('score', score); // Сохраняем счёт
  updateUI();
});

// Обработчик покупки +1 к монетам за клик
upgradeClickButton.addEventListener('click', () => {
  if (score >= 100) {
    score -= 100; // Списываем монеты
    coinsPerClick += 1; // Увеличиваем монеты за клик
    localStorage.setItem('score', score);
    localStorage.setItem('coinsPerClick', coinsPerClick);
    updateUI();
  }
});

// Обработчик покупки удвоения монет за клик
upgradeDoubleButton.addEventListener('click', () => {
  if (score >= 10000) {
    score -= 10000; // Списываем монеты
    multiplier *= 2; // Удваиваем множитель
    localStorage.setItem('score', score);
    localStorage.setItem('multiplier', multiplier);
    updateUI();
  }
});

// Начальная настройка
updateUI();
// localStorage.removeItem('score');