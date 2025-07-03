<template>
  <section id="portfolio">
    <h2 class="section-title">My Portfolio</h2>
    <p class="section-description">Here are some of the projects I have worked on.</p>

    <!-- Colored buttons for filtering projects -->
    <div class="portfolio-buttons">
      <button class="portfolio-btn" @click="filterProjects('All')">All</button>
      <button class="portfolio-btn" @click="filterProjects('Java')">Java</button>
      <button class="portfolio-btn" @click="filterProjects('PHP')">PHP</button>
      <button class="portfolio-btn" @click="filterProjects('Virtual Assistant')">Virtual Assistant</button>
      <button class="portfolio-btn" @click="filterProjects('IT Support')">IT Support</button>
      <button class="portfolio-btn" @click="filterProjects('Document Analysis')">Document Analysis</button>
    </div>

    <!-- Portfolio Projects -->
    <div class="portfolio-projects">
      <div class="portfolio-project" v-for="project in filteredProjects" :key="project.title">
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-role">{{ project.role }}</p>
        <p class="project-description">{{ project.description }}</p>
        <ul class="project-contributions">
          <li v-for="contribution in project.contributions" :key="contribution">{{ contribution }}</li>
        </ul>
        <p class="project-technologies"><strong>Technologies:</strong> {{ project.technologies.join(', ') }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PortfolioSection',
  data() {
    return {
      projects: [
        {
          title: 'ATM Management System (Java)',
          role: 'Java Developer (Internship)',
          description: 'Developed an ATM Management System for the Commercial Bank of Ethiopia to allow cardless transactions via a mobile app.',
          contributions: [
            'Developed backend systems in Java to manage transactions and user data.',
            'Built Android app for cardless ATM usage with OTP authentication.',
            'Designed and implemented networking socket connections for communication between the app, ATM hardware, and backend systems.',
            'Provided documentation on system architecture, user manuals, and technical guides.'
          ],
          technologies: ['Java', 'MySQL', 'Android', 'Cardless Transaction System'],
          category: 'Java'
        },
        {
          title: 'Online Class Scheduling Management System (PHP)',
          role: 'Full-Stack Developer',
          description: 'Developed a class scheduling system for Highland College, allowing students and administrators to manage schedules.',
          contributions: [
            'Developed backend using PHP and MySQL for managing student data and class schedules.',
            'Designed a responsive frontend using HTML/CSS and JavaScript.',
            'Implemented role-based authentication for students and administrators.'
          ],
          technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
          category: 'PHP'
        },
        {
          title: 'Virtual Assistant for Freelance and Upwork Clients',
          role: 'Virtual Assistant & Administrative Support',
          description: 'Handled various business and administrative tasks, including team coordination and customer service.',
          contributions: [
            'Managed Google Sheets and Trello for task tracking, project organization, and workflow optimization.',
            'Coordinated email management, customer service tasks, and product listings for clients.',
            'Communicated effectively using Slack and managed appointments for team members and clients.'
          ],
          technologies: ['Google Sheets', 'Google Cloud Services', 'Trello', 'Slack'],
          category: 'Virtual Assistant'
        },
        {
          title: 'IT Support Services at Super Double T General Trading',
          role: 'IT Support Specialist',
          description: 'Provided IT support, managing both hardware and software issues and configuring networks.',
          contributions: [
            'Delivered first-line IT support and resolved hardware and software issues.',
            'Managed network configurations (routers, firewalls).',
            'Provided remote IT support using tools like TeamViewer and AnyDesk.'
          ],
          technologies: ['Windows', 'TeamViewer', 'AnyDesk', 'Networking Devices', 'Zendesk', 'Jira'],
          category: 'IT Support'
        },
        {
          title: 'Document Analysis & Administrative Tasks',
          role: 'Administrative Support (Document Analysis & Office Tasks)',
          description: 'Provided document analysis and administrative support, reviewing documents for accuracy and managing office tasks.',
          contributions: [
            'Analyzed and organized documents for accuracy.',
            'Assisted with data entry, document management, and filing systems.',
            'Streamlined office procedures for efficient document retrieval and management.'
          ],
          technologies: ['Google Sheets', 'Microsoft Office', 'Google Drive'],
          category: 'Document Analysis'
        }
      ],
      selectedCategory: 'All'
    };
  },
  computed: {
    filteredProjects() {
      if (this.selectedCategory === 'All') {
        return this.projects;
      }
      return this.projects.filter(project => project.category === this.selectedCategory);
    }
  },
  methods: {
    filterProjects(category) {
      this.selectedCategory = category;
    }
  }
};
</script>

<style scoped>
/* Section Styling */
section#portfolio {
  margin-bottom: 40px;
  padding: 40px 20px;
  min-height: 350px;
  background-color: #f3f6f9; /* Soft background */
  color: #333; /* Dark text for readability */
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
  transition: background-color 0.3s ease; /* Transition effect on background change */
}

/* Title Styling */
h2.section-title {
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;
  color: #2a9d8f; /* Fresh color for the title */
  text-transform: uppercase;
  margin-bottom: 20px;
  letter-spacing: 2px;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
}

/* Description Styling */
p.section-description {
  text-align: center;
  font-size: 1.25rem;
  font-style: italic;
  margin-bottom: 30px;
  color: #6c757d;
}

/* Buttons Styling */
.portfolio-buttons {
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.portfolio-btn {
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #2a9d8f;
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.portfolio-btn:hover {
  background-color: #264653; /* Darken button on hover */
  transform: translateY(-4px); /* Button lift effect */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); /* Enhanced shadow */
}

/* Portfolio Project Styling */
.portfolio-project {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.portfolio-project:hover {
  transform: translateY(-8px); /* Lift effect on project hover */
}

.project-title {
  font-size: 2.2rem;
  color: #264653; /* Dark title color */
  margin-bottom: 10px;
}

.project-role {
  font-size: 1.3rem;
  color: #e9c46a;
  margin-bottom: 15px;
  font-weight: 500;
}

.project-description {
  margin: 15px 0;
  font-size: 1.1rem;
  color: #333;
}

.project-contributions {
  list-style-type: none;
  padding: 0;
  margin-bottom: 15px;
}

.project-contributions li {
  font-size: 1rem;
  color: #6c757d;
  margin-bottom: 5px;
}

.project-technologies {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2a9d8f; /* Fresh color for technologies */
}

/* Responsive Design */
@media (max-width: 768px) {
  .portfolio-btn {
    padding: 12px 25px;
    font-size: 1.1rem;
  }

  .portfolio-project {
    padding: 15px;
  }

  h2.section-title {
    font-size: 2.8rem;
  }

  p.section-description {
    font-size: 1.1rem;
  }
}
</style>
