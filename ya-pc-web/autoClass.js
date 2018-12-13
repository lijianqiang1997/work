document.addEventListener("DOMContentLoaded", function() {
    var elements = document.getElementsByTagName("*"),
        elementArray = Array.prototype.slice.call(elements),
        marginArr = [],
        paddingArr = [],
        fontArr = [],
        lineHeightArr = [],
        colorArr = [],
        directionArr = [],
        style = "";
    elementArray.forEach(function(item, index, array) {
        var className = " " + item.className.replace(/\s/g, "  ") + " ",
            str = "(-(t|r|b|l|tb|rl|bt|lr)-\\d+){1,4}",
            marRegStr = "\\smar(-\\d+|" + str + ")\\s",
            padRegStr = "\\spad(-\\d+|" + str + ")\\s",
            marReg = new RegExp(marRegStr, "ig"),
            padReg = new RegExp(padRegStr, "ig"),
            fontReg = /\sfont-\d+\s/ig,
            lineHeightReg = /\sline-height-\d+\s/ig,
            colorReg = /\scolor-([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\s/ig,
            directionReg = /\s(top|right|bottom|left|t|r|b|l)--?\d+\s/ig,
            marArr = className.match(marReg),
            padArr = className.match(padReg),
            font = className.match(fontReg),
            lineHeight = className.match(lineHeightReg),
            color = className.match(colorReg),
            direction = className.match(directionReg);

        if (marArr) {
            marginArr = marginArr.concat(marArr);
        }
        if (padArr) {
            paddingArr = paddingArr.concat(padArr);
        }
        if (font) {
            fontArr = fontArr.concat(font);
        }
        if (lineHeight) {
            lineHeightArr = lineHeightArr.concat(lineHeight);
        }
        if (color) {
            colorArr = colorArr.concat(color);
        }
        if (direction) {
            directionArr = directionArr.concat(direction);
        }
    });
    marginArr = [...new Set(marginArr)];
    paddingArr = [...new Set(paddingArr)];
    fontArr = [...new Set(fontArr)];
    lineHeightArr = [...new Set(lineHeightArr)];
    colorArr = [...new Set(colorArr)];
    directionArr = [...new Set(directionArr)]
    marginArr.forEach(function(item, index, array) {
        var str = "-(t|r|b|l|tb|rl)-\\d+",
            number,
            nArr = [],
            s = "",
            reg = new RegExp(str, "ig"),
            item = item.trim();
        if (/^mar-\d+$/.test(item)) {
            number = item.split(/mar-/i)[1];
            style += "." + item + "{margin:" +
                number + "px;}\n";
        } else {
            s = "";
            nArr = item.split(/mar-/i)[1];
            var a = nArr.split("-"),
                position,
                num,
                i = 0,
                length = a.length;
            for (; i < length; i += 2) {
                position = a[i].toLocaleLowerCase();
                num = a[i + 1];
                if (position === "t") {
                    s += "margin-top:" + num + "px;";
                } else if (position === "r") {
                    s += "margin-right:" + num + "px;";
                } else if (position === "b") {
                    s += "margin-bottom:" + num + "px;";
                } else if (position === "l") {
                    s += "margin-left:" + num + "px;";
                } else if (position === "lr" || position === "rl") {
                    s += "margin-left:" + num + "px;" + "margin-right:" + num + "px;";
                } else if (position === "tb" || position === "bt") {
                    s += "margin-top:" + num + "px;" + "margin-bottom:" + num + "px;";
                }
            }
            style += "." + item + "{" + s + "}\n";
        }
    });
    paddingArr.forEach(function(item, index, array) {
        var str = "-(t|r|b|l|tb|rl)-\\d+",
            number,
            nArr = [],
            s = "",
            reg = new RegExp(str, "ig"),
            item = item.trim();
        if (/^pad-\d+$/.test(item)) {
            number = item.split(/pad-/i)[1];
            style += "." + item + "{padding:" +
                number + "px;}\n";
        } else {
            s = "";
            nArr = item.split("pad-")[1];
            var a = nArr.split("-"),
                position,
                num,
                i = 0,
                length = a.length;
            for (; i < length; i += 2) {
                position = a[i].toLocaleLowerCase();
                num = a[i + 1];
                if (position === "t") {
                    s += "padding-top:" + num + "px;";
                } else if (position === "r") {
                    s += "padding-right:" + num + "px;";
                } else if (position === "b") {
                    s += "padding-bottom:" + num + "px;";
                } else if (position === "l") {
                    s += "padding-left:" + num + "px;";
                } else if (position === "lr" || position === "rl") {
                    s += "padding-left:" + num + "px;" + "padding-right:" + num + "px;";
                } else if (position === "tb" || position === "bt") {
                    s += "padding-top:" + num + "px;" + "padding-bottom:" + num + "px;";
                }
            }
            style += "." + item + "{" + s + "}\n";
        }
    });

    fontArr.forEach(function(item, index, array) {
        item = item.trim();
        var fontSize = item.split("font-")[1];
        style += "." + item + "{font-size: " + fontSize + "px;}\n";
    });
    lineHeightArr.forEach(function(item, index, array) {
        item = item.trim();
        var lineHeight = item.split("line-height-")[1];
        style += "." + item + "{line-height: " + lineHeight + "px;}\n";
    });

    colorArr.forEach(function(item, index, array) {
        item = item.trim();
        var color = item.split("color-")[1];
        style += "." + item + "{color: #" + color + ";}\n";
    });

    directionArr.forEach(function(item, index, array) {
        item = item.trim();
        var a = item.split(/(top|right|bottom|left|t|r|b|l)-/i),
            d = a[1],
            num = a[2];
        if (d === "t") {
            d = "top";
        } else if (d === "r") {
            d = "right";
        } else if (d === "b") {
            d = "bottom";
        } else if (d === "l") {
            d = "left";
        }
        style += "." + item + "{" + d + ": " + num + "px;}\n";
    });

    var styleElement = document.createElement("style");
    styleElement.innerHTML = style;
    document.head.appendChild(styleElement);
    console.log(style);
}, false);