

 document.querySelector('#submit').onclick = function(e) {
   e.preventDefault();
    let comparison;
    let a = Number(document.querySelector('#a').value);
    let b = Number(document.querySelector('#b').value);

    if (a < b) {
      comparison = '<';
      document.querySelector("#inputs").setAttribute('class','greaterThan');
    } else if (a > b) {
      comparison = '>';
      document.querySelector("#inputs").setAttribute('class','lessThan');

    } else if (a === b) {
      comparison = '==';
      document.querySelector("#inputs").setAttribute('class','equalTo');

    } else{
      comparison = 'N/A';
      document.querySelector("#inputs").setAttribute('class','errorTo');

    }

    document.querySelector('#comparison').innerText = comparison;
  };


