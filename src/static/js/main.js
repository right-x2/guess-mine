(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMessageNotif = handleMessageNotif;

function handleMessageNotif(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, ": ").concat(message));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlTWVzc2FnZU5vdGlmIiwiZGF0YSIsIm1lc3NhZ2UiLCJuaWNrbmFtZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxTQUFTQSxrQkFBVCxDQUE0QkMsSUFBNUIsRUFBa0M7QUFBQSxNQUMvQkMsT0FEK0IsR0FDVEQsSUFEUyxDQUMvQkMsT0FEK0I7QUFBQSxNQUN0QkMsUUFEc0IsR0FDVEYsSUFEUyxDQUN0QkUsUUFEc0I7QUFFdkNDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixXQUFlRixRQUFmLGVBQTRCRCxPQUE1QjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2VOb3RpZihkYXRhKSB7XHJcbiAgY29uc3QgeyBtZXNzYWdlLCBuaWNrbmFtZSB9ID0gZGF0YTtcclxuICBjb25zb2xlLmxvZyhgJHtuaWNrbmFtZX06ICR7bWVzc2FnZX1gKTtcclxufVxyXG4iXX0=
},{}],2:[function(require,module,exports){
"use strict";

var _chat = require("./chat");

// eslint-disable-next-line no-undef
var socket = io("/");

function sendMessage(message) {
  socket.emit("newMessage", {
    message: message
  });
  console.log("You: ".concat(message));
}

function setNickname(nickname) {
  socket.emit("setNickname", {
    nickname: nickname
  });
}

socket.on("messageNotif", _chat.handleMessageNotif);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYzU0ZDI3YTUuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWl0IiwiY29uc29sZSIsImxvZyIsInNldE5pY2tuYW1lIiwibmlja25hbWUiLCJvbiIsImhhbmRsZU1lc3NhZ2VOb3RpZiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTtBQUNBLElBQU1BLE1BQU0sR0FBR0MsRUFBRSxDQUFDLEdBQUQsQ0FBakI7O0FBRUEsU0FBU0MsV0FBVCxDQUFxQkMsT0FBckIsRUFBOEI7QUFDNUJILEVBQUFBLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLFlBQVosRUFBMEI7QUFBRUQsSUFBQUEsT0FBTyxFQUFQQTtBQUFGLEdBQTFCO0FBQ0FFLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixnQkFBb0JILE9BQXBCO0FBQ0Q7O0FBRUQsU0FBU0ksV0FBVCxDQUFxQkMsUUFBckIsRUFBK0I7QUFDN0JSLEVBQUFBLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLGFBQVosRUFBMkI7QUFBRUksSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQTNCO0FBQ0Q7O0FBRURSLE1BQU0sQ0FBQ1MsRUFBUCxDQUFVLGNBQVYsRUFBMEJDLHdCQUExQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZU1lc3NhZ2VOb3RpZiB9IGZyb20gXCIuL2NoYXRcIjtcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXHJcbmNvbnN0IHNvY2tldCA9IGlvKFwiL1wiKTtcclxuXHJcbmZ1bmN0aW9uIHNlbmRNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICBzb2NrZXQuZW1pdChcIm5ld01lc3NhZ2VcIiwgeyBtZXNzYWdlIH0pO1xyXG4gIGNvbnNvbGUubG9nKGBZb3U6ICR7bWVzc2FnZX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Tmlja25hbWUobmlja25hbWUpIHtcclxuICBzb2NrZXQuZW1pdChcInNldE5pY2tuYW1lXCIsIHsgbmlja25hbWUgfSk7XHJcbn1cclxuXHJcbnNvY2tldC5vbihcIm1lc3NhZ2VOb3RpZlwiLCBoYW5kbGVNZXNzYWdlTm90aWYpO1xyXG4iXX0=
},{"./chat":1}]},{},[2])