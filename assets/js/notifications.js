const notifications = document.getElementById("jsNotifications");

const fireNotification = (text, color) => {
  console.log("--------");
  const notification = document.createElement("div");
  notification.innerHTML = text;
  notification.style.background = color;
  notification.appendChild(notification);
};

export const handleNewUser = ({ nickname }) => {
  fireNotification(`${nickname} just joined!`, "rgb(0, 122, 255)");
};
