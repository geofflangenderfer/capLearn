## Overview
- serve up the flow-state clip 
- allow user to easily get in their reps

def findFlowClip(userCurrentLevel, targetLanguage):
    """ 
    match the perfect clip to user's current level. 
    something a bit beyond what they've previously done
    """
    
    ...
    
    return flowClip

def isFlow():
    """
    the current clip shouldn't bore or be too challenging for the user.
    """

    return True/False

while playing
    flowClip = findFlowClip(x, y)
    while isFlow()
        for each clip flowClip
            identify target language words
            translate to primary language

## User/Data Flow
- pick primary language
    - send primary language to Search 
- search for a video to study 
    - check cache for video captions and download if necessary
    - send primary language, videoId, and captions to Identify
- identify spoken language
    - send primary language, videoId, captions, and spoken language to Player
- practice with Player!

## Database
- Users (create login feature/use evercookie)
    - Sessions
        - start/end time
        - buttons pressed with timestamp
        - videos watched
        - translation attempts with timestamp
            - videoId
            - attempt
            - machine translation
- captions
