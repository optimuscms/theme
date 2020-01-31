import { library } from '@fortawesome/fontawesome-svg-core';

import {
    faAngleDown, faAngleRight, faAngleUp,
    faCalendarAlt,
    faCog,
    faExternalLinkAlt,
    faHandPointer,
    faPencilAlt,
    faSignInAlt, faSignOutAlt,
    faSearch,
    faSort,
    faSortDown, faSortUp,
    faSpinner,
    faStop,
    faTimes,
    faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';

export default {
    register() {
        library.add(
            faAngleDown, faAngleRight, faAngleUp,
            faCalendarAlt,
            faCog,
            faExternalLinkAlt,
            faHandPointer,
            faPencilAlt,
            faSignInAlt, faSignOutAlt,
            faSearch,
            faSort,
            faSortDown, faSortUp,
            faSpinner,
            faStop,
            faTimes,
            faTrashAlt,
        );
    },
};
