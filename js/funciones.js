
  $(document).ready(function() {
    $('.parallax').parallax();
  });


  const materialize = document.getElementById('item1')
  const tabla = document.getElementById('move')
  tabla.addEventListener('click', function() {

    if (materialize.style.display != 'none') {
      materialize.style.display = 'none'
      materialize.style.display = 'none'
    } else {
      materialize.style.display = 'block'
      materialize.style.display = 'block'

    }
  })

  const bootstrap = document.getElementById('item2')
  const jquery = document.getElementById('item3')
  jquery.addEventListener('click', function() {
    let detona = 'click'
    let ondetona = 'ondblclick'
    if (detona) {
      bootstrap.innerHTML = 'There is anything for you here'
    } else  {
      bootstrap.innerHTML = 'bootstrap'
    }

  })
  // const bootstrap = document.getElementById('item2')
  // console.log(bootstrap)
  // const jquery = document.getElementById('item3')
  // console.log(jquery)
  // const react = document.getElementById('item4')
  // react.innerHTML = 'here you find the answer'
  //
  // const lista = document.getElementsByClassName('collection-item')
  // for (i = 0; i < lista.length; i++) {
  //   let element = lista[i];
  //   console.log(element)
  // }
  // const options = document.getElementsByTagName('li')
  // for (i = 0; i < options.length; i++) {
  //   let etiqueta = options[i]
  //   // console.log(etiqueta)
  //   // element.style.background ='#f2f2f2';
  //   }

  const presentacion = document.getElementById('card1')
  const saludo = document.getElementById('card2')
  const intro = document.getElementById('card3')

  function saluda(n) {
    if (n == 1) {
      presentacion.style.display = "block";
      saludo.style.display = "none";
      intro.style.display = "none";
    } else if (n == 2) {
      presentacion.style.display = "none"
      saludo.style.display = "block";
      intro.style.display = "none"
    } else if (n == 3) {
      presentacion.style.display = "none"
      saludo.style.display = "none"
      intro.style.display = "block"

    } else if (n == 4) {
      presentacion.style.display = "block"
      saludo.style.display = "block"
      intro.style.display = "block"
    } else;
  }

  const encabezado = document.getElementById('title')
  const boton = document.getElementById('pinch')
  boton.addEventListener('click', function() {

    if (encabezado.style.display != "none") {
      encabezado.style.display = "none"
      encabezado.style.display = "none"
    } else {
      encabezado.style.display = "block"
      encabezado.style.display = "block"
    }
  })
