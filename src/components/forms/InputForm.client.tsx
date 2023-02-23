
"use client"


import { useCallback, useMemo, useReducer } from "react"
import React from 'react';
import MyInput from "./MyInput.client"
import Button from "../ui/buttons/Button"
import type { ChangeEvent } from "react"
import type { AppState } from "../../app/page"

type State = number[]

type Action =
  | { type: 'ADD_ITEM', payload: number }
  | { type: 'REMOVE_ITEM', payload: number }
  | { type: 'SET_INPUT_VALUE', payload: string }
  | { type: 'RESET_ITEMS', payload: number }



export default function InputForm () {

  const initialState: AppState = {
    items: [],
    inputValue: ""
  }
    const reducer = (state: AppState, action: Action) => {
      switch (action.type) {
        case 'ADD_ITEM':
          return {
            ...state,
            items: [...state.items, action.payload]
          }
  
        case 'SET_INPUT_VALUE':
          return {
            ...state,
            inputValue: action.payload
          }
        case 'RESET_ITEMS':
          return {
            ...state,
            items: []
          }
  
        default:
          return state
      }
    }
  
    const [state, dispatch] = useReducer(reducer, initialState)
  
    const inputHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'SET_INPUT_VALUE', payload: event.target.value })
    }, [])
  
    const removeItemHander = useCallback(() => {
      dispatch({ type: 'RESET_ITEMS', payload: 0 })
  
    }, [
      dispatch
  
    ])
  
    const addItemHandler = useCallback(() => {
      const inputValueAsNumber = +state.inputValue
      dispatch({ type: 'ADD_ITEM', payload: inputValueAsNumber })
    }, [dispatch, state.inputValue])
    return (
      <div>
            
  
            <div>
          <div className="w-24 bg-green-500 h-24">
            test
          </div>
          <br />
          <MyInput
            label="Enter a number"
            value={state.inputValue}
            onChange={inputHandler}
  
          />
          <br />
          <Button onClick={addItemHandler}
            type={"submit"}
          >
            Add Number
          </Button>
          <Button type="reset" onClick={removeItemHander}>
            Reset
          </Button>
        </div>
      </div>
    )
  }