/* Good job, il te manque quelques ; par contre.  */

/**
 * @type {HTMLElement}
 */
const main = document.querySelector('main');
/**
 * @type {HTMLButtonElement}
 */
const toggle = document.createElement('button');
toggle.textContent ='Affichage : Liste'
toggle.classList.add('btn_toggle')
main.appendChild(toggle);

toggle.addEventListener('click' , ()  => {
  if (container.classList.contains('container_card')) {
      container.classList.toggle('container_card');
      toggle.textContent = 'Affichage : Carte';
      container.classList.toggle('container_list');
  } else {
      container.classList.toggle('container_list');
      toggle.textContent = 'Affichage : Liste';
      container.classList.toggle('container_card');
  }
  cards.forEach((card) => {
      card.classList.toggle('card_list');
  })
})