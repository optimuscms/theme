import { library } from '@fortawesome/fontawesome-svg-core';

// import faAngleDown from '@fortawesome/free-solid-svg-icons/faAngleDown';

export default { 
    register() {
        library.add(
            require('@fortawesome/free-solid-svg-icons/faAngleDown').definition,
            require('@fortawesome/free-solid-svg-icons/faAngleRight').definition,
            require('@fortawesome/free-solid-svg-icons/faAngleUp').definition,
            require('@fortawesome/free-solid-svg-icons/faCalendarAlt').definition,
            require('@fortawesome/free-solid-svg-icons/faCog').definition,
            require('@fortawesome/free-solid-svg-icons/faPencilAlt').definition,
            require('@fortawesome/free-solid-svg-icons/faSignOutAlt').definition,
            require('@fortawesome/free-solid-svg-icons/faSearch').definition,
            require('@fortawesome/free-solid-svg-icons/faSort').definition,
            require('@fortawesome/free-solid-svg-icons/faSortDown').definition,
            require('@fortawesome/free-solid-svg-icons/faSortUp').definition,
            require('@fortawesome/free-solid-svg-icons/faTrashAlt').definition
        );
    }
}
