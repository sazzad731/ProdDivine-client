import React, { use } from 'react';
import { Link } from 'react-router';


const RecentQueries = ({ recentQueryPromise }) => {
  const recentQuery = use(recentQueryPromise);
  return (
    <div className="mb-40">
      <h2 className="text-3xl mb-10">Recent Queries</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {recentQuery?.slice(0, 4)?.map((query) => (
          <div key={query._id} className="card bg-secondary/30 shadow-md rounded-2xl">
            <img
              src={query.productImage}
              alt={query.productName}
              className="object-cover rounded h-64 rounded-t-2xl"
            />
            <div className="card-body justify-between space-y-2">
              <div>
                <h2 className="text-xl font-semibold mb-3">
                  {query.productName.slice(0, 20)}{query.productName.length > 20 && " ..."}
                </h2>
                <p className="text-sm mb-2 ">
                  <span className="text-lg font-medium">Query Title:</span>{" "}
                  {query.queryTitle}
                </p>
                <p className="">
                  <span className="text-lg font-medium">Boycott Reason:</span>{" "}
                  {query?.boycottReason}
                </p>
              </div>
              <div className="flex justify-end gap-5 mt-4">
                <Link
                  to={`/query-details/${query._id}`}
                  className="btn btn-primary text-neutral">
                  See more
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