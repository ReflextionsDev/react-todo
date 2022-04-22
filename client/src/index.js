import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App";
import Home from "./pages/Home";
import NewTask from "./pages/NewTask";
import NotFound from "./pages/NotFound"

const rootElement = document.getElementById("root");
render(

  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="newtask" element={<NewTask />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>

  ,
  rootElement
);