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
    <><div className="px-20 py-6 h-full w-screen bg-white flex justify-center">
      <div className="">
        <div className="flex ">
          <div className="border w-[470px]">
            <div className="mt-4">
              <input
                className=" p-1 px-2 focus:outline-none border-black border w-80 rounded-sm "
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title.."
              />
            </div>

            <div className="mt-4">
              <textarea
                className=" p-2 focus:outline-none border-black border h-28 w-[450px] rounded-sm "
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id=""
                placeholder="Description..."
              />
            </div>
          </div>

          <div className="ml-16">
            <label className="">Filter :</label>
            <div className="">
              <div className="flex ">
                <div className="">
                  <label>Start Date :</label>

                  <div className="">
                    <input
                      className="border border-blue-200 px-2 m-1 focus:outline-none"
                      type="date"
                      id="startDate"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      placeholder="Title.."
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="ml-2">
                  <label>End Date :</label>

                  <div className="">
                    <input
                      className="border border-blue-200 px-2 m-1 focus:outline-none"
                      type="date"
                      id="endDate"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>
                  </div>
                  <div>
                    <button
                      onClick={filterTodos}
                      className="bg-indigo-50 focus:ring-indigo-400 focus:ring border-1 border-indigo text-black font-semibold  border-indigo rounded-md p-1 mt-6 ml-5 px-3 py-1.5 text-nowrap"
                    >
                      Filter Todos
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 ml-36 ">
              <button
                onClick={updatevalue}
                className="bg-sky-500 hover:bg-sky-700  text-white font-semibold rounded-md  p-2 px-8 py-2 content-end mt-6 m-4  place-items-end  "
              >
                Save
              </button>
            </div>
          </div>
        </div>

        <div className=" flex  mx-4 my-3">
          <button
            className=" bg-indigo-100 focus:ring-indigo-300 focus:ring border border-indogo p-1 px-5 rounded-full"
            onClick={() => handleWeekdayButtonClick("sunday")}
          >
            SUN
          </button>
          <button
            className=" bg-indigo-100 focus:ring-indigo-300 focus:ring border border-indogo p-1 px-5 ml-4 rounded-full"
            onClick={() => handleWeekdayButtonClick("monday")}
          >
            MON
          </button>
          <button
            className=" bg-indigo-100 focus:ring-indigo-300 focus:ring border border-indogo p-1 px-5 ml-4 rounded-full"
            onClick={() => handleWeekdayButtonClick("tuesday")}
          >
            TUE
          </button>
          <button
            className=" bg-indigo-100 focus:ring-indigo-300 focus:ring border border-indogo p-1 px-5 ml-4 rounded-full"
            onClick={() => handleWeekdayButtonClick("wednesday")}
          >
            WEN
          </button>
          <button
            className=" bg-indigo-100 focus:ring-indigo-300 focus:ring border border-indogo p-1 px-5 ml-4 rounded-full"
            onClick={() => handleWeekdayButtonClick("thursday")}
          >
            THU
          </button>
          <button
            className=" bg-indigo-100 focus:ring-indigo-300 focus:ring border border-indogo p-1 px-5 ml-4 rounded-full"
            onClick={() => handleWeekdayButtonClick("friday")}
          >
            FRI
          </button>
          <button
            className=" bg-indigo-100 focus:ring-indigo-300 focus:ring border border-indogo p-1 px-5 ml-4 rounded-full"
            onClick={() => handleWeekdayButtonClick("saturday")}
          >
            SAT
          </button>

          <button
            className=" bg-indigo-300 focus:ring-indigo-600 focus:ring border-2 border-indogo p-2 px-8 ml-4 rounded-full py-2"
            onClick={() => handleWeekdayButtonClick("")}
          >
            All
          </button>
        </div>

        <div className="flex flex-wrap ">
        {!isfiltered
          ? todos.map((item) => (
          
              <div
                className="border border-blue-300 rounded-md mt-5 flex justify-between m-2 w-[550px]"
                key={item.id}
              >
                <div>
                  <h1 className=" text-lg pl-4 font-medium">
                    {item.title}
                  </h1>
                  <p className="text-base p-1 pl-4 text-opacity-75">
                    {item.description}
                  </p>
                  <p className="p-1 text-base pl-4 ">Date : {item.date}</p>
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
                className="border border-blue-300 rounded-md mt-5 flex justify-between m-2 w-[550px]"
                  key={item.id}
                >
                  <div>
                    <h1 className=" text-lg p-1 pl-4 font-medium">
                      {item.title}
                    </h1>
                    <p className="text-base p-1 pl-4 text-opacity-75">
                      {item.description}
                    </p>
                    <p className="p-1 text-base pl-4 ">Date : {item.date}</p>
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
              </div>
        
      </div>
      </div>
    </>
  );
}
