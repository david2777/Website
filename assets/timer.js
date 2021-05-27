function onLoad() {
  let now = new Date().getTime();
  let page_load_time = now - performance.timing.navigationStart;
  let msg = "Page rendered in " + page_load_time + 'ms'
  console.log(msg);
  let node = document.createElement("p");
  let text = document.createTextNode(msg);
  node.appendChild(text);
  document.getElementById("footer").appendChild(node);
}
