// Log events to google analytics
import { analytics } from '../firebase/firebase';

const logEvent = (event, ...info) => {
  return () => analytics.logEvent(event, ...info);
};

export { logEvent as default };
