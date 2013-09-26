var app = {
    initialize: function ()
    {
        this.bind();
    },
    bind: function ()
    {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function ()
    {
        // This is an event handler function, which means the scope is the event.
        // So, we must explicitly called `app.report()` instead of `this.report()`.
        app.connect('deviceready');
    },
    connect: function (id)
    {
 //       io.Socket.prototype.isXDomain = function () { return false; };

        var socket = io.connect('http://pihub-robsway.rhcloud.com:8080/piClients');

        socket.on('onTestStarted', app.onTestStarted);

        $("#runningTest").text("This has been updated!");
    },
    onTestStarted: function (data)
    {
        // Handles the test started event

        $("#runningTest").text("The test is : " + data.Test);
    }
};