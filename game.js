// Элементы
const coin = document.getElementById('coin');
const scoreDisplay = document.getElementById('score');
const upgradeClickButton = document.getElementById('upgrade-click');
const upgradeDoubleButton = document.getElementById('upgrade-double');
const userList = document.getElementById('user-list');

// Начальные значения
let score = parseInt(localStorage.getItem('score')) || 0;
let coinsPerClick = parseInt(localStorage.getItem('coinsPerClick')) || 1;
let multiplier = parseInt(localStorage.getItem('multiplier')) || 1;
let upgradeClickPrice = parseInt(localStorage.getItem('upgradeClickPrice')) || 100;
let upgradeDoublePrice = parseInt(localStorage.getItem('upgradeDoublePrice')) || 10000;

// Получение имени пользователя
let username = localStorage.getItem('username') || prompt('Enter your username:');
localStorage.setItem('username', username);

// Функция обновления интерфейса
function updateUI() {
  scoreDisplay.textContent = `Score: ${score}`;
  upgradeClickButton.textContent = `Buy +1 Click (${upgradeClickPrice} coins)`;
  upgradeDoubleButton.textContent = `Buy Double Click (${upgradeDoublePrice} coins)`;
  upgradeClickButton.disabled = score < upgradeClickPrice;
  upgradeDoubleButton.disabled = score < upgradeDoublePrice;
}

// Обновление топа пользователей
function updateTopUsers() {
  let topUsers = JSON.parse(localStorage.getItem('topUsers')) || [];
  topUsers = topUsers.sort((a, b) => b.score - a.score).slice(0, 10);

  userList.innerHTML = '';
  topUsers.forEach((user, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${index + 1}. ${user.username}: ${user.score} coins`;
    userList.appendChild(listItem);
  });
}

// Сохранение в топ пользователей
function saveToTopUsers() {
  let topUsers = JSON.parse(localStorage.getItem('topUsers')) || [];
  const existingUser = topUsers.find((user) => user.username === username);

  if (existingUser) {
    existingUser.score = Math.max(existingUser.score, score);
  } else {
    topUsers.push({ username, score });
  }

  localStorage.setItem('topUsers', JSON.stringify(topUsers));
  updateTopUsers();
}

// Обработчик кликов по монете
coin.addEventListener('click', () => {
  score += coinsPerClick * multiplier; // Учитываем силу клика и множитель
  localStorage.setItem('score', score); // Сохраняем счёт
  saveToTopUsers();
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
    saveToTopUsers();
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
    saveToTopUsers();
    updateUI();
  }
});

// Начальная настройка
updateUI();
updateTopUsers();