function onlyNumber(e) {

  var numberTest = e.which || e.keycode;

  if ((numberTest >= 48 && numberTest <= 57))
    return true;
  else
    return false;
}


const tel = document.getElementById("telephone")

tel.addEventListener('keypress', () => {

    let tel_length = tel.value.length

    if (tel_length === 0) {
      tel.value += '('
    } else if (tel_length === 3) {
      tel.value += ') '
    } else if (tel_length === 10) {
      tel.value += '-'
    }
  }
)

