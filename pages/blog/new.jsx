import React from "react";
import Head from "next/head";
import { useState } from "react";
import Markdown from "marked-react";

const New = () => {
  const [markdown, setMarkdown] = useState(``);
  const [data, setData] = useState(``);

  return (
    <div>
      <Head>
        <title>Rasso Blog | Create New</title>
        <meta name="description" content="Blogger" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="overflow-hidden flex w-screen h-screen font-body">
        <div className="h-4/6 w-1/2 pt-5 p-4 ">
          <h2 className="pb-2 text-xl font-bold text-center">Edit Blog</h2>
          <div className="inputs flex flex-col gap-4 pb-4 pt-5">
            <input
              type="text"
              placeholder="Title"
              className="p-4 px-4 border-2 border-gray-500 rounded-md"
              onInput={(e) => setData({ ...data, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Author"
              className="p-4 px-4 border-2 border-gray-500 rounded-md"
              onInput={(e) => setData({ ...data, author: e.target.value })}
            />
          </div>
          <textarea
            onInput={(e) => {
              setMarkdown(e.target.value);
            }}
            className="rounded-lg resize-none w-full h-full font-body px-4 py-2 border-2 border-gray-500"
          ></textarea>
          <div className="buttons">
            <button className="p-2 bg-green-500 rounded-md hover:bg-green-300">
              Save Post
            </button>
            <button className="p-2 bg-red-500 rounded-md hover:bg-red-300 ml-2">
              Preview
            </button>
          </div>
        </div>
        <div className="w-1/2 border pt-5 p-4 max-h-full overflow-scroll">
          <h2 className="pb-2 text-xl font-bold text-center">Blog Preview</h2>
          <div className="lg:prose-xl w-full break-words">
            <h1>{data.title ? data.title : ""}</h1>
            <h4>{data.author ? "author : " + data.author : ""}</h4>
            <Markdown>{`${markdown}`}</Markdown>
          </div>
        </div>
      </main>
    </div>
  );
};

export default New;
