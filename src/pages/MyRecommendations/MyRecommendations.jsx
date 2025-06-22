import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import useRecommendationApi from '../../hooks/useRecommendationApi';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import Spinner from '../../components/Spinner/Spinner';

const MyRecommendations = () => {
  const { user, loading } = useAuth()
  const { myRecommendationsPromise, deleteRecommendationPromise } = useRecommendationApi();
  const [ recommendations, setRecommendations ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(()=>{
    if(user && !loading){
      myRecommendationsPromise(user?.email).then(result =>{
        setRecommendations(result);
        setIsLoading(false)
      }).catch(err => {
        Swal.fire({
          title: err.message,
          icon: "error"
        })
        setIsLoading(false)
      });
    }
  }, [ user, loading, myRecommendationsPromise ])


  const handleDeleteRecommendation = (queryId, productId)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteRecommendationPromise(queryId, productId).then(result=>{
          console.log(result);
          if (
            result.result.deletedCount === 1 &&
            result.updatedRecommendation.modifiedCount === 1
          ) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });

            const remaining = recommendations.filter((prod) => prod._id !== productId)
            setRecommendations(remaining);
          }
        }).catch(err=>{
          Swal.fire({
            title: err.message,
            icon: "error"
          })
        })
      }
    });
  }

  return (
    <div className="min-h-screen mt-20 pt-10">
      <h2 className="text-center text-3xl mb-1">
        All the recommendations made by you
      </h2>
      <p className="text-center mb-20 text-white/70">
        Help others discover smarter options with your experience.
      </p>
      <div>
        {isLoading ? (
          <Spinner />
        ) : recommendations.length === 0 ? (
          <h3 className="text-center mt-40 text-2xl text-white/60">
            No Items found
          </h3>
        ) : (
          <div className="overflow-x-auto ">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-white border-b-white/10 text-xl">
                  <th>Recommended Product</th>
                  <th>Over Product</th>
                  <th>Query Creator</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* row */}
                {recommendations.map((product) => (
                  <tr key={product._id} className="border-b border-b-white/10">
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={product.recommendedProductImage}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {product.recommendedProductName}
                          </div>
                          <div className="text-sm opacity-50">
                            {product.recommendationTitle.slice(0, 20)}...
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-ghost badge-sm">
                        {product.productName.slice(0, 20)}
                      </span>
                      <br />
                      {product.queryTitle.slice(0, 30)} ...
                    </td>
                    <td>{product.userName}</td>
                    <th className="flex pt-5">
                      <div className="error-border">
                        <button
                          onClick={() =>
                            handleDeleteRecommendation(
                              product.queryId,
                              product._id
                            )
                          }
                          className="error-btn"
                        >
                          <FaTrashAlt size={20} />
                        </button>
                      </div>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRecommendations;