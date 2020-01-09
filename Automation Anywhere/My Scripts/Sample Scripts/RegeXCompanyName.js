//Codigo Regex para encontrar nombre de empresa, Rene Munro

  var args = WScript.Arguments;
  var str=args.item(0);
  var patt = /^[.@&]?[a-zA-Z0-9 ]+[ !.@&()]?[ a-zA-Z0-9!()]+/;
  var result = str.match(patt);
  WScript.StdOut.WriteLine(result);
  






