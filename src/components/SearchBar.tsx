import React from "react";
import { IoMdSearch } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  placeholder?: string;
};

const SearchBar = (props: Props) => {
  return (
    <div className="flex items-center px-2">
      <IoMdSearch size={20} />
      <Input
        type="search"
        placeholder={props.placeholder}
        className={cn(props.className)}
      />
    </div>
  );
};

export default SearchBar;
