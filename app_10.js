const { createApp } = Vue;

createApp({
    data() {
        return {
            activeTab: 'overview',
            currentSlide: 0,
            slides: 5,
            form: {
                name: '',
                email: '',
                proposal: ''    
            },
            modal: {
                title: '',
                message: ''
            }
        };
    },
    methods: {
        setTab(tab) {
            this.activeTab = tab;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        scrollTo(id) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        },
        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.slides) % this.slides;
        },
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.slides;
        },
        submitForm() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!this.form.name || !this.form.email || !this.form.proposal) {
                this.modal.title = 'Ошибка';
                this.modal.message = 'Все поля обязательны для заполнения.';
            } else if (!emailRegex.test(this.form.email)) {
                this.modal.title = 'Ошибка';
                this.modal.message = 'Пожалуйста, введите корректный email.';
            } else {
                this.modal.title = 'Успех';
                this.modal.message = 'Ваше предложение успешно отправлено!';
                this.form.name = '';
                this.form.email = '';
                this.form.proposal = '';
            }
            const modal = new bootstrap.Modal(document.getElementById('formModal'));
            modal.show();
        }
    },
    mounted() {
        window.addEventListener('hashchange', () => {
            const tab = window.location.hash.replace('#', '');
            if (['overview', 'advantages', 'addressing', 'adaptation', 'proposals'].includes(tab)) {
                this.setTab(tab);
            }
        });
    }
}).mount('#app');