import React, { useState } from "react";
import "../index.css";
import { dummyData } from "./constants";

export default function Todo() {
  const [todos, setTodos] = useState(dummyData);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [isfiltered, setIsFiltered] = useState(false);

  const updatevalue = () => {
    if (title.trim() !== "") {
      let newTodoItem = {
        title: title,
        description: description,
        date: new Date().toISOString().slice(0, 10),
        id: new Date().getTime(),
      };

      let updatearr = [...todos, newTodoItem];

      setTodos(updatearr);
      setTitle("");
      setDescription("");
      setIsFiltered(false);
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
   
  };



  const filterIem = (filterItem, searchData) => {
    const filteredData = searchData.filter((item) =>
      item?.date?.includes(filterItem)
    );
    return filteredData;
  };

  const handleFilterTodos = (e) => {
    filterTodosByDateRange(startDate, e.target.value);
  };

  const filterTodos = () => {
    const startDateTime = startDate ? new Date(startDate) : null;
    const endDateTime = endDate ? new Date(endDate) : null;

    const filtered = todos.filter((todo) => {
      const todoDate = new Date(todo.date);
      return (
        (!startDateTime || todoDate >= startDateTime) &&
        (!endDateTime || todoDate <= endDateTime)
      );
    });
    setIsFiltered(true);
    setFilteredTodos(filtered);
  };

  const handleWeekdayButtonClick = (weekday) => {
    const filtered = todos.filter((todo) => {
      const todoDate = new Date(todo.date);
      const todoDayOfWeek = todoDate.getDay();

      const isWeekdayMatch =
        weekday === "" ||
        weekday.toLowerCase() === getWeekdayName(todoDayOfWeek).toLowerCase();

      return isWeekdayMatch;
    });

    setIsFiltered(true);
    setFilteredTodos(filtered);
  };

  const getWeekdayName = (dayOfWeek) => {
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return weekdays[dayOfWeek];
  };

  return (
    <>
      <div className="min-h-screen min-w-min place-content-center">
        <div className="place-content-center m-4 p-1 py-8 border-2 border-blue-400 rounded-md flex justify-around flex-nowrap min-h-full">
          <div className="w-1/2">
            <div className="border-2 border-blue-300 m-4 h-10 min-w-52 w-1/3 rounded ">
              <input
                className="min-w-full  min-h-full p-1 focus:outline-none"
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title.."
              />
            </div>

            <div className="border-2 border-blue-300 m-4 h-36 w-3/4 min-w-64 rounded">
              <textarea
                className="min-w-full min-h-full p-1 focus:outline-none"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id=""
                placeholder="Description..."
              />
            </div>
          </div>

          <div className="my-2">
            <label className="font-semibold">Filter :</label>
            <div className="">
              <div className=" flex flex-wrap ">
                <div className="flex flex-wrap">
                  <label>Start Date :</label>

                  <div className="mx-2 border border-black rounded-md h-8">
                    <input
                      className="m-0.5 focus:outline-none"
                      type="date"
                      id="startDate"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      placeholder="Title.."
                    />
                  </div>
                </div>
                <div className="flex flex-wrap ml-3">
                  <label>End Date :</label>

                  <div className="mx-2 border border-black h-8 rounded-md">
                    <input
                      className="m-0.5 focus:outline-none"
                      type="date"
                      id="endDate"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <button
                      onClick={filterTodos}
                      className="bg-indigo-50 focus:ring-indigo-400 focus:ring border-1 border-indigo text-black font-semibold  border-indigo rounded-md p-1 ml-5 px-3 py-1.5"
                    >
                      Filter Todos
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 ml-96 ">
              <button
                onClick={updatevalue}
                className="bg-sky-500 hover:bg-sky-700  border-2 border-slate-600 text-white font-semibold rounded-md  p-2 px-8 py-2 content-end mt-6 m-4  place-items-end  "
              >
                Save
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-evenly my-9">
          <button
            className=" bg-indigo-100 focus:ring-indigo-600 focus:ring border-2 border-indogo p-2 px-8 rounded-full py-2"
            onClick={() => handleWeekdayButtonClick("sunday")}
          >
            SUN
          </button>
          <button
            className=" bg-indigo-100 focus:ring-indigo-600 focus:ring border-2 border-indogo p-2 px-8 rounded-full py-2"
            onClick={() => handleWeekdayButtonClick("monday")}
          >
            MON
          </button>
          <button
            className=" bg-indigo-100 focus:ring-indigo-600 focus:ring border-2 border-indogo p-2 px-8 rounded-full py-2"
            onClick={() => handleWeekdayButtonClick("tuesday")}
          >
            TUE
          </button>
          <button
            className=" bg-indigo-100 focus:ring-indigo-600 focus:ring border-2 border-indogo p-2 px-8 rounded-full py-2"
            onClick={() => handleWeekdayButtonClick("wednesday")}
          >
            WEN
          </button>
          <button
            className=" bg-indigo-100 focus:ring-indigo-600 focus:ring border-2 border-indogo p-2 px-8 rounded-full py-2"
            onClick={() => handleWeekdayButtonClick("thursday")}
          >
            THU
          </button>
          <button
            className=" bg-indigo-100 focus:ring-indigo-600 focus:ring border-2 border-indogo p-2 px-8 rounded-full py-2"
            onClick={() => handleWeekdayButtonClick("friday")}
          >
            FRI
          </button>
          <button
            className=" bg-indigo-100 focus:ring-indigo-600 focus:ring border-2 border-indogo p-2 px-8 rounded-full py-2"
            onClick={() => handleWeekdayButtonClick("saturday")}
          >
            SAT
          </button>

          <button
            className=" bg-indigo-300 focus:ring-indigo-600 focus:ring border-2 border-indogo p-2 px-8 rounded-full py-2"
            onClick={() => handleWeekdayButtonClick("")}
          >
            All
          </button>
        </div>
        {!isfiltered
          ? todos.map((item) => (
              <div
                className="border border-blue-500 rounded-md mt-5 flex justify-between m-4"
                key={item.id}
              >
                <div>
                  <h1 className=" text-2xl p-1 pl-4 font-medium">
                    {item.title}
                  </h1>
                  <p className="text-lg p-1 pl-4 text-opacity-75">
                    {item.description}
                  </p>
                  <p className="p-1 text-m pl-4 mb-2">Date : {item.date}</p>
                </div>
                <div className="mt-12 m-2">
                  <button
                    className="bg-indigo-50 border-2 border-indigo hover:bg-red-700 hover:text-white px-4 rounded-md p-1 ml-5"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          : filteredTodos.map((item) => {
              return (
                <div
                  className="border border-blue-500  rounded-md mt-5 flex justify-between m-4 "
                  key={item.id}
                >
                  <div>
                    <h1 className=" text-2xl p-1 pl-4 font-medium">
                      {item.title}
                    </h1>
                    <p className="text-lg p-1 pl-4 text-opacity-75">
                      {item.description}
                    </p>
                    <p className="p-1 text-m pl-4 mb-11">Date : {item.date}</p>
                  </div>
                  <div className="mt-12 m-2">
                    <button
                      className="bg-indigo-50  hover:bg-red-700 hover:text-white border-2 border-indigo  rounded-md p-1 ml-5 px-4"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
        <p>made by ❤️ Mantra Tecnologies</p>
      </div>
    </>
  );
}
