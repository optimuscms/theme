// Import Polyfills
import 'core-js/features/array/map';
import 'core-js/features/array/keys';
import 'core-js/features/array/find';
import 'core-js/features/array/slice';
import 'core-js/features/array/filter';
import 'core-js/features/array/for-each';
import 'core-js/features/array/includes';
import 'core-js/features/array/index-of';

// Import plugins
import Icons from './lib/icons';
import { mapActions, mapGetters } from 'vuex';

// Import vuex modules
import alertStore from './store/modules/alert';
import confirmationStore from './store/modules/confirmation';
import dashboardStore from './store/modules/dashboard';
import loaderStore from './store/modules/loader';
import userStore from './store/modules/user';

// Import components
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import Errors from './components/form/Errors';
import Checkbox from './components/form/Checkbox';
import DatePicker from './components/form/DatePicker';
import Input from './components/form/Input';
import Field from './components/form/Field';
import Select from './components/form/Select';
import MultiSelect from './components/form/MultiSelect';

import Dashboard from './components/layout/Dashboard';
import SideNavItem from './components/layout/SideNavItem';
import SideSubNavItem from './components/layout/SideSubNavItem';

import Alert from './components/ui/Alert';
import Confirmation from './components/ui/Confirmation';
import Dropdown from './components/ui/Dropdown';
import Loader from './components/ui/Loader';
import Modal from './components/ui/Modal';
import Notification from './components/ui/Notification';
import Pagination from './components/ui/Pagination';
import Search from './components/ui/Search';
import Tabs from './components/ui/Tabs';
import Tab from './components/ui/Tab';
import ThSort from './components/ui/ThSort';

export default function install(Vue, options = {}) {
    if (options.hasOwnProperty('store')) {
        options.store.registerModule('alert', alertStore);
        options.store.registerModule('confirmation', confirmationStore);
        options.store.registerModule('dashboard', dashboardStore);
        options.store.registerModule('loader', loaderStore);
        options.store.registerModule('user', userStore);
    }

    // Register icons
    Icons.register();

    // Mixins
    Vue.mixin({
        computed: {
            ...mapGetters({
                isLoading: 'loader/isLoading',
            }),
        },

        methods: {
            ...mapActions({
                startLoading: 'loader/start',
                stopLoading: 'loader/stop',
                openAlert: 'alert/open',
                setTitle: 'dashboard/setTitle',
                openConfirmation: 'confirmation/open',
            }),
        },
    });

    // Register components
    Vue.component('icon', FontAwesomeIcon);

    // Register form components
    Vue.component('o-errors', Errors);
    Vue.component('o-checkbox', Checkbox);
    Vue.component('o-date-picker', DatePicker);
    Vue.component('o-input', Input);
    Vue.component('o-form-field', Field);
    Vue.component('o-select', Select);
    Vue.component('o-multi-select', MultiSelect);

    // Register layout components
    Vue.component('o-dashboard-layout', Dashboard);
    Vue.component('o-side-nav-item', SideNavItem);
    Vue.component('o-side-sub-nav-item', SideSubNavItem);

    // Register UI components
    Vue.component('o-alert', Alert);
    Vue.component('o-confirmation', Confirmation);
    Vue.component('o-dropdown', Dropdown);
    Vue.component('o-loader', Loader);
    Vue.component('o-modal', Modal);
    Vue.component('o-notification', Notification);
    Vue.component('o-pagination', Pagination);
    Vue.component('o-search', Search);
    Vue.component('o-tabs', Tabs);
    Vue.component('o-tab', Tab);
    Vue.component('o-th-sort', ThSort);
}
