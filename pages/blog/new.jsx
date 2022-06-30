import React from "react";
import Head from "next/head";
import { useState } from "react";
import Markdown from "marked-react";
import { useRouter } from "next/router";
import slugify from "slugify";

const New = () => {
  const [markdown, setMarkdown] = useState(``);
  const [data, setData] = useState(``);

  const openPreview = () => {
    window.open(`/blog/${"2"}/preview`, "_blank");
  };

  const createPost = (e) => {
    console.log("dada");
    e.preventDefault();
    const slug = slugify(data.title, { lower: true });
    const sanitizedMarkdown = markdown.replace(/<\/?[^>]+(>|$)/g, "");
    const post = {
      title: data.title,
      author: data.author,
      image: data.image,
      markdown: sanitizedMarkdown,
      slug: slug,
    };
    console.log(post);
  };

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
          <form onSubmit={(e) => createPost(e)} className="h-full">
            <div className="inputs flex flex-col gap-4 pb-4 pt-5">
              <input
                type="text"
                placeholder="Title"
                value={data.title || ""}
                required
                className="p-4 px-4 border-2 border-gray-500 rounded-md"
                onInput={(e) => setData({ ...data, title: e.target.value })}
              />
              <input
                type="text"
                placeholder="Author"
                required
                className="p-4 px-4 border-2 border-gray-500 rounded-md"
                onInput={(e) => setData({ ...data, author: e.target.value })}
              />
              <div className="form_field">
                <input
                  className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-500 cursor-pointer "
                  aria-describedby="file_input_help"
                  id="file_input"
                  required
                  type="file"
                  accept="image/*"
                />
                <p className="mt-1 text-sm text-gray-500 " id="file_input_help">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
            </div>
            <textarea
              onInput={(e) => {
                setMarkdown(e.target.value);
              }}
              required
              className="rounded-lg resize-none w-full h-3/4 font-body px-4 py-2 border-2 border-gray-500"
            ></textarea>
            <div className="buttons mt-4">
              <button
                className="p-2 bg-green-500 rounded-md hover:bg-green-300"
                type="submit"
              >
                Publish Post
              </button>
              <button
                className="p-2 bg-red-500 rounded-md hover:bg-red-300 ml-2"
                onClick={() => openPreview()}
              >
                Preview
              </button>
            </div>
          </form>
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
