import React from "react";

export function List(props: {
  items: { component: JSX.Element; name: string }[];
  callbackfn: (item: any) => JSX.Element;
}) {
  return (
    <ul role="list" className="divide-y divide-gray-200">
      {props.items.map(props.callbackfn)}
    </ul>
  );
}

export function ListItem(props: { item: any }) {
  return <li className="px-6 py-4">{props.item.component}</li>;
}
