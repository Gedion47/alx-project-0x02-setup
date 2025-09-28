import React from "react";
import Card from "@/components/common/Card";

export const Home: React.FC = () => (
  <div>
    <Card
      title="Beautiful Apartment"
      location="New York, NY"
      price="$120"
      rating={4.5}
      content={["Top Villa", "Self Checkin", "Free Reschedule"]}
      imageUrl="/assets/listing images/List 1.svg"
      iconsUrl={[
        "/assets/Icons/bed 1.svg",
        "/assets/Icons/bathtub 1.svg",
        "/assets/Icons/people 1.svg",
      ]}
    />
    <div className="p-8 bg-white rounded-xl shadow-lg mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome Home!</h2>
      <p className="text-gray-600">
        This content is rendered by the **Home** component. The header link
        directly controls whether this component is displayed.
      </p>
    </div>
  </div>
);
export default Home;
