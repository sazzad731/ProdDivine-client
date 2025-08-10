import { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaTrash, FaEdit, FaEye } from "react-icons/fa";
import AddQueryBanner from "../../components/AddQueryBanner/AddQueryBanner";
import useApi from "../../hooks/useApi";
import useAuth from "../../hooks/useAuth";
import Spinner from "../../components/Spinner/Spinner";
import Swal from "sweetalert2";
import Modal from "../../components/Modal/Modal";

const MyQueries = () => {
  const { user, loading } = useAuth();
  const [queries, setQueries] = useState([]);
  const { myQueriesPromise, deleteQueryPromise } = useApi();
  const [ isLoading, setIsLoading ] = useState(true);
  const [ selectedQuery, setSelectedQuery ] = useState({})
  const [ isUpdated, setIsUpdated ] = useState(false);

  useEffect(() => {
    if (!loading && user?.email) {
      myQueriesPromise(user.email)
        .then((result) => {
          setQueries(result);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          Swal.fire({
            title: err.message,
            icon: "error",
          });
        });
    }
  }, [ myQueriesPromise, user, loading, isUpdated ]);
  

  const handleDeleteQuery = (id)=>{
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
        deleteQueryPromise(id).then(result => {
          if(result.deletedCount === 1){
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });

            const remainingQueries = queries.filter((query) => query._id !== id);
            setQueries(remainingQueries);
          }
        }).catch(err => {
          Swal.fire({
            title: err.message,
            icon: "error",
          });
        });
      }
    });
  }

  const handleOpenModal = (query)=>{
    setSelectedQuery(query)
    document.getElementById("my_modal_5").showModal()
  }

  return (
    <div className="min-h-screen pt-20 z-30 mb-40">
      <AddQueryBanner />

      {isLoading ? (
        <Spinner />
      ) : queries.length === 0 ? (
        <div className="text-center mt-20 space-y-4">
          <p className="text-lg">No queries found!</p>
        </div>
      ) : (
        <div className="mt-20">
          <h2 className="text-center text-4xl mb-5">My Queries</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {queries?.map((query) => (
              <div
                key={query._id}
                className="card bg-secondary/20 shadow-md rounded-2xl"
              >
                <Modal
                  query={selectedQuery}
                  isUpdated={isUpdated}
                  setIsUpdated={setIsUpdated}
                />
                <img
                  src={query.productImage}
                  alt={query.productName}
                  className="object-cover rounded h-64 rounded-t-2xl"
                />
                <div className="card-body justify-between space-y-2">
                  <div>
                    <h2 className="text-xl font-semibold mb-3">
                      {query.productName.slice(0, 20)}
                      {query.productName.length > 20 && " ..."}
                    </h2>
                    <p className="text-sm mb-2">
                      <span className="text-lg font-medium">Query Title:</span>{" "}
                      {query.queryTitle}
                    </p>
                    <p>
                      <span className="text-lg font-medium">
                        Boycott Reason:
                      </span>{" "}
                      {query.boycottReason.length > 30
                        ? query.boycottReason.slice(0, 60)
                        : query.boycottReason}
                      {query.boycottReason.length > 30 && " ...."}
                    </p>
                  </div>
                  <div className="flex justify-end gap-5 mt-4">
                    <Link to={`/query-details/${query._id}`}>
                      <button className="btn btn-sm btn-outline btn-primary">
                        <FaEye size={20} />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleOpenModal(query)}
                      className="btn btn-sm btn-outline btn-primary"
                    >
                      <FaEdit size={20} />
                    </button>
                    <button
                      onClick={() => handleDeleteQuery(query?._id)}
                      className="btn btn-sm btn-outline btn-primary"
                    >
                      <FaTrash size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyQueries;
