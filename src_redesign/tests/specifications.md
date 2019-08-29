# TDD unit specifications
- Dropdown: Allow the user to choose their primary language
    - once clicked, each language link should:
        - redirect to the url "/search/:primaryLanguage" 
        - render the Search component 
- Search: Allow the user to search for a video to practice with
    - once a user clicks submit, the component should:
        - fetch the query results from the YT api
        - display 10 results with thumbnails/video titles below search field
    - once user clicks on a video:
        - redirect to  the url "/spokenlanguage/:primaryLanguage/:videoId"
        - render the SpokenLanguage component
- SpokenLanguage: Allow user to choose the video language
    - once clicked, each language link should redirect to the url
      "/player/:primaryLanguage/:videoId/:spokenLanguage" 
    - render the Player component
- Player: Allow the user to work way through video, receiving feedback on
  correctness after every clip
    - replay should play the current clip from the beginning
    - next should load and play the following clip, then focus on 
      spokenTextArea
    - answers should show the answers to the current clip
