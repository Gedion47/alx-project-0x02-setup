import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

export const About: React.FC = () => (
  <>
    <Header />
    <div className="p-8 bg-white rounded-xl shadow-lg mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        About Our Project
      </h2>
      <p className="text-gray-600">
        This content is rendered by the **About** component. Clicking the About
        link updates the application state to show this component.
      </p>
    </div>
    <Button label="Go Back" onClick={() => {}} />
    <Button
      label="Click Me"
      onClick={() => alert("Button Clicked!")}
      className="bg-blue-500 text-white"
    />
    <Button label="Submit" type="submit" className="bg-green-500 text-white" />
    <Button label="Reset" type="reset" className="bg-red-500 text-white" />
  </>
);
export default About;
