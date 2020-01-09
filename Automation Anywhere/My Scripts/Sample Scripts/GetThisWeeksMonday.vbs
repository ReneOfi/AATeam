'Get this weeks monday
monday = DateAdd("d",(WeekDay(Date())-2)*-1,Date())
WScript.StdOut.Write(monday)
