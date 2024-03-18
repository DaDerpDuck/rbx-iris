import { State, Widget, WidgetCheckedEvents, WidgetHoveredEvent } from "../types";

export type WidgetCheckboxArgs = [Text: string];

export interface WidgetCheckbox extends Widget, WidgetHoveredEvent, WidgetCheckedEvents {
	state: {
		isChecked: State<boolean>;
	};
}
