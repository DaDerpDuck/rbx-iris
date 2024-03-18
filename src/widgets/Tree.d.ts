import { EventAPI, State, Widget, WidgetHoveredEvent } from "../types";

interface AbstractWidgetTree extends Widget, WidgetHoveredEvent {
	state: {
		isUncollapsed: State<boolean>;
	};

	lastCollapsedTick?: number;
	lastUncollapsedTick?: number;

	collapsed: EventAPI;
	uncollapsed: EventAPI;
}

export interface WidgetTree extends AbstractWidgetTree {}

export interface WidgetCollapsingHeader extends AbstractWidgetTree {}
