const request = require('request');

const POSTMARK_URL = 'https://api.postmarkapp.com/email';

class PostMarkClient {
  constructor () {
    this.url = POSTMARK_URL;
    this.serverToken = '49e6346c-8c40-4f8b-b8b9-9b373ebe66e1';
  }

  getOptions ({to, subject, html}) {
    return {
      url: this.url,
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': this.serverToken
      },
      body: JSON.stringify({
        From: 'mail@codalyze.com',
        To: to[0],
        Subject: subject,
        HtmlBody: html
      })
    };
  }

  sendMail (data) {
    return new Promise((resolve, reject) => {
      const options = this.getOptions(data);
      request(options, (err, response, body) => {
        if (err || response.statusCode !== 200) {
          reject(err);
        } else {
          resolve({body});
        }
      });
    });
  }
}

module.exports = PostMarkClient;
