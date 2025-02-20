// Простая интерактивность для кнопки
document.querySelector('.buy-button').addEventListener('click', function() {
    alert('Функция покупки токена пока в разработке!');
});

// Анимация появления элементов (опционально, можно убрать или доработать)
window.addEventListener('load', function() {
    const heroElements = document.querySelectorAll('.hero *');
    heroElements.forEach((element, index) => {
        element.style.opacity = 0;
        setTimeout(() => {
            element.style.transition = 'opacity 0.5s';
            element.style.opacity = 1;
        }, index * 200);
    });
});
