import { EventAPI, State, Widget, WidgetHoveredEvent, WidgetOpenedEvents } from "../types";

export type WindowTooltipArgs = [Text: string];
export interface WidgetTooltip extends Widget {}

export type WidgetWindowArgs = [
	Title: string,
	NoTitleBar?: boolean,
	NoBackground?: boolean,
	NoCollapse?: boolean,
	NoMove?: boolean,
	NoScrollbar?: boolean,
	NoResize?: boolean,
	NoNav?: boolean,
	NoMenu?: boolean,
];
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
