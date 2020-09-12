var file=new ActiveXObject("Scripting.FileSystemObject");
var shell=new ActiveXObject("Wscript.Shell");
var path;
function openfile() {
  path=prompt('開くファイルのパスを入力してください。');
  if (path!=null) {
    if (file.FileExists(path)) {
      var data=file.OpenTextFile(path,1,false,-2);
      var source=data.ReadAll();
      document.getElementById('sourceform').value=source;
      document.getElementById('title').innerHTML=path+' - Batch Writer by monochrome.'
    } else {
      alert('ファイルが読み取れない・見つかりませんでした。(102)');
    }
  } else {
    alert('ファイルのパスが指定されなかったため表示できませんでした。(101)');
  }
}
function savesource() {
  var savepath=file.OpenTextFile(path,2,true,-2);
  var form=document.getElementById('sourceform').value;
  savepath.Write(form);
}
function exec() {
  var runcmd='cmd.exe '+path;
  shell.Run(runcmd);
}
function clear() {
  document.getElementById('sourceform').value='@echo off';
  document.getElementById('title').innerHTML='Batch Writer by monochrome.';
  path=null;
}
function create() {
  path=prompt('ファイルを作るパスを入力してください。');
  if (path!=null) {
    file.OpenTextFile(path, 2, true, -2).Write(document.getElementById('sourceform').value);
  } else {
    alert('パスが入力されませんでした。(103)');
  }
}
