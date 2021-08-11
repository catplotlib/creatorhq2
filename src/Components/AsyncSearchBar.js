import React, { useState, useRef } from "react";
import SelectSearch from "react-select-search";
import "../styles.css";
import { Link } from "react-router-dom";

const AsyncSearchBar = () => {
  const searchInput = useRef();
  const [username, setUsername] = useState("");
  const options = [
    {
      type: "group",
      name: "Youtube",
      items: [
        {
          name: "PersonOne",
          value: "1",
          username: "1",
          img: "thispersondoesnotexist.com/image",
        },
        {
          name: "PersonTwo",
          value: "2",
          username: "2",
          img: "thispersondoesnotexist.com/image",
        },
      ],
    },
    {
      type: "group",
      name: "Twitch",
      items: [
        {
          name: "PersonThree",
          value: "3",
          username: "3",
          img: "thispersondoesnotexist.com/image",
        },
        {
          name: "PersonFour",
          value: "4",
          username: "4",
          img: "thispersondoesnotexist.com/image",
        },
        {
          name: "PersonFive",
          value: "5",
          username: "5",
          img: "thispersondoesnotexist.com/image",
        },
      ],
    },
  ];

  const handleChange = (...args) => {
    setUsername(args[1].username);
  };

  // const options = [
  //   { name: "Workshop Three", value: "1" },
  //   { name: "Workshop Two", value: "2" },
  //   { name: "Workshop Three", value: "3" },
  //   { name: "Workshop Four", value: "4" },
  //   { name: "Workshop Five", value: "5" }
  // ];

  const handleFilter = (items) => {
    return (searchValue) => {
      if (searchValue.length === 0) {
        return options;
      }
      const updatedItems = items.map((list) => {
        const newItems = list.items.filter((item) => {
          return item.name.toLowerCase().includes(searchValue.toLowerCase());
        });
        return { ...list, items: newItems };
      });
      return updatedItems;
    };
  };

  return (
    <div className="flex flex-wrap flex-row pt-16">
      <SelectSearch
        ref={searchInput}
        options={options}
        filterOptions={handleFilter}
        value=""
        name="Workshop"
        placeholder="Choose a workshop"
        search
        onChange={handleChange}
      />
      <Link to={`/${username}`}>
        <button
          type="submit"
          className="ml-20 md:ml-14 mt-4 md:mt-0 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
        >
          Contribute
        </button>
      </Link>
    </div>
  );
};

export default AsyncSearchBar;
