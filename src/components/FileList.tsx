import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import SearchBar from "./SearchBar";
import { Button } from "./ui/button";
import { IoMdAddCircleOutline, IoMdArrowDropdown } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { CgRename } from "react-icons/cg";

type Props = {};

const FileList = (props: Props) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="h-11 flex items-center">
        <Breadcrumb className="ps-2">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="bg-secondary rounded-lg p-2 max-w-lg">
            <SearchBar
              placeholder="Search for a file"
              className=" min-w-[200px] !border-0 h-6 font-semibold bg-transparent !outline-none !ring-0"
            />
          </div>
          <div className="p-2 flex gap-2">
            <Button className="!text-xs flex gap-1">
              <IoMdAddCircleOutline size={20} />
              New File
            </Button>
            <Button className="!text-xs flex gap-1">
              <IoMdAddCircleOutline size={20} />
              New Folder
            </Button>
          </div>
        </div>
        <Table className="w-full rounded-lg overflow-hidden border-2">
          <TableCaption>Made with 💖 in Shipmnts</TableCaption>
          <TableHeader className="bg-secondary">
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead className="text-right">Size</TableHead>
              <TableHead className="text-right">Last Modified</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">File 1</TableCell>
              <TableCell className="text-right text-primary/50">1 mb</TableCell>
              <TableCell className="text-right text-primary/50">
                2 months ago
              </TableCell>
              <TableCell className="text-right flex justify-end">
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none p-1 rounded-sm bg-secondary">
                    <IoMdArrowDropdown />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem className="flex gap-2">
                      <CgRename size={15} />
                      Rename
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex gap-2">
                      <MdDeleteOutline size={15} />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default FileList;
