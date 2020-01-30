/**
 * Asynchronously loads the component for childApp2
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
