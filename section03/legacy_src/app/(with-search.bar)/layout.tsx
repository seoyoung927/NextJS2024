import { ReactNode } from "react";
import Searchbar from "../components/searchbar";
import Link from "next/link";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Searchbar />
      {children}
    </div>
  );
}
