var groups;
window.groups = [{
	"id": 1,
	"ZipCodes": ["10027", "10028", "10029" , "10035"],
	"title": "Group One",
	"color": "#9b7736"
}, {
	"id": 2,
	"ZipCodes": ["10001","10011","10024"],
	"title": "Group Two",
	"color": "#e92e3e"
}];

! function() {
	window.ZipAreasMap || (window.ZipAreasMap = {}), $(function() {

		return ZipAreasMap.selectedZipCodes = $("#zip-codes").val().split(","),
			ZipAreasMap.initialize(),
			$("#selected-zip-codes").text(ZipAreasMap.selectedZipCodes),
			$("#change-color").click(function() {
				var e;
				console.log(ZipAreasMap);
				e = RandomColor.generate(), ZipAreasMap.polygons.forEach(function(t) {
					console.log(e);
					return t.setOptions({
						fillColor: e,
						strokeColor: e
					})
				})
			}),
			$("#change-single-color").click(function() {
				var e;
				e = RandomColor.generate();
				console.log(ZipAreasMap.polygons, "Color is ", e);
				ZipAreasMap.polygons.forEach(function(t) {
					var groupZip = $("#zip-codes").val().split(",");
					// console.log(t , t.zipCode ,  t.get("zipCode") , groupZip);
					if (groupZip.indexOf(t.zipCode) > -1)
						return t.setOptions({
							fillColor: e,
							strokeColor: e
						})
				});
			});

	})
}.call(this),
	function() {
		ZipAreasMap.initialize = function() {
			var e, t, n;
			return e = $("#zip-area-map-canvas").get(0), e ? (n = {
				center: new google.maps.LatLng(40.75532, -73.983677),
				zoom: 12
			}, t = new google.maps.Map(e, n), ZipAreasMap.polygons = [], ZipAreasMap.zipCodes.forEach(function(e) {
				return ZipAreasMap.polygons.push(e.polygon())
			}), ZipAreasMap.setActiveZipCodes = function() {
				var e;
				return e = ZipAreasMap.polygons.filter(function(e) {
						return e.active === !0
					}),
					ZipAreasMap.selectedZipCodes = e.map(function(e) {
						return e.zipCode
					}),
					$("#selected-zip-codes").text(ZipAreasMap.selectedZipCodes.join(", "));

			}, ZipAreasMap.polygons.forEach(function(e) {
				return e.setMap(t), google.maps.event.addListener(e, "click", function() {
					var e;
					return e = 0 === this.fillOpacity ? .5 : 0, this.setOptions({
						fillOpacity: e
					}), this.active = !this.active, ZipAreasMap.setActiveZipCodes()
				})
			})) : void 0
		}
	}.call(this),
	function() {

		var data = localStorage.getItem("group");
		console.log("ds", groups, "++", typeof data, "==", Storage, "==", data);
		if (typeof data == "undefined" || !data) {
			console.log("Here ");
			localStorage.setItem("group", JSON.stringify(groups))
		};
		var str = "";
		str += "";
		for (var i = 0; i < groups.length; i++) {
			str += "<tr style='background-color:"+groups[i].color+"'>";
			str += "<td>" + groups[i].id + "</td>";
			str += "<td>" + groups[i].color + "</td>";
			str += "<td>" + groups[i].title + "</td>";
			str += "<td>" + groups[i].ZipCodes.join(", ") + "</td>";
			str += "</tr>";
		}
		// console.log(str , $('table') ,  document.getElementById("DisplayGroups")) ; 
		$('#DisplayGroups > tbody:last-child').append(str);



	}.call(this),
	function() {
		window.RandomColor || (window.RandomColor = {}), window.mapProcess || (window.mapProcess = {}), RandomColor.generate = function() {
				return "#" + ("000000" + Math.floor(16777215 * Math.random()).toString(16)).slice(-6)
			},
			$("#save").click(function() {
				var e;
				console.log(ZipAreasMap);
				var gpname = $("#GroupName").val();
				var gpcolor = $("#GroupColor").val();
				console.log("GP", gpname, gpcolor);

				e = RandomColor.generate(), ZipAreasMap.polygons.forEach(function(t) {
					console.log(e);
					return t.setOptions({
						fillColor: e,
						strokeColor: e
					})
				})
			}),
			mapProcess.render = function(saveZipCodes , random) {
				boundries = [];
				for (var j = 0; j < saveZipCodes.boundry.length; j++) {
					var latlng = saveZipCodes.boundry[j].split("|");
					boundries.push(new google.maps.LatLng(latlng[0], latlng[1]));
				}



				var zipcode = saveZipCodes.zipcode;
					var color = null  ;  

				for(var i =0 ; i<groups.length ; i++){
					if(groups[i].ZipCodes.indexOf(zipcode) >=0 ){
						color = groups[i].color ; 
					}
				}
				e = color || random;
				console.log(boundries, "ff", e , zipcode );


					mapProcess.pushData(boundries, zipcode , e  , random);




			},
			mapProcess.pushData = function(boundries, zipcode , e) {
								ZipAreasMap.zipCodes.push({
					boundaries: boundries,
					polygon: function() {
						return new google.maps.Polygon({
							paths: this.boundaries,
							strokeColor: e,
							strokeOpacity: .8,
							strokeWeight: 2,
							fillColor: e,
							fillOpacity: this.isCurrent(zipcode, "opacity"),
							zipCode: zipcode,
							active: this.isCurrent(zipcode, "active")
						})
					},
					isCurrent: function(e, t) {
						var n;
						return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
							return t === e
						}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
					}
				});

			}
	}.call(this),
	function() {
		var e;
		window.ZipAreasMap || (window.ZipAreasMap = {}), ZipAreasMap.zipCodes = [];
		console.log(saveZipCodes);
		var randomcolor =  RandomColor.generate() ; 
		for (var i = 0; i < saveZipCodes.length; i++) {
			mapProcess.render(saveZipCodes[i] ,randomcolor);
		}

	}.call(this);
