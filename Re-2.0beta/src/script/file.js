var path;
function open() {
  try {
    path=prompt('パスを入力してください。');
    var f=new ActiveXObject('ADODB.Stream');
    f.Type=2;
    f.charset='Shift-JIS';
    f.LineSeparator=-1;
    f.Open();
    f.LoadFromFile(path);
    f.Position=0;
    while (!f.EOS)
      var t=f.ReadText(-1);
    if (t!=undefined) {
      document.getElementsByTagName('textarea')[0].value=t;
    } else {
      document.getElementsByTagName('textarea')[0].value='';
    }
    document.getElementsByTagName('title')[0].innerHTML=path+' - Batch Writer 2.0 Beta';
  } catch (err) {
    alert('エラーが発生しました。'+err);
  }
}
function save() {
  try {
    if (path!=undefined) {
      saveT(path);
      const obj=new ActiveXObject('WScript.Shell');
      obj.Run('..\\lcglite\\lclite.exe ../temp/convert.dat "'+path+'" CRLF', 0);
    } else if (path==undefined) {
      path=prompt('パスを入力してください。');
      var f=new ActiveXObject('ADODB.Stream');
      f.Type=2;
      f.charset='Shift-JIS';
      f.LineSeparator=-1;
      f.Open();
      f.Position=0;
      f.WriteText(document.getElementsByTagName('textarea')[0].value);
      f.SaveToFile(path, 1);
      const obj=new ActiveXObject('WScript.Shell');
      obj.Exec('..\\lcglite\\lclite.exe "'+path+'" "'+path+'" CRLF');
    }
  } catch (e) {
    alert('エラーが発生しました。'+e);
  }
}

function saveB(to){
  var f=new ActiveXObject('ADODB.Stream');
  f.Type=2;
  f.charset='shift_jis';
  f.LineSeparator=-1;
  f.Open();
  f.Position=0;
  f.WriteText(document.getElementsByTagName('textarea')[0].value);
  f.SaveToFile(to, 1);
}
