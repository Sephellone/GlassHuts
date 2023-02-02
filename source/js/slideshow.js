import { getTwoDigitsNumber } from './util.js';

const initSlideshows = () => {
  const slideshows = document.querySelectorAll('.slideshow');
  if (slideshows && slideshows.length) {
    slideshows.forEach(slideshow => {
      const slideshowImages = slideshow.querySelectorAll('.slideshow__image');
      const paginationMax = slideshow.querySelector('.pagination__max');
      const paginationSlider = slideshow.querySelector('.pagination__slider');
      const nextButton = slideshow.querySelector('.slideshow__button--next');
      const prevButton = slideshow.querySelector('.slideshow__button--prev');

      const amountOfPictures = slideshowImages.length;
      paginationMax.textContent = getTwoDigitsNumber(amountOfPictures);
      paginationSlider.setAttribute('style', `width:${100/amountOfPictures}%; left:0;`);

      let currentImage = 0;
      let paginationLeft = 0;

      prevButton.disabled = true;
      if (amountOfPictures === 1) {
        nextButton.disabled = true;
      }

      const onNextButtonClick = () => {
        currentImage++;
        prevButton.disabled = false;
        slideshowImages.forEach(image => {
          image.classList.add('slideshow__image--hidden');
        });
        slideshowImages[currentImage].classList.remove('slideshow__image--hidden');
        paginationLeft = currentImage * 100/amountOfPictures;
        paginationSlider.setAttribute('style', `width:${100/amountOfPictures}%; left:${paginationLeft}%`);

        if (currentImage + 1 === amountOfPictures) {
          nextButton.disabled = true;
        }
      };

      const onPrevButtonClick = () => {
        currentImage--
        nextButton.disabled = false;
        slideshowImages.forEach(image => {
          image.classList.add('slideshow__image--hidden');
        });
        slideshowImages[currentImage].classList.remove('slideshow__image--hidden');
        paginationLeft = currentImage * 100/amountOfPictures;
        paginationSlider.setAttribute('style', `width:${100/amountOfPictures}%; left:${paginationLeft}%`);

        if (currentImage === 0) {
          prevButton.disabled = true;
        }
      }

      nextButton.addEventListener('click', onNextButtonClick);
      prevButton.addEventListener('click', onPrevButtonClick);
        });
  };
}

export {initSlideshows};
