"use client";
import { useCallback, useState, useReducer } from "react";
import React from "react";
import MyInput from "./MyInput.client";
import Button from "../ui/buttons/Button";
import type { ChangeEvent } from "react";

type State = number[];

type AppState = {
  items: State;
  inputValue: string;
};

type Action =
  | { type: "ADD_ITEM"; payload: number }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "SET_INPUT_VALUE"; payload: string }
  | { type: "RESET_ITEMS"; payload: number };

export default function InputForm() {
  const initialState: AppState = {
    items: [],
    inputValue: "",
  };
  const reducer = (state: AppState, action: Action) => {
    switch (action.type) {
      case "ADD_ITEM":
        return {
          ...state,
          items: [...state.items, action.payload],
        };

      case "SET_INPUT_VALUE":
        return {
          ...state,
          inputValue: action.payload,
        };

      case "RESET_ITEMS":
        return {
          ...state,
          items: [],
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const inputHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_INPUT_VALUE", payload: event.target.value });
  }, []);

  const removeItemHander = useCallback(() => {
    dispatch({ type: "RESET_ITEMS", payload: 0 });
  }, [dispatch]);

  const addItemHandler = useCallback(() => {
    const inputValueAsNumber = +state.inputValue;
    dispatch({ type: "ADD_ITEM", payload: inputValueAsNumber });
  }, [dispatch, state.inputValue]);

  const [open, setOpen] = useState(false);

  return (
    <div className="px-4 py-5 sm:px-6">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm leading-5 font-medium text-gray-500 truncate">
          Add a number
        </span>
        <svg
          className={`${open ? "rotate-180" : ""} w-5 h-5 text-gray-500`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={open ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
          />
        </svg>
      </div>

      <div className={`${open ? "block" : "hidden"} mt-2`}>
        <MyInput
          label="Enter a number"
          value={state.inputValue}
          onChange={inputHandler}
        />
        <div className="mt-2 flex  gap-2 justify-center">
          <Button
            onClick={addItemHandler}
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Number
          </Button>
          <Button
            type="reset"
            onClick={removeItemHander}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
