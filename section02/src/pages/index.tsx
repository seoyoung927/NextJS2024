import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode, useEffect } from "react";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";
import { AppDispatch, RootState } from "@/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, increment } from "@/store/counterSlice";

export const getStaticProps = async () => {
  // 컴포넌트보다 먼저 실행되며, 컴포넌트에 필요한 데이터를 불러오는 함수
  // const data = "hello";
  // console.log("서버사이드프롭스에요");
  console.log("인덱스 페이지");

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
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
