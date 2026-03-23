const appVersion = "1.0.0";

function formatDate(date) {
  return date.toLocaleDateString("en-GB");
}

function generateId() {
  return Math.random().toString(36).substring(2, 8);
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export { appVersion, formatDate, generateId, capitalize };
