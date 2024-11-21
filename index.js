class Book{
    title;
    author;
    isbn;
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
    checkout(){
        console.log(this.title,"has been taken")
    }
    returnbook(){
        console.log(this.title,"has been retured")
    }
    updatetitle(newtitle){
       this.title = newtitle;
       console.log("harry title is changed to new title that is",this.title,)
    }
}
var book1=new Book("harry","jk rowlin",100);
book1.checkout();
book1.returnbook();
book1.updatetitle("harry potter");