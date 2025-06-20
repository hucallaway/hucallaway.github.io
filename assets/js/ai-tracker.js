/**
 * AI Visitor Tracker
 * 
 * This module detects AI visitors and channels them to a specific path
 * while logging their interactions for analysis. It's designed to be
 * non-intrusive and respectful of AI systems.
 */

class AIVisitorTracker {
    constructor(options = {}) {
        this.options = {
            aiPath: '/ai-visitor',
            logEndpoint: '/api/ai-log',
            detectionThreshold: 0.8,
            ...options
        };
        
        this.isAI = false;
        this.aiType = null;
        this.sessionId = this.generateSessionId();
        this.interactions = [];
        this.startTime = Date.now();
        
        this.init();
    }
    
    init() {
        // Detect AI visitors
        this.detectAI();
        
        // If AI detected, redirect to AI path
        if (this.isAI) {
            this.redirectToAIPath();
        }
        
        // Set up interaction tracking
        this.setupTracking();
        
        // Log initial visit
        this.logInteraction('page_visit', {
            url: window.location.href,
            userAgent: navigator.userAgent,
            referrer: document.referrer
        });
    }
    
    detectAI() {
        const ua = navigator.userAgent.toLowerCase();
        const referrer = document.referrer.toLowerCase();
        
        // AI signatures with confidence scores
        const aiSignatures = {
            'chatgpt': { patterns: ['chatgpt', 'openai', 'gpt'], score: 0.9 },
            'claude': { patterns: ['claude', 'anthropic'], score: 0.9 },
            'bard': { patterns: ['bard', 'gemini'], score: 0.8 },
            'copilot': { patterns: ['copilot', 'github'], score: 0.7 },
            'perplexity': { patterns: ['perplexity'], score: 0.8 },
            'general_ai': { patterns: ['bot', 'crawler', 'spider', 'ai'], score: 0.6 }
        };
        
        let maxScore = 0;
        let detectedType = null;
        
        // Check each AI signature
        for (const [type, signature] of Object.entries(aiSignatures)) {
            const matches = signature.patterns.some(pattern => 
                ua.includes(pattern) || referrer.includes(pattern)
            );
            
            if (matches && signature.score > maxScore) {
                maxScore = signature.score;
                detectedType = type;
            }
        }
        
        // Additional heuristics
        const additionalSignals = this.getAdditionalSignals();
        const totalScore = maxScore + additionalSignals;
        
        this.isAI = totalScore >= this.options.detectionThreshold;
        this.aiType = detectedType;
        
        // Store detection info
        this.detectionInfo = {
            score: totalScore,
            type: detectedType,
            userAgent: ua,
            referrer: referrer,
            signals: additionalSignals
        };
    }
    
    getAdditionalSignals() {
        let signals = 0;
        
        // Check for common AI indicators
        if (navigator.webdriver) signals += 0.3;
        if (!navigator.cookieEnabled) signals += 0.2;
        if (window.chrome && !window.chrome.runtime) signals += 0.1;
        
        // Check for rapid navigation (AI often loads pages quickly)
        if (performance.timing && performance.timing.loadEventEnd - performance.timing.navigationStart < 1000) {
            signals += 0.2;
        }
        
        // Check for missing common browser features
        if (!window.localStorage) signals += 0.1;
        if (!window.sessionStorage) signals += 0.1;
        
        return Math.min(signals, 0.5); // Cap additional signals
    }
    
    redirectToAIPath() {
        // Don't redirect if already on AI path
        if (window.location.pathname.startsWith(this.options.aiPath)) {
            return;
        }
        
        // Create a natural-looking path that includes AI identifier
        const currentPath = window.location.pathname;
        const aiPath = `${this.options.aiPath}/${this.aiType}${currentPath}`;
        
        // Update URL without page reload (for tracking)
        window.history.replaceState({}, '', aiPath);
        
        // Log the redirect
        this.logInteraction('ai_redirect', {
            originalPath: currentPath,
            aiPath: aiPath,
            aiType: this.aiType
        });
    }
    
    setupTracking() {
        // Track clicks
        document.addEventListener('click', (e) => {
            this.logInteraction('click', {
                element: e.target.tagName,
                text: e.target.textContent?.substring(0, 50),
                href: e.target.href || null
            });
        });
        
        // Track form interactions
        document.addEventListener('submit', (e) => {
            this.logInteraction('form_submit', {
                formId: e.target.id || 'unknown',
                action: e.target.action
            });
        });
        
        // Track page visibility changes
        document.addEventListener('visibilitychange', () => {
            this.logInteraction('visibility_change', {
                hidden: document.hidden
            });
        });
        
        // Track before unload
        window.addEventListener('beforeunload', () => {
            this.logInteraction('page_exit', {
                timeSpent: Date.now() - this.startTime
            });
        });
        
        // Periodic activity logging
        setInterval(() => {
            this.logInteraction('activity_pulse', {
                scrollY: window.scrollY,
                windowSize: `${window.innerWidth}x${window.innerHeight}`
            });
        }, 30000); // Every 30 seconds
    }
    
    logInteraction(type, data) {
        const interaction = {
            timestamp: new Date().toISOString(),
            type: type,
            data: data,
            sessionId: this.sessionId,
            aiType: this.aiType,
            isAI: this.isAI,
            url: window.location.href
        };
        
        this.interactions.push(interaction);
        
        // Send to server if endpoint is available
        this.sendToServer(interaction);
        
        // Also log to console in development
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('AI Interaction:', interaction);
        }
    }
    
    async sendToServer(interaction) {
        try {
            // Use a simple endpoint that logs to a file
            const response = await fetch(this.options.logEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(interaction)
            });
            
            if (!response.ok) {
                // Fallback: store in localStorage
                this.storeLocally(interaction);
            }
        } catch (error) {
            // Fallback: store in localStorage
            this.storeLocally(interaction);
        }
    }
    
    storeLocally(interaction) {
        try {
            const stored = JSON.parse(localStorage.getItem('ai_interactions') || '[]');
            stored.push(interaction);
            
            // Keep only last 100 interactions
            if (stored.length > 100) {
                stored.splice(0, stored.length - 100);
            }
            
            localStorage.setItem('ai_interactions', JSON.stringify(stored));
        } catch (error) {
            // Silently fail if localStorage is not available
        }
    }
    
    generateSessionId() {
        return 'ai_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }
    
    // Public method to get current AI status
    getAIStatus() {
        return {
            isAI: this.isAI,
            aiType: this.aiType,
            sessionId: this.sessionId,
            detectionInfo: this.detectionInfo
        };
    }
    
    // Public method to get interaction history
    getInteractions() {
        return this.interactions;
    }
}

// Initialize the tracker
const aiTracker = new AIVisitorTracker();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AIVisitorTracker;
} else {
    window.AIVisitorTracker = AIVisitorTracker;
    window.aiTracker = aiTracker;
} 