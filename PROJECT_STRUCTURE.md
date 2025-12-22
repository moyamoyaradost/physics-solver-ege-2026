# Структура проекта

## Полный список файлов

### 📄 Основные файлы
- `index.html` - Модуль навигации (точка входа в приложение)
- `common.css` - Модуль общих стилей
- `canvas-utils.js` - Модуль утилит для работы с Canvas API
- `package.json` - Метаданные проекта

### 📚 Документация

#### Основная документация
- `README.md` - Общее описание проекта и инструкции
- `TECHNICAL_DOCUMENTATION.md` - Техническая документация (назначение, требования, архитектура)
- `MODULE_DESCRIPTION.md` - Подробное описание всех модулей
- `ARCHITECTURE.md` - Архитектура системы и принципы проектирования
- `PROJECT_REPORT.md` - Отчет о выполнении практической работы

#### Дополнительная документация
- `ANALYSIS.md` - Анализ качества кода
- `CHANGELOG.md` - История изменений
- `REFACTORING_GUIDE.md` - Руководство по рефакторингу
- `PROJECT_STRUCTURE.md` - Этот файл (структура проекта)

### 📦 Модули задач (20 модулей)

#### Кинематика и динамика
1. `1.physics_graph_solution.html` - График скорости
2. `2.springs_system_solution.html` - Система с пружинами
3. `3.sled_motion_solution.html` - Равномерное движение саней
4. `4.spring_oscillations_solution.html` - Гармонические колебания
5. `5.bridge_motion_solution.html` - Движение по выпуклому мосту
6. `6.projectile_graphs_corrected.html` - Бросок под углом

#### Термодинамика
7. `7.ideal_gas_solution.html` - Идеальный газ (pV-диаграмма)
8. `8.gas_work_solution.html` - Работа газа на pV-диаграмме
9. `9helium_piston_solution.html` - Гелий под поршнем
10. `10saturated_vapor_solution.html` - Насыщенный пар

#### Электромагнетизм
11. `11coulomb_law_solution.html` - Закон Кулона
12. `12rotating_frame_solution_1.html` - Вращающаяся рамка в магнитном поле
13. `13mirror_queen_solution.html` - Зеркало и королева (оптика)
14. `14lc_circuit_solution.html` - Колебательный контур LC
15. `15.wire_replacement_solution.html` - Замена провода

#### Современная физика
16. `task16_nuclear_reaction.html` - Ядерная реакция
17. `task17_photoeffect.html` - Фотоэффект
18. `task18_true_statements.html` - Верные утверждения
19. `task19_manometer.html` - Манометр
20. `task20_capacitor_experiment_1.html` - Эксперимент с конденсатором

### 🔧 Служебные файлы
- `.gitignore` - Игнорируемые файлы для Git

---

## Статистика

- **Всего файлов:** 33
- **HTML модулей:** 21 (1 навигация + 20 задач)
- **CSS модулей:** 1
- **JavaScript модулей:** 1
- **Документация:** 8 файлов
- **Служебные:** 2 файла

---

## Размер проекта

- **Общий объем кода:** ~12000 строк
- **Документация:** ~5000 строк
- **Общий размер:** ~5 МБ

---

## Зависимости между модулями

```
index.html
    ↓ (ссылается на)
task_N.html
    ↓ (использует)
    ├── common.css
    └── canvas-utils.js
```

---

**Дата создания:** 2026  
**Версия:** 2.0

