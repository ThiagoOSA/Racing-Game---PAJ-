function onKeyDown(event)
{   teclas[event.keyCode] = true
}
function onKeyUp(event)
{   teclas[event.keyCode] = false
}


document.addEventListener("keydown", onKeyDown)
document.addEventListener("keyup", onKeyUp)