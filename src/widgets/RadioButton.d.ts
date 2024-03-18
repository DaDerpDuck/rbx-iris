import { EventAPI, State, Widget, WidgetHoveredEvent, WidgetSelectedEvents } from "../types";

export interface WidgetRadioButton extends Widget, WidgetHoveredEvent, WidgetSelectedEvents {
	state: {
		index: State;
	};

	active: EventAPI;
}
