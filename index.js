const express = require('express');
const path = require('path');

const app = express();

// Указываем путь к папке с HTML-файлами
app.use(express.static(path.join(__dirname)));

// Обработка GET-запроса на корневой URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index2.html'));
});

// Запуск сервера на порту 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
