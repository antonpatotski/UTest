import { useEffect, useState } from "react";
import { mockData } from "../constants/mockData";

let usersStorage = JSON.parse(localStorage.getItem('users') || null) || mockData;

export const useUserData = () => {
  const [ users, setUsers ] = useState(usersStorage);

  useEffect(() => {
    if (!localStorage.getItem('users')) localStorage.setItem('users', JSON.stringify(users))
  }, [])

  useEffect(() => () => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users])

  useEffect(() => {
    setUsers(usersStorage);
  }, [ usersStorage ])

  const setUserData = ({ action, data }) => {
    switch (action){
      case 'add':
        usersStorage = [ ...usersStorage, data ];
        break;
      case 'delete':
        const indexForDelete = usersStorage.findIndex(({ key }) => key === data);
        const updatedData = [ ...usersStorage ].splice(indexForDelete, 1);
        usersStorage = updatedData;
        break;
      case 'edit':
        const indexForUpdate = usersStorage.findIndex(({ key }) => key === data);
        const item = usersStorage[indexForUpdate];
        const editedData = [ ...usersStorage ][indexForUpdate] = { ...item, ...data };
        usersStorage = editedData;
        break;
    }
  }

  return [ users, setUserData ]
}