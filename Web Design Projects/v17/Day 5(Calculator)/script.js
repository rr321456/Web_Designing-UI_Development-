function buttonclick(value)
{
    document.getElementById("screen").value=document.getElementById("screen").value+value
}
function clearscreen()
{
    document.getElementById("screen").value=""
}
function equalclick()
{
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}