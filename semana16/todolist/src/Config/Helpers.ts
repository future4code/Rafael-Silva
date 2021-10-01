/**
 * ###################
 * ###   REQUEST   ###
 * ###################
 */

export const uuid = () => {
    return Number(Date.now().toString(10).substr(2, 4)) + Number(Math.random().toString(10).substr(2, 4));
}