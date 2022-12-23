import { List } from "../../components/List";
import React from "react";

export function Layout(props: {
  items: (
    | { component: JSX.Element; name: string }
    | { component: JSX.Element; name: string }
    | { component: JSX.Element; name: string }
    | { component: JSX.Element; name: string }
  )[];
  callbackfn: (item: any) => JSX.Element;
}) {
  return (
    <div className="overflow-hidden rounded-md bg-white shadow">
      <List items={props.items} callbackfn={props.callbackfn} />
    </div>
  );
}
