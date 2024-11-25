// Элементы
const coin = document.getElementById('coin');
const scoreDisplay = document.getElementById('score');
const upgradeClickButton = document.getElementById('upgrade-click');
const upgradeDoubleButton = document.getElementById('upgrade-double');

// Начальные значения
let score = parseInt(localStorage.getItem('score')) || 0;
let coinsPerClick = parseInt(localStorage.getItem('coinsPerClick')) || 1;
let multiplier = parseInt(localStorage.getItem('multiplier')) || 1;
let upgradeClickPrice = parseInt(localStorage.getItem('upgradeClickPrice')) || 100;
let upgradeDoublePrice = parseInt(localStorage.getItem('upgradeDoublePrice')) || 10000;

// Функция обновления интерфейса
function updateUI() {
  scoreDisplay.textContent = `Счет: ${score}`;
  upgradeClickButton.textContent = `+1 К КЛИКУ (${upgradeClickPrice} coins)`;
  upgradeDoubleButton.textContent = `ДАБЛ КЛИК (${upgradeDoublePrice} coins)`;
  upgradeClickButton.disabled = score < upgradeClickPrice;
  upgradeDoubleButton.disabled = score < upgradeDoublePrice;
}

// Обработчик кликов по монете
coin.addEventListener('click', () => {
  score += coinsPerClick * multiplier; // Учитываем силу клика и множитель
  localStorage.setItem('score', score); // Сохраняем счёт
  updateUI();
});

// Обработчик покупки +1 к монетам за клик
upgradeClickButton.addEventListener('click', () => {
  if (score >= upgradeClickPrice) {
    score -= upgradeClickPrice; // Списываем монеты
    coinsPerClick += 1; // Увеличиваем монеты за клик
    upgradeClickPrice = Math.ceil(upgradeClickPrice * 1.5); // Увеличиваем стоимость
    localStorage.setItem('score', score);
    localStorage.setItem('coinsPerClick', coinsPerClick);
    localStorage.setItem('upgradeClickPrice', upgradeClickPrice);
    updateUI();
  }
});

// Обработчик покупки удвоения монет за клик
upgradeDoubleButton.addEventListener('click', () => {
  if (score >= upgradeDoublePrice) {
    score -= upgradeDoublePrice; // Списываем монеты
    multiplier *= 2; // Удваиваем множитель
    upgradeDoublePrice = Math.ceil(upgradeDoublePrice * 1.5); // Увеличиваем стоимость
    localStorage.setItem('score', score);
    localStorage.setItem('multiplier', multiplier);
    localStorage.setItem('upgradeDoublePrice', upgradeDoublePrice);
    updateUI();
  }
});

// Начальная настройка
updateUI();