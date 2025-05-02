// const username = "LocNguyenSGU";
const token = "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"; // 👈 dễ đổi sau này

const repoUrl = `https://api.github.com/users/LocNguyenSGU/repos`;
const userUrl = `https://api.github.com/users/LocNguyenSGU`;
const topic_tag = "me";

// Hàm gọi API có token
async function fetchWithToken(url) {
    const response = await fetch(url, {
        headers: {
            Authorization: `token ${token}`
        }
    });
    return response.json();
}

// Gọi khi load trang
$(document).ready(function () {
    repos();
    fetchGitHubData();
});

async function repos() {
    let page = 1;
    let count = 0;
    while (true) {
        const repos = await fetchWithToken(repoUrl + "?sort=updated&direction=desc&per_page=100&page=" + page);
        $("#loading").hide();

        if (!repos.length) break;

        for (let repo of repos) {
            if (repo.topics.includes(topic_tag)) {
                if (!repo.language) repo.language = "";
                if (repo.name.length > 30) repo.name = `${repo.name.substring(0, 30)}...`;
                if (repo.description && repo.description.length > 100) repo.description = `${repo.description.substring(0, 100)}...`;

                $("#repos").append(repoCard(repo));
                count++;
            }
        }

        page++;
    }

    if (count !== 0) {
        $("#repos-add").hide();
        $("#repos-title").show();
        $("#repos-all").show();
    }
}

function repoCard(repo) {
    return `
  <div class="rounded overflow-hidden shadow-lg bg-white dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700">
    <div class="p-6">
      <div class="font-bold text-xl text-gray-500 ">${repo.language}</div>
      <br>
      <a class="font-bold text-2xl text-gray-600 dark:text-gray-300" href="${repo.html_url}" target="_blank">
        <i class="fa-brands fa-buffer"></i>
        ${repo.name}
      </a>
      <p class="pt-4 text-base text-gray-500 dark:text-gray-400">
        ${repo.description || ""}
      </p>
    </div>
    <div class="pl-3 pt-4">
      <span class="inline-block px-3 text-sm font-semibold text-gray-600 dark:text-gray-400">
        <i class="fa-solid fa-star fa-2xs"></i>
        ${repo.stargazers_count}
      </span>
      <span class="inline-block px-3 text-sm font-semibold text-gray-600 dark:text-gray-400">
        <i class="fa-solid fa-code-fork fa-2xs"></i>
        ${repo.forks_count}
      </span>
      <span class="inline-block px-3 text-sm font-semibold text-gray-600 dark:text-gray-400">
        <i class="fa-solid fa-eye fa-2xs"></i>
        ${repo.watchers_count}
      </span>
      <span class="inline-block px-3 text-xs font-semibold text-gray-600 dark:text-gray-400">
        ${repo.size} MB
      </span>
    </div>
    <div class="pt-8 pl-4 pb-4">
      ${topicsSpan(repo)}
    </div>
  </div>`;
}

function topicsSpan(repo) {
    return repo.topics
        .filter(topic => topic !== topic_tag)
        .map(topic => `
            <span class="inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-400 mr-1 mb-1">
              #${topic}
            </span>
        `)
        .join("");
}

async function fetchGitHubData() {
    try {
        const userData = await fetchWithToken(userUrl);
        const reposData = await fetchWithToken(repoUrl);

        const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        console.log(reposData)
        console.log("Star lay duoc", totalStars)

        document.getElementById("repo-count").innerHTML = `
            <i class="fa-solid fa-diagram-project"></i> ${userData.public_repos} repositories
        `;
        document.getElementById("repo-count").href = `https://github.com/${username}?tab=repositories`;

        document.getElementById("follower-count").innerHTML = `
            <i class="fa-solid fa-users"></i> ${userData.followers} followers
        `;
        document.getElementById("follower-count").href = `https://github.com/${username}?tab=followers`;

        document.getElementById("star-count").innerHTML = `
            <i class="fa-solid fa-star"></i> ${totalStars} stars
        `;
        document.getElementById("star-count").href = `https://github.com/${username}?tab=repositories`;

        if (userData.location) {
            document.getElementById("location").innerHTML = `
                <i class="fa-solid fa-location-dot"></i> ${userData.location}
            `;
        } else {
            document.getElementById("location").style.display = "none";
        }

    } catch (error) {
        console.error("Error fetching GitHub data:", error);
    }
}