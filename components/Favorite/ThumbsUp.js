import React from "react";
import { HiThumbUp } from "react-icons/hi";

const ThumbsUp = () => {
  const [checked, setChecked] = React.useState(false);

  function toggle() {
    setChecked(!checked);
  }

  return (
    <HiThumbUp
      onClick={() => toggle()}
      className={`${
        checked ? "text-blue-500" : "text-white"
      } h-10 w-10 cursor-pointer`}
    />
  );
};

export default ThumbsUp;
