import React from "react";
import Footer from "./Footer/Footer";

const Heading = (props) => {
  console.log("Heading", props);
  const { fields } = props.module;
  return (
    <div className="relative px-8">
      <div className="max-w-screen-xl mx-auto my-12 md:mt-18 lg:mt-20">
        <h1 className="font-display text-secondary-500 text-4xl font-black tracking-wide">
          {fields.title}
        </h1>
        <p className="font-display text-secondary-500 text-4xl font-black tracking-wide">
          {fields.description}
        </p>
      </div>
      <Footer module={props.module} />
    </div>
  );
};

export default Heading;
