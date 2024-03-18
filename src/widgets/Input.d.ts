import { EventAPI, State, Widget, WidgetHoveredEvent, WidgetNumberChangedEvent } from "../types";

export type WidgetInputArgs<T> = [
	Text?: string,
	Increment?: T | number,
	Min?: T | number,
	Max?: T | number,
	Format?: string | string[],
	NoButtons?: boolean,
];
export interface WidgetInput<T> extends Widget, WidgetHoveredEvent, WidgetNumberChangedEvent {
	state: {
		number: State<T>;
		editingText: State<boolean | number>;
	};
}

export type WidgetDragArgs<T> = [
	Text?: string,
	Increment?: T | number,
	Min?: T | number,
	Max?: T | number,
	Format?: string | string[],
];
export interface WidgetDrag<T> extends WidgetInput<T> {}

export type WidgetInputColorArgs = [Text?: string, UseFloats?: boolean, UseHSV?: boolean, Format?: string];
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

export type WidgetSliderArgs<T> = WidgetDragArgs<T>;
export interface WidgetSlider<T> extends WidgetInput<T> {}

export type WidgetInputTextArgs = [Text?: string, TextHint?: string];
export interface WidgetInputText extends Widget, WidgetHoveredEvent {
	state: {
		text: State<string>;
	};

	lastTextchangeTick?: number;

	textChanged: EventAPI;
}
