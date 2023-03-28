import { Map as ttMap } from '@tomtom-international/web-sdk-maps';
import { services as ttServices } from '@tomtom-international/web-sdk-services';

/**
 * SearchBox
 * @param services The Tomtom services instance.
 * @param options.placeholder Deprecated You should use options.labels.placeholder instead.
 * @param options.idleTimePress The Search service call delay (in ms) after the last typed character.
 * @param options.minNumberOfCharacters The minimum number of characters to trigger the search call.
 * @param options.searchOptions Options for the fuzzy search service. For full list of options please refer to fuzzySearch service documentation.
 * @param options.autocompleteOptions Options for the autocomplete service. For full list of options please
 * refer to autocomplete service documentation. If you pass this option, results list will be extended by the
 * results returned by autocomplete service. They are used as filters for the fuzzy search.
 * @param options.filterSearchResults Only those fuzzy search results that pass the test implemented in this method will be shown on the results list.
 * @param options.noResultsMessage Deprecated You should use options.labels.noResultsMessage instead.
 * @param options.showSearchButton If set to false, search icon in the input will be hidden.
 * @param options.cssStyleCheck If true, the plugin will check if required css styles are added.
 * @param options.labels.placeholder Specifies text that appears within the search box when it's empty.
 * @param options.labels.suggestions.brand Specifies text that is used to mark a suggested brand.
 * @param options.labels.suggestions.category Specifies text that is used to mark a suggested category.
 * @param options.labels.noResultsMessage The message shown when a given query search service returned no results or they were filtered out.
 * @param options.distanceFromPoint Coordinate used to calculate and display the distance for each result,
 * if it's not used the distance will not be displayed.
 * Note that when this property is used, we update the `dist` property (distance) in the response of Fuzzy search, which is
 * accessible in `tomtom.searchbox.resultsfound`, `tomtom.searchbox.resultselected` and `tomtom.searchbox.resultfocused` events.
 * It can be an Array [lng, lat], an Object {lng, lat} or a String 'lng,lat'.
 * The distance is returned is always in meters.
 * @param options.units Units used to display the distance in the SearchBox suggestion list,
 * it does not afect the distance in the response returned in the events payload.
 * Can be 'kilometers' or 'miles'. Default value: 'kilometers'
 */
export class SearchBox {
    /**
     * This plugin provides a search box functionality to your map.
     */
    constructor(services: typeof ttServices, options?: SearchBoxOptions);
    /**
     * Returns the options object.
     * @returns this.options.
     */
    getOptions(): SearchBoxOptions;
    /**
     * Returns the plugin container.
     * @returns HTMLElement container.
     */
    getSearchBoxHTML(): HTMLElement;
    /**
     * @returns The input value.
     */
    getValue(): string;
    /**
     * Binds map with plugin instance.
     * @param map
     * @returns HTMLElement container.
     */
    onAdd(map: ttMap): HTMLElement;
    /**
     * Removes plugin from the map.
     * @returns void.
     */
    onRemove(): void;
    /**
     * Triggers search and fills the results list.
     * @returns void.
     */
    query(): void;
    /**
     * Set a filter as brandSet or categorySet for the search options
     * @param filterOptions Object consists of [type] and [value] properties
     * @returns void.
     */

    /**
     * Remove the existing filter.
     * @returns void.
     */
    removeFilter(): void;

    setFilter(filterOptions: SearchBoxFilterOptions): void;
    /**
     * Set Value.
     * @param value The input value.
     * @returns void.
     */
    setValue(value: string): void;
    /**
     * Updates options
     * @options
     * @returns void.
     */
    updateOptions(options: SearchBoxOptions): void;

    /**
     *
     * @param type The event type to listen for;
     * @param listener The function to be called when the event is fired.
     * @return this
     */
    on<T extends keyof SearchBoxEvent>(type: T, listener: SearchBoxEvent[T]): this;

    /**
     *
     * @param type The event type to listen for;
     * @param listener The function to be called when the event is fired.
     * @return this
     */
    once<T extends keyof SearchBoxEvent>(type: T, listener: SearchBoxEvent[T]): this;

    /**
     *
     * @param type The event type to be unsubscribe;
     * @return this
     */
    off<T extends keyof SearchBoxEvent>(type?: T): this;
}

export interface SearchBoxOptions {
    placeholder?: string;
    /**
     * Default value is 200.
     */
    idleTimePress?: number;
    /**
     * Default value is 3.
     */
    minNumberOfCharacters?: number;
    searchOptions: Object;
    autocompleteOptions?: Object;
    filterSearchResults?: () => void;
    noResultsMessage?: string;
    /**
     * Default value is true.
     */
    showSearchButton?: boolean;
    /**
     * Default value is true.
     */
    cssStyleCheck?: boolean;
    labels?: {
        placeholder?: string;
        suggestions?: {
            /**
             * Default value is 'Suggested brand''.
             */
            brand?: string;
            /**
             * Default value is 'Suggested category''.
             */
            category?: string;
        },
        /**
         * Default value is 'No results found''.
         */
        noResultsMessage?: string;
    }
    /**
     * Coordinate used to calculate and display the distance for each result,
     * if it's not used the distance will not be displayed.
     * Note that when this property is used, we update the `dist` property (distance) in the response of Fuzzy search, which is
     * accessible in `tomtom.searchbox.resultsfound`, `tomtom.searchbox.resultselected` and `tomtom.searchbox.resultfocused` events.
     * It can be an Array [lng, lat], an Object {lng, lat} or a String 'lng,lat'.
     * The distance is returned is always in meters.
     */
    distanceFromPoint?: number[] | { lng: number, lat: number } | string;
    /**
     * Units used to display the distance in the SearchBox suggestion list,
     * it does not afect the distance in the response returned in the events payload.
     * Can be 'kilometers' or 'miles'. Default value: 'kilometers'
     */
    units?: 'kilometers' | 'miles'
}

export interface SearchBoxFilterOptions {
    /**
     * Available types: 'category', 'brand'.
     */
    type: string;
    /**
     * Data needed for preparing a service call and for the correct display the filter inside the input.
     */
    value: Object;
}

export type SearchBoxEvent = {
    /**
     * Fired when the input is restored. This happens when the user uses the arrows
     * to navigate through the suggestions list and navigates back to the input.
     */
    'tomtom.searchbox.inputrestored': (event: () => void) => void;
    /**
     * Fired when result is focused.
     */
    'tomtom.searchbox.resultfocused': (event: ResultfocusedEvent) => void;
    /**
     * Fired when search results are cleared.
     */
    'tomtom.searchbox.resultscleared': (event: () => void) => void;
    /**
     * Fired when result is selected.
     */
    'tomtom.searchbox.resultselected': (event: ResultselectedEvent) => void;
    /**
     * Fired when search results are found.
     */
    'tomtom.searchbox.resultsfound': (event: ResultsfoundEvent) => void;
    /**
     * Fired when a request to search services is started in the background.
     */
    'tomtom.searchbox.loadingstarted': (event: LoadingStartedEvent) => void;
    /**
     * Fired when a request in the background is finished.
     */
    'tomtom.searchbox.loadingfinished': (event: LoadingFinishedEvent) => void;
}

interface ResultfocusedEvent {
    /**
     * The data object containing event details.
     */
    data: {
        /**
         * The focused result.
         */
        result: Object,
        /**
         * The display value, same as in the searchbox input.
         */
        text: string
    };
}

interface ResultselectedEvent {
    /**
     * The data object containing event details.
     */
    data: {
        /**
         * The selected result.
         */
        result: Object,
        /**
         * The display value, same as in the searchbox input.
         */
        text: string
    };
}

interface ResultsfoundEvent {
    /**
     * The data object containing event details.
     */
    data: {
        /**
         * The metadata object providing additional information associated with the event.
         */
        metadata: {
            /**
             * Possible values are input - when event was caused by user keystrokes
             * in the searchbox's input or submit - caused by calling query() method or pressing 'Enter'.
             */
            triggeredBy: string
        },
        /**
         * The results object contains fuzzySearch and autocomplete (if autocompleteOptions are passed
         * to the searchbox contructor) services responses.
         */
        results: Object,
        /**
         * The errors object contains fuzzzySearch and autocomplete services error responses.
         */
        errors: string
    };

}

interface LoadingStartedEvent {
    /**
     * The data object containing event details.
     */
    data: {
        /**
         * The metadata object providing additional information associated with the event.
         */
        metadata: {
            /**
             * Possible values are `input` - when the event is triggered
             * by the user typing, or `submit` - triggered by executing
             * `query()` method or pressing 'Enter'.
             */
            triggeredBy: 'input'|'submit'
        }
    };
}

interface LoadingFinishedEvent {
    /**
     * The data object containing event details.
     */
    data: {
        /**
         * The metadata object providing additional information associated with the event.
         */
        metadata: {
            /**
             * Possible values are `input` - when the event is triggered
             * by the user typing, or `submit` - triggered by executing
             * `query()` method or pressing 'Enter'.
             */
            triggeredBy: 'input'|'submit'
        }
    };
}

export default SearchBox;
