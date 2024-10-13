import React from "react";
import { CodeIcon, CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";

function Logo() {
  return (
    <div className="flex flex-direction-column items-center gap-2">
      <a className="flex items-center gap-4" href="/">
        <div className="h-12 w-12">
          <CodeIcon width={50} height={50} />
        </div>
        <span className="text-5xl lg:text-5xl">.dev</span>
      </a>
    </div>
  );
}

export default Logo;
