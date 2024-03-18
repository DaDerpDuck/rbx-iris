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

export type WidgetMenuArgs = [Text: string];
export interface WidgetMenu extends Widget, WidgetHoveredEvent, WidgetClickedEvent, WidgetOpenedEvents {
	state: {
		isOpened: State<boolean>;
	};
}

export type WidgetMenuItemArgs = [Text: string, KeyCode?: Enum.KeyCode, ModifierKey?: Enum.ModifierKey];
export interface WidgetMenuItem extends Widget, WidgetHoveredEvent, WidgetClickedEvent {
	state: undefined;
}

export type WidgetMenuToggleArgs = WidgetMenuItemArgs;
export interface WidgetMenuToggle extends Widget, WidgetHoveredEvent, WidgetCheckedEvents {
	state: {
		isChecked: State<boolean>;
	};
}
