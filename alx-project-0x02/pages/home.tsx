import React from "react";
export const Home: React.FC = () => (
  <div className="p-8 bg-white rounded-xl shadow-lg mt-8">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome Home!</h2>
    <p className="text-gray-600">
      This content is rendered by the **Home** component. The header link
      directly controls whether this component is displayed.
    </p>
  </div>
);
export default Home;
