---
layout: default
title: Troubleshoot
description: Debug problems with the premium spell checker.
keywords: tinymcespellchecker
---


## Browser-Specific Issues

### Internet Explorer Specific Troubleshooting Tips

If the editor is reporting that the service cannot be found and tracing the network traffic reveals that no request is made at all, check that the server is **not** listed in the "Trusted Sites" section of Internet Explorer's security options.  If it is, remove it and try again.

### Chrome Specific Tips

If the server is not running on a standard HTTP or HTTPS port (80 or 443) then Chrome will include the port in the origin header that is sent to the server. Other browsers do not do this. This is why when specifying the "allowed-origins" config, you should use both the hostname by itself and the hostname and port in the configuration. See Entering Origins for more details


## Debug Server Configuration

If spellchecking does not appear to be working, this is generally caused by the following reasons. This guide will walk you through the debugging process to identify the specific problem and how to remedy the issue.

1. The application.conf file is incorrect. Please go back and follow the steps listed in the installation guide. This is the most common problem - often the origins are specified without the port numbers and this can cause things to fail, eg: use 'http://localhost:8080' instead of 'http://localhost'. After making changes to the application.conf file, please restart your Java web server (e.g. Jetty or Tomcat).
2. The application.conf file is correct, but something is wrong with one of the services. See the section below to debug the services.
3. The application.conf file is correct, and the services are working, but the URL's that editor uses are not quite right. Refer to the Spellchecking Client-Side TinyMCE Plugin page for help.
4. All of the above are correct, but the browser sends back a different origin. See step 6. of  Using Browser Tooling to Investigate Services Issues  and add the origin value to the list of origins. Restart Tomcat and then refresh the editor page in a browser and things should work.

### Check/Debug the Server Configuration

To test the services, we will start with the following:

1. We will use Tomcat 7 installed at /opt/tomcat/ and running on port 8080, and this is our 'application.conf' file. We have made a folder called 'images' in the webapps directory of the tomcat install i.e. /opt/tomcat/webapps/images/. Some of the commands below that require a 'terminal' window to be used.
2. If you are on a Linux or Mac environment use a shell of your choice and make sure the 'curl' package is installed.
3. If you are on a Windows environment follow the page Installing curl in Windows and then open a 'cmd' prompt and run the commands from there.


## Using Browser Tooling to Investigate Services Issues

1. Open your browser's Console/Network tools:
	* Chrome: View menu -> Developer -> JavaScript Console. Click the Network tab (located between Elements and Sources).
	* Firefox: Tools menu -> Web Developer -> Network.
	* Safari: Develop -> Show Error Console. Click the Timelines link between Resources and Debugger.
	* Internet Explorer: Click the cog icon on the top-right side of the browser. Select F12 Developer Tools. Click the Network link (next to the ‘Profiler’ link).
2. Refresh the webpage featuring an TinyMCE configured with the spelling service. Enter a misspelled word into the editor.
3. Locate the network results that match the following URLs:
	* http://YOUR_SERVER:YOUR_PORT/ephox-spelling/1/autocorrect
	* http://YOUR_SERVER:YOUR_PORT/ephox-spelling/1/correction
4. If the network response for these services is 404, try the following:
	* Take the service URL displayed as erroneous (example: http://YOUR_SERVER:YOUR_PORT/ephox-spelling/1/autocorrect).
	* Remove everything from the ‘1’ onwards (including the ‘1’) and replace it with /version. (example: Change http://YOUR_SERVER:YOUR_PORT/ephox-spelling/1/correction to http://YOUR_SERVER:YOUT_PORT/ephox-spelling/version). The response code should be 200 and the body should display the version number.
5. If the response for the version URL is still 404, it means the service has not been started or installed correctly.
6. To check the "Origin" value that the browser uses, open the network tools (chrome in this screenshot) and refresh the page. Then enter a couple of words in the editor and select one of the requests on the bottom left ('correction' in the screen shot) and select the 'Headers' section. Look for the 'Origin' header value.

![alt test](/images/spell-checking-browser-tools.png)

> The value of the origin header sent by the must match the origin specified in the application.conf server configuration. If it does not match, you must make the server configuration match the browser

