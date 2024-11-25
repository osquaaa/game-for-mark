// Элемент монеты и отображения счёта
const coin = document.getElementById('coin');
const scoreDisplay = document.getElementById('score');

// Получение сохранённого счёта из Local Storage
let score = parseInt(localStorage.getItem('score')) || 0;
scoreDisplay.textContent = `Score: ${score}`;

// Обработчик кликов по монете
coin.addEventListener('click', () => {
  score += 1; // Увеличиваем счёт
  scoreDisplay.textContent = `Score: ${score}`; // Обновляем отображение
  localStorage.setItem('score', score); // Сохраняем в Local Storage
});

// Для сброса счёта можно добавить (опционально):
// localStorage.removeItem('score');