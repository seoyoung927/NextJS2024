import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode, useEffect } from "react";
import BookItem from "@/components/book-item";
import { InferGetStaticPropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";
import { AppDispatch, RootState } from "@/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, increment } from "@/store/counterSlice";
import Head from "next/head";

export const getStaticProps = async () => {
  const [allBooks, recoBooks] = await Promise.all([fetchBooks(), fetchRandomBooks()]);

  return {
    props: {
      allBooks,
      recoBooks,
    },
  };
};

export default function Home({
  allBooks,
  recoBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // redux
  const dispatch: AppDispatch = useDispatch();
  const value = useSelector((state: RootState) => state.counter.value);
  const handleValueIncrement = () => {
    dispatch(increment());
  };
  const handleValueDecrement = () => {
    dispatch(decrement());
  };

  useEffect(() => {
    console.log(window);
  }, []);

  return (
    <>
      <Head>
        <title>한입북스</title>
        <meta property="og:image" content="/thumnail.png" />
        <meta property="og:title" content="한입북스" />
        <meta property="og:description" content="한입 북스에 등록된 도서들을 만나보세요" />
      </Head>
      <div className={style.container}>
        <section>
          <h3>redux를 이용한 counter 테스트</h3>
          <div>
            <button onClick={handleValueIncrement}>증가</button>
            <button onClick={handleValueDecrement}>감소</button>
            {value}
          </div>
        </section>
        <section>
          <h3>지금 추천하는 도서</h3>
          {recoBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </section>
        <section>
          <h3>등록된 모든 도서</h3>
          {allBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </section>
      </div>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
