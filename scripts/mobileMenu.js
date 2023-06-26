const hamburgerMenu = document.querySelector('#hamburgerMenu');
function deleteMenu() {
  const mobileNabvar = document.querySelector('.mobileNabvar');
  mobileNabvar.remove();
}

function createMenu() {
  const mobileNabvar = document.createElement('div');
  mobileNabvar.classList.add('mobileNabvar');
  mobileNabvar.id = 'mobileNabvar';
  mobileNabvar.innerHTML = `
  <ul class="mobileNabvarList">
    <li class="mobileNabvarListItem"><a>Program</a></li>
    <li class="mobileNabvarListItem"><a>Musicians</a></li>
  </ul>
  <button class="mobileMenuExit" id="mobileMenuBtn">X</button>
  `;
  document.body.appendChild(mobileNabvar);
  const menuExit = document.querySelector('#mobileMenuBtn');
  menuExit.addEventListener('click', deleteMenu);
}
hamburgerMenu.addEventListener('click', createMenu);