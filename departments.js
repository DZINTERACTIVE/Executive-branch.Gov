export function initNavigation() {
    // Navigation menu items
    const navLinks = document.querySelectorAll('.nav-link');
    const mainContent = document.querySelector('main');

    // Department details mapping
    const departmentDetails = {
        'Department of State': {
            description: 'Responsible for foreign policy and international relations.',
            keyFunctions: [
                'Diplomatic missions worldwide',
                'Passport and visa services',
                'International negotiations',
                'Foreign aid coordination'
            ],
            leadership: 'Secretary of State'
        },
        'Department of Treasury': {
            description: 'Manages government finances and economic policy.',
            keyFunctions: [
                'Collecting taxes',
                'Printing money',
                'Economic policy development',
                'Financial sanctions management'
            ],
            leadership: 'Secretary of the Treasury'
        },
        'Department of Defense': {
            description: 'Responsible for national security and military operations.',
            keyFunctions: [
                'Military strategy',
                'National defense',
                'Military personnel management',
                'Defense research and development'
            ],
            leadership: 'Secretary of Defense'
        },
        'Department of Justice': {
            description: 'Enforces federal law and administers justice.',
            keyFunctions: [
                'Federal law enforcement',
                'Legal representation for the government',
                'Federal court system support',
                'Civil rights protection'
            ],
            leadership: 'Attorney General'
        },
        'Department of Interior': {
            description: 'Manages federal lands and natural resources.',
            keyFunctions: [
                'National park management',
                'Native American affairs',
                'Resource conservation',
                'Land management'
            ],
            leadership: 'Secretary of the Interior'
        },
        'Department of Agriculture': {
            description: 'Supports farmers and manages agricultural policies.',
            keyFunctions: [
                'Agricultural research',
                'Food safety regulation',
                'Rural development',
                'Nutrition assistance programs'
            ],
            leadership: 'Secretary of Agriculture'
        },
        'Department of Commerce': {
            description: 'Promotes economic growth and business development.',
            keyFunctions: [
                'Economic data collection',
                'Business innovation support',
                'Trade policy',
                'Patent and trademark management'
            ],
            leadership: 'Secretary of Commerce'
        },
        'Department of Labor': {
            description: 'Promotes workforce development and worker protection.',
            keyFunctions: [
                'Employment services',
                'Worker safety regulations',
                'Wage and hour standards',
                'Job training programs'
            ],
            leadership: 'Secretary of Labor'
        },
        'Department of Health': {
            description: 'Promotes public health and medical research.',
            keyFunctions: [
                'Healthcare policy',
                'Medical research funding',
                'Disease prevention',
                'Health insurance oversight'
            ],
            leadership: 'Secretary of Health and Human Services'
        },
        'Department of Education': {
            description: 'Supports educational development and policy.',
            keyFunctions: [
                'Educational policy development',
                'Student financial aid',
                'Civil rights in education',
                'Educational research'
            ],
            leadership: 'Secretary of Education'
        }
    };

    const serviceDetails = {
        'Passport Services': {
            description: 'Apply for, renew, or track your passport.',
            steps: [
                'Gather required documents',
                'Complete passport application',
                'Submit application in person',
                'Pay processing fees'
            ],
            contact: 'National Passport Information Center'
        },
        'Tax Filing Assistance': {
            description: 'Get help with federal tax filing and questions.',
            steps: [
                'Determine filing requirements',
                'Gather tax documents',
                'Choose filing method',
                'Review and submit'
            ],
            contact: 'IRS Support'
        },
        'Small Business Support': {
            description: 'Resources and assistance for small business owners.',
            services: [
                'Business loans',
                'Entrepreneurship training',
                'Government contract opportunities',
                'Business planning resources'
            ],
            contact: 'Small Business Administration'
        },
        'Veterans Services': {
            description: 'Support and benefits for military veterans.',
            benefits: [
                'Healthcare',
                'Educational assistance',
                'Disability compensation',
                'Home loan guarantees'
            ],
            contact: 'Veterans Affairs'
        },
        'Social Security': {
            description: 'Retirement, disability, and survivor benefits.',
            services: [
                'Retirement benefits',
                'Disability insurance',
                'Supplemental income',
                'Medicare enrollment'
            ],
            contact: 'Social Security Administration'
        }
    };

    function createDepartmentDetailView(department) {
        const details = departmentDetails[department];
        return `
            <section class="container">
                <div class="card">
                    <div class="card-body">
                        <h1>${department}</h1>
                        <p class="lead">${details.description}</p>
                        <div class="row">
                            <div class="col-md-6">
                                <h4>Key Functions</h4>
                                <ul>
                                    ${details.keyFunctions.map(func => `<li>${func}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <h4>Leadership</h4>
                                <p>${details.leadership}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    function createServiceDetailView(service) {
        const details = serviceDetails[service];
        return `
            <section class="container">
                <div class="card">
                    <div class="card-body">
                        <h1>${service}</h1>
                        <p class="lead">${details.description}</p>
                        <div class="row">
                            <div class="col-md-6">
                                <h4>${service === 'Small Business Support' ? 'Services' : service === 'Veterans Services' ? 'Benefits' : 'Steps'}</h4>
                                <ul>
                                    ${details[service === 'Small Business Support' ? 'services' : service === 'Veterans Services' ? 'benefits' : 'steps'].map(item => `<li>${item}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <h4>Contact</h4>
                                <p>${details.contact}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const linkText = link.textContent.toLowerCase();
            
            switch(linkText) {
                case 'home':
                    mainContent.innerHTML = `
                        <section class="row">
                            <div class="col-md-8">
                                <h1>Executive Branch Departments</h1>
                                <p class="lead">Comprehensive overview of the federal government's executive departments and their critical missions.</p>
                                
                                <div class="card my-4">
                                    <div class="card-body">
                                        <h3>Key Departments</h3>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <ul class="list-unstyled">
                                                    <li>• Department of State</li>
                                                    <li>• Department of Treasury</li>
                                                    <li>• Department of Defense</li>
                                                    <li>• Department of Justice</li>
                                                    <li>• Department of Interior</li>
                                                </ul>
                                            </div>
                                            <div class="col-md-6">
                                                <ul class="list-unstyled">
                                                    <li>• Department of Agriculture</li>
                                                    <li>• Department of Commerce</li>
                                                    <li>• Department of Labor</li>
                                                    <li>• Department of Health</li>
                                                    <li>• Department of Education</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card bg-light">
                                    <div class="card-body">
                                        <h4>Quick Access</h4>
                                        <div class="list-group">
                                            <a href="#" class="list-group-item list-group-item-action">Federal Services</a>
                                            <a href="#" class="list-group-item list-group-item-action">Government Resources</a>
                                            <a href="#" class="list-group-item list-group-item-action">Citizen Information</a>
                                            <a href="#" class="list-group-item list-group-item-action">Department Directories</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    `;
                    break;
                case 'departments':
                    mainContent.innerHTML = `
                        <section class="container">
                            <h1>Executive Branch Departments</h1>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="list-group">
                                        ${Object.keys(departmentDetails).slice(0, 5).map(dept => 
                                            `<a href="#" class="list-group-item list-group-item-action department-link">${dept}</a>`
                                        ).join('')}
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="list-group">
                                        ${Object.keys(departmentDetails).slice(5).map(dept => 
                                            `<a href="#" class="list-group-item list-group-item-action department-link">${dept}</a>`
                                        ).join('')}
                                    </div>
                                </div>
                            </div>
                        </section>
                    `;
                    
                    // Add event listeners to department links
                    document.querySelectorAll('.department-link').forEach(deptLink => {
                        deptLink.addEventListener('click', (e) => {
                            e.preventDefault();
                            mainContent.innerHTML = createDepartmentDetailView(deptLink.textContent);
                        });
                    });
                    break;
                case 'services':
                    mainContent.innerHTML = `
                        <section class="container">
                            <h1>Federal Services</h1>
                            <div class="list-group">
                                ${Object.keys(serviceDetails).map(service => 
                                    `<a href="#" class="list-group-item list-group-item-action service-link">${service}</a>`
                                ).join('')}
                            </div>
                        </section>
                    `;
                    
                    // Add event listeners to service links
                    document.querySelectorAll('.service-link').forEach(serviceLink => {
                        serviceLink.addEventListener('click', (e) => {
                            e.preventDefault();
                            mainContent.innerHTML = createServiceDetailView(serviceLink.textContent);
                        });
                    });
                    break;
                case 'resources':
                    mainContent.innerHTML = `
                        <section class="container">
                            <h1>Government Resources</h1>
                            <div class="list-group">
                                <a href="#" class="list-group-item list-group-item-action">Public Records</a>
                                <a href="#" class="list-group-item list-group-item-action">Government Grants</a>
                                <a href="#" class="list-group-item list-group-item-action">Public Data Sets</a>
                                <a href="#" class="list-group-item list-group-item-action">Educational Resources</a>
                                <a href="#" class="list-group-item list-group-item-action">Citizen Guides</a>
                            </div>
                        </section>
                    `;
                    break;
                case 'contact':
                    mainContent.innerHTML = `
                        <section class="container">
                            <h1>Contact Us</h1>
                            <div class="card">
                                <div class="card-body">
                                    <h4>Government Contact Information</h4>
                                    <p>For general inquiries and support:</p>
                                    <ul>
                                        <li>Phone: 1-800-FED-INFO</li>
                                        <li>Email: support@government.gov</li>
                                        <li>Mailing Address: 1600 Pennsylvania Avenue NW, Washington, DC 20500</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    `;
                    break;
            }
        });
    });

    // Quick Access links
    const quickAccessLinks = document.querySelectorAll('.card.bg-light .list-group-item');
    quickAccessLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const linkText = link.textContent;
            
            switch(linkText) {
                case 'Federal Services':
                    mainContent.innerHTML = `
                        <section class="container">
                            <h1>Federal Services</h1>
                            <div class="list-group">
                                <a href="#" class="list-group-item list-group-item-action">Passport Services</a>
                                <a href="#" class="list-group-item list-group-item-action">Tax Filing Assistance</a>
                                <a href="#" class="list-group-item list-group-item-action">Small Business Support</a>
                                <a href="#" class="list-group-item list-group-item-action">Veterans Services</a>
                                <a href="#" class="list-group-item list-group-item-action">Social Security</a>
                            </div>
                        </section>
                    `;
                    break;
                case 'Government Resources':
                    mainContent.innerHTML = `
                        <section class="container">
                            <h1>Government Resources</h1>
                            <div class="list-group">
                                <a href="#" class="list-group-item list-group-item-action">Public Records</a>
                                <a href="#" class="list-group-item list-group-item-action">Government Grants</a>
                                <a href="#" class="list-group-item list-group-item-action">Public Data Sets</a>
                                <a href="#" class="list-group-item list-group-item-action">Educational Resources</a>
                                <a href="#" class="list-group-item list-group-item-action">Citizen Guides</a>
                            </div>
                        </section>
                    `;
                    break;
                case 'Citizen Information':
                    mainContent.innerHTML = `
                        <section class="container">
                            <h1>Citizen Information</h1>
                            <div class="card">
                                <div class="card-body">
                                    <h4>Important Information for Citizens</h4>
                                    <ul>
                                        <li>Voting Rights</li>
                                        <li>Civic Engagement</li>
                                        <li>Community Resources</li>
                                        <li>Legal Rights and Responsibilities</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    `;
                    break;
                case 'Department Directories':
                    mainContent.innerHTML = `
                        <section class="container">
                            <h1>Department Directories</h1>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="list-group">
                                        <a href="#" class="list-group-item list-group-item-action">Department of State</a>
                                        <a href="#" class="list-group-item list-group-item-action">Department of Treasury</a>
                                        <a href="#" class="list-group-item list-group-item-action">Department of Defense</a>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="list-group">
                                        <a href="#" class="list-group-item list-group-item-action">Department of Justice</a>
                                        <a href="#" class="list-group-item list-group-item-action">Department of Interior</a>
                                        <a href="#" class="list-group-item list-group-item-action">Department of Education</a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    `;
                    break;
            }
        });
    });
}

export function initAdminMode() {
    const loginButton = document.getElementById('loginButton');
    const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
    const loginForm = document.getElementById('loginForm');

    loginButton.addEventListener('click', () => {
        loginModal.show();
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('emailInput').value;
        const password = document.getElementById('passwordInput').value;

        if (email === 'xrainshadex@gmail.com' && password === 'ADMIN') {
            enableAdminMode();
            loginModal.hide();
        } else {
            alert('Invalid credentials');
        }
    });

    function enableAdminMode() {
        // Add edit buttons to editable sections
        const editableContainers = document.querySelectorAll('main, footer');
        editableContainers.forEach(container => {
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.classList.add('btn', 'btn-warning', 'position-absolute', 'top-0', 'end-0', 'm-2');
            editButton.addEventListener('click', () => startInlineEditing(container));
            container.style.position = 'relative';
            container.appendChild(editButton);
        });

        // Highlight admin mode
        const adminBadge = document.createElement('span');
        adminBadge.textContent = 'Admin Mode';
        adminBadge.classList.add('badge', 'bg-danger', 'position-fixed', 'top-0', 'end-0', 'm-2', 'z-3');
        document.body.appendChild(adminBadge);
    }

    function startInlineEditing(container) {
        // Convert content to editable
        container.contentEditable = true;
        container.classList.add('border', 'border-warning', 'p-2');

        // Create save button
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save Changes';
        saveButton.classList.add('btn', 'btn-success', 'position-absolute', 'bottom-0', 'end-0', 'm-2');
        saveButton.addEventListener('click', () => {
            container.contentEditable = false;
            container.classList.remove('border', 'border-warning', 'p-2');
            saveButton.remove();
            
            // Here you could add logic to persist changes 
            // (e.g., send to a backend server)
            alert('Changes saved locally. In a real application, these would be saved permanently.');
        });
        
        container.appendChild(saveButton);
    }
}
