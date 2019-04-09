function Side() {
  var dom = document.getElementById("root");
  var sidebar = document.createElement("div");
  sidebar.innerHTML = "我是sidebar";
  dom.append(sidebar);
}

// export default Side;

module.exports=Side;