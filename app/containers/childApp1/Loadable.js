/**
 * Asynchronously loads the component for childApp1
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
