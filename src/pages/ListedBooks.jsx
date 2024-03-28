import { useEffect, useState } from "react";
import { useLoaderData, } from "react-router-dom";
import { getBooks } from "../utiity";




const ListedBooks = () => {
   const book = useLoaderData();
//    const {id} = useParams()
   const [listedBook, setListedBook] = useState([]);
   const{image,bookName, author, category,review, tags, yearOfPublishing, rating}=book
   
   useEffect(()=> {
    const storedBookId = getBooks()
    const bookList =[]
    if(book.length >0){
        for(const id of storedBookId){
const book= book.find(b => b.id ===id)
if(book){
    bookList.push(book)
}
        }
        setListedBook(bookList)

    }
   },[])
    return (
		<div >
           <h2>Listed Books: {listedBook.length}</h2>
           <div className=" card lg:card-side bg-base-100 shadow-xl">
  <figure><img className="h-44 w-44" src={image} alt="Album"/></figure>
  <div className="card-body flex mt-44">
    <h2 className="card-title">{bookName}</h2>
    <ul>
        <li>Author:{author} </li>
        <li>Category: {category}</li>
        <li>Review: {review}</li>
        <li>Tags: {tags}</li>
        
        <li>Rating: {rating}</li>
        <li>Year of publishing:{yearOfPublishing}</li>
    </ul>
    {/* <div className="card-actions justify-center">
    
      <button onClick={ handleListedBook} className="btn btn-active text-white bg-[#59C6D2] btn-accent">Delete</button>
    </div> */}
  
  </div>
</div>
        </div>
    );
};

export default ListedBooks;