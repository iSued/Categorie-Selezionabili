import React from "react";
import "./index.css";

const FeedBack: React.FC<{
  goodTest: boolean;
}> = ({ goodTest }) => {
  return <>{goodTest ? <h1>hello</h1> : <h1>not hello</h1>}</>;
};

export default FeedBack;
