document.addEventListener('DOMContentLoaded', function () {
    const fallingContainer = document.querySelector('.falling-elements');
    const audio = new Audio('comp.mp3');
    audio.loop = true;
    audio.volume = 0.5;

    // Запуск музыки после первого взаимодействия с пользователем
    document.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        }
    });

    // Функция для создания падающих элементов
    function createFallingElement(className) {
        const element = document.createElement('div');
        element.classList.add(className);

        // Случайная позиция появления
        const side = Math.random() > 0.5 ? 'left' : 'right';
        if (side === 'left') {
            element.style.left = `${Math.random() * 50}vw`;
        } else {
            element.style.right = `${Math.random() * 50}vw`;
        }
        element.style.top = `${-10}px`;

        // Случайная продолжительность анимации
        const duration = Math.random() * 5 + 5; // от 5 до 10 секунд
        element.style.animationDuration = `${duration}s`;

        fallingContainer.appendChild(element);

        // Удаляем элемент после завершения анимации
        setTimeout(() => {
            fallingContainer.removeChild(element);
        }, duration * 1000);
    }

    // Генерация падающих элементов с увеличенной интенсивностью
    setInterval(() => {
        const classNames = [
            'falling-left1', 'falling-left2', 'falling-left3', 'falling-left4',
            'falling-right1', 'falling-right2', 'falling-right3', 'falling-right4'
        ];
        const className = classNames[Math.floor(Math.random() * classNames.length)];
        createFallingElement(className);
    }, 200); // Увеличенная интенсивность (каждые 200 мс создается новый элемент)

    // Обработка кнопок для всплывающего окна
    const popup = document.getElementById('popup');
    const showPopupBtn = document.getElementById('showPopup');
    const closePopupBtn = document.getElementById('closePopup');

    showPopupBtn.addEventListener('click', function () {
        popup.style.display = 'block';
    });

    closePopupBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });
});
