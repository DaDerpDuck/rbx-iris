import { Config, ID, Internal, State, Widget, WidgetArguments, WidgetStates } from "./types";
import { WidgetButton } from "./widgets/Button";
import { WidgetCheckbox } from "./widgets/Checkbox";
import { WidgetCombo, WidgetComboArray, WidgetComboEnum, WidgetSelectable } from "./widgets/Combo";
import { WidgetFormat } from "./widgets/Format";
import {
	WidgetDrag,
	WidgetInput,
	WidgetInputColor3,
	WidgetInputColor4,
	WidgetInputText,
	WidgetSlider,
} from "./widgets/Input";
import { WidgetMenu, WidgetMenuBar, WidgetMenuItem, WidgetMenuToggle } from "./widgets/Menu";
import { WidgetProgressBar } from "./widgets/Plot";
import { WidgetRadioButton } from "./widgets/RadioButton";
import { WidgetTable } from "./widgets/Table";
import { WidgetSeparatorText, WidgetText } from "./widgets/Text";
import { WidgetCollapsingHeader, WidgetTree } from "./widgets/Tree";
import { WidgetTooltip, WidgetWindow } from "./widgets/Window";

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
	Window: (arguments: WidgetArguments, states?: Partial<WidgetWindow["state"]>) => WidgetWindow;
	Tooltip: (arguments: WidgetArguments) => WidgetTooltip;

	// Menu Widget API
	MenuBar: () => WidgetMenuBar;
	Menu: (arguments: WidgetArguments, states?: Partial<WidgetMenu["state"]>) => WidgetMenu;
	MenuItem: (arguments: WidgetArguments) => WidgetMenuItem;
	MenuToggle: (arguments: WidgetArguments, states?: Partial<WidgetMenuToggle["state"]>) => WidgetMenuToggle;

	// Format Widget API
	Separator: () => WidgetFormat;
	Indent: (arguments?: WidgetArguments) => WidgetFormat;
	SameLine: (arguments?: WidgetArguments) => WidgetFormat;
	Group: () => WidgetFormat;

	// Text Widget API
	Text: (arguments: WidgetArguments) => WidgetText;
	/** @deprecated */
	TextWrapped: (arguments: WidgetArguments) => WidgetText;
	/** @deprecated */
	TextColored: (arguments: WidgetArguments) => WidgetText;
	SeparatorText: (arguments: WidgetArguments) => WidgetSeparatorText;
	InputText: (arguments: WidgetArguments, states?: Partial<WidgetInputText["state"]>) => WidgetInputText;

	// Basic Widget API
	Button: (arguments: WidgetArguments) => WidgetButton;
	SmallButton: (arguments: WidgetArguments) => WidgetButton;
	Checkbox: (arguments: WidgetArguments, states?: Partial<WidgetCheckbox["state"]>) => WidgetCheckbox;
	RadioButton: (arguments: WidgetArguments, states?: Partial<WidgetRadioButton["state"]>) => WidgetRadioButton;

	// Tree Widget API
	Tree: (arguments: WidgetArguments, states?: Partial<WidgetTree["state"]>) => WidgetTree;
	CollapsingHeader: (
		arguments: WidgetArguments,
		states?: Partial<WidgetCollapsingHeader["state"]>,
	) => WidgetCollapsingHeader;

	// Input Widget API
	InputNum: (arguments: WidgetArguments, states?: Partial<WidgetInput<number>["state"]>) => WidgetInput<number>;
	InputVector2: (arguments: WidgetArguments, states?: Partial<WidgetInput<Vector2>["state"]>) => WidgetInput<Vector2>;
	InputVector3: (arguments: WidgetArguments, states?: Partial<WidgetInput<Vector3>["state"]>) => WidgetInput<Vector3>;
	InputUDim: (arguments: WidgetArguments, states?: Partial<WidgetInput<UDim>["state"]>) => WidgetInput<UDim>;
	InputUDim2: (arguments: WidgetArguments, states?: Partial<WidgetInput<UDim2>["state"]>) => WidgetInput<UDim2>;
	InputRect: (arguments: WidgetArguments, states?: Partial<WidgetInput<Rect>["state"]>) => WidgetInput<Rect>;
	InputColor3: (arguments: WidgetArguments, states?: Partial<WidgetInputColor3["state"]>) => WidgetInputColor3;
	InputColor4: (arguments: WidgetArguments, states?: Partial<WidgetInputColor4["state"]>) => WidgetInputColor4;

	// Drag Widget API
	DragNum: (arguments: WidgetArguments, states?: Partial<WidgetDrag<number>["state"]>) => WidgetDrag<number>;
	DragVector2: (arguments: WidgetArguments, states?: Partial<WidgetDrag<Vector2>["state"]>) => WidgetDrag<Vector2>;
	DragVector3: (arguments: WidgetArguments, states?: Partial<WidgetDrag<Vector3>["state"]>) => WidgetDrag<Vector3>;
	DragUDim: (arguments: WidgetArguments, states?: Partial<WidgetDrag<UDim>["state"]>) => WidgetDrag<UDim>;
	DragUDim2: (arguments: WidgetArguments, states?: Partial<WidgetDrag<UDim2>["state"]>) => WidgetDrag<UDim2>;
	DragRect: (arguments: WidgetArguments, states?: Partial<WidgetDrag<Rect>["state"]>) => WidgetDrag<Rect>;

	// Slider Widget API
	SliderNum: (arguments: WidgetArguments, states?: Partial<WidgetSlider<number>["state"]>) => WidgetSlider<number>;
	SliderVector2: (
		arguments: WidgetArguments,
		states?: Partial<WidgetSlider<Vector2>["state"]>,
	) => WidgetSlider<Vector2>;
	SliderVector3: (
		arguments: WidgetArguments,
		states?: Partial<WidgetSlider<Vector3>["state"]>,
	) => WidgetSlider<Vector3>;
	SliderUDim: (arguments: WidgetArguments, states?: Partial<WidgetSlider<UDim>["state"]>) => WidgetSlider<UDim>;
	SliderUDim2: (arguments: WidgetArguments, states?: Partial<WidgetSlider<UDim2>["state"]>) => WidgetSlider<UDim2>;
	SliderRect: (arguments: WidgetArguments, states?: Partial<WidgetSlider<Rect>["state"]>) => WidgetSlider<Rect>;
	// SliderEnum: (arguments: WidgetArguments, states?: WidgetStates) => Widget;

	// Combo Widget Widget API
	Selectable: (arguments: WidgetArguments, states?: Partial<WidgetSelectable["state"]>) => WidgetSelectable;
	Combo: (arguments: WidgetArguments, states?: Partial<WidgetCombo["state"]>) => WidgetCombo;
	ComboArray: (
		arguments: WidgetArguments,
		states: Partial<WidgetComboArray["state"]> | undefined,
		selectionArray: unknown[],
	) => WidgetComboArray;
	ComboEnum: (
		arguments: WidgetArguments,
		states: Partial<WidgetComboEnum["state"]> | undefined,
		enumType: Enum,
	) => WidgetComboEnum;
	InputEnum: (
		arguments: WidgetArguments,
		states: Partial<WidgetComboEnum["state"]> | undefined,
		enumType: Enum,
	) => WidgetComboEnum;

	ProgressBar: (arguments: WidgetArguments, states?: Partial<WidgetProgressBar["state"]>) => WidgetProgressBar;

	// Table Widget Api
	Table: (arguments: WidgetArguments) => WidgetTable;
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
	ComputedState: <T>(firstState: State<T>, onChangeCallback: (firstState: T) => T) => State<T>;

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
