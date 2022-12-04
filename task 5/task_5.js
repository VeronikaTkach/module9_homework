let btn = document.querySelector('.j-btn-request');
let result = document.querySelector('.j-result');

btn.addEventListener('click', () => {

  let page = document.querySelector('.j-input-width').value;
  let limit = document.querySelector('.j-input-height').value;

  if((page < 1 || page > 10) && (limit < 1 || limit > 10)) {
    result.innerHTML = `<p>Номер страницы и лимит вне диапазона от 1 до 10.</p>`
  } else if(page < 1 || page > 10) {
    result.innerHTML = `<p>Номер страницы вне диапазона от 1 до 10.</p>`
  } else if(limit < 1 || limit > 10) {
    result.innerHTML = `<p>Лимит вне диапазона от 1 до 10.</p>`
  } else {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
      localStorage.setItem('foto', JSON.stringify(data));
      displayResult(data);
    })
    .catch(() => {console.log('error')});
  }

});

function displayResult(data){
  let cards = "";
    if (data) {
        data.forEach((item) => {
            let cardBlock = `
            <div class="card">
                <img src="${item.download_url}" class="card-image">
            </div>`;
            cards += cardBlock; 
        });
        result.innerHTML = cards;
    }
}

let lastFoto = localStorage.getItem('foto');
displayResult(JSON.parse(lastFoto));