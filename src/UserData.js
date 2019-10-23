import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Store from './Store';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '50px',
    width: '100%',
    textAlign: 'center',
    padding: theme.spacing(3, 2),
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  formControl: {
    width: '50%',
    textAlign: 'center',
    margin: '10px',
  },
  button: {
    width: '50%',
    margin: '10px',
  },
  
}))

function SelectLanguage({ languageVariable }) {

  if (languageVariable === 'primaryLanguage') {
    var label = "I speak";
  }else {
    var label = "I'm studying";
  }

  const classes = useStyles();

  const languageCodeMap = {
    "Chinese": "zh",
    "Spanish": "es",
    "English": "en",
    "Hindi": "hi",
    "Arabic": "ar",
    "Portuguese": "pt",
    "Bengali": "bn",
    "Russian": "ru",
    "Japanese": "ja",
    "Javanese": "jv",
    "German": "de",
    "Korean": "ko",
    "French": "fr",
    "Telugu": "te",
    "Marathi": "mr",
    "Turkish": "tr",
    "Tamil": "ta",
    "Vietnamese": "vi",
    "Urdu": "ur"
  };

  const languages = Object.keys(languageCodeMap);

  return (
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor={ languageVariable }>{ label }</InputLabel>
          <Select
            //value={languageVariable}
            //onChange={languageVariableUpdater}
            inputProps={{
              id: { languageVariable },
            }}
          >
            {languages.map(language => (
              <MenuItem value={languageCodeMap[language]}>{language}</MenuItem>
            ))}
          </Select>
        </FormControl>
  );
}

function Header() {
  return (
    <Typography variant="h5" component="h3">
      Subtitle Info
    </Typography>
  );
}
export default function UserData() {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <Header />
        <div className={classes.flex}>
          <form className={classes.root} autoComplete="off">
            <SelectLanguage languageVariable={ "primaryLanguage" }/>
            <SelectLanguage languageVariable={ "targetLanguage" }/>
            <Button 
              variant="contained" 
              color="primary" 
              className={classes.button}
            >
              Submit 
            </Button>
          </form>
        </div>
      </Paper>
    </div>
  );
  
}
