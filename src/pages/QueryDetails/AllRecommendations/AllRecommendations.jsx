import React, { useEffect, useState } from 'react';
import useRecommendationApi from '../../../hooks/useRecommendationApi';
import Swal from 'sweetalert2';
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";
import useAuth from '../../../hooks/useAuth';
import {useMutation} from "@tanstack/react-query"
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllRecommendations = ({ queryId, updatedRecomCount }) => {
  const [ recommendations, setRecommendations ] = useState([]);
  const { allRecommendationsPromise } = useRecommendationApi();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [recommendationId, setRecommendationId] = useState(null);

  useEffect(()=>{
    allRecommendationsPromise(queryId).then(result => {
      setRecommendations(result);
    }).catch(err => {
      Swal.fire({
        title: err.message,
        icon: "error"
      })
    });
  }, [ allRecommendationsPromise, queryId, updatedRecomCount ])
  

  const { mutate: postComment } = useMutation({
    mutationFn: (commentData) => { 
      if (!recommendationId) return;
      return axiosSecure.patch(`/recommendations/comment/${recommendationId}`, commentData);
    },
    onSuccess: (data)=>{
      console.log(data);
    },
    onError: (err)=>{
      console.log(err)
    }
  });

  const handlePostComment = (commentData)=>{
    postComment(commentData)
  }
  return (
    <div className="space-y-6 mt-40">
      <h3 className="text-2xl mb-5">Recommendations</h3>
      {recommendations.map((recommendedProduct) => (
        <div key={recommendedProduct._id}>
          {/* Recommendation Card */}
          <div className="flex sm:gap-0 gap-3 items-center bg-secondary/30 rounded-3xl py-4 shadow-md">
            <img
              src={recommendedProduct.recommendedProductImage}
              alt={recommendedProduct.recommendedProductName}
              className="w-24 rounded-3xl ml-4"
            />
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

          {/* Comment Section */}
          <div className="mt-4 bg-base-200 rounded-xl p-3">
            <CommentSection
              currentUser={{
                currentUserId: user?.uid,
                currentUserImg: user?.photoURL,
                currentUserFullName: user?.displayName,
              }}
              commentData={recommendedProduct.comments || []}
              onSubmitAction={(data) => {
                console.log("New Comment: ", data);
                setRecommendationId(recommendedProduct._id);
                handlePostComment({...data});
                // 🔹 You can call your backend API to save this comment
                // Example:
                // axios.post(`/api/comments`, {
                //   ...data,
                //   recommendationId: recommendedProduct._id,
                // });
              }}
              customNoComment={() => (
                <div className="text-center text-sm text-gray-400">
                  No comments yet. Be the first to start a discussion!
                </div>
              )}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllRecommendations;