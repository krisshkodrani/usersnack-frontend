const orderModalStates = {
    initial: {
        isOpen: false,
        headerText: '',
        bodyText: '',
    },
    openSuccess: {
        isOpen: true,
        headerText: 'Order Received',
        bodyText: 'Pizza is on the way',
    },
    openFailBadRequest: {
        isOpen: true,
        headerText: 'Something went wrong',
        bodyText: 'Try again',
    },
    openFailMissingNameAndAddress: {
        isOpen: true,
        headerText: 'Required data missing',
        bodyText: 'We cant deliever your pizza without a name and an address',
    }
}

export default orderModalStates;
