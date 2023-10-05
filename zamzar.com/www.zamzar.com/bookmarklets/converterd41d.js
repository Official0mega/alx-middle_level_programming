var t="Click to convert this file with Zamzar";
var s="https://www.zamzar.com/images/convert-file-btn.jpg";
var s2="https://www.zamzar.com/images/convert-file-btn-red.jpg";
var v="https://www.zamzar.com/images/convert-it-btn-bg.jpg";
var l="https://www.zamzar.com/url/?u=";
var d="Convert File!";
var e="To convert videos with Zamzar please uninstall the Google Chrome YouTube App - To do this:\n\n1 - Open a new tab and click \"Apps\" at the bottom of the browser\n\n2 - Right click the YouTube app and select \"Remove from Chrome\"\n\n3 - Click uninstall\n\n4 - Restart the web browser";
var f=0;
var n="";
var re=/#/;
var u=0;
var pw=0;
if(navigator.appVersion.toLowerCase().indexOf("mac")!=-1) pw=2;
var ph=5;
var pb=6;
if(navigator.userAgent.toLowerCase().indexOf("opera")!=-1) ph=4,pb=4;
var sArray=new Array("amr","m2ts","xml","aifc","caf","oga","m4b","f4v","264","mdi","midi","mid","aiff","aif","cr2","nef","eml","msg","cdr","ai","svg","mkv","odg","azw3","m4r","ogg","xps","ppsx","djvu","3gpp","psd","mts","3ga","azw","webm","ts","webp","cbz","cbr","cbc","chm","epub","fb2","lit","lrf","mobi","prc","pdb","pml","rb","tcr","mpp","mod","emf","pps","vsd","jpg","gif","bmp","tiff","ps","aac","mp3","m4a","wav","flac","wma","ac3","au","3gp","3g2","mov","mp4","m4v","mpg","avi","flv","wmv","gvi","doc","rtf","pdf","xls","csv","ppt","odt","ods","odp","ram","ra","rm","rmvb","vob","docx","xlr","xlsx","txt","wks","pptx","7z","tar.bz2","cab","lzh","rar","tar","tar.gzh","yz1","zip","pages","pages.zip","numbers","numbers.zip","key","key.zip");
function checkURL(){var h=location.href;if(h.indexOf("about:blank")!=-1){alert(e)};if((h.indexOf("youtube.")!=-1&&(h.indexOf("/watch")!=-1||h.indexOf("/user")!=-1||h.indexOf("#!v=")!=-1||h.indexOf("playnext")!=-1))||h.indexOf("youtu.be/")!=-1||h.indexOf("video.google.co.uk/videoplay")!=-1||h.indexOf("video.google.com/videoplay")!=-1||h.indexOf("putfile.com")!=-1||h.indexOf("break.com/index")!=-1||(h.indexOf("dailymotion.com")!=-1 && (h.indexOf("/cluster")!=-1 || h.indexOf("/relevance")!=-1))||h.indexOf("metacafe.com/watch")!=-1||h.indexOf("ifilm.com/video")!=-1||h.indexOf("grouper.com/video/MediaDetails.aspx?id=")!=-1||h.indexOf("blip.tv/file/")!=-1||h.indexOf("vids.myspace.com/")!=-1||h.indexOf("revver.com/watch/")!=-1||h.indexOf("www.apple.com/trailers/")!=-1||h.indexOf("spikedhumor.com/articles/")!=-1||h.indexOf("teachertube.com/viewVideo")!=-1||h.indexOf("tinypic.com/player.php?v=")!=-1||h.indexOf("tangle.com/view_video")!=-1){document.location=l+h;u=1;}}
function checkLinks(){var i,h,a,e,is;if(location.href.indexOf("#convertFile")==-1) {for(i=0;i<document.links.length;i++){x=document.links[i];e=getFileExtension(x.href).toLowerCase();is=isFileSupported(e);if(is&&!exemptLinks(x.href)){if(f==0) n="convertFile";a="<br/><a href='"+l+unescape(x.href)+"' name='"+n+"'title='"+t+"' target='_"+i+"' onmouseover=document.getElementById(\"zami"+i+"\").src=\""+s2+"\" onmouseout=document.getElementById(\"zami"+i+"\").src=\""+s+"\"><img src='"+s+"' id='zami"+i+"' width='121' height='27' border='0'/></a><br/>";h=x.parentNode.innerHTML;var start=h.lastIndexOf(l);if(start==-1) {var insertNo=getMax(h.indexOf("</a>",start+4),h.indexOf("</A>",start+4));}else {var insertNo=getMax(h.indexOf("</a>",start+4),h.indexOf("</A>",start+4));insertNo=getMax(h.indexOf("</a>",insertNo+4),h.indexOf("</A>",insertNo+4));}newa=h.insertAt(insertNo+4,a);x.parentNode.innerHTML=newa;f=1;  
}}if(f==1) {snapToFirstLink();s2i=new Image();s2i.src=s2;}
else if(confirm("Zamzar could not detect any files to convert\n\nWould you like to see a full list of the types of file that we support?"))document.location="https://www.zamzar.com/conversionTypes.php";}}
function isFileSupported(ext) {var isSupported=false;for(var j=0; j<sArray.length; j++) {if(ext==sArray[j]) isSupported = true;}return isSupported;}
function getFileExtension(u) {var ext="";var extI=u.lastIndexOf('.');if (extI != -1) {ext=u.slice(u.lastIndexOf('.')+1);}return ext;}
function exemptLinks(li) {if (li.indexOf("q=related:")!=-1||li.indexOf("q=cache:")!=-1||li.indexOf(l)!=-1||li.indexOf("ftp://")!=-1||li.indexOf("mailto:")!=-1) return true;else return false;}
function snapToFirstLink() {document.location=location.href.replace(re,"")+"#"+n;}
String.prototype.insertAt=function(loc,strChunk){return (this.valueOf().substr(0,loc))+strChunk+(this.valueOf().substr(loc))}
function getMax(n1, n2){if (n1 < n2){return n2}else {return n1}}
checkURL();
if(u!=1) checkLinks();
