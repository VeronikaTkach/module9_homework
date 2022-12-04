let btn = document.querySelector('.j-btn-request');
let result = document.querySelector('.j-result');

btn.addEventListener('click', () => {

  let width = document.querySelector('.j-input-width').value;
  let height = document.querySelector('.j-input-height').value;

  if(width >= 100 && width <= 300 && height >= 100 && height <=300) {
    fetch(`https://picsum.photos/${width}/${height}`)
    .then((response) => {
        result.innerHTML = `
        <div class="card">
            <img src="${response.url}">
        </div>`;
    })
    .catch(() => {console.log('error')});
  } else {
    result.innerHTML = `<p>Одно из чисел вне диапазона от 100 до 300.</p>`
  }

});