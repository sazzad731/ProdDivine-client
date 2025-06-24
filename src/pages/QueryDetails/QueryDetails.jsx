import { useNavigate, useParams } from "react-router";
import useApi from "../../hooks/useApi";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Spinner from "../../components/Spinner/Spinner";
import RecommendationSection from "./RecommendationSection/RecommendationSection";
import AllRecommendations from "./AllRecommendations/AllRecommendations";

const QueryDetails = () => {
  const { id } = useParams();
  const { queryDetailsPromise } = useApi();
  const [query, setQuery] = useState({});
  const [loading, setLoading] = useState(true);
  const [updatedRecomCount, setUpdatedRecCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    queryDetailsPromise(id)
      .then((result) => {
        setQuery(result);
        setLoading(false);
      })
      .catch((err) => {
        Swal.fire({
          title: err.message,
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
        setLoading(false);
        navigate("/not-found");
      });
  }, [queryDetailsPromise, id, navigate]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="min-h-screen mt-20 mb-40 pt-20">
          <div className="flex flex-col lg:flex-row gap-5 mb-40">
            <div className="flex justify-center">
              <img
                src={query?.productImage}
                alt={query?.productName}
                className="w-full xl:w-2xl"
              />
            </div>
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
                {query?.recommendationCount + updatedRecomCount}
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

          <RecommendationSection
            query={query}
            setUpdatedRecCount={setUpdatedRecCount}
          />

          <AllRecommendations
            queryId={query?._id}
            updatedRecomCount={updatedRecomCount}
          />
        </div>
      )}
    </>
  );
};

export default QueryDetails;
