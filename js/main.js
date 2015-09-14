var display = function () {
  $('#tagInput').keypress(function (e) {
    if (e.keyCode == 13) {
      var url = $('#urlInput').val();
      var text = $('#tagInput').val();
      var bookmarks = "";
      var bookmarks = bookmarks + '<div><a href="http://www.'
      + url + '" target="_blank">' + url + '</a> #' + text + '</div>';
      $("#bookmarkDiv").append(bookmarks);
      $('#tagInput').val('');
      $('#urlInput').focus().val('');
  }
 })
};
display();