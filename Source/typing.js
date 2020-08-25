//shortcuts
var obj=new ActiveXObject("WScript.Shell");

//open
shortcut.add("Alt+o",function(){
  openfile();
});

//create
shortcut.add("Alt+r",function(){
  create();
});

//clear
shortcut.add("Ctrl+l",function(){
  clear();
});

//save
shortcut.add("Alt+s",function() {
  savesource();
});

//exec
shortcut.add("Ctrl+e",function(){
  exec();
});

//details
shortcut.add("Ctrl+d",function(){
  confirm('Batch Writer 1.0 Beta 5\n\n\nCopyright 2020 Sorakime.\nApache License 2のもとで公開されています。');
});

//close
shortcut.add("Ctrl+c",function(){
  window.close();
});

//hide
shortcut.add("Ctrl+h",function(){
  obj.SendKeys("%({ESC})");
  obj=null;
});


//keytyping

//tab
shortcut.add("Tab",function(){
  obj.SendKeys("  ");
});

//(
shortcut.add("Shift+0",function(){
  obj.SendKeys("{(}{ENTER}  {ENTER}{)}");
});

// "
shortcut.add("Shift+Tab",function(){
  obj.SendKeys('{"}{"}');
});
