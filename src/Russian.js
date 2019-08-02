import React from 'react';
import Player from './Player';
import captions from './captions/buHrSbwHXbo_en_ru_subtitles';

class Russian extends React.Component {
    render() {
        return (
            <Player
                videoId='buHrSbwHXbo' 
                repeat='повторение' 
                next='следующий'
                spokenPlaceholder='что они сказали по английски?' 
                primaryPlaceholder='ты можешь перевести на русский?'
                answerButton='ответы'
                language1Header='английский'
                language2Header='русский перевод'
                captions={captions}
            >
            </Player>

            
        );
    }
}

export default Russian;
