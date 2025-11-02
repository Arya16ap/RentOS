// simple module to store username
let username = "";

export const setUsername = (name) => {
  username = name;
};

export const getUsername = () => username;
