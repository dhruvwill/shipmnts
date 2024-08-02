import FileList from "@/components/FileList";
import SearchBar from "@/components/SearchBar";
import TestQuery from "@/components/TestQuery";
import TreeView from "@/components/TreeView";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex">
      <div className="p-5 min-w-[250px] flex flex-col gap-2">
        <div className="flex items-center w-full max-w-sm space-x-2 rounded-lg border border-gray-300 bg-secondary dark:bg-gray-900 px-3.5 py-2">
          <SearchBar />
        </div>
        <TreeView />
      </div>
      <div className="p-5">
        <FileList />
      </div>
    </main>
  );
}
