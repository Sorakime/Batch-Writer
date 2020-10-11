const fileobj=new ActiveXObject('Scripting.FileSystemObject');
var path;
function fileopen() {
  try {
    path=document.getElementById('filebtn').value;
    var file=fileobj.OpenTextFile(path, 1, true, -2);
    document.getElementById('mainform').innerHTML=file;
  } catch (e) {
    console.log('bug...');
  } finally {

  }
}
/*
 * これは、αリリースです。
 * 来年の1月までにはいろいろ公開して、正常に動作するように仕上げていきます。
 * 今回の目的は、ユーザの方にバージョン2.0がどのようなデザインになるかを体験してもらうためのものです。
 * ですので、これは保存はおろか、開くことすらできません。
 * 
 * 2020年10月11日 Sorakime
*/
