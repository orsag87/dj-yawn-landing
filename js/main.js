// ==========================================
// DJ YAWN LANDING PAGE - CONFIGURATION
// ==========================================

// EDIT THIS CONFIG TO UPDATE YOUR PAGE
const CONFIG = {
    // Profile Information
    profile: {
        username: '@dj.yawn',
        bio: 'Producer, DJ, Beatmaker. Vancouver BC.',
        image: 'images/profile/featured-1.png' // Change to featured-2.png or featured-3.png
    },

    // Social Media Links
    socials: [
        {
            platform: 'instagram',
            url: 'https://instagram.com/dj.yawn',
            icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/><path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`
        },
        {
            platform: 'spotify',
            url: 'https://open.spotify.com/artist/1whCaRyOBdvIWcvHzq225q?si=eL_IkrS0R8y7_G4VeF8OXg',
            icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>`
        },
        {
            platform: 'youtube',
            url: 'https://youtube.com/@djyawn',
            icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`
        },
        {
            platform: 'applemusic',
            url: 'https://music.apple.com/ca/artist/dj-yawn/1515997927',
            icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 0 0-1.852-.576 10.496 10.496 0 0 0-1.87-.045c-4.88.012-9.76.013-14.64 0a5.996 5.996 0 0 0-1.903.327c-1.354.452-2.287 1.373-2.761 2.735a6.82 6.82 0 0 0-.23 1.896c-.004 4.895-.004 9.79 0 14.684 0 .22.01.44.034.66.09.815.34 1.577.832 2.24.73.984 1.69 1.596 2.87 1.834a6.48 6.48 0 0 0 1.544.116c4.88-.004 9.758-.003 14.638 0 .213 0 .426-.008.638-.027 1.307-.12 2.357-.646 3.141-1.67a5.27 5.27 0 0 0 .992-2.43c.097-.62.136-1.244.137-1.868.003-4.885.004-9.77-.002-14.655zm-9.33 11.976c-.067.036-.135.071-.203.105-.688.346-1.436.563-2.228.656a4.578 4.578 0 0 1-2.228-.238c-.792-.27-1.363-.79-1.726-1.557-.364-.768-.39-1.572-.15-2.395.24-.823.736-1.437 1.457-1.877.721-.44 1.513-.597 2.336-.565.824.031 1.597.235 2.304.656.068.04.135.082.202.124v-7.636c0-.088.01-.176.025-.263.024-.14.082-.27.193-.373.11-.103.242-.15.388-.15h6.356c.087 0 .174.01.26.026.14.025.27.083.373.194.103.11.15.242.15.387v7.634h-.001c0 .137-.015.272-.04.407-.024.134-.065.266-.122.392a1.647 1.647 0 0 1-.364.526c-.164.156-.355.273-.563.348a2.618 2.618 0 0 1-.658.13 4.272 4.272 0 0 1-.657-.013 4.002 4.002 0 0 1-1.294-.384c-.203-.093-.394-.205-.575-.331a2.62 2.62 0 0 1-.5-.426c-.147-.157-.278-.33-.392-.515a2.33 2.33 0 0 1-.253-.627c-.054-.227-.082-.458-.084-.692V11.03z"/></svg>`
        }
    ],

    // Main Links - EDIT HERE TO UPDATE YOUR LINKS
    links: [
        {
            title: 'Follow on Insta',
            url: 'https://instagram.com/dj.yawn',
            icon: 'images/icons/icon-63.png' // or use emoji: '📸'
        },
        {
            title: '"CzechOne Two" OUT NOW',
            url: 'https://distrokid.com/hyperfollow/djyawn/czechone-two',
            icon: 'images/icons/icon-74.png'
        },
        {
            title: 'DJ YAWN Live @ SHAMBHALA MF',
            url: 'https://youtu.be/GrG4k3vbe1Y?si=w3DyjUV-vF5BNiIg&t=469',
            icon: 'images/icons/icon-76.png'
        },
        {
            title: "Grab 'Sleepy Song Starters' for FREE",
            url: 'https://www.dropbox.com/l/AADBoe0wjOk5zAf-T5Pzdr3Jgx4wetcQcL8',
            icon: 'images/icons/icon-77.png'
        },
        {
            title: 'WAVE music video',
            url: 'https://youtu.be/wLp3BH0ySVg?si=bNESKQWZcikaRVzv',
            icon: 'images/icons/icon-88.png'
        },
        {
            type: 'divider',
            text: 'Check it! I made Merch! ✨'
        },
        {
            title: 'MERCH',
            url: 'https://members.producerdojo.com/muse',
            icon: 'images/icons/icon-89.png'
        },
        {
            title: 'Bookings',
            url: 'mailto:bookings@djyawn.com',
            icon: 'images/icons/icon-63.png',
            flip: true // Flip this icon for variation
        }
    ]
};

// ==========================================
// APPLICATION CODE
// ==========================================

class LandingPage {
    constructor(config) {
        this.config = config;
        this.analytics = new Analytics();
        this.init();
    }

    init() {
        this.renderProfile();
        this.renderSocials();
        this.renderLinks();
        this.updateAnalyticsDisplay();
        // Setup event listeners after DOM is populated
        setTimeout(() => this.setupEventListeners(), 100);
    }

    renderProfile() {
        const { username, bio, image } = this.config.profile;

        document.getElementById('profile-image').src = image;
        document.getElementById('profile-image').alt = username;
        document.getElementById('profile-username').textContent = username;
        document.getElementById('profile-bio').textContent = bio;
    }

    renderSocials() {
        const container = document.getElementById('social-icons');

        this.config.socials.forEach(social => {
            const link = document.createElement('a');
            link.href = social.url;
            link.className = 'social-icon';
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.setAttribute('aria-label', social.platform);
            link.innerHTML = social.icon;

            link.addEventListener('click', () => {
                this.analytics.trackClick(social.platform);
            });

            container.appendChild(link);
        });
    }

    renderLinks() {
        const container = document.getElementById('links-container');

        this.config.links.forEach(item => {
            if (item.type === 'divider') {
                const divider = document.createElement('div');
                divider.className = 'divider-text';
                divider.textContent = item.text;
                container.appendChild(divider);
            } else {
                const link = this.createLinkButton(item);
                container.appendChild(link);
            }
        });
    }

    createLinkButton(linkData) {
        const link = document.createElement('a');
        link.href = linkData.url;
        link.className = 'link-btn';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';

        // Create icon element
        const icon = document.createElement('div');
        icon.className = 'link-icon';

        // Check if icon is emoji or image path
        if (linkData.icon.includes('/') || linkData.icon.includes('.')) {
            const img = document.createElement('img');
            img.src = linkData.icon;
            img.alt = '';
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';

            // Apply flip if specified
            if (linkData.flip) {
                img.style.transform = 'scaleX(-1)';
            }

            icon.appendChild(img);
        } else {
            // It's an emoji
            icon.textContent = linkData.icon;
            icon.style.fontSize = '24px';
            icon.style.display = 'flex';
            icon.style.alignItems = 'center';
            icon.style.justifyContent = 'center';
        }

        // Create text element
        const text = document.createElement('span');
        text.className = 'link-text';
        text.textContent = linkData.title;

        link.appendChild(icon);
        link.appendChild(text);

        // Track click
        link.addEventListener('click', () => {
            this.analytics.trackClick(linkData.title);
        });

        return link;
    }

    setupEventListeners() {
        // Share button
        const shareBtn = document.querySelector('.share-btn');
        if (shareBtn) {
            shareBtn.addEventListener('click', () => this.share());
        }

        // Mouse tracking for glow effect on link buttons
        const linkButtons = document.querySelectorAll('.link-btn');
        linkButtons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;

                btn.style.setProperty('--mouse-x', `${x}%`);
                btn.style.setProperty('--mouse-y', `${y}%`);
            });
        });

        // Global parallax effect
        this.setupParallax();
    }

    setupParallax() {
        const container = document.querySelector('.container');
        const profileImage = document.querySelector('.profile-image');
        const socialIcons = document.querySelectorAll('.social-icon');
        const linkButtons = document.querySelectorAll('.link-btn');

        document.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            // Calculate parallax offset (stronger movement)
            const moveX = (clientX - centerX) / 30;
            const moveY = (clientY - centerY) / 30;

            // Profile image parallax (medium strength)
            if (profileImage) {
                profileImage.style.transform = `scale(1.05) translate(${moveX * 0.5}px, ${moveY * 0.5}px)`;
            }

            // Social icons parallax (light strength)
            socialIcons.forEach((icon, index) => {
                const delay = index * 0.1;
                icon.style.transform = `translate(${moveX * (0.3 + delay)}px, ${moveY * (0.3 + delay)}px)`;
            });

            // Link buttons parallax (subtle strength)
            linkButtons.forEach((btn, index) => {
                const delay = index * 0.05;
                const currentTransform = btn.style.transform || '';

                // Preserve hover state transforms
                if (currentTransform.includes('scale')) {
                    const scaleMatch = currentTransform.match(/scale\([^)]+\)/);
                    const translateYMatch = currentTransform.match(/translateY\([^)]+\)/);
                    const scale = scaleMatch ? scaleMatch[0] : '';
                    const translateY = translateYMatch ? translateYMatch[0] : '';

                    btn.style.transform = `${translateY} ${scale} translate(${moveX * (0.2 + delay)}px, ${moveY * (0.1 + delay)}px)`;
                } else {
                    btn.style.transform = `translate(${moveX * (0.2 + delay)}px, ${moveY * (0.1 + delay)}px)`;
                }
            });
        });
    }

    async share() {
        const shareData = {
            title: `${this.config.profile.username} - Links`,
            text: this.config.profile.bio,
            url: window.location.href
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                // Fallback: copy to clipboard
                await navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
            }
        } catch (err) {
            console.log('Share failed:', err);
        }
    }

    updateAnalyticsDisplay() {
        const totalClicks = this.analytics.getTotalClicks();
        document.getElementById('click-count').textContent = totalClicks.toLocaleString();
    }
}

// ==========================================
// ANALYTICS CLASS
// ==========================================

class Analytics {
    constructor() {
        this.storageKey = 'djyawn_analytics';
        this.data = this.loadData();
    }

    loadData() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            return stored ? JSON.parse(stored) : { clicks: {}, totalClicks: 0 };
        } catch (e) {
            return { clicks: {}, totalClicks: 0 };
        }
    }

    saveData() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.data));
        } catch (e) {
            console.error('Failed to save analytics data:', e);
        }
    }

    trackClick(linkName) {
        // Update individual link clicks
        if (!this.data.clicks[linkName]) {
            this.data.clicks[linkName] = 0;
        }
        this.data.clicks[linkName]++;

        // Update total clicks
        this.data.totalClicks++;

        this.saveData();

        // Update display
        document.getElementById('click-count').textContent = this.data.totalClicks.toLocaleString();
    }

    getTotalClicks() {
        return this.data.totalClicks;
    }

    getClicksByLink() {
        return this.data.clicks;
    }

    reset() {
        this.data = { clicks: {}, totalClicks: 0 };
        this.saveData();
    }
}

// ==========================================
// INITIALIZE APP
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    new LandingPage(CONFIG);

    // Add loading animation
    document.body.classList.add('loading');
});

// Console message
console.log('%c🎵 DJ YAWN Landing Page', 'font-size: 20px; font-weight: bold;');
console.log('%cBuilt with Claude Code', 'color: #888;');
