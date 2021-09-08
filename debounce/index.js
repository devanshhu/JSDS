var intObj;
function debounce() {
    let x = document.getElementById("btn").value;
    // console.log(x.value);

    let interval = 300;
    if (intObj) {
        clearTimeout(intObj);
    }
    intObj = setTimeout(() => {
        console.log(x)
    }, interval);



}