// Начальные параметры
let playerHealth = 100;
let enemyHealth = 100;

// Функция обновления полосок здоровья
function updateHealthBars() {
  document.getElementById('playerHealth').style.width = playerHealth + '%';
  document.getElementById('enemyHealth').style.width = enemyHealth + '%';
}

// Функция атаки
function attack() {
  if (playerHealth > 0 && enemyHealth > 0) {
    const playerDamage = Math.floor(Math.random() * 10) + 5; // Урон игрока
    const enemyDamage = Math.floor(Math.random() * 10) + 5; // Урон врага

    // Уменьшение здоровья
    enemyHealth = Math.max(0, enemyHealth - playerDamage);
    playerHealth = Math.max(0, playerHealth - enemyDamage);

    // Обновление здоровья на экране
    updateHealthBars();

    // Проверка победы
    if (enemyHealth === 0) {
      document.getElementById('result').textContent = 'You Win! 🎉';
    } else if (playerHealth === 0) {
      document.getElementById('result').textContent = 'You Lose! 💀';
    }
  }
}

// Сброс игры
function resetGame() {
  playerHealth = 100;
  enemyHealth = 100;
  updateHealthBars();
  document.getElementById('result').textContent = '';
}

// Начальная настройка полосок здоровья
updateHealthBars();