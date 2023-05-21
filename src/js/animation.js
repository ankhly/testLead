const accordionItems = document.querySelectorAll('.name-item');
const accordionContent = document.querySelectorAll('.item__content');
let isHidden = true;
export const animItems = () => {
  const animItems = document.querySelectorAll('.anim-item');
  const animDecor = document.querySelector('.anim-decor');
  const animDecorRight = document.querySelector('.anim-decor_right');
  let delay = 0;
  for (let i = 0; i < animItems.length; i++) {
    animItems[i].style.transitionDelay = delay + 's';
    animItems[i].style.opacity = 1;
    animItems[i].style.transform = 'translateY(0)';
    delay += 0.3;
  }
  animDecorRight.style.opacity = 1;
  animDecorRight.style.transform = 'translateX(0) translateY(0)';
  animDecor.style.opacity = 1;
  animDecor.style.transform = 'translateX(0) translateY(0)';
}

export const scrollTo = (e) => {
  const otherBtn = document.querySelector('.forma__other');
  const otherSection = document.querySelector('.events');
  const eventsTitle = document.querySelector('.events__title');
  if (e.target === otherBtn) {
    eventsTitle.style.transform = 'translateY(-80px)';
    if (isHidden) {
      otherBtn.classList.add('upend')
      otherSection.style.display = 'block'
      setTimeout(function () {
        otherSection.style.opacity = '1';
        eventsTitle.style.transform = 'translateY(0)';
      }, 300);
      otherSection.scrollIntoView({ behavior: 'smooth' });
      isHidden = false;
    } else {
      otherBtn.classList.remove('upend')
      otherSection.style.display = 'none'
      otherSection.style.opacity = '0';
      isHidden = true;
    }
  }
}

export const animAccordion = (e) => {
  for (let i = 0; i < accordionItems.length; i++) {
    if (e.target === accordionItems[i]) {
      for (let j = 0; j < accordionContent.length; j++) {
        if (accordionContent[j].classList.contains('active')) {
          accordionContent[j].classList.remove('active');
          accordionContent[j].style.maxWidth = '0';
        }
      }
      accordionContent[i].classList.add('active');
      accordionContent[i].style.maxWidth = accordionContent[i].scrollWidth + 'px';
    }
  }
}