import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import Swal from "sweetalert2";
import Spinner from "../../components/Spinner/Spinner"
import { Link, useNavigate } from "react-router";


const Queries = () => {
  const [ queries, setQueries ] = useState([]);
  const { allQueriesPromise } = useApi();
  const [ loading, setLoading ] = useState(true);
  const navigate = useNavigate();

  useEffect(()=>{
    allQueriesPromise().then(result=> {
      setQueries(result)
      setLoading(false)
    }).catch(err=>{
      Swal.fire({
        title: err.message,
        icon: "error"
      })
      setLoading(false)
      navigate('/not-found')
    })
  },[allQueriesPromise, navigate])
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="min-h-screen mt-20 pt-20 mb-20">
          <h2 className="text-3xl text-center mb-5">
            Explore All Product Concerns
          </h2>
          <p className="text-center text-xl text-white/70 mb-20">
            Discover what others are questioning. Help shape smarter choices.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
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
                      {query.productName.length > 30 ? query.productName.slice(0, 30) : query.productName}
                      {query.productName.length > 30 && " ...."}
                    </h2>
                    <p className="text-sm mb-2 text-white/80">
                      <span className="text-lg font-medium text-white">Query Title:</span>{" "}
                      {query.queryTitle}
                    </p>
                    <p className="text-white/80">
                      <span className="text-lg font-medium text-white">
                        Boycott Reason:
                      </span>{" "}
                      {query.boycottReason.length > 30 ? query.boycottReason.slice(0, 60) : query.boycottReason}
                      {query.boycottReason.length > 30 && " ...."}
                    </p>
                  </div>
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between">
                    <span className="text-lg xl:mb-0 mb-10">
                      Recommendation: {query.recommendationCount}
                    </span>
                    <div className="btn-border">
                      <Link to={`/query-details/${query._id}`} className="primary-btn text-lg">Recommend</Link>
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