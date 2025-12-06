let form = document.getElementById("addBookForm");
const books = [];
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const checked = document.querySelectorAll('input[name="tag"]:checked');
    const tags = [];    
    checked.forEach(cb => tags.push(cb.value));
    
    let book = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        isbn: document.getElementById("isbn").value,        
        tags: tags
    };
    books.push(book);    
});

let testBtn = document.getElementById("test");
testBtn.addEventListener("click", (e)=>{
    console.log(books);
});

function displayResults(list) {
    const resultTable = document.getElementById("resultsTable");
    resultTable.innerHTML = "";
    
    if(list.length === 0){
        resultTable.innerHTML = "<tr><td colspan=4>I couldn't find any book with this author.</td></tr>"
        return;
    }

    list.forEach(book => {
        const row = document.createElement("tr");
        const tagString = book.tags.toString();
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td>${tagString}</td>`;        
        resultTable.appendChild(row);
    });
}

let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener("click", (e)=>{
    const searchValue = document.getElementById('authorSearch').value.toLowerCase();    
    const filteredBooks = books.filter(book =>
        book.author.toLowerCase().includes(searchValue)
    );    
    console.log(filteredBooks);
    document.getElementById('booksTable').style.display = "table";
    displayResults(filteredBooks);
});



