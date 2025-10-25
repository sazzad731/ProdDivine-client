import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';

const Bookmarked = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data } = useQuery({
    queryKey: [ 'bookmarkedItems' ],
    queryFn: async()=>{
      const res = await axiosSecure.get(`/bookmarked-items/${user?.email}`);
      return res.data;
    }
  })
  console.log(data);
  return (
    <div className="min-h-screen pt-20">
      <h2 className="text-center text-3xl font-bold mb-14">My Saved Queries</h2>
      {data?.map((item) => (
        <div key={item?._id} className="card sm:flex-row-reverse bg-base-100 shadow-sm rounded-lg overflow-hidden mb-10">
          <figure className="">
            <img
              src={item?.productImage}
              alt={item?.productName}
              className="object-cover w-96 rounded-lg"
            />
          </figure>
          <div className="card-body md:w-2/3 p-6 gap-4">
            <div>
              <h2 className="card-title text-xl font-bold text-gray-900">
                {item?.productName}
              </h2>
              <p className="text-sm text-gray-500">
                Brand: {item?.productBrand}
              </p>
              <p className="mt-2 text-gray-700"></p>
            </div>
            <div className="space-y-4">
              <button className="btn btn-outline btn-primary flex items-center gap-2">
                View Details
              </button>
              <button className="btn btn-error btn-sm">Remove</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bookmarked;