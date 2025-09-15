import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { AutocompleteServerInputComponent } from './autocomplete-input-server-.component';
import { DocumentationComponent } from "../documentation/documentation.component";

@Component({
  selector: 'app-autocomplete-server-input-doc',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation
      [publishedDate]="publishedDate"
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="autocompleteServerComponent"
      [tsCode]="tsCode"
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent"
      [noteContent]="noteContent"
      [otherContent]="otherContent"
    >
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The
          <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800"
            >LibAutocompleteServerComponent</code
          >
          is a powerful server-side autocomplete component that fetches options
          from an API endpoint as the user types, with built-in pagination and
          error handling.
        </p>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg
                class="h-5 w-5 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">
                Server-Side Autocomplete Features
              </h3>
              <div class="mt-2 text-sm text-blue-700">
                <p>This component includes several advanced features:</p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Server-side data fetching with API integration</li>
                  <li>Infinite scrolling with pagination support</li>
                  <li>Debounced search to optimize API calls</li>
                  <li>Customizable query parameters</li>
                  <li>Response data mapping with JSON path support</li>
                  <li>Loading states and error handling</li>
                  <li>Accessibility compliant</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>
            <strong>API Integration</strong>: Connects to any REST API endpoint
            for data fetching
          </li>
          <li>
            <strong>Infinite Scrolling</strong>: Automatically loads more data
            as user scrolls
          </li>
          <li>
            <strong>Debounced Search</strong>: Reduces API calls with
            configurable debounce time
          </li>
          <li>
            <strong>Customizable Parameters</strong>: Flexible query parameter
            configuration
          </li>
          <li>
            <strong>Response Mapping</strong>:
            <ul class="list-circle pl-5 mt-1">
              <li>
                <code>responseDataPath</code>: Extract data from nested API
                responses
              </li>
              <li>
                <code>responseHasMorePath</code>: Determine if more data is
                available
              </li>
            </ul>
          </li>
          <li>
            <strong>Error Handling</strong>: Comprehensive error handling with
            user feedback
          </li>
          <li>
            <strong>Loading States</strong>: Visual feedback during data
            fetching
          </li>
          <li>
            <strong>Form Integration</strong>: Seamless integration with Angular
            Reactive Forms
          </li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">
              Basic Server Autocomplete
            </h3>
            <p class="mt-2 text-gray-600">
              Simple server autocomplete with API endpoint and default
              parameters.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="basicSetupExample"></app-code-viewer>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">
              Custom Query Parameters
            </h3>
            <p class="mt-2 text-gray-600">
              Configuring custom query parameters for API requests.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="customParamsExample"></app-code-viewer>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">
              Response Data Mapping
            </h3>
            <p class="mt-2 text-gray-600">
              Using JSON paths to extract data from complex API responses.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="responseMappingExample"></app-code-viewer>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">
              Custom Display Function
            </h3>
            <p class="mt-2 text-gray-600">
              Using a custom function to display complex objects in the
              dropdown.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="displayFunctionExample"></app-code-viewer>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #noteContent>
      <div class="space-y-4">
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg
                class="h-5 w-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-yellow-800">
                Performance Considerations
              </h3>
              <div class="mt-2 text-sm text-yellow-700">
                <p>When using this component:</p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    Set appropriate <code>minChars</code> to avoid excessive API
                    calls
                  </li>
                  <li>
                    Use <code>debounceTime</code> to control request frequency
                  </li>
                  <li>Implement server-side pagination for large datasets</li>
                  <li>
                    Consider caching responses for frequently searched terms
                  </li>
                  <li>
                    Use <code>pageSize</code> to control the number of items per
                    request
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-purple-50 border-l-4 border-purple-400 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg
                class="h-5 w-5 text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-purple-800">
                API Integration Tips
              </h3>
              <div class="mt-2 text-sm text-purple-700">
                <p>For successful API integration:</p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    Ensure your API supports search and pagination parameters
                  </li>
                  <li>
                    Handle API errors gracefully with proper error messages
                  </li>
                  <li>
                    Use <code>responseDataPath</code> for nested response
                    structures
                  </li>
                  <li>Implement proper CORS headers on your API server</li>
                  <li>Consider rate limiting to prevent abuse</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-green-50 border-l-4 border-green-400 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg
                class="h-5 w-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-green-800">Best Practices</h3>
              <div class="mt-2 text-sm text-green-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Always provide a fallback for API failures</li>
                  <li>Use meaningful loading and no results messages</li>
                  <li>Implement proper accessibility attributes</li>
                  <li>
                    Test with various network conditions (slow connections)
                  </li>
                  <li>Consider adding a retry mechanism for failed requests</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #otherContent>
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">Configuration Options</h2>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">
              Input Properties Reference
            </h3>
            <p class="mt-2 text-gray-600">
              Complete list of available input properties with descriptions.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Property
                    </th>
                    <th
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Type
                    </th>
                    <th
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Default
                    </th>
                    <th
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      apiEndpoint
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      string
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      -
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      Required. The API endpoint URL to fetch data from
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      apiParams
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      Record&lt;string, any&gt;
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      {{ '{}' }}
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      Additional parameters to include in API requests
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      searchQueryParam
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      string
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      'search'
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      Query parameter name for the search term
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      pageQueryParam
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      string
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      'skip'
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      Query parameter name for pagination offset
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      limitQueryParam
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      string
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      'take'
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      Query parameter name for pagination limit
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      minChars
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      number
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      3
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      Minimum characters required before making API requests
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      pageSize
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      number
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      10
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      Number of items to fetch per API request
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      debounceTime
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      number
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      500
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      Debounce time in milliseconds for search input
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      responseDataPath
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      string
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      ''
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      JSON path to extract data from API response (e.g.,
                      'data.results')
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      responseHasMorePath
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      string
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      ''
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      JSON path to determine if more data is available (e.g.,
                      'data.hasMore')
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      noOptionsText
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      string
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      'No options available'
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      Text to display when no options are found
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      loadingOptionsText
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      string
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      'Loading more options...'
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      Text to display while loading options
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      displayFn
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      (option: any) => string
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      (option) => typeof option === 'string' ? option :
                      JSON.stringify(option)
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      Function to display the selected option in the input
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">
              Output Events Reference
            </h3>
            <p class="mt-2 text-gray-600">
              Complete list of available output events.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Event
                    </th>
                    <th
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Payload
                    </th>
                    <th
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      optionSelected
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      MatAutocompleteSelectedEvent
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      Emitted when an option is selected from the dropdown
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      blur
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      FocusEvent
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      Emitted when the input loses focus
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      focus
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      FocusEvent
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      Emitted when the input gains focus
                    </td>
                  </tr>
                  <!-- Additional events would be listed here -->
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white shadow rounded-lg overflow-hidden mt-6">
        <div class="p-5">
          <h3 class="text-lg font-medium text-gray-900">
            Public Methods Reference
          </h3>
          <p class="mt-2 text-gray-600">
            Methods exposed by <code>LibAutocompleteServerComponent</code> that
            can be called programmatically using <code>ViewChild</code>.
          </p>
        </div>
        <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Method
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Parameters
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Description
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    triggerSearch
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    term?: string, opts?: {{'{'}} ignoreMinChars?: boolean;
                    isNewSearch?: boolean {{'}'}}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500">
                    Programmatically triggers a search request.
                    <ul class="list-disc pl-4 mt-1 space-y-1">
                      <li>
                        <code>term</code>: Optional custom search string
                        (defaults to control value)
                      </li>
                      <li>
                        <code>ignoreMinChars</code>: Ignores
                        <code>minChars</code> validation if true (default: true)
                      </li>
                      <li>
                        <code>isNewSearch</code>: Whether to reset pagination
                        (default: true)
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <app-code-viewer [code]="viewChildExample"></app-code-viewer>
        </div>
      </div>
    </ng-template>
  `,
  styles: ``,
})
export class AutocompleteServerInputDocComponent {
  @ViewChild('overviewContent', { static: true })
  overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true })
  useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  autocompleteServerComponent = AutocompleteServerInputComponent;
  publishedDate = '2025-05-21';
  title = 'Server-Side Autocomplete Component';

  htmlCode = `
    <lib-autocomplete-server
      [label]="'Search Users'"
      [placeholder]="'Type to search users...'"
      [apiEndpoint]="'/api/users'"
      [control]="userControl"
      [minChars]="2"
      [debounceTime]="300"
    ></lib-autocomplete-server>
  `;

  tsCode = `
    import { Component } from '@angular/core';
    import { FormControl } from '@angular/forms';
    import { LibAutocompleteServerComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';
    
    @Component({
      selector: 'app-user-search',
      standalone: true,
      imports: [LibAutocompleteServerComponent],
      template: \`
        <lib-autocomplete-server
          [label]="'Search Users'"
          [placeholder]="'Type to search users...'"
          [apiEndpoint]="'/api/users'"
          [control]="userControl"
          [minChars]="2"
          [debounceTime]="300"
        ></lib-autocomplete-server>
      \`,
    })
    export class UserSearchComponent {
      userControl = new FormControl('');
    }
  `;

  basicSetupExample = `
    @Component({
      selector: 'app-user-search',
      standalone: true,
      imports: [LibAutocompleteServerComponent],
      template: \`
        <lib-autocomplete-server
          [label]="'Search Users'"
          [placeholder]="'Type to search users...'"
          [apiEndpoint]="'/api/users'"
          [control]="userControl"
          [minChars]="2"
          [debounceTime]="300"
        ></lib-autocomplete-server>
      \`,
    })
    export class UserSearchComponent {
      userControl = new FormControl('');
    }
  `;

  customParamsExample = `
    @Component({
      selector: 'app-product-search',
      standalone: true,
      imports: [LibAutocompleteServerComponent],
      template: \`
        <lib-autocomplete-server
          [label]="'Search Products'"
          [placeholder]="'Type to search products...'"
          [apiEndpoint]="'/api/products'"
          [apiParams]="{ category: 'electronics', inStock: true }"
          [searchQueryParam]="'q'"
          [pageQueryParam]="'page'"
          [limitQueryParam]="'limit'"
          [control]="productControl"
        ></lib-autocomplete-server>
      \`,
    })
    export class ProductSearchComponent {
      productControl = new FormControl('');
    }
  `;

  responseMappingExample = `
    @Component({
      selector: 'app-article-search',
      standalone: true,
      imports: [LibAutocompleteServerComponent],
      template: \`
        <lib-autocomplete-server
          [label]="'Search Articles'"
          [placeholder]="'Type to search articles...'"
          [apiEndpoint]="'/api/articles'"
          [responseDataPath]="'data.items'"
          [responseHasMorePath]="'data.hasMore'"
          [control]="articleControl"
        ></lib-autocomplete-server>
      \`,
    })
    export class ArticleSearchComponent {
      articleControl = new FormControl('');
    }

    // Example API response structure:
    // {
    //   "data": {
    //     "items": [
    //       { "id": 1, "title": "Article 1" },
    //       { "id": 2, "title": "Article 2" }
    //     ],
    //     "hasMore": true,
    //     "totalCount": 50
    //   }
    // }
  `;

  displayFunctionExample = `
    @Component({
      selector: 'app-user-search',
      standalone: true,
      imports: [LibAutocompleteServerComponent],
      template: \`
        <lib-autocomplete-server
          [label]="'Search Users'"
          [placeholder]="'Type to search users...'"
          [apiEndpoint]="'/api/users'"
          [control]="userControl"
          [displayFn]="displayUser"
        ></lib-autocomplete-server>
      \`,
    })
    export class UserSearchComponent {
      userControl = new FormControl('');

      // Custom function to display user objects
      displayUser(user: any): string {
        return user ? \`\${user.firstName} \${user.lastName} (\${user.email})\` : '';
      }
    }
  `;

  viewChildExample =  `
  import { Component, viewChild } from '@angular/core';
  import { FormControl, ReactiveFormsModule } from '@angular/forms';
  import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
  import { MatCardModule } from '@angular/material/card';
  import { MatDividerModule } from '@angular/material/divider';
  import { LibAutocompleteServerComponent, LibSelectFieldComponent } from "@saad-ihhn/ihhn-host-lib/lib-forms";

  @Component({
    selector: 'app-autocomplete-server-input',
    standalone: true,
    imports: [
      ReactiveFormsModule,
      MatCardModule,
      MatDividerModule,
      LibAutocompleteServerComponent,
      LibSelectFieldComponent
  ],
    template: \`
      <div class="summary-container">
        <lib-select-field 
        [control]="userControl2" 
        [options]="['mahad', 'kahaf']" 
        [optionLabel]="''" 
        [optionValue]="''"
        (selectionChange)="onChange()"
        ></lib-select-field>
      <lib-autocomplete-server
        label="Search Users"
        [control]="userControl"
        apiEndpoint="http://172.16.5.20:5131/pharmacy-service/api/search/patients"
        [apiParams]="{name: userControl2.value}"
        responseDataPath="value"
        responseHasMorePath="pagination.totalRecords"
        [displayFn]="displayFn"
        (optionSelected)="onSearchResults($event)"
      ></lib-autocomplete-server>
      </div>
    \`,
  })
  export class AutocompleteServerInputComponent {
    autoCompleteSearch =  viewChild.required(LibAutocompleteServerComponent);

    userControl = new FormControl('');
    userControl2 = new FormControl('');
    
    onSearchResults(response: MatAutocompleteSelectedEvent): void {
      console.log('Search results received:', response.option.value);
    }
    
    onApiError(error: any): void {
      console.error('API error occurred:', error);
    }

    displayFn(option: any): string {
      return option.fullName;
    }

    onChange = () => {
      this.autoCompleteSearch().triggerSearch();
    }
  }
  `;
}