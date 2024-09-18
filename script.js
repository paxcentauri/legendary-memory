const myProjects = [
    {
      title: 'Nexus Bots',
      description: 'Decentralizing warehouse server dependencies by enabling P2P communication in warehouse robots',
      imgSrc: '/assets/img/robots.jpeg',
      techStack: 'Python, C++, ROS, Docker',
      accomplishments: [
        'Designing a DDS communication infrastructure for a warehouse robotics system.',
        'Decentralizing server responsibilities by facilitating an intelligent task swapping algorithm.'
      ]
    },
    {
      title: 'RoomTone',
      description: 'An app that performs acoustic analysis of a room to provide enhanced audio quality from speakers.',
      imgSrc: '/assets/img/audio.jpg',
      techStack: 'Python, NumPy, Scikit-Learn, Pointcloud',
      accomplishments: [
        'Develop an acoustic ray-tracing algorithm of a 3D model room.',
        'Triangulated point-cloud surfaces and modelled sound absorption and reverberation.',
        'Won the Most Innovative Use of Qualcomm Snapdragon HDK'
      ],
      links: {
        demo: 'https://devpost.com/software/room-tone',
        source: 'https://github.com/hitarthdesai/room-tone'
      }
    },
    {
      title: 'Text Conference App',
      description: 'A client-server infrastructure that enables real-time text communication between multiple clients.',
      imgSrc: '/assets/img/chat.png',
      techStack: 'C, C++, Wireshark, GNU Debugger',
      accomplishments: [
        'Implemented server-side code in C, following TCP protocol standards and socket programming.',
        'Implemented client functionalities including user registrations and group messaging for up to 10 people synchronously.'
      ]
    },
    {
      title: 'GIS Mapper App',
      description: 'A GIS Based World Navigation System with fast and efficient routing algorithms.',
      imgSrc: '/assets/img/maps.png',
      techStack: 'C++, GNU Debugger, GtkLibrary, OpenStreetMap, Valgrind',
      accomplishments: [
        'Created an API based GIS Application in C++ using OSM Database and Gtk Library',
        'Extracted data into efficient data structures while reducing load time by 75%. Enhanced UI and UX'
      ]
    },
];

let insertionPoint = document.getElementById('project-insert');

let array_index = 1;

// Function to create a project card
function createProjectCard(project) {
    return `
        <div class="col s12 m6 l4">
        <div class="card medium">
            <div class="card-image waves-effect waves-block waves-light">
            <img alt="${project.title}" src="${project.imgSrc}" style="height: 100%; width: 100%" class="activator" />
            </div>
            <div class="card-content">
            <span class="card-title activator teal-text hoverline">${project.title}<i class="mdi-navigation-more-vert right"></i></span>
            <p>${project.description}</p>
            </div>
            <div class="card-reveal">
            <span class="card-title grey-text"><small>Accomplishments</small><i class="mdi-navigation-close right"></i></span>
            <ul>
                <li><b>Tech Stack:</b> ${project.techStack}</li>
                ${project.accomplishments.map(acc => `<li>${acc}</li>`).join('')}
            </ul>
            </div>
        </div>
        </div>
    `;
}

function loadAllProjects() {
    while (array_index < myProjects.length) {
        const project = myProjects[array_index];
        insertionPoint.innerHTML += createProjectCard(project);
        array_index++;
    }
    loadMoreButton.style.display = 'none'; // Hide button after all projects are loaded
}

insertionPoint.innerHTML += createProjectCard(myProjects[0]);

const loadMoreButton = document.getElementById('load-btn');

loadMoreButton.addEventListener('click', loadAllProjects);
