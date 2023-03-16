import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/outline";

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex items-center">
      <StarIcon
        className={`h-6 w-6 ml-2 ${
          isHovered ? "text-yellow-400" : "text-gray-400"
        }`}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      />
    </div>
  );
};

export default Logo;
