import { Widget, WidgetMouseEvents } from "../types";

export interface WidgetButton extends Widget, WidgetMouseEvents {
	state: undefined;
}
