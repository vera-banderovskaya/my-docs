document.addEventListener("DOMContentLoaded", function() {
  // Функция для обновления текста поиска
  function updateSearchPlaceholder() {
    // Ищем поле поиска по классу (более специфично)
    const searchInput = document.querySelector('input.md-search__input');
    
    if (searchInput) {
      console.log("Найдено поле поиска, устанавливаем 'Поиск'");
      searchInput.placeholder = "Поиск";
      searchInput.setAttribute("aria-label", "Поиск");
    } else {
      console.log("Поле поиска не найдено");
    }
  }

  // Вызываем сразу при загрузке
  updateSearchPlaceholder();
  
  // Добавляем задержку на случай динамической загрузки
  setTimeout(updateSearchPlaceholder, 500);
  
  // Наблюдатель за изменениями DOM
  const observer = new MutationObserver(updateSearchPlaceholder);
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Переопределяем сообщения поиска
  if (typeof window.config !== 'undefined' && window.config.search) {
    window.config.search.messages = {
      placeholder: "Поиск",
      results: {
        placeholder: "Введите запрос...",
        no_results: "Ничего не найдено",
        one_result: "Найден 1 результат",
        multiple_results: "Найдено {n} результатов"
      }
    };
  }
});