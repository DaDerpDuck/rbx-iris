import {
	State,
	Widget,
	WidgetCheckedEvents,
	WidgetClickedEvent,
	WidgetHoveredEvent,
	WidgetOpenedEvents,
} from "../types";

export interface WidgetMenuBar extends Widget {
	state: undefined;
}

export interface WidgetMenu extends Widget, WidgetHoveredEvent, WidgetClickedEvent, WidgetOpenedEvents {
	state: {
		isOpened: State<boolean>;
	};
}

export interface WidgetMenuItem extends Widget, WidgetHoveredEvent, WidgetClickedEvent {
	state: undefined;
}

export interface WidgetMenuToggle extends Widget, WidgetHoveredEvent, WidgetCheckedEvents {
	state: {
		isChecked: State<boolean>;
	};
}
