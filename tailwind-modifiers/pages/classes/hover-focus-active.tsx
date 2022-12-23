import type { NextPage } from "next";
import React from "react";
import { ListItem } from "../../components/List";
import { Layout } from "../components/Layout";

const Page: NextPage = () => {
  const items = [
    {
      name: "Full",
      component: (
        <button
          type="button"
          className="rounded-full bg-violet-500 px-5 py-2 text-sm font-semibold leading-5 text-white hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700"
        >
          Full Example
        </button>
      ),
    },

    {
      name: "Hover",
      component: (
        <button
          type="button"
          className="btn-no-state bg-violet-500 hover:bg-violet-600"
        >
          Hover
        </button>
      ),
    },
    {
      name: "Focus",
      component: (
        <button
          type="button"
          className="btn-no-state bg-violet-500 focus:outline-none focus:ring focus:ring-violet-300"
        >
          Focus (Tab/Click)
        </button>
      ),
    },
    {
      name: "Active",
      component: (
        <button
          type="button"
          className="btn-no-state bg-violet-500 active:bg-violet-700"
        >
          Active (Pressed)
        </button>
      ),
    },
  ];
  return (
    <>
      <Layout
        items={items}
        callbackfn={(item) => <ListItem key={item.name} item={item} />}
      />
    </>
  );
};

export default Page;
