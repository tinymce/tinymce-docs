### `emoticons_images_url`

This option sets the base URL for the images used to represent emojis when using the `emojiimages` database.

By default, this option loads the required image _assets_ from the Twemoji CDN. To use self-hosted emoji images, download the image _assets_ from the [Twitter Emoji (twemoji) GitHub repository](https://github.com/twitter/twemoji/#download).

Type
: `String`

Default
: `'https://twemoji.maxcdn.com/v/13.0.1/72x72/'`

#### Example: Using `emoticons_images_url`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'emoticons',
  toolbar: 'emoticons',
  emoticons_images_url: 'http://my.server/images/emoticons/'
});
```
