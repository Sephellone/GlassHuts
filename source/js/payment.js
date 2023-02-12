const paymentForm = document.querySelector('.payment');

const initPaymentForm = () => {
  if(paymentForm) {
    const checkin = sessionStorage.checkin;
    const checkout = sessionStorage.checkout;
    const checkboxes = sessionStorage.servicesCheckboxes.split(',');
    const discount = sessionStorage.discount;
    const guests = sessionStorage.guests;
    const total = sessionStorage.total;
    const nights = sessionStorage.nights;
    const accomodation = sessionStorage.accomodation;

    document.querySelector('#pay-checkin').value = checkin;
    document.querySelector('#pay-checkout').value = checkout;
    document.querySelector('#pay-guests').value = guests;
    document.querySelector('#pay-discount').textContent = discount;
    document.querySelector('#pay-final').textContent = total;
    document.querySelector('#pay-accomodation').textContent = accomodation;
    document.querySelector('#pay-nights').textContent = nights;

    const paymentCheckboxes = paymentForm.querySelectorAll('.payment__checkbox');
    paymentCheckboxes.forEach(checkbox => {
      if(checkboxes.includes(checkbox.name)) {
        checkbox.checked = true;
      }
    })

    checkboxes.forEach(checkbox => {
      document.querySelector(`[data-option=${checkbox}]`).classList.remove('total__element--hidden');
    })

    const discountElement = document.querySelector('.total__element--discount');
    if (discount != 0) {
      discountElement.classList.remove('total__element--hidden');
    }
  }
}

export {initPaymentForm};
