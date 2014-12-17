click:false;
function loadJSON()
{
   console.log("Entered!");
   var data_file1 = "http://127.0.0.1:9889/labs";
   console.log("Read file!")
   var http_request = new XMLHttpRequest();
   try{
      http_request = new XMLHttpRequest();
   }catch (e){
      try{
         http_request = new ActiveXObject("Msxml2.XMLHTTP");
      }catch (e) {
         try{
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
         }catch (e){
            console.log("Your browser broke!");
            return false;
         }
      }
   }
   http_request.onreadystatechange  = function(){
      if (http_request.readyState == 4  )
      {
        console.log("Entered if!");
        console.log("1 "+http_request.responseText);
        var jsonObj = JSON.parse(http_request.responseText);
	console.log("2 "+document.getElementById("lab_id"));
        console.log("jsonObj.length   :"+jsonObj.length);
        for (var j =0;j<jsonObj.length;j++)
	{  
          console.log("hello");
          console.log(jsonObj[j]['lab_id']);
          addRow( "table1",jsonObj[j]['lab_id'], jsonObj[j]['status']);
          
         //    document.getElementById('Id').innerHTML = jsonObj[j]['CId'];
        	// 	document.getElementById('RU').innerHTML = jsonObj[j]['RamUsage'];
			      // document.getElementById('DU').innerHTML = jsonObj[j]['DiskUsage'];
          //}
        }
      }
   }
   http_request.open("GET", data_file1, true);
   http_request.send();
   click=true;
   disableButton("getData");
}



function loadJSON1(id)
{
   console.log("Entered!");
   //console.log("......"+para1);
   data_file ="http://127.0.0.1:9889/labs/" + id;
  // console.log("---------" + data_file);
   var http_request = new XMLHttpRequest();
   try{
      http_request = new XMLHttpRequest();
   }catch (e){
      try{
         http_request = new ActiveXObject("Msxml2.XMLHTTP");
      }catch (e) {
         try{
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
         }catch (e){
            console.log("Your browser broke!");
            return false;
         }
      }
   }
   http_request.onreadystatechange  = function(){
      if (http_request.readyState == 4  )
      {
        console.log("Entered if!");
        console.log("1 "+http_request.responseText);
        var jsonObj = JSON.parse(http_request.responseText);
        console.log("2 "+document.getElementById("lab_id"));
          console.log("hello");
          console.log("@@@@@@@@@@" + jsonObj['lab_id']);
          addRow1("table2",jsonObj['lab_id'],jsonObj['resources']['ram_usage'],jsonObj['resources']['disk_usage'],jsonObj['resources']['cpu_units'],jsonObj['resources']['up_time'],jsonObj['infrastructure']['data_centre'],jsonObj['infrastructure']['os'],jsonObj['usage_analytics']['hits_per_day'],jsonObj['usage_analytics']['unique_hits_per_day'])
      }
   }
   http_request.open("GET", data_file, true);
   http_request.send();
}

function disableButton(id)
{
	document.getElementById(id).disabled="true";
}

function addRow1(tableID,para0,para1,para2,para3,para4,para5,para6,para7,para8) {
 // console.log("test :"+tableID+" , "+para2+" ");
 
            var table = document.getElementById(tableID);
            console.log(table.rows.length);
            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);
 
            var cell1 = row.insertCell(0);
            cell1.innerHTML= para0;
           
            var cell2 = row.insertCell(1);
            cell2.innerHTML = "     Ram Usage : " +  para1 + "</br>" +"     Disk Usage : "+ para2 + "</br>" + "     CPU Units : " + para3 + "</br>" + "     Uptime : " + para4;

            var cell3 = row.insertCell(2);
            cell3.innerHTML = "    Data Centre  : " + para5 + "</br>" + "    OS  : " + para6;

            var cell4 = row.insertCell(3);
            cell4.innerHTML = "     Hits Per day  :" + para7 + "</br>" + "    Unique hits per day  : " + para8;

          console.log("finally!!");
 
        }


function addRow(tableID,para1,para2) {
  console.log("test :"+tableID+" , "+para1+" , "+para2+" ");

	    var table = document.getElementById(tableID);
            console.log(table.rows.length);
            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);
 
            var cell1 = row.insertCell(0);
            cell1.innerHTML= "<a href=#> <div id=" + para1 + " onclick=loadJSON1(this.id)>" +para1+ "</div></a>";
          //  cell1.innerHTML = para1;
           
            var cell2 = row.insertCell(1);
            cell2.innerHTML = para2;

          console.log("finally!!");
 
        }