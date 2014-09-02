function check(ev, style, shift) {
    var macAllow = !style || style === 'mac',
        winAllow = !style || style === 'windows',
        code = ev.keyCode || ev.which

    if (code!==122 && code!==90)
        return false
    if (macAllow && (ev.metaKey && shift && !ev.ctrlKey && !ev.altKey))
        return true
    if (winAllow && (ev.ctrlKey && shift && !ev.metaKey && !ev.altKey))
        return true
    return false
}

module.exports = function(ev, style) {
    return module.exports.undo(ev, style) || module.exports.redo(ev, style)
}

module.exports.undo = function(ev, style) {
    return check(ev, style, !ev.shiftKey)
}

module.exports.redo = function(ev, style) {
    return check(ev, style, ev.shiftKey)
}