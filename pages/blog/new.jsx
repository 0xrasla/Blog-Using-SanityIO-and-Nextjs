import React from "react";
import Head from "next/head";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

const New = () => {
  const [markdown, setMarkdown] = useState(``);

  return (
    <div>
      <Head>
        <title>Rasso Blog | Create New</title>
        <meta name="description" content="Blogger" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="overflow-hidden flex w-screen">
        <div className="h-screen w-1/2 border">
          <textarea
            onInput={(e) => {
              setMarkdown(e.target.value);
            }}
            className="rounded-lg resize-none w-full h-full font-body px-4 py-2"
          ></textarea>
        </div>
        <div className="render-markdown font-body px-4">
          <ReactMarkdown remarkPlugins={[gfm]}>{`${markdown}`}</ReactMarkdown>
        </div>
      </main>
    </div>
  );
};

export default New;
