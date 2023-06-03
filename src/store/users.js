import { create } from 'zustand'
import { mockData } from "../constants/mockData";

const users = JSON.parse(localStorage.getItem('users') || null) || mockData;

const setNewDataToStorage = (data) => {
  localStorage.setItem('users', JSON.stringify(data));
}
export const useUserStore = create((set) => ({
  users,
  addUser: (newUser) => set(({ users }) => {
    const usersCopy = [ ...users ];
    const newUserItem = { ...newUser, key: usersCopy.length + 1 };
    usersCopy.push(newUserItem);
    setNewDataToStorage(usersCopy);

    return ({ users: usersCopy });
  }),
  deleteUser: (userKey) => set(({ users }) => {
    const indexForDelete = users.findIndex(({ key }) => key === userKey);
    const updatedData = [ ...users ].splice(indexForDelete, 1);
    setNewDataToStorage(updatedData);

    return ({ users: updatedData })
  }),
  editUser: (data) => set(({ users }) => {
    const indexForUpdate = users.findIndex(({ key }) => key === data.key);
    const item = users[indexForUpdate];
    const usersCopy = [ ...users ];
    usersCopy[[indexForUpdate]] = { ...item, ...data };

    return ({ users: usersCopy })
  })
}));