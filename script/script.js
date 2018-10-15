var mainArr = new Array(9);
for (var i = 0; i < 9; i++)
  mainArr[i] = new Array(9);
var prevdata;  // to store the style data of sample button
var tempstatus = 1;
function startUp()
{
  console.log("In startUp");
  var tempCounter = 1 ;
  for (var i=0;i<9;++i)
    for(var j=0;j<9;++j)
    {
        mainArr[parseInt(i)][parseInt(j)] = "X";
        document.getElementById(tempCounter).innerHTML = "";
        //document.getElementById(tempCounter).style.backgroundColor = rgba(255, 255, 255, 0.8);
        tempCounter++;
    }

  document.getElementById("sampleButton").style.display = prevdata;
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
}
function clicked()
{
  console.log("Main process started");
  document.getElementById("startButton").innerHTML = "Run Again";
  //alert(toString(document.getElementById("sampleButton").style.display));
  prevdata = document.getElementById("sampleButton").style.display;
  document.getElementById("sampleButton").style.display = "none";
  for(var i=0;i<9;++i)
    for(var j=0;j<9;++j)
      if(mainArr[i][j]=="X")
        tempstatus = 0;
  if(tempstatus == 1)
    alert("All Constraints Satisfied");
  tempstatus = 1;
  constraint2();
  //check()
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




  //sample code 1
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



//sample 2

/*

  mainArr[0][3] = 2;
  mainArr[0][4] = 6;
  mainArr[0][6] = 7;
  mainArr[0][8] = 1;


  mainArr[1][0] = 6;
  mainArr[1][1] = 8;
  mainArr[1][4] = 7;
  mainArr[1][7] = 9;


  mainArr[2][0] = 1;
  mainArr[2][1] = 9;
  mainArr[2][5] = 4;
  mainArr[2][6] = 5;


  mainArr[3][0] = 8;
  mainArr[3][1] = 2;
  mainArr[3][3] = 1;
  mainArr[3][7] = 4;


  mainArr[4][2] = 4;
  mainArr[4][3] = 6;
  mainArr[4][5] = 2;
  mainArr[4][6] = 9;


  mainArr[5][1] = 5;
  mainArr[5][5] = 3;
  mainArr[5][7] = 2;
  mainArr[5][8] = 8;

  mainArr[6][2] = 9;
  mainArr[6][3] = 3;
  mainArr[6][7] = 7;
  mainArr[6][8] = 4;

  mainArr[7][1] = 4;
  mainArr[7][4] = 5;
  mainArr[7][7] = 3;
  mainArr[7][8] = 6;


  mainArr[8][0] = 7;
  mainArr[8][2] = 3;
  mainArr[8][4] = 1;
  mainArr[8][5] = 8;

*/


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
    }
    textdata += "</tr>";
  }
  textdata += "</table>"
  document.getElementById("bottomMost").innerHTML = textdata;
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
          //  break;
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
  //console.log("In main function");
  var counter = 1;
  var x;
  var t = new Array();
  for (var i=0;i<9;++i)
    for(var j=0;j<9;++j)
    {
      x = document.getElementById(counter).innerHTML;
      if(x=="X" || x=="")
      {
        for(var k=1;k<=9;++k)
        {
          //this is for row
          if (i<=2)
          {
             if(i==0)
             {
               t[0] = 1;
               t[1] = 2;
             }
             else if(i==1) {
               t[0] = 0;
               t[1] = 2;
             }
             else {
               t[0] = 0;
               t[1] = 1;
             }
          }
          else if(i>=3&&i<=5)
          {
            if(i==3)
            {
              t[0] = 4;
              t[1] = 5;
            }
            else if(i==4) {
              t[0] = 3;
              t[1] = 5;
            }
            else {
              t[0] = 3;
              t[1] = 4;
            }
          }
          else
          {
            if(i==6)  {
              t[0] = 7;
              t[1] = 8;
            }
            else if(i==7) {
              t[0] = 6;
              t[1] = 8;
            }
            else {
              t[0] = 6;
              t[1] = 7;
            }
          }

          //this is for columns
          var t2 = new Array();
          if (j<=2)
          {
             if(j==0)
             {
               t2[0] = 1;
               t2[1] = 2;
             }
             else if(j==1) {
               t2[0] = 0;
               t2[1] = 2;
             }
             else {
               t2[0] = 0;
               t2[1] = 1;
             }
          }
          else if(2>=3&&2<=5)
          {
            if(j==3)
            {
              t2[0] = 4;
              t2[1] = 5;
            }
            else if(j==4) {
              t2[0] = 3;
              t2[1] = 5;
            }
            else {
              t2[0] = 3;
              t2[1] = 4;
            }
          }
          else
          {
            if(j==6)  {
              t2[0] = 7;
              t2[1] = 8;
            }
            else if(j==7) {
              t2[0] = 6;
              t2[1] = 8;
            }
            else {
              t2[0] = 6;
              t2[1] = 7;
            }
          }


          if(
          (
             !inRow(k, i)
          && !inColumn(k, j)
          && !inGrid(k, i, j)
          )


          &&

          (
            (
              inRow(k, t[0])
              &&
               inRow(k, t[1])
            )

            ||

            (
              inColumn(k, t2[0])
              && inColumn(k, t2[1])
            )

          )


          )
          {
            document.getElementById(counter).innerHTML = k;
            mainArr[i][j] = k;
            console.log(k, " added at : ", i, j)
            document.getElementById(counter).style.color = "blue";
            //break;
          }
        }
      }
      counter++;
    }
    counter = 1;
    for(var i=0;i<9;++i)
    {
      for(var j=0;j<9;++j)
      {
        x = document.getElementById(counter).innerHTML;
        if(x == "X" || x == "")
        {
          document.getElementById(counter).style.color = "red";
        }
        counter++;
      }
    }
}
