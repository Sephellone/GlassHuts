import { toggleClasses } from './util.js';


const initAccordeon = (elements, closedClass, openClass) => {
  if (elements && elements.length) {
    elements.forEach((item) => {
      const accordeonToggler = item.querySelector('.accordeon-toggler');
      accordeonToggler?.addEventListener('click', () => {
        toggleClasses(item, closedClass, openClass);
      });
    })
  }
};


export {initAccordeon};
