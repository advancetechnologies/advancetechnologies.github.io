
// FREE: no request linit for ipify.org
var request = new XMLHttpRequest()
var ipAddress = ''
request.open('GET', "https://api.ipify.org?format=jsonp=", true)
var ipAddress = request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    return ipAddress = request.responseText
  } else {
    // We reached our target server, but it returned an error

  }
}
request.onerror = function() {
  // There was a connection error of some sort
}
request.send()

console.log(ipAddress)

