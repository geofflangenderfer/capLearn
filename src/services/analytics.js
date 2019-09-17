import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('UA-144035517-1', {
      gaOptions: {
          siteSpeedSampleRate: 100
      }
  });
};
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (data) => {
  console.log('event logged!');
  ReactGA.event(data);
};
