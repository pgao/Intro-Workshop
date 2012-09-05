Hackers@Berkeley Intro Workshop 
================================
Helpful info, terminology, inspiration.




Welcome to Intro to Hacking.  I am Peter Gao.  This is the first of many workshops we'll be hosting throughout the year: if you want to teach a workshop, talk to Sharad and send an email to workshops@hackersatberkeley.com.  If you want to get in on future workshops, join the Hackers@Berkeley Facebook group (https://www.facebook.com/groups/hackberkeley/) and you'll see all the event pages when they come up.

Now I'd like to start by quickly explaining what we mean when we say “hack”.  Hacking is NOT breaking into computers.  We are not a collective of internet anarchists who raid government websites for the lulz.  The closest we have is Hai, one of our team members, who is a hippie.  When we say hacking, we mean making things.  We mean taking something that already exists and making it better.  Hacking is utilising your skills to create, not destroy.

And there have been many hackers who have built things.  Mark Zuckerberg is a hacker.  He built Facebook.  Richard Stallman is a hacker.  He began the free software movement and has a sick beard.  And Steve Wozniak was the original, most badass hacker at Berkeley.  He built Apple  Computers.  Hacking is power.  And probably 80% of the startups in the Valley today originated from bored college students tinkering on a Saturday night.

The aim of this workshop is to introduce you to what a hack is.  The rest of the workshops will make you dangerous.  We will give you the tools and the means to make your ideas into real things, so the only thing that limits you will be your imagination.  Our job is to make you all into cold, hard, mean, green motherfuckers who could drop out any time, make the next Apple or Google or Dropbox, and spread the hacker ethos onto the next generation.  

It starts now.





##Jargon

Hack - To make or create something cool and out of the ordinary.

Different sorts of hacking

Software Hacking - Hacking primarily dealing with computer programs, the web, and your own computer.  

The most popular subdivision is web programming (making web applications like Facebook, etc.), though stuff like mobile development (Android, iOS), artificial intelligence, and hardcore computer science sometimes shows up.

Hardware Hacking - Hacking primarily dealing with electronics, circuit boards, and mechanical stuff.

Biology: http://diybio.org/

How the web works (servers, clients)
    http://www.freesoftwaremagazine.com/files/nodes/1237/x1fserver.jpg
    Your computer is a client.  It is a client because it sends requests to other, bigger computers (say, Facebook’s computers) for information: in this case, Facebook’s home page.  Facebook’s bigass computers, safely hidden away in whatever nuclear-apocalypse-proof bunker they build these days, is a server.  This computer is called a server because it serves a web page back to the client, your computer.

Server - A computer that sends information to and receives requests from your computer, usually in the form of web pages. (it serves you stuff)

Client - Any device that demands and receives data from servers (i.e browsers, cell phones, xbox etc.)

Request - A message that the client sends to the server asking for content.  (The client is requesting information)

Front-End - Usually the type of programs and code that sit on the client, like html (for web pages), or any sort of interface that lets you make requests to the server.  Usually, this is defined as the stuff that a user sees, and involves a lot more visual design than back-end content.

Back-End - Usually the type of programs and code that sit on the server. These programs do things like crunch numbers and employ complex algorithms in order to get the data that the client requested.

HTML - Hyper Text Markup Language, the ubiquitous language of the web, a primarily static (meaning: it doesn’t change its own content) language that the browser reads, understands and displays for you. This language lets you build web pages. (change font size, insert pictures etc.)

Javascript - A language that assists HTML with doing cool stuff by making things change on the page. A separate language is required because HTML is static.

Abstraction - An important concept: it means that you don’t need to know exactly how something works to use it.  You might now know how Lego blocks are built or what they are made of, but you can still build stuff with it.  This concept helps us hack because we build functionality on top of other people's code without needing to understand exactly how their code works. We only need to know what it does!

API - Application Programming Inteface. If tools that hackers use are lego blocks, then APIs are the connections that hold the Legos together.  They are specifications and rules that allow programs you write to interact with, say, the programs that another company writes or the servers a company runs on.  This allows you to write programs that can interact with another person/service/company/program and borrow their functionality.  Farmville, for example, is a program written by people at a company called Zynga, but is built to use the services of Facebook thanks to Facebook’s open API.




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




Remember: past experience helps, but isn’t the most important, since technology changes so quickly.  Enthusiasm and perseverance means more.  Be prepared to learn a lot, read a lot of documentation, and most importantly, have fun.