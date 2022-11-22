/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Autoplay, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swiper')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Autoplay ],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 150,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			/*
			// Эффекты
			effect: 'fade',
			
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты
			
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 50,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 50,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 150,
				},
				
			},
			
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.swiper-face')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper-face', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 5,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			/*
			// Эффекты
			effect: 'fade',
			
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты
			
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 0,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 0,
				},
				1279: {
					slidesPerView: 5,
					spaceBetween: 0,
				},
			},
			
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.swiper-participants')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper-participants', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 50,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			/*
			// Эффекты
			effect: 'fade',
			
			*/

			// Пагинация
			
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты
			
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 50,
					autoHeight: true,
				},
				480: {
					slidesPerView: 1,
					spaceBetween: 50,
					autoHeight: true,
				},
				768: {
					slidesPerView: 1,
					spaceBetween: 50,
				},
				992: {
					slidesPerView: 1,
					spaceBetween: 50,
				},
				1279: {
					slidesPerView: 1,
					spaceBetween: 50,
				},
			},
			
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.swiper-photo')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper-photo', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Autoplay ],
			observer: true,
			observeParents: true,
			slidesPerView: 10,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			/*
			// Эффекты
			effect: 'fade',
			
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты
			
			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 0,
				},
				380: {
					slidesPerView: 3,
					spaceBetween: 0,
				},
				550: {
					slidesPerView: 4,
					spaceBetween: 0,
				},
				950: {
					slidesPerView: 5,
					spaceBetween: 0,
				},
				
				1150: {
					slidesPerView: 6,
					spaceBetween: 0,
				},
				1920: {
					slidesPerView: 7,
					spaceBetween: 0,
				},
				2400: {
					slidesPerView: 10,
					spaceBetween: 0,
				},
				
			},
			
			// События
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	// initSlidersScroll();
});