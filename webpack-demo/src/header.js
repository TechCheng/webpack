function Header() {
  var dom = document.getElementById("root");
  var header = document.createElement("div");
  header.innerHTML = "我是头部";
  dom.append(header);
}

// export default Header;

module.exports=Header;