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

var csv_file = 'data/datafile1.csv';
function setFocus(code) {
	 $('#india-map').vectorMap('set', 'focus', code);
}
function plotData(position) {
	if(!position) position = 1;
	$('#india-map').html('');
	$.get(csv_file, function(data) {
    	var stateData = {};
        var csvcontent = $(data);
		var label ='';
		var column = '';
        var result = $.csv.toArrays(data);
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
        console.log(stateData);
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
    });
}
$(document).ready(function() {
	$(".noUiSlider").noUiSlider({
        range: [1, 5]
       ,start: 1
       ,handles: 1
       ,step: 1
       ,connect: "lower"
	   ,slide: function(){
		var value = $(this).val();
		plotData(value);
		}
    }); 
    plotData(1);
});