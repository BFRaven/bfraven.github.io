Gain conceptual understading of server side code.
Node.js and Express Servers and Routing MOST important concepts of entire program.

so study node.js Express and routing hard core. Find resources to get over the harder concepts.

SERVER - piece of hardware, machine and code that handles responces to a request and vice versa.
They live in dedicated hardwawre intented to handle ALL requests and responses. They mostly live on cloud platorms like WS Github, Google cloud heroku, etc.

CREATE A SERVER  - write code that will handle what the server wil do; even though you pay for serside hardware, you still need to write the code.
Setting up listeners, ports to begin listening for requests. URL parseing to handle user requests.
Route handling to direct the flow of traffic, logic; these are based o URLS keywords. Sending HTML JSON receive POSTS and server side logic to give the proper response.

server side code, visiting URL then given an html page.
visiting and API end-point and pars URL parameters to provide selective JSONS.
clicking invoice provides PDF.
image processing software, applies filter and saves new version.
google provides results relevant to your searches on other sites.

CLIENT - the computer or browser of user requesting a response from servers, terminal is an example of a client.

clients and servers communicate back and forth using a series of understood communications defined bu HTTP and HTTPS, these are known as transfer protocols. within these css, html, JSON,  JPG, JS are used to transfer the data.

CLient and Server can be conceptualized as two machines.


# **Instructions**

* Create a website with four routes:
  * Home
  * Favorite Foods
  * Favorite Movies
  * Favorite CSS Frameworks
* Each route should be triggered by a different URL.
* Each route should display an HTML page listing your favorite three things of each.
* Be sure to use `fs` to serve your HTML files.

## Bonuses
* Have your home page have links to all of your other pages.
* DRY up your code by only having a single `readFile`