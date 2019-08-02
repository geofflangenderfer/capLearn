import React from 'react';
import Player from './Player';
import captions from './captions/buHrSbwHXbo_en_es_subtitles';


class English extends React.Component {
    render() {
        return (
            <Player
                videoId='buHrSbwHXbo' 
                repeat='Repetir' 
                next='Siguente'
                spokenPlaceholder='Que es lo que dijeron en ingles?' 
                primaryPlaceholder='Las puedes traducir las palabras a espanol?'
                answerButton='Respuestas'
                language1Header='Ingles'
                language2Header='Espanol Traduccion'
                captions={captions}
            >
            </Player>

            
        );
    }
}

export default English;
