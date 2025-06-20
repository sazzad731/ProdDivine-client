import { useNavigate, useParams } from "react-router";
import useApi from "../../hooks/useApi";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Spinner from "../../components/Spinner/Spinner";

const QueryDetails = () => {
  const {id} = useParams();
  const { queryDetailsPromise } = useApi();
  const [ query, setQuery ] = useState({});
  const [ loading, setLoading ] = useState(true);
  const navigate = useNavigate();

  useEffect(()=>{
    queryDetailsPromise(id).then(result => {
      setQuery(result)
      setLoading(false);
    }).catch(err => {
      Swal.fire({
        title: err.message,
        icon: "error",
        showConfirmButton: false,
        timer: 2000
      })
      setLoading(false)
      navigate("/not-found")
    });
  }, [ queryDetailsPromise, id, navigate ])
  console.log(query)

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="min-h-screen mt-20 pt-20">
          <div className="flex gap-5">
            <img
              src={query?.productImage}
              alt={query?.productName}
              className="w-2xl"
            />
            <div>
              <h4 className="text-2xl mb-7">{query?.productName}</h4>
              <p className="text-white/80 mb-3">
                <span className="text-lg text-white">Brand:</span>{" "}
                {query?.productBrand}
              </p>
              <p className="text-white/80 mb-3">
                <span className="text-lg text-white">Query Title: </span>
                {query?.queryTitle}
              </p>
              <p className="text-white/80 mb-3">
                <span className="text-lg text-white">Boycotting Reason: </span>
                {query?.boycottReason}
              </p>
              <p className="text-white/80 mb-3">
                <span className="text-lg text-white">Recommendation: </span>
                {query?.recommendationCount}
              </p>

              <div>
                <p className="mb-2">Author:</p>
                <div className="flex items-center gap-5">
                  <div className="avatar">
                    <div className="w-14 rounded-full">
                      <img src={query.profile} />
                    </div>
                  </div>
                  <span>Name: {query?.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QueryDetails;