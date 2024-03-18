import { Widget, WidgetHoveredEvent } from "../types";

export interface WidgetTable extends Widget, WidgetHoveredEvent {
	state: undefined;

	InitialNumColumns: number;
	RowColumnIndex: number;
	ColumnInstances: Frame[];
	CellInstances: Frame[];
}
