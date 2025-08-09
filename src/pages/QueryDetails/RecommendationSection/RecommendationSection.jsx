import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useRecommendationApi from "../../../hooks/useRecommendationApi";
import { useNavigate } from "react-router";

const RecommendationSection = ({query, setUpdatedRecCount}) => {
  const { user } = useAuth();
  const { addRecommendationPromise } = useRecommendationApi();
  const navigate = useNavigate();

  const handleAddRecommendation = (event)=>{
    event.preventDefault();
    if(!user){
      return navigate("/login")
    }
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const recommendedData = {
      ...data,
      queryId: query._id,
      queryTitle: query.queryTitle,
      productName: query.productName,
      userEmail: query.email,
      userName: query.name,
      recommenderEmail: user.email,
      recommenderName: user.displayName,
    };
    addRecommendationPromise(recommendedData).then(result => {
      if (result.updateRecommendationCount.modifiedCount === 1) {
        Swal.fire({
          title: "Successfully added Recommendation",
          icon: "success"
        })
        setUpdatedRecCount(1)
        form.reset();
      }
    }).catch(err => {
      Swal.fire({
        title: err.message,
        icon: "error"
      })
    });
  }
  return (
    <div>
      <h2 className="text-center text-3xl font-semibold mb-2">
        Recommend a Better Alternative
      </h2>
      <p className="text-center mb-10">
        Help others discover smarter options with your experience.
      </p>
      <div>
        <form
          onSubmit={handleAddRecommendation}
          className="rounded-2xl"
        >
          <div className="bg-primary/20 md:py-20 py-14 md:px-14 px-5 rounded-2xl">
            <h2 className="text-center text-2xl mb-20">Recommend a Product</h2>
            <div className="grid md:grid-cols-2 gap-5 mb-10">
              <fieldset className="fieldset mb-3">
                <legend className="fieldset-legend text-lg font-normal">
                  Recommended Product Name
                </legend>
                <input
                  type="text"
                  className="input focus:outline-primary border border-primary w-full bg-base-100"
                  placeholder="Type here"
                  name="recommendedProductName"
                  required
                />
              </fieldset>
              <fieldset className="fieldset mb-3">
                <legend className="fieldset-legend text-lg font-normal">
                  Recommendation Title
                </legend>
                <input
                  type="text"
                  className="input focus:outline-primary border border-primary w-full bg-base-100"
                  placeholder="Type here"
                  name="recommendationTitle"
                  required
                />
              </fieldset>
              <fieldset className="fieldset mb-3">
                <legend className="fieldset-legend text-lg font-normal">
                  Recommended Product Image
                </legend>
                <input
                  type="url"
                  className="input focus:outline-primary border border-primary w-full bg-base-100"
                  placeholder="Type here Image url"
                  name="recommendedProductImage"
                  required
                />
              </fieldset>
              <fieldset className="fieldset mb-3">
                <legend className="fieldset-legend text-lg font-normal">
                  Recommendation reason
                </legend>
                <textarea
                  className="input focus:outline-primary border border-primary w-full bg-base-100  text-lg text-wrap"
                  placeholder="Type here"
                  name="recommendationReason"
                  required
                ></textarea>
              </fieldset>
            </div>
            <div className="flex items-center justify-center">
              <button type="submit" className="btn btn-primary text-lg">
                Add Recommendation
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecommendationSection;