import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import SignIn from "./pages/signin/SignIn";
import InvoiceNumber from "./pages/invoice-number/InvoiceNumber";

function App() {
  const client = new QueryClient();
  return (
    <div>
      <BrowserRouter>
        <QueryClientProvider client={client}>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="invoice-number/:id" element={<InvoiceNumber />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
