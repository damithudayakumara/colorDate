var React = require("react");

function Header() {
  var customeStyle = {
    color: ""
  };
  var yy;
  var curdate = new Date();
  var curtime = curdate.getHours();
  if (curtime < 12) {
    yy = "gm";
    customeStyle.color = "blue";
  } else if (curtime > 12) {
    yy = "gf";
    customeStyle.color = "green";
  }
  return <h1 style={customeStyle}>{yy}</h1>;
}
export default Header;
