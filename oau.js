/** 
 * Process string with multiple links.
 *
 * Navigate to respective pages.  
 */

//TODO: get rid of form
//TODO: chek array for empty values and if is it url or not
//TODO: put all to 1 grid
//TODO: refresh button
//TODO: stylish look
//TODO: refactor css to sass

/** Process Callback upon DOM content loaded. */
var domReady = function(callback) {
    'use strict';
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
        callback();
    } else {
        document.addEventListener('DOMContentLoaded', callback);
    }
};

domReady(function() {
    'use strict';

    /** Append a link fetched from parsed string. */
    var addLink = function(arg) {
		var newDiv = document.createElement("div");
		newDiv.setAttribute("class", "item-3");
		var newA = document.createElement("a");
		newA.href = arg;
		newA.innerHTML = arg;
		newA.setAttribute("target", "target='_blank'");
		newDiv.appendChild(newA);
		document.querySelector(".grid-2").appendChild(newDiv);
	}

	document.querySelector("form").addEventListener("submit", function(event){
		  event.preventDefault();
			var arr = document.getElementById('textInput').value.split("|");
			arr.forEach(function(i){
				window.open(i, '_blank');
				addLink(i);
			});
	});
});