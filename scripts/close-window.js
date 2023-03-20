var timeoutObject;
var autoCloseTimer;

function resetTimeout()
{
    clearTimeout(timeoutObject); //stops timer
    timeoutObject = setTimeout("promptForClose()", 60000); //restarts timer from 0
}

function promptForClose()
{
    let answer = confirm("Are you here?");

    if(answer !== true)
    {
        autoCloseTimer = setTimeout("definitelyClose()", 60000);
    } else{
        resetTimeout();
    }
    
}

function definitelyClose() {
    window.close();
}

function cancelClose()
{
    clearTimeout(autoCloseTimer); //stops auto-close timer
}