/**
 * stop tracing webrtc stats
 */
module.exports = function(clearStats) {

    var callback = arguments[arguments.length - 1];

    if(typeof clearStats !== 'boolean') {
        clearStats = false;
    }

    this.execute(function(clearStats) {

        if(clearStats) {
            window._webdriverrtc = undefined;
        }

        return window.clearTimeout(window._webdriverrtcTimeout);
    }, clearStats, function(err, res) {
        callback(err, undefined, res);
    });

};