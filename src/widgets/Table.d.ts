import { Widget, WidgetHoveredEvent } from "../types";

export type WidgetTableArgs = [NumColumns: number, RowBg?: boolean, BordersOuter?: boolean, BordersInner?: boolean];
export interface WidgetTable extends Widget, WidgetHoveredEvent {
	state: undefined;

	InitialNumColumns: number;
	RowColumnIndex: number;
	ColumnInstances: Frame[];
	CellInstances: Frame[];
}
