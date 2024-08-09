import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useGetUser } from "../hooks/useGetUser";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

jest.mock("../hooks/useGetUser", () => ({
  useGetUser: jest.fn(),
}));

const mockFetchUser = jest.fn();
const mockUseGetUser = useGetUser as jest.MockedFunction<typeof useGetUser>;

describe("Sidebar", () => {
  test("displays loading message while user data is loading", () => {
    mockUseGetUser.mockReturnValue({
      isLoading: true,
      fetchUser: mockFetchUser,
      user: { name: "" },
    });

    render(
      <Router>
        <Sidebar />
      </Router>
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test("displays user details when user data is fetched", async () => {
    mockUseGetUser.mockReturnValue({
      isLoading: false,
      fetchUser: mockFetchUser,
      user: { name: "John Doe" },
    });

    render(
      <Router>
        <Sidebar />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByText(/hello/i)).toBeInTheDocument();
      expect(screen.getByText(/john doe/i)).toBeInTheDocument();
    });
  });
});
