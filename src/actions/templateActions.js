// this is an action creator and it returns and object

export const increment = (n) => {
    return {
        type: 'INCREMENT',
        data: n,
    };
};

//this is not a named export.  When we import into out component we have to import like this
/**
 *  import {increment} from './path'
 */

/**
 * named export
 * export default increment
 *
 * import increment from './path'
 */
