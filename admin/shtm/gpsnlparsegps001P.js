<!-- author, publisher, copyright ARiS websitewerk - www.websitewerk.nl-->
function checkchar(a){if("N"==a||"E"==a||"n"==a||"e"==a||"O"==a||"o"==a)return"signpositive";if("S"==a||"W"==a||"s"==a||"w"==a||"Z"==a||"z"==a||"-"==a||"_"==a)return"signnegative";if("0"==a||"1"==a||"2"==a||"3"==a||"4"==a||"5"==a||"6"==a||"7"==a||"8"==a||"9"==a)return"value";if(" "==a)return"space";if("."==a)return"point";if(","==a)return"comma"}
function latlongdd(a){longlast=longfirst=latlast=latfirst=0;state="start";longfactor=latfactor=1;for(index=0;index<a.length&&51>index&&"longready"!=state;)result=checkchar(a.substr(index,1)),"start"==state?("signnegative"==result&&(latfactor=-1),"value"==result&&(state="latfound",latfirst=index)):"latfound"==state?"value"!=result&&"point"!=result&&(state="latready",latlast=index-1):"latready"==state&&("signnegative"==result&&(longfactor=-1),"value"==result&&(state="longfound",longfirst=index)),"longfound"==
state&&("value"!=result&&"point"!=result?(state="longready",longlast=index-1):index==a.length-1&&(state="longready",longlast=index)),index++;"longready"==state?(latitude=parseFloat(a.substr(latfirst,latlast-latfirst+1)),latitude*=latfactor,longitude=parseFloat(a.substr(longfirst,longlast-longfirst+1)),longitude*=longfactor):alert("onbekend formaat")}
function latlongddmm(a){long2last=long2first=long1last=long1first=lat2last=lat2first=lat1last=lat1first=0;state="start";longfactor=latfactor=1;for(index=0;index<a.length&&51>index&&"longready"!=state;)result=checkchar(a.substr(index,1)),"start"==state?("signnegative"==result&&(latfactor=-1),"value"==result&&(state="lat1found",lat1first=index)):"lat1found"==state?"value"!=result&&(state="lat1ready",lat1last=index-1):"lat1ready"==state?"value"==result&&(state="lat2found",lat2first=index):"lat2found"==
state?"value"!=result&&"point"!=result&&(state="latready",lat2last=index-1):"latready"==state?("signnegative"==result&&(longfactor=-1),"value"==result&&(state="long1found",long1first=index)):"long1found"==state?"value"!=result&&(state="long1ready",long1last=index-1):"long1ready"==state&&"value"==result&&(state="long2found",long2first=index),"long2found"==state&&("value"!=result&&"point"!=result?(state="longready",long2last=index-1):index==a.length-1&&(state="longready",long2last=index)),index++;"longready"==
state?(latitude=parseFloat(a.substr(lat1first,lat1last-lat1first+1)),latitude+=parseFloat(a.substr(lat2first,lat2last-lat2first+1))/60,latitude*=latfactor,latitude=latitude.toFixed(5),longitude=parseFloat(a.substr(long1first,long1last-long1first+1)),longitude+=parseFloat(a.substr(long2first,long2last-long2first+1))/60,longitude*=longfactor,longitude=longitude.toFixed(5)):alert("onbekend formaat")}
function latlongddmmss(a){long3last=long3first=long2last=long2first=long1last=long1first=lat3last=lat3first=lat2last=lat2first=lat1last=lat1first=0;state="start";longfactor=latfactor=1;for(index=0;index<a.length&&51>index&&"longready"!=state;)result=checkchar(a.substr(index,1)),"start"==state?("signnegative"==result&&(latfactor=-1),"value"==result&&(state="lat1found",lat1first=index)):"lat1found"==state?"value"!=result&&(state="lat1ready",lat1last=index-1):"lat1ready"==state?"value"==result&&(state=
"lat2found",lat2first=index):"lat2found"==state?"value"!=result&&(state="lat2ready",lat2last=index-1):"lat2ready"==state?"value"==result&&(state="lat3found",lat3first=index):"lat3found"==state?"value"!=result&&"point"!=result&&(state="latready",lat3last=index-1):"latready"==state?("signnegative"==result&&(longfactor=-1),"value"==result&&(state="long1found",long1first=index)):"long1found"==state?"value"!=result&&(state="long1ready",long1last=index-1):"long1ready"==state?"value"==result&&(state="long2found",
long2first=index):"long2found"==state?"value"!=result&&(state="long2ready",long2last=index-1):"long2ready"==state&&"value"==result&&(state="long3found",long3first=index),"long3found"==state&&("value"!=result&&"point"!=result?(state="longready",long3last=index-1):index==a.length-1&&(state="longready",long3last=index)),index++;"longready"==state?(latitude=parseFloat(a.substr(lat1first,lat1last-lat1first+1)),latitude+=parseFloat(a.substr(lat2first,lat2last-lat2first+1))/60,latitude+=parseFloat(a.substr(lat3first,
lat3last-lat3first+1))/3600,latitude*=latfactor,latitude=latitude.toFixed(5),longitude=parseFloat(a.substr(long1first,long1last-long1first+1)),longitude+=parseFloat(a.substr(long2first,long2last-long2first+1))/60,longitude+=parseFloat(a.substr(long3first,long3last-long3first+1))/3600,longitude*=longfactor,longitude=longitude.toFixed(5)):alert("onbekend formaat")}
function XYm(a){Ylast=Yfirst=Xlast=Xfirst=0;state="start";Yfactor=Xfactor=1;for(index=0;index<a.length&&51>index&&"Yready"!=state;)result=checkchar(a.substr(index,1)),"start"==state?("signnegative"==result&&(Xfactor=-1),"value"==result&&(state="Xfound",Xfirst=index)):"Xfound"==state?"value"!=result&&"point"!=result&&(state="Xready",Xlast=index-1):"Xready"==state&&("signnegative"==result&&(Yfactor=-1),"value"==result&&(state="Yfound",Yfirst=index)),"Yfound"==state&&("value"!=result&&"point"!=result?
(state="Yready",Ylast=index-1):index==a.length-1&&(state="Yready",Ylast=index)),index++;"Yready"==state?(Xvalue=parseFloat(a.substr(Xfirst,Xlast-Xfirst+1)),Xvalue*=Xfactor,Yvalue=parseFloat(a.substr(Yfirst,Ylast-Yfirst+1)),Yvalue*=Yfactor):alert("onbekend formaat");7E3<=Xvalue&&3E5>=Xvalue&&289E3<=Yvalue&&629E3>=Yvalue?(latitude=RD2lat(Xvalue,Yvalue),longitude=RD2lng(Xvalue,Yvalue)):alert("buiten bereik")};