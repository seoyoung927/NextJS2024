import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";

export default function Page() {
  return <h1>search</h1>;
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
