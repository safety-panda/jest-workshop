function changeHeadingColour(colourString) {
    document.getElementById("welcomeHeading").style.color = colourString;
    $("#welcomeHeading").css("background-color", "yellow");
}

function getText(colour) {
    let text = `<li class="list-group-item">${colour}</li>`;
    return text
}

function loadButtonActions() {
    $("#greyBtn").on("click", function() {
        const gray = "DarkGray"
        changeHeadingColour(gray);
        addColourHistory(gray)
    });
    $("#pinkBtn").on("click", function() {
        const pink = "PaleVioletRed"
        changeHeadingColour(pink);
        addColourHistory(pink)
    });
    $("#hideBtn").on("click", function() {
        $("#welcomeHeading").hide();
    });
    $("#unhideBtn").on("click", function() {
        $("#welcomeHeading").show();
    });
}


$(document).ready(function() {
    loadButtonActions();
});

function addColourHistory(colour) {
    const text = getText(colour);
    $("#colourHist").append(text);
}


if (typeof module !== "undefined") {
    module.exports = { getText, loadButtonActions };
}
