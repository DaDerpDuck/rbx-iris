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

export type WidgetTreeArgs = [Text: string, SpanAvailWidth?: boolean, NoIndent?: boolean];
export interface WidgetTree extends AbstractWidgetTree {}

export type WidgetCollapsingHeaderArgs = [Text: string];
export interface WidgetCollapsingHeader extends AbstractWidgetTree {}
