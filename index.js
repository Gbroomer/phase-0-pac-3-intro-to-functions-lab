const string = "hello", quiet = "HELLO", spy = "hello", shush = "HELLO", headphone = "hello";
function shout(string) {
    return string.toUpperCase();

}
function whisper(quiet) {
    return quiet.toLowerCase();
}
function logShout(spy) {
    console.log(spy.toUpperCase());
}
function logWhisper(spy) {
    console.log(spy.toLowerCase());
}
function sayHiToHeadphonedRoommate(headphone) {
    if (headphone.toLowerCase() === headphone) {
      return "I can't hear you!";
    } else if (headphone.toUpperCase() === headphone) {
      return "YES INDEED!";
    } else if (headphone === "Let's have dinner together!") {
      return "I would love to!";
    }
  }