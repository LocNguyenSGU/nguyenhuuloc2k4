const projects = [
    {
        type: "advanced",
        startDate: "01/03/2025",
        endDate: "14/04/2025",
        title: "Backend Spotify",
        description: "Back end Django supply API relevant to spotify has technology like JWT, WebSocket, MySql, OpenAI, GenemiAI, Model training",
        link: "https://github.com/lamkbvn/BACKEND_SPOTIFY",
        "score": "9.5"
    },
    {
        type: "advanced",
        startDate: "01/3/2025",
        endDate: "14/04/2025",
        title: "Clone Spotify",
        description: "Frontend React Type Script clone Instagram using backend of Social Media",
        link: "https://github.com/duylam15/react-clone-spotify",
        "score": "9.5"
    },
    {
        type: "advanced",
        startDate: "23/02/2025",
        endDate: "14/04/2025",
        title: "Social Media",
        description: "Back end spring boot supply API relevant to social media like Instagram has technology like JWT, Redis, and Spring Security, WebSocket, RabitMQ, MySql, OpenAI, GenemiAI",
        link: "https://github.com/LocNguyenSGU/SocialMedia",
        "score": "9"
    },
    {
        type: "advanced",
        startDate: "23/02/2025",
        endDate: "15/04/2025",
        title: "Clone Instagram",
        description: "Frontend React Type Script clone Instagram using backend of Social Media",
        link: "https://github.com/duylam15/react-Instagram-clone",
        "score": "9"
    },
    {
        type: "advanced",
        startDate: "22/03/2025",
        endDate: "23/03/2025",
        title: "EduMind",
        description: "Developed an AI-powered learning platform that integrates mind mapping, summarization, exercises, and discussions using OpenAI",
        link: "https://github.com/LocNguyenSGU/Hackathon_Luong_Nghin_Do",
        "Hackathon": "Top 2"
    },
    {
        type: "advanced",
        startDate: "Dec 2024",
        endDate: "Now",
        title: "Calligo Backend",
        description: "A backend system built with Spring Boot using a microservices architecture to support real-time chat and voice/video calls.",
        link: "https://github.com/LocNguyenSGU/Calligo"
    },
    {
        type: "advanced",
        startDate: "Dec 2024",
        endDate: "Now",
        title: "Calligo Frontend",
        description: "A modern web-based chat and call application developed with React.js and Ant Design, providing a seamless real-time communication experience.",
        link: "https://github.com/LocNguyenSGU/Calligo-FE"
    },
    // {
    //     type: "basic",
    //     startDate: "Feb 2025",
    //     endDate: "Now",
    //     title: "Social Media",
    //     description: "Backend Springboot supply API relevant to social media like Instagram, and chat call feature like Messenger",
    //     link: "https://github.com/LocNguyenSGU/SocialMedia"
    // },
    {
        type: "basic",
        startDate: "Mar 2025",
        endDate: "Now",
        title: "Person Website",
        description: "Website to introduce myself, my projects, and my skills, dowload my CV, contact me",
        link: "https://github.com/LocNguyenSGU/nguyenhuuloc2k4"
    },
    {
        type: "advanced",
        startDate: "Nov 2024",
        endDate: "Sep 2024",
        title: "Flight Management System - Backend",
        description: 'Backend Spring Boot providing APIs for flight management, a project for the "Cong nghe phan mem" course.',
        link: "https://github.com/kietsocola/FlightManagementSystem",
        "score": "9"
    },
    {
        type: "advanced",
        startDate: "Nov 2024",
        endDate: "Sep 2024",
        title: "Flight Management System - Frontend",
        description: 'A React.js web application for flight management, a project for the "Cong nghe phan mem" course.',
        link: "https://github.com/duylam15/react-flight-management-system",
        "score": "9"
    },
    {
        type: "advanced",
        startDate: "Nov 2024",
        endDate: "Sep 2024",
        title: "Sport Field Booking System - Backend",
        description: 'Backend Spring Boot providing APIs for sport booking, a project for the "Cong nghe J2EE" course.',
        link: "https://github.com/LocNguyenSGU/SportFieldBookingSystem",
        score: "9"
    },
    {
        type: "basic",
        startDate: "Nov 2024",
        endDate: "Sep 2024",
        title: "Sport Field Booking System - Frontend",
        description: 'A React.js web application for sport booking, a project for the "Cong nghe J2EE" course.',
        link: "https://github.com/duylam15/react-sport-field-booking-system",
        score: "9"
    },
    {
        type: "advanced",
        startDate: "Feb 2024",
        endDate: "May 2024",
        title: "Tour Booking Website",
        description: 'A tour booking website built with PHP and MVC architecture, a project for the "Website nâng cao" course.',
        link: "https://github.com/lamkbvn/WEB2",
        score: "10"
    },
    {
        type: "advanced",
        startDate: "Feb 2024",
        endDate: "May 2024",
        title: "SGU Test System",
        description: 'A multiple-choice test management system built with Java Servlet and JSP, a project for the "Java Programming" course.',
        link: "https://github.com/LocNguyenSGU/SGU-Test",
        score: "10"
    },
    {
        type: "basic",
        startDate: "Sep 2023",
        endDate: "Dec 2023",
        title: "E-commerce Website",
        description: 'A basic e-commerce website built with HTML, CSS, and vanilla JavaScript, using local storage as the database. A project for the "Website Co Ban" course.',
        link: "https://github.com/LocNguyenSGU/DoAnWebN11",
        score: "9.5"
    },
    {
        type: "basic",
        startDate: "Jul 2023",
        endDate: "Jul 2023",
        title: "Music Player",
        description: 'A basic music website built with HTML, CSS, and vanilla JavaScript',
        link: "https://locnguyensgu.github.io/Music/",
    }
    
];

// Hàm chuyển đổi ngày dạng "MMM YYYY" thành đối tượng Date để so sánh
// function parseDate(dateStr) {
//     const [month, year] = dateStr.split(" ");
//     const monthIndex = new Date(Date.parse(month + " 1, 2000")).getMonth();
//     return new Date(year, monthIndex);
// }
function parseDate(dateStr) {
    if (dateStr === "Now") return new Date(); // Gán "Now" là ngày hiện tại
    const [month, year] = dateStr.split(" ");
    const monthIndex = new Date(Date.parse(month + " 1, 2000")).getMonth();
    return new Date(year, monthIndex);
}

// // Sắp xếp các dự án theo thời gian (endDate) từ gần nhất đến xa nhất
// projects.sort((a, b) => {
//     const dateA = parseDate(a.endDate);
//     const dateB = parseDate(b.endDate);
//     return dateB - dateA;
// });

// Sắp xếp các dự án theo thời gian (endDate), nếu bằng nhau thì so sánh startDate
projects.sort((a, b) => {
    const dateA = parseDate(a.endDate);
    const dateB = parseDate(b.endDate);

    // Nếu endDate giống nhau thì so sánh startDate
    if (dateA.getTime() === dateB.getTime()) {
        const startDateA = parseDate(a.startDate);
        const startDateB = parseDate(b.startDate);
        return startDateB - startDateA; // Cái nào bắt đầu sau thì xếp trước
    }
    return dateB - dateA;
});

// Nhóm các dự án theo endDate
const groupedByDate = projects.reduce((acc, project) => {
    const key = `${project.startDate} - ${project.endDate}`;
    if (!acc[key]) {
        acc[key] = [];
    }
    acc[key].push(project);
    return acc;
}, {});

// Lấy container và các nút
const timelineContainer = document.getElementById("timeline");
// const loadMoreBtn = document.getElementById("load-more");
// const collapseBtn = document.getElementById("collapse");

// Tính số lượng project-item
const dateKeys = Object.keys(groupedByDate);

// Hàm tạo và hiển thị tất cả project-item (chưa áp dụng giới hạn)
function createAllTimeline() {
    timelineContainer.innerHTML = '';
    dateKeys.forEach(date => {
        const projectGroup = groupedByDate[date];
        const basicProjects = projectGroup.filter(p => p.type === "basic");
        const advancedProjects = projectGroup.filter(p => p.type === "advanced");

        const projectItem = document.createElement("div");
        projectItem.className = "project-item flex justify-between mb-12 relative";

        const leftDiv = document.createElement("div");
        leftDiv.className = "w-1/2 pr-8 text-right";
        if (basicProjects.length > 0) {
            basicProjects.forEach(project => {
                const projectCard = document.createElement("div");
                projectCard.className = "project-card relative bg-gray-800 p-4 rounded-lg border-2 border-purple-500 mb-4";
                projectCard.innerHTML = `
                  ${project?.score ? `<span style="font-size: 14px; color: #f03939; font-weight: bold;">${project.score} điểm</span>` : ""}
                  ${project?.Hackathon ? `<span style="font-size: 14px; color: #f03939; font-weight: bold;">${project.Hackathon} -  Hackathon</span>` : ""}
                    <div class="date text-purple-600 text-sm mb-2">${project.startDate} - ${project.endDate}</div>
                    <h3 class="text-lg font-semibold mb-2 text-white">${project.title}</h3>
                    <p class="text-white text-sm mb-2">${project.description}</p>
                    <a href="${project.link}" target="_blank" class="text-purple-600 text-sm hover:underline">Link source</a>
                `;
                leftDiv.appendChild(projectCard);
            });
        }

        const dot = document.createElement("div");
        dot.className = "absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full z-10";

        const rightDiv = document.createElement("div");
        rightDiv.className = "w-1/2 pl-8";
        if (advancedProjects.length > 0) {
            advancedProjects.forEach(project => {
                const projectCard = document.createElement("div");
                projectCard.className = "project-card bg-gray-800 p-4 rounded-lg border-2 border-purple-500 mb-4";
                projectCard.innerHTML = `
                      ${project?.score ? `<span style="font-size: 14px; color: #f03939; font-weight: bold;">${project.score} điểm</span>` : ""}
                      ${project?.Hackathon ? `<span style="font-size: 14px; color: #f03939; font-weight: bold;">${project.Hackathon} - Hackathon</span>` : ""}
                    <div class="date text-purple-600 text-sm mb-2">${project.startDate} - ${project.endDate}</div>
                    <h3 class="text-lg font-semibold mb-2 text-white">${project.title}</h3>
                    <p class="text-white text-sm mb-2">${project.description}</p>
                    <a href="${project.link}" target="_blank" class="text-purple-600 text-sm hover:underline">Link source</a>
                `;
                rightDiv.appendChild(projectCard);
            });
        }

        projectItem.appendChild(leftDiv);
        projectItem.appendChild(dot);
        projectItem.appendChild(rightDiv);
        timelineContainer.appendChild(projectItem);
    });
}

// Hàm hiển thị các project-item theo số lượng giới hạn
function updateVisibility() {
    const items = document.querySelectorAll(".project-item");
    items.forEach((item, index) => {
        if (index < visibleItems) {
            item.classList.add("show");
        } else {
            item.classList.remove("show");
            item.classList.add("hide");
            setTimeout(() => {
                item.style.display = "none";
                item.classList.remove("hide"); // Xóa class hide sau khi animation hoàn tất
            }, 500); // Thời gian animation là 0.5s
        }
    });

}


// Tạo tất cả project-item ban đầu
createAllTimeline();
updateVisibility(); // Áp dụng giới hạn và animation

