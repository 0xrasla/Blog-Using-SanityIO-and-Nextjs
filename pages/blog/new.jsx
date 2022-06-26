import React from "react";
import Head from "next/head";

const New = () => {
  return (
    <div>
      <Head>
        <title>Rasso Blog | Create New</title>
        <meta name="description" content="Blogger" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="overflow-hidden">
        <div className="h-screen">
          <textarea className="rounded-lg resize-none w-1/2 h-full font-body px-4 py-2"></textarea>
        </div>
      </main>
    </div>
  );
};

export default New;
