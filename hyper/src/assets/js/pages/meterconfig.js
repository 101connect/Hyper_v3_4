var Panel1Type = 0;
var Panel2Type = 0;

function GetConfig()
{

$.get("get_main_info", function(data) {
    var arr = data.split(";");

      document.getElementById('DeviceName').innerHTML = arr[1];
      document.getElementById('DeviceLocation').innerHTML = arr[2];
      document.getElementById('MAC').innerHTML = arr[5];
      document.getElementById('Time').innerHTML = arr[4];

});


$.get("get_general_settings", function(data) {

      var arr = data.split(";");

      switch(arr[3])
      {
        case "0":
            document.getElementById('Panel1TypeInput').value = "Top Feed";
            Panel1Type = "Top Feed";
            break;
        case "1":
            document.getElementById('Panel1TypeInput').value = "Bottom Feed";
            Panel1Type = "Bottom Feed";
            break;
        case "2":
            document.getElementById('Panel1TypeInput').value = "Inline Sequential";
            Panel1Type = "Inline Sequential";
            break;
        case "3":
            document.getElementById('Panel1TypeInput').value = "Inline Odd/Even";
            Panel1Type = "Inline Odd/Even";
            break;
        default: 
            document.getElementById('Panel1TypeInput').value = "Sequential";
            Panel1Type = "Sequential";
            break;
      }

      switch(arr[4])
      {
        case "0":
            document.getElementById('Panel2TypeInput').value = "Top Feed";
            Panel2Type = "Top Feed";
            break;
        case "1":
            document.getElementById('Panel2TypeInput').value = "Bottom Feed";
            Panel2Type = "Bottom Feed";
            break;
        case "2":
            document.getElementById('Panel2TypeInput').value = "Inline Sequential";
            Panel2Type = "Inline Sequential";
            break;
        case "3":
            document.getElementById('Panel2TypeInput').value = "Inline Odd/Even";
            Panel2Type = "Inline Odd/Even";
            break;
        default: 
            document.getElementById('Panel2TypeInput').value = "Sequential";
            Panel2Type = "Sequential";
            break;
      }

    Panel1Config();
    Panel2Config();
          

    });
}

function Panel1Config()
{
	var type = document.getElementById("Panel1TypeInput").value;
  var odd,even;
	
  

	// if(type === "Top Feed")
	// {
 //    P1Name.innerText = "SP1/2 Top Feed";

 // 		var P1wrapper = document.getElementById("P1Values")
 //                              , myHTML = "";

 //                            myHTML += '<thead >',
 //                            myHTML += "<tr>",
 //                            myHTML += '<th style="width:10px"> <a href="#" style="color:#696969;" data-toggle="tooltip" title="Odd Side"> Circuit </a></th>',
 //                            myHTML += '<th style="width:20px"  align="center"> <a href="#" style="color:#696969;" data-toggle="tooltip" title="0-32767">  </a> <button type="button" data-toggle=modal data-target=#UpdateFriendlyNameModal class="btn">CT Size</button></th>',
 //                            myHTML += '<th style="width:20px"  align="center"> <a href="#" style="color:#696969;" data-toggle="tooltip" title="0-32767">Breaker Size</a></th>',
 //                            myHTML += '<th style="width:20px"  align="center"> <a href="#" style="color:#696969;" data-toggle="tooltip" title="0 disables the channel. A value of 1-96 assigns a circuit. If circuit 1,3,5 have a value of 1,1,1 then they are grouped as True Circuit #1">True Circuit</a></th>',
                            
 //                            myHTML += '<th style="width:10px"  align="center"  ><a href="#" style="color:#696969;" data-toggle="tooltip" title="Sets the line Voltage">Voltage Phase</a></th>',
                            
 //                            myHTML += '<th style="width:20px"  align="center"  ><a href="#" style="color:#696969;" data-toggle="tooltip" title="0 disables the channel. A value of 1-96 assigns a circuit. If circuit 2,4,6 have a value of 2,2,2 then they are grouped as True Circuit #2">True Circuit</a></th>',
 //                            myHTML += '<th style="width:20px"  align="center"  ><a href="#" style="color:#696969;" data-toggle="tooltip" title="0-32767">Breaker Size</a></th>',
 //                            myHTML += '<th style="width:20px"  align="center"><a href="#" style="color:#696969;" data-toggle="tooltip" title="0-32767"> CT Size </a> </th>',
 //                            myHTML += '<th style="width:10px"><a href="#" style="color:#696969;" data-toggle="tooltip" title="Even Side"> Circuit </a></th>',
                            
                            
 //                            myHTML += "</tr>";
 //                            myHTML += "</thead>"
 //                            for (var i = 1; i <= 21; i++) {
 //                              odd = 2*i - 1;
 //                              even = 2*i;
 //                              var P1CirNumOdd = "P1Ch" + odd + "SPOdd",
 //                                  P1CTSizeOdd = "P1Ch" + i + "CTOdd",
 //                                  P1BRSizeOdd = "P1Ch" + i + "BROdd",
 //                                  P1TMOdd =  "P1Ch" + i + "ALOdd",
 //                                  P1VPhase = "P1Ch" + i + "VP",
 //                                  P1TMEven =  "P1Ch" + i + "ALEven",
 //                                  P1BRSizeEven = "P1Ch" + i + "BREven",
 //                                  P1CTSizeEven = "P1Ch" + i + "CTEven",
 //                                  P1CirNumEven = "P1Ch" + even + "SPEven";
                                  
 //                                myHTML += "<tr>",
 //                                myHTML += '<td  align="right" id="' + P1CirNumOdd + '"><b></b></td>',
 //                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P1TMOdd + '" ></td>',
 //                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P1CTSizeOdd + '" ></td>',
 //                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P1BRSizeOdd + '" ></td>',
 //                                myHTML += '<td><select align="center" id="' + P1VPhase + '"><option value="0">Line 1</option><option value="1">Line 2</option><option value="2">Line 3</option></select>',
 //                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P1BRSizeEven + '" ></td>',
 //                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P1CTSizeEven + '" ></td>',
 //                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P1TMEven + '" ></td>',
 //                                myHTML += '<td  align="left" id="' + P1CirNumEven + '"><b></b></td>',
                               
 //                                myHTML += "</tr>"
 //                            }
 //                            P1wrapper.innerHTML = myHTML

	// }
	//else if(type === "Bottom Feed")
	if(type === "Top Feed" || type === "Bottom Feed")
	{
    if(type === "Bottom Feed") P1Name.innerText = "SP1/2 Bottom Feed";
    else P1Name.innerText = "SP1/2 Top Feed";
    var P1wrapper = document.getElementById("P1Values")
                              , myHTML = "";

                            myHTML += '<thead >',
                            myHTML += "<tr>",
                            myHTML += '<th ><b>Circuit</th>',
                            myHTML += '<th   align="center"><b>True Meter</th>',
                            myHTML += '<th   align="center"  ><b>CT Size</th>',
                            myHTML += '<th   align="center"  ><b>Breaker Size</th>',
                            
                            myHTML += '<th   align="center"  ><b>Voltage Phase</th>',
                            
                            myHTML += '<th   align="center"  ><b>Breaker Size</th>',
                            myHTML += '<th   align="center"  ><b>CT Size</th>',
                            myHTML += '<th   align="center"><b>True Meter</th>',
                            myHTML += '<th ><b>Circuit</th>',
                            
                            
                            myHTML += "</tr>";
                            myHTML += "</thead>"
                            for (var i = 1; i <= 21; i++) {
                              odd = 2*i - 1;
                              even = 2*i;
                              var P1CirNumOdd = "P1Ch" + odd + "SPOdd",
                                  P1CTSizeOdd = "P1Ch" + i + "CTOdd",
                                  P1BRSizeOdd = "P1Ch" + i + "BROdd",
                                  P1TMOdd =  "P1Ch" + i + "ALOdd",
                                  P1VPhase = "P1Ch" + i + "VP",
                                  P1TMEven =  "P1Ch" + i + "ALEven",
                                  P1BRSizeEven = "P1Ch" + i + "BREven",
                                  P1CTSizeEven = "P1Ch" + i + "CTEven",
                                  P1CirNumEven = "P1Ch" + even + "SPEven";
                                  
                                myHTML += "<tr>",
                                myHTML += '<td  align="right" id="' + P1CirNumOdd + '"></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P1CTSizeOdd + '" ></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P1BRSizeOdd + '" ></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P1TMOdd + '" ></td>',
                                myHTML += '<td><select align="center" id="' + P1VPhase + '"><option value="0">Line 1</option><option value="1">Line 2</option><option value="2">Line 3</option></select>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P1TMEven + '" ></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P1BRSizeEven + '" ></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P1CTSizeEven + '" ></td>',
                                myHTML += '<td  align="left" id="' + P1CirNumEven + '"></td>',
                               
                                myHTML += "</tr>"
                            }
                            P1wrapper.innerHTML = myHTML


	}

	else if(type === "Inline Sequential")
	{
    P1Name.innerText = "SP1/2 Inline Sequential";
		var P1wrapper = document.getElementById("P1Values")
                              , myHTML = "";

                            myHTML += '<thead >',
                            myHTML += "<tr>",
                            myHTML += '<th ><b>Circuit</th>'
                            myHTML += '<th   align="center"><b>CT Size</th>'
                            myHTML += '<th   align="center"  ><b>Breaker Size</th>',
                            myHTML += '<th   align="center"  ><b>Alarm Threshold</th>',
                            myHTML += '<th   align="center"  ><b>Voltage Phase</th>',
                            
                            
                            myHTML += "</tr>";
                            myHTML += "</thead>"
                            for (var i = 1; i <= 42; i++) {
                              var P1CirNum = "P1Ch" + i + "SP",
                                  P1CTSize = "P1Ch" + i + "CT",
                                  P1BRSize = "P1Ch" + i + "BR",
                                  P1TM =  "P1Ch" + i + "AL",
                                  P1VPhase = "P1Ch" + i + "VP";
                                  
                                  
                                myHTML += "<tr>",
                                myHTML += '<td  align="right" id="' + P1CirNum + '"></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P1CTSize + '" ></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P1BRSize + '" ></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P1TM + '" ></td>',
                                myHTML += '<td><select align="center" id="' + P1VPhase + '"><option value="0">Line 1</option><option value="1">Line 2</option><option value="2">Line 3</option></select>',
                                                               
                                myHTML += "</tr>"
                            }
                            P1wrapper.innerHTML = myHTML

	}
	else if(type === "Inline Odd/Even")
	{
    P1Name.innerText = "SP1/2 Inline Odd/Even";
		var P1wrapper = document.getElementById("P1Values")
                              , myHTML = "";

                            myHTML += '<thead >',
                            myHTML += "<tr>",
                            myHTML += '<th ><b>Circuit</th>'
                            myHTML += '<th   align="center"><b>CT Size</th>'
                            myHTML += '<th   align="center"  ><b>Breaker Size</th>',
                            myHTML += '<th   align="center"  ><b>Alarm Threshold</th>',
                            myHTML += '<th   align="center"  ><b>Voltage Phase</th>',
                            
                            
                            myHTML += "</tr>";
                            myHTML += "</thead>"
                            for (var i = 1; i <= 21; i++) 
                            {
                              odd = 2*i - 1;
                              var P1CirNum = "P1Ch" + odd + "SPOdd",
                                  P1CTSize = "P1Ch" + odd + "CTOdd",
                                  P1BRSize = "P1Ch" + odd + "BROdd",
                                  P1TM =  "P1Ch" + odd + "ALOdd",
                                  P1VPhase = "P1Ch" + odd + "VP";
                                  
                                  
                                myHTML += "<tr>",
                                myHTML += '<td  align="right" id="' + P1CirNum + '"></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P1CTSize + '" ></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P1BRSize + '" ></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P1TM + '" ></td>',
                                myHTML += '<td><select align="center" id="' + P1VPhase + '"><option value="0">Line 1</option><option value="1">Line 2</option><option value="2">Line 3</option></select>',
                                myHTML += "</tr>"
                              }
                              for (var i = 1; i <= 21; i++) 
                              {
                              even = 2*i;
                              var P1CirNum = "P1Ch" + even + "SPEven",
                                  P1CTSize = "P1Ch" + even + "CTEven",
                                  P1BRSize = "P1Ch" + even + "BREven",
                                  P1TM =  "P1Ch" + even + "ALEven",
                                  P1VPhase = "P1Ch" + even + "VP";
                                  
                                  
                                myHTML += "<tr>",
                                myHTML += '<td  align="right" id="' + P1CirNum + '"></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P1CTSize + '" ></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P1BRSize + '" ></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P1TM + '" ></td>',
                                myHTML += '<td><select align="center" id="' + P1VPhase + '"><option value="0">Line 1</option><option value="1">Line 2</option><option value="2">Line 3</option></select>',
                              
                                myHTML += "</tr>"
                            }
                            P1wrapper.innerHTML = myHTML

	}
	else 
	{
    P1Name.innerText = "SP1/2 Sequential";
		var P1wrapper = document.getElementById("P1Values")
                              , myHTML = "";

                            myHTML += '<thead >',
                            myHTML += "<tr>",
                            myHTML += '<th ><b>Circuit</th>'
                            myHTML += '<th   align="center"><b>CT Size</th>'
                            myHTML += '<th   align="center"  ><b>Breaker Size</th>',
                            myHTML += '<th   align="center"  ><b>Alarm Threshold</th>',
                            myHTML += '<th   align="center"  ><b>Voltage Phase</th>',
                            
                            
                            myHTML += "</tr>";
                            myHTML += "</thead>"
                            for (var i = 1; i <= 42; i++) {
                              var P1CirNum = "P1Ch" + i + "SP",
                                  P1CTSize = "P1Ch" + i + "CT",
                                  P1BRSize = "P1Ch" + i + "BR",
                                  P1TM =  "P1Ch" + i + "AL",
                                  P1VPhase = "P1Ch" + i + "VP";
                                  
                                  
                                myHTML += "<tr>",
                                myHTML += '<td  align="right" id="' + P1CirNum + '"></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P1CTSize + '" ></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P1BRSize + '" ></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P1TM + '" ></td>',
                                myHTML += '<td><select align="center" id="' + P1VPhase + '"><option value="0">Line 1</option><option value="1">Line 2</option><option value="2">Line 3</option></select>',
                                                               
                                myHTML += "</tr>"
                            }
                            P1wrapper.innerHTML = myHTML


}

// We're done building the table, now get data to fill it!
GetP1Settings();

}

function Panel2Config()
{
  var type = document.getElementById("Panel2TypeInput").value;
  var odd,even;
  
  

  if(type === "Top Feed" || type === "Bottom Feed")
  {
    if(type === "Top Feed") P2Name.innerText = "SP3/4 Top Feed";
    else P2Name.innerText = "SP3/4 Bottom Feed";

    var P2wrapper = document.getElementById("P2Values")
                              , myHTML = "";

                            myHTML += '<thead >',
                            myHTML += "<tr>",
                            myHTML += '<th ><b>Circuit</th>',
                            myHTML += '<th   align="center"><b>True Meter</th>',
                            myHTML += '<th   align="center"  ><b>CT Size</th>',
                            myHTML += '<th   align="center"  ><b>Breaker Size</th>',
                            
                            myHTML += '<th   align="center"  ><b>Voltage Phase</th>',
                            
                            myHTML += '<th   align="center"  ><b>Breaker Size</th>',
                            myHTML += '<th   align="center"  ><b>CT Size</th>',
                            myHTML += '<th   align="center"><b>True Meter</th>',
                            myHTML += '<th ><b>Circuit</th>',
                            
                            
                            myHTML += "</tr>";
                            myHTML += "</thead>"
                            for (var i = 1; i <= 21; i++) {
                              odd = 2*i - 1;
                              even = 2*i;
                              var P2CirNumOdd = "P2Ch" + odd + "SPOdd",
                                  P2CTSizeOdd = "P2Ch" + i + "CTOdd",
                                  P2BRSizeOdd = "P2Ch" + i + "BROdd",
                                  P2TMOdd =  "P2Ch" + i + "ALOdd",
                                  P2VPhase = "P2Ch" + i + "VP",
                                  P2TMEven =  "P2Ch" + i + "ALEven",
                                  P2BRSizeEven = "P2Ch" + i + "BREven",
                                  P2CTSizeEven = "P2Ch" + i + "CTEven",
                                  P2CirNumEven = "P2Ch" + even + "SPEven";
                                  
                                myHTML += "<tr>",
                                myHTML += '<td  align="right" id="' + P2CirNumOdd + '"></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P2CTSizeOdd + '" ></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P2BRSizeOdd + '" ></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P2TMOdd + '" ></td>',
                                myHTML += '<td><select align="center" id="' + P2VPhase + '"><option value="0">Line 1</option><option value="1">Line 2</option><option value="2">Line 3</option></select>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P2TMEven + '" ></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P2BRSizeEven + '" ></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P2CTSizeEven + '" ></td>',
                                myHTML += '<td  align="left" id="' + P2CirNumEven + '"></td>',
                               
                                myHTML += "</tr>"
                            }
                            P2wrapper.innerHTML = myHTML

  }
  // else if(type === "Bottom Feed")
  // {
  //   P2Name.innerText = "SP3/4 Bottom Feed";
  //   var P2wrapper = document.getElementById("P2Values")
  //                             , myHTML = "";

  //                           myHTML += '<thead >',
  //                           myHTML += "<tr>",
  //                           myHTML += '<th ><b>Circuit</th>',
  //                           myHTML += '<th   align="center"><b>CT Size</th>',
  //                           myHTML += '<th   align="center"  ><b>Breaker Size</th>',
  //                           myHTML += '<th   align="center"  ><b>Alarm Threshold</th>',
                            
  //                           myHTML += '<th   align="center"  ><b>Voltage Phase</th>',
                            
  //                           myHTML += '<th   align="center"  ><b>Alarm Threshold</th>',
  //                           myHTML += '<th   align="center"  ><b>Breaker Size</th>',
  //                           myHTML += '<th   align="center"><b>CT Size</th>',
  //                           myHTML += '<th ><b>Circuit</th>',
                            
                            
  //                           myHTML += "</tr>";
  //                           myHTML += "</thead>"
  //                           for (var i = 1; i <= 21; i++) {
  //                             odd = 2*i - 1;
  //                             even = 2*i;
  //                             var P2CirNumOdd = "P2Ch" + odd + "SPOdd",
  //                                 P2CTSizeOdd = "P2Ch" + i + "CTOdd",
  //                                 P2BRSizeOdd = "P2Ch" + i + "BROdd",
  //                                 P2TMOdd =  "P2Ch" + i + "ALOdd",
  //                                 P2VPhase = "P2Ch" + i + "VP",
  //                                 P2TMEven =  "P2Ch" + i + "ALEven",
  //                                 P2BRSizeEven = "P2Ch" + i + "BREven",
  //                                 P2CTSizeEven = "P2Ch" + i + "CTEven",
  //                                 P2CirNumEven = "P2Ch" + even + "SPEven";
                                  
  //                               myHTML += "<tr>",
  //                               myHTML += '<td  align="right" id="' + P2CirNumOdd + '"></td>',
  //                               myHTML += '<td><input type="text" class="form-control" align="center" id="' + P2CTSizeOdd + '" ></td>',
  //                               myHTML += '<td><input type="text" class="form-control" align="center" id="' + P2BRSizeOdd + '" ></td>',
  //                               myHTML += '<td><input type="text" class="form-control" align="center" id="' + P2TMOdd + '" ></td>',
  //                               myHTML += '<td><select align="center" id="' + P2VPhase + '"><option value="0">Line 1</option><option value="1">Line 2</option><option value="2">Line 3</option></select>',
  //                               myHTML += '<td><input type="text" class="form-control" align="center" id="' + P2TMEven + '" ></td>',
  //                               myHTML += '<td><input type="text" class="form-control" align="center" id="' + P2BRSizeEven + '" ></td>',
  //                               myHTML += '<td><input type="text" class="form-control" align="center" id="' + P2CTSizeEven + '" ></td>',
  //                               myHTML += '<td  align="left" id="' + P2CirNumEven + '"></td>',
                               
  //                               myHTML += "</tr>"
  //                           }
  //                           P2wrapper.innerHTML = myHTML


  // }

  else if(type === "Inline Sequential")
  {
    P2Name.innerText = "SP3/4 Inline Sequential";
    var P2wrapper = document.getElementById("P2Values")
                              , myHTML = "";

                            myHTML += '<thead >',
                            myHTML += "<tr>",
                            myHTML += '<th ><b>Circuit</th>'
                            myHTML += '<th   align="center"><b>CT Size</th>'
                            myHTML += '<th   align="center"  ><b>Breaker Size</th>',
                            myHTML += '<th   align="center"  ><b>Alarm Threshold</th>',
                            myHTML += '<th   align="center"  ><b>Voltage Phase</th>',
                            
                            
                            myHTML += "</tr>";
                            myHTML += "</thead>"
                            for (var i = 1; i <= 42; i++) {
                              var P2CirNum = "P2Ch" + i + "SP",
                                  P2CTSize = "P2Ch" + i + "CT",
                                  P2BRSize = "P2Ch" + i + "BR",
                                  P2TM =  "P2Ch" + i + "AL",
                                  P2VPhase = "P2Ch" + i + "VP";
                                  
                                  
                                myHTML += "<tr>",
                                myHTML += '<td  align="right" id="' + P2CirNum + '"></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P2CTSize + '" ></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P2BRSize + '" ></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P2TM + '" ></td>',
                                myHTML += '<td><select align="center" id="' + P2VPhase + '"><option value="0">Line 1</option><option value="1">Line 2</option><option value="2">Line 3</option></select>',
                                                               
                                myHTML += "</tr>"
                            }
                            P2wrapper.innerHTML = myHTML

  }
  else if(type === "Inline Odd/Even")
  {
    P2Name.innerText = "SP3/4 Inline Odd/Even";
    var P2wrapper = document.getElementById("P2Values")
                              , myHTML = "";

                            myHTML += '<thead >',
                            myHTML += "<tr>",
                            myHTML += '<th ><b>Circuit</th>'
                            myHTML += '<th   align="center"><b>CT Size</th>'
                            myHTML += '<th   align="center"  ><b>Breaker Size</th>',
                            myHTML += '<th   align="center"  ><b>Alarm Threshold</th>',
                            myHTML += '<th   align="center"  ><b>Voltage Phase</th>',
                            
                            
                            myHTML += "</tr>";
                            myHTML += "</thead>"
                            for (var i = 1; i <= 21; i++) 
                            {
                              odd = 2*i - 1;
                              var P2CirNum = "P2Ch" + odd + "SPOdd",
                                  P2CTSize = "P2Ch" + odd + "CTOdd",
                                  P2BRSize = "P2Ch" + odd + "BROdd",
                                  P2TM =  "P2Ch" + odd + "ALOdd",
                                  P2VPhase = "P2Ch" + odd + "VP";
                                  
                                  
                                myHTML += "<tr>",
                                myHTML += '<td  align="right" id="' + P2CirNum + '"></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P2CTSize + '" ></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P2BRSize + '" ></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P2TM + '" ></td>',
                                myHTML += '<td><select align="center" id="' + P2VPhase + '"><option value="0">Line 1</option><option value="1">Line 2</option><option value="2">Line 3</option></select>',
                                myHTML += "</tr>"
                              }
                              for (var i = 1; i <= 21; i++) 
                              {
                              even = 2*i;
                              var P2CirNum = "P2Ch" + even + "SPEven",
                                  P2CTSize = "P2Ch" + even + "CTEven",
                                  P2BRSize = "P2Ch" + even + "BREven",
                                  P2TM =  "P2Ch" + even + "ALEven",
                                  P2VPhase = "P2Ch" + even + "VP";
                                  
                                  
                                myHTML += "<tr>",
                                myHTML += '<td  align="right" id="' + P2CirNum + '"></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P2CTSize + '" ></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P2BRSize + '" ></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P2TM + '" ></td>',
                                myHTML += '<td><select align="center" id="' + P2VPhase + '"><option value="0">Line 1</option><option value="1">Line 2</option><option value="2">Line 3</option></select>',
                              
                                myHTML += "</tr>"
                            }
                            P2wrapper.innerHTML = myHTML

  }
  else 
  {
    P2Name.innerText = "SP3/4 Sequential";
    var P2wrapper = document.getElementById("P2Values")
                              , myHTML = "";

                            myHTML += '<thead >',
                            myHTML += "<tr>",
                            myHTML += '<th ><b>Circuit</th>'
                            myHTML += '<th   align="center"><b>CT Size</th>'
                            myHTML += '<th   align="center"  ><b>Breaker Size</th>',
                            myHTML += '<th   align="center"  ><b>Alarm Threshold</th>',
                            myHTML += '<th   align="center"  ><b>Voltage Phase</th>',
                            
                            
                            myHTML += "</tr>";
                            myHTML += "</thead>"
                            for (var i = 1; i <= 42; i++) {
                              var P2CirNum = "P2Ch" + i + "SP",
                                  P2CTSize = "P2Ch" + i + "CT",
                                  P2BRSize = "P2Ch" + i + "BR",
                                  P2TM =  "P2Ch" + i + "AL",
                                  P2VPhase = "P2Ch" + i + "VP";
                                  
                                  
                                myHTML += "<tr>",
                                myHTML += '<td  align="right" id="' + P2CirNum + '"></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P2CTSize + '" ></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P2BRSize + '" ></td>',
                                myHTML += '<td><input type="text" class="form-control" align="center" id="' + P2TM + '" ></td>',
                                myHTML += '<td><select align="center" id="' + P2VPhase + '"><option value="0">Line 1</option><option value="1">Line 2</option><option value="2">Line 3</option></select>',
                                                               
                                myHTML += "</tr>"
                            }
                            P2wrapper.innerHTML = myHTML


  }

  // We're done building the table, now get data to fill it!
  GetP2Settings(type);

}

function GetP1Settings()
{
  var j=0;
  var odd,even;

  $.get("get_panel1_settings", function(data) {
    var arr = data.split(";");

      if(Panel1Type === "Top Feed" || Panel1Type === "Bottom Feed")
      {
          var max = 4*42;
          var index=0;
          for (var i = 0; i < 21;i++) 
          {
            odd = 2*i + 1;
            even = 2*i + 2;

            j = i+1;

            
            
        var P1CirNumOdd = "P1Ch" + odd + "SPOdd",
            P1CTSizeOdd = "P1Ch" + j + "CTOdd",
            P1BRSizeOdd = "P1Ch" + j + "BROdd",
            P1TMOdd =  "P1Ch" + j + "ALOdd",
            P1VPhase = "P1Ch" + j + "VP",
            P1TMEven =  "P1Ch" + j + "ALEven",
            P1BRSizeEven = "P1Ch" + j + "BREven",
            P1CTSizeEven = "P1Ch" + j + "CTEven",
            P1CirNumEven = "P1Ch" + even + "SPEven";

          document.getElementById(P1CirNumOdd).innerHTML = odd;
          document.getElementById(P1CTSizeOdd).value = arr[index++];
          document.getElementById(P1BRSizeOdd).value = arr[index++];
          document.getElementById(P1TMOdd).value = arr[index++];
        
          document.getElementById(P1VPhase).value = arr[index++];

          document.getElementById(P1CTSizeEven).value = arr[index++];
          document.getElementById(P1BRSizeEven).value = arr[index++];
          document.getElementById(P1TMEven).value = arr[index++];
          
          
          document.getElementById(P1CirNumEven).innerHTML = even;
          index++; // Need to increment for the exta line voltage
        }

      } // End of Top/bottom Feed

      if(Panel1Type === "Inline Odd/Even")
      {
          var index = 0;
          for (var i = 0; i < 21; i++) 
          {
            odd = 2*i + 1;
            
                        
        var P1CirNumOdd = "P1Ch" + odd + "SPOdd",
            P1CTSizeOdd = "P1Ch" + odd + "CTOdd",
            P1BRSizeOdd = "P1Ch" + odd + "BROdd",
            P1TMOdd =  "P1Ch" + odd + "ALOdd",
            P1VPhase = "P1Ch" + odd + "VP";
            

          document.getElementById(P1CirNumOdd).innerHTML = odd;
          document.getElementById(P1CTSizeOdd).value = arr[index++];
          document.getElementById(P1BRSizeOdd).value = arr[index++];
          document.getElementById(P1TMOdd).value = arr[index++];
        
          document.getElementById(P1VPhase).value = arr[index++];
          

          
        }

          var index = 1;
          for (var i = 0; i < 21; i++) 
          {
            even = 2*i + 2;
            

        var P1CirNumEven = "P1Ch" + even + "SPEven",
            P1CTSizeEven = "P1Ch" + even + "CTEven",
            P1BRSizeEven = "P1Ch" + even + "BREven",
            P1TMEven =  "P1Ch" + even + "ALEven",
            P1VPhase =     "P1Ch" + even + "VP";

          document.getElementById(P1CirNumEven).innerHTML = even;
          document.getElementById(P1CTSizeEven).value = arr[inex++];
          document.getElementById(P1BRSizeEven).value = arr[index++];
          document.getElementById(P1TMEven).value = arr[index++];
          document.getElementById(P1VPhase).value = arr[index++];
          
        }
      }
      if(Panel1Type === "Inline Sequential")
      {
        var index = 0;
        for (var i = 0; i < 42;i++) 
        {
            j = i+1;                     
        var P1CirNum = "P1Ch" + j + "SP",
            P1CTSize = "P1Ch" + j + "CT",
            P1BRSize = "P1Ch" + j + "BR",
            P1TM =  "P1Ch" + j + "AL",
            P1VPhase = "P1Ch" + j + "VP";
            

          document.getElementById(P1CirNum).innerHTML = j;
          document.getElementById(P1CTSize).value = arr[index++];
          document.getElementById(P1BRSize).value = arr[index++];
          document.getElementById(P1TM).value = arr[index++];
        
          document.getElementById(P1VPhase).value = arr[index++];
          


        }
      }
      if(Panel1Type === "Sequential")
      {
        var index = 0;
        for (var i = 0; i < 42; ) 
        {
            j = i+1;

        var P1CirNum = "P1Ch" + j + "SP",
            P1CTSize = "P1Ch" + j + "CT",
            P1BRSize = "P1Ch" + j + "BR",
            P1TM =  "P1Ch" + j + "AL",
            P1VPhase = "P1Ch" + j + "VP";
            

          document.getElementById(P1CirNum).innerHTML = j;
          document.getElementById(P1CTSize).value = arr[index++];
          document.getElementById(P1BRSize).value = arr[index++];
          document.getElementById(P1TM).value = arr[index++];
        
          document.getElementById(P1VPhase).value = arr[index++];
          


        }
      }

  }); // End of .get settings

}

function GetP2Settings()
{
 var j=0;
  var odd,even;

      $.get("get_panel2_settings", function(data) {
    var arr = data.split(";");

      if(Panel2Type === "Top Feed" || Panel2Type === "Bottom Feed")
      {
          var max = 4*42;
          var index=0;
          for (var i = 0; i < 21;i++) 
          {
            odd = 2*i + 1;
            even = 2*i + 2;

            j = i+1;

            
            
        var P2CirNumOdd = "P2Ch" + odd + "SPOdd",
            P2CTSizeOdd = "P2Ch" + j + "CTOdd",
            P2BRSizeOdd = "P2Ch" + j + "BROdd",
            P2TMOdd =  "P2Ch" + j + "ALOdd",
            P2VPhase = "P2Ch" + j + "VP",
            P2TMEven =  "P2Ch" + j + "ALEven",
            P2BRSizeEven = "P2Ch" + j + "BREven",
            P2CTSizeEven = "P2Ch" + j + "CTEven",
            P2CirNumEven = "P2Ch" + even + "SPEven";

          document.getElementById(P2CirNumOdd).innerHTML = odd;
          document.getElementById(P2CTSizeOdd).value = arr[index++];
          document.getElementById(P2BRSizeOdd).value = arr[index++];
          document.getElementById(P2TMOdd).value = arr[index++];
        
          document.getElementById(P2VPhase).value = arr[index++];

          document.getElementById(P2CTSizeEven).value = arr[index++];
          document.getElementById(P2BRSizeEven).value = arr[index++];
          document.getElementById(P2TMEven).value = arr[index++];
          
          
          document.getElementById(P2CirNumEven).innerHTML = even;
          index++; // Need to increment for the exta line voltage
        }

      } // End of Top/bottom Feed

      if(Panel2Type === "Inline Odd/Even")
      {
          var index = 0;
          for (var i = 0; i < 21; i++) 
          {
            odd = 2*i + 1;
            
                        
        var P2CirNumOdd = "P1Ch" + odd + "SPOdd",
            P2CTSizeOdd = "P1Ch" + odd + "CTOdd",
            P2BRSizeOdd = "P1Ch" + odd + "BROdd",
            P2TMOdd =  "P1Ch" + odd + "ALOdd",
            P2VPhase = "P1Ch" + odd + "VP";
            

          document.getElementById(P2CirNumOdd).innerHTML = odd;
          document.getElementById(P2CTSizeOdd).value = arr[index++];
          document.getElementById(P2BRSizeOdd).value = arr[index++];
          document.getElementById(P2TMOdd).value = arr[index++];
        
          document.getElementById(P2VPhase).value = arr[index++];
          

          
        }

          var index = 1;
          for (var i = 0; i < 21; i++) 
          {
            even = 2*i + 2;
            

        var P2CirNumEven = "P2Ch" + even + "SPEven",
            P2CTSizeEven = "P2Ch" + even + "CTEven",
            P2BRSizeEven = "P2Ch" + even + "BREven",
            P2TMEven =  "P2Ch" + even + "ALEven",
            P2VPhase =     "P2Ch" + even + "VP";

          document.getElementById(P2CirNumEven).innerHTML = even;
          document.getElementById(P2CTSizeEven).value = arr[inex++];
          document.getElementById(P2BRSizeEven).value = arr[index++];
          document.getElementById(P2TMEven).value = arr[index++];
          document.getElementById(P2VPhase).value = arr[index++];
          
        }
      }
      if(Panel2Type === "Inline Sequential")
      {
        var index = 0;
        for (var i = 0; i < 42;i++) 
        {
            j = i+1;                     
        var P2CirNum = "P2Ch" + j + "SP",
            P2CTSize = "P2Ch" + j + "CT",
            P2BRSize = "P2Ch" + j + "BR",
            P2TM =  "P2Ch" + j + "AL",
            P2VPhase = "P2Ch" + j + "VP";
            

          document.getElementById(P2CirNum).innerHTML = j;
          document.getElementById(P2CTSize).value = arr[index++];
          document.getElementById(P2BRSize).value = arr[index++];
          document.getElementById(P2TM).value = arr[index++];
        
          document.getElementById(P2VPhase).value = arr[index++];
          


        }
      }
      if(Panel2Type === "Sequential")
      {
        var index = 0;
        for (var i = 0; i < 42; ) 
        {
            j = i+1;

        var P2CirNum = "P2Ch" + j + "SP",
            P2CTSize = "P2Ch" + j + "CT",
            P2BRSize = "P2Ch" + j + "BR",
            P2TM =  "P2Ch" + j + "AL",
            P2VPhase = "P2Ch" + j + "VP";
            

          document.getElementById(P2CirNum).innerHTML = j;
          document.getElementById(P2CTSize).value = arr[index++];
          document.getElementById(P2BRSize).value = arr[index++];
          document.getElementById(P2TM).value = arr[index++];
        
          document.getElementById(P2VPhase).value = arr[index++];
          


        }
      }

  }); // End of .get settings




}





