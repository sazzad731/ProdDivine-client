import React, { useEffect, useState } from 'react';
import useRecommendationApi from '../../../hooks/useRecommendationApi';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const AllRecommendations = ({ queryId, updatedRecomCount }) => {
  const [ recommendations, setRecommendations ] = useState([]);
  const { allRecommendationsPromise } = useRecommendationApi();

  useEffect(()=>{
    allRecommendationsPromise(queryId).then(result => {
      setRecommendations(result);
    }).catch(err => {
      Swal.fire({
        title: err.message,
        icon: "error"
      })
    });
  }, [allRecommendationsPromise, queryId, updatedRecomCount])
  return (
    <div className="mt-40">
      <h3 className="text-2xl mb-5">Recommendations</h3>
      <div>
        {recommendations.length === 0 ? (
          <p className="text-xl text-center">
            No Recommendation found
          </p>
        ) : (
          recommendations.map((recommendedProduct) => (
            <div
              key={recommendedProduct._id}
              className="flex sm:gap-0 gap-3 items-center bg-secondary/30 rounded-3xl py-4">
              <img
                src={recommendedProduct.recommendedProductImage}
                alt={recommendedProduct.recommendedProductName}
                className="w-24 rounded-3xl ml-4"/>
              <div className="flex sm:flex-row flex-col sm:items-center justify-between w-full sm:px-5 sm:py-0 py-3">
                <div>
                  <p>
                    <span className="sm:text-xl font-medium">Name:</span>{" "}
                    {recommendedProduct.recommendedProductName}
                  </p>
                  <p>
                    <span className="sm:text-xl font-medium">Title:</span>{" "}
                    {recommendedProduct.recommendationTitle}
                  </p>
                  <p>By {recommendedProduct.recommenderName}</p>
                </div>
                <p>
                  {new Date(recommendedProduct.timestamp).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))
        )}
        
      </div>
    </div>
  );
};

export default AllRecommendations;