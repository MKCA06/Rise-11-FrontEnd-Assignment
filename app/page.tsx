"use client";
import Topbar from "@/components/topbar";
import Sidebar from "@/components/sidebar";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import Impression from "@/components/impression";
import Revenue from "@/components/revenue";
import VisitorGraph from "@/components/visitors";
import CourseStatus from "@/components/course-status";

export default function Home() {
  return (
    <>
      <div className="flex ">
        <Sidebar />
        <div className="w-full md:ml-40 md:px-40 px-4 ">
          <Topbar />
          <Impression />
          <div className="flex items-center justify-center md:flex-row flex-col mt-10 ">
            <div className=" w-full  md:w-8/12">
              <Revenue />
            </div>
            <div className="w-full md:w-4/12">
              <VisitorGraph />
            </div>
          </div>
          <div className="mt-10">
            <CourseStatus />
          </div>
        </div>
      </div>
    </>
  );
}
