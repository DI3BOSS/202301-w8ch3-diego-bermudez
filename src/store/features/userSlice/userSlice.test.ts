import { UserStructure } from "../../../types";
import { isLoggedActionCreator, userReducer } from "./userSlice";

describe("Given an userReducer", () => {
  const mockedInitialUser: UserStructure = {
    id: 1,
    username: "johnsmith",
    token: "abc123xyz456",
    email: "johnsmith@example.com",
    isLogged: false,
    address: "123 Main St, Anytown, USA",
  };

  const mockedLoggedUser: UserStructure = {
    id: 1,
    username: "johnsmith",
    token: "abc123xyz456",
    email: "johnsmith@example.com",
    isLogged: true,
    address: "123 Main St, Anytown, USA",
  };

  describe("When it receives an user not logged in and the action to login", () => {
    test("Then it should return the user when isLogged property as 'true'", () => {
      const loadUsersAction = isLoggedActionCreator(mockedInitialUser);
      const loggedUser = userReducer(mockedInitialUser, loadUsersAction);

      expect(loggedUser).toStrictEqual(mockedLoggedUser);
    });
  });
});
