import { EventAPI, State, Widget, WidgetHoveredEvent, WidgetNumberChangedEvent } from "../types";

export interface WidgetInput<T> extends Widget, WidgetHoveredEvent, WidgetNumberChangedEvent {
	state: {
		number: State<T>;
		editingText: State<boolean | number>;
	};
}

export interface WidgetDrag<T> extends WidgetInput<T> {}

export interface WidgetInputColor3 extends Widget, WidgetHoveredEvent, WidgetNumberChangedEvent {
	state: {
		color: State<Color3>;
		editingText: State<boolean | number>;
	};
}

export interface WidgetInputColor4 extends WidgetInputColor3 {
	state: {
		color: State<Color3>;
		transparency: State<number>;
		editingText: State<boolean | number>;
	};
}

export interface WidgetSlider<T> extends WidgetInput<T> {}

export interface WidgetInputText extends Widget, WidgetHoveredEvent {
	state: {
		text: State<string>;
	};

	lastTextchangeTick?: number;

	textChanged: EventAPI;
}
