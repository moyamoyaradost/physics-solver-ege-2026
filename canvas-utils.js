/**
 * Модуль утилит для работы с Canvas API
 * 
 * Модуль: canvas-utils.js
 * Назначение: Предоставляет безопасные функции для работы с HTML5 Canvas
 * Версия: 2.0
 * Дата: 2026
 * 
 * Принципы:
 * - Безопасность: все функции проверяют входные данные
 * - Обработка ошибок: логирование проблем в консоль
 * - Переиспользование: функции используются во всех задачах проекта
 * 
 * Использование:
 * <script src="canvas-utils.js"></script>
 * 
 * @module canvas-utils
 * @author [Ваше имя]
 */

/**
 * Безопасное получение элемента Canvas
 * @param {string} id - ID элемента
 * @returns {HTMLCanvasElement|null}
 */
function getCanvas(id) {
    const canvas = document.getElementById(id);
    if (!canvas) {
        console.error(`Canvas с id "${id}" не найден`);
        return null;
    }
    return canvas;
}

/**
 * Безопасное получение контекста 2D
 * @param {string} id - ID элемента Canvas
 * @returns {CanvasRenderingContext2D|null}
 */
function getContext(id) {
    const canvas = getCanvas(id);
    if (!canvas) return null;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error(`Не удалось получить контекст 2D для canvas "${id}"`);
        return null;
    }
    return ctx;
}

/**
 * Очистка Canvas
 * @param {CanvasRenderingContext2D} ctx - Контекст
 * @param {number} width - Ширина
 * @param {number} height - Высота
 */
function clearCanvas(ctx, width, height) {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);
}

/**
 * Рисование стрелки
 * @param {CanvasRenderingContext2D} ctx - Контекст
 * @param {number} x1 - Начало X
 * @param {number} y1 - Начало Y
 * @param {number} x2 - Конец X
 * @param {number} y2 - Конец Y
 * @param {string} color - Цвет
 * @param {number} lineWidth - Толщина линии
 * @param {string} label - Подпись (опционально)
 */
function drawArrow(ctx, x1, y1, x2, y2, color = '#333', lineWidth = 3, label = '') {
    if (!ctx) return;
    
    const dx = x2 - x1;
    const dy = y2 - y1;
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx);
    
    // Линия
    ctx.save();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    
    // Наконечник стрелки
    const arrowLength = 15;
    const arrowWidth = 8;
    ctx.translate(x2, y2);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-arrowLength, -arrowWidth);
    ctx.lineTo(-arrowLength, arrowWidth);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    
    // Подпись
    if (label) {
        ctx.fillStyle = color;
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(label, (x1 + x2) / 2, (y1 + y2) / 2 - 10);
    }
}

/**
 * Рисование координатных осей
 * @param {CanvasRenderingContext2D} ctx - Контекст
 * @param {number} padding - Отступ
 * @param {number} width - Ширина Canvas
 * @param {number} height - Высота Canvas
 * @param {string} xLabel - Подпись оси X
 * @param {string} yLabel - Подпись оси Y
 */
function drawAxes(ctx, padding, width, height, xLabel = 'X', yLabel = 'Y') {
    if (!ctx) return;
    
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.fillStyle = '#333';
    
    // Ось X
    ctx.beginPath();
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(width - padding + 10, height - padding);
    ctx.stroke();
    
    // Стрелка X
    ctx.beginPath();
    ctx.moveTo(width - padding + 10, height - padding);
    ctx.lineTo(width - padding, height - padding - 5);
    ctx.lineTo(width - padding, height - padding + 5);
    ctx.closePath();
    ctx.fill();
    
    // Ось Y
    ctx.beginPath();
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(padding, padding - 10);
    ctx.stroke();
    
    // Стрелка Y
    ctx.beginPath();
    ctx.moveTo(padding, padding - 10);
    ctx.lineTo(padding - 5, padding);
    ctx.lineTo(padding + 5, padding);
    ctx.closePath();
    ctx.fill();
    
    // Подписи осей
    ctx.font = 'bold 16px Arial';
    ctx.fillText(xLabel, width - padding + 20, height - padding + 5);
    ctx.fillText(yLabel, padding - 10, padding - 20);
}

/**
 * Безопасное выполнение анимации с проверкой видимости
 * @param {Function} drawFunction - Функция отрисовки
 * @param {HTMLElement} container - Контейнер для проверки видимости
 * @returns {number} ID анимации
 */
function safeAnimate(drawFunction, container = document.body) {
    let animationId;
    let isVisible = true;
    
    // Проверка видимости через Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            isVisible = entry.isIntersecting;
        });
    });
    
    if (container) {
        observer.observe(container);
    }
    
    function animate() {
        if (isVisible) {
            drawFunction();
        }
        animationId = requestAnimationFrame(animate);
    }
    
    animate();
    return animationId;
}

/**
 * Защита от деления на ноль
 * @param {number} numerator - Числитель
 * @param {number} denominator - Знаменатель
 * @param {number} defaultValue - Значение по умолчанию
 * @returns {number}
 */
function safeDivide(numerator, denominator, defaultValue = 0) {
    if (denominator === 0 || isNaN(denominator) || !isFinite(denominator)) {
        console.warn(`Деление на ноль или невалидное значение. Используется значение по умолчанию: ${defaultValue}`);
        return defaultValue;
    }
    return numerator / denominator;
}

/**
 * Безопасный поиск в массиве с проверкой результата
 * @param {Array} array - Массив
 * @param {Function} predicate - Функция поиска
 * @param {string} errorMessage - Сообщение об ошибке
 * @returns {*|null}
 */
function safeFind(array, predicate, errorMessage = 'Элемент не найден') {
    if (!Array.isArray(array)) {
        console.error('Первый аргумент должен быть массивом');
        return null;
    }
    
    const result = array.find(predicate);
    if (!result) {
        console.warn(errorMessage);
        return null;
    }
    return result;
}

// Экспорт для использования в других файлах
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getCanvas,
        getContext,
        clearCanvas,
        drawArrow,
        drawAxes,
        safeAnimate,
        safeDivide,
        safeFind
    };
}

