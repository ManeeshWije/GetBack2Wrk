const changeBody = (pageName) => {
  let img = document.createElement("img");
  img.style.cssText = "height: 100vh;width:100%;";
  img.src = chrome.runtime.getURL("dad.jpg");
  document.body.innerHTML = "";
  document.body.appendChild(img);

  let h1 = document.createElement("H1");
  h1.style.cssText =
    "text-align:right;position:absolute;top:50px;left:50%;font-size:50px;color:white;";
  let text = document.createTextNode("bro pls.");
  h1.appendChild(text);

  document.body.appendChild(h1);
};
switch (window.location.hostname) {
  case "www.youtube.com":
    changeBody();
    break;
}
