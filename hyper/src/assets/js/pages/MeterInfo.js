var GlobalTimer;

function GetSystemSettings()
{
	$.get("get_system_settings", function(data) {

			var arr = data.split(";");
			var i=0;
			var value;
			
			document.getElementById('DemandInterval').value = arr[i++];
        	document.getElementById('DemandSubInt').value = arr[i++];
        	
        	if(arr[i++] === "15172") 
        		document.getElementById('PointMap').value = "Schneider Point Map";
        	else 
        		document.getElementById('PointMap').value = "Core Module Point Map";
			
			if(parseInt(arr[i++].valueOf(),10) == 1)
				{
					document.getElementById("dhcpenable").checked = true;
					document.getElementById("manualconfig").checked = false;
				}
				else
				{
					document.getElementById("dhcpenable").checked = false;
					document.getElementById("manualconfig").checked = true;
				}

        	document.getElementById('IPV4ADDRESS').value = arr[i++];
			document.getElementById('IPV4MASK').value 	 = arr[i++];
			document.getElementById('IPV4GATEWAY').value = arr[i++];
			document.getElementById('IPV4DNS1').value 	 = arr[i++];
			
			var ntp_dec = arr[i++];
			var ntp_string = arr[i++];
			if(ntp_string === "") 
				document.getElementById('IPV4NTP').value 	 = ntp_dec;
			else
				document.getElementById('IPV4NTP').value 	 = ntp_string;

			document.getElementById('BACnetPort').value = arr[i++];
			document.getElementById('BACnetID').value 	= arr[i++];
			document.getElementById('BACnetVirtNet').value 	= arr[i++];
			
			

			document.getElementById('SERIALADDRESS').value = arr[i++];
			
			document.getElementById('BaudRate').value = arr[i++];

			var ptratio = arr[i++] / 1000;
			document.getElementById('ptratio').value = ptratio.toFixed(1);
			document.getElementById('overvoltthreshold').value = arr[i++];
			document.getElementById('overvolttimedelay').value = arr[i++];
			document.getElementById('undervoltthreshold').value = arr[i++];
			document.getElementById('undervolttimedelay').value = arr[i];



	});


}

function SetSystemSettings()
{

var sysconfig;
var xhttp = new XMLHttpRequest();
	
	sysconfig = document.getElementById('DemandInterval').value+"&";
	sysconfig += document.getElementById('DemandSubInt').value+"&";
	if(document.getElementById('PointMap').value === "Schneider Point Map")
		sysconfig += "15172"+"&";
	else
		sysconfig += "22000"+"&";

	xhttp.open("POST", "setsystemsettings", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send(sysconfig);


}



function GetGeneralSettings()
{

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() //Call a function when the state changes.
	{
	    if(xhttp.readyState == 4 && xhttp.status == 200) 
	    	{
	        var arr = xhttp.responseText.split(";");
			var i=0;
			document.getElementById('DemandInterval').value = arr[i++];
        	document.getElementById('DemandSubInt').value = arr[i++];
        	
        	if(arr[i++] === "15172") 
        		document.getElementById('PointMap').value = "Schneider Point Map";
        	else 
        		document.getElementById('PointMap').value = "Core Module Point Map";

        	if(arr[i] === "0")
        		document.getElementById('SPConfig1').value = "Top Feed";
        	else if (arr[i] === "1")
        		document.getElementById('SPConfig1').value = "Bottom Feed";
        	else if (arr[i] === "2")
        		document.getElementById('SPConfig1').value = "Inline Sequential";
        	else if (arr[i] === "3")
        		document.getElementById('SPConfig1').value = "Inline Odd/Even";
        	else 
        		document.getElementById('SPConfig1').value = "Sequential";

        	if(arr[++i] === "0")
        		document.getElementById('SPConfig2').value = "Top Feed";
        	else if (arr[i] === "1")
        		document.getElementById('SPConfig2').value = "Bottom Feed";
        	else if (arr[i] === "2")
        		document.getElementById('SPConfig2').value = "Inline Sequential";
        	else if (arr[i] === "3")
        		document.getElementById('SPConfig2').value = "Inline Odd/Even";
        	else 
        		document.getElementById('SPConfig2').value = "Sequential";
        	
        	
	    	}
	}
	xhttp.open("GET", "get_general_settings", true);
	xhttp.send();

    //document.getElementById("date").innerHTML = t;
}

function SetGeneralSettings()
{
var sysconfig;
var xhttp = new XMLHttpRequest();
	
	sysconfig = document.getElementById('DemandInterval').value+"&";
	sysconfig += document.getElementById('DemandSubInt').value+"&";
	if(document.getElementById('PointMap').value === "Schneider Point Map")
		sysconfig += "15172"+"&";
	else
		sysconfig += "22000"+"&";
	
	if(document.getElementById('SPConfig1').value === "Top Feed")
		sysconfig += "0"+"&";
	else if (document.getElementById('SPConfig1').value === "Bottom Feed")
		sysconfig += "1"+"&";
	else if (document.getElementById('SPConfig1').value === "Inline Sequential")
		sysconfig += "2"+"&";
	else if (document.getElementById('SPConfig1').value === "Inline Odd/Even")
		sysconfig += "3"+"&";
	else
		sysconfig += "4"+"&";

	if(document.getElementById('SPConfig2').value === "Top Feed")
		sysconfig += "0"+"&";
	else if (document.getElementById('SPConfig2').value === "Bottom Feed")
		sysconfig += "1"+"&";
	else if (document.getElementById('SPConfig2').value === "Inline Sequential")
		sysconfig += "2"+"&";
	else if (document.getElementById('SPConfig2').value === "Inline Odd/Even")
		sysconfig += "3"+"&";
	else
		sysconfig += "4"+"&";


	xhttp.open("POST", "setgeneral", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send(sysconfig);


}

function SetDate()
{
	var d = new Date();
	var sysconfig = "TIME="
    var t = d.getHours();
    sysconfig += t + "&";
    t = d.getMinutes(); 
    sysconfig += t + "&";
    t = d.getSeconds();
    sysconfig += t + "&";
    t = d.getDate();
    sysconfig += t + "&";
    t = d.getMonth();
    sysconfig += t + "&";
    t = d.getFullYear() - 1900;
    sysconfig += t + "&";

    
	var xhttp = new XMLHttpRequest();
	
	xhttp.open("POST", "settime", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	
	//document.getElementById('UpdateStatusBack').innerHTML = sysconfig.length;
	
	xhttp.onreadystatechange = function() //Call a function when the state changes.
	{
	    if(xhttp.readyState == 4 && xhttp.status == 200) 
	    {
	    	$.get("get_main_info", function(data) {

				//alert("Data Loaded: " + data);

				var arr = data.split(";");
        		var i=0;
	        	document.getElementById('devmodel').innerHTML = arr[i++];
	        	document.getElementById('devname').innerHTML = arr[i++];
	        	document.getElementById('devlocation').innerHTML = arr[i++];
	        	document.getElementById('firmwareversion').innerHTML = arr[i++];
	        	document.getElementById('date').innerHTML = arr[i++];
	        	document.getElementById('MAC').innerHTML = arr[i];

			});
	        
	    }
	}
	xhttp.send(sysconfig);

    //document.getElementById("date").innerHTML = t;
}

function GetNetConfig()
{
	var xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() 
  	{
  	  if (xhttp.readyState == 4 && xhttp.status == 200) // checks to see if we got back no errors from webserver
    	{
    		var arr = xhttp.responseText.split(";");
    		document.getElementById('IPV4ADDRESS').value 			= arr[1].valueOf();
			document.getElementById('IPV4MASK').value 				= arr[2].valueOf();
			document.getElementById('IPV4GATEWAY').value 			= arr[3].valueOf();
			document.getElementById('IPV4DNS1').value 				= arr[4].valueOf();
			
			if(parseInt(arr[0].valueOf(),10) == 1)
				{
					document.getElementById("dhcpenable").checked = true;
					document.getElementById("manualconfig").checked = false;
				}
				else
				{
					document.getElementById("dhcpenable").checked = false;
					document.getElementById("manualconfig").checked = true;
				}
			//dhcpchange();
			/*document.getElementById("timezone").selectedIndex = parseint(arr[21].valueOf());*/
    	}
	}
	xhttp.open("GET", "get_network_settings", true);
	xhttp.send();
}



function SendNetUpdate()
{
	// This uses the HTTPs_ReqRdySignalHook
	var sysconfig; 
	var dhcp;
	if(document.getElementById("dhcpenable").checked == true) dhcp = "1";
	else dhcp = "0";
	sysconfig = "sysconfig=sysconfig&"
	sysconfig +="DHCP="+dhcp+"&";
	sysconfig +="IPV4ADDRESS="+document.getElementById('IPV4ADDRESS').value+"&";
	sysconfig +="IPV4MASK="+document.getElementById('IPV4MASK').value+"&";
	sysconfig +="IPV4GATEWAY="+document.getElementById('IPV4GATEWAY').value+"&";
	sysconfig +="IPV4DNS1="+document.getElementById('IPV4DNS1').value+"&";
	sysconfig +="IPV4NTP="+document.getElementById('IPV4NTP').value+"&";
		
	var xhttp = new XMLHttpRequest();
	//var url = "get_data.php";
	
	xhttp.open("POST", "ethernet", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	//xhttp.setRequestHeader("Content-length", sysconfig.length);
	//xhttp.setRequestHeader("Connection", "close");
	
	document.getElementById('UpdateStatusBack').innerHTML = sysconfig.length;
	
	xhttp.onreadystatechange = function() //Call a function when the state changes.
	{
	    if(xhttp.readyState == 4 && xhttp.status == 200) 
	    	{
	        document.getElementById('UpdateStatusBack').innerHTML = xhttp.responseText;
	    	}
	}
	xhttp.send(sysconfig);
}


function GetMainInfo() {
 
 	var xhttp = new XMLHttpRequest();
  	
 	xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) // checks to see if we got back no errors from webserver
        {
        	var arr = xhttp.responseText.split(";");
        	var i=0;
        	document.getElementById('devmodel').innerHTML = arr[i++].valueOf();
        	document.getElementById('devname').innerHTML = arr[i++].valueOf();
        	document.getElementById('devlocation').innerHTML = arr[i++].valueOf();
        	document.getElementById('firmwareversion').innerHTML = arr[i++].valueOf();
        	document.getElementById('date').innerHTML = arr[i++].valueOf();
        	document.getElementById('MAC').innerHTML = arr[i++].valueOf();

        	// Updated code for status bar
        	
        	//var bar = $(".progress-bar").detach();

        	//background-color:
        	$(".progress-bar").css("background-color", "#E2E3E0").text("");
        	
        	if(arr[i++] === "TRUE") 
        	{
        		
        		var percent_used = 100*(1 - arr[8]/arr[7]);
        		
        			//$(this).append(bar);
        			//$(this).prepend(bar);
        			$(".progress-bar").css("background-color", "blue");
        			$(".progress-bar").css("width", percent_used + "%").text(percent_used.toFixed(1) + " %");
        		       		

        	}
        	//else  $(".progress-bar").remove();

// Original code for status bar
        	// if(arr[i++] === "TRUE") 
        	// {
        		
        	// 	var percent_used = 100*(1 - arr[8]/arr[7]);
        	// 	$(".progress-bar").css("width", percent_used + "%").text(percent_used.toFixed(1) + " %");
        	// }
        	// else $(".progress-bar").remove();

        
        	update_sp_status(arr[9],1,Number(arr[13]));
        	update_sp_status(arr[10],2,Number(arr[14]));
        	update_sp_status(arr[11],3,Number(arr[15]));
        	update_sp_status(arr[12],4,Number(arr[16]));
        }
    }

    xhttp.open("GET", "get_main_info", true);
    xhttp.send();

}

function update_sp_status(spnum,port,type)
{

	switch(port)
	{
		case 1:
			var id="#SP1Status";
		break;
		case 2:
			var id="#SP2Status";
		break;
		case 3:
			var id="#SP3Status";
		break;
		case 4:
			var id="#SP4Status";
		break;
	}

	switch(spnum)
	{
		case "0":
			//$("#SP1Status").css({ 'color': 'red', 'font-size': '150%' }).text("DISCONNECTED");
			$(id).css({ 'color': 'grey', 'font-size': '100%' }).text("NOTHING_CONNECTED");
			break;
		case "1":
			$(id).css({ 'color': 'green', 'font-size': '100%' }).text("CONNECTED");
			switch(type)
			{
				case 1:
				case 2:
				default:
				document.getElementById("SP1image").src = "card.PNG";
				break;
			}
			
			break;
		case "2":
			$(id).css({ 'color': 'red', 'font-size': '100%' }).text("OFFLINE");
			break;
		case "3":
			$(id).css({ 'color': 'blue', 'font-size': '100%' }).text("INVALID");
			break;
		

	}		


}

function serialchange() {

	var SerialSettings;
	var radiovalue;

	SerialSettings = "sysconfig=sysconfig&"
	SerialSettings +="SERIALADDRESS="+document.getElementById('SERIALADDRESS').value+"&";
	
    if (document.getElementById("DIPENABLEON").checked == true) radiovalue = 1;
	else radiovalue = 0;
	SerialSettings +="DIPENABLEON="+radiovalue+"&";
	
	if(document.getElementById("BAUD9600").checked == true) radiovalue = 9600;
	if(document.getElementById("BAUD19200").checked == true) radiovalue = 19200;
	if(document.getElementById("BAUD38400").checked == true) radiovalue = 38400;
	if(document.getElementById("BAUD57600").checked == true) radiovalue = 57600;
	if(document.getElementById("BAUD76800").checked == true) radiovalue = 76800;
	SerialSettings +="BAUDRATE="+radiovalue+"&";
	
	if(document.getElementById("PARITYNONE").checked == true) radiovalue = 0;
	if(document.getElementById("PARITYODD").checked == true) radiovalue = 1;
	if(document.getElementById("PARITYEVEN").checked == true) radiovalue = 2;
	SerialSettings +="PARITY="+radiovalue+"&";

	if(document.getElementById("STOPBITSONE").checked == true) radiovalue = 1;
	else radiovalue = 2;
	SerialSettings +="STOPBITS="+radiovalue+"&";
	
	
	
	var xhttp = new XMLHttpRequest();
	//var url = "get_data.php";
	
	xhttp.open("POST", "serial", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
	document.getElementById('UpdateStatusBack').innerHTML = SerialSettings.length;
	
	xhttp.onreadystatechange = function() //Call a function when the state changes.
	{
	    if(xhttp.readyState == 4 && xhttp.status == 200) 
	    	{
	        document.getElementById('UpdateStatusBack').innerHTML = xhttp.responseText;
	    	}
	}
	xhttp.send(SerialSettings);

}

function GetSerialSettings()
{
//TESTING development CODE
    var xhttp = new XMLHttpRequest();
    document.getElementById("STOPBITSTWO").disabled = true;
    document.getElementById("PARITYODD").disabled = true;
    document.getElementById("PARITYEVEN").disabled = true;
  	xhttp.onreadystatechange = function() 
  	{
  	  if (xhttp.readyState == 4 && xhttp.status == 200) // checks to see if we got back no errors from webserver
    	{
    		var arr = xhttp.responseText.split(";");	
			document.getElementById('SERIALADDRESS').value = arr[0].valueOf();

			
			if(arr[1].valueOf() == '9600')
				{
					document.getElementById("BAUD9600").checked = true;
					document.getElementById("BAUD19200").checked = false;
					document.getElementById("BAUD38400").checked = false;
					document.getElementById("BAUD57600").checked = false;
					document.getElementById("BAUD76800").checked = false;
				}
				if(arr[1].valueOf() == '19200')
				{
					document.getElementById("BAUD9600").checked = false;
					document.getElementById("BAUD19200").checked = true;
					document.getElementById("BAUD38400").checked = false;
					document.getElementById("BAUD57600").checked = false;
					document.getElementById("BAUD76800").checked = false;
				}
				if(arr[1].valueOf() == '38400')
				{
					document.getElementById("BAUD9600").checked = false;
					document.getElementById("BAUD19200").checked = false;
					document.getElementById("BAUD38400").checked = true;
					document.getElementById("BAUD57600").checked = false;
					document.getElementById("BAUD76800").checked = false;
				}
				if(arr[1].valueOf() == '57600')
				{
					document.getElementById("BAUD9600").checked = false;
					document.getElementById("BAUD19200").checked = false;
					document.getElementById("BAUD38400").checked = false;
					document.getElementById("BAUD57600").checked = true;
					document.getElementById("BAUD76800").checked = false;
				}
				if(arr[1].valueOf() == '76800')
				{
					document.getElementById("BAUD9600").checked = false;
					document.getElementById("BAUD19200").checked = false;
					document.getElementById("BAUD38400").checked = false;
					document.getElementById("BAUD57600").checked = false;
					document.getElementById("BAUD76800").checked = true;
				}
				// Update the Parity radio buttons
				if(parseInt(arr[2].valueOf(),10) == 0)
				{
					document.getElementById("PARITYNONE").checked = true;
					document.getElementById("PARITYODD").checked = false;
					document.getElementById("PARITYEVEN").checked = false;
				}
				if(parseInt(arr[2].valueOf(),10) == 1)
				{
					document.getElementById("PARITYNONE").checked = false;
					document.getElementById("PARITYODD").checked = true;
					document.getElementById("PARITYEVEN").checked = false;
				}

				if(parseInt(arr[2].valueOf(),10) == 2)
				{
					document.getElementById("PARITYNONE").checked = false;
					document.getElementById("PARITYODD").checked = false;
					document.getElementById("PARITYEVEN").checked = true;
				}
				// Update the Stop Bits radio buttons
				if(parseInt(arr[3].valueOf(),10) == 1)
				{
					document.getElementById("STOPBITSONE").checked = true;
					document.getElementById("STOPBITSTWO").checked = false;
				}
				if(parseInt(arr[3].valueOf(),10) == 2)
				{
					document.getElementById("STOPBITSONE").checked = false;
					document.getElementById("STOPBITSTWO").checked = true;
				}
				// Update the DIP Switch override radio buttons
				if(parseInt(arr[4].valueOf(),10) == 0)
				{
                    document.getElementById("DIPENABLEOFF").checked = true;
                    document.getElementById("DIPENABLEON").checked = false;
                    EnableAddr();
				}
				if(parseInt(arr[4].valueOf(),10) == 1)
				{
                    document.getElementById("DIPENABLEOFF").checked = false;
                    document.getElementById("DIPENABLEON").checked = true;
                    DisableAddr();
				}

    	}
	}
	xhttp.open("GET", "get_serial_settings", true);
	xhttp.send();
}

function EnableAddr()
{
    document.getElementById("SERIALADDRESS").disabled = false;
}

function DisableAddr()
{
    document.getElementById("SERIALADDRESS").disabled = true;
}

function eth2settings()
{

	if(document.getElementById("eth2enable").checked == true)
	{
		// manage the buttons
		document.getElementById("eth2enable").checked = true;
		document.getElementById("eth2disable").checked = false;
		// enable the text fields
		document.getElementById("IPV4ADDRESS2").disabled = false;
		document.getElementById("IPV4MASK2").disabled = false;
		document.getElementById("IPV4GATEWAY2").disabled = false;

	}
	else
	{
		// manage the buttons
		document.getElementById("eth2enable").checked = false;
		document.getElementById("eth2disable").checked = true;
		// enable the text fields
		document.getElementById("IPV4ADDRESS2").disabled = true;
		document.getElementById("IPV4MASK2").disabled = true;
		document.getElementById("IPV4GATEWAY2").disabled = true;

	}


}


function ITICFormDL(download)
{

var filename = document.getElementById("cmbemafilelist").value;


var xhttp = new XMLHttpRequest();
	
	xhttp.open("POST", "wavefilename", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	
	//document.getElementById('UpdateStatusBack').innerHTML = sysconfig.length;
	
	xhttp.onreadystatechange = function() //Call a function when the state changes.
	{
	    if(xhttp.readyState == 4 && xhttp.status == 200) 
	    	{
	        //document.getElementById('UpdateStatusBack').innerHTML = xhttp.responseText;

				$.get("dlcbema", function(data) {

				// alert("Data Loaded: " + data);
				if (download === "TRUE") 
				{
					var element = document.createElement('a');
					element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
					element.setAttribute('download', filename);

					element.style.display = 'none';
					document.body.appendChild(element);

					element.click();

					document.body.removeChild(element);
				}
				else 
				{
					var rows = data.split(";");
					var i=0,k=0;
					var wrapper = document.getElementById("TableData");
					var myHTML = "";
					var value;
					var time_in_ms;
					var d;
					var t1;
					var t2;

					// First create the table and id's
					while(i++ < (rows.length - 1))
					{
						myHTML += "<tr>";
						for(j=0;j<6;j++)
						{
							id = "tdval" + k;
							k++;
							myHTML += '<td  align="center" id="' + id + '" ></td>';
						}
						myHTML += "</tr>";

					}
					wrapper.innerHTML = myHTML;

					// Now add the data to the table
					i=0;
					k=0;
					while(i++ < rows.length)
					{
						var td = rows[i-1].split(",");
						
						for(j=0;j<6;j++)
						{
							if(j == 0 && i > 1)
							{
								 time_in_ms = td[j] * 1000;
								 d = new Date(time_in_ms);
								 t1 = d.toLocaleDateString();
								 t2 = d.toLocaleTimeString();
								 value = t1 + " " + t2;
							}
							else value = td[j];


							id = "tdval" + k;
							k++;
							// if(value == "") continue;
							// $('#id').html('value');
							document.getElementById(id).innerHTML = value;
						}

						
						
					}

					

					//$('#UpdateStatusBack').text(data);
					//document.getElementById("UpdateStatusBack") = data;

				}

				});


	    	}
	}

	xhttp.send(filename);


	
}

function ITICShowData() 
{
	ITICFormDL("FALSE");

}

function ITICDLData() 
{
	ITICFormDL("TRUE");

}

function CBEMAFileList()
{

// Change this to actually query the CM and build a list.

$('#cmbemafilelist').children().remove();
var x = document.getElementById("cmbemafilelist");
var option = document.createElement("option");
option.text = "cbema.csv";
x.add(option);


	// var xhttp = new XMLHttpRequest();
 //  	xhttp.onreadystatechange = function() 
 //  	{
 //  	  if (xhttp.readyState == 4 && xhttp.status == 200) // checks to see if we got back no errors from webserver
 //    	{
	// 		var list = xhttp.responseText.split(";");
			
	// 		$('select').children().remove();
			
	// 		for(var i in list) {
				
	// 			if(list[i] == "") continue;
	// 			var x = document.getElementById("cmbemafilelist");
	// 			var option = document.createElement("option");
	// 			option.text = list[i];
	// 			x.add(option);

	// 		}

	// 	}
	// }

	// xhttp.open("GET", "cbemalist", true);
	// xhttp.send();
	
	ITICShowData();

}

// function cbemasettings()
// {

// 	if(document.getElementById("cbemaenable").checked == true)
// 	{
// 		document.getElementById("CBEMAVOLTAGE").disabled = false;
// 	}
// 	else
// 	{
// 		document.getElementById("CBEMAVOLTAGE").disabled = true;
// 	}
// }

function UpdateFirmware()
{

	document.getElementById("upload-status").innerHTML = "";
	document.getElementById("progress").innerHTML = "";
	document.getElementById("result").innerHTML = "";

	var xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function()
  	{
  	  if (xhttp.readyState == 4 && xhttp.status == 200) 
    	{
			var arr = xhttp.responseText.split(";");
			 if(arr[0] === "No USB Flash Drive Found")
			 {
			 	//<p id="upload-status"></p>
                //<p id="progress"></p>
                //<p id="result"></p>

			 	document.getElementById("upload-status").innerHTML = "Insert USB Flash Drive";
			 	return ;
			 }
			 else if(arr[0] === "No Firmware Image Found")
			 {
			 	document.getElementById("upload-status").innerHTML = "Can't Find iMMC.bch on USB Flash Drive";
			 	return ;
			 }

			document.getElementById("upload-status").innerHTML = arr[0];
		}
	}
	xhttp.open("GET", "fw_update", true);
	xhttp.send();

	document.getElementById("upload-status").innerHTML = "Starting Firmware Update, do not turn off power to the device!";

	GlobalTimer = 60;

	var myVar = setInterval(FW_UpateStatus, 1000);

	setTimeout(function(){ window.location.replace("main.html"); }, 60000);

}

function FW_UpateStatus ()
{

	GlobalTimer--;

	document.getElementById("progress").innerHTML = GlobalTimer + " Seconds Remaing";


}

function SystemReset()
{

	var xhttp = new XMLHttpRequest();

	xhttp.open("GET", "sr_update", true);
	xhttp.send();

	setTimeout(function(){ window.location.replace("main.html"); }, 30000);
	//document.getElementById("UpdateStatusBack").innerHTML = "Restarting Core Module";

}

function SaveSettingsToUSB()
{

	var filename = "config.csv"
	var xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function()
  	{
  	  if (xhttp.readyState == 4 && xhttp.status == 200) // checks to see if we got back no errors from webserver
    	{
			var arr = xhttp.responseText.split(";");

			$.get("dlsettings", function(data) {

	        	if (data === ";No USB Found")
	        	{
	        		document.getElementById("SaveSettingsStatusBack").innerHTML = "Insert USB Flash Drive";
	        		return;
	        	}

	        	else if(data !== "")
	        	{
		        	var element = document.createElement('a');
					element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
					element.setAttribute('download', filename);

					element.style.display = 'none';
					document.body.appendChild(element);

					element.click();

					document.body.removeChild(element);
				}

			});

			document.getElementById("SaveSettingsStatusBack").innerHTML = arr[0];
		}
	}
	xhttp.open("GET", "write_settings", true);
	xhttp.send();
	//document.getElementById("SaveSettingsStatusBack").innerHTML = "Starting Firmware Update, do not turn off power to the device!";

}