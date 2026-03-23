const anonFunc = function (level, message) {
  return `[${level.toUpperCase()}] ${new Date().toLocaleTimeString()} - ${message}`;
};

export default anonFunc;
