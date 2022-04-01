import "./App.css";
import Activity from "./pages/activities/Activity";
import Client from "./pages/clients/Client";
import ClientForm from "./pages/clients/ClientForm";
import Dashboard from "./pages/dashboard/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/activity/list" element={<Activity />} />
        <Route path="/client/list" element={<Client />} />
        <Route path="/client/detail" element={<ClientForm />}>
          <Route path=":id" element={<ClientForm />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
