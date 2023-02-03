import { initAccordeon} from './accordeon.js';
import { initBurgerButton } from './burger-menu.js';
import { initSlideshows } from './slideshow.js';
import {initTabs} from './tabs.js';
import {initServicesCheckboxes, initCouponsButton,} from './services.js';
import {initGuestsButtons, initDateSelection, initBookButton} from './booking-form.js';
import {initPaymentForm} from './payment.js';

const faqItems = document.querySelectorAll('.faq__item');
const bookingOptions = document.querySelectorAll('.service-card');

initBurgerButton();

initAccordeon(faqItems, 'faq__item--closed', 'faq__item--open');
initAccordeon(bookingOptions, 'service-card--closed', 'service-card--opened');

initTabs();
initSlideshows();
initServicesCheckboxes();
initGuestsButtons();
initCouponsButton();
initDateSelection();
initBookButton();
initPaymentForm();