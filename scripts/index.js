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

        $("#nodeData").text("Stuff will go here");
    },
    onTestStarted: function (data)
    {
        // Handles the test started event

        $("#nodeData").text("The test is : " + data.Test);
    }
};