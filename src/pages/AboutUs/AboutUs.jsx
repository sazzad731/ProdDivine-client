import React from "react";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <div className="mb-40 mt-28">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-4">About ProdDivine</h1>
      <p className="text-center text-neutral/60 max-w-3xl mx-auto mb-10">
        ProdDivine is your go-to platform for discovering, sharing, and
        recommending the best products. Whether you’re searching for better
        alternatives, avoiding certain brands, or simply exploring trending
        ideas, ProdDivine connects you with a community of real product
        experiences and recommendations.
      </p>

      {/* Top Image */}
      <img
        src="https://stackbros.in/q&a/assets/images/post/02.jpg"
        alt="People discussing products"
        className="w-full rounded-xl mb-10"
      />

      {/* Core Values Section */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-2">Our Core Values</h2>
          <p className="text-neutral/60 mb-4">
            At ProdDivine, our values guide how we build trust and foster
            collaboration among product seekers and recommenders. We believe in
            honest feedback, helpful recommendations, and creating a safe space
            for meaningful discussions about products.
          </p>

          <h3 className="text-lg font-semibold mb-1">Deliver with Quality</h3>
          <ul className="list-disc list-inside text-neutral/60 mb-4">
            <li>
              Provide honest, detailed, and unbiased product recommendations.
            </li>
            <li>Encourage verified experiences over hearsay.</li>
            <li>Help users make confident purchasing decisions.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-1">
            Build and Lead a Helpful Community
          </h3>
          <ul className="list-disc list-inside text-neutral/60 mb-4">
            <li>Promote respectful and constructive discussions.</li>
            <li>Celebrate diversity of opinions and recommendations.</li>
            <li>Foster trust through transparency and authenticity.</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid md:grid-cols-2 gap-8 mt-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
          alt="Community sharing ideas"
          className="rounded-xl"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Always Discover. Always Share.
          </h2>
          <p className="text-neutral/60 mb-4">
            We believe every product story matters. From hidden gems to popular
            trends, our goal is to connect people with better choices. By
            sharing and discovering together, we make smarter and more informed
            decisions.
          </p>
          <ul className="grid grid-cols-2 gap-2 text-neutral/80 mb-4">
            <li className="flex items-center gap-2">
              ✅ Learn, share, and grow
            </li>
            <li className="flex items-center gap-2">
              ✅ Keep community at our center
            </li>
            <li className="flex items-center gap-2">
              ✅ Adopt a customer-first mindset
            </li>
            <li className="flex items-center gap-2">
              ✅ Empower users to discover the best
            </li>
            <li className="flex items-center gap-2">
              ✅ Be flexible and inclusive
            </li>
            <li className="flex items-center gap-2">✅ Be transparent</li>
          </ul>
          <Link to="/my-queries" className="btn btn-primary">
            Get answer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
