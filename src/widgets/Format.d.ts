import { Widget } from "../types";

export type WidgetIndentArgs = [Width?: number];
export type WidgetSamelineArgs = [Width?: number, VerticalAlignment?: Enum.VerticalAlignment];
export interface WidgetFormat extends Widget {
	state: undefined;
}
