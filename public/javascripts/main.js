// Change background
function changeBackground(w) {
    if (w === 'default') {
        var image = 'home';
    } else {
        var image = w;
    }
    var img = "/images/" + image + ".jpg";
    document.body.style.backgroundImage = "url(" + img + ")";
}

// Change copyright footer text
function changeFooter(w) {
    let source_link = "";
    let source_name = "";

    if (w === "sunny") {
        source_link = "https://unsplash.com/photos/X_CBtIMUfDc";
        source_name = "David Jusko";
    } else if (w === "windy") {
        source_link = "https://unsplash.com/photos/ifpIUxbtu7M";
        source_name = "Ivan Vranić";
    } else if (w === "storm") {
        source_link = "https://unsplash.com/photos/5Mh8iz9vqpY";
        source_name = "Josep Castells";
    } else if (w === "rain") {
        source_link = "https://unsplash.com/photos/Kwi60PbAM9I";
        source_name = "Gabriele Diwald";
    } else if (w == "snow") {
        source_link = "https://unsplash.com/photos/w8hWTFpGtpY";
        source_name = "Chandler Cruttenden";
    } else if (w== "cloudy") {
        source_link = "https://unsplash.com/photos/OCjc9bB0_A4";
        source_name = "Steven Biak Ling";
    } else if (w== "default") {
        source_link = "https://unsplash.com/photos/DuBNA1QMpPA";
        source_name = "Ian Dooley";
    }

    
    // Creating footer link for background image source
    var link = document.createElement('a')
    link.href = source_link;
    link.textContent = "Image: " + source_name;

    // Replace old footer source with new
    var myFooter = document.getElementById("footer-txt");
    myFooter.replaceWith(link);
    link.id = "footer-txt";
    link.className = "navbar fixed-bottom my-footer";

    }

function changeIcon(w) {

    let iconName = "";

    if (w === "sunny") {
        iconName = "sunny-outline";
    } else if (w === "windy") {
        iconName = "leaf-outline";
    } else if (w=== "storm") {
        iconName = "thunderstorm-outline";
    } else if (w === "rain") {
        iconName = "rainy-outline";
    } else if (w == "snow") {
        iconName = "snow-outline";
    } else if (w == "cloudy") {
        iconName = "cloudy-outline";
    } else if (w== "default") { 
        iconName = "thermometer-outline";
    } else {
        iconName = "leaf-outline";
    }


    
    // Change icon depending on weather
    var newIcon = document.createElement('ion-icon');
    newIcon.name = iconName;

    // My old icon, replace it with new icon
    var myIcon= document.getElementById("my-icon");
    myIcon.replaceWith(newIcon);

    // Set id of new icon to my-icon so that it can be replaced again 
    newIcon.id = "my-icon";

    // TO DO:
    // replace icons with https://feathericons.com/
}

// Define weather conditions to run above functions
var weather = '';
let weather_condition = document.getElementById('weather').innerHTML;

if (weather_condition.includes('cloud')) {
    weather = 'cloudy';
}
else if (weather_condition.includes('rain') || weather_condition.includes('drizzle')) {
    weather = 'rain';
}
else if (weather_condition.includes('now') || weather_condition.includes('leet')) {
    weather = 'snow';
}
else if (weather_condition.includes('clear') || weather_condition.includes('sky')) {
    weather = 'sunny';
}
else if (weather_condition.includes('storm')) {
    weather = 'storm';
}
else if (weather_condition.includes('ind') || weather_condition.includes('oke')) {
    weather = 'windy';
}
else {
    weather = 'default';
}

changeBackground(weather);
changeFooter(weather);
changeIcon(weather);