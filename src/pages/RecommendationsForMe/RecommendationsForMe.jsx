import React, { useEffect, useState } from 'react';
import useRecommendationApi from '../../hooks/useRecommendationApi';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const RecommendationsForMe = () => {
  const { user, loading } = useAuth();
  const { recommendationsForMePromise } = useRecommendationApi();
  const [ recommForMe, setRecommForMe ] = useState([]);

  useEffect(()=>{
    if(user && !loading){
      recommendationsForMePromise(user?.email).then(result=>setRecommForMe(result)).catch(err=>{
        Swal.fire({
          title: err.message,
          icon: "error"
        })
      })
    }
  }, [user, loading, recommendationsForMePromise])
  return (
    <div className="min-h-screen mt-20 pt-10">
      <h2 className="text-center text-3xl mb-2">
        Suggestions Tailored for You
      </h2>
      <p className="text-center mb-20 text-white/70">
        See what others recommend based on your product concerns.
      </p>
      <div>
        {recommForMe.length === 0 ? (
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
                  <th>Recommender</th>
                </tr>
              </thead>
              <tbody>
                {/* row */}
                {recommForMe.map((product) => (
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
                    <td>
                      <p>{product.recommenderName}</p>
                      <p className='text-white/50'>{product.recommenderEmail}</p>
                    </td>
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

export default RecommendationsForMe;