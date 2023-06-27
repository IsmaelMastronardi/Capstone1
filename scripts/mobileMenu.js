const hamburgerMenu = document.querySelector('#hamburgerMenu');
function deleteMenu() {
  const mobileNabvar = document.querySelector('.mobileNabvar');
  mobileNabvar.remove();
  document.body.style.overflow = 'auto';
}

function createMenu() {
  const mobileNabvar = document.createElement('div');
  mobileNabvar.classList.add('mobileNabvar');
  mobileNabvar.id = 'mobileNabvar';
  mobileNabvar.innerHTML = `
  <button class="mobileMenuExit" id="mobileMenuBtn">X</button>
  <ul class="mobileNabvarList">
    <li><a class="mobileNabvarListItem">Program</a></li>
    <li><a class="mobileNabvarListItem">Musicians</a></li>
  </ul>
  `;
  document.body.appendChild(mobileNabvar);
  const menuExit = document.querySelector('#mobileMenuBtn');
  menuExit.addEventListener('click', deleteMenu);
  document.body.style.overflow = 'hidden';
}
hamburgerMenu.addEventListener('click', createMenu);