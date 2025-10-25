import { useEffect, useRef, useState } from "react";
import useApi from "../../hooks/useApi";
import Swal from "sweetalert2";
import Spinner from "../../components/Spinner/Spinner"
import { Link, useNavigate } from "react-router";
import { IoSearch } from "react-icons/io5";
import { BsFillGrid3X2GapFill, BsGridFill } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa6";
import {useMutation} from "@tanstack/react-query"
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";


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
  const [ sort, setSort ] = useState("");
  const sortRef = useRef()
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth()


  useEffect(()=>{
    setLoading(true)
    allQueriesPromise(searchValue, sort)
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
  }, [ allQueriesPromise, navigate, searchValue, sort ])


  const {mutate: bookmarkMutate} = useMutation({
    mutationFn: (mutedData) => {
      return axiosSecure.put(`/bookmark`, mutedData)
    },
    onSuccess: (data) => {
      const {matchedCount, modifiedCount} = data.data
      if(matchedCount > 0 && modifiedCount === 0){
        Swal.fire({
          title: "Already Bookmarked",
          text: "You already bookmarked this query",
          icon: "warning"
        })
      } else if(modifiedCount > 0){
        Swal.fire({
          title: "Query Bookmarked",
          text: "You successfully bookmarked this query",
          icon: "success"
        })
      } else {
        Swal.fire({
          title: "Bookmark Failed",
          text: "Unable to bookmark this query",
          icon: "error"
        })
      }
    },
    onError: (error) => {
      Swal.fire({
        title: error.message,
        text: error.response?.data?.message || "An error occurred",
        icon: "error"
      })
    },
  });
  const handleBookMark = (dataToBookmark) => {
    if (!user) return;
    bookmarkMutate(dataToBookmark);
  };

  


  return (
    <>
      <div className="min-h-screen mt-20 pt-20 mb-20">
        <h2 className="text-3xl text-center mb-5">
          Explore All Product Concerns
        </h2>
        <p className="text-center text-xl mb-10">
          Discover what others are questioning. Help shape smarter choices.
        </p>
        <div className="mb-20 max-w-2xl mx-auto relative">
          <IoSearch
            size={20}
            className="absolute left-3 bottom-[10px] z-20 text-neutral"
          />
          <input
            type="search"
            ref={searchRef}
            onChange={() => setSearchValue(searchRef?.current.value)}
            className="input focus:outline-primary border-[1px] border-primary w-full bg-white dark:bg-base-300 pl-10 rounded-full"
            name="search"
            placeholder="Search here"
          />
        </div>
        <div className="flex justify-end lg:justify-between">
          <div className="mb-5 join hidden lg:block">
            <button
              onClick={() => {
                setGridCol2("grid-cols-2");
                setIsActive("gridCol2");
              }}
              className={`btn ${
                isActive === "gridCol2" ? "bg-secondary/70" : "bg-secondary/30"
              }`}
            >
              <BsGridFill />
            </button>
            <button
              onClick={() => {
                setGridCol3("grid-cols-3");
                setIsActive("gridCol3");
              }}
              className={`btn ${
                isActive === "gridCol3" ? "bg-secondary/70" : "bg-secondary/30"
              }`}
            >
              <BsFillGrid3X2GapFill size={20} />
            </button>
          </div>

          <select
            ref={sortRef}
            onChange={() => setSort(sortRef?.current?.value)}
            defaultValue="Sort by Recommendation"
            className="select text-neutral mb-5"
          >
            <option>Sort by Recommendation</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        {loading ? (
          <Spinner />
        ) : queries.length === 0 ? (
          <h3 className="text-center mt-36 text-2xl">No Data found</h3>
        ) : (
          <div
            className={`grid sm:grid-cols-2 lg:${
              isActive === "gridCol2"
                ? gridCol2
                : isActive === "gridCol3" && gridCol3
            } gap-7`}
          >
            {queries?.map((query) => (
              <div
                key={query._id}
                className="card bg-secondary/20 shadow-md rounded-2xl"
              >
                <img
                  src={query.productImage}
                  alt={query.productName}
                  className="object-cover h-85 rounded-t-2xl"
                />
                <div className="card-body justify-between space-y-2">
                  <div>
                    <h2 className="text-xl font-semibold mb-3">
                      {query.productName.length > 30
                        ? query.productName.slice(0, 30)
                        : query.productName}
                      {query.productName.length > 20 && " ...."}
                    </h2>
                    <p className="text-sm mb-2">
                      <span className="text-lg font-medium">Query Title:</span>{" "}
                      {query.queryTitle}
                    </p>
                    <p className="">
                      <span className="text-lg font-medium">
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
                    <Link
                      to={`/query-details/${query._id}`}
                      className="btn btn-primary text-lg"
                    >
                      Recommend
                    </Link>
                  </div>
                </div>
                <button onClick={()=> handleBookMark({userEmail: user?.email, booked: [query._id]})} className="btn px-1 btn-primary absolute top-5 right-5">
                  <FaBookmark size={25}/>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Queries;