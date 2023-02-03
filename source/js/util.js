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

const calcDaysBetweenDates = (date1, date2) => {
  const milliseconds = date2.getTime() - date1.getTime();
  const difference = Math.ceil(milliseconds/(1000 * 60 * 60 * 24));

  return difference;
};


export {toggleClasses, getTwoDigitsNumber, calcDaysBetweenDates};
