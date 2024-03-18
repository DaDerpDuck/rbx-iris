import { EventAPI, State, Widget, WidgetHoveredEvent, WidgetSelectedEvents } from "../types";

export type WidgetRadioButtonArgs<T> = [Text: string, Index: T];
export interface WidgetRadioButton<T> extends Widget, WidgetHoveredEvent, WidgetSelectedEvents {
	state: {
		index: State<T>;
	};

	active: EventAPI;
}
