const hamburgerMenu = document.querySelector('#hamburgerMenu');
function deleteMenu() {
  const mobileNabvar = document.querySelector('.mobileNabvar');
  mobileNabvar.classList.remove('mobileAnimation');
  mobileNabvar.classList.add('mobileAnimationReverse');
  mobileNabvar.addEventListener('animationend', () => {
    mobileNabvar.remove();
  });
  document.body.style.overflow = 'auto';
}

function createMenu() {
  const mobileNabvar = document.createElement('div');
  mobileNabvar.classList.add('mobileNabvar', 'mobileAnimation');
  mobileNabvar.innerHTML = `
  <button class="mobileMenuExit" id="mobileMenuBtn">X</button>
  <ul class="mobileNabvarList">
    <li><a class="mobileNabvarListItem" id="mobileMenuLinkA" href="#sectionLink1">Logo Info</a></li>
    <li><a class="mobileNabvarListItem" id="mobileMenuLinkB" href="#sectionLink2">Past Concerts</a></li>
    <li><a class="mobileNabvarListItem" id="mobileMenuLinkB" href="./index.html">Home</a></li>
  </ul>
  `;
  document.body.appendChild(mobileNabvar);
  const menuExit = document.querySelector('#mobileMenuBtn');
  menuExit.addEventListener('click', deleteMenu);
  document.body.style.overflow = 'hidden';
  const listItem = document.querySelector('#mobileMenuLinkA');
  listItem.addEventListener('click', deleteMenu);
  const listItem2 = document.querySelector('#mobileMenuLinkB');
  listItem2.addEventListener('click', deleteMenu);
  mobileNabvar.addEventListener('animationend', () => {
    mobileNabvar.classList.remove('mobileAnimation');
  });
}
hamburgerMenu.addEventListener('click', createMenu);
