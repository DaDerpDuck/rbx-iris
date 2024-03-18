import { State, Widget, WidgetHoveredEvent, WidgetNumberChangedEvent } from "../types";

export interface WidgetProgressBar extends Widget, WidgetHoveredEvent, WidgetNumberChangedEvent {
	state: {
		progress: State<number>;
	};
}
