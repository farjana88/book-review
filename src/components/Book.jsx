import { Link } from "react-router-dom";
import { FcRating } from "react-icons/fc";

const Book = ({book}) => {

    const {image, tags, bookName, author, category, rating} = book
    return (
        <div>
            
			<Link 
            to="/"
             className="max-w-sm mx-auto group hover:no-underline focus:no-underline ">
				<img role="presentation" className=" object-cover w-full rounded h-44 bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
                <div className="p-6 space-y-2 bg-white text-black">
					<h3 className="text-2xl text-black font-semibold group-hover:underline group-focus:underline">{book.bookName}</h3>
					<div className="flex justify-between">
                        <span className=" bg-gray-300 rounded-3xl p-2">{book.author}</span>
                        <span  className=" bg-gray-300 rounded-3xl p-2">{book.publisher}</span>
                    </div>
                    <p>By: {book.author}</p>
                    <div className="flex justify-between">
                        <span className=" bg-gray-300 rounded-3xl p-2">{book.category}</span>
                        <span  className=" bg-gray-300 rounded-3xl p-2">{book.rating} <FcRating></FcRating> </span>
                    </div>
			
				</div>
			</Link>
        </div>
    );
};

export default Book;