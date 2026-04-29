# Redux Guide for React (Redux Toolkit)

A concise, production-ready introduction to Redux with React and Redux Toolkit. Use this guide to set up a store, create slices, and wire your components with best-practice patterns.

## Table of contents

- Overview
- Core concepts
- Prerequisites
- Quick start
- Store setup
- Slice example
- React integration
- Using state and actions
- DevTools
- Copy buttons

## Overview

Redux is a predictable state container for JavaScript applications. It centralizes application state in a single store and uses pure reducer functions to describe state changes. This approach makes state transitions explicit, testable, and easier to reason about.

## Core concepts

- Single source of truth: The entire state lives in one store.
- Immutable updates: State is read-only and changed by dispatching actions.
- Pure reducers: Reducers are deterministic functions that compute the next state.

## Prerequisites

- Node.js and npm
- A React app created with Vite

## Quick start

Create a new React app and install the Redux dependencies:

```bash
npm create vite@latest my-app --template react
cd my-app
npm install react-redux @reduxjs/toolkit
```

## Store setup

Create the Redux store using `configureStore`:

```javascript
// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
});

export default store;
```

## Slice example

Define a feature slice with `createSlice`:

```javascript
// src/features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

Add the slice reducer to the store:

```javascript
// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
```

## React integration

Provide the store to your app with `Provider`:

```javascript
// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
```

## Using state and actions

Read state with `useSelector` and dispatch actions with `useDispatch`:

```javascript
// src/features/counter/Counter.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

export default Counter;
```

## DevTools

The Redux DevTools browser extension lets you inspect state and actions in real time. Install it for Chrome or Firefox, then open the Redux panel in your browser dev tools to track state changes and time-travel between them.

## Copy buttons

The copy buttons below are added by a small script at the end of this file. They appear only in Markdown renderers that allow inline HTML and scripts.

<script>
// Adds a Copy button to every code block when the renderer allows inline scripts.
document.querySelectorAll("pre > code").forEach((codeBlock) => {
  const pre = codeBlock.parentElement;
  const wrapper = document.createElement("div");
  const button = document.createElement("button");

  button.type = "button";
  button.textContent = "Copy";
  button.style.margin = "0 0 8px 0";
  button.style.display = "inline-block";

  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(codeBlock.innerText);
      button.textContent = "Copied";
      setTimeout(() => {
        button.textContent = "Copy";
      }, 1200);
    } catch (error) {
      button.textContent = "Failed";
      setTimeout(() => {
        button.textContent = "Copy";
      }, 1200);
    }
  });

  pre.parentNode.insertBefore(wrapper, pre);
  wrapper.appendChild(button);
  wrapper.appendChild(pre);
});
</script>
