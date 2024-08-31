import { Widget, WidgetHoveredEvent, WidgetMouseEvents } from "../types";

export type WidgetImageArgs = [
	Image: string,
	Size: UDim2,
	Rect?: Rect,
	ScaleType?: Enum.ScaleType,
	ResampleMode?: Enum.ResamplerMode,
	TileSize?: UDim2,
	SliceCenter?: Rect,
	SliceScale?: number,
];

export interface WidgetImage extends Widget, WidgetHoveredEvent {}

export type WidgetImageButtonArgs = WidgetImageArgs;

export interface WidgetImageButton extends Widget, WidgetMouseEvents {}
