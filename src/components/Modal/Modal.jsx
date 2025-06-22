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
      <div className="modal-box bg-first">
        <h3 className="font-bold text-lg">Update your query</h3>
        <div className="modal-action block">
          <form method="dialog" onSubmit={handleUpdateQuery}>
            <div>
              <fieldset className="fieldset mb-3">
                <legend className="fieldset-legend text-lg font-normal text-white">
                  Product Name
                </legend>
                <input
                  type="text"
                  className="input focus:outline-third border-[1px] border-third w-full bg-second"
                  placeholder="Type here"
                  name="productName"
                  defaultValue={productName}
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
                  defaultValue={productBrand}
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
                  defaultValue={productImage}
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
                  defaultValue={queryTitle}
                />
              </fieldset>
              <fieldset className="fieldset mb-3 col-span-2">
                <legend className="fieldset-legend text-lg font-normal text-white">
                  Boycotting Reason Details
                </legend>
                <textarea
                  className="input focus:outline-third border-[1px] border-third w-full bg-second h-24 pt-2 text-lg text-wrap"
                  placeholder="The reason you don’t want this product"
                  name="boycottReason"
                  defaultValue={boycottReason}
                ></textarea>
              </fieldset>
            </div>

            <div className="flex justify-between gap-5">
              <div className="btn-border p-[1px]">
                <button type='submit' className="primary-btn">Update</button>
              </div>
              <div className="error-border p-[1px]">
                <a onClick={()=>document.getElementById("my_modal_5").close()} className="error-btn">Close</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;