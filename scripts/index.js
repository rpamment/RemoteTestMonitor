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
        io.Socket.prototype.isXDomain = function () { return false; };

        var socket = io.connect('http://192.168.1.101/widgetClients');

        socket.on('onTestStarted', app.onTestStarted);

        $("#runningTest").text("Stuff will go here");
    },
    onTestStarted: function (data)
    {
        // Handles the test started event

        $("#runningTest").text("The test is : " + data.Test);
    }
};