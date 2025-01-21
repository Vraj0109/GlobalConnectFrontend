import { Tabs } from "@radix-ui/react-tabs";
import React, { useState, useContext, useEffect, useRef } from "react";
import { Label } from "./label";
import axios from "axios";

const ButtonText = ({ className, htmlFor }) => {
  const [time, setTime] = useState(0);
  const [todo, setTodo] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchTodo = async () => {
    try {
      setLoader(true);
      const res = await axios.get("gettodo");
      setTodo(res);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTodo();
  }, []);

  if (loader) {
    return "...loading";
  }
  const RenderTodo = (todo) => {
    return <div>{todo?.data?.title}</div>;
  };
  return (
    <div>
      {todo.length && todo.map((thisTodo) => (
        <RenderTodo todo={thisTodo} />
      ))}
    </div>
  );
};

export default ButtonText;
