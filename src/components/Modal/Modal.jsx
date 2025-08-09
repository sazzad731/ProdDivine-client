import React from 'react';
import useApi from '../../hooks/useApi';
import Swal from 'sweetalert2';

const Modal = ({query, setIsUpdated, isUpdated}) => {
  const { updateQueryPromise } = useApi();
  const { productName, productBrand, productImage, queryTitle, boycottReason, _id } = query;

  const handleUpdateQuery = (event)=>{
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const updatedData = Object.fromEntries(formData.entries());
    
    updateQueryPromise(_id, updatedData).then(result=>{
      if (result?.modifiedCount === 1) {
        Swal.fire({
          title: "Query update successful",
          icon: "success",
        })
        setIsUpdated(!isUpdated)
        document.getElementById("my_modal_5").close();
      }
      if (result?.modifiedCount === 0 && result?.matchedCount === 1) {
        Swal.fire({
          title: "You haven't changed anything.",
          icon: "warning",
        });
        document.getElementById("my_modal_5").close();
      }
    }).catch(err => {
      Swal.fire({
        title: err.message,
        icon: "error"
      })
    })
  }
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-base-100 dark:bg-base-300">
        <h3 className="font-bold text-lg">Update your query</h3>
        <div className="modal-action block">
          <form method="dialog" onSubmit={handleUpdateQuery}>
            <div>
              <fieldset className="fieldset mb-3">
                <legend className="fieldset-legend text-lg font-normal">
                  Product Name
                </legend>
                <input
                  type="text"
                  className="input focus:outline-primary border border-primary w-full bg-white dark:bg-black"
                  placeholder="Type here"
                  name="productName"
                  defaultValue={productName}
                />
              </fieldset>
              <fieldset className="fieldset mb-3">
                <legend className="fieldset-legend text-lg font-normal">
                  Product Brand
                </legend>
                <input
                  type="text"
                  className="input focus:outline-primary border border-primary w-full bg-white dark:bg-black"
                  placeholder="Type here"
                  name="productBrand"
                  defaultValue={productBrand}
                />
              </fieldset>
              <fieldset className="fieldset mb-3">
                <legend className="fieldset-legend text-lg font-normal">
                  Product Image-URL
                </legend>
                <input
                  type="url"
                  className="input focus:outline-primary border border-primary w-full bg-white dark:bg-black"
                  placeholder="Type here"
                  name="productImage"
                  defaultValue={productImage}
                />
              </fieldset>
              <fieldset className="fieldset mb-3">
                <legend className="fieldset-legend text-lg font-normal">
                  Query TItle
                </legend>
                <input
                  type="text"
                  className="input focus:outline-primary border border-primary w-full bg-white dark:bg-black"
                  placeholder="ex: Is there any Better product that gives me the same quality?"
                  name="queryTitle"
                  defaultValue={queryTitle}
                />
              </fieldset>
              <fieldset className="fieldset mb-3 col-span-2">
                <legend className="fieldset-legend text-lg font-normal">
                  Boycotting Reason Details
                </legend>
                <textarea
                  className="input focus:outline-primary border border-primary w-full bg-white dark:bg-black h-24 pt-2 text-lg text-wrap"
                  placeholder="The reason you don’t want this product"
                  name="boycottReason"
                  defaultValue={boycottReason}
                ></textarea>
              </fieldset>
            </div>

            <div className="flex justify-between gap-5">
                <button type="submit" className="btn btn-primary text-lg">
                  Update
                </button>
                <a
                  onClick={() => document.getElementById("my_modal_5").close()}
                  className="btn btn-outline btn-secondary text-black dark:text-neutral text-base"
                >
                  Close
                </a>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;