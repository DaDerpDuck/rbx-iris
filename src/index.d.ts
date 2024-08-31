import { Config, ID, Internal, State, Widget, WidgetArguments } from "./types";
import { WidgetButton, WidgetButtonArgs } from "./widgets/Button";
import { WidgetCheckbox, WidgetCheckboxArgs } from "./widgets/Checkbox";
import {
	WidgetCombo,
	WidgetComboArgs,
	WidgetComboArray,
	WidgetComboEnum,
	WidgetSelectable,
	WidgetSelectableArgs,
} from "./widgets/Combo";
import { WidgetFormat, WidgetIndentArgs, WidgetSamelineArgs } from "./widgets/Format";
import { WidgetImage, WidgetImageArgs, WidgetImageButton, WidgetImageButtonArgs } from "./widgets/Image";
import {
	WidgetDrag,
	WidgetDragArgs,
	WidgetInput,
	WidgetInputArgs,
	WidgetInputColor3,
	WidgetInputColor4,
	WidgetInputColorArgs,
	WidgetInputText,
	WidgetInputTextArgs,
	WidgetSlider,
	WidgetSliderArgs,
} from "./widgets/Input";
import {
	WidgetMenu,
	WidgetMenuArgs,
	WidgetMenuBar,
	WidgetMenuItem,
	WidgetMenuItemArgs,
	WidgetMenuToggle,
	WidgetMenuToggleArgs,
} from "./widgets/Menu";
import { WidgetProgressBar, WidgetProgressBarArgs } from "./widgets/Plot";
import { WidgetRadioButton, WidgetRadioButtonArgs } from "./widgets/RadioButton";
import { WidgetTable, WidgetTableArgs } from "./widgets/Table";
import { WidgetSeparatorText, WidgetSeparatorTextArgs, WidgetText, WidgetTextArgs } from "./widgets/Text";
import { WidgetCollapsingHeader, WidgetCollapsingHeaderArgs, WidgetTree, WidgetTreeArgs } from "./widgets/Tree";
import {
	WidgetTooltip,
	WindowTooltipArgs as WidgetTooltipArgs,
	WidgetWindow,
	WidgetWindowArgs,
} from "./widgets/Window";

type TemplateConfigs = {
	colorDark: Partial<Config>;
	colorLight: Partial<Config>;
	sizeDefault: Partial<Config>;
	sizeClear: Partial<Config>;
	utilityDefault: Partial<Config>;
};

type Iris = {
	/*
        -----------
          WIDGETS
        -----------
    */

	End: () => void;

	// Window API
	Window: (arguments: WidgetWindowArgs, states?: Partial<WidgetWindow["state"]>) => WidgetWindow;
	Tooltip: (arguments: WidgetTooltipArgs) => WidgetTooltip;

	// Menu Widget API
	MenuBar: () => WidgetMenuBar;
	Menu: (arguments: WidgetMenuArgs, states?: Partial<WidgetMenu["state"]>) => WidgetMenu;
	MenuItem: (arguments: WidgetMenuItemArgs) => WidgetMenuItem;
	MenuToggle: (arguments: WidgetMenuToggleArgs, states?: Partial<WidgetMenuToggle["state"]>) => WidgetMenuToggle;

	// Format Widget API
	Separator: () => WidgetFormat;
	Indent: (arguments?: WidgetIndentArgs) => WidgetFormat;
	SameLine: (arguments?: WidgetSamelineArgs) => WidgetFormat;
	Group: () => WidgetFormat;

	// Text Widget API
	Text: (arguments: WidgetTextArgs) => WidgetText;
	/** @deprecated */
	TextWrapped: (arguments: WidgetArguments) => WidgetText;
	/** @deprecated */
	TextColored: (arguments: WidgetArguments) => WidgetText;
	SeparatorText: (arguments: WidgetSeparatorTextArgs) => WidgetSeparatorText;
	InputText: (arguments: WidgetInputTextArgs, states?: Partial<WidgetInputText["state"]>) => WidgetInputText;

	// Basic Widget API
	Button: (arguments: WidgetButtonArgs) => WidgetButton;
	SmallButton: (arguments: WidgetButtonArgs) => WidgetButton;
	Checkbox: (arguments: WidgetCheckboxArgs, states?: Partial<WidgetCheckbox["state"]>) => WidgetCheckbox;
	RadioButton: <T>(
		arguments: WidgetRadioButtonArgs<T>,
		states?: Partial<WidgetRadioButton<T>["state"]>,
	) => WidgetRadioButton<T>;

	// Image Widget API
	Image: (arguments: WidgetImageArgs) => WidgetImage;
	ImageButton: (arguments: WidgetImageButtonArgs) => WidgetImageButton;

	// Tree Widget API
	Tree: (arguments: WidgetTreeArgs, states?: Partial<WidgetTree["state"]>) => WidgetTree;
	CollapsingHeader: (
		arguments: WidgetCollapsingHeaderArgs,
		states?: Partial<WidgetCollapsingHeader["state"]>,
	) => WidgetCollapsingHeader;

	// Input Widget API
	InputNum: (
		arguments: WidgetInputArgs<number>,
		states?: Partial<WidgetInput<number>["state"]>,
	) => WidgetInput<number>;
	InputVector2: (
		arguments: WidgetInputArgs<Vector2>,
		states?: Partial<WidgetInput<Vector2>["state"]>,
	) => WidgetInput<Vector2>;
	InputVector3: (
		arguments: WidgetInputArgs<Vector3>,
		states?: Partial<WidgetInput<Vector3>["state"]>,
	) => WidgetInput<Vector3>;
	InputUDim: (arguments: WidgetInputArgs<UDim>, states?: Partial<WidgetInput<UDim>["state"]>) => WidgetInput<UDim>;
	InputUDim2: (
		arguments: WidgetInputArgs<UDim2>,
		states?: Partial<WidgetInput<UDim2>["state"]>,
	) => WidgetInput<UDim2>;
	InputRect: (arguments: WidgetInputArgs<Rect>, states?: Partial<WidgetInput<Rect>["state"]>) => WidgetInput<Rect>;
	InputColor3: (arguments: WidgetInputColorArgs, states?: Partial<WidgetInputColor3["state"]>) => WidgetInputColor3;
	InputColor4: (arguments: WidgetInputColorArgs, states?: Partial<WidgetInputColor4["state"]>) => WidgetInputColor4;

	// Drag Widget API
	DragNum: (arguments: WidgetDragArgs<number>, states?: Partial<WidgetDrag<number>["state"]>) => WidgetDrag<number>;
	DragVector2: (
		arguments: WidgetDragArgs<Vector2>,
		states?: Partial<WidgetDrag<Vector2>["state"]>,
	) => WidgetDrag<Vector2>;
	DragVector3: (
		arguments: WidgetDragArgs<Vector3>,
		states?: Partial<WidgetDrag<Vector3>["state"]>,
	) => WidgetDrag<Vector3>;
	DragUDim: (arguments: WidgetDragArgs<UDim>, states?: Partial<WidgetDrag<UDim>["state"]>) => WidgetDrag<UDim>;
	DragUDim2: (arguments: WidgetDragArgs<UDim2>, states?: Partial<WidgetDrag<UDim2>["state"]>) => WidgetDrag<UDim2>;
	DragRect: (arguments: WidgetDragArgs<Rect>, states?: Partial<WidgetDrag<Rect>["state"]>) => WidgetDrag<Rect>;

	// Slider Widget API
	SliderNum: (
		arguments: WidgetSliderArgs<number>,
		states?: Partial<WidgetSlider<number>["state"]>,
	) => WidgetSlider<number>;
	SliderVector2: (
		arguments: WidgetSliderArgs<Vector2>,
		states?: Partial<WidgetSlider<Vector2>["state"]>,
	) => WidgetSlider<Vector2>;
	SliderVector3: (
		arguments: WidgetSliderArgs<Vector3>,
		states?: Partial<WidgetSlider<Vector3>["state"]>,
	) => WidgetSlider<Vector3>;
	SliderUDim: (
		arguments: WidgetSliderArgs<UDim>,
		states?: Partial<WidgetSlider<UDim>["state"]>,
	) => WidgetSlider<UDim>;
	SliderUDim2: (
		arguments: WidgetSliderArgs<UDim2>,
		states?: Partial<WidgetSlider<UDim2>["state"]>,
	) => WidgetSlider<UDim2>;
	SliderRect: (
		arguments: WidgetSliderArgs<Rect>,
		states?: Partial<WidgetSlider<Rect>["state"]>,
	) => WidgetSlider<Rect>;
	// SliderEnum: (arguments: WidgetArguments, states?: WidgetStates) => Widget;

	// Combo Widget Widget API
	Selectable: <T>(
		arguments: WidgetSelectableArgs<T>,
		states?: Partial<WidgetSelectable<T>["state"]>,
	) => WidgetSelectable<T>;
	Combo: (arguments: WidgetComboArgs, states?: Partial<WidgetCombo["state"]>) => WidgetCombo;
	ComboArray: <T>(
		arguments: WidgetComboArgs,
		states: Partial<WidgetComboArray<T>["state"]> | undefined,
		selectionArray: T[],
	) => WidgetComboArray<T>;
	ComboEnum: <T extends Enum>(
		arguments: WidgetComboArgs,
		states: Partial<WidgetComboEnum<T>["state"]> | undefined,
		enumType: T,
	) => WidgetComboEnum<T>;
	InputEnum: <T extends Enum>(
		arguments: WidgetComboArgs,
		states: Partial<WidgetComboEnum<T>["state"]> | undefined,
		enumType: T,
	) => WidgetComboEnum<T>;

	ProgressBar: (arguments: WidgetProgressBarArgs, states?: Partial<WidgetProgressBar["state"]>) => WidgetProgressBar;

	// Table Widget Api
	Table: (arguments: WidgetTableArgs) => WidgetTable;
	NextColumn: () => void;
	SetColumnIndex: (columnIndex: number) => void;
	NextRow: () => void;

	/*
        ---------
          STATE
        ---------
    */

	State: <T>(initialValue: T) => State<T>;
	WeakState: <T>(initialValue: T) => State<T>;
	ComputedState: <T, R>(firstState: State<T>, onChangeCallback: (firstState: T) => R) => State<R>;

	/*
        -------------
          FUNCTIONS
        -------------
    */

	Init: (playerInstance?: BasePlayerGui, eventConnection?: RBXScriptConnection | (() => void)) => Iris;
	Shutdown: () => void;
	Connect: (this: Iris, callback: () => void) => void;
	Append: (userInstance: GuiObject) => void;
	ForceRefresh: () => void;

	// Widget
	SetFocusedWindow: (thisWidget?: Widget) => void;

	// ID API
	PushId: (id: ID) => void;
	PopId: () => void;
	SetNextWidgetID: (id: ID) => void;

	// Config API
	UpdateGlobalConfig: (deltaStyle: Partial<Config>) => void;
	PushConfig: (deltaStyle: Partial<Config>) => void;
	PopConfig: () => void;

	/*
        --------------
          PROPERTIES
        --------------
    */

	Internal: Internal;
	Disabled: boolean;
	Args: Record<string, Record<string, number>>;
	Events: Record<string, () => boolean>;

	TemplateConfig: TemplateConfigs;
	_config: Config;
	ShowDemoWindow: () => Widget;
};

declare const Iris: Iris;
export = Iris;
