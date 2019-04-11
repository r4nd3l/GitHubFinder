// Default DevCorner JavaScript Setting
class UI {
	constructor(){
		this.profile = document.getElementById('profile');
	}

	// Display profile in UI
	showProfile(user){
		this.profile.innerHTML = `
			<div class="card card-body mb-3 dc_light dc_border box_shadow">
				<div class="row">
					<div class="col-md-3">
						<img class="img-fluid mb-2 rounded" src="${user.avatar_url}">
						<a href="${user.html_url}" target="_blank" class="btn dc_btn btn-block mb-4">View Profile</a>
					</div>
					<div class="col-md-9">
						<span class="badge badge-primary dc_bg_green p-2">Public Repos: ${user.public_repos}</span>
						<span class="badge badge-secondary dc_bg_green p-2">Public Gists: ${user.public_gists}</span>
						<span class="badge badge-success dc_bg_green p-2">Followers: ${user.Followers}</span>
						<span class="badge badge-info dc_bg_green p-2">Following: ${user.following}</span>
						<br>
						<br>
						<ul class="list-group">
							<li class="list-group-item dc_light dc_grey">Company: ${user.company}</li>
							<li class="list-group-item dc_light dc_grey">Website/Blog: ${user.blog}</li>
							<li class="list-group-item dc_light dc_grey">Location: ${user.location}</li>
							<li class="list-group-item dc_light dc_grey">Member Since: ${user.created_at}</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- <h3 class="page-heading mb-3 dc_grey">Latest Repos</h3> -->
			<div id="repos"></div>
		`;
	}

	// Show user repos
	showRepos(repos){
		let output = '';

		repos.forEach(function(repo){
			output += `
				<div class="card card-body mb-2 dc_border dc_light box_shadow">
					<div class="row">
						<div class="col-md-6">
							<a href="${repo.html_url}" target="_blank" class="dc_green">${repo.name}</a>
						</div>
						<div class="col-md-6">
							<span class="badge badge-primary dc_bg_green p-2">Stars: ${repo.stargazers_count}</span>
							<span class="badge badge-secondary dc_bg_green p-2">Watchers: ${repo.watchers}</span>
							<span class="badge badge-success dc_bg_green p-2">Forks: ${repo.forks_count}</span>
						</div>
					</div>
				</div>
			`;
		});

		// Output repos
		document.getElementById('repos').innerHTML = output;
	}

	// Show alert message
	showAlert(message, className){
		// Clear any remaining alerts
		this.clearAlert();

		// Create div
		const div = document.createElement('div');

		// Add classes
		div.className = className;

		// Add text
		div.appendChild(document.createTextNode(message));

		// Get parent
		const container = document.querySelector('.searchContainer');

		// Get search box
		const search = document.querySelector('.search');

		// Insert alert
		container.insertBefore(div, search);

		// Timeout after 3 seconds
		setTimeout(() => {
			this.clearAlert();
		}, 3000);
	}

	// Clear alert meassage
	clearAlert(){
		const currentAlert = document.querySelector('.alert');

		if (currentAlert) {
			currentAlert.remove();
		}
	}

	// Clear profile
	clearProfile(){
		this.profile.innerHTML = '';
	}
}
