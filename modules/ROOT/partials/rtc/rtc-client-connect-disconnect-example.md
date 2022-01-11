#### Example using client connect and disconnect events with custom user details

While all fields are provided to both the `rtc_client_connected` and `rtc_client_disconnected` functions, this example only handles the relevant fields for each callback function.

```js
const connectedUsers = {}
tinymce.init({
  selector: 'textarea', // change this value according to your HTML
  plugins: 'rtc',
  rtc_document_id: 'unique-document-id',
  rtc_encryption_provider: () => Promise.resolve({ key: 'a secret key' }),
  rtc_token_provider: () => Promise.resolve({ token: 'signed-JWT-token' }),
  rtc_user_details_provider: ({userId}) => Promise.resolve({ fullName: "John Doe", jobTitle: "Engineer" }),
  rtc_client_connected: ({userDetails: {fullName, jobTitle}, userId, caretNumber, clientId, clientInfo}) => {
    connectedUsers[clientId] = {
      caretNumber,
      clientInfo,
      userDetails,
      userId
    }
    console.log(`${jobTitle} ${fullName} connected with caret number ${caretNumber}`, clientInfo)
  }
  rtc_client_disconnected: ({clientId, userDetails: {fullName, jobTitle}}) => {
    delete connectedUsers[clientId]
    console.log(`${jobTitle} ${fullName} disconnected`)
  }
})
```
