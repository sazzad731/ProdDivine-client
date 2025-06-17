
import { Link } from "react-router";
import { FaPlusCircle } from "react-icons/fa";

const AddQueryBanner = () => {
  return (
    <div className="flex flex-col items-center bg-first rounded-xl p-6 md:p-10 mb-8 mt-10 z-30">
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        Got a Product Concern?
      </h2>
      <p className="mb-5">
        Let others help you find better alternatives. Post your query now.
      </p>
      <div className="btn-border">
        <Link to="/add-queries" className="primary-btn gap-3">
          <FaPlusCircle size={15}/>
          Add Queries
        </Link>
      </div>
    </div>
  );
};

export default AddQueryBanner;
