import { Widget, WidgetMouseEvents } from "../types";

export type WidgetButtonArgs = [Text: string];

export interface WidgetButton extends Widget, WidgetMouseEvents {
	state: undefined;
}
