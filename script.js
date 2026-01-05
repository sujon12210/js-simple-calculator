function getValues(){
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  return { a, b };
}

function add(){
  const { a, b } = getValues();
  show(a + b);
}

function sub(){
  const { a, b } = getValues();
  show(a - b);
}

function mul(){
  const { a, b } = getValues();
  show(a * b);
}

function div(){
  const { a, b } = getValues();
  show(b === 0 ? 'Error' : a / b);
}

function show(val){
  document.getElementById('result').innerText = 'Result: ' + val;
}
