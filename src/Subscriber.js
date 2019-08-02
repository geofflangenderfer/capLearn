import React, { Component } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

class Subscriber extends Component {
  render() {
    const url = "https://gmail.us3.list-manage.com/subscribe/post?u=73f8b64a54b58b03af5f37fb8&amp;id=9ee6373d6c";
    return (
      <div>
        <MailchimpSubscribe url={url} />
      </div>
    );
  }
}

export default Subscriber;

