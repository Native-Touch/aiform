import { type Table } from "@tanstack/react-table";
import {
  ArrowLeftToLine,
  ArrowRightToLine,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Button } from "./button";
import { Input } from "./input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "./pagination";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  enablePageSizeChange?: boolean;
}

export function DataTablePagination<TData>({
  table,
  enablePageSizeChange = false,
}: DataTablePaginationProps<TData>) {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length > 0 && (
          <>
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </>
        )}
      </div>
      <div className="flex w-full items-center justify-end space-x-6 lg:space-x-8">
        {enablePageSizeChange && (
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">Rows per page</p>
            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(value) => {
                table.setPageSize(Number(value));
              }}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue
                  placeholder={table.getState().pagination.pageSize}
                />
              </SelectTrigger>
              <SelectContent side="top">
                {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
        <div className="flex w-fit items-center justify-center gap-2 text-sm font-medium">
          <span>Page</span>
          <Input
            className="h-8 w-fit"
            type="number"
            max={table.getPageCount()}
            min={1}
            value={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              if (
                Number(e.target.value) < 1 ||
                Number(e.target.value) > table.getPageCount()
              ) {
                return;
              }
              table.setPageIndex(Number(e.target.value) - 1);
            }}
          />
          <span>of {table.getPageCount()}</span>
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <Button
                variant="outline"
                size="icon"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <span className="sr-only">Go to previous page</span>
                <ChevronLeftIcon className="h-4 w-4" />
              </Button>
            </PaginationItem>
            {table.getState().pagination.pageIndex > 3 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            {getPageRange(
              table.getState().pagination.pageIndex,
              table.getPageCount(),
            ).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => table.setPageIndex(page)}
                  isActive={table.getState().pagination.pageIndex === page}
                >
                  {page + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            {table.getPageCount() - table.getState().pagination.pageIndex >
              4 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <Button
                variant="outline"
                size="icon"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <span className="sr-only">Go to next page</span>
                <ChevronRightIcon className="size-4" />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

function getPageRange(currentPage: number, pages: number): number[] {
  const range = Array.from({ length: pages }, (_, i) => i);
  if (pages < 4) {
    return range;
  }
  if (currentPage < 4) {
    return range.slice(0, 4);
  }
  if (currentPage > pages - 5) {
    return range.slice(pages - 4, pages);
  }
  return range.slice(currentPage - 1, currentPage + 2);
}
