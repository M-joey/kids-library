(()=>{

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



  const book = [
    {
      title: 'DO NOT OPEN THIS BOOK AGAIN By Andy Lee & Illustrated By Heath McKenzie',
      youtube: '<iframe width="560" height="315" src="https://www.youtube.com/embed/N8XDGi0rPmw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
  ];
  
})();