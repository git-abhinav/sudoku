var mainArr = new Array(9);
for (var i = 0; i < 9; i++)
  mainArr[i] = new Array(9);


function startUp()
{
  console.log("In startUp");
  var tempCounter = 1 ;
  for (var i=0;i<9;++i)
    for(var j=0;j<9;++j)
    {
        mainArr[parseInt(i)][parseInt(j)] = "X";
        document.getElementById(tempCounter).innerHTML = "";
        tempCounter++;
    }
}



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
    //check();
}
function clicked()
{
  //console.log("Button pressed");
  constraint2();
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

  var tempCounter = 1;
  for (var i=0;i<9;++i)
    for(var j=0;j<9;++j)
    {
        mainArr[parseInt(i)][parseInt(j)] = "X";
        document.getElementById(tempCounter).innerHTML = "X";
        tempCounter++;
    }


  //sample code
  mainArr[0][0] = 1;
  mainArr[0][3] = 4;
  mainArr[0][4] = 8;
  mainArr[0][5] = 9;
  mainArr[0][8] = 6;

  mainArr[1][0] = 7;
  mainArr[1][1] = 3;
  mainArr[1][4] = 5;
  mainArr[1][7] = 4;

  mainArr[2][0] = 4;
  mainArr[2][1] = 6;
  mainArr[2][5] = 1;
  mainArr[2][6] = 2;
  mainArr[2][7] = 9;
  mainArr[2][8] = 5;

  mainArr[3][0] = 3;
  mainArr[3][1] = 8;
  mainArr[3][2] = 7;
  mainArr[3][3] = 1;
  mainArr[3][4] = 2;
  mainArr[3][6] = 6;

  mainArr[4][0] = 5;
  mainArr[4][2] = 1;
  mainArr[4][3] = 7;
  mainArr[4][5] = 3;
  mainArr[4][8] = 8;

  mainArr[5][1] = 4;
  mainArr[5][2] = 6;
  mainArr[5][4] = 9;
  mainArr[5][5] = 5;
  mainArr[5][6] = 7;
  mainArr[5][7] = 1;

  mainArr[6][0] = 9;
  mainArr[6][1] = 1;
  mainArr[6][2] = 4;
  mainArr[6][3] = 6;
  mainArr[6][7] = 8;

  mainArr[7][1] = 2;
  mainArr[7][4] = 4;
  mainArr[7][7] = 3;
  mainArr[7][8] = 7;

  mainArr[8][0] = 8;
  mainArr[8][2] = 3;
  mainArr[8][3] = 5;
  mainArr[8][4] = 1;
  mainArr[8][5] = 2;
  mainArr[8][8] = 4;

  /*
  var temp = 1;
  for (var i=0;i<9;++i)
  {
    for (var j=0;j<9;++j)
    {
      mainArr[i][j] = temp++;
    }
  }*/

  counter = 1;
  for(var i=0;i<9;++i)
    for(var j=0;j<9;++j)
    {
      x = parseInt(document.getElementById(counter).innerHTML);
      if (!isNaN(x))
        mainArr[parseInt(i)][parseInt(j)] = parseInt(x);
      document.getElementById(counter).innerHTML = mainArr[i][j];
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
  //var set1 = new Set(mainArr[0])
  //set1.delete("X");

  //var set2 = new Set(mainArr[1][1]);
  //try set.has function

  //console.log(set1);
  //console.log(set2);
}
function getRow(r)
{
  var a = new Array();
  for (var i=0;i<9;++i)
    a[i] = mainArr[r][i];
  return a;
}
function getColumn(c)
{
  var a = new Array();
  for(var i=0;i<9;++i)
    a[i] = mainArr[i][c];
}
function constraint1()
{
  var counter = 1;
  var x;
  var row;
  var column;
  for (var i=0;i<9;++i)
  {
    for (var j=0;j<9;++j)
    {
      x = document.getElementById(counter).innerHTML;
      console.log("checking : ", counter, "value is : ", x);
      if (x=="")
      {
        console.log("X found at ", i , ", ", j);
        var r = new Set(getRow(i));
        var c = new Set(getColumn(j));
        for (var k=1;k<=9;++k)
        {
          if( (!r.has(k)) && (!c.has(k)))
          {
            document.getElementById(counter).innerHTML = k;
            mainArr[i][j] = k;
          }
        }
      }
      counter += 1;
    }
  }
}
function inRow(k, r)
{
  //define
  var status = 0;
  for(var i=0;i<9;++i)
    if (k==mainArr[r][i])
      status = 1;
  return status;
}
function inColumn(k, c)
{
  for(var i=0;i<9;++i)
    if(k==mainArr[i][c])
      return 1;
  return 0;
}
function inGrid(k, r, c)
{
  var rowLower;
  var columnLower;
  var rowUpper;
  var columnUpper;

  if(r>=0&&r<=2&&c>=0&&c<=2)
  {
    rowLower = 0;
    columnLower = 0;
    rowUpper = 2;
    columnUpper = 2;
  }
  else if(r>=3&&r<=5&&c>=0&&c<=2)
  {
    rowLower = 3;
    columnLower = 0;
    rowUpper = 5;
    columnUpper = 2;
  }
  else if(r>=6&&c>=0&&c<=2)
  {
    rowLower = 6;
    columnLower = 0;
    rowUpper = 8;
    columnUpper = 2;
  }
  else if(r>=0&&r<=2&&c>=3&&c<=5)
  {
    rowLower = 0;
    columnLower = 3;
    rowUpper = 2;
    columnUpper = 5;
  }
  else if(r>=3&&r<=5&&c>=3&&c<=5)
  {
    rowLower = 3;
    columnLower = 3;
    rowUpper = 5;
    columnUpper = 5;
  }
  else if(r>=6&&c>=3&&c<=5)
  {
    rowLower = 6;
    columnLower = 3;
    rowUpper = 8;
    columnUpper = 5;
  }
  else if(r>=0&&r<=2&&c>=6&&c<=8)
  {
    rowLower = 0;
    columnLower = 6;
    rowUpper = 2;
    columnUpper = 8;
  }
  else if(r>=3&&r<=5&&c>=6&&c<=8)
  {
    rowLower = 3;
    columnLower = 6;
    rowUpper = 5;
    columnUpper = 8;
  }
  else
  {
    rowLower = columnLower = 6;
    rowUpper = columnUpper = 8;
  }
  for(var i=rowLower;i<=rowUpper;++i)
    for(var j=columnLower;j<=columnUpper;++j)
      if (k == mainArr[i][j])
        return 1;
  return 0;
}
function constraint2()
{
  /*
  for(var i=1;i<=9;++i)
    if(inRow(i, 0))
      console.log(i," is present in row 0 ");

  for(var i=1;i<=9;++i)
      if(inColumn(i, 0))
        console.log(i," is present in column 0 ");
  for(var i=0;i<9;++i)
  {
    for(var j=0;j<9;++j)
    {
      console.log("Indexes : ",i, j);
      inGrid(1, i, j);
      console.log("\n");
    }
  }
  */

  console.log("In main function");
  var counter = 1;
  var x;
  for (var i=0;i<9;++i)
  {
    for(var j=0;j<9;++j)
    {
      x = document.getElementById(counter).innerHTML

      if(x=="X" || x=="")
      {

        for(var k=1;k<=9;++k)
        {
          if(!inRow(k, i) && !inColumn(k, j) && !inGrid(k, i, j))
          {
            document.getElementById(counter).innerHTML = k;
            mainArr[i][j] = k;
            console.log(k, " added at ", i, j);
            
          }
        }
      }
      counter++;
    }
  }



}
