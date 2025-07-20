// Debug: Test if JavaScript is loading
console.log('🟢 JavaScript file loaded');

// Global error handler to catch any JS errors
window.addEventListener('error', function(e) {
    console.error('🔥 JavaScript Error:', e.error);
    console.error('🔥 Error at:', e.filename, 'line', e.lineno);
});

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🟢 DOM Content Loaded');
    
    try {
    
    // Mobile Navigation Functionality
    const navToggle = document.getElementById('navToggle');
    const navCenter = document.getElementById('navCenter');
    const mobileNavLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navCenter) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navCenter.classList.toggle('active');
        });

        // Close mobile menu when clicking on nav links
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navCenter.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navCenter.contains(event.target)) {
                navToggle.classList.remove('active');
                navCenter.classList.remove('active');
            }
        });
    }
    
    // Check for success parameter in URL (from FormSubmit redirect)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        showNotification('🎉 Thank you! Your message has been sent successfully. I\'ll get back to you soon!', 'success');
        // Clean up URL without refreshing
        window.history.replaceState({}, document.title, window.location.pathname);
    }
    
    // Experience data for popup
    const experienceData = {
        walmart: {
            title: "Software Engineer III",
            company: "Walmart, Bentonville, AR",
            duration: "Jan 2024 - Present",
            details: [
                " Developed and deployed new technologies using ECL and Java with comprehensive unit testing frameworks",
                " Executed multiple test cycles simulating real-world production scenarios, ensuring 99.9% system reliability",
                " Collaborated with cross-functional teams including cloud and infrastructure specialists for efficient solution delivery",
                " Contributed to Azure Cosmos DB by developing automation runbooks, transforming manual tasks into self-service processes",
                " Built internal GenAI automation tools for task triaging and root cause analysis using MCP servers and vector databases",
                " Reduced operational costs by 40% through process automation and improved system efficiency"
            ],
            technologies: ["Python", "Java", "ECL", "Azure", "Cosmos DB", "Flask", "JavaScript", "HTML/CSS", "GenAI", "Vector Databases"]
        },
        current: {
            title: "Research Data Scientist",
            company: "ISEE, University Of Illinois at Urbana-Champaign",
            duration: "June 2022 - Dec 2023",
            details: [
                " Implemented IoT-based solution using Raspberry Pi and PyCam in agricultural fields, reducing manual labor by 20%",
                " Leveraged edge analytics and AWS cloud system for real-time field monitoring, reducing data latency by 20%",
                " Deployed GPS modules for precise data collection with seamless timestamp integration",
                " Enhanced captured images using OpenCV, reducing data processing time by 30%",
                " Published research findings on precision agriculture and IoT applications"
            ],
            technologies: ["Python", "Raspberry Pi", "OpenCV", "AWS", "IoT", "Edge Computing", "GPS", "Data Analytics", "Computer Vision"]
        },
        sde: {
            title: "Software Development Engineer",
            company: "Qualcomm, Hyderabad",
            duration: "Jan 2022 - July 2022",
            details: [
                " Achieved 30% platform usage growth through automated load-testing with customized Postman scripts",
                " Engineered cutting-edge interface for automated test-suites, reducing workload by 400 hours and driving 5% revenue growth",
                " Optimized load testing by integrating Postman and Newman, reducing developer workload by 80%",
                " Accelerated development cycles through process automation and tool optimization",
                " Enhanced client experience with seamless API endpoint customization"
            ],
            technologies: ["Postman", "Newman", "JavaScript", "API Testing", "Load Testing", "Automation", "CI/CD", "Node.js"]
        },
        dle: {
            title: "Deep Learning Engineer",
            company: "INeuron.ai, Hyderabad",
            duration: "May 2020 - Dec 2021",
            details: [
                " Empowered 20 million users daily with Python-based COVID detection web app using Streamlit",
                " Reduced hospitalization rates by 10% through early infection detection using U-net algorithms",
                " Developed deep learning models for chest X-ray analysis to predict COVID-19 likelihood",
                " Deployed scalable healthcare solutions in collaboration with cross-functional teams",
                " Created user-friendly interface for medical professionals and general public"
            ],
            technologies: ["Python", "Deep Learning", "U-Net", "Streamlit", "TensorFlow", "Computer Vision", "Medical AI", "Flask", "OpenCV"]
        },
        ds1: {
            title: "Data Scientist",
            company: "Grey Atom, Hyderabad",
            duration: "May 2019 - Mar 2020",
            details: [
                " Drove 30% higher user engagement through insights on login rates, interaction patterns, and user segmentation",
                " Enabled 40% community growth by forecasting technology demands and organizing speaker sessions",
                " Implemented web scraping and data mining techniques for comprehensive user analytics",
                " Fostered vibrant data science community through industry expert engagement",
                " Developed predictive models for technology trend analysis and community growth"
            ],
            technologies: ["Python", "Web Scraping", "Data Mining", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "SQL", "Analytics"]
        },
        ds2: {
            title: "Data Scientist",
            company: "Inmovidu Technologies Private Limited, Zebo.ai, Hyderabad",
            duration: "Feb 2019 - Apr 2019",
            details: [
                " Managed database storage systems for large-scale data processing and integrity maintenance",
                " Created interactive visualizations using Tableau for comprehensive data analysis and insights",
                " Implemented machine learning models with optimized accuracy for data attribute analysis",
                " Developed data cleaning pipelines to ensure high-quality, consistent data",
                " Delivered actionable insights through advanced analytics and visualization techniques"
            ],
            technologies: ["Python", "Tableau", "SQL", "Machine Learning", "Data Cleaning", "Data Visualization", "Pandas", "Scikit-learn"]
        }
    };

    // Project Cards Click Functionality
    const projectCards = document.querySelectorAll('.project-card[data-link], .selected-projects .project-card[data-link]');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const link = this.getAttribute('data-link');
            if (link) {
                window.open(link, '_blank');
            }
        });
        
        // Add hover effect for cursor
        card.style.cursor = 'pointer';
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Contact Form Handling
    console.log('🔧 JavaScript loaded successfully');
    const contactForm = document.getElementById('contactForm');
    console.log('📝 Contact form element:', contactForm);
    
    if (contactForm) {
        console.log('✅ Contact form found, attaching event listener');
        contactForm.addEventListener('submit', handleFormSubmit);
        
        // Add click debugging for submit button
        const submitButton = contactForm.querySelector('.form-submit');
        if (submitButton) {
            console.log('🔘 Submit button found:', submitButton);
            
            submitButton.addEventListener('click', function(e) {
                console.log('🖱️ Submit button clicked!', e);
                console.log('🔘 Button state:', {
                    disabled: this.disabled,
                    type: this.type
                });
                
                // Check if click is being prevented
                console.log('🚫 Event defaultPrevented:', e.defaultPrevented);
                console.log('🔘 Button form:', this.form);
                console.log('🔘 Form element from button:', this.form === contactForm);
                
                // Force form submission if it's not happening automatically
                setTimeout(() => {
                    console.log('⏰ Checking if form submit was triggered after click...');
                    console.log('🔍 Manually triggering form submit as fallback');
                    
                    // Create and dispatch a submit event manually
                    const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
                    contactForm.dispatchEvent(submitEvent);
                }, 100);
            });
            
            // Add hover debugging
            submitButton.addEventListener('mouseenter', function() {
                console.log('🖱️ Submit button hovered');
            });
        } else {
            console.error('❌ Submit button not found!');
        }
        
        // Add form interaction debugging
        contactForm.addEventListener('click', function(e) {
            console.log('🖱️ Form clicked:', e.target);
        });
        
        // Sync email with _replyto field for FormSubmit
        const emailInput = contactForm.querySelector('#email');
        const replytoInput = contactForm.querySelector('#replyto');
        console.log('📧 Email input:', emailInput);
        console.log('📮 Reply-to input:', replytoInput);
        
        if (emailInput && replytoInput) {
            emailInput.addEventListener('input', function() {
                replytoInput.value = this.value;
                console.log('🔄 Email synced to reply-to:', this.value);
            });
        }
    } else {
        console.error('❌ Contact form not found! Check the form ID.');
    }
    
    function handleFormSubmit(e) {
        console.log('🚀 Form submit triggered!', e);
        e.preventDefault();
        console.log('⏹️ Form default action prevented');
        
        // Validate form before submission
        if (!validateForm(e.target)) {
            console.log('❌ Form validation failed');
            return;
        }
        console.log('✅ Form validation passed');
        
        const form = e.target;
        const submitButton = form.querySelector('.form-submit');
        const originalText = submitButton.querySelector('span').textContent;
        const formData = new FormData(form);
        
        // Show loading state
        submitButton.querySelector('span').textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Log form data for debugging
        console.log('Submitting form to:', form.action);
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
        
        // Try AJAX submission first, fallback to regular form submission
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);
            
            // FormSubmit returns 200 for successful submissions
            if (response.ok) {
                // Try to parse JSON response
                return response.json().catch(() => {
                    // If JSON parsing fails, it might still be successful
                    return { success: true };
                });
            } else if (response.status === 422) {
                // FormSubmit returns 422 for validation errors
                return response.json().then(data => {
                    throw new Error(data.message || 'Validation error');
                });
            } else {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
        })
        .then(data => {
            console.log('FormSubmit response:', data);
            showNotification('🎉 Thank you! Your message has been sent successfully. I\'ll get back to you soon!', 'success');
            form.reset(); // Clear the form
        })
        .catch(error => {
            console.error('AJAX submission failed:', error);
            
            // Check if it's a CORS or network error
            if (error.name === 'TypeError' && error.message.includes('fetch')) {
                console.log('CORS/Network error detected, falling back to native form submission');
                fallbackFormSubmission(form);
                return;
            }
            
            // Check if it's an email confirmation error
            if (error.message && error.message.includes('confirm')) {
                showNotification('📧 Please check your email and confirm your FormSubmit account first, then try again.', 'error');
            } else {
                showNotification(`❌ Error: ${error.message}. Please try again or email me directly at rakeshreddyd56@gmail.com`, 'error');
            }
        })
        .finally(() => {
            // Reset button state
            submitButton.querySelector('span').textContent = originalText;
            submitButton.disabled = false;
        });
    }
    
    function fallbackFormSubmission(form) {
        console.log('Using fallback form submission');
        
        // Create a temporary form for native submission
        const tempForm = document.createElement('form');
        tempForm.action = form.action;
        tempForm.method = 'POST';
        tempForm.style.display = 'none';
        
        // Copy all form data
        const formData = new FormData(form);
        for (let [key, value] of formData.entries()) {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = value;
            tempForm.appendChild(input);
        }
        
        // Add a success redirect URL
        const nextInput = document.createElement('input');
        nextInput.type = 'hidden';
        nextInput.name = '_next';
        nextInput.value = window.location.href + '?success=true';
        tempForm.appendChild(nextInput);
        
        document.body.appendChild(tempForm);
        tempForm.submit();
    }
    
    // Helper function to check FormSubmit email confirmation status
    function checkFormSubmitStatus() {
        const testForm = new FormData();
        testForm.append('_test', 'true');
        
        fetch('https://formsubmit.co/rakeshreddyd56@gmail.com', {
            method: 'POST',
            body: testForm,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            console.log('FormSubmit status check:', response.status);
            if (response.status === 403) {
                console.log('FormSubmit email needs confirmation');
                return false;
            }
            return true;
        })
        .catch(error => {
            console.log('FormSubmit status check failed:', error);
            return null;
        });
    }
    
    // TEST FUNCTION - Call from browser console: testFormSubmit()
    window.testFormSubmit = function() {
        console.log('🧪 Testing form submission...');
        const form = document.getElementById('contactForm');
        if (!form) {
            console.error('❌ Form not found!');
            return;
        }
        
        // Check form visibility and accessibility
        const rect = form.getBoundingClientRect();
        const styles = window.getComputedStyle(form);
        console.log('📐 Form position:', rect);
        console.log('👁️ Form visibility:', {
            display: styles.display,
            visibility: styles.visibility,
            opacity: styles.opacity,
            zIndex: styles.zIndex,
            pointerEvents: styles.pointerEvents
        });
        
        // Fill form with test data
        form.querySelector('#name').value = 'Test User';
        form.querySelector('#email').value = 'test@example.com';
        form.querySelector('#message').value = 'This is a test message';
        
        console.log('📝 Test data filled, triggering submit...');
        
        // Trigger form submission
        const event = new Event('submit', { bubbles: true, cancelable: true });
        form.dispatchEvent(event);
    };
    
    // DEBUG FUNCTION - Check form state
    window.debugForm = function() {
        console.log('🔍 Debugging form state...');
        const form = document.getElementById('contactForm');
        if (!form) {
            console.error('❌ Form not found!');
            return;
        }
        
        console.log('📝 Form element:', form);
        console.log('🎯 Form event listeners:', getEventListeners ? getEventListeners(form) : 'getEventListeners not available');
        
        const submitButton = form.querySelector('.form-submit');
        console.log('🔘 Submit button:', submitButton);
        
        if (submitButton) {
            console.log('🔘 Submit button listeners:', getEventListeners ? getEventListeners(submitButton) : 'getEventListeners not available');
        }
        
        // Check if form is in viewport
        const rect = form.getBoundingClientRect();
        const inViewport = rect.top >= 0 && rect.left >= 0 && 
                          rect.bottom <= window.innerHeight && 
                          rect.right <= window.innerWidth;
        console.log('👁️ Form in viewport:', inViewport);
        
        return {
            form,
            submitButton,
            inViewport,
            rect
        };
    };
    
    function validateForm(form) {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            hideFieldError(field);
            
            if (!field.value.trim()) {
                showFieldError(field, 'This field is required');
                isValid = false;
            } else if (field.type === 'email' && !isValidEmail(field.value)) {
                showFieldError(field, 'Please enter a valid email address');
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showFieldError(field, message) {
        const formGroup = field.closest('.form-group');
        let errorElement = formGroup.querySelector('.field-error');
        
        if (!errorElement) {
            errorElement = document.createElement('span');
            errorElement.className = 'field-error';
            formGroup.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
        field.classList.add('error');
    }
    
    function hideFieldError(field) {
        const formGroup = field.closest('.form-group');
        const errorElement = formGroup.querySelector('.field-error');
        
        if (errorElement) {
            errorElement.remove();
        }
        
        field.classList.remove('error');
    }

    // Close experience popup function
    function closeExperiencePopup() {
        const experiencePopup = document.getElementById('experiencePopup');
        if (experiencePopup) {
            experiencePopup.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
    

    
    // Show notification function
    function showNotification(message, type = 'success') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notif => notif.remove());
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${type === 'success' ? '✓' : '✗'}</span>
                <span class="notification-message">${message}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;
        
        // Add to body
        document.body.appendChild(notification);
        
        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        // Auto-remove after 6 seconds (increased time for better readability)
        setTimeout(() => {
            if (notification.parentElement) {
                notification.classList.remove('show');
                setTimeout(() => {
                    if (notification.parentElement) {
                        notification.remove();
                    }
                }, 300);
            }
        }, 6000);
    }
    


    // Work Experience Modal Functions
    window.openWorkExperienceModal = function() {
        const modal = document.getElementById('workExperienceModal');
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Initialize scroll guide
            initializeScrollGuide();
        }
    };

    window.closeWorkExperienceModal = function() {
        const modal = document.getElementById('workExperienceModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            
            // Clear scroll guide
            clearScrollGuide();
            
            // Clear selected state and reset details
            const selectedItems = modal.querySelectorAll('.roadmap-item.selected');
            selectedItems.forEach(item => item.classList.remove('selected'));
            
            const experienceDetails = document.getElementById('experienceDetails');
            if (experienceDetails) {
                experienceDetails.innerHTML = `
                    <div class="details-placeholder">
                        <h4>Select a position to view details</h4>
                        <p>Click on any position in the timeline to see the responsibilities, achievements, and technologies used.</p>
                    </div>
                `;
            }
        }
    };
    
    // Scroll Guide Functions
    function initializeScrollGuide() {
        const modal = document.getElementById('workExperienceModal');
        const scrollGuide = document.getElementById('scrollGuide');
        const modalContent = modal.querySelector('.modal-content');
        
        if (!scrollGuide || !modalContent) return;
        
        // Show scroll guide initially
        scrollGuide.classList.remove('hidden');
        
        // Handle scroll events on modal content
        modalContent.addEventListener('scroll', handleModalScroll);
        
        // Update dots based on initial scroll position
        updateScrollDots();
        
        // Initialize enhanced roadmap interactions
        enhanceRoadmapInteractions();
    }
    
    function clearScrollGuide() {
        const modal = document.getElementById('workExperienceModal');
        const modalContent = modal.querySelector('.modal-content');
        
        if (modalContent) {
            modalContent.removeEventListener('scroll', handleModalScroll);
        }
    }
    
    function handleModalScroll() {
        const scrollGuide = document.getElementById('scrollGuide');
        const modalContent = document.querySelector('.modal-content');
        
        if (!scrollGuide || !modalContent) return;
        
        const scrollTop = modalContent.scrollTop;
        const scrollHeight = modalContent.scrollHeight;
        const clientHeight = modalContent.clientHeight;
        
        // Hide guide when scrolled significantly
        if (scrollTop > 100) {
            scrollGuide.classList.add('hidden');
        } else {
            scrollGuide.classList.remove('hidden');
        }
        
        // Update dots based on scroll position
        updateScrollDots();
        
        // Control dotted line animation based on scroll
        controlDottedLineAnimation(scrollTop, scrollHeight, clientHeight);
    }
    
    function updateScrollDots() {
        const modalContent = document.querySelector('.modal-content');
        const dots = document.querySelectorAll('.scroll-guide-dots .dot');
        
        if (!modalContent || dots.length === 0) return;
        
        const scrollTop = modalContent.scrollTop;
        const scrollHeight = modalContent.scrollHeight;
        const clientHeight = modalContent.clientHeight;
        
        // Calculate which dot should be active based on scroll position
        const scrollPercent = scrollTop / (scrollHeight - clientHeight);
        const activeDotIndex = Math.min(Math.floor(scrollPercent * dots.length), dots.length - 1);
        
        dots.forEach((dot, index) => {
            if (index <= activeDotIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function controlDottedLineAnimation(scrollTop, scrollHeight, clientHeight) {
        const roadmapLine = document.querySelector('.modal-body .roadmap-line');
        const roadmapItems = document.querySelectorAll('.modal-body .roadmap-item');
        
        if (!roadmapLine) return;
        
        // Calculate scroll progress
        const scrollProgress = scrollTop / (scrollHeight - clientHeight);
        
        // Animate line opacity based on scroll
        const lineOpacity = Math.max(0.3, 1 - scrollProgress * 0.7);
        roadmapLine.style.opacity = lineOpacity;
        
        // Animate individual roadmap items
        roadmapItems.forEach((item, index) => {
            const itemTop = parseInt(item.style.top || item.dataset.top || '0');
            const visibleThreshold = scrollTop + clientHeight * 0.3;
            const hiddenThreshold = scrollTop + clientHeight * 0.7;
            
            if (itemTop < visibleThreshold && itemTop > scrollTop - 100) {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            } else if (itemTop > hiddenThreshold) {
                item.style.opacity = '0.6';
                item.style.transform = 'scale(0.9)';
            }
        });
    }
    
    // Enhanced roadmap item hover effects
    function enhanceRoadmapInteractions() {
        const roadmapItems = document.querySelectorAll('.modal-body .roadmap-item');
        
        roadmapItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                const connector = this.querySelector('.roadmap-connector');
                if (connector) {
                    connector.style.opacity = '1';
                    connector.style.transform = 'scaleY(1.2)';
                }
            });
            
            item.addEventListener('mouseleave', function() {
                const connector = this.querySelector('.roadmap-connector');
                if (connector) {
                    connector.style.opacity = '0.7';
                    connector.style.transform = 'scaleY(1)';
                }
            });
        });
    }

    window.showExperienceDetails = function(position) {
        const data = experienceData[position];
        if (!data) return;

        // Remove previous selection
        const modal = document.getElementById('workExperienceModal');
        const selectedItems = modal.querySelectorAll('.roadmap-item.selected');
        selectedItems.forEach(item => item.classList.remove('selected'));

        // Add selection to clicked item
        const clickedItem = modal.querySelector(`[data-position="${position}"]`);
        if (clickedItem) {
            clickedItem.classList.add('selected');
        }

        // Check if mobile layout (screen width)
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            // For mobile: Use inline details in the roadmap item itself
            // Remove any existing inline details first
            modal.querySelectorAll('.inline-details').forEach(details => {
                details.style.display = 'none';
            });

            // Show inline details for selected item
            const inlineDetails = clickedItem?.querySelector('.inline-details');
            if (inlineDetails) {
                inlineDetails.style.display = 'block';
            }

            // Hide desktop experience details on mobile
            const experienceDetails = document.getElementById('experienceDetails');
            if (experienceDetails) {
                experienceDetails.style.display = 'none';
            }
        } else {
            // For desktop: Use the original separate experience details section
            // Hide all inline details on desktop
            modal.querySelectorAll('.inline-details').forEach(details => {
                details.style.display = 'none';
            });

            // Update the separate experience details section
            const experienceDetails = document.getElementById('experienceDetails');
            if (experienceDetails) {
                experienceDetails.style.display = 'block';
                experienceDetails.innerHTML = `
                    <div class="experience-detail-card active">
                        <h4>${data.title}</h4>
                        <p class="detail-company">${data.company}</p>
                        <p class="detail-duration">${data.duration}</p>
                        
                        <div class="detail-achievements">
                            <h5>🎯 Key Responsibilities & Achievements</h5>
                            <ul class="achievement-list">
                                ${data.details.map(detail => `<li>${detail}</li>`).join('')}
                            </ul>
                        </div>
                        
                        ${data.technologies ? `
                        <div class="tech-stack">
                            <h5>🛠️ Technologies & Tools</h5>
                            <div class="tech-tags">
                                ${data.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                            </div>
                        </div>
                        ` : ''}
                    </div>
                `;
            }
        }
    };

    // Modal escape key and overlay click handlers
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('workExperienceModal');
            if (modal && modal.classList.contains('active')) {
                closeWorkExperienceModal();
            }
        }
    });

    // Education & Skills Accordion Functionality
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const accordionHeader = item.querySelector('.accordion-header');
        
        accordionHeader.addEventListener('click', () => {
            const wasActive = item.classList.contains('active');
            
            // Close all other accordion items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            
            // If opening the research section, add auto-scroll with delay
            if (!wasActive && item.classList.contains('active')) {
                const researchText = accordionHeader.textContent;
                if (researchText.includes('Research and Publications')) {
                    setTimeout(() => {
                        scrollToResearchContent(item);
                    }, 400); // Wait for accordion animation to complete
                }
            }
        });
    });
    
    // Function to scroll to research content and enable smooth scrolling
    function scrollToResearchContent(accordionItem) {
        const accordionContent = accordionItem.querySelector('.accordion-content');
        if (!accordionContent) return;
        
        // Calculate the position to scroll to
        const headerHeight = document.querySelector('.header').offsetHeight;
        const accordionHeaderHeight = accordionItem.querySelector('.accordion-header').offsetHeight;
        const targetPosition = accordionItem.offsetTop + accordionHeaderHeight - headerHeight - 20;
        
        // Smooth scroll to show the content
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Add enhanced scrolling for the research content if it's long
        setTimeout(() => {
            const researchPublications = accordionContent.querySelector('.research-publications');
            if (researchPublications) {
                // Add smooth internal scrolling indicator
                showScrollHint(accordionContent);
            }
        }, 800);
    }
    
    // Function to show scroll hint for long content
    function showScrollHint(contentElement) {
        // Create scroll hint element
        const scrollHint = document.createElement('div');
        scrollHint.className = 'research-scroll-hint';
        scrollHint.innerHTML = `
            <div class="scroll-hint-content">
                <span class="scroll-hint-text">Scroll to see more research</span>
                <div class="scroll-hint-arrow">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        `;
        
        // Insert hint at the bottom of visible area
        contentElement.appendChild(scrollHint);
        
        // Remove hint after user scrolls or after delay
        setTimeout(() => {
            if (scrollHint.parentElement) {
                scrollHint.style.opacity = '0';
                setTimeout(() => {
                    if (scrollHint.parentElement) {
                        scrollHint.remove();
                    }
                }, 300);
            }
        }, 4000);
        
        // Remove hint on scroll
        let scrollTimeout;
        function handleScroll() {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (scrollHint.parentElement) {
                    scrollHint.style.opacity = '0';
                    setTimeout(() => {
                        if (scrollHint.parentElement) {
                            scrollHint.remove();
                        }
                    }, 300);
                }
                window.removeEventListener('scroll', handleScroll);
            }, 100);
        }
        
        window.addEventListener('scroll', handleScroll);
    }
    
    // Planet Selection Functionality
    const planetItems = document.querySelectorAll('.planet-item');
    const planetInfo = document.querySelector('.planet-info');
    
    // Project data
    const planetData = {
        analytics: {
            title: "Analytics",
            subtitle: "The Foundation",
            description: "Turning data into actionable insights.",
            content: "Analytics forms the core of every data science project. Through statistical analysis, exploratory data analysis, and hypothesis testing, I uncover patterns and trends that drive business decisions. My analytical approach combines rigorous methodology with creative problem-solving to extract maximum value from data.",
            fact: "Delivered 25+ analytics projects across diverse industries, improving decision-making processes and driving measurable business outcomes."
        },
        ml: {
            title: "ML Models",
            subtitle: "The Intelligence",
            description: "Building systems that learn and predict.",
            content: "Machine learning is where data science truly shines. I develop sophisticated models for classification, regression, clustering, and recommendation systems. From traditional algorithms to deep learning networks, I create intelligent systems that automate decision-making and uncover hidden patterns in complex datasets.",
            fact: "Achieved 95%+ accuracy in multiple predictive models, saving organizations millions in operational costs."
        },
        visualization: {
            title: "Visualization",
            subtitle: "The Storyteller",
            description: "Making complex data accessible and beautiful.",
            content: "Data visualization is the art of making complex information understandable. I create interactive dashboards, compelling charts, and intuitive interfaces that help stakeholders quickly grasp insights. Using tools like Tableau, Power BI, and Python libraries, I transform raw data into visual narratives that drive action.",
            fact: "Created 50+ interactive dashboards that reduced report generation time by 80% and improved stakeholder engagement."
        },
        pipeline: {
            title: "Data Pipeline",
            subtitle: "The Infrastructure",
            description: "Building scalable data processing systems.",
            content: "Robust data pipelines are the backbone of any data science operation. I design and implement ETL processes, data warehouses, and real-time streaming systems that ensure data quality, accessibility, and reliability. My pipelines handle everything from data ingestion to model deployment.",
            fact: "Built pipelines processing 10TB+ of data daily with 99.9% uptime and automated error handling."
        },
        nlp: {
            title: "NLP",
            subtitle: "The Linguist",
            description: "Understanding and processing human language.",
            content: "Natural Language Processing allows machines to understand, interpret, and generate human language. I work on sentiment analysis, text classification, language translation, and chatbot development. My NLP solutions help organizations extract insights from unstructured text data and automate communication processes.",
            fact: "Developed NLP models processing 1M+ documents monthly, improving text analysis efficiency by 90%."
        },
        automation: {
            title: "Automation",
            subtitle: "The Optimizer",
            description: "Streamlining processes through intelligent automation.",
            content: "Automation transforms manual processes into efficient, scalable systems. I develop automated reporting systems, data quality checks, model deployment pipelines, and business process automation. My solutions reduce human error, increase efficiency, and free up resources for strategic initiatives.",
            fact: "Automated 200+ manual processes, reducing operational overhead by 60% and eliminating human errors."
        },
        research: {
            title: "Research",
            subtitle: "The Explorer",
            description: "Pushing the boundaries of what's possible.",
            content: "Research is about exploring new frontiers and solving complex problems. I stay current with the latest developments in AI, machine learning, and data science. My research work involves experimenting with cutting-edge algorithms, contributing to open-source projects, and developing innovative solutions to challenging problems.",
            fact: "Published research on novel ML approaches and contributed to 10+ open-source data science projects."
        },
        consulting: {
            title: "Consulting",
            subtitle: "The Strategist",
            description: "Transforming businesses through data strategy.",
            content: "Data science consulting involves understanding business challenges and designing comprehensive data strategies. I help organizations build data capabilities, optimize existing processes, and develop roadmaps for digital transformation. My consulting approach combines technical expertise with business acumen.",
            fact: "Consulted for 15+ organizations across various industries, delivering ROI of 300%+ through data-driven initiatives."
        },
        innovation: {
            title: "Innovation",
            subtitle: "The Visionary",
            description: "Creating breakthrough solutions for tomorrow.",
            content: "Innovation is about imagining and creating the future. I work on emerging technologies like AI, quantum computing applications, and next-generation analytics platforms. My innovative projects push the boundaries of what's possible and create new opportunities for business growth and technological advancement.",
            fact: "Led innovation projects that generated 5 patent applications and created new revenue streams worth $2M+."
        }
    };
    
    // Set default active planet (Sun)
    if (planetItems.length > 0) {
        planetItems[0].classList.add('active');
    }
    
    planetItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all planets
            planetItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Add active class to clicked planet
            item.classList.add('active');
            
            // Get planet data
            const planet = item.dataset.planet;
            const data = planetData[planet];
            
            if (data && planetInfo) {
                // Update project info
                const planetSummary = planetInfo.querySelector('.planet-summary');
                planetSummary.innerHTML = `
                    <h3>Project Details</h3>
                    <h2 class="planet-title">
                        <span class="highlight">${data.title.charAt(0)}</span><span class="underline">${data.title.charAt(1)}</span><span class="highlight">${data.title.slice(2)}</span>
                    </h2>
                    <h4>${data.subtitle}</h4>
                    <p><strong>${data.description}</strong></p>
                    <p>${data.content}</p>
                    <p><strong>🔍 Impact:</strong> ${data.fact}</p>
                `;
            }
        });
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll effect to header
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        updateHeaderStyling(currentTheme, currentScrollY);
        
        lastScrollY = currentScrollY;
    });
    
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.summary-block, .value-card, .project-card, .tech-category, .roadmap-item, .accordion-item, .planet-item');
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // Add click handlers for CTA buttons
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add click animation
            this.style.transform = 'translateY(-2px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px) scale(1)';
            }, 150);
            
            // Handle different button actions
            if (this.textContent.includes('View Projects')) {
                window.open('https://github.com/rakeshreddyd56', '_blank');
            } else if (this.textContent.includes('Contact Me')) {
                window.open('mailto:sairakeshreddy@gmail.com', '_blank');
            } else if (this.textContent.includes('View LinkedIn')) {
                window.open('https://linkedin.com/in/sairakeshreddy', '_blank');
            }
        });
    });

    // Theme Toggle Functionality
    const themeToggle = document.getElementById('themeToggle');
    const themeInput = document.getElementById('themeInput');
    const header = document.querySelector('.header');
    
    // Function to update header styling based on theme and scroll position
    function updateHeaderStyling(theme, scrollY) {
        if (scrollY > 100) {
            if (theme === 'light') {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(10, 10, 10, 0.98)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
            }
        } else {
            if (theme === 'light') {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = 'none';
            } else {
                header.style.background = 'rgba(10, 10, 10, 0.95)';
                header.style.boxShadow = 'none';
            }
        }
    }
    
    // Load saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeToggle(savedTheme);
    
    // Set initial header styling based on saved theme
    updateHeaderStyling(savedTheme, window.scrollY);
    
    // Theme toggle event listener
    themeInput.addEventListener('change', function() {
        const newTheme = this.checked ? 'dark' : 'light';
        
        // Apply new theme
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update header background immediately based on current scroll position
        updateHeaderStyling(newTheme, window.scrollY);
    });
    
    // Update theme toggle based on current theme
    function updateThemeToggle(theme) {
        themeInput.checked = theme === 'dark';
    }
    
    // Handle scroll behavior for theme toggle
    let lastScrollTop = 0;
    const handleThemeToggleScroll = throttle(() => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDirection = currentScrollTop > lastScrollTop ? 'down' : 'up';
        
        if (scrollDirection === 'down' && currentScrollTop > 100) {
            // Fade out slightly when scrolling down
            themeToggle.style.opacity = '0.7';
            themeToggle.style.transform = 'scale(0.9)';
        } else {
            // Fade back in when scrolling up or near top
            themeToggle.style.opacity = '1';
            themeToggle.style.transform = 'scale(1)';
        }
        
        lastScrollTop = currentScrollTop;
    }, 16);
    
    window.addEventListener('scroll', handleThemeToggleScroll);
    
    // Initialize theme toggle position
    themeToggle.style.opacity = '1';
    themeToggle.style.transform = 'scale(1)';
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // FAQ navigation with arrow keys
        if (document.activeElement.classList.contains('faq-question')) {
            const currentIndex = Array.from(faqItems).indexOf(document.activeElement.closest('.faq-item'));
            
            if (e.key === 'ArrowDown' && currentIndex < faqItems.length - 1) {
                e.preventDefault();
                faqItems[currentIndex + 1].querySelector('.faq-question').focus();
            } else if (e.key === 'ArrowUp' && currentIndex > 0) {
                e.preventDefault();
                faqItems[currentIndex - 1].querySelector('.faq-question').focus();
            }
        }
        
        // Planet navigation with arrow keys
        if (document.activeElement.classList.contains('planet-item')) {
            const currentIndex = Array.from(planetItems).indexOf(document.activeElement);
            
            if (e.key === 'ArrowRight' && currentIndex < planetItems.length - 1) {
                e.preventDefault();
                planetItems[currentIndex + 1].focus();
                planetItems[currentIndex + 1].click();
            } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
                e.preventDefault();
                planetItems[currentIndex - 1].focus();
                planetItems[currentIndex - 1].click();
            }
        }
    });
    
    // Add focus indicators for keyboard navigation
    const focusableElements = document.querySelectorAll('button, a, .planet-item');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #6366f1';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    // Add loading animation
    const body = document.body;
    body.style.opacity = '0';
    body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        body.style.opacity = '1';
    }, 100);
    
    // Add parallax effect to hero section (desktop only)
    const hero = document.querySelector('.hero');
    
    const handleScroll = () => {
        // Only apply parallax effect on desktop to avoid mobile scroll issues
        if (window.innerWidth > 768) {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            
            if (hero) {
                hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        } else {
            // Reset transform on mobile to prevent scroll issues
            if (hero) {
                hero.style.transform = 'none';
            }
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Handle window resize to reset hero transform when switching between mobile/desktop
    window.addEventListener('resize', () => {
        if (hero) {
            if (window.innerWidth <= 768) {
                hero.style.transform = 'none';
            }
        }
    });
    
    // Ensure mobile devices can scroll to the very top
    const ensureMobileScrollToTop = () => {
        if (window.innerWidth <= 768) {
            // Force scroll to top on mobile page load
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            
            // Reset hero transform on mobile
            if (hero) {
                hero.style.transform = 'none';
            }
            
            // Ensure page can scroll to position 0
            document.body.style.paddingTop = '0';
            document.documentElement.style.paddingTop = '0';
        }
    };
    
    // Run on page load
    ensureMobileScrollToTop();
    
    // Run on orientation change (mobile rotation)
    window.addEventListener('orientationchange', () => {
        setTimeout(ensureMobileScrollToTop, 200);
    });
    
    // Enhanced Smooth Cursor Implementation
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let dotX = 0, dotY = 0;
    
    // Create cursor elements
    const cursor = document.createElement('div');
    cursor.className = 'smooth-cursor';
    document.body.appendChild(cursor);
    
    const cursorDot = document.createElement('div');
    cursorDot.className = 'smooth-cursor-dot';
    document.body.appendChild(cursorDot);
    
    // Enable custom cursor only on desktop
    if (window.innerWidth > 768) {
        document.body.classList.add('custom-cursor-active');
    }
    
    // Mouse movement tracking
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Show cursors on first movement
        if (!cursor.classList.contains('visible')) {
            cursor.classList.add('visible');
            cursorDot.classList.add('visible');
        }
    });
    
    // Smooth cursor animation using requestAnimationFrame
    function animateCursor() {
        // Smooth follow for main cursor
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        
        // Faster follow for dot
        dotX += (mouseX - dotX) * 0.6;
        dotY += (mouseY - dotY) * 0.6;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursor.classList.remove('visible');
        cursorDot.classList.remove('visible');
    });
    
    document.addEventListener('mouseenter', () => {
        if (window.innerWidth > 768) {
            cursor.classList.add('visible');
            cursorDot.classList.add('visible');
        }
    });
    
    // Click animation
    document.addEventListener('mousedown', () => {
        cursor.classList.add('click');
    });
    
    document.addEventListener('mouseup', () => {
        cursor.classList.remove('click');
    });
    
    // Hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('.planet-item, .value-card, .project-card, .roadmap-item, .accordion-header, .tech-tag, .btn-primary, .btn-secondary, .nav-link, .contact-item');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursor.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', function() {
            cursor.classList.remove('hover');
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            document.body.classList.remove('custom-cursor-active');
            cursor.classList.remove('visible');
            cursorDot.classList.remove('visible');
        } else {
            document.body.classList.add('custom-cursor-active');
        }
        
        // Handle experience modal layout changes on resize
        const modal = document.getElementById('workExperienceModal');
        if (modal && modal.classList.contains('active')) {
            // Clear all selections and reset layout
            const selectedItems = modal.querySelectorAll('.roadmap-item.selected');
            selectedItems.forEach(item => item.classList.remove('selected'));
            
            // Hide all inline details
            modal.querySelectorAll('.inline-details').forEach(details => {
                details.style.display = 'none';
            });
            
            // Reset experience details based on screen size
            const experienceDetails = document.getElementById('experienceDetails');
            if (experienceDetails) {
                if (window.innerWidth <= 768) {
                    // Mobile: Hide separate details section
                    experienceDetails.style.display = 'none';
                } else {
                    // Desktop: Show separate details section with placeholder
                    experienceDetails.style.display = 'block';
                    experienceDetails.innerHTML = `
                        <div class="details-placeholder">
                            <h4>Select a position to view details</h4>
                            <p>Click on any position in the timeline to see the responsibilities, achievements, and technologies used.</p>
                        </div>
                    `;
                }
            }
        }
    });
    
    } catch (error) {
        console.error('🔥 Error in DOMContentLoaded:', error);
        console.error('🔥 Stack trace:', error.stack);
    }
});

// Additional utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Export functions for potential use in other scripts
window.CometUI = {
    debounce,
    throttle
}; 