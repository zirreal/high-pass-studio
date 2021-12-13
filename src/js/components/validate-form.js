document.addEventListener('DOMContentLoaded', () => {
    const validateForm = (selector) => {
        new JustValidate(selector, {
            rules: {
                name: {
                required: true,
                minLength: 2,
                maxLength: 30,
                },
                email: {
                required: true,
                email: true
                },
                },
                messages: {
                    name: 'Недопустимый формат',
                    email: 'Недопустимый формат',
                }
        });
    };

    validateForm('.form');
    validateForm('.studio__subscribe-form');
})
