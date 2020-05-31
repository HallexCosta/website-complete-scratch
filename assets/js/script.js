redirectLinks()
populateObject('.users-container div')

function redirectLinks(){
  const links = document.querySelectorAll('header nav ul li a')

  links.forEach(link => {
    link.addEventListener('click', () => {
      const redirect = link.getAttribute('redirect')
      location.replace(redirect)
    })
  })
}

function populateObject(object) {
  window.addEventListener('load', () => {
    const ul = document.querySelector(object);

    for (let count = 1; count < 3; count++) {
      if (ul === null) {
        break
      }
      ul.innerHTML += ul.innerHTML;
    }
  })
}