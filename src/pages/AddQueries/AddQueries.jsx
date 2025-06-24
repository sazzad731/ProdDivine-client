import Swal from "sweetalert2";
import useApi from "../../hooks/useApi";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";

const AddQueries = () => {
  const { addQueryPromise } = useApi();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddQuery = (event)=>{
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const QueryData = {
      ...data,
      email: user.email,
      name: user.displayName,
      profile: user.photoURL,
      recommendationCount: 0,
    };
    
    addQueryPromise(QueryData).then(result=>{
      if (result.insertedId) {
        Swal.fire({
          title: "Query added successful",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        })
        navigate("/my-queries")
        form.reset();
      }
    }).catch(err=>{
      Swal.fire({
        title: err.message,
        icon: "error"
      })
    })
  } 

  return (
    <div className="min-h-screen md:mt-40 mt-24 mb-20">
      <form onSubmit={handleAddQuery} className="linear-border-l p-[1px] rounded-2xl z-30">
        <div className="bg-first md:py-20 py-14 md:px-14 px-5 rounded-2xl">
          <h2 className="text-center text-3xl md:mb-20">Add Queries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            <fieldset className="fieldset mb-3">
              <legend className="fieldset-legend text-lg font-normal text-white">
                Product Name
              </legend>
              <input
                type="text"
                className="input focus:outline-third border-[1px] border-third w-full bg-second"
                placeholder="Type here"
                name="productName"
                required
              />
            </fieldset>
            <fieldset className="fieldset mb-3">
              <legend className="fieldset-legend text-lg font-normal text-white">
                Product Brand
              </legend>
              <input
                type="text"
                className="input focus:outline-third border-[1px] border-third w-full bg-second"
                placeholder="Type here"
                name="productBrand"
                required
              />
            </fieldset>
            <fieldset className="fieldset mb-3">
              <legend className="fieldset-legend text-lg font-normal text-white">
                Product Image-URL
              </legend>
              <input
                type="url"
                className="input focus:outline-third border-[1px] border-third w-full bg-second"
                placeholder="Type here"
                name="productImage"
                required
              />
            </fieldset>
            <fieldset className="fieldset mb-3">
              <legend className="fieldset-legend text-lg font-normal text-white">
                Query TItle
              </legend>
              <input
                type="text"
                className="input focus:outline-third border-[1px] border-third w-full bg-second"
                placeholder="ex: Is there any Better product that gives me the same quality?"
                name="queryTitle"
                required
              />
            </fieldset>
            <fieldset className="fieldset mb-3 md:col-span-2">
              <legend className="fieldset-legend text-lg font-normal text-white">
                Boycotting Reason Details
              </legend>
              <textarea
                className="input focus:outline-third text-wrap border-[1px] border-third w-full bg-second h-24 pt-2 text-lg"
                placeholder="The reason you don’t want this product"
                name="boycottReason"
                required
              ></textarea>
            </fieldset>
          </div>
          <div className="flex items-center justify-center">
            <div className="btn-border">
              <button className="primary-btn">Add Query</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddQueries;