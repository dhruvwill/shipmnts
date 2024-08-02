import React from "react";
import { IoMdSearch } from "react-icons/io";
import { Input } from "@/components/ui/input";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className="flex items-center px-2">
      <IoMdSearch size={20} />
      <Input
        type="search"
        placeholder="Go to File"
        className="w-full !border-0 h-8 font-semibold bg-transparent !outline-none !ring-0"
      />
    </div>
  );
};

export default SearchBar;
