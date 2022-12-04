function performRequest(url, callback) 
{
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	
	xhr.onload = function() 
	{
	  if (xhr.status != 200) 
	  {
		console.log('Статус ответа: ', xhr.status);
	  } else 
	  {
		const result = JSON.parse(xhr.response);
		if (callback) 
		{
		  callback(result);
		}
	  }
	};
	
	xhr.onerror = function() 
	{
	  console.log('Ошибка! Статус ответа: ', xhr.status);
	};
	
	xhr.send();
};
    
const resultNode = document.querySelector('.my_result_view');
const btnNode = document.querySelector('.j-btn-request');
  
function displayResult(apiData) 
{
	let cards = '';

	apiData.forEach(item => {
		const cardBlock = `
		<div class="card">
			<img
			src="${item.download_url}"
			class="card-image"
			/>
			<p>${item.author}</p>
		</div>
		`;
		cards = cards + cardBlock;
	});  
		
	resultNode.innerHTML = cards;
}
  
btnNode.addEventListener('click', () => {
	let inputBox = document.querySelector('input');
	let value = inputBox.value;

	if (value < 1 || value > 10)
	{
		resultNode.innerHTML = "<p>Число вне диапазона от 1 до 10</p>";
	} else 
	{
		performRequest(`https://picsum.photos/v2/list?limit=${value}`, displayResult);
	}
})

