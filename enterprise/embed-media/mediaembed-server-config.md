---
layout: default
title: Configure Enhanced Media Embed Server
description: Instructions for getting the Enhanced Media Embed server configured.
keywords: enterprise pricing video youtube vimeo mp3 mp4 mov movie clip film link linkchecking linkchecker mediaembed media
---

Once you've got the [server-side component]({{ site.baseurl }}/enterprise/server/) installed, additional configuration to your `application.conf` file is required. (Don't forget to restart the Java application server after updating the configuration.)

The Enhanced Media Embed service allows you to choose between using your own [Iframely](https://iframely.com/) account, configuring custom [oEmbed](http://oembed.com/) endpoints or using a combination of both.

When you insert media into your content, the service will do the following (in order):

1. Check if the URL matches any custom oEmbed configuration. If that fails,
2. If Iframely is configured, query the Iframely API. If Iframely is not configured,
3. Create a summary card.

## Use your own Iframely account

To use your own Iframely account, provide the following configuration items:

- `enabled` - set to `true` to use Iframely. If set to `false`, you don't need to prvide the `base-url` or `api-key` configuration items.
- `base-url` - the base URL of the Iframely API. Check their [docs](https://iframely.com/docs/iframely-api) if you're unsure.
- `api-key` - your Iframely API key. This is provided by Iframely after setting up an account with them.

Example with Iframely enabled (replace `xxx` with your Iframely API key):

````
ephox {
  embed {
    iframely {
      enabled = true
      base-url = "https://iframe.ly/api/iframely"
      api-key = "xxx" // change this to your own Iframely API key
    }
  }
}
````

Example with Iframely disabled:

````
ephox {
  embed {
    iframely {
      enabled = false
    }
  }
}
````

## Configure a custom endpoint
The service can be configured to hit a specific oEmbed endpoint when media from a URL matching a provided pattern is inserted into your content.

- `endpoint` - the URL of the oEmbed endpoint that should be consulted when inserting media with a URL that matches an entry in `schemes`.
- `schemes` - a list of schemes as defined in [Section 2.1. Configuration](http://oembed.com/#section2.1) of the oEmbed specification. Note that HTTP and HTTPS are two separate schemes.

**Example note:** This configuration is provided as an example only. The Enhanced Media Embed service converts an oEmbed response into an embeddable snippet of code. The content and quality of the snippet is dependent on the oEmbed response.

Example:

````
ephox {
  embed {
    custom = [

      # youtube
      {
        endpoint = "http://www.youtube.com/oembed"
        schemes = [
          "http://youtu.be/*",
          "https://youtu.be/*",
          "http://www.youtu.be/*",
          "https://www.youtu.be/*",
          "http://youtube.com/*",
          "https://youtube.com/*",
          "http://www.youtube.com/*",
          "https://www.youtube.com/*",
          "http://m.youtube.com/*",
          "https://m.youtube.com/*"
        ]
      },
      # NY Times
      {
        endpoint = "https://www.nytimes.com/svc/oembed/json/"
        schemes = [
          "http://www.nytimes.com/*",
          "https://www.nytimes.com/*"
        ]
      },
      # Daily Motion
      {
        endpoint = "http://www.dailymotion.com/services/oembed"
        schemes = [
          "http://www.dailymotion.com/video/*"
          "https://www.dailymotion.com/video/*"
          "http://www.dailymotion.com/embed/video/*"
          "https://www.dailymotion.com/embed/video/*"
        ]
      },
      # Soundcloud
      {
        endpoint = "http://soundcloud.com/oembed"
        schemes = [
          "http://soundcloud.com/*",
          "https://soundcloud.com/*",
          "http://api.soundcloud.com/tracks/*",
          "https://api.soundcloud.com/tracks/*"
        ]
      },
      # Facebook post
      {
        endpoint = "https://www.facebook.com/plugins/post/oembed.json/"
        schemes = [
          "http://*.facebook.com/permalink.php*",
          "https://*.facebook.com/permalink.php*",
          "http://*.facebook.com/photo.php*",
          "https://*.facebook.com/photo.php*",
          "http://*.facebook.com/*/photos/*",
          "https://*.facebook.com/*/photos/*",
          "http://*.facebook.com/*/posts/*",
          "https://*.facebook.com/*/posts/*",
          "http://*.facebook.com/*/activity/*",
          "https://*.facebook.com/*/activity/*",
          "http://*.facebook.com/notes/*",
          "https://*.facebook.com/media/set/*"
        ]
      },
      # Facebook Video
      {
        endpoint = "https://www.facebook.com/plugins/video/oembed.json/"
        schemes = [
          "http://www.facebook.com/video*",
          "https://www.facebook.com/video*",
          "http://www.facebook.com/*/videos/*",
          "https://www.facebook.com/*/videos/*",
          "http://business.facebook.com/video*",
          "https://business.facebook.com/video*",
          "http://business.facebook.com/*/videos/*",
          "https://business.facebook.com/*/videos/*"
        ]
      },
      # Facebook Page
      {
        endpoint = "https://www.facebook.com/plugins/page/oembed.json/"
        schemes = [
          "http://www.facebook.com/*",
          "https://www.facebook.com/*",
          "http://m.facebook.com/*",
          "https://m.facebook.com/*"
        ]
      },
      # Spotify
      {
        endpoint = "https://embed.spotify.com/oembed/"
        schemes = [
          "http://spotify.com/*",
          "https://spotify.com/*",
          "http://open.spotify.com/*",
          "https://open.spotify.com/*",
          "http://embed.spotify.com/*",
          "https://embed.spotify.com/*",
          "http://play.spotify.com/*",
          "https://play.spotify.com/*"
        ]
      },
      # Hulu
      {
        endpoint = "http://www.hulu.com/api/oembed.json",
        schemes = [
          "http://www.hulu.com/watch/*",
          "https://www.hulu.com/watch/*"
        ]
      },
      # Vimeo
      {
        endpoint = "http://vimeo.com/api/oembed.json",
        schemes = [
          "http://vimeo.com/*",
          "https://vimeo.com/*",
          "http://www.vimeo.com/*",
          "https://www.vimeo.com/*"
        ]
      },
      # SmugMug
      {
        endpoint = "http://api.smugmug.com/services/oembed/"
        schemes = [
          "http://*.smugmug.com/*",
          "https://*.smugmug.com/*"
        ]
      },
      # Slideshare
      {
        endpoint = "http://www.slideshare.net/api/oembed/2"
        schemes = [
          "http://*.slideshare.net/*"
        ]
      },
      # Wordpress
      {
        endpoint = "https://public-api.wordpress.com/oembed/?for=ephox"
        schemes = [
          "http://*.wordpress.com/*",
          "https://*.wordpress.com/*"
        ]
      },
      # Meetup
      {
        endpoint = "https://api.meetup.com/oembed"
        schemes = [
          "http://www.meetup.com/*",
          "https://www.meetup.com/*",
          "http://meetup.com/*",
          "https://meetup.com/*",
          "http://meetu.ps/*",
          "https://meetu.ps/*"
        ]
      },
      # Spotify
      {
        endpoint = "https://embed.spotify.com/oembed/"
        schemes = [
          "http://open.spotify.com/*",
          "https://open.spotify.com/*",
          "http://play.spotify.com/*",
          "https://play.spotify.com/*"
        ]
      },
      # Tech crunch
      {
        endpoint = "http://public-api.wordpress.com/oembed/?for=ephox"
        schemes = [
          "http://techcrunch.com/*",
          "https://techcrunch.com/*"
        ]
      },
      # Dotsub
      {
        endpoint = "https://dotsub.com/services/oembed"
        schemes = [
          "http://dotsub.com/view/*",
          "https://dotsub.com/view/*"
        ]
      },
      # Speaker deck
      {
        endpoint = "https://speakerdeck.com/oembed.json"
        schemes = [
          "http://speakerdeck.com/*/*",
          "https://speakerdeck.com/*/*"
        ]
      },
      # Tumblr
      {
        endpoint = "https://www.tumblr.com/oembed/1.0"
        schemes = [
          "http://*.tumblr.com/post/*",
          "https://*.tumblr.com/post/*"
        ]
      },
      # Adobe Stock
      {
        endpoint = "https://stock.adobe.com/oembed"
        schemes = [
          "http://stock.adobe.com/*",
          "https://stock.adobe.com/*"
        ]
      },
      # Code pen
      {
        endpoint = "https://codepen.io/api/oembed"
        schemes = [
          "http://codepen.io/*/pen/*",
          "https://codepen.io/*/pen/*"
        ]
      },
      # 500px
      {
        endpoint = "https://500px.com/oembed"
        schemes = [
          "http://500px.com/photo/*",
          "https://500px.com/photo/*"
        ]
      }
    ]
  }
}
````

## Combining Iframely and custom endpoints
It is also possible to configure Iframely with custom oEmbed endpoints. For example, you may want to use Iframely to embed media from the Internet and an internal oEmbed server to embed media from an Intranet.


Example (replace `xxx` with your Iframely API key):

````
ephox {
  embed {
    iframely {
      enabled = true
      base-url = "https://iframe.ly/api/iframely"
      api-key = "xxx" // change this to your own Iframely API key
    },

    custom = [
      {
        endpoint = "http://localhost:3000/oembed"
        schemes = [
          "http://intranet.example.com/*"
        ]
      }
    ]
  }
}
````

## Summary cards

If neither Iframely or an oEmbed endpoint is configured for a given URL, a summary card will be created.

A summary card is an embeddable snippet of code which is generated based on what the Enhanced Media Embed service can work out about the content at the URL. See the integration docs for [Enhanced Media Embed Server]({{ site.baseurl }}/enterprise/embed-media/mediaembed-server-integration/) for further details.
