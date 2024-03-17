export type ID = string;

export type Argument = unknown;
export type Arguments = Record<string, Argument> & {
	Text: string;
	TextHint: string;
	Wrapped: boolean;
	Color: Color3;
	RichText: boolean;

	Increment: InputDataType;
	Min: InputDataType;
	Max: InputDataType;
	Format: string[];
	UseFloats: boolean;
	UseHSV: boolean;
	UseHex: boolean;
	Prefix: string[];

	Width: number;
	VerticalAlignment: Enum.VerticalAlignment;
	Index: unknown;

	SpanAvailWidth: boolean;
	NoIdent: boolean;
	NoClick: boolean;
	NoButtons: boolean;
	NoButton: boolean;
	NoPreview: boolean;

	NumColumns: number;
	RowBg: boolean;
	BordersOuter: boolean;
	BordersInner: boolean;

	Title: string;
	NoTitleBar: boolean;
	NoBackground: boolean;
	NoCollapse: boolean;
	NoClose: boolean;
	NoMove: boolean;
	NoScrollbar: boolean;
	NoResize: boolean;
	NoMenu: boolean;

	KeyCode: Enum.KeyCode;
	ModifierKey: Enum.ModifierKey;
	Disabled: boolean;
};

interface State<T = unknown> {
	value: T;
	ConnectedWidgets: Record<ID, string>;
	ConnectedFunctions: Array<(arg0: T) => void>;

	get(): T;
	set(newValue: T): void;
	onChange(funcToConnect: (arg0: T) => void): void;
}

export type States = Record<string, State> & {
	number: State;
	color: State;
	transparency: State;
	editingText: State;
	index: State;

	size: State;
	position: State;
	progress: State;
	scrollDistance: State;

	isChecked: State;
	isOpened: State;
	isUncollapsed: State;
};

export type Event = {
	Init: (arg0: Widget) => void;
	Get: (arg0: Widget) => boolean;
};
export type Events = Record<string, Event>;

type EventAPI = () => boolean;

export type InputDataType = number | Vector2 | Vector3 | UDim | UDim2 | Color3 | Rect | number[];
export type InputDataTypes =
	| "Num"
	| "Vector2"
	| "Vector3"
	| "UDim"
	| "UDim2"
	| "Color3"
	| "Color4"
	| "Rect"
	| "Enum"
	| ""
	| string;

export type WidgetArguments = Argument[];
export type WidgetStates = Record<string, State> & {
	number?: State;
	color?: State;
	transparency?: State;
	editingText?: State;
	index?: State;

	size?: State;
	position?: State;
	scrollDistance?: State;

	isChecked?: State;
	isOpened?: State;
	isUncollapsed?: State;
};

export type Widget = Record<string, EventAPI & State> & {
	ID: ID;
	type: string;
	state: States;
	lastCycleTick: number;
	trackedEvents: {};

	parentWidget: Widget;
	Instance: GuiObject;
	ChildContainer: GuiObject;
	Disabled: boolean;
	arguments: Arguments;
	providedArguments: Arguments;
	ZIndex: number;

	usesScreenGUI: boolean;
	ButtonColors: Record<string, Color3 | number>;
	ComboChildrenHeight: number;

	// Table properties
	RowColumnIndex: number;
	InitialNumColumns: number;
	ColumnInstances: Frame[];
	CellInstances: Frame[];

	// Event Props
	isHoveredEvent: boolean;

	lastClickedTick: number;
	lastClickedTime: number;
	lastClickedPosition: Vector2;

	lastRightClickedTick: number;
	lastDoubleClickedTick: number;
	lastCtrlClickedTick: number;

	lastCheckedTick: number;
	lastUncheckedTick: number;
	lastOpenedTick: number;
	lastClosedTick: number;
	lastSelectedTick: number;
	lastUnselectedTick: number;
	lastCollapsedTick: number;
	lastUncollapsedTick: number;

	lastNumberChangedTick: number;
	lastTextchangeTick: number;
	lastShortcutTick: number;

	// Events
	hovered: EventAPI;
	clicked: EventAPI;
	rightClicked: EventAPI;
	ctrlClicked: EventAPI;
	doubleClicked: EventAPI;

	checked: EventAPI;
	unchecked: EventAPI;
	activated: EventAPI;
	deactivated: EventAPI;
	collapsed: EventAPI;
	uncollapsed: EventAPI;
	selected: EventAPI;
	unselected: EventAPI;
	opened: EventAPI;
	closed: EventAPI;

	active: EventAPI;

	numberChanged: EventAPI;
	textChanged: EventAPI;
};

interface WidgetClass {
	Generate(): GuiObject;
	Discard(): void;
	Update(...arg0: unknown[]): void;

	Args: Record<string, number>;
	Events: Events;
	hasChildren: boolean;
	hasState: boolean;
	ArgNames: string[];

	GenerateState(): void;
	UpdateState(): void;

	ChildAdded(thisChild: Widget): GuiObject;
	ChildDiscarded(thisChild: Widget): void;
}

export type WidgetUtility = {
	GuiService: GuiService;
	RunService: RunService;
	TextService: TextService;
	UserInputService: UserInputService;
	ContextActionService: ContextActionService;

	getTime: () => number;
	getMouseLocation: () => Vector2;

	ICONS: {
		RIGHT_POINTING_TRIANGLE: string;
		DOWN_POINTING_TRIANGLE: string;
		MULTIPLICATION_SIGN: string;
		BOTTOM_RIGHT_CORNER: string;
		CHECK_MARK: string;
		ALPHA_BACKGROUND_TEXTURE: string;
	};

	GuiInset: Vector2;

	findBestWindowPosForPopup: (refPos: Vector2, size: Vector2, outerMin: Vector2, outerMax: Vector2) => Vector2;
	getScreenSizeForWindow: (thisWidget: Widget) => Vector2;
	isPosInsideRect: (pos: Vector2, rectMin: Vector2, rectMax: Vector2) => boolean;
	extend: (superClass: WidgetClass, arg1: defined) => WidgetClass;
	discardState: (thisWidget: Widget) => void;

	UIPadding: (Parent: GuiObject, PxPadding: Vector2) => UIPadding;
	UIListLayout: (Parent: GuiObject, FillDirection: Enum.FillDirection, Padding: UDim) => UIListLayout;
	UIStroke: (Parent: GuiObject, Thickness: number, Color: Color3, Transparency: number) => UIStroke;
	UICorner: (Parent: GuiObject, PxRounding?: number) => UICorner;
	UISizeConstraint: (Parent: GuiObject, MinSize?: Vector2, MaxSize?: Vector2) => UISizeConstraint;
	UIReference: (Parent: GuiObject, Child: GuiObject, Name: string) => ObjectValue;

	calculateTextSize: (text: string, width?: number) => Vector2;
	applyTextStyle: (thisInstance: TextLabel | TextButton | TextBox) => void;
	applyInteractionHighlights: (
		thisWidget: Widget,
		Button: GuiButton,
		Highlightee: GuiObject,
		Colors: Record<string, unknown>,
	) => void;
	//{ { GuiObject | { [string]: Color3 | number } } }
	applyInteractionHighlightsWithMultiHighlightee: (
		thisWidget: Widget,
		Button: GuiButton,
		Highlightees: (GuiObject | Record<string, Color3 | number>)[][],
	) => void;
	applyTextInteractionHighlights: (
		thisWidget: Widget,
		Button: GuiButton,
		Highlightee: TextLabel | TextButton | TextBox,
		Colors: Record<string, unknown>,
	) => void;
	applyFrameStyle: (thisInstance: GuiObject, forceNoPadding?: boolean, doubleyNoPadding?: boolean) => void;

	applyButtonClick: (thisWidget: Widget, thisInstance: GuiButton, callback: () => void) => void;
	applyButtonDown: (thisWidget: Widget, thisInstance: GuiButton, callback: (x: number, y: number) => void) => void;
	applyMouseEnter: (thisWidget: Widget, thisInstance: GuiObject, callback: () => void) => void;
	applyMouseLeave: (thisWidget: Widget, thisInstance: GuiObject, callback: () => void) => void;
	applyInputBegan: (thisWidget: Widget, thisInstance: GuiObject, callback: (input: InputObject) => void) => void;
	applyInputEnded: (thisWidget: Widget, thisInstance: GuiObject, callback: (input: InputObject) => void) => void;

	registerEvent: (event: string, callback: (...arg0: unknown[]) => void) => void;

	EVENTS: {
		hover: (pathToHovered: (thisWidget: Widget) => GuiObject) => Event;
		click: (pathToClicked: (thisWidget: Widget) => GuiButton) => Event;
		rightClick: (pathToClicked: (thisWidget: Widget) => GuiButton) => Event;
		doubleClick: (pathToClicked: (thisWidget: Widget) => GuiButton) => Event;
		ctrlClick: (pathToClicked: (thisWidget: Widget) => GuiButton) => Event;
	};

	abstractButton: WidgetClass;
};

export type Internal = {
	/*
        --------------
          PROPERTIES
        --------------
    */
	_version: string;
	_started: boolean;
	_shutdown: boolean;
	_cycleTick: number;
	_eventConnection?: RBXScriptConnection;

	// Refresh
	_globalRefreshRequested: boolean;
	_localRefreshActive: boolean;

	// Widgets & Instances
	_widgets: Record<string, WidgetClass>;
	_widgetCount: number;
	_stackIndex: number;
	_rootInstance?: GuiObject;
	_rootWidget: Widget;
	_lastWidget: Widget;
	SelectionImageObject: Frame;
	parentInstance: BasePlayerGui;
	_utility: WidgetUtility;

	// Config
	_rootConfig: Config;
	_config: Config;

	// ID
	_IDStack: ID[];
	_usedIDs: Record<ID, number>;
	_pushedId?: ID;
	_nextWidgetId?: ID;

	// VDOM
	_lastVDOM: Record<ID, Widget>;
	_VDOM: Record<ID, Widget>;

	// State
	_states: Record<ID, State>;

	// Callback
	_postCycleCallbacks: (() => void)[];
	_connectedFunctions: (() => void)[];
	_connections: RBXScriptConnection[];
	_initFunctions: (() => void)[];
	_cycleCoroutine?: thread;

	/*
        ---------
          STATE
        ---------
    */

	StateClass: {
		__index: unknown;

		get: (this: State) => unknown;
		set: (this: State, newValue: unknown) => unknown;
		onChange: (this: State, callback: (newValue: unknown) => void) => void;
	};

	/*
        -------------
          FUNCTIONS
        -------------
    */
	_cycle: () => void;
	_NoOp: () => void;

	// Widget
	WidgetConstructor: (type: string, widgetClass: WidgetClass) => void;
	_Insert: (widgetType: string, arguments?: WidgetArguments, states?: WidgetStates) => Widget;
	_GenNewWidget: (widgetType: string, arguments: Arguments, states: WidgetStates | undefined, ID: ID) => Widget;
	_ContinueWidget: (ID: ID, widgetType: string) => Widget;
	_DiscardWidget: (widgetToDiscard: Widget) => void;

	_widgetState: (thisWidget: Widget, stateName: string, initialValue: unknown) => State;
	_EventCall: (thisWidget: Widget, eventName: string) => boolean;
	_GetParentWidget: () => Widget;
	SetFocusedWindow: (thisWidget?: Widget) => void;

	// Generate
	_generateEmptyVDOM: () => Record<ID, Widget>;
	_generateRootInstance: () => void;
	_generateSelectionImageObject: () => void;

	// Utility
	_getID: (levelsToIgnore: number) => ID;
	_deepCompare: (t1: {}, t2: {}) => boolean;
	_deepCopy: (t: {}) => {};
};

export type Config = {
	TextColor: Color3;
	TextTransparency: number;
	TextDisabledColor: Color3;
	TextDisabledTransparency: number;

	BorderColor: Color3;
	BorderActiveColor: Color3;
	BorderTransparency: number;
	BorderActiveTransparency: number;

	WindowBgColor: Color3;
	WindowBgTransparency: number;
	ScrollbarGrabColor: Color3;
	ScrollbarGrabTransparency: number;

	TitleBgColor: Color3;
	TitleBgTransparency: number;
	TitleBgActiveColor: Color3;
	TitleBgActiveTransparency: number;
	TitleBgCollapsedColor: Color3;
	TitleBgCollapsedTransparency: number;

	MenubarBgColor: Color3;
	MenubarBgTransparency: number;

	FrameBgColor: Color3;
	FrameBgTransparency: number;
	FrameBgHoveredColor: Color3;
	FrameBgHoveredTransparency: number;
	FrameBgActiveColor: Color3;
	FrameBgActiveTransparency: number;

	ButtonColor: Color3;
	ButtonTransparency: number;
	ButtonHoveredColor: Color3;
	ButtonHoveredTransparency: number;
	ButtonActiveColor: Color3;
	ButtonActiveTransparency: number;

	SliderGrabColor: Color3;
	SliderGrabTransparency: number;
	SliderGrabActiveColor: Color3;
	SliderGrabActiveTransparency: number;

	HeaderColor: Color3;
	HeaderTransparency: number;
	HeaderHoveredColor: Color3;
	HeaderHoveredTransparency: number;
	HeaderActiveColor: Color3;
	HeaderActiveTransparency: number;

	SelectionImageObjectColor: Color3;
	SelectionImageObjectTransparency: number;
	SelectionImageObjectBorderColor: Color3;
	SelectionImageObjectBorderTransparency: number;

	TableBorderStrongColor: Color3;
	TableBorderStrongTransparency: number;
	TableBorderLightColor: Color3;
	TableBorderLightTransparency: number;
	TableRowBgColor: Color3;
	TableRowBgTransparency: number;
	TableRowBgAltColor: Color3;
	TableRowBgAltTransparency: number;

	NavWindowingHighlightColor: Color3;
	NavWindowingHighlightTransparency: number;
	NavWindowingDimBgColor: Color3;
	NavWindowingDimBgTransparency: number;

	SeparatorColor: Color3;
	SeparatorTransparency: number;

	CheckMarkColor: Color3;
	CheckMarkTransparency: number;

	PlotHistogramColor: Color3;
	PlotHistogramTransparency: number;
	PlotHistogramHoveredColor: Color3;
	PlotHistogramHoveredTransparency: number;

	HoverColor: Color3;
	HoverTransparency: number;

	// Sizes
	ItemWidth: UDim;
	ContentWidth: UDim;

	WindowPadding: Vector2;
	WindowResizePadding: Vector2;
	FramePadding: Vector2;
	ItemSpacing: Vector2;
	ItemInnerSpacing: Vector2;
	CellPadding: Vector2;
	DisplaySafeAreaPadding: Vector2;
	IndentSpacing: number;
	SeparatorTextPadding: Vector2;

	TextFont: Font;
	TextSize: number;
	FrameBorderSize: number;
	FrameRounding: number;
	GrabRounding: number;
	WindowBorderSize: number;
	WindowTitleAlign: Enum.LeftRight;
	PopupBorderSize: number;
	PopupRounding: number;
	ScrollbarSize: number;
	GrabMinSize: number;
	SeparatorTextBorderSize: number;

	UseScreenGUIs: boolean;
	IgnoreGuiInset: boolean;
	Parent: BasePlayerGui;
	RichText: boolean;
	TextWrapped: boolean;
	DisableWidget: boolean;
	DisplayOrderOffset: number;
	ZIndexOffset: number;

	MouseDoubleClickTime: number;
	MouseDoubleClickMaxDist: number;
	MouseDragThreshold: number;
};
