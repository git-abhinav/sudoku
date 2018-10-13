var mainArr = new Array(9);
for (var i = 0; i < 9; i++)
  mainArr[i] = new Array(9);
for (var i=0;i<9;++i)
  for(var j=0;j<9;++j)
    mainArr[parseInt(i)][parseInt(j)] = "X";

function myFunction(myvar)
{
    var x = document.createElement("INPUT");
    x.setAttribute("type", "hidden");
    document.body.appendChild(x);
    var v = prompt("Enter");
    var theId = myvar.id;
    if(v<=9 && v>=0)
    {
      document.getElementById(theId).innerHTML = v;
      document.getElementById(theId).style.color = "blue";
    }
    else
      alert("Please enter number between 1 to 9");
    check();
}
function clicked()
{
  alert("Button pressed")

  for(var i = 0; i<5; ++i)
  {
    var x = console.log("Enter : ")
    console.log(x)
  }
}
function check()
{
  var textdata = "";
  var counter = 1;
  var a = [[],[]];
  var x = new Array(10);
  for (var i = 0; i < 10; i++)
    x[i] = new Array(10);
  for (var i=0;i<10;++i)
  {
    for(var j=0;j<10;++j)
    {
      x[parseInt(i)][parseInt(j)] = parseInt(counter);
      counter++;
    }
  }
  counter = 1;
  for(var i=0;i<9;++i)
    for(var j=0;j<9;++j)
    {
      x = parseInt(document.getElementById(counter).innerHTML);
      if (!isNaN(x))
        mainArr[parseInt(i)][parseInt(j)] = parseInt(x);
      counter++;
    }
  textdata = '<table style="width:100%">';
  for (var i = 0; i<9 ; ++i)
  {
    textdata += "<tr>";
    for (var j = 0; j <9 ;++j)
    {
      textdata += "<td>";
      textdata += mainArr[i][j];
      textdata += "</td>";
      //textdata += "  "
    }
    textdata += "</tr>";
    //textdata += "<br>";
  }
  textdata += "</table>"
  document.getElementById("bottomMost").innerHTML = textdata;
}
