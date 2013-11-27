require.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app"
    },
    "shim": {
        "jquery-ui": ["jquery"],
        "jquery-svg": ["jquery"],
        "jquery-ui-contextmenu": ["jquery-ui"],
        "jquery-svgdom": ["jquery-svg"],
        "jquery-svgfilter": ["jquery-svg"],
        "jquery-svggraph": ["jquery-svg"],
        "jquery-svgplot": ["jquery-svg"],
        "jquery-ui-contextmenu": ["jquery-ui"]
    }
});

require(["jquery-svg", "jquery-svgdom", "jquery-svggraph", "jquery-svgplot", "jquery-svgfilter", "jquery-ui-contextmenu", "app/main"]);
// Load the main app module to start the app