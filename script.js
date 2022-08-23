(()=>{
// ハンバーガーメニュー
  const toggleButton = document.getElementsByClassName('hamburger')[0];
  const navbarLinks = document.getElementById('navi');
  const navItem = document.querySelectorAll('[data-ham]');
// クリックしたらnaviが開く
  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('open');
  });
// aタグをクリックしたらnaviが消える
  let itemIndex = 0;
  while (itemIndex < navItem.length){
    navItem[itemIndex].addEventListener('click', () => {
      navbarLinks.classList.remove('open');
    });
    itemIndex++;
  }

//  タブ
  const $tab = document.getElementById('js-tab');
  const $nav = $tab.querySelectorAll('[data-nav');
  const $contents = $tab.querySelectorAll('[data-contents]')
  const ACTIVE_CLASS = 'is-active';
  const navLen = $nav.length;

  const init = () => {
    $contents[0].style.display = 'block';
  }
  init();

  const handleClick = (e) =>{
    e.preventDefault();
    
    const $this = e.target;
    const targetVal = $this.dataset.nav;

    let index = 0;
    while(index < navLen){
      $contents[index].style.display = 'none';
      $nav[index].classList.remove(ACTIVE_CLASS);
      index++;
    }

    $tab.querySelectorAll('[data-contents = "'+ targetVal +'"]')[0].style.display = 'block';
    $nav[targetVal].classList.add(ACTIVE_CLASS);
  }

  let index = 0;
  while(index < navLen){
    $nav[index].addEventListener('click', (e) => handleClick(e));
    index++;
  }

  
})();
