

<%--
Name: Shubham Prakash
Reg no: 11915803
Roll no: 33
--%>
<%@page contentType="text/html" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
<meta https-equiv="contentType" content="text/html; charset=UTF-8">
<title>Addition | 2D Array</title>
</head>
<body>
<h1>SUM OF TWO MATRICES</h1>
<% int i,j;%>
<% int a[][]={ {1,2,3},
{4,5,6},
{7,8,9}};%>
<%!int b[][]={ {9,8,7},
{6,5,4},
{3,2,1}};%>
<% int c[][]=new int[3][3];%>
<%
for(i=0;i<3;i++)
{
for(j=0;j<3;j++)
{
c[i][j]=a[i][j]+ b[i][j];
out.print(c[i][j]+" ");
}%>
<br/>
<%
}
%>
</body>
</html>