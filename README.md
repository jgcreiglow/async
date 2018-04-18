# async + await
### overview
1. What does asynchronous mean? 
1. Why is it helpful?
1. This is great, what could go wrong? 
1. Promises promise to help you write cleaner code!
1. async/await can make it even cleaner fo you! 

#### JavaScript is a naturally asynchronous language

*This is usually super helpful. It means that you can call many functions at the same time, and they will render as they are completed - this gives you much faster load times!*

**node.js** and **React** are powerful because they can run a bunch of scripts simultaneously. We don't have to wait for one to finish before the next one begins. 

But sometimes, as with math, our order of operations is super important. 

What if we got ready for our day...asynchronously? 
![Gif of asynchronous day]
(https://media.giphy.com/media/8L1JIDQ4yoKcOyIrXH/giphy.gif)


## How do we manage asynchronous functions and make them run in order? 

*actually.. a few ways!*

### Call Backs
* a function that is passed as the last object of another function and runs when the first fucntion is complete
* overusing call backs can result in **_call back hell_**
  * when you are just using callbacks to make functions run in order, it can make your code unreadable
  * It becomes difficult to keep track of the scope of the variables you're using. 
 
 _for example_ 
 in the function below, start, we call `wordChoice();` at the end because we want it to run **_after_** we run the start function. Since we defined `wordChoice();` outside of the scope of this function, we won't have a nested call back hell, but our .js file is going to be long and we'll have to spend a lot of time jumping around in the document to see where the functions are written and where they're called.  
 
 ```
 function start() {
  correctGuess = 0;
  activeWordArray = [];
  guessedLetters = [];
  guessesLeft = 8;
  blanks = []

  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  document.getElementById("guessedLetters").innerHTML = guessedLetters;
  document.getElementById('starting').innerHTML = ("<h1>Press Any Letter To Start</h1>");

wordChoice();
}
```


### Promises

* makes readable synchronous code. 
* when writing the function, rather than running a callback within the first function, we add a promise to it! 
* just like promises we make in real life, code based promises like `.then()` and `.catch` promise that they will wait to run until the previous function is finished. 
   * the great thing about computers? _if we write good code, they **always** keep their promises_
   
 _for example_ 
 in the function below, we want to wait for our API to finish loading (`  .ajax({url: queryURL, method: "GET"})`) before we start looking through the data for matches to our query using `.then(function (response)`. 
 
 ```
 function displaygif() {

  var gif = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=3OdfHZxV3YlV0xljDy4IyVaniiiVSGFQ&limit=8";

  // call for button being clicked
  $
    .ajax({url: queryURL, method: "GET"})
    .then(function (response) {
      var results = response.data
      //div full of gifs
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div class='gif'>");
        //rating
        var rating = results[i].rating;
        var pOne = $("<p>").text("Rating: " + rating);

        var image = $("<img>")

        image.attr("src", results[i].images.fixed_height_still.url);
        //Attributes to flip from still to animated
        image.addClass("flip");
        image.attr("data-still", results[i].images.fixed_height_still.url);
        image.attr("data-animate", results[i].images.fixed_height.url);
        image.attr("data-state", "Still")

        //new gif to top of list
        $("#gifs-view").prepend(gifDiv);
        gifDiv.append(image);
        gifDiv.append(pOne);

      };
```
### Async/Await
