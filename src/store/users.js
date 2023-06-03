import { create } from 'zustand'
import { mockData } from "../constants/mockData";

const users = JSON.parse(localStorage.getItem('users') || null) || mockData;

export const useUserStore = create((set, get) => ({
  users,
  userForEdit: null,
  setUserForEdit: (key) => set({ userForEdit: key }),
  addUser: (newUser) => set(({ users }) => {
    const usersCopy = [ ...users ];
    const newUserItem = { ...newUser, key: usersCopy.length + 1 };
    usersCopy.push(newUserItem);

    return ({ users: usersCopy });
  }),
  deleteUser: (userKey) => set(({ users }) => {
    const indexForDelete = users.findIndex(({ key }) => key === userKey);
    const usersCopy = [ ...users ];
    usersCopy.splice(indexForDelete, 1);

    return ({ users: usersCopy })
  }),
  editUser: (data) => set(({ users }) => {
    const indexForUpdate = users.findIndex(({ key }) => key === data.key);
    const item = users[indexForUpdate];
    const usersCopy = [ ...users ];
    usersCopy[[indexForUpdate]] = { ...item, ...data };
    get().setUserForEdit(null);

    return ({ users: usersCopy })
  }),
}));

useUserStore.subscribe((state) => {
  localStorage.setItem('users', JSON.stringify(state.users));
})