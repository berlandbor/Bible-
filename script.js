


// Получаем необходимые элементы
const modal = document.getElementById('myModal');
const modalButton = document.querySelector('button');
const closeButton = document.getElementById('closeModal');

// Обработчик клика по кнопке открытия модального окна
modalButton.addEventListener('click', openModal);

// Обработчик клика по кнопке закрытия модального окна
closeButton.addEventListener('click', closeModal);

// Закрытие модального окна при клике на оверлей
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    closeModal();
  }
});

// Закрытие модального окна при нажатии клавиши Esc
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// Функция открытия модального окна
function openModal() {
  modal.style.display = 'block';
  modal.style.transform = 'scale(1)';
}

// Функция закрытия модального окна с анимацией
function closeModal() {
  modal.style.transform = 'scale(0)';
  setTimeout(function() {
    modal.style.display = 'none';
  }, 300);
}