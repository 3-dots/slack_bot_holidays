var aws = require('aws-sdk');
var lambda = new aws.Lambda({region: 'us-east-1', apiVersion: '2015-03-31'});
var qs = require('querystring')


exports.handler = async (event) => {
  var body = qs.parse(event.body)
  var user = body.user_name || 'Unknown'
  var response_url = body.response_url
  var response = {
    isBase64Encoded: false, // Set to `true` for binary support.
    statusCode: 200,
    headers: {
      "Content-type": "application/json"
    },
    body: 'Under maintainance!'
  }
  var resPayload = {
    "response_type": "in_channel",
    // "response_type": "ephemeral",
    "text": "",
    "attachments": [
        {
          "color": "#2eb886",
           // "pretext": "Optional text that appears above the attachment block",
           // "author_name": "mim Armand",
           // "author_link": "https://www.linkedin.com/in/3dots/",
           "author_icon": "https://media.licdn.com/dms/image/C4E03AQElGxCqxRuWmQ/profile-displayphoto-shrink_200_200/0?e=1547078400&v=beta&t=XkeKccrZRg0HUHL1psIUs4O6v2Rjf-XJdxJrAl5z4Ms",
            "text":`Hey *${user}*, Let me check that for you real quick!`,
            // "image_url": "https://media.licdn.com/dms/image/C4E03AQElGxCqxRuWmQ/profile-displayphoto-shrink_200_200/0?e=1547078400&v=beta&t=XkeKccrZRg0HUHL1psIUs4O6v2Rjf-XJdxJrAl5z4Ms",
            // "thumb_url": "https://media.licdn.com/dms/image/C4E03AQElGxCqxRuWmQ/profile-displayphoto-shrink_200_200/0?e=1547078400&v=beta&t=XkeKccrZRg0HUHL1psIUs4O6v2Rjf-XJdxJrAl5z4Ms",
            // "footer": "Holidays Bot!",
            // "footer_icon": "https://platform.slack-edge.com/img/default_application_icon.png",
            "ts": (new Date).getTime()
        }
    ]
  }
  var command = body.text


  await lambda.invokeAsync({
  FunctionName: 'slack_holidays_delayed',
  InvokeArgs: JSON.stringify({
    "response_url": response_url,
    "payload": resPayload,
    "command": command
  })
}).promise();

  response.body = JSON.stringify(resPayload)

  return response;
};
