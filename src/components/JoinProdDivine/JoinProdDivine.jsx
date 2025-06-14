import expert from "../../assets/img/experts.png"
import insights from "../../assets/img/Insights.png"

const JoinProdDivine = () => {
  return (
    <div className="mb-40">
      <p className="mb-5">Join Our Community</p>
      <h2 className="sm:text-3xl font-semibold text-2xl mb-3">Become a Part of ProdDivine</h2>
      <p className="mb-10">
        Join our vibrant community of product enthusiasts and experts to share
        your knowledge and discover new products.
      </p>
      <div className="grid md:grid-cols-2 lg:gap-10 gap-7">
        <div className="linear-border-l p-[1px] rounded-xl">
          <div className="bg-first rounded-xl p-5 w-full h-full">
            <img src={expert} alt="image" className="mb-5 w-full" />
            <h4 className="text-xl font-bold mb-2">Connect with Experts</h4>
            <p className="font-light text-white/70">
              Engage with experienced users and industry professionals to get
              valuable advice and recommendations.
            </p>
          </div>
        </div>
        <div className="linear-border-r p-[1px] rounded-xl">
          <div className="bg-first rounded-xl p-5 w-full h-full">
            <img src={insights} alt="image" className="mb-5 w-full" />
            <h4 className="text-xl font-bold mb-2">Share Your Insights</h4>
            <p className="font-light text-white/70">
              Contribute to the community by sharing your product experiences
              and insights with other users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinProdDivine;