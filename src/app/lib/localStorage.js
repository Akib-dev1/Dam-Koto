export const getLanguage = () => {
  return localStorage.getItem("language") || "en";
};

export const setLanguage = (language) => {
  localStorage.setItem("language", language);
};
