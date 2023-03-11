import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as ReduxProvider } from "react-redux";
import { createStore } from "./store";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import { Topbar } from "./modules/ui-core/components/Topbar";
import AuthCheck from "./modules/ui-core/components/AuthCheck";

const store = createStore();
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <AuthCheck />
            <Topbar />
            <App />
          </ThemeProvider>
        </QueryClientProvider>
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>
);
