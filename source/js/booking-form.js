import { calcDaysBetweenDates } from './util.js';
import { updateTotal } from './services.js';


const ACCOMODATION_PRICE = 3200;
const totalList = document.querySelector('.total__details');
const totalSum = document.querySelector('#final-amount');
const buttonLess = document.querySelector('#less-guests');
const buttonMore =  document.querySelector('#more-guests');
const guests = document.querySelector('#guests');

const checkinField = document.querySelector('#checkin');
const checkoutField = document.querySelector('#checkout');
const nightsCountElement = document.querySelector('#nights');
const accomodationPriceElement = document.querySelector('#nightsPrice');

const bookButton = document.querySelector('.total__submit-button');

// Actions for buttons around guests number field
const initGuestsButtons = () => {
  if (buttonLess && buttonMore && guests) {
    let guestsValue = + guests.value;

    if (guestsValue <= 1) {
      buttonLess.disabled = true;
    }

    const onLessButtonClick = () => {
      buttonMore.disabled = false;
      guestsValue--;
      guests.value = guestsValue.toString();
      if (guestsValue === 1) {
        buttonLess.disabled = true;
      }
    }

    const onMoreButtonClick = () => {
      guestsValue++;
      guests.value = guestsValue.toString();
      buttonLess.disabled = false;
      if (guestsValue >= 3) {
        buttonMore.disabled =true;
      }
    }

    buttonLess.addEventListener('click', onLessButtonClick);
    buttonMore.addEventListener('click', onMoreButtonClick);
  };
};

// Price recalculation according to selected dates
const initDateSelection = () => {
  if (checkinField && checkoutField && nightsCountElement && accomodationPriceElement) {
    const checkFieldsValues = () => {
      if (checkinField.value && checkoutField.value) {
        const checkin = new Date(checkinField.value);
        const checkout = new Date(checkoutField.value);
        if (checkin.getTime() < checkout.getTime()) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    };

    const onFieldChange = () => {
      if (checkFieldsValues()) {
        const checkinDate = new Date(checkinField.value);
        const checkoutDate = new Date(checkoutField.value);
        const days = calcDaysBetweenDates(checkinDate, checkoutDate);
        nightsCountElement.textContent = days;
        accomodationPriceElement.textContent = days * ACCOMODATION_PRICE;
        updateTotal(totalList, totalSum);
      }
    }

    [checkinField, checkoutField].forEach(field =>
      field.addEventListener('change', () => onFieldChange()));
  };
};

// Action on 'book' button click (saving settings and redirrecting to payment page);
const initBookButton = () => {
  if (bookButton) {
    const checkboxes = document.querySelectorAll('.checkbox-control__input');
    const getCheckedCheckboxes = () => {
      const checkedCheckboxes = [];
      checkboxes.forEach(checkbox => {
        if(checkbox.checked) {
          checkedCheckboxes.push(checkbox.name);
        }
      })
      return checkedCheckboxes;
    }

    const checkDiscount = () => {
      const discountElement = document.querySelector('.total__element--discount')
      let discount = 0;
      if (discountElement && !discountElement.classList.contains('total__element--hidden')) {
        discount = discountElement.querySelector('#discount').textContent;
      }
      return discount;
    }

    const onBookButtonClick = (evt) => {
      evt.preventDefault();
      if (checkinField.value && checkoutField.value ) {
        const checkin = new Date(checkinField.value);
        const checkout = new Date(checkoutField.value);
          if (checkin.getTime() < checkout.getTime()) {
            sessionStorage.servicesCheckboxes = getCheckedCheckboxes();
            sessionStorage.discount = checkDiscount();
            sessionStorage.checkin = checkinField.value;
            sessionStorage.checkout = checkoutField.value;
            sessionStorage.guests = guests.value;
            sessionStorage.total = totalSum.textContent;
            sessionStorage.nights = nightsCountElement.textContent;
            sessionStorage.accomodation = accomodationPriceElement.textContent;
            console.log(sessionStorage);
            window.location = evt.currentTarget.href;
          } else {
            alert('You can`t checkout before you check in :) ')
          }
      } else {
        alert('please select check in and check out dates');
      }
    }

    bookButton.addEventListener('click', onBookButtonClick)
  }
};

export {initGuestsButtons, initDateSelection, initBookButton};
