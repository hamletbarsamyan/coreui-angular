/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppBreadcrumbService } from './app-breadcrumb.service';
import { AppBreadcrumbComponent } from './app-breadcrumb.component';
export class AppBreadcrumbModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: AppBreadcrumbModule,
            providers: [
                AppBreadcrumbService
            ]
        };
    }
}
AppBreadcrumbModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule],
                exports: [AppBreadcrumbComponent],
                declarations: [AppBreadcrumbComponent]
            },] },
];
function AppBreadcrumbModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AppBreadcrumbModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AppBreadcrumbModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJyZWFkY3J1bWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2JyZWFkY3J1bWIvYXBwLWJyZWFkY3J1bWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFFBQVEsRUFBc0IsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBT3BFLE1BQU07Ozs7O0lBQ0osTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFZO1FBQ3pCLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsU0FBUyxFQUFFO2dCQUNULG9CQUFvQjthQUNyQjtTQUNGLENBQUM7S0FDSDs7O1lBYkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFFLFlBQVksRUFBRSxZQUFZLENBQUU7Z0JBQ3ZDLE9BQU8sRUFBRSxDQUFFLHNCQUFzQixDQUFFO2dCQUNuQyxZQUFZLEVBQUUsQ0FBRSxzQkFBc0IsQ0FBRTthQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8vIEFwcCBCcmVhZGNydW1iIENvbXBvbmVudFxuaW1wb3J0IHsgQXBwQnJlYWRjcnVtYlNlcnZpY2UgfSBmcm9tICcuL2FwcC1icmVhZGNydW1iLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXBwQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vYXBwLWJyZWFkY3J1bWIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogWyBDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZSBdLFxuICBleHBvcnRzOiBbIEFwcEJyZWFkY3J1bWJDb21wb25lbnQgXSxcbiAgZGVjbGFyYXRpb25zOiBbIEFwcEJyZWFkY3J1bWJDb21wb25lbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBCcmVhZGNydW1iTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnPzogYW55KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBBcHBCcmVhZGNydW1iTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEFwcEJyZWFkY3J1bWJTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19