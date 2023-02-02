const toggleClasses = (element, closedClass, openClass) => {
  if (element.classList.contains(closedClass)) {
    element.classList.remove(closedClass);
    element.classList.add(openClass);
  } else {
    element.classList.remove(openClass);
    element.classList.add(closedClass);
  }
};

const getTwoDigitsNumber = (number) => {
  let newNumber = number.toString();
  if (number < 10) {
    newNumber = '0' + number;
  }

  return newNumber;
}


export {toggleClasses, getTwoDigitsNumber};
