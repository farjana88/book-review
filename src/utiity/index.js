import toast from "react-hot-toast"
export const getBooks = ()=> {
    let books =[]
    const storedBooks = localStorage.getItem('books')
    if(storedBooks){
        books = JSON.parse( storedBooks )
    }
    return books
    
}

export const savedBook = (book)=> {
    let books = getBooks()
    const isExist = books.find(b=> b.id===book.id)
    if(isExist){
return toast.error('Already Exist')
    }
    {
        books.push(book.id)
        localStorage.setItem('books', JSON.stringify(books))
        toast.success('Add Successfully')
    }
 
}
// export const deleteBook=(id)=> {
//     let books = getBooks()
//     const remaining = books.filter(b =>b.id !== id)
//     localStorage.setItem('books',JSON.stringify(remaining))
// toast.success('removed Successfully')
// }