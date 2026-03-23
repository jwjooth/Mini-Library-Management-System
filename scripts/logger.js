export default function anonFunc (level, message) {
  console.log(`[${level.toUpperCase()}] ${new Date().toLocaleTimeString()} - ${message}`);
};