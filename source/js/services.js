const detectCheckedCheckboxes = (checkboxlist, servicesList) => {
  checkboxlist.forEach(checkbox => {
    const servicesElement = servicesList.querySelector(`[data-option=${checkbox.name}]`)
    if (checkbox.checked) {
      servicesElement.classList.remove('total__element--hidden');
    } else {
      servicesElement.classList.add('total__element--hidden');
    };
  })
}

const onCheckboxChange = (event, list) => {
  const option = event.target.name;
  const listElement = list.querySelector(`[data-option=${option}]`);
  if (event.target.checked) {
    listElement.classList.remove('total__element--hidden');

  } else {
    listElement.classList.add('total__element--hidden');
  };
};

const updateTotal = (list, totalElement) => {
  let total = 0;
  let discount = 0;
  const shownDetails = list.querySelectorAll('.total__element:not(.total__element--hidden):not(.total__element--discount)');
  const discountElement = list.querySelector('.total__element--discount');

  if (!discountElement.classList.contains('total__element--hidden')) {
    shownDetails.forEach(element => {
      const sum = + element.querySelector('.total__sum-number').textContent;
      total += sum;
    });
    discount = Math.ceil(- total * 0.1);
    const discountAmountElement = discountElement.querySelector('#discount');
    discountAmountElement.textContent = discount;
    totalElement.textContent = total + discount;
  } else {
    shownDetails.forEach(element => {
      const sum = + element.querySelector('.total__sum-number').textContent;
      total += sum;
    });
    totalElement.textContent = total;
  }
}

// Relation between checkboxes and elements in 'total' box

const checkboxes = document.querySelectorAll('.checkbox-control__input');
const totalList = document.querySelector('.total__details');
const totalSum = document.querySelector('#final-amount');

const initServicesCheckboxes = () => {
  if (checkboxes && checkboxes.length && totalList && totalSum) {
    detectCheckedCheckboxes(checkboxes, totalList);
    updateTotal(totalList, totalSum);

    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', (event) => {
        onCheckboxChange(event, totalList);
        updateTotal(totalList, totalSum);
      });
    })
  };
}

// Functionality of the coupon field
const COUPONS = ['MINUS10', 'DISCOUNT', 'QWERTY', 'TEST', 'LOL'];

const checkDiscountElementStatus = (element, button, field) => {
  if (element.classList.contains('total__element--hidden')) {
    button.disabled = false;
    field.disabled = false;
  } else {
    button.disabled = true;
    field.disabled = true;
  }
};

const initCouponsButton = () => {
  const couponButton = document.querySelector('.total__coupon-button');
  const couponField = document.querySelector('#coupon');
  const discountElement = document.querySelector('.total__element--discount');

  if (couponButton && couponField && discountElement && totalList && totalSum) {
    const onCouponButtonClick = () => {
      if (COUPONS.includes(couponField.value)) {
        discountElement.classList.remove('total__element--hidden');
        couponField.value = '';
        updateTotal(totalList, totalSum);
      } else {
        couponField.value = 'nope';
        setTimeout(() => {
          couponField.value = '';
        }, 1000);
      }
      checkDiscountElementStatus(discountElement, couponButton, couponField);
    }
    couponButton.addEventListener('click', onCouponButtonClick);
  }
};

export {initServicesCheckboxes, updateTotal, initCouponsButton};



