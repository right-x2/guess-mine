import { handleNewUser } from "./notifications";

let socket = null;

export const getSocket = () => window.socket;

export const updateSocket = (aSocket) => (socket = aSocket);

export const initSockets = (aSocket) => {
  const { events } = window;
  updateSocket(aSocket);
  console.log(events.newUser);
  socket.on(events.newUser, handleNewUser);
};
