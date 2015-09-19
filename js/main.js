var urlList = {
    search: ["google.com", "yahoo.com"],
    social: ["facebook.com", "twitter.com"],
    me: ["valeriemettler.com"]
};
//var urlList = {"google.com":"search", "yahoo.com":"search", "facebook.com":"social"};

//var bookmarks = "";
//var allUrls =[];
var displayAll = function() {
    $('#bookmarkDiv').html("");
    for (var name in urlList) {
        //console.log(name); //prints tag names search and social
        //console.log(urlList[name]); //prints arrays of urls: ["google.com", "yahoo.com"], ["facebook.com"]
        //console.log(urlList[name][0]); //prints google.com and facebook.com

        for (var i = 0; i < urlList[name].length; i++) {
            //console.log(urlList[name].length); //the number of elements in each url array (2, 2, 1)
            //allUrls.push(urlList[name][i]);
            // console.log(allUrls);
            //console.log(urlList[name][i]); //prints all urls

            //*****old display url + tag
            //   bookmarks = bookmarks + '<div class="dombookmark"><a href="http://www.'
            // + urlList[name[i]] + '" target="_blank">' + urlList[name][i] + '</a> #' + name + '</div>';


            //sorting by tag display:
            var x = "";
            for (var name in urlList) {
                x = x + '<div><br><div>#' + name + '</div>';

                for (var i = 0; i < urlList[name].length; i++) {
                    //console.log(urlList[name].length);
                    x = x + '<li><a href="#">' + urlList[name][i] + '</a></li></div>';

                }

            }

        }
    }
    $("#bookmarkDiv").html(x);
    //return allUrls;
}
displayAll();
//console.log(allUrls); // prints ["google.com", "yahoo.com", "facebook.com"]


var display = function() {
    $('#tagInput').keypress(function(e) {
        if (e.keyCode == 13) {
            var url = $('#urlInput').val();
            var text = $('#tagInput').val();


            if (text in urlList) {
                urlList[text].push(url);
            } else {
                urlList[text] = [url];
            }

            //old display
            // bookmarks ='<div class="dombookmark"><a href="http://www.'
            // + url + '" target="_blank">' + url + '</a> #' + text + '</div>';
            // $("#bookmarkDiv").append(bookmarks);

            //sorting by tag display:
            var x = "";
            for (var name in urlList) {
                x = x + '<div><br><div>#' + name + '</div>';

                for (var i = 0; i < urlList[name].length; i++) {
                    //console.log(urlList[name].length);
                    x = x + '<li><a href="#">' + urlList[name][i] + '</a></li></div>';

                }

            }


            $("#bookmarkDiv").html(x);
            //return allUrls;

            $('#tagInput').val('');
            $('#urlInput').focus().val('');
            console.log(urlList);
        }
    })


};
display();


//Math.floor(Math.random() * max) + min
//1.create a function that console.logs a random number between 0 and 10 everytime you click roulette in a fiddle
//2. print the url corresponding to the random number (0 and length of list of urls)
//3. take user to the url corresponding to the random number
var roulette = function() {
    $('#button').on('click', function() {
        //print the url corresponding to the random number (0 and length of list of urls)
        var b = urlList[getRand(0, urlList.length)];
        //var b = getRand(3, 12);
        console.log(b);
        window.location = 'http://www.' + b;
    });
}
roulette();

var getRand = function(min, max) {
    if (max < min) {
        var t = min;
        min = max;
        max = t;
    }
    return Math.floor(Math.random() * max) + min;
}