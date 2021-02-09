import React, {useState} from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Anakin Skywalker',
            username: 'iHateSand',
            verified: false,
            text: tweetMessage,
            image: tweetImage,
            avatar: "data:image/jpeg;base64,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",
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className='tweetBox'>
            <form>
                <div className="tweetBox_input">
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDqRC21JGnjjdYTcFyuQpk_ZlFe_SRk5ps7w&usqp=CAU" />
                    <input 
                        onChange = {e => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?" 
                        type="text"
                    />
                </div>
                <input 
                    value={tweetImage}
                    onChange = {e => setTweetImage(e.target.value)}
                    className='tweetBox_imageInput' 
                    placeholder="Optional: Enter Image URL"
                    type="text"
                />
                <Button onClick={sendTweet} type="submit" className='tweetBox_tweetButton'>
                    Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox
