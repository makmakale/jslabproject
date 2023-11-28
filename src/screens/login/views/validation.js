const emailRegExp = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/;

export const isValidEmail = (email) =>
  !!email.trim() && emailRegExp.test(email);

export const isValidPassword = (password) =>
  !!password.trim() && password.length >= 8;
