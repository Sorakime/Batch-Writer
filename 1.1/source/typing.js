//shortcuts
var obj=new ActiveXObject("WScript.Shell");
obj.SendKeys('{DOWN}{DOWN}');
//open
shortcut.add("Ctrl+o",function(){
  openfile();
});
//create
shortcut.add("Ctrl+r",function(){
  create();
});
//clear
shortcut.add("Ctrl+l",function(){
  clear();
});
//save
shortcut.add("Ctrl+s",function() {
  savesource();
});
//exec
shortcut.add("Alt+e",function(){
  exec();
});
//details
shortcut.add("Alt+d",function(){
  confirm('Batch Writer 1.0 Beta 5\n\n\nCopyright 2020 Sorakime.\nApache License 2のもとで公開されています。');
});
//close
shortcut.add("Alt+c",function(){
  window.close();
});
//hide
shortcut.add("Alt+h",function(){
  obj.SendKeys("%({ESC})");
});

//keytyping
//tab
shortcut.add("Tab",function(){
  obj.SendKeys("  ");
});
//(
shortcut.add("Shift+0",function(){
  obj.SendKeys("{(}{ENTER}  {ENTER}{)}{UP}{END}");
});
// "
shortcut.add("Shift+F1",function(){
  obj.SendKeys('{"}{"}{LEFT}');
});
