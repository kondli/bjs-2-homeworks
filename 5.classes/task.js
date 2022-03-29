class PrintEditionItem {
    
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
        
    }

    fix() {
            this.state = this.state * 1.5;
        }

    get state() {
        return this._state;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
            return;
          } else if (value > 100) {
            this._state = 100;
            return;
          } else {
              this._state = value;
          }  
    }
}

class Magazine extends PrintEditionItem {
    type = 'magazine'
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);

    }
}

class Book extends PrintEditionItem {
    type = 'book'
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
    }
}

class NovelBook extends Book {
    type = 'novel'
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
    }
}

class FantasticBook extends Book {
    type = 'fantastic'
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
    }
}

class DetectiveBook extends Book {
    type = 'detective'
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
    }
}

// задача 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book._state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let search = this.books.find(item => item[type] === value);
            if (search) {
                return search
            } else {
                return null
            }
        }

    giveBookByName(bookName) {
        let giving = this.books.find(item => item.name === bookName);
        this.books = this.books.filter(item => item.name != bookName);
        if (giving) {
            return giving
        } else {
            return null
            }
         }
    }

    // задача 3





    
    

  

    

