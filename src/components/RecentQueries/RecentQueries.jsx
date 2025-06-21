import React, { use } from 'react';
import { Link } from 'react-router';
import { FaPlus, FaTrash, FaEdit, FaEye } from "react-icons/fa";


const RecentQueries = ({ recentQueryPromise }) => {
  const recentQuery = use(recentQueryPromise);
  return (
    <div className="mb-40">
      <h2 className="text-3xl mb-10">Recent Queries</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {recentQuery?.map((query) => (
          <div key={query._id} className="card bg-first shadow-md p-4">
            <img
              src={query.productImage}
              alt={query.productName}
              className="object-cover rounded h-96"
            />
            <div className="card-body justify-between space-y-2">
              <div>
                <h2 className="text-xl font-semibold mb-3">
                  {query.productName}
                </h2>
                <p className="text-sm mb-2 text-white/80">
                  <span className="text-lg font-medium">Query Title:</span>{" "}
                  {query.queryTitle}
                </p>
                <p className="text-white/80">
                  <span className="text-lg font-medium">Boycott Reason:</span>{" "}
                  {query?.boycottReason}
                </p>
              </div>
              <div className="flex justify-end gap-5 mt-4">
                <Link
                  to={`/query-details/${query._id}`}
                  className="btn-border p-[1px]"
                >
                  <button className="primary-btn">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentQueries;