import { SET_SETTINGS} from "../actions/SettingsActions"

let initialState = {settings:{semaUrl:"http://dlo.semawater.org", site:"", user:"", password:"", uiLanguage: {name: 'English', iso_code: 'en'}, token:"", sitedId:""}};

const settingsReducer = (state = initialState, action) => {
	let newState;
	console.log("settingsReducer: " +action.type);
	switch (action.type) {
		case SET_SETTINGS:
			newState = {...state};
			newState.settings = action.data ;
			console.log( JSON.stringify(newState));
			return newState;

		default:
			return state;
	}
};

export default settingsReducer;
