import { Config, ID, Internal, State, Widget, WidgetArguments, WidgetStates } from "./types";

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
	Window: (arguments: WidgetArguments, states?: WidgetStates) => Widget;
	Tooltip: (arguments: WidgetArguments) => Widget;

	// Menu Widget API
	MenuBar: () => Widget;
	Menu: (arguments: WidgetArguments, states?: WidgetStates) => Widget;
	MenuItem: (arguments: WidgetArguments) => Widget;
	MenuToggle: (arguments: WidgetArguments, states?: WidgetStates) => Widget;

	// Format Widget API
	Separator: () => Widget;
	Indent: (arguments?: WidgetArguments) => Widget;
	SameLine: (arguments?: WidgetArguments) => Widget;
	Group: () => Widget;

	// Text Widget API
	Text: (arguments: WidgetArguments) => Widget;
	TextWrapped: (arguments: WidgetArguments) => Widget;
	TextColored: (arguments: WidgetArguments) => Widget;
	SeparatorText: (arguments: WidgetArguments) => Widget;
	InputText: (arguments: WidgetArguments, states?: WidgetStates) => Widget;

	// Basic Widget API
	Button: (arguments: WidgetArguments) => Widget;
	SmallButton: (arguments: WidgetArguments) => Widget;
	Checkbox: (arguments: WidgetArguments, states?: WidgetStates) => Widget;
	RadioButton: (arguments: WidgetArguments, states?: WidgetStates) => Widget;

	// Tree Widget API
	Tree: (arguments: WidgetArguments, states?: WidgetStates) => Widget;
	CollapsingHeader: (arguments: WidgetArguments, states?: WidgetStates) => Widget;

	// Input Widget API
	InputNum: (arguments: WidgetArguments, states?: WidgetStates) => Widget;
	InputVector2: (arguments: WidgetArguments, states?: WidgetStates) => Widget;
	InputVector3: (arguments: WidgetArguments, states?: WidgetStates) => Widget;
	InputUDim: (arguments: WidgetArguments, states?: WidgetStates) => Widget;
	InputUDim2: (arguments: WidgetArguments, states?: WidgetStates) => Widget;
	InputRect: (arguments: WidgetArguments, states?: WidgetStates) => Widget;
	InputColor3: (arguments: WidgetArguments, states?: WidgetStates) => Widget;
	InputColor4: (arguments: WidgetArguments, states?: WidgetStates) => Widget;

	// Drag Widget API
	DragNum: (arguments: WidgetArguments, states?: WidgetStates) => Widget;
	DragVector2: (arguments: WidgetArguments, states?: WidgetStates) => Widget;
	DragVector3: (arguments: WidgetArguments, states?: WidgetStates) => Widget;
	DragUDim: (arguments: WidgetArguments, states?: WidgetStates) => Widget;
	DragUDim2: (arguments: WidgetArguments, states?: WidgetStates) => Widget;
	DragRect: (arguments: WidgetArguments, states?: WidgetStates) => Widget;

	// Slider Widget API
	SliderNum: (arguments: WidgetArguments, states?: WidgetStates) => Widget;
	SliderVector2: (arguments: WidgetArguments, states?: WidgetStates) => Widget;
	SliderVector3: (arguments: WidgetArguments, states?: WidgetStates) => Widget;
	SliderUDim: (arguments: WidgetArguments, states?: WidgetStates) => Widget;
	SliderUDim2: (arguments: WidgetArguments, states?: WidgetStates) => Widget;
	SliderRect: (arguments: WidgetArguments, states?: WidgetStates) => Widget;
	SliderEnum: (arguments: WidgetArguments, states?: WidgetStates) => Widget;

	// Combo Widget Widget API
	Selectable: (arguments: WidgetArguments, states?: WidgetStates) => Widget;
	Combo: (arguments: WidgetArguments, states?: WidgetStates) => Widget;
	ComboArray: (arguments: WidgetArguments, states: WidgetStates | undefined, selectionArray: unknown[]) => Widget;
	ComboEnum: (arguments: WidgetArguments, states: WidgetStates | undefined, enumType: Enum) => Widget;
	InputEnum: (arguments: WidgetArguments, states: WidgetStates | undefined, enumType: Enum) => Widget;

	ProgressBar: (arguments: WidgetArguments, states?: WidgetStates) => Widget;

	// Table Widget Api
	Table: (arguments: WidgetArguments) => Widget;
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
