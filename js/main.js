'use sctrick';

// Получаем все элементы
const adv = document.querySelector('.adv'),
    book = document.querySelectorAll('.book'),
    bodyStyle = document.querySelector('body'),
    bookTitle = document.querySelectorAll( 'h2 > a' ),
    book2 = book[0].querySelectorAll('ul > li'),
    book5 = book[5].querySelectorAll('ul > li'),
    book6 = book[2].querySelectorAll('ul > li');

// Удаляем рекламу
adv.remove();

// Восстанавливаем порядок книг
book[0].before( book[1] );
book[3].before( book[4] );
book[2].before( book[4] );
book[2].before( book[3] );
book[2].before( book[5] );

// Меняю фоновое изображение
bodyStyle.style = "background-image: url('./image/you-dont-know-js.jpg')";

// Исправлем заголовок
bookTitle[4].textContent = 'Книга 3. this и Прототипы Объектов';

// восстанавливаем порядок глав 2 книги
book2[9].after(book2[2]);
book2[3].after(book2[6]);
book2[6].after(book2[8]);

// восстанавливаем порядок глав 5 книги
book5[1].after(book5[9]);
book5[9].after(book5[3]);
book5[4].after(book5[2]);
book5[8].before(book5[5]);

// Добавляем новый элемент
const newElem = document.createElement('li');
newElem.textContent = 'Глава 8: За пределами ES6';

book6[8].after(newElem);
