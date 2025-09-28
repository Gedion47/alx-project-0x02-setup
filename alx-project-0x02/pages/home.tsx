import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { CardProps } from "@/interfaces";
import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<CardProps[]>([]);

  const handleAddPost = (newPost: CardProps) => {
    setPosts((prev) => [...prev, newPost]);
  };

  return (
    <div className="p-8">
      {/* Example static card */}
      <Header />
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

      {/* Section */}
      <div className="bg-white rounded-xl shadow-lg mt-8 p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome Home!</h2>
        <p className="text-gray-600">
          This content is rendered by the <strong>Home</strong> component. The
          header link directly controls whether this component is displayed.
        </p>
      </div>

      {/* Button to open modal */}
      <div className="mt-8">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
        >
          + Create New Listing
        </button>
      </div>

      {/* PostModal */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddPost={handleAddPost}
      />

      {/* Render newly created posts */}
      <div className="mt-8 space-y-6">
        {posts.map((post, index) => (
          <Card key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
