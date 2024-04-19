"use client";

import { useParams } from "next/navigation";

export default function FormID() {
  const { id } = useParams();
  return <div>{id}</div>;
}
