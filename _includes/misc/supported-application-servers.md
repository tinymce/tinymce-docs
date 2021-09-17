* Eclipse Jetty:
    - 9.4+
* WebSphere Application Server (WAS) 8 or later
* Apache Tomcat:
    - 10 (See note below)
    - 9+
    - 8.5.12+
    - 8.0.42+
    - 7.0.76+

> **Important:** Tomcat 10 will require WAR files to be placed in the *webapp-javaee* directory rather than the *webapps* directory due to the change to Jakarta servlets. Jetty 11 is not currently supported due to this change.