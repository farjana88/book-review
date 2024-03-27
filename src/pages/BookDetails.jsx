import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
    const books = useLoaderData()
    const {id} = useParams()
    const bookDetails = books.find(book=>book.id==id)
    const{image,bookName, author, category,review, tags, totalpages,yearOfPublishing, rating}=bookDetails

    const handleListedBook= ()=> {
        
        toast.success('Add Successfully')
        
    }
    
    return (
        <div>
            <div className=" card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={image} alt="Album"/></figure>
  <div className="card-body flex mt-44">
    <h2 className="card-title">{bookName}</h2>
    <ul>
        <li>Author:{author} </li>
        <li>Category: {category}</li>
        <li>Review: {review}</li>
        <li>Tags: {tags}</li>
        <li>TotalPages: {totalpages}</li>
        <li>Rating: {rating}</li>
        <li>Year of publishing:{yearOfPublishing}</li>
    </ul>
    <div className="card-actions justify-center">
    <button className="btn btn-outline px-6 text-black">Read</button>
      <button onClick={ handleListedBook} className="btn btn-active text-white bg-[#59C6D2] btn-accent">Wishlist</button>
    </div>
    <ToastContainer />
  </div>
</div>
        </div>
    );
};
<ToastContainer />
export default BookDetails;