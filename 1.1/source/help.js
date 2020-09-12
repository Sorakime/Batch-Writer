function help1() {confirm('知っていると思いますが、Windows Bat(cmd)ファイルを作るときは、必ず最初に\n"@echo off"\nと入力しておきましょう。\nいちいち実行コマンドがプロンプトに表示されるためです。');}
function help2() {confirm('文字を出力するときには、bashと同様に\n"echo"\nを使用します。そのあとにクォーテーションなしで入力します。これには変数も設定できますが、\n"%"\nのあとに入力する必要があります。');}
function help3() {confirm('変数を設定するには、Apple Scriptと同様\n"set 変数名=文字列"\nとします。クォーテーションは必要ありません。計算した結果も代入できますし、日本語などの文字列も問題なく代入可能です。');}
function help4() {confirm('条件分岐をするとき、基本は\n"if文"\nを使用します。以下のように書くことができます。\n"if 条件 (真のときに動かすコマンド) else (偽の時に行うコマンド)"\nとなります。JavaScriptなどとは少し違う書き方をします。\n説明が長いので詳細はネットで');}
function help5() {confirm('もう一つの条件分岐やループとして、\n"goto"\nを使用します。Go Toキャンペーンではないです。まぁGo Toの意味ですけど。\nこれはラベル(:から始まるやつ)と組み合わせて使用し、\n":label\necho label test\n goto :label"\nというように使用します。');}
function help6() {confirm('ループをするには、基本として\n"for文"\nを使用します。\nfor文の書式は、\n"for /オプション %%アルファベット1つ in (ループの対象) do (\nループ中に行うコマンド\n)"\nというようになります。');}
function help7() {confirm('ここでは、引数(引数)を扱う方法を記述して言います。\n引数は、第一引数(起動するためのパス)で\n"%~0"\nとなり、第二引数以降も同様に0が増えていきます。\nこれは変数として扱うことができます。');}
function help8() {confirm('表示されている画面をクリアするには、\n"cls"\nを使用します。一度けしたプロンプトは戻すことは不可能です。');}
function help9() {confirm('実行中のウィンドウのタイトル(上にある白い棒の中の文字列)を変えるには、\n"Title"\nコマンドを使用します。Titleの後には、変更したい名前を書きます。');}
function help10(){confirm('ほかのバッチファイルを呼び出すには、\n"call"\nコマンドを使用します。具体的には、\n"call ドライブ:パス パラメータ"\nと使用します。ちなみに呼び出されたファイルに\n"exit"\nコマンドが書かれている場合、終了した後に呼び出し元のバッチファイルが実行されます。');}
