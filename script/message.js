var myMessage = (function () {
  return {
    setMessage: function (msg) {
      document.getElementById('msg').innerText = msg;
    }
  };
})();
