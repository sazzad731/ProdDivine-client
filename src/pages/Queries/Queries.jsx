import { useEffect, useRef, useState } from "react";
import useApi from "../../hooks/useApi";
import Swal from "sweetalert2";
import Spinner from "../../components/Spinner/Spinner"
import { Link, useNavigate } from "react-router";
import { IoSearch } from "react-icons/io5";
import { BsFillGrid3X2GapFill, BsGridFill } from "react-icons/bs";


const Queries = () => {
  const [ queries, setQueries ] = useState([]);
  const { allQueriesPromise } = useApi();
  const [ loading, setLoading ] = useState(true);
  const searchRef = useRef();
  const [ searchValue, setSearchValue ] = useState("")
  const [ gridCol2, setGridCol2 ] = useState("");
  const [ gridCol3, setGridCol3 ] = useState("grid-cols-3");
  const [ isActive, setIsActive ] = useState("gridCol3");
  const navigate = useNavigate();

  useEffect(()=>{
    allQueriesPromise(searchValue)
      .then((result) => {
        setQueries(result);
        setLoading(false);
      })
      .catch((err) => {
        Swal.fire({
          title: err.message,
          icon: "error",
        });
        setLoading(false);
        navigate("/not-found");
      });
  }, [ allQueriesPromise, navigate, searchValue ])
  


  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="min-h-screen mt-20 pt-20 mb-20">
          <h2 className="text-3xl text-center mb-5">
            Explore All Product Concerns
          </h2>
          <p className="text-center text-xl text-white/70 mb-10">
            Discover what others are questioning. Help shape smarter choices.
          </p>
          <div className="mb-20 max-w-2xl mx-auto relative">
            <IoSearch
              size={20}
              className="absolute left-3 bottom-[10px] z-20 text-white/50"
            />
            <input
              type="search"
              ref={searchRef}
              onChange={() => setSearchValue(searchRef?.current.value)}
              className="input focus:outline-third border-[1px] border-third w-full bg-second pl-10 rounded-full"
              name="search"
              placeholder="Search here"
            />
          </div>
          <div className="mb-5 join hidden lg:block">
            <button
              onClick={() => {
                setGridCol2("grid-cols-2");
                setIsActive("gridCol2");
              }}
              className={`btn ${isActive === "gridCol2" && "bg-white/70"}`}
            >
              <BsGridFill />
            </button>
            <button
              onClick={() => {
                setGridCol3("grid-cols-3");
                setIsActive("gridCol3");
              }}
              className={`btn ${isActive === "gridCol3" && "bg-white/70"}`}
            >
              <BsFillGrid3X2GapFill size={20} />
            </button>
          </div>
          <div className={`grid sm:grid-cols-2 lg:${isActive === "gridCol2" ? gridCol2 : isActive === "gridCol3" &&  gridCol3} gap-7`}>
            {queries?.map((query) => (
              <div key={query._id} className="card bg-first shadow-md p-4">
                <img
                  src={query.productImage}
                  alt={query.productName}
                  className="object-cover rounded h-96"
                />
                <div className="card-body justify-between space-y-2">
                  <div>
                    <h2 className="text-xl font-semibold mb-3">
                      {query.productName.length > 30
                        ? query.productName.slice(0, 30)
                        : query.productName}
                      {query.productName.length > 30 && " ...."}
                    </h2>
                    <p className="text-sm mb-2 text-white/80">
                      <span className="text-lg font-medium text-white">
                        Query Title:
                      </span>{" "}
                      {query.queryTitle}
                    </p>
                    <p className="text-white/80">
                      <span className="text-lg font-medium text-white">
                        Boycott Reason:
                      </span>{" "}
                      {query.boycottReason.length > 30
                        ? query.boycottReason.slice(0, 60)
                        : query.boycottReason}
                      {query.boycottReason.length > 30 && " ...."}
                    </p>
                  </div>
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between">
                    <span className="text-lg xl:mb-0 mb-10">
                      Recommendation: {query.recommendationCount}
                    </span>
                    <div className="btn-border">
                      <Link
                        to={`/query-details/${query._id}`}
                        className="primary-btn text-lg"
                      >
                        Recommend
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Queries;