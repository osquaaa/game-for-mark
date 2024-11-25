// Элемент монеты и отображения счёта
const coin = document.getElementById('coin');
const scoreDisplay = document.getElementById('score');

// Получение сохранённого счёта из Local Storage
let score = parseInt(localStorage.getItem('score')) || 0;
scoreDisplay.textContent = `Счет: ${score}`;

// Обработчик кликов по монете
coin.addEventListener('click', () => {
  score += 173737373737374848477373737736266266625374848747363635384498838838489494857849938577488499847474774940387474782883474784849938474748484848484884848747574849948748595949484778484948362626262737848485855983737373626262; // Увеличиваем счёт
  scoreDisplay.textContent = `Счет: ${score}`; // Обновляем отображение
  localStorage.setItem('score', score); // Сохраняем в Local Storage
});

// Для сброса счёта можно добавить (опционально):
// localStorage.removeItem('score');