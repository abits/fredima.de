document.addEventListener('alpine:init', () => {
    Alpine.data('motd', () => ({
        message: '',
        
        async init() {
            try {
                const response = await fetch('motd.json');
                const motds = await response.json();
                this.message = motds[Math.floor(Math.random() * motds.length)];
            } catch (error) {
                console.error('Error loading MOTD:', error);
                this.message = '✧ welcome ✧';
            }
        }
    }));

    Alpine.data('footerText', () => ({
        words: [],
        originalText: 'Hi! My name is fredi and I am a 14 year old developer from Germany. I love playing Minecraft and working on cool projects! Let\'s create something awesome together!',
        
        init() {
            this.words = this.originalText.split(' ').map((word, index) => ({
                text: word,
                delay: index * 0.1
            }));
        }
    }));
});
