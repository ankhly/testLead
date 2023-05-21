import './date'
import './forma'
import { closePopup } from './forma'
import { animItems, scrollTo, animAccordion } from './animation'

const eventClick = (e) => {
  closePopup(e)
  animAccordion(e)
  scrollTo(e)
}

const eventLoad = () => {
  animItems()
}

document.addEventListener('click', eventClick);
window.addEventListener('load', eventLoad)