import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import SignIn from "./pages/signin/SignIn"; 

function App() {
  const client = new QueryClient();
  return (
    <div>
      <BrowserRouter>
        <QueryClientProvider client={client}>
          <Routes>
            <Route path="/" element={<SignIn />} /> 
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
