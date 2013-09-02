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
		"Chhattisgarh" : "IN-CG",
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
var stateLatlng = [
                   {latLng: [11.7400867,92.6586401], name: 'Andaman and Nicobar'},
                   {latLng: [25.0960742, 85.3131193], name: 'Bihar'},
                   {latLng: [23.164543, 92.9375739], name: 'Mizoram'},
                   {latLng: [20.428283, 72.8397317], name: 'Daman and Diu'},
                   {latLng: [20.1808672, 73.0169135], name: 'Dadra and Nagar Haveli'},
                   {latLng: [28.635308, 77.22496], name: 'Delhi'},
                   {latLng: [26.1584354, 94.5624426], name: 'Nagaland'},
                   {latLng: [22.9867569, 87.8549755], name: 'West Bengal'},
                   {latLng: [29.0587757, 76.085601], name: 'Haryana'},
                   {latLng: [32.1024076, 77.5619419], name: 'Himachal Pradesh'},
                   {latLng: [26.2006043, 92.9375739], name: 'Assam'},
                   {latLng: [30.066753, 79.0192996], name: 'Uttarakhand'},
                   {latLng: [23.6913486, 85.2722472], name: 'Jharkhand'},
                   {latLng: [34.1490875, 76.8259652], name: 'Jammu and Kashmir'},
                   {latLng: [22.9734229, 78.6568942], name: 'Madhya Pradesh'},
                   {latLng: [27.5705886, 80.0981869], name: 'Uttar Pradesh'},
                   {latLng: [27.7306273, 88.6337839], name: 'Sikkim'},
                   {latLng: [21.2786567, 81.8661442], name: 'Chhattisgarh'},
                   {latLng: [30.7333148, 76.7794179], name: 'Chandigarh'},
                   {latLng: [15.2993265, 74.1239959], name: 'Goa'},
                   {latLng: [22.258652, 71.1923805], name: 'Gujarat'},
                   {latLng: [27.0238036, 74.2179326], name: 'Rajasthan'},
                   {latLng: [19.7514798, 75.7138884], name: 'Maharashtra'},
                   {latLng: [11.1271225, 78.6568942], name: 'Tamil Nadu'},
                   {latLng: [11.9138598, 79.8144722], name: 'Puducherry'},
                   {latLng: [17.0477624, 80.0981869], name: 'Andhra Pradesh'},
                   {latLng: [23.9408482, 91.9881527], name: 'Tripura'},
                   {latLng: [28.2179994, 94.7277528], name: 'Arunachal Pradesh'},
                   {latLng: [15.3172775, 75.7138884], name: 'Karnataka'},
                   {latLng: [31.1471305, 75.3412178], name: 'Punjab'},
                   {latLng: [25.4670308, 91.366216], name: 'Meghalaya'},
                   {latLng: [24.6637173, 93.9062687], name: 'Manipur'},
                   {latLng: [20.2375561, 84.2700179], name: 'Odisha'},
                   {latLng: [20.2375561, 84.2700179], name: 'Orissa'},
                   {latLng: [10.8505159, 76.2710833], name: 'Kerala'}
                 ];
var theme = {};
theme['red'] = ['#FFFFFF', '#F78B8B', '#EB6D6D','#DF4B4B','#D03636', '#BA1F1F', '#A80F0F','#8E0101'];
theme['blue'] = ['#FFFFFF', '#D2EFFC', '#ACDDF3','#79C0E0','#58A7CB', '#2F8FBA', '#1075A2','#005E89'];
theme['green'] = ['#FFFFFF', '#D8FBD1', '#B5EDAA','#90D682','#6BBD5B', '#3D972B', '#267417','#0E4F02'];
theme['yellow'] = ['#FFFFFF', '#FEFDF2', '#FFFCD6','#FFF9B1','#FFF479', '#FFEE34', '#FFEA00','#FFEA00'];
theme['dark'] = ['#FFFFFF', '#DADADA', '#B6B6B6','#949494','#676767', '#484848', '#0D0D0D','#000000'];
var stateData = {};
var latlng = [];
var result = [];
var count = 2;
var csv_file = 'data/datafile1.csv';
var latlng_file = 'data/Latlng.csv';
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
			map : 'india_mill_en',
			markers: stateLatlng,
			normalizeFunction: 'polynomial',
			markerStyle: {
				initial: {
					fill: '#F8E23B',
					stroke: '#383f47'
				  }
			},
	        series: {
	            regions: [{
	              values: stateData,
	              scale: theme['green'],
	              normalizeFunction: 'polynomial'
	            }]
	          },
            onRegionLabelShow: function(e, el, code){
              el.html(el.html()+'(' + label + ':' + stateData[code]+')');
            },
            onRegionClick: function(e, code){
                setFocus(code);
            },
		});
}

function getLatlngData() {
	$.get(latlng_file, function(data) {
		latlng = $.csv.toArrays(data);
    });
}

function getCSVData() {
	getLatlngData();
	$.get(csv_file, function(data) {
        result = $.csv.toArrays(data);
        plotData(1);
        drawSeries(theme['green']);
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

function drawSeries(theme) {
	$.each( theme, function( key, value ) {
		$(".scale").append("<span class='scale-band' style='background: " + value + "'></span>");
	});
}
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
		plotData(counterPlay);
		$(".noUiSlider").val(counterPlay);
		counterPlay ++;
		sliderPlayTime = setTimeout(function () {slidePlay();} , 500);
	}
}
