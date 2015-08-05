var groups;
window.groups = [{
	"id": 1,
	"ZipCodes": ["10001", "10002", "10003"],
	"title": "Group One",
	"color":"#9b7736"
}, {
	"id": 2,
	"ZipCodes": ["10024", "10028"],
	"title": "Group Two",
	"color":"#e92e3e"
}];

var saveZipCodes
window.saveZipCodes = [{
	"zipcode": "10001",
	"boundry": ["40.744149|-73.987733", "40.748934|-73.983973", "40.756112|-74.006533", "40.752352|-74.008242", "40.743465|-73.992177"]
}, {
	"zipcode": "10002",
	"boundry": ["40.714021|-73.997519", "40.708849|-73.996017", "40.712915|-73.976104", "40.719681|-73.97516", "40.724137|-73.992583"]
}, {
	"zipcode": "10003",
	"boundry": ["40.739705| -73.99081", "40.729451| -73.99662", "40.724323| -73.992519", "40.722956| -73.988759", "40.73492|-73.979871"]
}, {
	"zipcode": "10004",
	"boundry": ["40.706891| -74.016104", "40.703814| -74.017471", "40.704156| -74.005508", "40.704156| -74.00585", "40.706549| -74.012344"]

}, {
	"zipcode": "10005",
	"boundry": ["40.704156| -74.00585", "40.708941| -74.010293", "40.706549| -74.012344"]
}, {
	"zipcode": "10006",
	"boundry": ["40.708941| -74.010293", "40.709625| -74.009951", "40.710309| -74.011319", "40.706891| -74.016104", "40.706549| -74.012344"]
}, {
	"zipcode": "10007",
	"boundry": ["40.718171| -74.013028", "40.713385| -74.016446", "40.710309| -74.011319", "40.709625| -74.009951", "40.713385| -73.998671"]

}, {
	"zipcode": "10009",
	"boundry": ["40.732527| -73.97406", "40.73492| -73.979871", "40.722956| -73.988759"]
}, {
	"zipcode": "10010",
	"boundry": ["40.73492| -73.979871", "40.732527| -73.97406", "40.736287| -73.974402", "40.743123| -73.971668", "40.744149| -73.987733", "40.743465| -73.992177", "40.739705| -73.99081"]

}, {
	"zipcode": "10011",
	"boundry": ["40.729451| -73.99662", "40.739705| -73.99081", "40.743465| -73.992177", "40.752352| -74.008242", "40.742782| -74.009268", "40.731843| -74.001064"]

}, {
	"zipcode": "10012",
	"boundry": ["40.724323| -73.992519", "40.729451| -73.99662", "40.731843| -74.001064", "40.726716| -74.003115", "40.719538| -73.994228"]

}, {
	"zipcode": "10013",
	"boundry": ["40.719538| -73.994228", "40.726716| -74.003115", "40.726716| -74.015079", "40.718171| -74.013028", "40.713385| -73.998671", "40.714069| -73.997304"]

}, {
	"zipcode": "10014",
	"boundry": ["40.726716| -74.015079", "40.726716| -74.003115", "40.731843| -74.001064", "40.742782| -74.009268"]

}, {
	"zipcode": "10016",
	"boundry": ["40.747225| -73.968591", "40.752011| -73.981922", "40.748934| -73.983973", "40.744149| -73.987733", "40.743123| -73.971668"],

}, {
	"zipcode": "10017",
	"boundry": ["40.747225| -73.968591", "40.753378| -73.963122", "40.757822| -73.97782", "40.757138| -73.978162", "40.753378| -73.980897", "40.752011| -73.981922"]

}, {
	"zipcode": "10018",
	"boundry": ["40.753378| -73.980897", "40.76124| -74.001406", "40.760214| -74.003115", "40.756112| -74.006533", "40.748934| -73.983973", "40.752011| -73.981922"]

}, {
	"zipcode": "10019",
	"boundry": ["40.768076| -73.98158", "40.773203| -73.993886", "40.760214| -74.003115", "40.76124| -74.001406", "40.758505| -73.981239", "40.758847| -73.976795", "40.764316| -73.973035"]
}, {
	"zipcode": "10020",
	"boundry": ["40.757822| -73.97782", "40.758847| -73.976795", "40.758505| -73.981239", "40.757138| -73.978162"]

}, {
	"zipcode": "10021",
	"boundry": ["40.770127| -73.94774", "40.777647| -73.963122", "40.764658| -73.972351", "40.758163| -73.95902"]

}, {
	"zipcode": "10022",
	"boundry": ["40.757822| -73.97782", "40.753378| -73.963122", "40.758163| -73.95902", "40.764658| -73.972351", "40.764316| -73.973035", "40.758847| -73.976795"]

}, {
	"zipcode": "10023",
	"boundry": ["40.779356| -73.973719", "40.781407| -73.988075", "40.773203| -73.993886", "40.768076| -73.98158"]

}, {
	"zipcode": "10024",
	"boundry": ["40.788585| -73.966882", "40.808411| -73.96654", "40.817982| -73.962097", "40.781407| -73.988075", "40.779356| -73.973719"]

}, {
	"zipcode": "10025",
	"boundry": ["40.800549| -73.958337", "40.806018| -73.959362", "40.808411| -73.96654", "40.788585| -73.966882"]

}, {
	"zipcode": "10026",
	"boundry": ["40.803283| -73.944664", "40.806018| -73.959362", "40.800549| -73.958337", "40.796789| -73.949108", "40.800549| -73.946373"]

}, {
	"zipcode": "10027",
	"boundry": ["40.806018| -73.959362", "40.803283| -73.944664", "40.809436| -73.939879", "40.812854| -73.941929", "40.817298| -73.948082", "40.823109| -73.957995", "40.817982| -73.962097", "40.808411| -73.96654"]

}, {
	"zipcode": "10028",
	"boundry": ["40.777647| -73.942613", "40.782091| -73.960046", "40.777647| -73.963122", "40.770127| -73.94774"]

}, {
	"zipcode": "10029",
	"boundry": ["40.794054| -73.930991", "40.800549| -73.946373", "40.796789| -73.949108", "40.787902| -73.955602", "40.782774| -73.943639"]

}, {
	"zipcode": "10030",
	"boundry": ["40.823793| -73.94398", "40.817298| -73.948082", "40.812854| -73.941929", "40.820374| -73.936119"]

}, {
	"zipcode": "10031",
	"boundry": ["40.823793| -73.94398", "40.830287| -73.94022", "40.827894| -73.954577", "40.823109| -73.957995", "40.817298| -73.948082"]
}, {
	"zipcode": "10032",
	"boundry": ["40.827894| -73.954577", "40.830287| -73.94022", "40.836098| -73.934409", "40.842251| -73.930991", "40.850796| -73.946715"]

}, {
	"zipcode": "10033",
	"boundry": ["40.847036| -73.928598", "40.863102| -73.933726", "40.869938| -73.932358", "40.850796| -73.946715", "40.842251| -73.930991"]

}, {
	"zipcode": "10034",
	"boundry": ["40.869938| -73.932358", "40.863102| -73.933726", "40.860025| -73.918344"]

}, {
	"zipcode": "10035",
	"boundry": ["40.807385| -73.933384", "40.809436| -73.939879", "40.803283| -73.944664", "40.800549| -73.946373", "40.794054| -73.930991"]

}, {
	"zipcode": "10036",
	"boundry": ["40.757138| -73.978162", "40.758505| -73.981239", "40.76124| -74.001406", "40.753378| -73.980897"]
}, {
	"zipcode": "10037",
	"boundry": ["40.819349| -73.934068", "40.820374| -73.936119", "40.812854| -73.941929", "40.809436| -73.939879", "40.807385| -73.933384"]
}, {
	"zipcode": "10038",
	"boundry": ["40.704156| -74.00585", "40.704156| -74.005508", "40.707916| -73.999355", "40.714069| -73.997304", "40.713385| -73.998671", "40.709625| -74.009951", "40.708941| -74.010293"]
}, {
	"zipcode": "10039",
	"boundry": ["40.836098| -73.934409", "40.830287| -73.94022", "40.823793| -73.94398", "40.820374| -73.936119", "40.819349| -73.934068"]
}, {
	"zipcode": "10040",
	"boundry": ["40.847036| -73.928598", "40.860025| -73.918344", "40.863102| -73.933726"]
}, {
	"zipcode": "10128",
	"boundry": ["40.782774| -73.943639", "40.787902| -73.955602", "40.782091| -73.960046", "40.777647| -73.942613"]
}, {
	"zipcode": "10280",
	"boundry": ["40.703814| -74.017471", "40.706891| -74.016104", "40.710309| -74.011319", "40.713385| -74.016446"]
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
				console.log(ZipAreasMap.polygons , "Color is " , e );
  			        ZipAreasMap.polygons.forEach(function(t) {
					 var groupZip= $("#zip-codes").val().split(",");
					// console.log(t , t.zipCode ,  t.get("zipCode") , groupZip);
					if(groupZip.indexOf(t.zipCode) >-1)
					return t.setOptions({
						fillColor: e,
						strokeColor: e
					})

				});
			});



			// ZipAreasMap.zipCodes.polygons[2].fillColor= "#000000",
			// ZipAreasMap.zipCodes.polygons[2].strokeColor= "#000000" ;
					
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
			console.log("ds",groups ,"++" ,typeof data  ,"==", Storage,"==" , data );
			if(typeof data =="undefined" || !data ){ console.log("Here ");localStorage.setItem("group", JSON.stringify(groups) )};
			var str = "";
			str+="";		
			for(var i = 0; i<groups.length ; i++){
			str+="<tr>";	
			str+="<td>" + groups[i].id +"</td>";	
			str+="<td>" + groups[i].color +"</td>";	
			str+="<td>" + groups[i].title +"</td>";	
			str+="<td>" + groups[i].ZipCodes.join(", ") +"</td>";	
			str+="</tr>";
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
				var gpname=$("#GroupName").val();
				var gpcolor=$("#GroupColor").val();
				console.log("GP",gpname , gpcolor );

				 e = RandomColor.generate(), ZipAreasMap.polygons.forEach(function(t) {
					console.log(e);
					return t.setOptions({
						fillColor: e,
						strokeColor: e
					})
				})
			}),
		 mapProcess.render=function(saveZipCodes){
		 			boundries=[];
			for(var j = 0 ; j <saveZipCodes.boundry.length ; j++){
				var latlng=saveZipCodes.boundry[j].split("|");
				boundries.push(new google.maps.LatLng(latlng[0], latlng[1]));
			}

			var zipcode = saveZipCodes.zipcode;
			console.log(boundries ,"ff", zipcode);
		    e = RandomColor.generate();
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
		for(var i = 0; i<saveZipCodes.length ; i++){
			mapProcess.render(saveZipCodes[i]);
		/*	boundries=[];
			for(var j = 0 ; j <saveZipCodes[i].boundry.length ; j++){
				var latlng=saveZipCodes[i].boundry[j].split("|");
				boundries.push(new google.maps.LatLng(latlng[0], latlng[1]));
			}

			var zipcode = saveZipCodes[i].zipcode;
			console.log(boundries ,"ff", zipcode);
		    e = RandomColor.generate();
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
*/
		} 


		/* e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.714021, -73.997519), new google.maps.LatLng(40.708849, -73.996017), new google.maps.LatLng(40.712915, -73.976104), new google.maps.LatLng(40.719681, -73.97516), new google.maps.LatLng(40.724137, -73.992583)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10002", "opacity"),
					zipCode: "10002",
					active: this.isCurrent("10002", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.739705, -73.99081), new google.maps.LatLng(40.729451, -73.99662), new google.maps.LatLng(40.724323, -73.992519), new google.maps.LatLng(40.722956, -73.988759), new google.maps.LatLng(40.73492, -73.979871)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10003", "opacity"),
					zipCode: "10003",
					active: this.isCurrent("10003", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.706891, -74.016104), new google.maps.LatLng(40.703814, -74.017471), new google.maps.LatLng(40.704156, -74.005508), new google.maps.LatLng(40.704156, -74.00585), new google.maps.LatLng(40.706549, -74.012344)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10004", "opacity"),
					zipCode: "10004",
					active: this.isCurrent("10004", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.704156, -74.00585), new google.maps.LatLng(40.708941, -74.010293), new google.maps.LatLng(40.706549, -74.012344)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10005", "opacity"),
					zipCode: "10005",
					active: this.isCurrent("10005", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.708941, -74.010293), new google.maps.LatLng(40.709625, -74.009951), new google.maps.LatLng(40.710309, -74.011319), new google.maps.LatLng(40.706891, -74.016104), new google.maps.LatLng(40.706549, -74.012344)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10006", "opacity"),
					zipCode: "10006",
					active: this.isCurrent("10006", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.718171, -74.013028), new google.maps.LatLng(40.713385, -74.016446), new google.maps.LatLng(40.710309, -74.011319), new google.maps.LatLng(40.709625, -74.009951), new google.maps.LatLng(40.713385, -73.998671)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10007", "opacity"),
					zipCode: "10007",
					active: this.isCurrent("10007", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.732527, -73.97406), new google.maps.LatLng(40.73492, -73.979871), new google.maps.LatLng(40.722956, -73.988759)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10009", "opacity"),
					zipCode: "10009",
					active: this.isCurrent("10009", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.73492, -73.979871), new google.maps.LatLng(40.732527, -73.97406), new google.maps.LatLng(40.736287, -73.974402), new google.maps.LatLng(40.743123, -73.971668), new google.maps.LatLng(40.744149, -73.987733), new google.maps.LatLng(40.743465, -73.992177), new google.maps.LatLng(40.739705, -73.99081)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10010", "opacity"),
					zipCode: "10010",
					active: this.isCurrent("10010", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.729451, -73.99662), new google.maps.LatLng(40.739705, -73.99081), new google.maps.LatLng(40.743465, -73.992177), new google.maps.LatLng(40.752352, -74.008242), new google.maps.LatLng(40.742782, -74.009268), new google.maps.LatLng(40.731843, -74.001064)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10011", "opacity"),
					zipCode: "10011",
					active: this.isCurrent("10011", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.724323, -73.992519), new google.maps.LatLng(40.729451, -73.99662), new google.maps.LatLng(40.731843, -74.001064), new google.maps.LatLng(40.726716, -74.003115), new google.maps.LatLng(40.719538, -73.994228)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10012", "opacity"),
					zipCode: "10012",
					active: this.isCurrent("10012", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.719538, -73.994228), new google.maps.LatLng(40.726716, -74.003115), new google.maps.LatLng(40.726716, -74.015079), new google.maps.LatLng(40.718171, -74.013028), new google.maps.LatLng(40.713385, -73.998671), new google.maps.LatLng(40.714069, -73.997304)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10013", "opacity"),
					zipCode: "10013",
					active: this.isCurrent("10013", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.726716, -74.015079), new google.maps.LatLng(40.726716, -74.003115), new google.maps.LatLng(40.731843, -74.001064), new google.maps.LatLng(40.742782, -74.009268)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10014", "opacity"),
					zipCode: "10014",
					active: this.isCurrent("10014", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.747225, -73.968591), new google.maps.LatLng(40.752011, -73.981922), new google.maps.LatLng(40.748934, -73.983973), new google.maps.LatLng(40.744149, -73.987733), new google.maps.LatLng(40.743123, -73.971668)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10016", "opacity"),
					zipCode: "10016",
					active: this.isCurrent("10016", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.747225, -73.968591), new google.maps.LatLng(40.753378, -73.963122), new google.maps.LatLng(40.757822, -73.97782), new google.maps.LatLng(40.757138, -73.978162), new google.maps.LatLng(40.753378, -73.980897), new google.maps.LatLng(40.752011, -73.981922)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10017", "opacity"),
					zipCode: "10017",
					active: this.isCurrent("10017", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.753378, -73.980897), new google.maps.LatLng(40.76124, -74.001406), new google.maps.LatLng(40.760214, -74.003115), new google.maps.LatLng(40.756112, -74.006533), new google.maps.LatLng(40.748934, -73.983973), new google.maps.LatLng(40.752011, -73.981922)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10018", "opacity"),
					zipCode: "10018",
					active: this.isCurrent("10018", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.768076, -73.98158), new google.maps.LatLng(40.773203, -73.993886), new google.maps.LatLng(40.760214, -74.003115), new google.maps.LatLng(40.76124, -74.001406), new google.maps.LatLng(40.758505, -73.981239), new google.maps.LatLng(40.758847, -73.976795), new google.maps.LatLng(40.764316, -73.973035)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10019", "opacity"),
					zipCode: "10019",
					active: this.isCurrent("10019", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.757822, -73.97782), new google.maps.LatLng(40.758847, -73.976795), new google.maps.LatLng(40.758505, -73.981239), new google.maps.LatLng(40.757138, -73.978162)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10020", "opacity"),
					zipCode: "10020",
					active: this.isCurrent("10020", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.770127, -73.94774), new google.maps.LatLng(40.777647, -73.963122), new google.maps.LatLng(40.764658, -73.972351), new google.maps.LatLng(40.758163, -73.95902)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10021", "opacity"),
					zipCode: "10021",
					active: this.isCurrent("10021", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.757822, -73.97782), new google.maps.LatLng(40.753378, -73.963122), new google.maps.LatLng(40.758163, -73.95902), new google.maps.LatLng(40.764658, -73.972351), new google.maps.LatLng(40.764316, -73.973035), new google.maps.LatLng(40.758847, -73.976795)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10022", "opacity"),
					zipCode: "10022",
					active: this.isCurrent("10022", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.779356, -73.973719), new google.maps.LatLng(40.781407, -73.988075), new google.maps.LatLng(40.773203, -73.993886), new google.maps.LatLng(40.768076, -73.98158)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10023", "opacity"),
					zipCode: "10023",
					active: this.isCurrent("10023", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.788585, -73.966882), new google.maps.LatLng(40.808411, -73.96654), new google.maps.LatLng(40.817982, -73.962097), new google.maps.LatLng(40.781407, -73.988075), new google.maps.LatLng(40.779356, -73.973719)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10024", "opacity"),
					zipCode: "10024",
					active: this.isCurrent("10024", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.800549, -73.958337), new google.maps.LatLng(40.806018, -73.959362), new google.maps.LatLng(40.808411, -73.96654), new google.maps.LatLng(40.788585, -73.966882)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10025", "opacity"),
					zipCode: "10025",
					active: this.isCurrent("10025", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.803283, -73.944664), new google.maps.LatLng(40.806018, -73.959362), new google.maps.LatLng(40.800549, -73.958337), new google.maps.LatLng(40.796789, -73.949108), new google.maps.LatLng(40.800549, -73.946373)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10026", "opacity"),
					zipCode: "10026",
					active: this.isCurrent("10026", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.806018, -73.959362), new google.maps.LatLng(40.803283, -73.944664), new google.maps.LatLng(40.809436, -73.939879), new google.maps.LatLng(40.812854, -73.941929), new google.maps.LatLng(40.817298, -73.948082), new google.maps.LatLng(40.823109, -73.957995), new google.maps.LatLng(40.817982, -73.962097), new google.maps.LatLng(40.808411, -73.96654)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10027", "opacity"),
					zipCode: "10027",
					active: this.isCurrent("10027", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.777647, -73.942613), new google.maps.LatLng(40.782091, -73.960046), new google.maps.LatLng(40.777647, -73.963122), new google.maps.LatLng(40.770127, -73.94774)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10028", "opacity"),
					zipCode: "10028",
					active: this.isCurrent("10028", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.794054, -73.930991), new google.maps.LatLng(40.800549, -73.946373), new google.maps.LatLng(40.796789, -73.949108), new google.maps.LatLng(40.787902, -73.955602), new google.maps.LatLng(40.782774, -73.943639)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10029", "opacity"),
					zipCode: "10029",
					active: this.isCurrent("10029", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.823793, -73.94398), new google.maps.LatLng(40.817298, -73.948082), new google.maps.LatLng(40.812854, -73.941929), new google.maps.LatLng(40.820374, -73.936119)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10030", "opacity"),
					zipCode: "10030",
					active: this.isCurrent("10030", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.823793, -73.94398), new google.maps.LatLng(40.830287, -73.94022), new google.maps.LatLng(40.827894, -73.954577), new google.maps.LatLng(40.823109, -73.957995), new google.maps.LatLng(40.817298, -73.948082)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10031", "opacity"),
					zipCode: "10031",
					active: this.isCurrent("10031", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.827894, -73.954577), new google.maps.LatLng(40.830287, -73.94022), new google.maps.LatLng(40.836098, -73.934409), new google.maps.LatLng(40.842251, -73.930991), new google.maps.LatLng(40.850796, -73.946715)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10032", "opacity"),
					zipCode: "10032",
					active: this.isCurrent("10032", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.847036, -73.928598), new google.maps.LatLng(40.863102, -73.933726), new google.maps.LatLng(40.869938, -73.932358), new google.maps.LatLng(40.850796, -73.946715), new google.maps.LatLng(40.842251, -73.930991)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10033", "opacity"),
					zipCode: "10033",
					active: this.isCurrent("10033", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.869938, -73.932358), new google.maps.LatLng(40.863102, -73.933726), new google.maps.LatLng(40.860025, -73.918344)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10034", "opacity"),
					zipCode: "10034",
					active: this.isCurrent("10034", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.807385, -73.933384), new google.maps.LatLng(40.809436, -73.939879), new google.maps.LatLng(40.803283, -73.944664), new google.maps.LatLng(40.800549, -73.946373), new google.maps.LatLng(40.794054, -73.930991)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10035", "opacity"),
					zipCode: "10035",
					active: this.isCurrent("10035", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.757138, -73.978162), new google.maps.LatLng(40.758505, -73.981239), new google.maps.LatLng(40.76124, -74.001406), new google.maps.LatLng(40.753378, -73.980897)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10036", "opacity"),
					zipCode: "10036",
					active: this.isCurrent("10036", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.819349, -73.934068), new google.maps.LatLng(40.820374, -73.936119), new google.maps.LatLng(40.812854, -73.941929), new google.maps.LatLng(40.809436, -73.939879), new google.maps.LatLng(40.807385, -73.933384)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10037", "opacity"),
					zipCode: "10037",
					active: this.isCurrent("10037", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.704156, -74.00585), new google.maps.LatLng(40.704156, -74.005508), new google.maps.LatLng(40.707916, -73.999355), new google.maps.LatLng(40.714069, -73.997304), new google.maps.LatLng(40.713385, -73.998671), new google.maps.LatLng(40.709625, -74.009951), new google.maps.LatLng(40.708941, -74.010293)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10038", "opacity"),
					zipCode: "10038",
					active: this.isCurrent("10038", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.836098, -73.934409), new google.maps.LatLng(40.830287, -73.94022), new google.maps.LatLng(40.823793, -73.94398), new google.maps.LatLng(40.820374, -73.936119), new google.maps.LatLng(40.819349, -73.934068)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10039", "opacity"),
					zipCode: "10039",
					active: this.isCurrent("10039", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.847036, -73.928598), new google.maps.LatLng(40.860025, -73.918344), new google.maps.LatLng(40.863102, -73.933726)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10040", "opacity"),
					zipCode: "10040",
					active: this.isCurrent("10040", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.782774, -73.943639), new google.maps.LatLng(40.787902, -73.955602), new google.maps.LatLng(40.782091, -73.960046), new google.maps.LatLng(40.777647, -73.942613)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10128", "opacity"),
					zipCode: "10128",
					active: this.isCurrent("10128", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.703814, -74.017471), new google.maps.LatLng(40.706891, -74.016104), new google.maps.LatLng(40.710309, -74.011319), new google.maps.LatLng(40.713385, -74.016446)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10280", "opacity"),
					zipCode: "10280",
					active: this.isCurrent("10280", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		})*/
	}.call(this);
	// console.log("ss");