import { Routes } from '@angular/router';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { ComponentOne } from './shared-ui/tab/first-tab.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    title: 'HMIS - Library',
    data: { breadcrumb: 'Home' }
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      // Components Routes
      {
        path: 'components',
        children: [
          {
            path: '',
            redirectTo: 'form-fields/text-field',
            pathMatch: 'full',
          },
          {
            path: 'form-fields',
            data: { breadcrumb: 'Form Fields' },
            children: [
              {
                path: '',
                redirectTo: 'text-field',
                title: 'Components / Form Fields',
                pathMatch: 'full',
              },
              {
                path: 'text-field',
                title: 'HMIS - Form Fields / Text Field',
                data: { breadcrumb: 'Text Field' },
                loadComponent: () =>
                  import('./shared-ui/text-field-input/text-field-input-doc.component').then((m) => m.TextFieldInputDocComponent),
              },
              {
                path: 'email',
                title: 'HMIS - Form Fields / Email Input',
                data: { breadcrumb: 'Email Input' },
                loadComponent: () =>
                  import('./shared-ui/email-input/email-input-doc.component').then((m) => m.EmailInputDocComponent),
              },
              {
                path: 'password',
                title: 'HMIS - Form Fields / Password Input',
                data: { breadcrumb: 'Password Input' },
                loadComponent: () =>
                  import('./shared-ui/password-input/password-input-doc.component').then((m) => m.PasswordInputDocComponent),
              },
              {
                path: 'phone',
                title: 'HMIS - Form Fields / Phone Input',
                data: { breadcrumb: 'Phone Input' },
                loadComponent: () =>
                  import('./shared-ui/phone-input/phone-input-doc.component').then((m) => m.PhoneInputDocComponent),
              },
              {
                path: 'number',
                title: 'HMIS - Form Fields / Number Input',
                data: { breadcrumb: 'Number Input' },
                loadComponent: () =>
                  import('./shared-ui/number-input/number-input-doc.component').then((m) => m.NumberInputDocComponent),
              },
              {
                path: 'url',
                title: 'HMIS - Form Fields / URL Input',
                data: { breadcrumb: 'URL Input' },
                loadComponent: () =>
                  import('./shared-ui/url-input/url-doc.component').then((m) => m.UrlDocComponent),
              },
              {
                path: 'checkbox',
                title: 'HMIS - Form Fields / Checkbox Input',
                data: { breadcrumb: 'Checkbox' },
                loadComponent: () =>
                  import('./shared-ui/checkbox-input/checkbox-input-doc.component').then((m) => m.CheckboxInputDocComponent),
              },
              {
                path: 'radio-btn',
                title: 'HMIS - Form Fields / Radio Buttons',
                data: { breadcrumb: 'Radio Buttons' },
                loadComponent: () =>
                  import('./shared-ui/radio-btn/radio-btn-doc.component').then((m) => m.RadioBtnDocComponent),
              },
              {
                path: 'select',
                title: 'HMIS - Form Fields / Select Input',
                data: { breadcrumb: 'Select' },
                loadComponent: () =>
                  import('./shared-ui/select-input/select-input-doc.component').then((m) => m.SelectInputDocComponent),
              },
              {
                path: 'multi-select',
                title: 'HMIS - Form Fields / Multi Select Input',
                data: { breadcrumb: 'Multi Select' },
                loadComponent: () =>
                  import('./shared-ui/multi-select-input/multi-select-input-doc.component').then((m) => m.MultiSelectInputDocComponent),
              },
              {
                path: 'date-picker',
                title: 'HMIS - Form Fields / Date Picker',
                data: { breadcrumb: 'Date Picker' },
                loadComponent: () =>
                  import('./shared-ui/date-picker-input/date-picker-input-doc.component').then((m) => m.DatePickerDocComponent),
              },
              {
                path: 'date-range-picker',
                title: 'HMIS - Form Fields / Date Range Picker',
                data: { breadcrumb: 'Date Range Picker' },
                loadComponent: () =>
                  import('./shared-ui/date-ranger-picker-input/date-range-picker-input-doc.component').then((m) => m.DateRangePickerDocComponent),
              },
              {
                path: 'month',
                title: 'HMIS - Form Fields / Month Picker',
                data: { breadcrumb: 'Month Picker' },
                loadComponent: () =>
                  import('./shared-ui/month-input/month-input-doc.component').then((m) => m.MonthPickerDocComponent),
              },
              {
                path: 'week',
                title: 'HMIS - Form Fields / Week Picker',
                data: { breadcrumb: 'Week Picker' },
                loadComponent: () =>
                  import('./shared-ui/week-input/week-input-doc.component').then((m) => m.WeekDocComponent),
              },
              {
                path: 'time-picker',
                title: 'HMIS - Form Fields / Time Picker',
                data: { breadcrumb: 'Time Picker' },
                loadComponent: () =>
                  import('./shared-ui/time-picker-input/time-picker-input-doc.component').then((m) => m.TimePickerDocComponent),
              },
              {
                path: 'array-form',
                title: 'HMIS - Form Fields / Array Form',
                data: { breadcrumb: 'Array Form' },
                loadComponent: () =>
                  import('./shared-ui/array-form/array-form-doc.component').then((m) => m.ArrayFormDocComponent),
              },
              {
                path: 'object-to-form',
                title: 'HMIS - Form Fields / Object to Form',
                data: { breadcrumb: 'Object to Form' },
                loadComponent: () =>
                  import('./shared-ui/dynamic-object-form/dynamic-object-form-doc.component').then((m) => m.DynamicObjectFormDocComponent),
              },
              {
                path: 'autocomplete',
                title: 'HMIS - Form Fields / Autocomplete Input',
                data: { breadcrumb: 'Autocomplete' },
                loadComponent: () =>
                  import('./shared-ui/autocomplete-input/autocomplete-input-doc.component').then((m) => m.AutocompleteInputDocComponent),
              },
    {
                path: 'autocomplete-server',
                title: 'HMIS - Form Fields / Autocomplete Server Input',
                data: { breadcrumb: 'Autocomplete' },
                loadComponent: () =>
                  import('./shared-ui/autocomplete-input-server/autocomplete-input-server-doc.component').then((m) => m.AutocompleteServerInputDocComponent),
              },
              {
                path: 'textarea',
                title: 'HMIS - Form Fields / Textarea',
                data: { breadcrumb: 'Textarea' },
                loadComponent: () =>
                  import('./shared-ui/textarea/textarea-doc.component').then((m) => m.TextareaDocComponent),
              },
            ],
          },
          {
            path: 'all-buttons',
            title: 'HMIS - Components / Buttons',
            data: { breadcrumb: 'Buttons' },
            loadComponent: () =>
              import('./shared-ui/all-buttons/all-buttons-doc.component').then((m) => m.AllButtonsDocComponent),
          },
          {
            path: 'search',
            title: 'HMIS - Form Fields / Search',
            data: { breadcrumb: 'Search' },
            loadComponent: () =>
              import('./shared-ui/search-input/search-input-doc.component').then((m) => m.SearchInputDocComponent),
          },
          {
            path: 'loader',
            title: 'HMIS - Components / Loader',
            data: { breadcrumb: 'Loader' },
            loadComponent: () =>
              import('./shared-ui/loader/loader-doc.component').then((m) => m.LoaderDocComponent),
          },
          {
            path: 'progress-bar',
            title: 'HMIS - Components / Progress Bar',
            data: { breadcrumb: 'Progress Bar' },
            loadComponent: () =>
              import('./shared-ui/progress-bar/progress-bar-doc.component').then((m) => m.ProgressBarDocComponent),
          },
           {
            path: 'tooltip',
            title: 'HMIS - Components / Tooltip',
            data: { breadcrumb: 'Tooltip' },
            loadComponent: () =>
              import('./shared-ui/tooltip/tooltip-doc.component').then((m) => m.TooltipDocComponent),
          },
           {
            path: 'expansion-panel',
            title: 'HMIS - Components / Expansion-Panel',
            data: { breadcrumb: 'Expansion-Panel' },
            loadComponent: () =>
              import('./shared-ui/expansion-panel/expansion-panel-doc.component').then((m) => m.ExpansionPanelDocComponent),
          },
          {
            path: 'paginator',
            title: 'HMIS - Components / Paginator',
            data: { breadcrumb: 'Paginator' },
            loadComponent: () =>
              import('./shared-ui/paginator/paginator-doc.component').then((m) => m.PaginatorDocComponent),
          },
          {
            path: 'modals',
            title: 'HMIS - Components / Modals',
            data: { breadcrumb: 'Modals' },
            loadComponent: () =>
              import('./shared-ui/modals/modals-doc.component').then((m) => m.ModalsDocComponent),
          },
          {
            path: 'tab',
            loadComponent: () =>
              import('./shared-ui/tab/tab.component-doc.component').then((m) => m.TabDocComponent),
            children: [
              {
                path: '',
                redirectTo: 'first',
                pathMatch: 'full',
              },
              {
                path: 'first',
                title: 'HMIS - Tab / First Tab',
                data: { breadcrumb: 'Tab' },
                component: ComponentOne,
              },
              // {
              //   path: 'third',
              //   title: 'HMIS - Tab / Third Tab',
              //   data: { breadcrumb: 'Third Tab' },
              //   loadComponent: () =>
              //     import('./shared-ui/tab/third-tab.component').then((m) => m.ComponentThird),
              // },
            ],
          },
          {
            path: 'table',
            data: { breadcrumb: 'Tables' },
            children: [
              {
                path: '',
                redirectTo: 'basic-table/client-side',
                pathMatch: 'full',
              },
              {
                path: 'basic-table',
                data: { breadcrumb: 'Basic Table' },
                children: [
                  {
                    path: '',
                    redirectTo: 'client-side',
                    pathMatch: 'full',
                  },
                  {
                    path: 'client-side',
                    title: 'HMIS - Table / Basic / Client Side',
                    data: { breadcrumb: 'Client Side' },
                    loadComponent: () =>
                      import('./shared-ui/tables/basic-table/client-side/client-side-doc.component').then((m) => m.ClientSideDocComponent),
                  },
                  {
                    path: 'server-side',
                    title: 'HMIS - Table / Basic / Server Side',
                    data: { breadcrumb: 'Server Side' },
                    loadComponent: () =>
                      import('./shared-ui/tables/basic-table/server-side/server-side-doc.component').then((m) => m.ServerSideDocComponent),
                  },
                ],
              },
              {
                path: 'intermediate-table',
                data: { breadcrumb: 'Intermediate Table' },
                children: [
                  {
                    path: '',
                    redirectTo: 'client-side',
                    pathMatch: 'full',
                  },
                  {
                    path: 'client-side',
                    title: 'HMIS - Table / Intermediate / Client Side',
                    data: { breadcrumb: 'Client Side' },
                    loadComponent: () =>
                      import('./shared-ui/tables/intermediate-table/client-side/client-side-doc.component').then((m) => m.ClientSideDocComponent),
                  },
                  {
                    path: 'server-side',
                    title: 'HMIS - Table / Intermediate / Server Side',
                    data: { breadcrumb: 'Server Side' },
                    loadComponent: () =>
                      import('./shared-ui/tables/intermediate-table/server-side/server-side-doc.component').then((m) => m.ServerSideDocComponent),
                  },
                ],
              },
              {
                path: 'advanced-table',
                data: { breadcrumb: 'Advanced Table' },
                children: [
                  {
                    path: '',
                    redirectTo: 'client-side',
                    pathMatch: 'full',
                  },
                  {
                    path: 'client-side',
                    title: 'HMIS - Table / Advanced / Client Side',
                    data: { breadcrumb: 'Client Side' },
                    loadComponent: () =>
                      import('./shared-ui/tables/advanced-table/client-side/client-side-doc.component').then((m) => m.ClientSideDocComponent),
                  },
                  {
                    path: 'server-side',
                    title: 'HMIS - Table / Advanced / Server Side',
                    data: { breadcrumb: 'Server Side' },
                    loadComponent: () =>
                      import('./shared-ui/tables/advanced-table/server-side/server-side-doc.component').then((m) => m.ServerSideDocComponent),
                  },
                ],
              },
            ],
          },
          {
            path: 'card',
            data: { breadcrumb: 'Cards' },
            children: [
              {
                path: '',
                redirectTo: 'widget',
                pathMatch: 'full'
              },
              {
                path: 'widget',
                data: { breadcrumb: 'Widget Card' },
                loadComponent: () => import('./shared-ui/cards/widget-card/widget-card-doc.component').then((m) => m.WidgetDocComponent),
              }
            ]
          },
          {
            path: 'list',
            data: { breadcrumb: 'Lists' },
            children: [
              {
                path: '',
                redirectTo: 'notification-card',
                pathMatch: 'full'
              },
              {
                path: 'notification-card',
                data: { breadcrumb: 'Notification Card' },
                loadComponent: () => import('./shared-ui/lists/notification-card/notification-card-doc.component').then((m) => m.NotificationCardDocComponent),
              },
              {
                path: 'card',
                data: { breadcrumb: 'Card' },
                loadComponent: () => import('./shared-ui/lists/card/card-doc.component').then((m) => m.CardDocComponent),
              },
            ]
          },
          {
            path: 'menu',
            data: { breadcrumb: 'Menu' },
            loadComponent: () => import('./shared-ui/menu/menu-doc.component').then((m) => m.MenuDocComponent),
          },
          {
            path: 'sidepanel',
            title: 'HMIS - Components / Side Panel',
            loadComponent: () => import('./shared-ui/sidepanel/sidepanel-doc.component').then((m) => m.SidePanelDocComponent),
          }
        ],
      },
      // Services Routes
      {
        path: 'services',
        data: { breadcrumb: 'Services' },
        children: [
          {
            path: '',
            redirectTo: 'data-transfer',
            pathMatch: 'full',
          },
          {
            path: 'data-transfer',
            title: 'HMIS - Services / Data Transfer',
            data: { breadcrumb: 'Data Transfer' },
            loadComponent: () =>
              import('./service-class/data-transfer/data-transfer-doc.component').then((m) => m.DataTransferDocComponent),
          },
          // {
          //   path: 'breadcrumb-service',
          //   title: 'HMIS - Services / Breadcrumb Service',
          //   data: { breadcrumb: 'Breadcrumb Service' },
          //   loadComponent: () =>
          //     import('./service-class/data-transfer/breadcrumb-service.component').then((m) => m.BreadcrumbServiceComponent),
          // },
          {
            path: 'encrypt-decrypt',
            title: 'HMIS - Services / Encrypt & Decrypt',
            data: { breadcrumb: 'Encrypt & Decrypt' },
            loadComponent: () =>
              import('./service-class/data-transfer/encrypt-decrypt-service-doc.component').then((m) => m.EncryptDecryptServiceDocComponent),
          },
          {
            path: 'toast-service',
            title: 'HMIS - Components / Toasts',
            data: { breadcrumb: 'Toasts' },
            loadComponent: () =>
              import('./shared-ui/toasts/toasts-doc.component').then((m) => m.ToastsDocComponent),
          },
          {
            path: 'debouncing-service',
            title: 'HMIS - Services / Debouncing Service',
            data: { breadcrumb: 'Debouncing' },
            loadComponent: () =>
              import('./service-class/data-transfer/debounce-service-doc.component').then((m) => m.DebouncingServiceDocComponent),
          },
          {
            path: 'throttling-service',
            title: 'HMIS - Services / Throttling Service',
            data: { breadcrumb: 'Throttling' },
            loadComponent: () =>
              import('./service-class/data-transfer/throttling-service-doc.component').then((m) => m.ThrottlingDocComponent),
          },
        ],
      },
      // API Routes
      {
        path: 'api',
        data: { breadcrumb: 'API' },
        children: [
          {
            path: '',
            redirectTo: 'crud-resource',
            pathMatch: 'full',
          },
          {
            path: 'crud-resource',
            title: 'HMIS - API / Crud Resource API',
            data: { breadcrumb: 'Crud Resource API' },
            loadComponent: () =>
              import('./api-call/crud-resources/crud-resources-doc.component').then((m) => m.CrudResourceDocComponent),
          },
          {
            path: 'fetch-subscribe',
            title: 'HMIS - API / Fetch Subscribe API',
            data: { breadcrumb: 'Fetch Subscribe API' },
            loadComponent: () =>
              import('./api-call/fetch-subscribe/fetch-subscribe.doc.component').then((m) => m.FetchSubscribeDocComponent),
          },
          {
            path: 'to-signal',
            title: 'HMIS - API / To Signal API',
            data: { breadcrumb: 'To Signal API' },
            loadComponent: () =>
              import('./api-call/tosignal/tosignal-doc.component').then((m) => m.ToSignalDocComponent),
          },
          {
            path: 'http-resource',
            title: 'HMIS - API / Http Resource API',
            data: { breadcrumb: 'Http Resource API' },
            loadComponent: () =>
              import('./api-call/http-resource/http-resource-doc.component').then((m) => m.ResourceDocComponent),
          },
          {
            path: 'login',
            title: 'HMIS - API / Login',
            data: { breadcrumb: 'Login' },
            loadComponent: () =>
              import('./api-call/login.component').then((m) => m.LoginComponent),
          },
        ],
      },
      // Theming Routes
      {
        path: 'theming',
        data: { breadcrumb: 'Theming' },
        children: [
          {
            path: '',
            redirectTo: 'typography-color',
            pathMatch: 'full',
          },
          {
            path: 'typography-color',
            title: 'HMIS - Components / Typography & Color',
            data: { breadcrumb: 'Typography & Color' },
            loadComponent: () =>
              import('./shared-ui/typography-color/typography-color-doc.component').then((m) => m.TypographyColorDocComponent),
          },
          {
            path: 'navigation',
            title: 'HMIS - Layout / Navigation',
            data: { breadcrumb: 'Navigation' },
            loadComponent: () =>
              import('./layout/navigation/navigation.component').then((m) => m.NavigationComponent),
          },
        ],
      },
      // Layout Routes
      {
        path: 'layout',
        data: { breadcrumb: 'Layout' },
        children: [
          {
            path: '',
            redirectTo: 'authentication',
            pathMatch: 'full',
          },
          {
            path: 'authentication',
            data: { breadcrumb: 'Authentication' },
            children: [
              {
                path: '',
                redirectTo: 'signin',
                pathMatch: 'full'
              },
              {
                path: 'signin',
                data: { breadcrumb: 'Sign In' },
                loadComponent: () => import('./shared-ui/authentications/sign-in/sign-in-doc.component').then((m) => m.SigninDocComponent)
              },
              {
                path: 'forget-password',
                data: { breadcrumb: 'Forgot Password' },
                loadComponent: () => import('./shared-ui/authentications/forget-password/forget-password-doc.component').then((m) => m.ForgetPasswordDocComponent)
              },
              {
                path: 'change-password',
                data: { breadcrumb: 'Change Password' },
                loadComponent: () => import('./shared-ui/authentications/change-password/change-password-doc.component').then((m) => m.ChangePasswordDocComponent)
              },
              {
                path: 'page-not-found',
                data: { breadcrumb: 'Page Not Found' },
                loadComponent: () => import('./shared-ui/authentications/page-404/page-404-doc.component').then((m) => m.PageNotFoundDocComponent)
              },
              {
                path: 'internal-server-error',
                data: { breadcrumb: 'Server Error' },
                loadComponent: () => import('./shared-ui/authentications/page-500/page-500-doc.component').then((m) => m.InternalServerErrorDocComponent)
              },
              {
                path: 'access-denied',
                data: { breadcrumb: 'Access Denied' },
                loadComponent: () => import('./shared-ui/authentications/access-denied/access-denied.component').then((m) => m.AccessDeniedComponent)
              }
            ]
          },
          {
            path: 'typography-color',
            title: 'HMIS - Components / Typography & Color',
            data: { breadcrumb: 'Typography & Color' },
            loadComponent: () =>
              import('./shared-ui/typography-color/typography-color-doc.component').then((m) => m.TypographyColorDocComponent),
          },
          {
            path: 'navigation',
            title: 'HMIS - Layout / Navigation',
            data: { breadcrumb: 'Navigation' },
            loadComponent: () =>
              import('./layout/navigation/navigation.component').then((m) => m.NavigationComponent),
          }
        ],
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];