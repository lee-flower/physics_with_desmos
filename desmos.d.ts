// desmos.d.ts
declare namespace Desmos {
    let supportedLanguages: Array<string>;

    enum Colors {
        BLUE = "#2d70b3",
        BLACK = "#000000",
        GREEN = "#348543",
        ORANGE = "#fa7e19",
        PURPLE = "#6042a6",
        RED = "#c74440"
    }

    enum FontSizes {
        VERY_SMALL, SMALL, MEDIUM, LARGE, VERY_LARGE
    }

    enum Styles {
        // styles for points 
        POINT,
        OPEN,
        CROSS,
        SQUARE,
        PLUS,
        TRIANGLE,
        DIAMOND ,
        STAR,
        // styles for curves
        SOLID,
        DASHED,
        DOTTED
    }

    enum AxisArrowModes {
        NONE, POSITIVE, BOTH
    }

    enum DragModes {
        X, Y, XY, NONE
    }

    enum LabelOrientations {
        ABOVE, BELOW, LEFT, RIGHT, DEFAULT
    }

    interface Expression {
        type?: "expression" | "tabel" | "text";
        id?: string;
        latex: string;
        color?: string | Colors;
        lineStyle?: Styles;
        lineWidth?: number | string;
        lineOpacity?: number | string;
        pointStyle?: Styles;
        pointSize?: number | string;
        pointOpacity: number | string;
        fillOpacity?: number | string;
        points?: boolean;
        lines?: boolean;
        fill?: boolean;
        sliderBounds?: {min?: string, max?: string, step?: string};
        playing?: boolean;
        parametricDomain?: {min?: string, max?: string};
        polarDomain?: {min?: string, max?: string};
        dragMode?: DragModes;
        label?: string;
        showLabel?: boolean;
        labelSize?: string;
        labelOrientation?: LabelOrientations;
        columns?: Array<TableColumn>;
        text?: string;
    }

    interface TableColumn {
        latex: string;
        values?: Array<string>;
        color?: string | Colors;
        hidden?: boolean;
        points?: boolean;
        lines?: boolean;
        lineStyle: Styles;
        lineWidth: number | string;
        lineOpacity: number | string;
        pointStyle: Styles;
        pointSize: number | string;
        dragMod: DragModes;
    }

    interface HelperExpression {
        guid: string;
        latex: string;
        listValue?: Array<number>;
        numericValue: number;
        observe(name: "numericValue" | "listValue", callbackfn: () => void): void;
    }

    interface Coordinates {
        top: number;
        bottom: number;
        left: number;
        right: number;
        width: number;
        height: number;
    }

    interface GraphpaperBounds {
        mathCoordinates: Coordinates;
        pixelCoordinates: Coordinates;
    }

    interface GraphingCalculator {
        settings: CalculatorConfiguration;
        graphpaperBounds: GraphpaperBounds;
        isAnyExpressionSelected: boolean;
        selectedExpressionId: string;
        HelperExpression(expression: { latex: string }): HelperExpression;
        setExpression(expression_state: Expression): void;
        setExpressions(expression_states: Array<Expression>): void;
        getExpressions(): Array<any>;
        removeExpression(expression: {id: string}): void;
        removeExpressions(): void;
        setMathBounds(bounds: {left: number, right: number, bottom: number, top: number}): void;
        destroy(): void;
        getState(): CalculatorState;
        setState(obj: CalculatorState, options?: CalculatorConfiguration): void;
        setBlank(options?: CalculatorConfiguration): void;
        setDefaultState(obj: CalculatorState): void;
        undo(): void;
        redo(): void;
        clearHistory(): void;
        withHistoryReplacement(callback: () => void): void;
        screenshot(__opts__?: ScreenshotOption): string;
        asyncScreenshot(__opts__?: ScreenshotOption, callback: (URI_SVG: string) => void): void;
        observerEvent(event: "change", callback: (eventName: string, event: CalculatorEvent) => void): void;
        updateSettings(settings: CalculatorConfiguration): void;
        newRandomSeed(): void;
        resize(): void;
        mathToPixels(coords: {x?: number, y?: number});
        pixelsToMath(coords: {x?: number, y?: number});
        focusFirstExpression(): void;
        removeSelected(): void;
    }

    interface CalculatorConfiguration {
        graphpaper?: boolean;
        expressions?: boolean; 
        settingsMenu?: boolean;
        zoomButtons?: boolean;
        keypad?: boolean;
        keypadActivated?: boolean;
        allowKeypadToBeDissmissedWhenNarrow?: boolean;
        showResetButtonOnGraphpaper?: boolean;
        expressionsTopbar?: boolean;
        pointsOfInterest?: boolean;
        trace?: boolean;
        border?: boolean;
        lockViewport?: boolean;
        expressionsCollapsed?: boolean;
        capExpressionSize?: boolean;
        authorFeatures?: boolean;
        images?: boolean;
        imageUploadCallback?: boolean;
        folders?: boolean;
        notes?: boolean;
        sliders?: boolean;
        actions?: "auto" | boolean;
        substitutions?: boolean;
        links?: boolean;
        qwertyKeyboard?: boolean;
        distributions?: boolean;
        restrictedFunctions?: boolean;
        forceEnableGeometryFunctions?: boolean;
        enableRepeatFunction?: boolean;
        pasteGraphLink?: boolean;
        pasteTableData?: boolean;
        clearIntoDegreeMode?: boolean;
        colors?: Colors;
        autosize?: boolean;
        plotInequalities?: boolean;
        plotSingleVariableImplicitEquations?: boolean;
        projectorMode?: boolean;
        decimalToFraction?: boolean;
        fontSize?: boolean;
        invertedColors?: boolean;
        language?: "en";
        brailleMode?: "none" | "ueb" | "nemeth";
        sixKeyInput?: boolean;
        brailleControls?: boolean;
        audio?: boolean;
        graphDescription?: string;
        zoomFit?: boolean;
        forceLogModeRegressions?: boolean;
        defaultLogModeRegressions?: boolean;
        customRegressions?: boolean;
        regressionTemplates?: boolean;
        logScales?: boolean;
        tone?: boolean;
        invertedComprehensions?: boolean;
        muted?: boolean;
        allowComplex?: boolean;
        reportPosition?: "default" | "coordinates" | "percents";
        showEvaluationCopyButtons?: boolean;
        onEvaluationCopyClick?: (latex: string) => void;
        recursion?: boolean;
        degreeMode: boolean;
        polarMode: boolean;
        showXAxis: boolean;
        showYAxis: boolean;
        showGrid: boolean;
        xAxisNumbers: boolean;
        yAxisNumbers: boolean;
        xAxisStep: number;
        yAxisStep: number;
        xAxisMinorSubdivisions: number;
        yAxisMinorSubdivisions: number;
        xAxisArrowMode: AxisArrowModes;
        yAxisArrowMode: AxisArrowModes;
        xAxisLabel: string;
        yAxisLabel: string;
        xAxisScale: "linear" | "logarithmic";
        yAxisScale: "linear" | "logarithmic";
        randomSeed: string;
        fontSize: FontSizes | number;
    }

    interface CalculatorState {
        doNotMigrateMovablePointStyle: boolean;
        expressions: object;
        graph: CalculatorConfiguration;
        includeFunctionParametersInRandomSeed: boolean;
        randomSeed: string;
        version: number;
    }

    /**
     * An object with following properties:
     * @param width Width of the screenshot in pixels. Defaults to current with of graphpaper.
     * @param height Height of the screenshot in pixels. Defaults to current height of graphpaper in pixels.
     * @param targetPixelRatio Oversampling factor. Defaults to 1. Larger values are useful for producing images that will look good on high pixel density ("retina") screens. For example, setting opts.targetPixelRatio to 2 will return an image that is physically twice as wide and twice as tall as the dimensions specified by opts.width and *opts.height*, but that is designed to look good when displayed scaled down to the dimensions specified by *opts.width* and *opts.height*. 
     * @param preserveAxisNumbers Determines whether to override the default behavior of stripping out the axis numbers from small images. Only relevant if *opts.width* or *opts.height* is less than 256px. Defaults to `false`.
     * @param showMovablePoints Renders movable points with their interactive halo, instead of as static points. Defaults to `false`.
     */
    interface ScreenshotOption {
        width?: number;
        height?: number;
        targetPixelRatio?: number;
        preserveAxisNumbers?: boolean;
        showMovablePoints?: boolean;
    }

    interface CalculatorEvent {
        isUserInitiated: boolean;
    }

    /**
     * Creates a calculator object to control the calculator embedded in the DOM elements specified by element.
     * @param element a DOM element.
     * @param options an optional object that specifies features that should be included or excluded.
     * @returns The object returned is a `Desmos.GraphingCalculator` object, which exposes methods for setting expressions, changing the viewport, etc.
     */
    function GraphingCalculator(element: HTMLElement, options?: CalculatorConfiguration): Desmos.GraphingCalculator;

    function imageFileToDataURL(file: File, callback: (err: Error, dataURL: string) => void): string;
}