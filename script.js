
// Function that updates the clock
function updateClock() {

    // Creates a Date object containing the current date and time
    const now = new Date();



    // -------------------------------
    // HOURS
    // -------------------------------

    // Gets current hour in 24-hour format
    // Example:
    // 8 PM  -> 20
    // 3 PM  -> 15
    // 8 AM  -> 8

    let hours = now.getHours();



    // -------------------------------
    // AM OR PM
    // -------------------------------

    // If hours are 12 or more
    // then show PM
    // otherwise show AM

    const meridiem = hours >= 12 ? "PM" : "AM";



    // -------------------------------
    // CONVERT TO 12-HOUR FORMAT
    // -------------------------------

    // Examples:
    //
    // 20 % 12 = 8
    // 15 % 12 = 3
    // 13 % 12 = 1
    //
    // If result becomes 0,
    // || 12 changes it into 12.
    //
    // Example:
    //
    // 12 % 12 = 0
    // becomes
    // 12

    hours = hours % 12 || 12;



    // Convert hours into string
    // because padStart() only works on strings

    hours = hours.toString();



    // If hour has only one digit,
    // add a zero in front.
    //
    // Example:
    //
    // "8"
    //
    // becomes
    //
    // "08"

    hours = hours.padStart(2, "0");



    // -------------------------------
    // MINUTES
    // -------------------------------

    // Gets current minutes

    let minutes = now.getMinutes();

    // Convert into string

    minutes = minutes.toString();

    // Add leading zero if needed

    minutes = minutes.padStart(2, "0");



    // -------------------------------
    // SECONDS
    // -------------------------------

    // Gets current seconds

    let seconds = now.getSeconds();

    // Convert into string

    seconds = seconds.toString();

    // Add leading zero

    seconds = seconds.padStart(2, "0");



    // -------------------------------
    // CREATE FINAL TIME
    // -------------------------------

    // Template Literal

    // Example:

    // hours = 08
    // minutes = 05
    // seconds = 09
    // meridiem = PM

    // Result:

    // 08:05:09 PM

    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;



    // -------------------------------
    // DISPLAY CLOCK
    // -------------------------------

    // Finds
    //
    // <div id="clock"></div>
    //
    // and changes its text

    document.getElementById("clock").textContent = timeString;

}



// Runs immediately when page loads

updateClock();



// Runs every 1000 milliseconds
// (1 second)

setInterval(updateClock, 1000);