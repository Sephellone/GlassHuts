const pseudoSelectField = document.querySelector('.pseudo-select__main');
const pseudoSelectOptions = document.querySelectorAll('.pseudo-select__option');
const pseudoSelectList = document.querySelector('.pseudo-select__options-list');

const onSelectClick = () => {
  pseudoSelectList.classList.toggle('pseudo-select__options-list--closed');
}

const onOptionClick = (evt) => {
  const flag = evt.target.closest('.pseudo-select__button').innerHTML;
  pseudoSelectField.innerHTML = flag;
  pseudoSelectList.classList.add('pseudo-select__options-list--closed');
}

const initPseudoSelect = () => {
  pseudoSelectField.addEventListener('click', onSelectClick);
  pseudoSelectOptions.forEach(button => {
    button.addEventListener('click', onOptionClick);
  });
}

export {initPseudoSelect};
