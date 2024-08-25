import SearchableLayout from "@/components/searchable-layout";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import BookItem from "@/components/book-item";
import fetchBooks from "@/lib/fetch-books";
import { BookData } from "@/type";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Head from "next/head";

export default function Page() {
  // redux
  const value = useSelector((state: RootState) => state.counter.value);

  const [books, setBooks] = useState<BookData[]>([]);

  const router = useRouter();
  const q = router.query.q;

  const getSearchResult = async () => {
    const data = await fetchBooks(q as string);
    setBooks(data);
  };

  useEffect(() => {
    if (q) {
      getSearchResult();
    }
  }, [q]);

  return (
    <div>
      <Head>
        <title>한입북스</title>
        <meta property="og:image" content="/thumnail.png" />
        <meta property="og:title" content="한입북스" />
        <meta property="og:description" content="한입 북스에 등록된 도서들을 만나보세요" />
      </Head>

      <h3>redux를 이용한 counter 테스트</h3>
      {value}

      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
