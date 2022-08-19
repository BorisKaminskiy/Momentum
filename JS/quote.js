let quoteButton = document.querySelector(".change-quote");
let quoteContainer = document.querySelector("#quote-container") 
let quote = document.querySelector(".quote");
let author = document.querySelector(".author")

function getQuotesEng() {
  const quotes = '../JS/phrases-en.json';
  fetch(quotes)
    .then(res => res.json())
    .then(data => {
      let count = 0;
      quote.textContent = data[count]['text'];
      author.textContent = data[count]['author'];
      quoteButton.addEventListener('click', () => {
        if (count < (data.length - 1)) {
          count += 1;
          quoteContainer.classList.add('quote-transition-on');
          setTimeout(() => {
            quote.textContent = data[count]['text'];
            author.textContent = data[count]['author'];
            quoteContainer.classList.remove('quote-transition-on');
          }, 500);
          
        } else {
          count = 0;
          quoteContainer.classList.add('quote-transition-on');
          setTimeout(() => {
            quote.textContent = data[count]['text'];
            author.textContent = data[count]['author'];
            quoteContainer.classList.remove('quote-transition-on');
          }, 500);
        }
      })
    })
}

function getQuotesRu() {
  const quotes = '../JS/phrases-ru.json';
  fetch(quotes)
    .then(res => res.json())
    .then(data => {
      let count = 0;
      quote.textContent = data[count]['text'];
      author.textContent = data[count]['author'];
      quoteButton.addEventListener('click', () => {
        if (count < (data.length - 1)) {
          count += 1;
          quoteContainer.classList.add('quote-transition-on');
          setTimeout(() => {
            quote.textContent = data[count]['text'];
            author.textContent = data[count]['author'];
            quoteContainer.classList.remove('quote-transition-on');
          }, 500);
          
        } else {
          count = 0;
          quoteContainer.classList.add('quote-transition-on');
          setTimeout(() => {
            quote.textContent = data[count]['text'];
            author.textContent = data[count]['author'];
            quoteContainer.classList.remove('quote-transition-on');
          }, 500);
        }
      })
    })
}




export { getQuotesEng, getQuotesRu }

