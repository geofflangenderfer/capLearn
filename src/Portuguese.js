import React from 'react';
import Player from './Player';
import captions from './captions/buHrSbwHXbo_en_pt_subtitles';


class Portuguese extends React.Component {
    render() {
        return (
            <Player
                videoId='buHrSbwHXbo' 
                repeat='Repetir' 
                next='Próximo'
                spokenPlaceholder='O que eles dizem em inglês?'
                primaryPlaceholder='Você consegue traduzir para o inglês?'
                answerButton='Respostas'
                language1Header='Tradução Português'
                language2Header='Português'
                captions={captions}
            >
            </Player>

            
        );
    }
}

export default Portuguese;
