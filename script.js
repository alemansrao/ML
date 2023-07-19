flag = 0;
initialMS = 0;
finalMS = 0;

function getRndInteger(min, max) {
  if (!flag) {
    mil = 1000 * (Math.floor(Math.random() * (max - min)) + min);
    console.log(mil);
    return mil;
  } else return 0;
}
function doo() {
  if (flag == 0) {
    //turn red
    ele = document.getElementById("lala");
    ele.style.background = "blue";
    ele.innerText = "Click Now";
    initialMS = new Date();
    flag = 1;
  } else {
    finalMS = new Date();
    responsTime = finalMS.getTime() - initialMS.getTime() + "ms";
    document.getElementById("result").innerText =
    "Your reaction time is " + responsTime;
    
    document.getElementById("resetButton").removeAttribute("hidden");
  }
}

function resetAll()
{
  document.getElementById("result").innerText = "";
  ele = document.getElementById("lala");
    ele.style.background = "#4caf50";
    ele.innerText = "Start Test";
    document.getElementById("resetButton").setAttribute("hidden","hidden");

}
