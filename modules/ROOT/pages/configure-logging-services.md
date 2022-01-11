# Activity logging
:description: Setting up logging for the premium server-side components.

It may be useful to make the {{site.productname}} server-side components write to their own log file. This can assist in troubleshooting and make it easier to provide logs as part of a support ticket.

The {{site.productname}} server-side components use the [Logback](http://logback.qos.ch/manual/configuration.html) logging format.

To write the logs to a specific file:

1. Create a logging configuration XML file. Save the snippet below as `logback.xml` after replacing `{$LOG_LOCATION}` with the full path to the destination log file (e.g. /var/log/tinymce_server_components.log).

    ```xml
    <configuration>

      <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
          <pattern>%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
        </encoder>
      </appender>

      <appender name="FILE" class="ch.qos.logback.core.FileAppender">
        <file>{$LOG_LOCATION}</file>
        <encoder>
          <pattern>%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
        </encoder>
      </appender>

      <!-- The name "com.ephox" refers to all {{site.productname}} server-side components. -->
      <logger name="com.ephox" level="INFO"/>

      <root level="INFO">
        <appender-ref ref="FILE" />
        <!-- If you want logging to go to the container as well uncomment
        the following line -->
        <!-- <appender-ref ref="STDOUT" /> -->
      </root>

    </configuration>
    ```

1. Pass the configuration file to the Java application server. Assuming you've saved your `logback.xml` file in `/etc/opt/tinymce`, follow [step 4]({{ site.baseurl }}/how-to-guides/premium-server-side-guide/#step4passtheconfigurationfiletothejavaapplicationserver) and [step 5]({{ site.baseurl }}/how-to-guides/premium-server-side-guide/#step5restartthejavaapplicationserver) on the *Install Server-side Components* page to set the following JVM system property on your Java application server:

    ```
    -Dlogback.configurationFile=/etc/opt/tinymce/logback.xml
    ```
