import { State, Widget, WidgetHoveredEvent, WidgetNumberChangedEvent } from "../types";

export type WidgetProgressBarArgs = [Text?: string, Format?: string];
export interface WidgetProgressBar extends Widget, WidgetHoveredEvent, WidgetNumberChangedEvent {
	state: {
		progress: State<number>;
	};
}
