import { Link } from "react-router-dom";



const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-[#F3F3F3]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="../assets/pngwing 1.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
      <Link
    to='/listed books'>
     
      <button className="btn bg-[#23BE0A] text-white mt-10">View The List</button>
      </Link>
      
    </div>

  </div>
</div>

  <div className="text-3xl font-bold flex max-w-full justify-center items-center my-20">Books</div>
        </div>
        
    );
};

export default Banner;