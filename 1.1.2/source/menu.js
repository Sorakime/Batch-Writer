var path;
var shell=new ActiveXObject('Wscript.Shell');
function exec() {
  shell.Run('cmd');
}
function create() {
  path=prompt('ファイルを作るパスを入力してください。');
  if (path!=null) {
    var file=new ActiveXObject('Scripting.FileSystemObject');
    file.OpenTextFile(path, 2, true, -2).Write(document.getElementById('sourceform').value);
  }
}
function openfile() {
  path=prompt('パスを入力してください。');
  try {
    var f=new ActiveXObject('ADODB.Stream');
    f.Type=2;
    f.charset="Shift-JIS";
    f.LineSeparator = -1;
    f.Open();
    f.LoadFromFile(path);
    f.Position=0;
    while (!f.EOS)
      var txt=f.ReadText(-1);
    document.getElementById('sourceform').value=txt;
    f.Close();
    document.getElementById('title').innerHTML=path+' - Batch Writer by monochrome.';
  } catch (e) {
  }
}
function savesource() {
  try {
    var fff=new ActiveXObject('ADODB.Stream');
    var obj=new ActiveXObject('Wscript.Shell');
    fff.Type=2;
    fff.charset="Shift-JIS";
    fff.LineSeparator = -1;
    fff.Open();
    fff.Position=0;
    if (path!=null) {
      fff.WriteText(document.getElementById('sourceform').value);
      fff.SaveToFile('temp/temp.dat', 2);
      obj.Exec('lcgulite/lclite.exe temp/temp.dat "'+path+'" CRLF');
    } else {
      path=prompt('パスを入力してください。');
      fff.WriteText(document.getElementById('sourceform').value);
      fff.SaveToFile(path, 2);
    }
  } catch (e) {
    alert('失敗しました。');
  }
}
