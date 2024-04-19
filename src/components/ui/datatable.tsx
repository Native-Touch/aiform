"use client";

import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type OnChangeFn,
  type PaginationState,
  type SortingState,
  type TableState,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "~/lib/utils";

import { Checkbox } from "./checkbox";
import { Button } from "~/components/ui/button";
import { DataTablePagination } from "~/components/ui/datatable-pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  sortable?: boolean;
  selectable?: boolean;
  manualPagination?: {
    totalRows: number;
  };
  onPaginationChange?: OnChangeFn<PaginationState>;
  defaultPageSize?: number;
  state?: Partial<TableState>;
  enablePageSizeChange?: boolean;
  onRowClick?: (row: TData) => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  sortable = false,
  selectable = false,
  manualPagination,
  onPaginationChange,
  defaultPageSize = 10,
  state,
  enablePageSizeChange = false,
  onRowClick,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns: selectable
      ? [
          {
            id: "select",
            header: ({ table }) => (
              <Checkbox
                checked={
                  table.getIsAllPageRowsSelected() ||
                  (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                  table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
              />
            ),
            cell: ({ cell }) => (
              <Checkbox
                checked={cell.row.getIsSelected()}
                onCheckedChange={(value) => cell.row.toggleSelected(!!value)}
                aria-label="Select row"
              />
            ),
            enableSorting: false,
            enableHiding: false,
          },
          ...columns,
        ]
      : columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    getSortedRowModel: getSortedRowModel(),
    manualPagination: !!manualPagination,
    rowCount: manualPagination?.totalRows,
    state: {
      ...state,
      sorting,
      rowSelection,
    },
    onPaginationChange,
  });

  useEffect(() => {
    defaultPageSize && table.setPageSize(defaultPageSize);
  }, []);

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="rounded-md">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className={cn(
                        "hover:bg-accent",
                        // @ts-expect-error - `classname` not in meta - cry about it
                        header.column.columnDef.meta?.headerClassName as string,
                      )}
                    >
                      {header.id === "select" || !sortable ? (
                        header.isPlaceholder ? null : (
                          flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )
                        )
                      ) : (
                        <Button
                          variant="ghost"
                          className={cn(
                            "w-full justify-between p-0 hover:bg-transparent",
                            header.column.columnDef.meta
                            // @ts-expect-error - `btnClassName` not in meta - cry about it
                              ?.btnClassName as string,
                          )}
                          onClick={() =>
                            header.column.toggleSorting(
                              header.column.getIsSorted() === "asc",
                            )
                          }
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                              )}
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  onClick={() => onRowClick?.(row.original)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={
                        // @ts-expect-error - `cellClassName` not in meta - cry about it
                        cell.column.columnDef.meta?.cellClassName as string
                      }
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="py-4">
        <DataTablePagination
          table={table}
          enablePageSizeChange={enablePageSizeChange}
        />
      </div>
    </div>
  );
}
