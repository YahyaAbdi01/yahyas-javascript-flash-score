document.addEventListener("DOMContentLoaded", function() {
    // Function to update the time
    function updateTime() {
        // Get the current date and time
        var now = new Date();
        
        // Get the elements for hours, minutes, and seconds
        var hoursElement = document.querySelector("[data-time='hours']");
        var minutesElement = document.querySelector("[data-time='minutes']");
        var secondsElement = document.querySelector("[data-time='seconds']");
        
        // Update the time elements with the current time
        hoursElement.textContent = String(now.getHours()).padStart(2, '0');
        minutesElement.textContent = String(now.getMinutes()).padStart(2, '0');
        secondsElement.textContent = String(now.getSeconds()).padStart(2, '0');
    }
    
    // Call updateTime function to display time immediately
    updateTime();
    
    // Update time every second
    setInterval(updateTime, 1000);
    
    // Add event listener to the menu button
    var menuButton = document.getElementById("open-nav-menu");
    var menuWrapper = document.querySelector(".wrapper");
    var closeButton = document.getElementById("close-nav-menu");
    

menuButton.addEventListener("click", function(){
    menuWrapper.style.right = "0"
})

closeButton.addEventListener("click", function(){
    menuWrapper.style.right = "-100%"
})
    // menuButton.addEventListener("click", function() {
    //     menuWrapper.classList.add("show"); // Assuming you have a CSS class named "show" to display the menu
    // });
    
    // closeButton.addEventListener("click", function() {
    //     menuWrapper.classList.remove("show");
    // });
     // Add event listeners to thumbnail images
     var thumbnails = document.querySelectorAll(".thumbnails img");
     var largeImage = document.querySelector(".gallery-section img");
 
     thumbnails.forEach(function(thumbnail) {
         thumbnail.addEventListener("click", function() {
             // Update the source of the large image to display the clicked thumbnail
             largeImage.src = thumbnail.src;
         });
     });

    // Add event listener to radio buttons for temperature conversion
    var celsiusRadio = document.getElementById("celsius");
    var fahrenheitRadio = document.getElementById("fahr");
    var weatherElement = document.getElementById("weather");
    
    celsiusRadio.addEventListener("change", function() {
        // Display the default message
        weatherElement.textContent = "The degree today is 32.00°C";
    });
    
    fahrenheitRadio.addEventListener("change", function() {
        // Convert temperature to Celsius
        var fahrenheit = 77; // Example Fahrenheit temperature
        var celsius = (fahrenheit - 32) * 5 / 9;
        // Display the temperature in Celsius
        weatherElement.textContent = "Temperature in Celsius: " + celsius.toFixed(2) + "°C";
    });
});