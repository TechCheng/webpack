function Content() {
  var dom = document.getElementById("root");
  var content = document.createElement("div");
  content.innerHTML = "我是content";
  dom.append(content);
}

// export default Content;
module.exports=Content;