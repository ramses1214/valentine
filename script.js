// Получаем ссылки на кнопку и карточку валентинки
var button = document.getElementById("valentine-button");
var card = document.getElementById("valentine-card");

// Добавляем обработчик события на кнопку
button.addEventListener("click", function () {
  // Показываем карточку валентинки
  card.style.display = "block";
});
