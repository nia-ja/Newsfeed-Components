// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(article) {
    console.log(article);
    // assign this.domElement to the passed in domElement
    this.article = article;
    // create a reference to the ".expandButton" class. 
    this.expandButton = article.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';
    //created a reference to the ".closeButton" class.
    this.closeButton = article.querySelector('.closeButton');
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
  }
  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.article.classList.toggle('article-open');
    // hide expandButton when article is open
    this.expandButton.style.display = 'none';
    // style closeButton same as expandButton
    this.closeButton.classList.toggle('expandButton');
    // and show it adding textContent
    this.closeButton.textContent = 'mark as read';
    //click event listener for closeButton
    this.closeButton.addEventListener('click', () => this.markRead());
  }
  markRead() {
    //article is deleted after closeButton is clicked
    this.article.style.display = 'none';
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.article');
articles.forEach(article => new Article(article));





// //Stretch: user can add his own articles using the form
// let submitButton = document.querySelector('button');

// submitButton.addEventListener('submit', event => {
//   // let userArticle = document.querySelector('form');
//   let userHeader = document.querySelector('.user-header');
//   let userDate = document.querySelector('.user-date');
//   let userText = document.querySelector('.user-article');

//   const newArticle = document.createElement('div');
//   newArticle.className = 'article';
//   document.querySelector('.articles').appendChild(newArticle);
//   const newHeader = document.createElement('h2');
//   newHeader.textContent = userHeader.input;
//   console.log(userHeader);
//   newArticle.appendChild(newHeader);
//   const newDate = document.createElement('p');
//   newDate.className = 'date';
//   newDate.textContent = userDate.input;
//   newArticle.appendChild(newDate);
//   const newText = document.createElement('p');
//   newText.textContent = userText.input;
//   newArticle.appendChild(newText);
//   const newButton = document.createElement('span');
//   newButton.className = 'expandButton';
//   newArticle.appendChild(newButton);
//   newHeader.textContent = userHeader.nodeValue;
//   event.preventDefault();
// });