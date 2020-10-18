import { APP_ACTION_CONST } from 'redux/constants'

export const showLoader = () => ({ type: APP_ACTION_CONST.LOADING_TRUE })
export const hideLoader = () => ({ type: APP_ACTION_CONST.LOADING_FALSE })
