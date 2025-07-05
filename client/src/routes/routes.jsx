import { createBrowserRouter } from "react-router-dom";
import ChatLayout from "../layouts/ChatLayout";
import ChatPage from "../pages/chat/ChatPage";

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
        children: [
          {
            path: "/delivery",
          },
        ],
      },
      {
        path: "history",
        element: (
          <div className="p-6 text-gray-700">📜 History Page (Coming Soon)</div>
        ),
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
