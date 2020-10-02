export function validateUsername(tel) {
  let validName;
  validName = tel;

  if (/[^\w\+]+/.test(tel)) {
    validName = tel.replace(/[^\w\+]+/g, "");
  }
  if (/^[8]/.test(tel)) {
    validName = validName.replace(/^[8]/g, "+7");
  }

  return validName;
}

validateUsername("8 (927) 000-00-00");
validateUsername("+7 960 000 00 00");
validateUsername("+86 000 000 0000 ");
validateUsername("89270000000");
validateUsername("+79270000000");
