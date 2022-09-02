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

  //navメニューをクリックすると対象タブとコンテンツに切り替わる
  navItem[0].addEventListener('click', () => {
    $nav[1].classList.remove(ACTIVE_CLASS);
    $nav[2].classList.remove(ACTIVE_CLASS);
    $nav[0].classList.add(ACTIVE_CLASS);
    $contents[1].style.display = "none";
    $contents[2].style.display = "none";
    $contents[0].style.display = "block";
  })
  navItem[1].addEventListener('click', () => {
    $nav[0].classList.remove(ACTIVE_CLASS);
    $nav[2].classList.remove(ACTIVE_CLASS);
    $nav[1].classList.add(ACTIVE_CLASS);
    $contents[0].style.display = "none";
    $contents[2].style.display = "none";
    $contents[1].style.display = "block";
  })
  navItem[2].addEventListener('click', () => {
    $nav[0].classList.remove(ACTIVE_CLASS);
    $nav[1].classList.remove(ACTIVE_CLASS);
    $nav[2].classList.add(ACTIVE_CLASS);
    $contents[0].style.display = "none";
    $contents[1].style.display = "none";
    $contents[2].style.display = "block";
  })

  
})();
