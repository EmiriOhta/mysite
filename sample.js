
document.querySelector(`#item`).animate(
    [
        { opacity: 0},
        { opacity: 1}
    ],
    {
        duration: 3000,
        fill: 'forwards'
    }
);

function myFunction () {
    document.getElementById("comment").innerHTML="これからよろしくお願いします！";
}
