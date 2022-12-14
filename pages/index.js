import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home({ products, page }) {
  return (
    <>
      <Head>
        <title>{page}Welcome | Lexie UI</title>
      </Head>

      <div className="flex flex-col justify-center items-center w-[100vw] h-[40vh] ">
        <div className="flex items-center">
          <h1 className="text-[8vw] lg:text-[4vw]  font-bold">WELCOME</h1>
          <p>Lexie UI</p>
        </div>
        <p className="w-[90%] text-[3vw] lg:text-[1.20vw] lg:w-[50%] text-center">
          Allow your customers to purchase multiple downloads at once using the
          shopping cart system. With minimum page loads and cleanly designed
          cart elements, the shopping cart feels seamless.
        </p>
      </div>

      <div className="flex justify-center items-center  w-[100vw] h-auto">
        <div className="grid gap-[4vw] py-[4vh] grid-cols-3 lg:grid-cols-3 place-items-center	items-center justify-center  w-[90%] h-full">
          {products?.length === 0 ? (
            <h1>Loading...</h1>
          ) : (
            products?.map((item, index) => (
              <div key={index} className="w-[25vw] h-[40vh]">
                <Link href={`/product/${item.id}`}>
                  <Image
                    className="cursor-pointer hover:scale-105 hover:rounded-[35px] rounded-[10px]"
                    src={item.download_url}
                    width={400}
                    height={300}
                    alt=""
                  ></Image>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="flex justify-center items-center w-[100vw] h-[14vh]">
        <Link href="/page/2">
          <a className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Next
            <svg
              aria-hidden="true"
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </Link>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://picsum.photos/v2/list?page=1&limit=25`);
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
}
