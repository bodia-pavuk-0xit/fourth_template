const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', () => {
  const inputLength = phoneInput.value.length;

  // Автоматичні пропуски відповідно до шаблону
  if (inputLength === 4 && !phoneInput.value.includes(' ')) {
    phoneInput.value += ' ';
  }
  if (inputLength === 7 && !phoneInput.value.includes(' ', 5)) {
    phoneInput.value += ' ';
  }
  if (inputLength === 10 && !phoneInput.value.includes(' ', 8)) {
    phoneInput.value += ' ';
  }
  if (inputLength === 13 && !phoneInput.value.includes(' ', 11)) {
    phoneInput.value += ' ';
  }

  // Обмеження на введення згідно шаблону
  if (inputLength >= 16) {
    phoneInput.value = phoneInput.value.slice(0, 17);
  } else if (inputLength === 17 && !/\+38 \d{3} \d{2} \d{2} \d{3}/.test(phoneInput.value)) {
    phoneInput.value = '+38 ' + phoneInput.value.slice(4, 7) + ' ' + phoneInput.value.slice(8, 10) + ' ' + phoneInput.value.slice(11, 13) + ' ' + phoneInput.value.slice(14);
  }
});

// Блокування видалення символів з пробілами та символом "+38"
phoneInput.addEventListener('keydown', (e) => {
  if (e.key === 'Backspace' && (phoneInput.selectionStart <= 4 || phoneInput.value.slice(phoneInput.selectionStart - 4, phoneInput.selectionStart) === ' +38')) {
    e.preventDefault();
  }
});

// Перевірка на фокус
phoneInput.addEventListener('focus', () => {
  if (phoneInput.value === '' || phoneInput.value === '+') {
    phoneInput.value = '+38 ';
  }
});


