# Руководство по переработке файлов

## ✅ Обновленные файлы

1. ✅ `1.physics_graph_solution.html` - обновлен
2. ✅ `3.sled_motion_solution.html` - обновлен  
3. ✅ `6.projectile_graphs_corrected.html` - обновлен

## 📋 Шаблон для обновления остальных файлов

### Шаг 1: Заменить стили

**Найти:**
```html
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Segoe UI', system-ui, sans-serif;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        min-height: 100vh;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .container {
        background: white;
        border-radius: 20px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        max-width: 1200px;
        width: 100%;
        overflow: hidden;
    }
    
    .header { ... }
    .content { ... }
    .solution-section { ... }
    .step { ... }
    .formula-box { ... }
    .answer-box { ... }
    .physics-insight { ... }
    .info-cards { ... }
    /* и т.д. - все общие стили */
</style>
```

**Заменить на:**
```html
<link rel="stylesheet" href="common.css">
<style>
    /* Специфичные стили для этой задачи */
    .container {
        max-width: 1200px; /* если отличается */
    }
    
    /* Только уникальные стили, которых нет в common.css */
</style>
```

### Шаг 2: Обновить JavaScript

**Найти:**
```javascript
const canvas = document.getElementById('canvasId');
const ctx = canvas.getContext('2d');
```

**Заменить на:**
```javascript
<script src="canvas-utils.js"></script>
<script>
    const canvas = getCanvas('canvasId');
    if (!canvas) {
        console.error('Canvas не найден');
        throw new Error('Canvas не найден');
    }
    const ctx = getContext('canvasId');
    if (!ctx) {
        console.error('Контекст не получен');
        throw new Error('Контекст не получен');
    }
```

### Шаг 3: Использовать безопасные функции

**Вместо:**
```javascript
const point = points.find(p => p.t === 10);
// использование point без проверки
```

**Использовать:**
```javascript
const point = safeFind(points, p => p.t === 10, 'Точка не найдена');
if (!point) return;
```

**Вместо:**
```javascript
const result = a / b; // может быть деление на ноль
```

**Использовать:**
```javascript
const result = safeDivide(a, b, 0); // безопасное деление
```

## 📝 Список файлов для обновления

- [ ] `2.springs_system_solution.html`
- [ ] `4.spring_oscillations_solution.html`
- [ ] `5.bridge_motion_solution.html`
- [ ] `7.ideal_gas_solution.html`
- [ ] `8.gas_work_solution.html`
- [ ] `9helium_piston_solution.html`
- [ ] `10saturated_vapor_solution.html`
- [ ] `11coulomb_law_solution.html`
- [ ] `12rotating_frame_solution_1.html`
- [ ] `13mirror_queen_solution.html`
- [ ] `14lc_circuit_solution.html`
- [ ] `15.wire_replacement_solution.html`
- [ ] `task16_nuclear_reaction.html`
- [ ] `task17_photoeffect.html`
- [ ] `task18_true_statements.html`
- [ ] `task19_manometer.html`
- [ ] `task20_capacitor_experiment_1.html`

## ⚡ Быстрая проверка

После обновления каждого файла проверьте:
1. ✅ Файл открывается в браузере
2. ✅ Canvas отображается корректно
3. ✅ Анимации работают
4. ✅ Нет ошибок в консоли браузера (F12)

## 🎯 Преимущества после обновления

- ✅ Меньше дублирования кода
- ✅ Легче поддерживать
- ✅ Безопаснее (защита от ошибок)
- ✅ Меньше размер файлов
- ✅ Единый стиль

