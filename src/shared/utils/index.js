export const timeZone = () => {
  var d = new Date();
  var n = d.getHours();
  if (n >= 5 && n < 11) return "Good Morning";
  if (n >= 11 && n < 17) return "Good Afternoon";
  if (n >= 17) return "Good Evening";
  return "Hey";
};

export const mergeClass = (...list) => {
  return list.join(" ");
};
