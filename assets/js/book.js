class Book{
    constructor(title,author){
        this.title=title
        this.author=author
        this.read=false
    }
    isRead(){
        return this.read
    }
    markasRead(){
        this.read=true
    }
}