export const initialStore = () => {
  return {
    message: null,
    contacts: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'set_contacts':
      return {
        ...store,
        contacts: action.payload
      };

    case 'create_contact':
      return {
        ...store,
        contacts: [...store.contacts + action.payload]
      };

    case 'delete_contact':
      return {
        ...store,
        contacts: [...store.contacts.filter(elem => elem.id != action.payload)]
      }

    default:
      throw Error('Unknown action.');
  }
}
