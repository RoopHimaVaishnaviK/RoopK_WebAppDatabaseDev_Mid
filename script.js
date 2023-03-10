fetch('https://upadhayay.github.io/db.json')
  .then(response => response.json())
  .then(data => {
    let booksDiv = document.getElementById('papers');

    data.books.forEach(book => {
      if (book.published) {
        let bookDiv = document.createElement('div');
        let bookImg = document.createElement('img');
        let bookTitleContainer = document.createElement('div');
        let bookTitle = document.createElement('p');
        let bookURL = document.createElement('a');

        bookImg.src = "images/pdf.jpg";
        bookImg.alt = book.title;

        /*If the URLs for this paper are provided in the JSON file link given, then the respective paper will be opened. */
        /*Else, this page will be redirected to a blank page with a message statin g that the URL is not provided. */

        if (book.url) {
            bookURL.innerText = book.title;
            bookURL.href = book.url;
            bookURL.target = "_blank";
          } else {
            bookURL.innerText = book.title;
            bookURL.href = "javascript:void(0)";
            bookURL.onclick = function() {
              window.open("", "_blank").document.write("The URL of the location of this paper is not provided by the host. ");
            }
          }

        bookTitle.appendChild(bookURL);

        bookTitleContainer.appendChild(bookTitle);

        bookDiv.appendChild(bookImg);
        bookDiv.appendChild(bookTitle);

        booksDiv.appendChild(bookDiv);
      }
    });
  });