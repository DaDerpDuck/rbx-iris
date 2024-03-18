import { Widget, WidgetHoveredEvent } from "../types";

export type WidgetTextArgs = [Text: string, Wrapped?: boolean, Color?: Color3, RichText?: boolean];
export interface WidgetText extends Widget, WidgetHoveredEvent {
	state: undefined;
}

export type WidgetSeparatorTextArgs = [Text: string];
export interface WidgetSeparatorText extends Widget, WidgetHoveredEvent {
	state: undefined;
}
