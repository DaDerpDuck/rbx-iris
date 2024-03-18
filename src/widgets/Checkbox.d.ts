import { State, Widget, WidgetCheckedEvents, WidgetHoveredEvent } from "../types";

export interface WidgetCheckbox extends Widget, WidgetHoveredEvent, WidgetCheckedEvents {
	state: {
		isChecked: State<boolean>;
	};
}
