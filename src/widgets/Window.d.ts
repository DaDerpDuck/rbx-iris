import { EventAPI, State, Widget, WidgetHoveredEvent, WidgetOpenedEvents } from "../types";

export interface WidgetTooltip extends Widget {}

export interface WidgetWindow extends Widget, WidgetHoveredEvent, WidgetOpenedEvents {
	state: {
		size: State<Vector2>;
		position: State<Vector2>;
		isUncollapsed: State<boolean>;
		isOpened: State<boolean>;
		scrollDistance: State<number>;
	};

	usesScreenGUI: boolean;

	lastCollapsedTick?: number;
	lastUncollapsedTick?: number;

	collapsed: EventAPI;
	uncollapsed: EventAPI;
}
