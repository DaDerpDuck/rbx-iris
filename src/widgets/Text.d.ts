import { Widget, WidgetHoveredEvent } from "../types";

export interface WidgetText extends Widget, WidgetHoveredEvent {
	state: undefined;
}

export interface WidgetSeparatorText extends Widget, WidgetHoveredEvent {
	state: undefined;
}
