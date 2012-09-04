Hackers@Berkeley Intro Workshop 
================================
This is list of definitions and useful tips that could help you!
All the code in this document is in javascript

##Simple Programming Review

###Functions
A function is an fundemental block of programming that DOES something. Think of functions in programs just like you think of functions in math. f(x). f by itself is the function, x is the argument, and f(x) is the value that the function spits out. Please note the difference between the three. Say that f(x) squares things. f would be the abstract notion of squaring something. x would be whatever value you would want to square, and f(x) would be the value squared. 

In programming when you are writing out a function, you write return before the value you want the function to spit out.
```function square(x):
        return x*x 

>square(4) 
16
```

###Variables
Another basic block of programs are variables. Again this is very similar to variables in math. Variables are just containers for THINGS in programs, they could hold numbers (like they do in math), but they could also hold functions. Think about the square example. We don't want to keep referring to the square function as "the square function" so we can call that f. Variables can hold functions, numbers, arrays and much more.

Also in javascript, all variables are prepended by the keyword var.
```
function square(x):
        return x*x 

>var y = square(2)
>y
4
>var n = square 
>n(9) 
81
```
Array 
======

Arrays are the last major block of programming you will need to understand for today. Arrays are just lists of things in programs. They usually follow the syntax [x,y,z]. Arrays can also be stored as variables. In programming we start counting at 0, so the indices for array elements start at 0. So x is actually the 0th element of the array! The way you acces an element of an array is: array[index]. So say the array a was an array [x,y,z]. a[0] would equal x, a[1] would equal z and so on.

```
> var ar = [1,2,3,4];
> ar[2]
3 
>ar[1] 
2 
>ar[0] 
1

```

##Jargon 

Hack - To make or create something cool and out of the ordinary.
Hardware Hacking - Hacking primarily dealing with electronics and circuit boards 
Software Hacking - Hacking primarily dealing with computer programs, the web and the operating system.

Server - A computer that gives you stuff, this could be webpages, a video game room, or your grades. (it serves you stuff... get it?) 

Client - Basically any device that receives stuff from servers, anything that receives data, and demands data from servers (i.e browsers, cell phones, xbox etc.) 

Request - A message that the client sends to the server in order to receive stuff back. (The client is requesting information... get it?) 

Front-End - Usually the type of programs and code that sit on the client, like html (for web pages), or any sort of interface that lets you make requests to the server.

Back-End - Usually the type of programs and code that sit on the server. These programs do things like number crunch, employ complex algorithms in order to get the data that the client requested.

HTML - Hyper Text Markup Language, the ubiquitous language of the web, a primarily static language that the browser reads, understands and displays for you. This language lets you make things look nice (change font size, insert pictures etc.) 

Javascript - A language that assists HTML with doing cool stuff like actually making things change on the page. Remember HTML is static.

Abstraction - Very very very important concept that states that one does not need to understand the intercracies of something to use it. It helps us hack because we build functionality on top of other people's code without actually undertstanding how their code works. We only need to know what it does!

API - Application Programming Inteface. With the use of abstraction companies and other hackers provide API's to their program which are basically a set of rules and functions that the company/hacker provides so that other people can write programs that use that company/hacker's program's functionality.


Sorry for all the typos - Wrote this at 4 am. 

