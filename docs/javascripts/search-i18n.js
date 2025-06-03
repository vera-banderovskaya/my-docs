document$.subscribe(function() {
  const searchMessages = {
    'placeholder': 'Поиск...',
    'results': {
      'placeholder': 'Начните вводить запрос...',
      'no_results': 'Ничего не найдено',
      'one_result': 'Найден 1 результат',
      'multiple_results': 'Найдено {n} результатов'
    }
  };

  // Переопределяем сообщения
  if (typeof config !== 'undefined') {
    config.search = Object.assign({}, config.search, {
      messages: searchMessages
    });
  }
});