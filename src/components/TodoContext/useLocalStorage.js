import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
  
  React.useEffect(() => {
    setTimeout(() => {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;
  
      if (localStorageItem) {
        parsedItem = JSON.parse(localStorageItem);
      } else {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = [];
      }
  
      setItem(parsedItem);
  
    }, 1000);
  });
  
  
  
  
  
    const saveItem = (newTodos) => {
      const stringfiedTodos = JSON.stringify(newTodos);
      localStorage.setItem(itemName, stringfiedTodos);
      setItem(newTodos);
    }
  
    return [item, saveItem];
  }

  export { useLocalStorage };