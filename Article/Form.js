//grab form
let form = document.querySelector('form');
console.log(form);

// click event handler for submit button
form.addEventListener('submit', event => {
    event.preventDefault(); // to prevent form from auto-refreshing

    // grab the values from the forms inputs
    let newHeader = form.querySelector('#user-header').value; // input
    let newContent = form.querySelector('#user-article').value; // textarea

    //create new user article - div.article
    let userArticle = document.createElement('div');
    userArticle.className = 'article';

    //h2
    let userHeader = document.createElement('h2');
    userHeader.textContent = newHeader;
    userArticle.appendChild(userHeader);

    //p.date
    let date = document.createElement('p');
    date.className = 'date';
    //function to parse the date
    function formatDate(date) {
        var monthNames = [
          "Jan", "Feb", "Mar",
          "Apr", "May", "June", "July",
          "Aug", "Sep", "Oct",
          "Nov", "Dec"
        ];
      
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
      
        return `${monthNames[monthIndex]} ${day}th, ${year}`;
      }
    let now = formatDate(new Date());

    date.textContent = now;
    userArticle.appendChild(date);

    //p
    let userContent = document.createElement('p');
    userContent.textContent = newContent;
    userArticle.appendChild(userContent);

    //span.expandButton
    let newOpenButton = document.createElement('span');
    newOpenButton.className = 'expandButton';
    userArticle.appendChild(newOpenButton);

    //span.closeButton
    let newCloseButton = document.createElement('span');
    newCloseButton.className = 'closeButton';
    userArticle.appendChild(newCloseButton);    

    // grab the .articles element
    let parentDiv = document.querySelector('.articles');

    // add userArticle to the end of div.articles
    parentDiv.append(userArticle);

    // run the new article through the Article constructor
    userArticle =  new Article(userArticle);

    // clean up input fields
    form.querySelector('#user-header').value = '';
    form.querySelector('#user-article').value = '';
});