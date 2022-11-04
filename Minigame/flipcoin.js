var coin_side;
var rannum;
var click_count = 0;
var change_image;
function clickevent() {

    click_count++;
    document.getElementById('Count_Button_Click').innerHTML = click_count;

    random_number = Math.floor(Math.random() * 2) + 1;
    change_image = document.getElementById("Coin_image");
    coin_side = document.getElementById("current");
    coin_side.innerHTML = random_number;

    if (random_number == 1) {
        change_image.src = "./img/head.png";
        coin_side.innerHTML = "Head";
    }
    if (random_number == 2) {
        change_image.src = "./img/tail.png";
        coin_side.innerHTML = "Tail";
    }

}