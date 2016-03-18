#Event Listeners

##Links
* [Repo on GitHub](https://github.com/jv13/hw_listeners_vitrano_jen)

##Resources
* [Castle Image:](http://fineartamerica.com/featured/the-magic-kingdom-castle-on-a-beautiful-summer-day-horizontal-thomas-woolworth.html) The castle image link was used from this website.
* [Magic Kingdom content:](https://en.wikipedia.org/wiki/Magic_Kingdom) The content in the paragraph tag about Magic Kingdom came from this website.
* [Event listener examples:](http://www.w3schools.com/js/js_htmldom_eventlistener.asp) I used this site's examples to come up with my own even listeners.
* [Resize event listener example:](http://www.w3schools.com/jsref/event_onresize.asp) I used this site as an example to help me with the resize event listener in the custom branch.
* [Form branch:] (http://www.w3schools.com/html/html_forms.asp) This website was used to help with the form branch so that I did not incorrectly account for elements.

##Comments
* This was a challenging assignment for me.  The listener branch was actually the branch I had the hardest time with JavaScript wise.  I was unable to get the "x" or number of clicks to only increment when the user clicked on the h1 while appending the new paragraph.  I was able to get them separately either when the user clicked the h1, the "This is click number x" appeared and then with each click the number x went up.  Or as in the case of how I left the branch the whole paragraph repeats and the number x goes up with every click.
* The customs branch was the hard in the sense of I had no idea which event listeners to use.  
* Originally in the customer branch, when I had the user mouse over the h2 I had the "document.getElementById( 'mk' ).innerHTML = 'Magic Kingdom is my favorite park!';" set to "+=".  I could not figure out why every time the user moused over the h2 that the text kept repeating and just kept going.  I then thought to try and do a remove event listener with a mouse out (looking to w3schools for help, and it became a mess.  I went on to fix another part of the assignment and came back to this and decided to remove the "+", and it worked! I was no repeating.
