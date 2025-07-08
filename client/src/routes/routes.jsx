import { createBrowserRouter } from "react-router-dom";
import ChatLayout from "../layouts/ChatLayout";
import ChatPage from "../pages/chat/ChatPage";
import HistoryPage from "../pages/chat/historyPage"; // Make sure this import matches your file name

const router = createBrowserRouter([
  {
    path: "/",
    element: <ChatLayout />,
    children: [
      {
        path: "/",
        element: <ChatPage />,
      },
      {
        path: "delivery",
        element: (
          <div className="p-6 text-gray-700">
            🚚 Delivery Page (Coming Soon)
          </div>
        ),
      },
      {
        path: "history", // Remove the leading slash for nested routes
        element: <HistoryPage />, // Use proper component name
      },
      {
        path: "report-status",
        element: (
          <div className="p-6 text-gray-700">
            📈 Report Status Page (Coming Soon)
          </div>
        ),
      },
    ],
  },
]);

export default router;