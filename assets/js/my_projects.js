const projects = [
    {
        type: "advanced",
        startDate: "03/03/2025",
        endDate: "22/05/2025",
        title: "NCKH: Nhận diện cảm xúc khuôn mặt",
        description: "Dự án NCKH phát triển hệ thống nhận diện biểu cảm khuôn mặt trong điều kiện ánh sáng yếu, sử dụng MobileNetV3 kết hợp thuật toán tăng cường dữ liệu thích ứng để điều chỉnh độ sáng và cải thiện độ chính xác.",
        link: "https://github.com/lamkbvn/DO_AN_PPNCKH",
        "score": "9.8"
    },
    {
        type: "advanced",
        startDate: "01/03/2025",
        endDate: "14/04/2025",
        title: "Backend Spotify",
        description: "Hệ thống backend Django cung cấp API cho ứng dụng Spotify, sử dụng các công nghệ như JWT, WebSocket, MySQL, OpenAI, GeminiAI và huấn luyện mô hình.",
        link: "https://github.com/lamkbvn/BACKEND_SPOTIFY",
        "score": "9.5"
    },
    {
        type: "advanced",
        startDate: "01/3/2025",
        endDate: "14/04/2025",
        title: "Clone Spotify",
        description: "Frontend React TypeScript xây dựng ứng dụng nghe nhạc giống Spotify, kết nối với backend Social Media.",
        link: "https://github.com/duylam15/react-clone-spotify",
        "score": "9.5"
    },
    {
        type: "advanced",
        startDate: "23/02/2025",
        endDate: "14/04/2025",
        title: "Social Media",
        description: "Backend Spring Boot cung cấp API cho mạng xã hội tương tự Instagram, tích hợp các công nghệ như JWT, Redis, Spring Security, WebSocket, RabbitMQ, MySQL, OpenAI, GeminiAI.",
        link: "https://github.com/LocNguyenSGU/SocialMedia",
        "score": "9"
    },
    {
        type: "advanced",
        startDate: "23/02/2025",
        endDate: "15/04/2025",
        title: "Clone Instagram",
        description: "Frontend React TypeScript xây dựng ứng dụng giống Instagram, kết nối với backend Social Media.",
        link: "https://github.com/duylam15/react-Instagram-clone",
        "score": "9"
    },
    {
        type: "advanced",
        startDate: "22/03/2025",
        endDate: "23/03/2025",
        title: "EduMind",
        description: "Phát triển nền tảng học tập ứng dụng AI tích hợp mind mapping, tóm tắt nội dung, bài tập và thảo luận bằng OpenAI.",
        link: "https://github.com/LocNguyenSGU/Hackathon_Luong_Nghin_Do",
        "Hackathon": "Top 2"
    },
    {
        type: "advanced",
        startDate: "Dec 2024",
        endDate: "Now",
        title: "Calligo Backend",
        description: "Hệ thống backend xây dựng bằng Spring Boot với kiến trúc microservices, hỗ trợ chat và gọi thoại/video theo thời gian thực.",
        link: "https://github.com/LocNguyenSGU/Calligo"
    },
    {
        type: "advanced",
        startDate: "Dec 2024",
        endDate: "Now",
        title: "Calligo Frontend",
        description: "Ứng dụng web chat và gọi hiện đại được phát triển bằng React.js và Ant Design, mang đến trải nghiệm giao tiếp thời gian thực mượt mà.",
        link: "https://github.com/LocNguyenSGU/Calligo-FE"
    },
    {
        type: "basic",
        startDate: "Mar 2025",
        endDate: "Now",
        title: "Person Website",
        description: "Website cá nhân để giới thiệu bản thân, các dự án và kỹ năng, tải CV và liên hệ.",
        link: "https://github.com/LocNguyenSGU/nguyenhuuloc2k4"
    },
    {
        type: "advanced",
        startDate: "Nov 2024",
        endDate: "Sep 2024",
        title: "Flight Management System - Backend",
        description: 'Backend Spring Boot cung cấp API cho hệ thống quản lý chuyến bay, dự án của môn "Công nghệ phần mềm".',
        link: "https://github.com/kietsocola/FlightManagementSystem",
        "score": "9"
    },
    {
        type: "advanced",
        startDate: "Nov 2024",
        endDate: "Sep 2024",
        title: "Flight Management System - Frontend",
        description: 'Ứng dụng web React.js cho hệ thống quản lý chuyến bay, dự án của môn "Công nghệ phần mềm".',
        link: "https://github.com/duylam15/react-flight-management-system",
        "score": "9"
    },
    {
        type: "advanced",
        startDate: "Nov 2024",
        endDate: "Sep 2024",
        title: "Sport Field Booking System - Backend",
        description: 'Backend Spring Boot cung cấp API cho hệ thống đặt sân thể thao, dự án của môn "Công nghệ J2EE".',
        link: "https://github.com/LocNguyenSGU/SportFieldBookingSystem",
        score: "9"
    },
    {
        type: "basic",
        startDate: "Nov 2024",
        endDate: "Sep 2024",
        title: "Sport Field Booking System - Frontend",
        description: 'Ứng dụng web React.js cho hệ thống đặt sân thể thao, dự án của môn "Công nghệ J2EE".',
        link: "https://github.com/duylam15/react-sport-field-booking-system",
        score: "9"
    },
    {
        type: "advanced",
        startDate: "Feb 2024",
        endDate: "May 2024",
        title: "Tour Booking Website",
        description: 'Website đặt tour du lịch xây dựng bằng PHP theo kiến trúc MVC, dự án của môn "Website nâng cao".',
        link: "https://github.com/lamkbvn/WEB2",
        score: "10"
    },
    {
        type: "advanced",
        startDate: "Feb 2024",
        endDate: "May 2024",
        title: "SGU Test System",
        description: 'Hệ thống thi trắc nghiệm được xây dựng bằng Java Servlet và JSP, dự án của môn "Lập trình Java".',
        link: "https://github.com/LocNguyenSGU/SGU-Test",
        score: "10"
    },
    {
        type: "basic",
        startDate: "Sep 2023",
        endDate: "Dec 2023",
        title: "E-commerce Website",
        description: 'Website thương mại điện tử cơ bản được xây dựng bằng HTML, CSS và JavaScript thuần, sử dụng Local Storage làm cơ sở dữ liệu. Dự án của môn "Website cơ bản".',
        link: "https://github.com/LocNguyenSGU/DoAnWebN11",
        score: "9.5"
    },
    {
        type: "basic",
        startDate: "Jul 2023",
        endDate: "Jul 2023",
        title: "Music Player",
        description: 'Website nghe nhạc cơ bản được xây dựng bằng HTML, CSS và JavaScript thuần.',
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

