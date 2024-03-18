import {
	EventAPI,
	State,
	Widget,
	WidgetClickedEvent,
	WidgetHoveredEvent,
	WidgetMouseEvents,
	WidgetOpenedEvents,
} from "../types";

export interface WidgetSelectable extends Widget, WidgetMouseEvents {
	state: {
		index: State;
	};

	lastSelectedTick: number;
	lastUnselectedTick: number;

	selected: EventAPI;
	unselected: EventAPI;
	active: EventAPI;

	ButtonColors: {
		ButtonColor: Color3;
		ButtonTransparency: number;
		ButtonHoveredColor: Color3;
		ButtonHoveredTransparency: number;
		ButtonActiveColor: Color3;
		ButtonActiveTransparency: number;
	};
}

export interface WidgetCombo extends Widget, WidgetHoveredEvent, WidgetClickedEvent, WidgetOpenedEvents {
	state: {
		index: State;
		isOpened: State<boolean>;
	};

	ComboChildrenHeight: number;
	ChildContainer: GuiObject;
}

export interface WidgetComboArray extends WidgetCombo {}

export interface WidgetComboEnum extends WidgetCombo {}
