/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
//https://freepngimg.com/save/40041-graph-image-png-file-hd/960x640
function Impress(props: any) {
  let { name, number }: any = props;
  return (
    <>
      <div className="flex my-2 border-l-2 pl-2 border-l-purple-600">
        <div>
          <h4 className="font-semibold mb-4">{name}</h4>
          <span className="mt-4 font-semibold">{number}</span>
        </div>
        <div className=" flex items-center justify-center">
          <img
            className="h-20 w-20"
            src="https://freepngimg.com/save/40041-graph-image-png-file-hd/960x640"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
function Impression() {
  const data = [
    {
      name: "Impression",
      number: 832,
    },
    {
      name: "Total audience",
      number: 832,
    },
    {
      name: "Engagements",
      number: 832,
    },
    {
      name: "Engaged audience",
      number: 832,
    },
  ];
  return (
    <>
      <div className="grid mt-10 md:grid-cols-4 grid-cols-2">
        {data.map((doc: any) => {
          return (
            <>
              <Impress name={doc.name} number={doc.number} />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Impression;
