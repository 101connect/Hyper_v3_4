/*!
 * Data generation from Incusense meter JavaScript Library v0.0.1
 * http://
 *
 * Copyright 2018, Marc Bowman
 * 
 * Date: July 2018 
 */


function SPConfig()
{
    // Query to core module to figure out how the system is configured
    var P1config, P2config;
  
  $.get("get_general_settings", function(data) {

    var arr = data.split(";");

        if(arr[3] === "0") P1config = "Top Feed";
          else if (arr[3] === "1") P1config = "Bottom Feed";
            else if (arr[3] === "2") P1config = "Inline Sequential";
              else if (arr[3] === "3") P1config = "Inline Odd/Even";
                else P1config === "Sequential"

        if(arr[4] === "0") P2config = "Top Feed";
          else if (arr[4] === "1") P2config = "Bottom Feed";
            else if (arr[4] === "2") P2config = "Inline Sequential";
              else if (arr[4] === "3") P2config = "Inline Odd/Even";
                else P2config === "Sequential"
       
	
  //var P1config = type[0];
  //var P2config = type[1];
	

	if(P1config === "Top Feed")
	{
		P1Name.innerText = "SP1/2 Top Feed";

        var P1wrapper = document.getElementById("P1Values")
                              , myHTML = "";

                            myHTML += '<thead class="thead-dark" cellspacing="0" cellpadding="0">',
                            myHTML += "<tr>",
                            myHTML += '<th style="width: 70px;"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Odd Side"> Circuit </a></th>',
                            myHTML += '<th style="width: 100px padding:0px;"  align="center"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Name of Circuit">Name</a> </th>',
                            
                            //myHTML += '<th colspan="4"  align="center"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="On/Off">Breaker Status</a></th>',
                            myHTML += '<th colspan="4"  align="center"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="0-32000">Rating</a></th>',
                            
                            myHTML += '<th colspan="4"  align="center"  ><a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Real Time">Current</a></th>',
                            
                            myHTML += '<th style="padding:0px" align="center"  ><select class="form-control" style="padding:1px" style="width: 90px;" style="color:gray" id="P1VariableOdd">',
                            myHTML += '<option value="kWH">kWH</option>',
                            myHTML += '<option value="kW">kW</option>',
                            myHTML += '<option value="kVA">kVA</option>',
                            myHTML += '<option value="kVAR">kVAR</option>',
                            myHTML += '<option value="PF">PF</option>',
                            myHTML += '<option value="THDi">THDi</option>',
                            myHTML += '</select> </th>',
                            
                            myHTML += '<th   style="padding:0px" align="center"  ><select class="form-control" style="padding:1px" style="width: 90px;" style="color:gray" id="P1VariableEven">',
                            myHTML += '<option value="kWH">kWH</option>',
                            myHTML += '<option value="kW">kW</option>',
                            myHTML += '<option value="kVA">kVA</option>',
                            myHTML += '<option value="kVAR">kVAR</option>',
                            myHTML += '<option value="PF">PF</option>',
                            myHTML += '<option value="THDi">THDi</option>',
                            myHTML += '</select> </th>',

                            myHTML += '<th colspan="4"  align="center"  ><a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Real Time">Current</a></th>',
                            
                            myHTML += '<th colspan="4"  align="center"  ><a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="0-32000">Rating</a></th>',
                            
                            myHTML += '<th style="width: 70px padding:0px;"  align="center"><a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Name of Circuit">Name</a> </th>',
                            myHTML += '<th style="width: 70px;"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Even Side"> Circuit </a></th>',
                            
                            
                            myHTML += "</tr>";
                            myHTML += "</thead>"
                            for (var i = 1; i <= 21; i++) {
                              odd = 2*i - 1;
                              even = 2*i;
                              var P1CirNumOdd = "P1Ch" + odd + "SPOdd",
                                  P1FNOdd = "P1Ch" + i + "CTOdd",
                                  P1BStatusOdd = "P1Ch" + i + "BROdd",
                                  P1BRatingOdd =  "P1Ch" + i + "ALOdd",
                                  P1CurrentOdd = "P1Ch" + i + "AmpsOdd",
                                  P1VSelectOdd = "P1Ch" + i + "SelectOdd",
                                  P1VSelectEven = "P1Ch" + i + "SelectEven",
                                  P1CurrentEven = "P1Ch" + i + "AmpsEven",
                                  P1BRatingEven =  "P1Ch" + i + "ALEven",
                                  P1BStatusEven = "P1Ch" + i + "BREven",
                                  P1FNEven = "P1Ch" + i + "CTEven",
                                  P1CirNumEven = "P1Ch" + even + "SPEven";
                                  
                                myHTML += "<tr>",
                                myHTML += '<td style="width: 70px;" class="font-weight-bold px-4 py-2" align="right" id="' + P1CirNumOdd + '"></td>',
                                //myHTML += '<td style="width: 70px padding:0px;"><a data-toggle=modal data-target=#UpdateFriendlyNameModal id="' + P1FNOdd + '" style="width: 70px;" class="btn-sm font-weight-bold px-4 py-2 rounded-corner rounded" role="button"></a></td>',
                                myHTML += '<td style="width: 100px padding:0px;"><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P1FNOdd + '" ></td>',
                                myHTML += '<td colspan="4" align="center"  ><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P1BRatingOdd + '" ></td>',
                                
                                myHTML += '<td colspan="4" align="center" id="' + P1CurrentOdd + '"></td>',
                                myHTML += '<td  style="padding:1px" align="center" id="' + P1VSelectOdd + '"></td>',
                                myHTML += '<td  style="padding:1px" align="center" id="' + P1VSelectEven + '"></td>',
                                myHTML += '<td colspan="4" align="center" id="' + P1CurrentEven + '"></td>',
                                
                                myHTML += '<td colspan="4" align="center"  ><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P1BRatingEven + '" ></td>',
                                myHTML += '<td style="width: 100px padding:0px;"><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P1FNEven + '" ></td>',
                                //myHTML += '<td style="width: 70px padding:0px;"><a data-toggle=modal data-target=#UpdateFriendlyNameModal id="' + P1FNEven + '" style="width: 70px;" class="btn-sm font-weight-bold px-4 py-2 rounded-corner rounded" role="button"></a></td>',
                                myHTML += '<td style="width: 70px;" class="font-weight-bold px-4 py-2" align="left" id="' + P1CirNumEven + '"></td>',
                               
                                myHTML += "</tr>"
                            }
                            P1wrapper.innerHTML = myHTML

	}
	else if(P1config === "Bottom Feed")
	{
		var SP1wrapper = document.getElementById("SP1Values")
                              , myHTML = "";

                            myHTML += '<thead >',
                            myHTML += "<tr>",
                            myHTML += '<th ><b>Circuit</th>'
                            myHTML += '<th   align="center"  ><b>True Circuit</th>',
                            myHTML += '<th   align="center"><b>CT Size</th>'
                            myHTML += '<th   align="center"  ><b>Breaker Size</th>',
                            myHTML += '<th   align="center"  ><b>Alarm Threshold</th>',
                            myHTML += '<th   align="center"  ><b>Voltage Phase</th>',
                            
                            
                            myHTML += "</tr>";
                            myHTML += "</thead>"
                            for (var i = 1; i <= 21; i++) {
                              odd = 2*i - 1;
                              even = 2*i;
                              var P1CirNumOdd = "P1Ch" + odd + "SPOdd",
                                  P1FNOdd = "P1Ch" + i + "CTOdd",
                                  P1BStatusOdd = "P1Ch" + i + "BROdd",
                                  P1BRatingOdd =  "P1Ch" + i + "ALOdd",
                                  P1CurrentOdd = "P1Ch" + i + "AmpsOdd",
                                  P1VSelectOdd = "P1Ch" + i + "SelectOdd",
                                  P1VSelectEven = "P1Ch" + i + "SelectEven",
                                  P1CurrentEven = "P1Ch" + i + "AmpsEven",
                                  P1BRatingEven =  "P1Ch" + i + "ALEven",
                                  P1BStatusEven = "P1Ch" + i + "BREven",
                                  P1FNEven = "P1Ch" + i + "CTEven",
                                  P1CirNumEven = "P1Ch" + even + "SPEven";
                                  
                                myHTML += "<tr>",
                                myHTML += '<td style="width: 70px;" class="font-weight-bold px-4 py-2" align="right" id="' + P1CirNumOdd + '"></td>',
                                //myHTML += '<td style="width: 70px padding:0px;"><a data-toggle=modal data-target=#UpdateFriendlyNameModal id="' + P1FNOdd + '" style="width: 70px;" class="btn-sm font-weight-bold px-4 py-2 rounded-corner rounded" role="button"></a></td>',
                                myHTML += '<td style="width: 100px padding:0px;"><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P1FNOdd + '" ></td>',
                                myHTML += '<td colspan="4" align="center"  ><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P1BRatingOdd + '" ></td>',
                                
                                myHTML += '<td colspan="4" align="center" id="' + P1CurrentOdd + '"></td>',
                                myHTML += '<td  style="padding:1px" align="center" id="' + P1VSelectOdd + '"></td>',
                                myHTML += '<td  style="padding:1px" align="center" id="' + P1VSelectEven + '"></td>',
                                myHTML += '<td colspan="4" align="center" id="' + P1CurrentEven + '"></td>',
                                
                                myHTML += '<td colspan="4" align="center"  ><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P1BRatingEven + '" ></td>',
                                myHTML += '<td style="width: 100px padding:0px;"><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P1FNEven + '" ></td>',
                                //myHTML += '<td style="width: 70px padding:0px;"><a data-toggle=modal data-target=#UpdateFriendlyNameModal id="' + P1FNEven + '" style="width: 70px;" class="btn-sm font-weight-bold px-4 py-2 rounded-corner rounded" role="button"></a></td>',
                                myHTML += '<td style="width: 70px;" class="font-weight-bold px-4 py-2" align="left" id="' + P1CirNumEven + '"></td>',
                               
                                myHTML += "</tr>"
                            }
                            P1wrapper.innerHTML = myHTML

	}
	else if(P1config === "Inline Sequential")
	{
		    P1Name.innerText = "Inline Sequential";

        var P1wrapper = document.getElementById("P1Values")
                              , myHTML = "";

                            myHTML += '<thead class="thead-dark" cellspacing="0" cellpadding="0">',
                            myHTML += "<tr>",
                            myHTML += '<th style="width: 70px;"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Odd Side"> Circuit </a></th>',
                            myHTML += '<th style="width: 100px padding:0px;"  align="center"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Name of Circuit">Name</a> </th>',
                            
                            //myHTML += '<th colspan="4"  align="center"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="On/Off">Breaker Status</a></th>',
                            myHTML += '<th colspan="4"  align="center"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="0-32000">Rating</a></th>',
                            
                            myHTML += '<th colspan="4"  align="center"  ><a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Real Time">Current</a></th>',
                            
                            myHTML += '<th style="padding:0px" align="center"  ><select class="form-control" style="padding:1px" style="width: 90px;" style="color:gray" id="P1VariableOdd">',
                            myHTML += '<option value="kWH">kWH</option>',
                            myHTML += '<option value="kW">kW</option>',
                            myHTML += '<option value="kVA">kVA</option>',
                            myHTML += '<option value="kVAR">kVAR</option>',
                            myHTML += '<option value="PF">PF</option>',
                            myHTML += '<option value="THDi">THDi</option>',
                            myHTML += '</select> </th>',
                            
                           
                            
                            
                            myHTML += "</tr>";
                            myHTML += "</thead>"
                            for (var i = 1; i <= 21; i++) {
                              odd = 2*i - 1;
                              even = 2*i;
                              var P1CirNumOdd = "P1Ch" + odd + "SPOdd",
                                  P1FNOdd = "P1Ch" + i + "CTOdd",
                                  P1BStatusOdd = "P1Ch" + i + "BROdd",
                                  P1BRatingOdd =  "P1Ch" + i + "ALOdd",
                                  P1CurrentOdd = "P1Ch" + i + "AmpsOdd",
                                  P1VSelectOdd = "P1Ch" + i + "SelectOdd",
                                  P1VSelectEven = "P1Ch" + i + "SelectEven",
                                  P1CurrentEven = "P1Ch" + i + "AmpsEven",
                                  P1BRatingEven =  "P1Ch" + i + "ALEven",
                                  P1BStatusEven = "P1Ch" + i + "BREven",
                                  P1FNEven = "P1Ch" + i + "CTEven",
                                  P1CirNumEven = "P1Ch" + even + "SPEven";
                                  
                                myHTML += "<tr>",
                                myHTML += '<td style="width: 70px;" class="font-weight-bold px-4 py-2" align="right" id="' + P1CirNumOdd + '"></td>',
                                //myHTML += '<td style="width: 70px padding:0px;"><a data-toggle=modal data-target=#UpdateFriendlyNameModal id="' + P1FNOdd + '" style="width: 70px;" class="btn-sm font-weight-bold px-4 py-2 rounded-corner rounded" role="button"></a></td>',
                                myHTML += '<td style="width: 100px padding:0px;"><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P1FNOdd + '" ></td>',
                                myHTML += '<td colspan="4" align="center"  ><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P1BRatingOdd + '" ></td>',
                                
                                myHTML += '<td colspan="4" align="center" id="' + P1CurrentOdd + '"></td>',
                                myHTML += '<td  style="padding:1px" align="center" id="' + P1VSelectOdd + '"></td>',
                                myHTML += '<td  style="padding:1px" align="center" id="' + P1VSelectEven + '"></td>',
                                myHTML += '<td colspan="4" align="center" id="' + P1CurrentEven + '"></td>',
                                
                                myHTML += '<td colspan="4" align="center"  ><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P1BRatingEven + '" ></td>',
                                myHTML += '<td style="width: 100px padding:0px;"><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P1FNEven + '" ></td>',
                                //myHTML += '<td style="width: 70px padding:0px;"><a data-toggle=modal data-target=#UpdateFriendlyNameModal id="' + P1FNEven + '" style="width: 70px;" class="btn-sm font-weight-bold px-4 py-2 rounded-corner rounded" role="button"></a></td>',
                                myHTML += '<td style="width: 70px;" class="font-weight-bold px-4 py-2" align="left" id="' + P1CirNumEven + '"></td>',
                               
                                myHTML += "</tr>"
                            }
                            P1wrapper.innerHTML = myHTML

	}
	else if(P1config === "Inline Odd/Even")
	{
		 P1Name.innerText = "Inline Odd/Even";

        var P1wrapper = document.getElementById("P1Values")
                              , myHTML = "";

                            myHTML += '<thead class="thead-dark" cellspacing="0" cellpadding="0">',
                            myHTML += "<tr>",
                            myHTML += '<th style="width: 70px;"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Odd Side"> Circuit </a></th>',
                            myHTML += '<th style="width: 100px padding:0px;"  align="center"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Name of Circuit">Name</a> </th>',
                            
                            //myHTML += '<th colspan="4"  align="center"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="On/Off">Breaker Status</a></th>',
                            myHTML += '<th colspan="4"  align="center"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="0-32000">Rating</a></th>',
                            
                            myHTML += '<th colspan="4"  align="center"  ><a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Real Time">Current</a></th>',
                            
                            myHTML += '<th style="padding:0px" align="center"  ><select class="form-control" style="padding:1px" style="width: 90px;" style="color:gray" id="P1VariableOdd">',
                            myHTML += '<option value="kWH">kWH</option>',
                            myHTML += '<option value="kW">kW</option>',
                            myHTML += '<option value="kVA">kVA</option>',
                            myHTML += '<option value="kVAR">kVAR</option>',
                            myHTML += '<option value="PF">PF</option>',
                            myHTML += '<option value="THDi">THDi</option>',
                            myHTML += '</select> </th>',
                            
                           
                            
                            
                            myHTML += "</tr>";
                            myHTML += "</thead>"
                            for (var i = 1; i <= 41; i++) 
                            {
                              odd = 2*i - 1;
                              
                              var P1CirNumOdd = "P1Ch" + i + "SPOdd",
                                  P1FNOdd = "P1Ch" + i + "CTOdd",
                                  P1BStatusOdd = "P1Ch" + i + "BROdd",
                                  P1BRatingOdd =  "P1Ch" + i + "ALOdd",
                                  P1CurrentOdd = "P1Ch" + i + "AmpsOdd",
                                  P1VSelectOdd = "P1Ch" + i + "SelectOdd";
                                  
                                  i++;
                                  
                                myHTML += "<tr>",
                                myHTML += '<td style="width: 70px;" class="font-weight-bold px-4 py-2" align="right" id="' + P1CirNumOdd + '"></td>',
                                //myHTML += '<td style="width: 70px padding:0px;"><a data-toggle=modal data-target=#UpdateFriendlyNameModal id="' + P1FNOdd + '" style="width: 70px;" class="btn-sm font-weight-bold px-4 py-2 rounded-corner rounded" role="button"></a></td>',
                                myHTML += '<td style="width: 100px padding:0px;"><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P1FNOdd + '" ></td>',
                                myHTML += '<td colspan="4" align="center"  ><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P1BRatingOdd + '" ></td>',
                                
                                myHTML += '<td colspan="4" align="center" id="' + P1CurrentOdd + '"></td>',
                                myHTML += '<td  style="padding:1px" align="center" id="' + P1VSelectOdd + '"></td>',
                                
                               
                                myHTML += "</tr>"

                            }
                            for (var i = 2; i <= 42; i++) 
                            {
                              even = 2*i;
                              var 
                                  P1VSelectEven = "P1Ch" + i + "SelectEven",
                                  P1CurrentEven = "P1Ch" + i + "AmpsEven",
                                  P1BRatingEven =  "P1Ch" + i + "ALEven",
                                  P1BStatusEven = "P1Ch" + i + "BREven",
                                  P1FNEven = "P1Ch" + i + "CTEven",
                                  P1CirNumEven = "P1Ch" + i + "SPEven";

                                  i++;
                                  
                                myHTML += "<tr>",
                                myHTML += '<td style="width: 70px;" class="font-weight-bold px-4 py-2" align="right" id="' + P1CirNumEven + '"></td>',
                                //myHTML += '<td style="width: 70px padding:0px;"><a data-toggle=modal data-target=#UpdateFriendlyNameModal id="' + P1FNOdd + '" style="width: 70px;" class="btn-sm font-weight-bold px-4 py-2 rounded-corner rounded" role="button"></a></td>',
                                myHTML += '<td style="width: 100px padding:0px;"><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P1FNEven + '" ></td>',
                                myHTML += '<td colspan="4" align="center"  ><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P1BRatingEven + '" ></td>',
                                
                                myHTML += '<td colspan="4" align="center" id="' + P1CurrentEven + '"></td>',
                                myHTML += '<td  style="padding:1px" align="center" id="' + P1VSelectEven + '"></td>',
                                
                               
                                myHTML += "</tr>"


                            }
                            P1wrapper.innerHTML = myHTML
	}
	else 
	{
		P1Name.innerText = "Sequential";

        var P1wrapper = document.getElementById("P1Values")
                              , myHTML = "";

                            myHTML += '<thead class="thead-dark" cellspacing="0" cellpadding="0">',
                            myHTML += "<tr>",
                            myHTML += '<th style="width: 70px;"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Odd Side"> Circuit </a></th>',
                            myHTML += '<th style="width: 100px padding:0px;"  align="center"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Name of Circuit">Name</a> </th>',
                            
                            //myHTML += '<th colspan="4"  align="center"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="On/Off">Breaker Status</a></th>',
                            myHTML += '<th colspan="4"  align="center"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="0-32000">Rating</a></th>',
                            
                            myHTML += '<th colspan="4"  align="center"  ><a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Real Time">Current</a></th>',
                            
                            myHTML += '<th style="padding:0px" align="center"  ><select class="form-control" style="padding:1px" style="width: 90px;" style="color:gray" id="P1VariableOdd">',
                            myHTML += '<option value="kWH">kWH</option>',
                            myHTML += '<option value="kW">kW</option>',
                            myHTML += '<option value="kVA">kVA</option>',
                            myHTML += '<option value="kVAR">kVAR</option>',
                            myHTML += '<option value="PF">PF</option>',
                            myHTML += '<option value="THDi">THDi</option>',
                            myHTML += '</select> </th>',
                            
                           
                            
                            
                            myHTML += "</tr>";
                            myHTML += "</thead>"
                            for (var i = 1; i <= 21; i++) {
                              odd = 2*i - 1;
                              even = 2*i;
                              var P1CirNumOdd = "P1Ch" + odd + "SPOdd",
                                  P1FNOdd = "P1Ch" + i + "CTOdd",
                                  P1BStatusOdd = "P1Ch" + i + "BROdd",
                                  P1BRatingOdd =  "P1Ch" + i + "ALOdd",
                                  P1CurrentOdd = "P1Ch" + i + "AmpsOdd",
                                  P1VSelectOdd = "P1Ch" + i + "SelectOdd",
                                  P1VSelectEven = "P1Ch" + i + "SelectEven",
                                  P1CurrentEven = "P1Ch" + i + "AmpsEven",
                                  P1BRatingEven =  "P1Ch" + i + "ALEven",
                                  P1BStatusEven = "P1Ch" + i + "BREven",
                                  P1FNEven = "P1Ch" + i + "CTEven",
                                  P1CirNumEven = "P1Ch" + even + "SPEven";
                                  
                                myHTML += "<tr>",
                                myHTML += '<td style="width: 70px;" class="font-weight-bold px-4 py-2" align="right" id="' + P1CirNumOdd + '"></td>',
                                //myHTML += '<td style="width: 70px padding:0px;"><a data-toggle=modal data-target=#UpdateFriendlyNameModal id="' + P1FNOdd + '" style="width: 70px;" class="btn-sm font-weight-bold px-4 py-2 rounded-corner rounded" role="button"></a></td>',
                                myHTML += '<td style="width: 100px padding:0px;"><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P1FNOdd + '" ></td>',
                                myHTML += '<td colspan="4" align="center"  ><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P1BRatingOdd + '" ></td>',
                                
                                myHTML += '<td colspan="4" align="center" id="' + P1CurrentOdd + '"></td>',
                                myHTML += '<td  style="padding:1px" align="center" id="' + P1VSelectOdd + '"></td>',
                                myHTML += '<td  style="padding:1px" align="center" id="' + P1VSelectEven + '"></td>',
                                myHTML += '<td colspan="4" align="center" id="' + P1CurrentEven + '"></td>',
                                
                                myHTML += '<td colspan="4" align="center"  ><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P1BRatingEven + '" ></td>',
                                myHTML += '<td style="width: 100px padding:0px;"><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P1FNEven + '" ></td>',
                                //myHTML += '<td style="width: 70px padding:0px;"><a data-toggle=modal data-target=#UpdateFriendlyNameModal id="' + P1FNEven + '" style="width: 70px;" class="btn-sm font-weight-bold px-4 py-2 rounded-corner rounded" role="button"></a></td>',
                                myHTML += '<td style="width: 70px;" class="font-weight-bold px-4 py-2" align="left" id="' + P1CirNumEven + '"></td>',
                               
                                myHTML += "</tr>"
                            }
                            P1wrapper.innerHTML = myHTML

	}

// Now build panel 2 table
  if(P2config === "Top Feed")
  {
    P2Name.innerText = "SP3/4 Top Feed";

        var P2wrapper = document.getElementById("P2Values")
                              , myHTML = "";

                            myHTML += '<thead class="thead-dark" cellspacing="0" cellpadding="0">',
                            myHTML += "<tr>",
                            myHTML += '<th style="width: 70px;"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Odd Side"> Circuit </a></th>',
                            myHTML += '<th style="width: 100px padding:0px;"  align="center"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Name of Circuit">Name</a> </th>',
                            
                            //myHTML += '<th colspan="4"  align="center"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="On/Off">Breaker Status</a></th>',
                            myHTML += '<th colspan="4"  align="center"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="0-32000">Rating</a></th>',
                            
                            myHTML += '<th colspan="4"  align="center"  ><a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Real Time">Current</a></th>',
                            
                            myHTML += '<th style="padding:0px" align="center"  ><select class="form-control" style="padding:1px" style="width: 90px;" style="color:gray" id="P2VariableOdd">',
                            myHTML += '<option value="kWH">kWH</option>',
                            myHTML += '<option value="kW">kW</option>',
                            myHTML += '<option value="kVA">kVA</option>',
                            myHTML += '<option value="kVAR">kVAR</option>',
                            myHTML += '<option value="PF">PF</option>',
                            myHTML += '<option value="THDi">THDi</option>',
                            myHTML += '</select> </th>',
                            
                            myHTML += '<th   style="padding:0px" align="center"  ><select class="form-control" style="padding:1px" style="width: 90px;" style="color:gray" id="P2VariableEven">',
                            myHTML += '<option value="kWH">kWH</option>',
                            myHTML += '<option value="kW">kW</option>',
                            myHTML += '<option value="kVA">kVA</option>',
                            myHTML += '<option value="kVAR">kVAR</option>',
                            myHTML += '<option value="PF">PF</option>',
                            myHTML += '<option value="THDi">THDi</option>',
                            myHTML += '</select> </th>',

                            myHTML += '<th colspan="4"  align="center"  ><a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Real Time">Current</a></th>',
                            
                            myHTML += '<th colspan="4"  align="center"  ><a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="0-32000">Rating</a></th>',
                            
                            myHTML += '<th style="width: 70px padding:0px;"  align="center"><a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Name of Circuit">Name</a> </th>',
                            myHTML += '<th style="width: 70px;"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Even Side"> Circuit </a></th>',
                            
                            
                            myHTML += "</tr>";
                            myHTML += "</thead>"
                            for (var i = 1; i <= 21; i++) {
                              odd = 2*i - 1;
                              even = 2*i;
                              var P2CirNumOdd = "P2Ch" + odd + "SPOdd",
                                  P2FNOdd = "P2Ch" + i + "CTOdd",
                                  P2BStatusOdd = "P2Ch" + i + "BROdd",
                                  P2BRatingOdd =  "P2Ch" + i + "ALOdd",
                                  P2CurrentOdd = "P2Ch" + i + "AmpsOdd",
                                  P2VSelectOdd = "P2Ch" + i + "SelectOdd",
                                  P2VSelectEven = "P2Ch" + i + "SelectEven",
                                  P2CurrentEven = "P2Ch" + i + "AmpsEven",
                                  P2BRatingEven =  "P2Ch" + i + "ALEven",
                                  P2BStatusEven = "P2Ch" + i + "BREven",
                                  P2FNEven = "P2Ch" + i + "CTEven",
                                  P2CirNumEven = "P2Ch" + even + "SPEven";
                                  
                                myHTML += "<tr>",
                                myHTML += '<td style="width: 70px;" class="font-weight-bold px-4 py-2" align="right" id="' + P2CirNumOdd + '"></td>',
                                //myHTML += '<td style="width: 70px padding:0px;"><a data-toggle=modal data-target=#UpdateFriendlyNameModal id="' + P1FNOdd + '" style="width: 70px;" class="btn-sm font-weight-bold px-4 py-2 rounded-corner rounded" role="button"></a></td>',
                                myHTML += '<td style="width: 100px padding:0px;"><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P2FNOdd + '" ></td>',
                                myHTML += '<td colspan="4" align="center"  ><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P2BRatingOdd + '" ></td>',
                                
                                myHTML += '<td colspan="4" align="center" id="' + P2CurrentOdd + '"></td>',
                                myHTML += '<td  style="padding:1px" align="center" id="' + P2VSelectOdd + '"></td>',
                                myHTML += '<td  style="padding:1px" align="center" id="' + P2VSelectEven + '"></td>',
                                myHTML += '<td colspan="4" align="center" id="' + P2CurrentEven + '"></td>',
                                
                                myHTML += '<td colspan="4" align="center"  ><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P2BRatingEven + '" ></td>',
                                myHTML += '<td style="width: 100px padding:0px;"><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P2FNEven + '" ></td>',
                                //myHTML += '<td style="width: 70px padding:0px;"><a data-toggle=modal data-target=#UpdateFriendlyNameModal id="' + P1FNEven + '" style="width: 70px;" class="btn-sm font-weight-bold px-4 py-2 rounded-corner rounded" role="button"></a></td>',
                                myHTML += '<td style="width: 70px;" class="font-weight-bold px-4 py-2" align="left" id="' + P2CirNumEven + '"></td>',
                               
                                myHTML += "</tr>"
                            }
                            P2wrapper.innerHTML = myHTML

  }
  else if(P2config === "Bottom Feed")
  {
     P2Name.innerText = "SP3/4 Top Feed";

        var P2wrapper = document.getElementById("P2Values")
                              , myHTML = "";

                            myHTML += '<thead class="thead-dark" cellspacing="0" cellpadding="0">',
                            myHTML += "<tr>",
                            myHTML += '<th style="width: 70px;"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Odd Side"> Circuit </a></th>',
                            myHTML += '<th style="width: 100px padding:0px;"  align="center"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Name of Circuit">Name</a> </th>',
                            
                            //myHTML += '<th colspan="4"  align="center"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="On/Off">Breaker Status</a></th>',
                            myHTML += '<th colspan="4"  align="center"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="0-32000">Rating</a></th>',
                            
                            myHTML += '<th colspan="4"  align="center"  ><a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Real Time">Current</a></th>',
                            
                            myHTML += '<th style="padding:0px" align="center"  ><select class="form-control" style="padding:1px" style="width: 90px;" style="color:gray" id="P2VariableOdd">',
                            myHTML += '<option value="kWH">kWH</option>',
                            myHTML += '<option value="kW">kW</option>',
                            myHTML += '<option value="kVA">kVA</option>',
                            myHTML += '<option value="kVAR">kVAR</option>',
                            myHTML += '<option value="PF">PF</option>',
                            myHTML += '<option value="THDi">THDi</option>',
                            myHTML += '</select> </th>',
                            
                            myHTML += '<th   style="padding:0px" align="center"  ><select class="form-control" style="padding:1px" style="width: 90px;" style="color:gray" id="P2VariableEven">',
                            myHTML += '<option value="kWH">kWH</option>',
                            myHTML += '<option value="kW">kW</option>',
                            myHTML += '<option value="kVA">kVA</option>',
                            myHTML += '<option value="kVAR">kVAR</option>',
                            myHTML += '<option value="PF">PF</option>',
                            myHTML += '<option value="THDi">THDi</option>',
                            myHTML += '</select> </th>',

                            myHTML += '<th colspan="4"  align="center"  ><a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Real Time">Current</a></th>',
                            
                            myHTML += '<th colspan="4"  align="center"  ><a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="0-32000">Rating</a></th>',
                            
                            myHTML += '<th style="width: 70px padding:0px;"  align="center"><a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Name of Circuit">Name</a> </th>',
                            myHTML += '<th style="width: 70px;"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Even Side"> Circuit </a></th>',
                            
                            
                            myHTML += "</tr>";
                            myHTML += "</thead>"
                            for (var i = 1; i <= 21; i++) {
                              odd = 2*i - 1;
                              even = 2*i;
                              var P2CirNumOdd = "P2Ch" + odd + "SPOdd",
                                  P2FNOdd = "P2Ch" + i + "CTOdd",
                                  P2BStatusOdd = "P2Ch" + i + "BROdd",
                                  P2BRatingOdd =  "P2Ch" + i + "ALOdd",
                                  P2CurrentOdd = "P2Ch" + i + "AmpsOdd",
                                  P2VSelectOdd = "P2Ch" + i + "SelectOdd",
                                  P2VSelectEven = "P2Ch" + i + "SelectEven",
                                  P2CurrentEven = "P2Ch" + i + "AmpsEven",
                                  P2BRatingEven =  "P2Ch" + i + "ALEven",
                                  P2BStatusEven = "P2Ch" + i + "BREven",
                                  P2FNEven = "P2Ch" + i + "CTEven",
                                  P2CirNumEven = "P2Ch" + even + "SPEven";
                                  
                                myHTML += "<tr>",
                                myHTML += '<td style="width: 70px;" class="font-weight-bold px-4 py-2" align="right" id="' + P2CirNumOdd + '"></td>',
                                //myHTML += '<td style="width: 70px padding:0px;"><a data-toggle=modal data-target=#UpdateFriendlyNameModal id="' + P1FNOdd + '" style="width: 70px;" class="btn-sm font-weight-bold px-4 py-2 rounded-corner rounded" role="button"></a></td>',
                                myHTML += '<td style="width: 100px padding:0px;"><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P2FNOdd + '" ></td>',
                                myHTML += '<td colspan="4" align="center"  ><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P2BRatingOdd + '" ></td>',
                                
                                myHTML += '<td colspan="4" align="center" id="' + P2CurrentOdd + '"></td>',
                                myHTML += '<td  style="padding:1px" align="center" id="' + P2VSelectOdd + '"></td>',
                                myHTML += '<td  style="padding:1px" align="center" id="' + P2VSelectEven + '"></td>',
                                myHTML += '<td colspan="4" align="center" id="' + P2CurrentEven + '"></td>',
                                
                                myHTML += '<td colspan="4" align="center"  ><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P2BRatingEven + '" ></td>',
                                myHTML += '<td style="width: 100px padding:0px;"><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P2FNEven + '" ></td>',
                                //myHTML += '<td style="width: 70px padding:0px;"><a data-toggle=modal data-target=#UpdateFriendlyNameModal id="' + P1FNEven + '" style="width: 70px;" class="btn-sm font-weight-bold px-4 py-2 rounded-corner rounded" role="button"></a></td>',
                                myHTML += '<td style="width: 70px;" class="font-weight-bold px-4 py-2" align="left" id="' + P2CirNumEven + '"></td>',
                               
                                myHTML += "</tr>"
                            }
                            P2wrapper.innerHTML = myHTML
  }
  else if(P2config === "Inline Sequential")
  {
        P2Name.innerText = "Inline Sequential";

        var P2wrapper = document.getElementById("P2Values")
                              , myHTML = "";

                            myHTML += '<thead class="thead-dark" cellspacing="0" cellpadding="0">',
                            myHTML += "<tr>",
                            myHTML += '<th style="width: 70px;"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Odd Side"> Circuit </a></th>',
                            myHTML += '<th style="width: 100px padding:0px;"  align="center"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Name of Circuit">Name</a> </th>',
                            
                            //myHTML += '<th colspan="4"  align="center"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="On/Off">Breaker Status</a></th>',
                            myHTML += '<th colspan="4"  align="center"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="0-32000">Rating</a></th>',
                            
                            myHTML += '<th colspan="4"  align="center"  ><a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Real Time">Current</a></th>',
                            
                            myHTML += '<th style="padding:0px" align="center"  ><select class="form-control" style="padding:1px" style="width: 90px;" style="color:gray" id="P2VariableOdd">',
                            myHTML += '<option value="kWH">kWH</option>',
                            myHTML += '<option value="kW">kW</option>',
                            myHTML += '<option value="kVA">kVA</option>',
                            myHTML += '<option value="kVAR">kVAR</option>',
                            myHTML += '<option value="PF">PF</option>',
                            myHTML += '<option value="THDi">THDi</option>',
                            myHTML += '</select> </th>',
                            
                           
                            
                            
                            myHTML += "</tr>";
                            myHTML += "</thead>"
                            for (var i = 1; i <= 42; i++) {
                              odd = 2*i - 1;
                              even = 2*i;
                              var P2CirNumOdd = "P2Ch" + odd + "SPOdd",
                                  P2FNOdd = "P2Ch" + i + "CTOdd",
                                  P2BStatusOdd = "P2Ch" + i + "BROdd",
                                  P2BRatingOdd =  "P2Ch" + i + "ALOdd",
                                  P2CurrentOdd = "P2Ch" + i + "AmpsOdd",
                                  P2VSelectOdd = "P2Ch" + i + "SelectOdd";
                                 
                                  
                                myHTML += "<tr>",
                                myHTML += '<td style="width: 70px;" class="font-weight-bold px-4 py-2" align="right" id="' + P2CirNumOdd + '"></td>',
                                //myHTML += '<td style="width: 70px padding:0px;"><a data-toggle=modal data-target=#UpdateFriendlyNameModal id="' + P1FNOdd + '" style="width: 70px;" class="btn-sm font-weight-bold px-4 py-2 rounded-corner rounded" role="button"></a></td>',
                                myHTML += '<td style="width: 100px padding:0px;"><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P2FNOdd + '" ></td>',
                                myHTML += '<td colspan="4" align="center"  ><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P2BRatingOdd + '" ></td>',
                                
                                myHTML += '<td colspan="4" align="center" id="' + P2CurrentOdd + '"></td>',
                                myHTML += '<td  style="padding:1px" align="center" id="' + P2VSelectOdd + '"></td>',
                                
                               
                                myHTML += "</tr>"




                            }
                            P1wrapper.innerHTML = myHTML

  }
  else if(P2config === "Inline Odd/Even")
  {
     P2Name.innerText = "Inline Odd/Even";

        var P2wrapper = document.getElementById("P2Values")
                              , myHTML = "";

                            myHTML += '<thead class="thead-dark" cellspacing="0" cellpadding="0">',
                            myHTML += "<tr>",
                            myHTML += '<th style="width: 70px;"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Odd Side"> Circuit </a></th>',
                            myHTML += '<th style="width: 100px padding:0px;"  align="center"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Name of Circuit">Name</a> </th>',
                            
                            //myHTML += '<th colspan="4"  align="center"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="On/Off">Breaker Status</a></th>',
                            myHTML += '<th colspan="4"  align="center"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="0-32000">Rating</a></th>',
                            
                            myHTML += '<th colspan="4"  align="center"  ><a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Real Time">Current</a></th>',
                            
                            myHTML += '<th style="padding:0px" align="center"  ><select class="form-control" style="padding:1px" style="width: 90px;" style="color:gray" id="P2VariableOdd">',
                            myHTML += '<option value="kWH">kWH</option>',
                            myHTML += '<option value="kW">kW</option>',
                            myHTML += '<option value="kVA">kVA</option>',
                            myHTML += '<option value="kVAR">kVAR</option>',
                            myHTML += '<option value="PF">PF</option>',
                            myHTML += '<option value="THDi">THDi</option>',
                            myHTML += '</select> </th>',
                            
                           
                            
                            
                            myHTML += "</tr>";
                            myHTML += "</thead>"
                            for (var i = 1; i <= 42; i++) 
                            {
                              odd = 2*i - 1;
                              even = 2*i;
                              var P2CirNumOdd = "P2Ch" + odd + "SPOdd",
                                  P2FNOdd = "P2Ch" + i + "CTOdd",
                                  P2BStatusOdd = "P2Ch" + i + "BROdd",
                                  P2BRatingOdd =  "P2Ch" + i + "ALOdd",
                                  P2CurrentOdd = "P2Ch" + i + "AmpsOdd",
                                  P2VSelectOdd = "P2Ch" + i + "SelectOdd",
                                  P2VSelectEven = "P2Ch" + i + "SelectEven",
                                  P2CurrentEven = "P2Ch" + i + "AmpsEven",
                                  P2BRatingEven =  "P2Ch" + i + "ALEven",
                                  P2BStatusEven = "P2Ch" + i + "BREven",
                                  P2FNEven = "P2Ch" + i + "CTEven",
                                  P2CirNumEven = "P2Ch" + even + "SPEven";
                                  
                                myHTML += "<tr>",
                                myHTML += '<td style="width: 70px;" class="font-weight-bold px-4 py-2" align="right" id="' + P2CirNumOdd + '"></td>',
                                //myHTML += '<td style="width: 70px padding:0px;"><a data-toggle=modal data-target=#UpdateFriendlyNameModal id="' + P1FNOdd + '" style="width: 70px;" class="btn-sm font-weight-bold px-4 py-2 rounded-corner rounded" role="button"></a></td>',
                                myHTML += '<td style="width: 100px padding:0px;"><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P2FNOdd + '" ></td>',
                                myHTML += '<td colspan="4" align="center"  ><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P2BRatingOdd + '" ></td>',
                                
                                myHTML += '<td colspan="4" align="center" id="' + P2CurrentOdd + '"></td>',
                                myHTML += '<td  style="padding:1px" align="center" id="' + P2VSelectOdd + '"></td>',
                                
                               
                                myHTML += "</tr>"

                            }
                            for (var i = 22; i <= 42; i++) 
                            {
                              even = 2*i;
                              var 
                                  P2VSelectEven = "P2Ch" + i + "SelectEven",
                                  P2CurrentEven = "P2Ch" + i + "AmpsEven",
                                  P2BRatingEven =  "P2Ch" + i + "ALEven",
                                  P2BStatusEven = "P2Ch" + i + "BREven",
                                  P2FNEven = "P2Ch" + i + "CTEven",
                                  P2CirNumEven = "P2Ch" + even + "SPEven";
                                  
                                myHTML += "<tr>",
                                myHTML += '<td style="width: 70px;" class="font-weight-bold px-4 py-2" align="right" id="' + P2CirNumEven + '"></td>',
                                //myHTML += '<td style="width: 70px padding:0px;"><a data-toggle=modal data-target=#UpdateFriendlyNameModal id="' + P1FNOdd + '" style="width: 70px;" class="btn-sm font-weight-bold px-4 py-2 rounded-corner rounded" role="button"></a></td>',
                                myHTML += '<td style="width: 100px padding:0px;"><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P2FNEven + '" ></td>',
                                myHTML += '<td colspan="4" align="center"  ><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P2BRatingEven + '" ></td>',
                                
                                myHTML += '<td colspan="4" align="center" id="' + P2CurrentEven + '"></td>',
                                myHTML += '<td  style="padding:1px" align="center" id="' + P2VSelectEven + '"></td>',
                                
                               
                                myHTML += "</tr>"


                            }
                            P2wrapper.innerHTML = myHTML
  }
  else 
  {
    P2Name.innerText = "Sequential";

        var P2wrapper = document.getElementById("P2Values")
                              , myHTML = "";

                            myHTML += '<thead class="thead-dark" cellspacing="0" cellpadding="0">',
                            myHTML += "<tr>",
                            myHTML += '<th style="width: 70px;"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Odd Side"> Circuit </a></th>',
                            myHTML += '<th style="width: 100px padding:0px;"  align="center"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Name of Circuit">Name</a> </th>',
                            
                            //myHTML += '<th colspan="4"  align="center"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="On/Off">Breaker Status</a></th>',
                            myHTML += '<th colspan="4"  align="center"> <a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="0-32000">Rating</a></th>',
                            
                            myHTML += '<th colspan="4"  align="center"  ><a href="#" style="color:#D3D3D3;" data-toggle="tooltip" title="Real Time">Current</a></th>',
                            
                            myHTML += '<th style="padding:0px" align="center"  ><select class="form-control" style="padding:1px" style="width: 90px;" style="color:gray" id="P2VariableOdd">',
                            myHTML += '<option value="kWH">kWH</option>',
                            myHTML += '<option value="kW">kW</option>',
                            myHTML += '<option value="kVA">kVA</option>',
                            myHTML += '<option value="kVAR">kVAR</option>',
                            myHTML += '<option value="PF">PF</option>',
                            myHTML += '<option value="THDi">THDi</option>',
                            myHTML += '</select> </th>',
                            
                           
                            
                            
                            myHTML += "</tr>";
                            myHTML += "</thead>"
                            for (var i = 1; i <= 42; i++) {
                              odd = 2*i - 1;
                              even = 2*i;
                              var P2CirNumOdd = "P2Ch" + odd + "SPOdd",
                                  P2FNOdd = "P2Ch" + i + "CTOdd",
                                  P2BStatusOdd = "P2Ch" + i + "BROdd",
                                  P2BRatingOdd =  "P2Ch" + i + "ALOdd",
                                  P2CurrentOdd = "P2Ch" + i + "AmpsOdd",
                                  P2VSelectOdd = "P2Ch" + i + "SelectOdd";
                                 
                                  
                                myHTML += "<tr>",
                                myHTML += '<td style="width: 70px;" class="font-weight-bold px-4 py-2" align="right" id="' + P2CirNumOdd + '"></td>',
                                //myHTML += '<td style="width: 70px padding:0px;"><a data-toggle=modal data-target=#UpdateFriendlyNameModal id="' + P1FNOdd + '" style="width: 70px;" class="btn-sm font-weight-bold px-4 py-2 rounded-corner rounded" role="button"></a></td>',
                                myHTML += '<td style="width: 100px padding:0px;"><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P2FNOdd + '" ></td>',
                                myHTML += '<td colspan="4" align="center"  ><input type="text" style="width: 100px padding:0px;"class="form-control" align="center" id="' + P2BRatingOdd + '" ></td>',
                                
                                myHTML += '<td colspan="4" align="center" id="' + P2CurrentOdd + '"></td>',
                                myHTML += '<td  style="padding:1px" align="center" id="' + P2VSelectOdd + '"></td>',
                                
                               
                                myHTML += "</tr>"




                            }
                            P2wrapper.innerHTML = myHTML

  }

 
  // Now put some values in the table
  var x = "False";
  GetDetailData(x);

  }); // End of jquery .get(config)


}


function Get_Configuration()
{
  
  var P1config, P2config;
  
  $.get("get_general_settings", function(data) {

        //alert("Data Loaded: " + data);

        var arr = data.split(";");
        P1config = arr[3];
        P2config = arr[4];
        
    });

  return [P1config,P2config];

}

function GetTimerData()
{

  GetTime();
  GetDetailData();
}

function GetTime()
{
	var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("Time").innerHTML = t;

}

var max = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var kwh_acc = 34975;
var breaker = [20,20,20,20,20,20,20,20,20,20,30,30,30,30,30,30,30,30,30,30,40,40,40,40,40,40,40,40,40,40,50,50,50,50,50,50,50,50,50,50,60,60];

function GetDetailData(timer)
{
	var name = ["RPPRack1","Rack2","SW23","SW24","Bank4","Bank5","Plug7","Rack1","Rack2","SW23","SW24","Bank4","Bank5","Plug7","Rack1","Rack2","SW23","SW24","Bank4","Bank5","Plug7",
			"Rack1","Rack2","SW23","SW24","Bank4","Bank5","Plug7","Rack1","Rack2","SW23","SW24","Bank4","Bank5","Plug7","Rack1","Rack2","SW23","SW24","Bank4","Bank5","Plug7"];

	//GetTime();

    		var element,element2, OddVariableField, EvenVariableField;
    		var Amps, MaxAmps;
    		var Freq,kW,kWH,Volts,PF,pf,KVA,kva,KVAR,kvar,THDI,thdi;
        // New variables for all smart port data
    		var amps1,amps2,amps3,amps4;
        var kwh1,kwh2,kwh3,kwh4;
        var kw1,kw2,kw3,kw4;
        var kva1,kva2,kva3,kva4;
        var kvar1,kvar2,kvar3,kvar4;
        var pf1,pf2,pf3,pf4;
        var thdi1,thdi2,thdi3,thdi4;
        var volts1, volts2, volts3, voltsLNavg;
        var volts12,volts23, volts31, voltsLLavg;


        var random,TEMP,temp,CHS,chs,BS,bs,BR,PML,pml;
        var odd,even;


        $.get("get_port1_data", function(data) {

        //alert("Data Loaded: " + data);

          var port_data = data.split(";");


          kwh1 = port_data[0];
          kw1 = port_data[1];
          kva1 = port_data[2];
          kvar1 = port_data[3];
          pf1 = port_data[4];
          amps1 = port_data[5];
          thdi1 = port_data[6];


            $.get("get_port2_data", function(data) {

            //alert("Data Loaded: " + data);

              var port_data = data.split(";");

              kwh2 = port_data[0];
              kw2 = port_data[1];
              kva2 = port_data[2];
              kvar2 = port_data[3];
              pf2 = port_data[4];
              amps2 = port_data[5];
              thdi2 = port_data[6];

                $.get("get_port3_data", function(data) {

                //alert("Data Loaded: " + data);

                  var port_data = data.split(";");

                  kwh3 = port_data[0];
                  kw3 = port_data[1];
                  kva3 = port_data[2];
                  kvar3 = port_data[3];
                  pf3 = port_data[4];
                  amps3 = port_data[5];
                  thdi3 = port_data[6];

                    $.get("get_port4_data", function(data) {

                    //alert("Data 4 Loaded: " + data);

                    var port_data = data.split(";");

                    kwh4 = port_data[0];
                    kw4 = port_data[1];
                    kva4 = port_data[2];
                    kvar4 = port_data[3];
                    pf4 = port_data[4];
                    amps4 = port_data[5];
                    thdi4 = port_data[6];
        
                      $.get("get_voltage_data", function(data) {

                        var port_data = data.split(";");
                        volts1 = port_data[0];
                        volts2 = port_data[1];
                        volts3 = port_data[2];
                        volts12 = port_data[3];
                        volts23 = port_data[4];
                        volts31 = port_data[5];

                        voltsLNavg = (volts1 + volts2 + volts3) / 3;
                        voltsLLavg = (volts12 + volts23 + volts31) / 3;



                      });

                });
        
              });
        
          });
      });

    		for (var i = 1; i <= 21; i++) 
        {
              odd = 2*i - 1;
              even = 2*i;
              var P1CirNumOdd = "P1Ch" + odd + "SPOdd",
                  P1FNOdd = "P1Ch" + i + "CTOdd",
                  P1BStatusOdd = "P1Ch" + i + "BROdd",
                  P1BRatingOdd =  "P1Ch" + i + "ALOdd",
                  P1CurrentOdd = "P1Ch" + i + "AmpsOdd",
                  P1VSelectOdd = "P1Ch" + i + "SelectOdd",
                  P1VSelectEven = "P1Ch" + i + "SelectEven",
                  P1CurrentEven = "P1Ch" + i + "AmpsEven",
                  P1BRatingEven =  "P1Ch" + i + "ALEven",
                  P1BStatusEven = "P1Ch" + i + "BREven",
                  P1FNEven = "P1Ch" + i + "CTEven",
                  P1CirNumEven = "P1Ch" + even + "SPEven";


    		 			


    			// random = Math.random();
    			// kwh_acc += 0.3;
    			// pf = .9 + .05 * random;
    			// Volts = 120+random;
    			// amps1 = 20*random + i;
       //          amps = amps1;
    			// kw = Volts  * amps * pf;
    			// kva = Volts * amps;
    			// kvar = kva - kw;
    			// thdi = .1*random;
    			// temp = 68 + .3*amps;
    			// pml = amps/breaker[i-1];
       //          random = Math.random();
       //          amps2 = 20*random + i;


    			
	    		

    			// if(amps1 > 20) {
    			// 	//element = document.getElementById(Amps);
    			// 	//element.className = "text-danger";
    			// 	//element.className="bg-danger";
    			// 	document.getElementById(P1CurrentOdd).style.backgroundColor="#42f448";

    			// 	document.getElementById(P1CurrentOdd).innerHTML = amps1;

       //      element = document.getElementById(P1CirNumOdd);
       //      element.className = "mdi mdi-circle text-warning";
    			// }
	    		// else {
	    		// 	//element = document.getElementById(Amps);
	    		// 	document.getElementById(P1CurrentOdd).style.backgroundColor="";
	    		// 	document.getElementById(P1CurrentOdd).innerHTML = amps1;

       //      element = document.getElementById(P1CirNumOdd);
       //      element.className = "mdi mdi-circle text-success";
	    		// }

       //    if(amps2 > 20) {
       //        //element = document.getElementById(Amps);
       //        //element.className = "text-danger";
       //        //element.className="bg-danger";
       //        document.getElementById(P1CurrentEven).style.backgroundColor="#42f448";

       //        document.getElementById(P1CurrentEven).innerHTML = amps2;

       //        element2 = document.getElementById(P1CirNumEven);
       //        element2.className = "mdi mdi-circle text-warning";
       //    }
       //    else {
       //        //element = document.getElementById(Amps);
       //        document.getElementById(P1CurrentEven).style.backgroundColor="";
       //        document.getElementById(P1CurrentEven).innerHTML = amps2;

       //        element2 = document.getElementById(P1CirNumEven);
       //        element2.className = "mdi mdi-circle text-success";
       //    }


          if(timer === "False") {
	    		 document.getElementById(P1CirNumOdd).innerHTML = odd;
	    		//document.getElementById(P1FNOdd).innerHTML = name[odd-1];
            document.getElementById(P1FNOdd).value = name[odd-1];
	    	  //document.getElementById(P1BStatusOdd).innerHTML = "ON";
	    		 document.getElementById(P1BRatingOdd).value = "20";
          }
	    		document.getElementById(P1CurrentOdd).innerHTML = amps1;
          document.getElementById(P1CurrentEven).innerHTML = amps2;
	    		document.getElementById(P1BRatingEven).value = "20";
	    	//	document.getElementById(P1BStatusEven).innerHTML = "OFF";
          document.getElementById(P1FNEven).value = name[even-1];
          document.getElementById(P1CirNumEven).innerHTML = even;

          
          OddVariableField = document.getElementById("P1VariableOdd").value;
          EvenVariableField = document.getElementById("P1VariableEven").value;


                            
          if(OddVariableField === "kWH") document.getElementById(P1VSelectOdd).innerHTML = kwh_acc;
          else if(OddVariableField === "kW") document.getElementById(P1VSelectOdd).innerHTML = kw;
            else if(OddVariableField === "kVA") document.getElementById(P1VSelectOdd).innerHTML = kva;
              else if(OddVariableField === "kVAR") document.getElementById(P1VSelectOdd).innerHTML = kvar;
                else if(OddVariableField === "PF") document.getElementById(P1VSelectOdd).innerHTML = pf;
                  else if(OddVariableField === "THDi") document.getElementById(P1VSelectOdd).innerHTML = thdi;

          if(EvenVariableField === "kWH") document.getElementById(P1VSelectEven).innerHTML = kwh_acc;
          else if(EvenVariableField === "kW") document.getElementById(P1VSelectEven).innerHTML = kw;
            else if(EvenVariableField === "kVA") document.getElementById(P1VSelectEven).innerHTML = kva;
              else if(EvenVariableField === "kVAR") document.getElementById(P1VSelectEven).innerHTML = kvar;
                else if(EvenVariableField === "PF") document.getElementById(P1VSelectEven).innerHTML = pf;
                  else if(EvenVariableField === "THDi") document.getElementById(P1VSelectEven).innerHTML = thdi;
	    		
	    		
         
          
          
          

	    	} // End of loop through updating the fields

          // Update the voltage information
          document.getElementById("voltsln1").innerHTML = volts1;
          document.getElementById("voltsln2").innerHTML = volts2;
          document.getElementById("voltsln3").innerHTML = volts3;
          document.getElementById("voltslnavg").innerHTML = voltsLNavg;
          document.getElementById("volts12").innerHTML = volts12;
          document.getElementById("volts23").innerHTML = volts23;
          document.getElementById("volts31").innerHTML = volts31;
          document.getElementById("voltsllavg").innerHTML = voltsLLavg;

 
			
}
	
	var MaxAmps,MaxAmps1=0,MaxAmps2=0,MaxAmps3=0;
	var kwh1 = 1234,kwh2 = 1345, kwh3 = 1435;
	var deltat=0,prevt=0;

	function GetPanelData()
{
	var name = ["Rack1","Rack2","SW23","SW24","Bank4","Bank5","Plug7","Rack1","Rack2","SW23","SW24","Bank4","Bank5","Plug7","Rack1","Rack2","SW23","SW24","Bank4","Bank5","Plug7",
			"Rack1","Rack2","SW23","SW24","Bank4","Bank5","Plug7","Rack1","Rack2","SW23","SW24","Bank4","Bank5","Plug7","Rack1","Rack2","SW23","SW24","Bank4","Bank5","Plug7"];

	var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("Time").innerHTML = t;

    deltat = (d - prevt) / 1000;
    prevt = d;
    		
    		var element;
    		var random,pml,pml1,pml2,pml3,bs1,bs2,bs3,bs;
    		var Volts,Volts1,Volts2,Volts3,VoltsL,VoltsL1,VoltsL2,VoltsL3,Amps,Amps1,Amps2,Amps3,pf,pf1,pf2,pf3;
    		var kw,kw1,kw2,kw3,kva,kva1,kva2,kva3,kvar,kvar1,kvar2,kvar3,thdi,thdi1,thdi2,thdi3,thdv,thdv1,thdv2,thdv3;

    		

    			random = Math.random();
    			Volts1 = 120+random;
    			random = Math.random();
    			Volts2 = 120+random;
    			random = Math.random();
    			Volts3 = 120+random;
    			Volts = (Volts1+Volts2+Volts3)/3;
    			
    			VoltsL1 = Volts1 * 1.73;
    			VoltsL2 = Volts2 * 1.73;
    			VoltsL3 = Volts3 * 1.73;
    			VoltsL = (VoltsL1+VoltsL2+VoltsL3)/3;
    			
    			random = Math.random();
    			Amps1 = 120 + 80*random;
    			random = Math.random();
    			Amps2 = 120 + 80*random;
    			random = Math.random();
    			Amps3 = 120 + 80*random;
    			Amps = (Amps1+Amps2+Amps3)/3;
    			
				if(Amps1 > MaxAmps1) MaxAmps1 = Amps1;
				if(Amps2 > MaxAmps2) MaxAmps2 = Amps2;
				if(Amps3 > MaxAmps3) MaxAmps3 = Amps3;
				MaxAmps = (MaxAmps1+MaxAmps2+MaxAmps3)/3;


				random = Math.random();
				pf1 = .9 + .05 * random;
				random = Math.random();
				pf2 = .9 + .05 * random;
				random = Math.random();
				pf3 = .9 + .05 * random;
				pf = (pf1+pf2+pf3)/3;

				kw1 = (Volts1*Amps1*pf1) / 1000;
				kw2 = (Volts2*Amps2*pf2) / 1000;
				kw3 = (Volts3*Amps3*pf3) / 1000;
				kw = (kw1+kw2+kw3) / 3;

				kwh1 = kwh1 + (kw1*deltat) / (60*60);
				kwh2 = kwh2 + (kw2*deltat) / (60*60);
				kwh3 = kwh3 + (kw3*deltat) / (60*60);
				kwh = kwh1+kwh2+kwh3;

				kva1 = Volts1 * Amps1 / 1000;
				kva2 = Volts2 * Amps2 / 1000;
				kva3 = Volts3 * Amps3 / 1000;
				kva = (kva1+kva2+kva3) / 3;

				kvar1 = kva1 - kw1;
				kvar2 = kva2 - kw2;
				kvar3 = kva3 - kw3;
				kvar = (kvar1+kvar2+kvar3) / 3;
	    		
	    		random = Math.random();
	    		thdi1 = .1*random;
	    		random = Math.random();
	    		thdi2 = .1*random;
	    		random = Math.random();
	    		thdi3 = .1*random;
	    		thdi = (thdi1+thdi2+thdi3) / 3;

				random = Math.random();
	    		thdv1 = .1*random;
	    		random = Math.random();
	    		thdv2 = .1*random;
	    		random = Math.random();
	    		thdv3 = .1*random;
	    		thdv = (thdv1+thdv2+thdv3) / 3;

	    		pml1 = Amps1 / 200;
	    		pml2 = Amps2 / 200;
	    		pml3 = Amps2 / 200;
	    		pml = (pml1 + pml2 + pml3) / 3;


				if (pml1 <= 0.7) 
				{
    			
    				element = document.getElementById("Ch1PML");
    				element.className = "text-success";

    				chs = "GOOD";
    				element = document.getElementById("Ch1CHS");
    				element.className = "text-success";

    				bs = "ON";
    				element = document.getElementById("Ch1BS");
    				element.className = "text-success";
    				
     			}


    			if((pml1 > 0.7) && (pml1 < 1.0)) 
    			{

    				element = document.getElementById("Ch1PML");
    				element.className = "text-warning";


    				bs = "ON";
    				element = document.getElementById("Ch1BS");
    				element.className = "text-success";

    				chs = "BAD";
    				element = document.getElementById("Ch1CHS");
    				element.className = "text-warning";
    			}
    			
    		
    			
    			if(pml1 >= 1.0) { 
    				bs = "OFF";
    				// document.getElementById(BS).style.class="mdi mdi-circle text-danger";
    				 element = document.getElementById("Ch1BS");
    				element.className = "text-danger";

    				 element = document.getElementById("Ch1PML");
    				element.className = "text-danger";

    				chs = "BAD";
    				element = document.getElementById("Ch1CHS");
    				element.className = "text-danger";
    				 
    			}

				if (pml2 <= 0.7) 
				{
    				
    				element = document.getElementById("Ch2PML");
    				element.className = "text-success";

    				chs = "GOOD";
    				element = document.getElementById("Ch2CHS");
    				element.className = "text-success";

    				bs = "ON";
    				element = document.getElementById("Ch2BS");
    				element.className = "text-success";
    				
     			}


    			if((pml2 > 0.7) & (pml2 < 1.0)) 
    			{

    				element = document.getElementById("Ch2PML");
    				element.className = "text-warning";

    				chs = "BAD";
    				element = document.getElementById("Ch2CHS");
    				element.className = "text-success";

    				bs = "ON";
    				element = document.getElementById("Ch2BS");
    				element.className = "text-warning";
    			}
    			
    			
    			if(pml2 >= 1.0) { 
    				
    				bs = "OFF";
    				element = document.getElementById("Ch2BS");
    				element.className = "text-danger";

    				 element = document.getElementById("Ch2PML");
    				element.className = "text-danger";

    				chs = "BAD";
    				element = document.getElementById("Ch2CHS");
    				element.className = "text-danger";
    				 
    			}

    			if (pml3 <= 0.7) 
				{
    				
    				element = document.getElementById("Ch3PML");
    				element.className = "text-success";

    				chs = "GOOD";
    				element = document.getElementById("Ch3CHS");
    				element.className = "text-success";

    				bs = "ON";
    				element = document.getElementById("Ch3BS");
    				element.className = "text-success";
    				
     			}


    			if((pml3 > 0.7) & (pml3 < 1.0)) 
    			{

    				element = document.getElementById("Ch3PML");
    				element.className = "text-warning";

    				chs = "BAD";
    				element = document.getElementById("Ch3CHS");
    				element.className = "text-success";

    				bs = "ON";
    				element = document.getElementById("Ch3BS");
    				element.className = "text-warning";
    			}
    			
    			
    			if(pml3 >= 1.0) { 
    				bs = "OFF";
    				element = document.getElementById("Ch3BS");
    				element.className = "text-danger";

    				 element = document.getElementById("Ch3PML");
    				element.className = "text-danger";

    				chs = "BAD";
    				element = document.getElementById("Ch3CHS");
    				element.className = "text-danger";
    				 
    			}

				if (pml <= 0.7) 
				{
    				
    				element = document.getElementById("PML");
    				element.className = "text-success";

    				chs = "GOOD";
    				element = document.getElementById("CHS");
    				element.className = "text-success";

    				bs = "ON";
    				element = document.getElementById("BS");
    				element.className = "text-success";
    				
     			}


    			if((pml > 0.7) && (pml < 1.0)) 
    			{

    				element = document.getElementById("PML");
    				element.className = "text-warning";

    				chs = "BAD";
    				element = document.getElementById("CHS");
    				element.className = "text-success";

    				bs = "ON";
    				element = document.getElementById("BS");
    				element.className = "text-warning";
    			}
    		
    			
    			if(pml >= 1.0) { 
    				bs = "OFF";
    				element = document.getElementById("BS");
    				element.className = "text-danger";

    				 element = document.getElementById("PML");
    				element.className = "text-danger";

    				chs = "BAD";
    				element = document.getElementById("CHS");
    				element.className = "text-danger";
    				 
    			}

	    		document.getElementById("VoltsLN1").innerHTML = Volts1.toFixed(2);
	    		document.getElementById("VoltsLN2").innerHTML = Volts2.toFixed(2);
	    		document.getElementById("VoltsLN3").innerHTML = Volts3.toFixed(2);
	    		document.getElementById("Volts").innerHTML = Volts.toFixed(2);

	    		document.getElementById("VoltsLL1").innerHTML = VoltsL1.toFixed(2);
	    		document.getElementById("VoltsLL2").innerHTML = VoltsL2.toFixed(2);
	    		document.getElementById("VoltsLL3").innerHTML = VoltsL3.toFixed(2);
	    		document.getElementById("VoltsL").innerHTML = VoltsL.toFixed(2);

	    		document.getElementById("AmpsL1").innerHTML = Amps1.toFixed(2);
	    		document.getElementById("AmpsL2").innerHTML = Amps2.toFixed(2);
	    		document.getElementById("AmpsL3").innerHTML = Amps3.toFixed(2);
	    		document.getElementById("Amps").innerHTML = Amps.toFixed(2);

	    		document.getElementById("MaxAmpsL1").innerHTML = MaxAmps1.toFixed(2);
	    		document.getElementById("MaxAmpsL2").innerHTML = MaxAmps2.toFixed(2);
	    		document.getElementById("MaxAmpsL3").innerHTML = MaxAmps3.toFixed(2);
	    		document.getElementById("MaxAmps").innerHTML = MaxAmps.toFixed(2);

	    		document.getElementById("Ch1PF").innerHTML = pf1.toFixed(2);
	    		document.getElementById("Ch2PF").innerHTML = pf2.toFixed(2);
	    		document.getElementById("Ch3PF").innerHTML = pf3.toFixed(2);
	    		document.getElementById("PF").innerHTML = pf.toFixed(2);

	    		document.getElementById("kWL1").innerHTML = kw1.toFixed(2);
	    		document.getElementById("kWL2").innerHTML = kw2.toFixed(2);
	    		document.getElementById("kWL3").innerHTML = kw3.toFixed(2);
	    		document.getElementById("kW").innerHTML = kw.toFixed(2);

	    		document.getElementById("kWHL1").innerHTML = kwh1.toFixed(2);
	    		document.getElementById("kWHL2").innerHTML = kwh2.toFixed(2);
	    		document.getElementById("kWHL3").innerHTML = kwh3.toFixed(2);
	    		document.getElementById("kWH").innerHTML = kwh.toFixed(2);

	    		document.getElementById("Ch1kVA").innerHTML = kva1.toFixed(2);
	    		document.getElementById("Ch2kVA").innerHTML = kva2.toFixed(2);
	    		document.getElementById("Ch3kVA").innerHTML = kva3.toFixed(2);
	    		document.getElementById("kVA").innerHTML = kva.toFixed(2);

	    		document.getElementById("Ch1kVAR").innerHTML = kvar1.toFixed(2);
	    		document.getElementById("Ch2kVAR").innerHTML = kvar2.toFixed(2);
	    		document.getElementById("Ch3kVAR").innerHTML = kvar3.toFixed(2);
	    		document.getElementById("kVAR").innerHTML = kvar.toFixed(2);

	    		document.getElementById("Ch1THDI").innerHTML = thdi1.toFixed(2);
	    		document.getElementById("Ch2THDI").innerHTML = thdi2.toFixed(2);
	    		document.getElementById("Ch3THDI").innerHTML = thdi3.toFixed(2);
	    		document.getElementById("THDI").innerHTML = thdi.toFixed(2);

	    		document.getElementById("THDVL1").innerHTML = thdv1.toFixed(2);
	    		document.getElementById("THDVL2").innerHTML = thdv2.toFixed(2);
	    		document.getElementById("THDVL3").innerHTML = thdv3.toFixed(2);
	    		document.getElementById("THDV").innerHTML = thdv.toFixed(2);
	    		
	    		document.getElementById("FreqL1").innerHTML = 60.0;
	    		document.getElementById("FreqL2").innerHTML = 60.0;
	    		document.getElementById("FreqL3").innerHTML = 60.0;
	    		document.getElementById("Freq").innerHTML = 60.0;
				
				pml1 = pml1*100;
				pml2 = pml2*100;
				pml3 = pml3*100;
				pml = pml*100;
				document.getElementById("Ch1PML").innerHTML = pml1.toFixed(1)+'%';
	    		document.getElementById("Ch2PML").innerHTML = pml2.toFixed(1)+'%';
	    		document.getElementById("Ch3PML").innerHTML = pml3.toFixed(1)+'%';
	    		document.getElementById("PML").innerHTML = pml.toFixed(1)+'%';

	    		 element = document.getElementById("pb1");
	    		 element.progress-bar.css('width',"20%").attr('aria-valuenow', 20);
	    		 
	    		document.getElementById("pb2").style='"width: 100%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"';
	    		document.getElementById("pb3").style='"width: 100%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"';
	    		document.getElementById("pb").style='"width: 100%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"';



	
			
}

function SetFriendlyName()
{



}

function SaveDetailSettings()
{



}

