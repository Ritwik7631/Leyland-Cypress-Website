import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Skeleton } from "../ui/skeleton";

const DataTableSkeleton = () => {
  return (
    <div className="container">
      <Table>
        <TableCaption>
          <p className="mb-4 text-center italic text-xs text-gray-500">
            Past performance is not indicative of future performance.
          </p>
        </TableCaption>
        <TableHeader>
          <TableRow className="group">
            <TableHead></TableHead>

            <TableHead>
              <Skeleton className="h-5 w-full"></Skeleton>
            </TableHead>
            <TableHead>
              <Skeleton className="h-5 w-full"></Skeleton>
            </TableHead>
            <TableHead>
              <Skeleton className="h-5 w-full"></Skeleton>
            </TableHead>
            <TableHead>
              <Skeleton className="h-5 w-full"></Skeleton>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((i, item) => (
            <>
              <TableRow key={"datatable" + item} className="group">
                <TableCell className="font-semibold">
                  <Skeleton className="h-5 w-full"></Skeleton>
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-full"></Skeleton>
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-full"></Skeleton>
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-full"></Skeleton>
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-full"></Skeleton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTableSkeleton;
