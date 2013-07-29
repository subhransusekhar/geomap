var stateCode = {
		"Andaman and Nicobar" : "IN-AN",
		"Bihar" : "IN-BR",
		"Mizoram" : "IN-MZ",
		"Daman and Diu" : "IN-DD",
		"Dadra and Nagar Haveli" : "IN-DN",
		"Delhi" : "IN-DL",
		"Nagaland" : "IN-NL",
		"West Bengal" : "IN-WB",
		"Haryana" : "IN-HR",
		"Himachal Pradesh" : "IN-HP",
		"Assam" : "IN-AS",
		"Uttarakhand" : "IN-UK",
		"Jharkhand" : "IN-JH",
		"Jammu and Kashmir" : "IN-JK",
		"Madhya Pradesh" : "IN-MP",
		"Uttar Pradesh" : "IN-UP",
		"Sikkim" : "IN-SK",
		"Chhattisgarh" : "IN-CT",
		"Chandigarh" : "IN-CH",
		"Goa" : "IN-GA",
		"Gujarat" : "IN-GJ",
		"Rajasthan" : "IN-RJ",
		"Maharashtra" : "IN-MH",
		"Tamil Nadu" : "IN-TN",
		"Puducherry" : "IN-PY",
		"Andhra Pradesh" : "IN-AP",
		"Tripura" : "IN-TR",
		"Arunachal Pradesh" : "IN-AR",
		"Karnataka" : "IN-KA",
		"Punjab" : "IN-PB",
		"Meghalaya" : "IN-ML",
		"Manipur" : "IN-MN",
		"Odisha" : "IN-OD",
		"Orissa" : "IN-OD",
		"Kerala" : "IN-KL"		
};

var stateData = {};
var result = [];
var count = 2;
var csv_file = 'data/datafile1.csv';
function setFocus(code) {
	 $('#india-map').vectorMap('set', 'focus', code);
}
function plotData(position) {
	if(!position) position = 1;
	$('#india-map').html('');
		var label ='';
		var column = '';
        $.each( result, function( key, value ) {
			if(key == 0) {
				label = value[0];
				$(".legend").text(label);
				column = value[position];
				$("span.sliderdata").text(column);
			}
			else{
				var state_code = stateCode[value[0]];
				stateData[state_code] = parseInt(value[position]);
			}
        });
        $('#india-map').vectorMap({
			map : 'in_nic_en',
	        series: {
	            regions: [{
	              values: stateData,
	              scale: ['#FFFFFF', '#C8EEFF', '#C8EEEE','#0071A4'],
	              normalizeFunction: 'polynomial'
	            }]
	          },
            onRegionLabelShow: function(e, el, code){
              el.html(el.html()+'(' + label + ':' + stateData[code]+')');
            },
            onRegionClick: function(e, code){
                setFocus(code);
            }
		});
}

function getCSVData() {
	$.get(csv_file, function(data) {
        result = $.csv.toArrays(data);
        plotData(1);
        count = result[0].length;
        $(".noUiSlider").noUiSlider({
            range: [1, count-1]
           ,start: 1
           ,handles: 1
           ,step: 1
           ,connect: "lower"
    	   ,slide: function(){
    		var value = $(this).val();
    		plotData(value);
    		}
        }); 
    });
}

var sliderPlayTime = null; 
var counterPlay = 1;

$(document).ready(function() {
	getCSVData();
	$('span.play a').click(function(){
		sliderPlayTime = setTimeout(function () {slidePlay();} , 1000);
		return false;
	});
	
	$('span.pause a').click(function(){
		clearTimeout(sliderPlayTime);
		return false;
	});
	
	$('span.reset a').click(function(){
		counterPlay = 1;
		plotData(1);
		$(".noUiSlider").val(1);
		clearTimeout(sliderPlayTime);
		return false;
	});
});

function slidePlay() {
	if(counterPlay < count && sliderPlayTime) {
		console.log(counterPlay);
		plotData(counterPlay);
		$(".noUiSlider").val(counterPlay);
		counterPlay ++;
		sliderPlayTime = setTimeout(function () {slidePlay();} , 500);
	}
}
