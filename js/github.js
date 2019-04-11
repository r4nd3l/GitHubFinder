class Github{
	constructor(){
		this.client_id = '0b1b1bd2e0fd2b13f108';
		this.client_secret = 'a2e9cae12566e882854602f8644209267033fcc9';

		this.repos_count = 5;
		this.repos_sort = 'created: asc';
	}

	async getUser(user){
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret} `);

		const profile = await profileResponse.json();

		const repos = await repoResponse.json();

		return {
			profile,
			repos
		}
	}
}