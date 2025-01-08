import React from "react";
import { BrowserRouter, Outlet, useNavigate } from "react-router";

function ProjectDetails() {
  const navigate = useNavigate();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    navigate(`/projects`);
  };

  return (
    <div className="my-12 mx-8">
      <div className="flex min-h-full w-full">
        <form onSubmit={handleOnSubmit} className="space-y-6 w-full md:w-3/5">
          <div className="flex flex-col md:flex-row items-start gap-2 md:gap-6">
            <label
              htmlFor="email"
              className="w-28 block text-left md:text-right text-sm/6 font-bold text-gray-900"
            >
              Project Id
            </label>
            <div className="">
              <p>Project_a</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-2 md:gap-6">
            <label
              htmlFor="name"
              className="w-28 text-left md:text-right block text-sm/6 font-bold text-gray-900"
            >
              Project name
            </label>
            <div className="w-full md:w-1/3">
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-2 md:gap-6">
            <label
              htmlFor="description"
              className="w-28 block text-left md:text-right text-sm/6 font-bold text-gray-900"
            >
              Description
            </label>
            <div className="w-full md:w-[calc(100%-112px)]">
              <textarea
                id="description"
                name="description"
                rows="5"
                placeholder="Enter project description"
                required
                autoComplete="current-description"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-2 md:gap-6">
            <label
              htmlFor="startDate"
              className="w-28 block text-left md:text-right text-sm/6 font-bold text-gray-900"
            >
              Start date
            </label>
            <div className="w-full md:w-1/3">
              <input
                id="startDate"
                name="startDate"
                type="date"
                required
                autoComplete="startDate"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-2 md:gap-6">
            <label
              htmlFor="endDate"
              className="w-28 text-left md:text-right block text-sm/6 font-bold text-gray-900"
            >
              End date
            </label>
            <div className="w-full md:w-1/3">
              <input
                id="endDate"
                name="endDate"
                type="date"
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-2 md:gap-6">
            <label
              htmlFor="email"
              className="w-28 text-left md:text-right block text-sm/6 font-bold text-gray-900"
            >
              Project manager
            </label>
            <div className="w-full md:w-1/3">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="m-0 md:ml-28 p-0 md:pl-6">
            <button
              type="submit"
              className="flex w-full md:w-28 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
      <Outlet />
    </div>
  );
}

export default ProjectDetails;
