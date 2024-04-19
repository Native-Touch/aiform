import {
  ArrowLeftToLine,
  ArrowRightToLine,
  ChevronLeftIcon,
  ChevronRightIcon,
  Loader,
  Loader2,
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

interface CustomPaginationProps {
  totalRows: number;
  loading?: boolean;
  pageIndex?: number;
  pageSize?: number;
  selectedRows?: number;
  enablePageSizeChange?: boolean;
  onPaginationChange?: (pageIndex: number, pageSize: number) => void;
}

export function CustomPagination({
  totalRows,
  loading = true,
  selectedRows,
  pageIndex = 0,
  pageSize = 10,
  enablePageSizeChange = false,
  onPaginationChange,
}: CustomPaginationProps) {
  function onPageChange(pageIndex: number) {
    onPaginationChange?.(pageIndex, 10);
  }

  function onPageSizeChange(pageSize: number) {
    onPaginationChange?.(pageIndex, pageSize);
  }

  function getPageCount() {
    return Math.ceil(totalRows / pageSize);
  }

  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex-1 text-sm text-muted-foreground">
        {selectedRows && (
          <>
            {selectedRows} of {totalRows} row(s) selected.
          </>
        )}
      </div>
      <div className="flex w-full items-center justify-end space-x-6 lg:space-x-8">
        {loading && (
          <div>
            <Loader2 className="size-5 animate-spin" />
            <span className="sr-only">Loading</span>
          </div>
        )}
        {enablePageSizeChange && (
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">Rows per page</p>
            <Select
              value={`${pageSize}`}
              onValueChange={(value) => {
                onPageSizeChange(Number(value));
              }}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue placeholder={pageSize} />
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
            max={getPageCount()}
            min={1}
            value={pageIndex + 1}
            onChange={(e) => {
              if (
                Number(e.target.value) < 1 ||
                Number(e.target.value) > getPageCount()
              ) {
                return;
              }
              onPageChange(Number(e.target.value) - 1);
            }}
          />
          <span>of {getPageCount()}</span>
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <Button
                variant="outline"
                size="icon"
                onClick={() => onPageChange(pageIndex - 1)}
                disabled={!pageIndex}
              >
                <span className="sr-only">Go to previous page</span>
                <ChevronLeftIcon className="h-4 w-4" />
              </Button>
            </PaginationItem>
            {pageIndex > 3 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            {getPageRange(pageIndex, getPageCount()).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => onPageChange(page)}
                  isActive={pageIndex === page}
                >
                  {page + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            {getPageCount() - pageIndex > 4 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <Button
                variant="outline"
                size="icon"
                onClick={() => onPageChange(pageIndex + 1)}
                disabled={pageIndex === getPageCount() - 1}
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
