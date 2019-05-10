1.  Explain the differences between `client-side routing` and `server-side routing`.

    In client-side routing, when a user clicks a link, the URL changes and the adjustment of the URL results in a changed state. The whole page won't refresh and it is generally faster with smooth transitions.

    In server-side routing, clicking a link will request a new page from the server, resulting in a whole new document being served to the user. It causes the whole page to refresh because a new GET request is sent to the server. It will only request the data that's needed.


2.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

    Get, Post, Put, Delete


3.  Mention three tools we can use to make AJAX requests

    Axios, jQuery AJAX, and the browser built-in window.fetch.