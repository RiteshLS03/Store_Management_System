import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/slices/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
