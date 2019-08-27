import React from 'react';
import YouTube from 'react-youtube';
import Subscriber from './Subscriber';
import { initGA, logPageView, logEvent } from './analytics';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentClip : 0,
            player: null,
            answersVisible: false,
            spokenTextValue : '',
            primaryTextValue : '' 
        };
        this.emailTextarea = React.createRef();
        this.emailSubmitButton = React.createRef();
        this.youtubePlayer = React.createRef();
    }

    componentDidMount() {
        initGA();
        logPageView();
    }
    onReady = (event) => {
        this.setState({ player: event.target,});
        this.playCurrentClip();
    }
    


    playCurrentClip = () => {
        this.state.player.loadVideoById({
            'videoId': this.props.videoId,
            'startSeconds': this.props.captions[this.state.currentClip]["start"],
            'endSeconds': this.props.captions[this.state.currentClip]["end"],
            'suggestedQuality': 'large'
        });
    }

    handleAnswerClick = () => {
        this.setState(state => {
            return {answersVisible : !state.answersVisible}
        });
        logEvent({
            category: 'Button Click',
            action: 'Answers', 
        });
    }

    handleSpokenTextValue = (event) => {
        this.setState({
            spokenTextValue: event.target.value
        });
    }
    handlePrimaryTextValue = (event) => {
        this.setState({
            primaryTextValue: event.target.value
        });
    }
    handleReplayClick = () => {
        this.playCurrentClip();
        logEvent({
            category: 'Button Click',
            action: 'Replay', 
        });
    }
    handleNextClick = () => {
        this.setState((state) => {
            return {
                currentClip: state.currentClip + 1,
                answersVisible: false
            }}, 
            () => this.playCurrentClip()
        );

        this.clearInput();

        logEvent({
            category: 'Button Click',
            action: 'Next', 
        });
    }
//    handlePlayerClick = () => {
//        logEvent({
//            category: 'Click',
//            action: 'Button Click', 
//            label: 'Player Button Click'
//        });
//    }

//    handleEmailTextareaClick = () => {
//        logEvent({
//            category: 'Click',
//            action: 'Button Click', 
//            label: 'Email Textarea Click'
//        });
//    }
//    handleEmailSubmit = () => {
//        logEvent({
//            category: 'Click',
//            action: 'Button Click', 
//            label: 'Email Button Click'
//        });
//    }


    clearInput = () => {
        this.setState({
            spokenTextValue: '',
            primaryTextValue: ''
        });
    }

    render() {
        const opts = {
            height: '200',
            width: '300',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
                controls: 0,
                rel: 0, 
                showinfo: 0,
                ecver: 2,
                modestbranding: 1
            }
        };
        return (
        <>
            <YouTube
                videoId={this.props.videoId}
                opts={opts}
                onReady={this.onReady}
                ref={this.youtubePlayer}
                
            />
            <table>
                <tbody>
                    <tr>
                        <td>
                        <button id="replay" onClick={this.handleReplayClick}>
                            {this.props.repeat}
                        </button>
                        <button id="next" onClick={this.handleNextClick}>
                            {this.props.next}
                        </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <form>
                <textarea 
                    id="spoken"
                    rows="5" 
                    cols="50" 
                    value={this.state.spokenTextValue}
                    onChange={this.handleSpokenTextValue}
                    placeholder={this.props.spokenPlaceholder}
                    onFocus={() => logEvent({
                        category: 'Button Click',
                        action: 'Spoken Textarea', 
                    })}
                >
                </textarea>
                <textarea  
                    id="primary"
                    rows="5" 
                    cols="50" 
                    value={this.state.primaryTextValue}
                    onChange={this.handlePrimaryTextValue}
                    placeholder={this.props.primaryPlaceholder}
                    onFocus={() => logEvent({
                        category: 'Button Click',
                        action: 'Primary Textarea', 
                    })}
                >
                </textarea>
            </form>
            <button id="submit" onClick={this.handleAnswerClick}>
                {this.props.answerButton}
            </button>
            <div 
                style={{ visibility: this.state.answersVisible ? 
                    'visible' : 'hidden'
                }}
            >
                <h2 id="language2-header">{this.props.language2Header}</h2>
                <p id="language2-text">
                    {this.props.captions[this.state.currentClip]["secondary_subtitle"]}
                </p>
                <h2 id="language1-header">{this.props.language1Header}</h2>
                <p id="language1-text">
                    {this.props.captions[this.state.currentClip]["primary_subtitle"]}
                </p>
            </div>
            <Subscriber/>
        </>
        );
    }
}

export default Player;
