import {
	EventAPI,
	State,
	Widget,
	WidgetClickedEvent,
	WidgetHoveredEvent,
	WidgetMouseEvents,
	WidgetOpenedEvents,
} from "../types";

export type WidgetSelectableArgs<T> = [Text: string, Index: T, NoClick?: boolean];
export interface WidgetSelectable<T> extends Widget, WidgetMouseEvents {
	state: {
		index: State<T>;
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

export type WidgetComboArgs = [Text: string, NoButton?: boolean, NoPreview?: boolean];
export interface WidgetCombo<T = unknown> extends Widget, WidgetHoveredEvent, WidgetClickedEvent, WidgetOpenedEvents {
	state: {
		index: State<T>;
		isOpened: State<boolean>;
	};

	ComboChildrenHeight: number;
	ChildContainer: GuiObject;
}

export interface WidgetComboArray<T> extends WidgetCombo<T> {}

export interface WidgetComboEnum<T extends Enum> extends WidgetCombo<T> {}
