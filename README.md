# HW4

В данoму проекті використовувались SCSS, JS, HTML та бібліотека Swiper.js.

Даний проект було зроблено в якості домашньої роботи для Sigma Software.

Реалізований проект має:
- 5-ти секундну анімацію при завантаженні сторінки;
- header, що має у собі якірні посилання на деякі блоки сторінки та є sticky, під header-ом є прогрес-бар, що демонструє на якому етапі перегляду сторінки ми є;
- секцію home;
- секцію What we do, де за допомогою JSON+JS реалізована фільтрація проектів. JSON було взято з сайту https://jsonplaceholder.typicode.com/;
- секцію About us;
- секцію 3000+ Completed work;
- секцію 20 Years Of Successful Working The Market;
- секцію Testimonials, де за допомогою JSON+JS реалізоване підтягування фото користувачів та інформації для даного блоку. Підтягування відбувалося з сайту https://randomuser.me/, також було зроблено карусель для перемикання відгуків користувачів. Карусель створювалась за допомогою бібліотеки Swiper.js.
- секцію LatestNews, що має анімацію плавного появлення;
- секцію з формою, куди потрібно записати ім'я, прізвище та email. Якщо ім'я користувача збігається з ім'ям Daria, то на весь екран виходе привітальна анімація. Дані з форми зверігаються в localStorage. У формі передбачена валідація.
- секцію Footer. Під нею знаходиться секція, де рік підтягується з системної дати.
- функцію, що спрацьовує через хвилину бездіяльності користувача, якщо відповідь від нього не отримана, то вікно закривається (вікно не закривається, через заборону)
- взаємодію з публічним API https://openweathermap.org/, що відображено у секції Footer.
